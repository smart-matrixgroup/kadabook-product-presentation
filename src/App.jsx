import { useCallback, useEffect, useLayoutEffect, useRef, useState, lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, LayoutGrid, NotebookText, Maximize, MonitorPlay, X, Keyboard, Music, Languages } from 'lucide-react';
import { SLIDES } from './slides.jsx';
import { LangContext, LANGS } from './components/ui.jsx';
import { music } from './music.js';

const Scene3D = lazy(() => import('./components/Scene3D.jsx'));

const W = 1600;
const H = 900;
const CHANNEL = 'kadabook-deck';

function readHash() {
  const n = parseInt((window.location.hash.match(/s=(\d+)/) || [])[1], 10);
  return Number.isFinite(n) ? Math.min(Math.max(n - 1, 0), SLIDES.length - 1) : 0;
}

/** Scales a fixed 1600×900 stage to fit any screen/projector, letterboxed. */
function useStageScale() {
  const [s, setS] = useState(1);
  useLayoutEffect(() => {
    const fit = () => setS(Math.min(window.innerWidth / W, window.innerHeight / H));
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);
  return s;
}

export default function App() {
  const [i, setI] = useState(readHash);
  const [dir, setDir] = useState(1);
  const [notes, setNotes] = useState(false);
  const [grid, setGrid] = useState(false);
  const [help, setHelp] = useState(false);
  const [lang, setLang] = useState(() => localStorage.getItem('kb-lang') || 'en');
  const [playing, setPlaying] = useState(false);
  const [vol, setVol] = useState(() => Number(localStorage.getItem('kb-vol') || 0.5));
  const scale = useStageScale();

  useEffect(() => {
    localStorage.setItem('kb-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);
  const cycleLang = useCallback(() => setLang((l) => LANGS[(LANGS.findIndex((x) => x.id === l) + 1) % LANGS.length].id), []);

  const toggleMusic = useCallback(() => {
    setPlaying((p) => {
      if (p) music.stop();
      else music.start(vol).catch(() => setPlaying(false));
      return !p;
    });
  }, [vol]);
  useEffect(() => {
    localStorage.setItem('kb-vol', String(vol));
    if (playing) music.setVolume(vol);
  }, [vol, playing]);
  const chan = useRef(null);
  const iRef = useRef(i);
  iRef.current = i;
  const total = SLIDES.length;

  const go = useCallback(
    (n, fromRemote = false) => {
      setI((cur) => {
        const next = Math.min(Math.max(n, 0), total - 1);
        if (next !== cur) setDir(next > cur ? 1 : -1);
        if (!fromRemote) chan.current?.postMessage({ type: 'goto', i: next });
        return next;
      });
    },
    [total],
  );

  // sync with presenter window
  useEffect(() => {
    if (!('BroadcastChannel' in window)) return;
    const c = new BroadcastChannel(CHANNEL);
    chan.current = c;
    c.onmessage = (e) => {
      if (e.data?.type === 'goto') go(e.data.i, true);
      if (e.data?.type === 'hello') c.postMessage({ type: 'goto', i: iRef.current });
    };
    return () => c.close();
  }, [go]);

  useEffect(() => {
    history.replaceState(null, '', `#s=${i + 1}`);
  }, [i]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === 'INPUT') return;
      const k = e.key;
      if (['ArrowRight', 'PageDown', ' ', 'Enter'].includes(k)) {
        e.preventDefault();
        go(iRef.current + 1);
      } else if (['ArrowLeft', 'PageUp', 'Backspace'].includes(k)) {
        e.preventDefault();
        go(iRef.current - 1);
      } else if (k === 'Home') go(0);
      else if (k === 'End') go(total - 1);
      else if (k === 'n' || k === 'N') setNotes((v) => !v);
      else if (k === 'g' || k === 'G' || k === 'o' || k === 'O') setGrid((v) => !v);
      else if (k === 'f' || k === 'F') toggleFull();
      else if (k === 'p' || k === 'P') openPresenter();
      else if (k === 'm' || k === 'M') toggleMusic();
      else if (k === 'l' || k === 'L') cycleLang();
      else if (k === '1') setLang('en');
      else if (k === '2') setLang('si');
      else if (k === '3') setLang('ta');
      else if (k === '?' || k === 'h' || k === 'H') setHelp((v) => !v);
      else if (k === 'Escape') {
        setGrid(false);
        setHelp(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, total, toggleMusic, cycleLang]);

  // swipe on touch screens
  const touch = useRef(null);
  const onTouchStart = (e) => (touch.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touch.current == null) return;
    const dx = e.changedTouches[0].clientX - touch.current;
    if (Math.abs(dx) > 60) go(iRef.current + (dx < 0 ? 1 : -1));
    touch.current = null;
  };

  const S = SLIDES[i];
  const Slide = S.C;
  const nav = (s) => s.nav[lang] || s.nav.en;

  return (
    <LangContext.Provider value={lang}>
    <div className={`app lang-${lang}`} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className="bg-mesh" />
      <Suspense fallback={null}>
        <Scene3D slide={i} />
      </Suspense>
      <div className="bg-grain" />

      <div className="stage-host">
        <div className="stage" style={{ width: W, height: H, transform: `scale(${scale})` }}>
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={`${S.id}-${lang}`}
              className="slide-frame"
              custom={dir}
              initial={{ opacity: 0, x: dir * 120, rotateY: dir * -8, filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, rotateY: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: dir * -120, rotateY: dir * 8, filter: 'blur(10px)' }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <Slide />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* top progress */}
      <div className="progress">
        <motion.div className="progress-fill" animate={{ width: `${((i + 1) / total) * 100}%` }} transition={{ duration: 0.6 }} />
      </div>

      {/* chapter label */}
      <div className="chapter">
        <img src="assets/kadabook-logo.png" alt="" />
        <span>KadaBook</span>
        <i />
        <AnimatePresence mode="wait">
          <motion.em key={nav(S)} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
            {nav(S)}
          </motion.em>
        </AnimatePresence>
      </div>

      {/* language + music (top right) */}
      <div className="topbar">
        <div className="lang-switch" role="group" aria-label="Language">
          <Languages size={16} />
          {LANGS.map((x) => (
            <button key={x.id} className={lang === x.id ? 'on' : ''} onClick={() => setLang(x.id)} title={`${x.name} (L)`}>
              {lang === x.id && <motion.span layoutId="lang-pill" className="lang-pill" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
              <b>{x.label}</b>
            </button>
          ))}
        </div>
        <div className={`music-pill ${playing ? 'on' : ''}`}>
          <button onClick={toggleMusic} title="Background music (M)">
            {playing ? (
              <span className="eq"><i /><i /><i /><i /></span>
            ) : (
              <Music size={17} />
            )}
          </button>
          {playing && (
            <input type="range" min={0} max={1} step={0.05} value={vol} onChange={(e) => setVol(+e.target.value)} title="Volume" />
          )}
        </div>
      </div>

      {/* dock */}
      <div className="dock">
        <button onClick={() => go(i - 1)} disabled={i === 0} title="Previous (←)">
          <ChevronLeft size={20} />
        </button>
        <div className="dots">
          {SLIDES.map((s, k) => (
            <button key={s.id} className={k === i ? 'on' : ''} onClick={() => go(k)} title={nav(s)} />
          ))}
        </div>
        <span className="count">
          {String(i + 1).padStart(2, '0')} / {total}
        </span>
        <button onClick={() => go(i + 1)} disabled={i === total - 1} title="Next (→ / Space)">
          <ChevronRight size={20} />
        </button>
        <span className="sep" />
        <button className={notes ? 'act' : ''} onClick={() => setNotes((v) => !v)} title="Speaker notes (N)">
          <NotebookText size={18} />
        </button>
        <button onClick={() => setGrid(true)} title="All slides (G)">
          <LayoutGrid size={18} />
        </button>
        <button onClick={openPresenter} title="Presenter window (P)">
          <MonitorPlay size={18} />
        </button>
        <button onClick={toggleFull} title="Full screen (F)">
          <Maximize size={18} />
        </button>
        <button onClick={() => setHelp((v) => !v)} title="Shortcuts (?)">
          <Keyboard size={18} />
        </button>
      </div>

      {/* speaker notes drawer */}
      <AnimatePresence>
        {notes && (
          <motion.aside
            className="notes"
            initial={{ x: 480, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 480, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          >
            <div className="notes-head">
              <span>
                Speaker notes · {i + 1}/{total} · <b>{S.time}</b>
              </span>
              <button onClick={() => setNotes(false)}>
                <X size={18} />
              </button>
            </div>
            <h3>{nav(S)}</h3>
            <p className="notes-ta">{S.ta}</p>
            <h6>Must mention</h6>
            <ul>
              {S.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            {SLIDES[i + 1] && <div className="notes-next">Next → {nav(SLIDES[i + 1])}</div>}
          </motion.aside>
        )}
      </AnimatePresence>

      {/* overview grid */}
      <AnimatePresence>
        {grid && (
          <motion.div className="overview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setGrid(false)}>
            <div className="ov-grid" onClick={(e) => e.stopPropagation()}>
              {SLIDES.map((s, k) => (
                <motion.button
                  key={s.id}
                  className={k === i ? 'ov on' : 'ov'}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: k * 0.025 }}
                  onClick={() => {
                    go(k);
                    setGrid(false);
                  }}
                >
                  <span>{String(k + 1).padStart(2, '0')}</span>
                  <b>{nav(s)}</b>
                  <small>{s.time}</small>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {help && (
          <motion.div className="help" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}>
            <b>Shortcuts</b>
            <span><kbd>→</kbd> <kbd>Space</kbd> next · <kbd>←</kbd> back</span>
            <span><kbd>N</kbd> speaker notes · <kbd>G</kbd> all slides</span>
            <span><kbd>P</kbd> presenter window (open on laptop, show this on projector)</span>
            <span><kbd>L</kbd> language · <kbd>1</kbd> English <kbd>2</kbd> සිංහල <kbd>3</kbd> தமிழ்</span>
            <span><kbd>M</kbd> music on / off</span>
            <span><kbd>F</kbd> full screen · clicker / PageDown works too</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </LangContext.Provider>
  );
}

function toggleFull() {
  if (document.fullscreenElement) document.exitFullscreen();
  else document.documentElement.requestFullscreen?.();
}

function openPresenter() {
  const url = `${location.pathname}?presenter=1${location.hash}`;
  window.open(url, 'kadabook-presenter', 'width=1100,height=760');
}
