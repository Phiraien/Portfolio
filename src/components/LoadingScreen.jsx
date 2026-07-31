import { useEffect, useState, useRef } from 'react';
import { animate, useMotionValue, useMotionValueEvent } from 'motion/react';

export default function LoadingScreen({ onComplete }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState('0');

  useMotionValueEvent(motionValue, 'change', (latest) => {
    setDisplay(String(Math.round(latest)));
  });

  useEffect(() => {
    const controls = animate(motionValue, 100, {
      duration: 1.2,
      ease: 'easeOut',
      onComplete: () => {
        setTimeout(() => onComplete(), 400);
      },
    });
    return () => controls.stop();
  }, []);

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
        ref={ref}
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
