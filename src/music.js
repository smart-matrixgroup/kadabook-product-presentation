/*
 * Background music for the deck.
 *
 * 1. If `public/music.mp3` exists, that file is looped (drop any track you have the rights to there).
 * 2. Otherwise a soft, upbeat "corporate ambient" track is generated live with the Web Audio API:
 *    warm pad chords + bell arpeggio + round bass + light kick/hi-hat. Royalty-free, works offline.
 * Browsers only allow sound after a click/key press, so start() must be called from a user gesture.
 */

const BPM = 96;
const BEAT = 60 / BPM;
const STEP = BEAT / 2; // 8th notes

// I – V – vi – IV in C, voiced as 7ths/add9 for a modern feel (MIDI note numbers)
const CHORDS = [
  { root: 48, pad: [60, 64, 67, 71, 74] }, // Cmaj9
  { root: 43, pad: [59, 62, 67, 69, 74] }, // G6/9
  { root: 45, pad: [60, 64, 67, 69, 72] }, // Am7
  { root: 41, pad: [60, 65, 69, 72, 76] }, // Fmaj7
];
const ARP = [0, 2, 4, 2, 3, 1, 4, 3, 0, 2, 4, 2, 3, 4, 2, 1];

const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);

class Synth {
  constructor() {
    this.ctx = null;
    this.timer = null;
    this.step = 0;
    this.next = 0;
    this.on = false;
  }

