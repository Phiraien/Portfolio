import { useEffect, useRef, useState } from 'react';
import { useMotionValue, useMotionValueEvent, animate, useInView } from 'motion/react';

export default function NumberTicker({
  value,
  direction = 'up',
  delay = 0,
  decimalPlaces = 0,
  className = '',
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(direction === 'down' ? value : 0);
  const [displayedValue, setDisplayedValue] = useState(
    Number(value).toLocaleString('en-US', {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    })
  );

  useMotionValueEvent(motionValue, 'change', (latest) => {
    setDisplayedValue(
      Number(latest.toFixed(decimalPlaces)).toLocaleString('en-US', {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
      })
    );
  });

  useEffect(() => {
    if (!inView) return;

    const timeout = setTimeout(() => {
      animate(motionValue, direction === 'down' ? 0 : value, {
        duration: 5,
        ease: 'easeOut',
      });
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [inView, motionValue, value, direction, delay]);

  return (
    <span ref={ref} className={className}>
      {displayedValue}
    </span>
  );
}
