import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';

export const ease = [0.22, 1, 0.36, 1];

/* ─── language: 'en' | 'si' | 'ta' ─── */
export const LANGS = [
  { id: 'en', label: 'EN', name: 'English' },
  { id: 'si', label: 'සිං', name: 'සිංහල' },
  { id: 'ta', label: 'தமி', name: 'தமிழ்' },
];
export const LangContext = createContext('en');
export const useLang = () => useContext(LangContext);
/** l(english, sinhala, tamil) → the text for the current language. */
export function useL() {
  const lang = useContext(LangContext);
  return (en, si, ta) => (lang === 'si' ? si : lang === 'ta' ? ta : en);
}

/** Stagger container: children using <Rise> animate in sequence when the slide mounts. */
export function Stagger({ children, className, delay = 0.08, gap = 0.08, style }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  );
}

export function Rise({ children, className, style, y = 28, as = 'div' }) {
  const C = motion[as];
  return (
    <C
      className={className}
      style={style}
      variants={{
        hidden: { opacity: 0, y, filter: 'blur(8px)' },
        show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease } },
      }}
    >
      {children}
    </C>
  );
}

/** A real phone frame with the app screenshot, tilting in 3D toward the pointer. */
export function Phone({ src, alt = '', width = 270, tilt = 14, rotate = 0, delay = 0, glow = '#2563EB', float = true, style }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [tilt, -tilt]), { stiffness: 140, damping: 16 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-tilt, tilt]), { stiffness: 140, damping: 16 });

  function onMove(e) {
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      className="phone-wrap"
      style={{ width, perspective: 1200, ...style }}
      initial={{ opacity: 0, y: 60, rotateZ: rotate * 1.6, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, rotateZ: rotate, scale: 1 }}
      transition={{ duration: 1, delay, ease }}
    >
      <motion.div
        ref={ref}
        className={float ? 'phone float' : 'phone'}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry, '--glow': glow, animationDelay: `${delay * -2}s` }}
      >
        <div className="phone-screen">
          <div className="phone-status">
            <span className="ps-time">9:41</span>
            <span className="ps-island" />
            <span className="ps-icons">
              <i className="ps-signal"><b /><b /><b /><b /></i>
              <i className="ps-wifi" />
              <i className="ps-batt" />
            </span>
          </div>
          <div className="phone-app">
            <img src={src} alt={alt} draggable="false" />
          </div>
          <div className="phone-home"><span /></div>
          <div className="phone-sheen" />
        </div>
      </motion.div>
      <div className="phone-shadow" />
    </motion.div>
  );
}

/** Counts up to `to` once mounted. */
export function Counter({ to, prefix = '', suffix = '', duration = 1.6, decimals = 0 }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    const c = animate(0, to, { duration, ease, onUpdate: (x) => setV(x) });
    return () => c.stop();
  }, [to, duration]);
  const shown = v.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return (
    <span className="num">
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}

export function Glass({ children, className = '', style, hover = true, ...rest }) {
  return (
    <motion.div
      className={`glass ${className}`}
      style={style}
      whileHover={hover ? { y: -6, scale: 1.015 } : undefined}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function IconTile({ icon: Icon, tone = 'blue', size = 52 }) {
  return (
    <div className={`icon-tile tone-${tone}`} style={{ width: size, height: size }}>
      <Icon size={size * 0.48} strokeWidth={2.2} />
    </div>
  );
}

export function Kicker({ children, tone = 'blue' }) {
  return <div className={`kicker tone-${tone}`}>{children}</div>;
}

export function Title({ children, sub, ta }) {
  return (
    <>
      <Rise as="h2" className="title">
        {children}
      </Rise>
      {ta && (
        <Rise className="ta-line" y={16}>
          {ta}
        </Rise>
      )}
      {sub && (
        <Rise className="sub" y={16}>
          {sub}
        </Rise>
      )}
    </>
  );
}
