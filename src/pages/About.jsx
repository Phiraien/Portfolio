import { motion } from 'motion/react';

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
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>I'm an engineering student who learns by building things and breaking them. I don't follow tutorials — I take systems apart to see how they work, then rebuild them better.</p>
            <p>Right now I'm deep in systems architecture, automation, and local AI. I work daily with PHP, Python, and Go, and tinker with game dev in Godot 4.5. My obsession is a self-hosted "AI OS" that runs fully on my own machine.</p>
            <p>Off-screen I'm usually optimizing for the two things that matter: <strong>time</strong> and <strong>understanding</strong>.</p>
          </motion.div>
          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="stat">
              <motion.span
                className="stat-num"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
              >
                4+
              </motion.span>
              <span>Projects Built</span>
            </div>
            <div className="stat">
              <motion.span
                className="stat-num"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.45 }}
              >
                3+
              </motion.span>
              <span>Years Building</span>
            </div>
            <div className="stat">
              <motion.span
                className="stat-num"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.6 }}
              >
                ∞
              </motion.span>
              <span>Curiosity</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
