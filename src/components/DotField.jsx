import { useEffect, useRef } from 'react';

export default function DotField({
  dotRadius = 2,
  dotSpacing = 16,
  className = '',
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let frame;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      time += 0.02;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const cols = Math.ceil(w / dotSpacing);
      const rows = Math.ceil(h / dotSpacing);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const bx = c * dotSpacing + dotSpacing / 2;
          const by = r * dotSpacing + dotSpacing / 2;
          const dx = bx / w;
          const dy = by / h;

          // Wave displacement
          const waveX = Math.sin(dy * 6 + time * 2) * 4;
          const waveY = Math.cos(dx * 5 + time * 1.6) * 4;

          const x = bx + waveX;
          const y = by + waveY;

          // Pulse opacity
          const pulse = 0.4 + 0.3 * Math.sin(dx * 8 + dy * 7 + time * 3);
          // Fade from center
          const dist = Math.sqrt((dx - 0.5) ** 2 + (dy - 0.5) ** 2);
          const alpha = Math.max(0.05, pulse - dist * 0.4);

          ctx.beginPath();
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(34, 211, 238, ${alpha})`;
          ctx.fill();
        }
      }

      frame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, [dotRadius, dotSpacing]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
