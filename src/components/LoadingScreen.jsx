import { useEffect, useState } from 'react';
import { animate, useMotionValue, useMotionValueEvent } from 'motion/react';

export default function LoadingScreen({ onComplete }) {
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState('0');

  useMotionValueEvent(motionValue, 'change', (latest) => {
    setDisplay(String(Math.round(latest)));
  });

  useEffect(() => {
    let raf;
    let finished = false;

    // Real progress: completed resources / all resources seen so far
    const measure = () => {
      const entries = performance.getEntriesByType('resource');
      const done = entries.filter((e) => e.responseEnd > 0).length;
      return entries.length > 0 ? done / entries.length : 0.15;
    };

    // Drive counter toward real progress, capped at 90 until fully loaded
    const tick = () => {
      if (finished) return;
      const real = measure() * 100;
      const target = Math.min(90, Math.max(motionValue.get(), real));
      motionValue.set(target);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Everything actually loaded (all assets + fonts) — complete to 100
    const finish = () => {
      if (finished) return;
      finished = true;
      cancelAnimationFrame(raf);
      animate(motionValue, 100, {
        duration: 0.4,
        ease: 'easeOut',
        onComplete: () => setTimeout(onComplete, 200),
      });
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish, { once: true });
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('load', finish);
    };
  }, [motionValue, onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000000',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <span
        style={{
          fontSize: '5rem',
          fontWeight: 700,
          letterSpacing: '-4px',
          color: '#22d3ee',
          fontVariantNumeric: 'tabular-nums',
          lineHeight: 1,
        }}
      >
        {display}
      </span>
      <span
        style={{
          fontSize: '0.85rem',
          color: '#8888a0',
          textTransform: 'uppercase',
          letterSpacing: '4px',
          marginTop: 12,
        }}
      >
        Loading
      </span>
    </div>
  );
}
