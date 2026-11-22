import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Timer, RotateCcw } from 'lucide-react';
import { SLIDES } from './slides.jsx';

/**
 * Presenter console — open with P from the deck. Shows notes, next slide and a timer,
 * and drives the deck window (projector) through a BroadcastChannel.
 */
export default function Presenter() {
  const [i, setI] = useState(0);
  const [start, setStart] = useState(Date.now());
  const [now, setNow] = useState(Date.now());
  const chan = useRef(null);
  const iRef = useRef(0);
  iRef.current = i;

  useEffect(() => {
    const c = new BroadcastChannel('kadabook-deck');
    chan.current = c;
    c.onmessage = (e) => {
      if (e.data?.type === 'goto') setI(e.data.i);
    };
    c.postMessage({ type: 'hello' });
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => {
      c.close();
      clearInterval(t);
    };
  }, []);

  const go = (n) => {
    const next = Math.min(Math.max(n, 0), SLIDES.length - 1);
    setI(next);
    chan.current?.postMessage({ type: 'goto', i: next });
  };

  useEffect(() => {
    const onKey = (e) => {
      if (['ArrowRight', 'PageDown', ' ', 'Enter'].includes(e.key)) {
        e.preventDefault();
        go(iRef.current + 1);
      } else if (['ArrowLeft', 'PageUp', 'Backspace'].includes(e.key)) {
        e.preventDefault();
        go(iRef.current - 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const S = SLIDES[i];
  const N = SLIDES[i + 1];
  const secs = Math.floor((now - start) / 1000);
  const mm = String(Math.floor(secs / 60)).padStart(2, '0');
  const ss = String(secs % 60).padStart(2, '0');

  return (
    <div className="presenter">
      <header>
        <img src="assets/kadabook-logo.png" alt="" />
        <b>KadaBook · Presenter</b>
        <span className="p-count">
          Slide {i + 1} / {SLIDES.length}
        </span>
        <span className="p-timer">
          <Timer size={18} /> {mm}:{ss}
          <button onClick={() => setStart(Date.now())} title="Reset timer">
            <RotateCcw size={15} />
          </button>
        </span>
      </header>
      <main>
        <section className="p-now">
          <small>Now · suggested {S.time}</small>
          <h1>{S.nav}</h1>
          <p className="p-ta">{S.ta}</p>
          <h6>Must mention</h6>
          <ul>
            {S.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </section>
        <aside>
          <div className="p-next">
            <small>Next</small>
            <h3>{N ? N.nav : '— end —'}</h3>
            {N && <ul>{N.points.slice(0, 2).map((p) => <li key={p}>{p}</li>)}</ul>}
          </div>
          <div className="p-list">
            {SLIDES.map((s, k) => (
              <button key={s.id} className={k === i ? 'on' : ''} onClick={() => go(k)}>
                <span>{String(k + 1).padStart(2, '0')}</span> {s.nav}
              </button>
            ))}
          </div>
        </aside>
      </main>
      <footer>
        <button onClick={() => go(i - 1)} disabled={i === 0}>
          <ChevronLeft /> Back
        </button>
        <button className="primary" onClick={() => go(i + 1)} disabled={i === SLIDES.length - 1}>
          Next <ChevronRight />
        </button>
      </footer>
    </div>
  );
}
