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
            <p>Engineering student who learns by building things and breaking them. Every project, every failure — that's where the real lessons live. I don't just follow tutorials; I take things apart to understand how they work, then put them back together better.</p>
            <p>Currently deep in systems, automation, and local AI deployment. Working daily with PHP, Python, Java, and Go — building web apps, designing databases (Oracle, MySQL), and tinkering with game dev in Godot 4.5. Always optimizing for two things: <strong>time</strong> and <strong>understanding</strong>.</p>
            <p>My current obsession: building a personal AI OS — a local, private, self-hosted system that learns with me. Not because it's trendy, but because I want to understand exactly how the pieces fit together, from the database to the agent loop.</p>
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
                6+
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