  init() {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.ctx = ctx;
    this.master = ctx.createGain();
    this.master.gain.value = 0;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -18;
    comp.ratio.value = 3;
    this.master.connect(comp).connect(ctx.destination);

    // simple generated reverb
    this.reverb = ctx.createConvolver();
    const len = ctx.sampleRate * 2.8;
    const ir = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = ir.getChannelData(c);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6);
    }
    this.reverb.buffer = ir;
    const wet = ctx.createGain();
    wet.gain.value = 0.35;
    this.reverb.connect(wet).connect(this.master);

    // stereo-ish echo for the bells
    this.delay = ctx.createDelay(1);
    this.delay.delayTime.value = BEAT * 0.75;
    const fb = ctx.createGain();
    fb.gain.value = 0.32;
    const dl = ctx.createGain();
    dl.gain.value = 0.28;
    this.delay.connect(fb).connect(this.delay);
    this.delay.connect(dl).connect(this.master);

    // noise buffer for hats
    const nb = ctx.createBuffer(1, ctx.sampleRate * 0.2, ctx.sampleRate);
    const nd = nb.getChannelData(0);
    for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
    this.noise = nb;
  }

  out(node, dry = 1, rev = 0.5) {
    const g = this.ctx.createGain();
    g.gain.value = dry;
    node.connect(g).connect(this.master);
    if (rev) {
      const r = this.ctx.createGain();
      r.gain.value = rev;
      node.connect(r).connect(this.reverb);
    }
  }

  pad(notes, t, dur) {
    const ctx = this.ctx;
    const f = ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.setValueAtTime(700, t);
    f.frequency.linearRampToValueAtTime(1500, t + dur * 0.5);
    f.frequency.linearRampToValueAtTime(800, t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.055, t + 0.9);
    g.gain.setValueAtTime(0.055, t + dur - 0.6);
    g.gain.linearRampToValueAtTime(0, t + dur + 0.4);
    f.connect(g);
    this.out(g, 0.9, 0.6);
    notes.forEach((n) => {
      [-7, 7].forEach((cents) => {
        const o = ctx.createOscillator();
        o.type = 'sawtooth';
        o.frequency.value = hz(n);
        o.detune.value = cents;
        o.connect(f);
        o.start(t);
        o.stop(t + dur + 0.5);
      });
    });
  }

  bell(n, t, vel = 1) {
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    const o2 = ctx.createOscillator();
    o.type = 'triangle';
    o2.type = 'sine';
    o.frequency.value = hz(n);
    o2.frequency.value = hz(n) * 2.01;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.07 * vel, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0008, t + 0.9);
    const g2 = ctx.createGain();
    g2.gain.value = 0.25;
    o.connect(g);
    o2.connect(g2).connect(g);
    this.out(g, 0.8, 0.4);
    g.connect(this.delay);
    o.start(t);
    o2.start(t);
    o.stop(t + 1);
    o2.stop(t + 1);
  }

  bass(n, t, dur) {
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    o.type = 'sine';
    o.frequency.value = hz(n);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.16, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g);
    this.out(g, 1, 0);
    o.start(t);
    o.stop(t + dur + 0.05);
  }

  kick(t) {
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    o.frequency.setValueAtTime(130, t);
    o.frequency.exponentialRampToValueAtTime(45, t + 0.18);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.32, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.32);
    o.connect(g);
    this.out(g, 1, 0);
    o.start(t);
    o.stop(t + 0.35);
  }

  hat(t, vel = 1) {
    const ctx = this.ctx;
    const s = ctx.createBufferSource();
    s.buffer = this.noise;
    const f = ctx.createBiquadFilter();
    f.type = 'highpass';
    f.frequency.value = 7500;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.035 * vel, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.06);
    s.connect(f).connect(g);
    this.out(g, 1, 0.1);
    s.start(t);
    s.stop(t + 0.08);
  }

  schedule() {
    const ctx = this.ctx;
    while (this.next < ctx.currentTime + 0.25) {
      const s = this.step;
      const t = this.next;
      const bar = Math.floor(s / 8); // 8 eighths per bar
      const chord = CHORDS[Math.floor(bar / 2) % CHORDS.length]; // 2 bars per chord
      const inBar = s % 8;
      const section = Math.floor(s / 64) % 4; // 0 = intro (no drums), then full

      if (s % 16 === 0) this.pad(chord.pad, t, STEP * 16);
      // bells: sparse in intro, full arpeggio after
      if (section === 0 ? inBar % 2 === 0 : true) {
        const idx = ARP[s % 16] % chord.pad.length;
        this.bell(chord.pad[idx] + 12, t, inBar === 0 ? 1 : 0.7);
      }
      if (inBar === 0) this.bass(chord.root, t, BEAT * 1.8);
      if (inBar === 5) this.bass(chord.root + 7, t, BEAT * 0.9);
      if (section > 0) {
        if (inBar === 0 || inBar === 4) this.kick(t);
        if (inBar % 2 === 1) this.hat(t, inBar === 3 || inBar === 7 ? 1 : 0.6);
      }
      this.step++;
      this.next += STEP;
    }
  }

  async start(volume) {
    if (!this.ctx) this.init();
    await this.ctx.resume();
    if (!this.on) {
      this.on = true;
      this.next = this.ctx.currentTime + 0.1;
      this.timer = setInterval(() => this.schedule(), 50);
    }
    this.setVolume(volume);
  }

  setVolume(v) {
    if (!this.ctx) return;
    const g = this.master.gain;
    g.cancelScheduledValues(this.ctx.currentTime);
    g.setTargetAtTime(v * 0.9, this.ctx.currentTime, 0.6);
  }

  stop() {
    if (!this.ctx || !this.on) return;
    this.setVolume(0);
    const ctx = this.ctx;
    setTimeout(() => {
      clearInterval(this.timer);
      this.on = false;
      this.step = 0;
      ctx.suspend();
    }, 1800);
  }
}

class FileTrack {
  constructor(url) {
    this.el = new Audio(url);
    this.el.loop = true;
    this.el.volume = 0;
    this.fade = null;
  }
  ramp(to, then) {
    clearInterval(this.fade);
    this.fade = setInterval(() => {
      const v = this.el.volume + (to > this.el.volume ? 0.03 : -0.03);
      if (Math.abs(to - this.el.volume) < 0.035) {
        this.el.volume = to;
        clearInterval(this.fade);
        then?.();
      } else this.el.volume = Math.min(1, Math.max(0, v));
    }, 60);
  }
  async start(volume) {
    await this.el.play();
    this.ramp(volume);
  }
  setVolume(v) {
    this.ramp(v);
  }
  stop() {
    this.ramp(0, () => this.el.pause());
  }
}

let engine = null;
async function getEngine() {
  if (engine) return engine;
  try {
    const r = await fetch('music.mp3', { method: 'HEAD' });
    const type = r.headers.get('content-type') || '';
    engine = r.ok && type.startsWith('audio') ? new FileTrack('music.mp3') : new Synth();
  } catch {
    engine = new Synth();
  }
  return engine;
}

export const music = {
  async start(volume = 0.5) {
    const e = await getEngine();
    await e.start(volume);
  },
  setVolume(v) {
    engine?.setVolume(v);
  },
  stop() {
    engine?.stop();
  },
};
