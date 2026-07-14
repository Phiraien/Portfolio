import { motion } from 'motion/react';

const focuses = ['Systems', 'Local AI', 'Automation', 'Game Dev'];

export default function About() {
  return (
    <section id="about" className="page-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              I'm an engineering student who learns by <span className="hl">building things and breaking them</span>.
              I don't follow tutorials — I take systems apart to see how they work, then rebuild them better.
            </p>
            <p>
              Right now I'm deep in systems architecture, automation, and local AI. I work daily with PHP, Python,
              and Go, and tinker with game dev in Godot 4.5. My current obsession is a self-hosted{' '}
              <span className="hl">"AI OS"</span> that runs fully on my own machine.
            </p>
            <p>
              Off-screen I'm usually optimizing for the two things that matter: <strong>time</strong> and{' '}
              <strong>understanding</strong>.
            </p>
            <div className="about-focus">
              <span className="about-focus-label">Currently into</span>
              <div className="about-focus-tags">
                {focuses.map((f) => (
                  <span className="tag" key={f}>{f}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="stat">
              <span className="stat-num">4+</span>
              <span>Projects</span>
            </div>
            <div className="stat">
              <span className="stat-num">3+</span>
              <span>Years</span>
            </div>
            <div className="stat">
              <span className="stat-num">∞</span>
              <span>Curiosity</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
