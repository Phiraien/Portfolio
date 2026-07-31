import { useEffect, useRef } from 'react';

export default function Waves({
  lineCount = 24,
  lineColor = '34, 211, 238',
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
      time += 0.005;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const spacing = h / (lineCount + 1);

      for (let i = 0; i < lineCount; i++) {
        const baseY = spacing * (i + 1);
        ctx.beginPath();

        for (let x = 0; x <= w; x += 2) {
          const t = x / w;
          const wave = Math.sin(t * 8 + time + i * 0.4) * 6
                    + Math.sin(t * 3 + time * 0.7 + i * 0.2) * 3
                    + Math.sin(t * 15 + time * 1.2 + i * 0.6) * 1.5;
          const y = baseY + wave;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        // Fade from center
        const centerDist = Math.abs(i / (lineCount - 1) - 0.5) * 2;
        const alpha = Math.max(0.03, 0.15 - centerDist * 0.15);

        ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      frame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, [lineCount, lineColor]);

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
