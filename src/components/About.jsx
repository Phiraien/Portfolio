import { useEffect, useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (reduced || !ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [reduced]);

  return (
    <section id="about" ref={ref} style={reduced ? {} : { opacity: 0, transform: 'translateY(30px)', transition: 'all 0.6s ease-out' }}>
      <div className="container">
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>Engineering student passionate about systems, automation, and game development. I learn by building things and breaking them — every failure teaches something new.</p>
            <p>Currently working with PHP, Python, and Java. I enjoy system architecture, web development, database design, and game dev with Godot. Always looking for the next thing to build.</p>
          </div>
          <div className="about-stats">
            <div className="stat"><span className="stat-num">5+</span><span>Projects Built</span></div>
            <div className="stat"><span className="stat-num">5</span><span>Languages</span></div>
            <div className="stat"><span className="stat-num">∞</span><span>Curiosity</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
