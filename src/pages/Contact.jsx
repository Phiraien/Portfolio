import { motion } from 'motion/react';
import ShinyText from '../components/ShinyText';
import '../components/ShinyText.css';
import BorderGlow from '../components/BorderGlow';
import '../components/BorderGlow.css';

export default function Contact() {
  return (
    <section id="contact" className="page-section">
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ShinyText text="Get in Touch" disabled={false} speed={2} className="" />
        </motion.h2>
        <motion.p
          className="contact-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Have a project in mind or just want to say hi? Let's talk.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <BorderGlow className="contact-card">
            <div className="contact-links">
              <a href="mailto:kerala.emperor2@gmail.com" className="btn">Email Me</a>
              <a href="https://github.com/Phiraien" target="_blank" rel="noopener" className="btn btn-outline">GitHub</a>
            </div>
          </BorderGlow>
        </motion.div>
      </div>
    </section>
  );
}
