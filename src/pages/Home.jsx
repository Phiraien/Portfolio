import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import GradientText from '../components/GradientText';
import '../components/GradientText.css';

const roles = [
  'Engineering Student',
  'Developer',
  'Builder',
  'Systems Thinker',
];

function Typewriter({ words }) {
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timer = setTimeout(
      () => {
        if (!deleting) {
          if (charIdx < current.length) {
            setCharIdx(charIdx + 1);
          } else {
            setTimeout(() => setDeleting(true), 2000);
          }
        } else {
          if (charIdx > 0) {
            setCharIdx(charIdx - 1);
          } else {
            setDeleting(false);
            setWordIdx((wordIdx + 1) % words.length);
          }
        }
      },
      deleting ? 40 : 80,
    );
    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx, words]);

  return (
    <span className="typewriter-text">
      {words[wordIdx].slice(0, charIdx)}
      <span className="typewriter-cursor">|</span>
    </span>
  );
}

export default function Home() {
  return (
    <section id="hero" className="page-hero">
      <motion.div
        className="hero-bg-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
      />
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <GradientText
            colors={['#6b6bf0', '#ff9ffc', '#6b6bf0']}
            animationSpeed={6}
            direction="horizontal"
            className="hero-name"
          >
            Phi Raien
          </GradientText>
        </motion.div>

        <motion.p
          className="tagline typewriter-line"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{ marginTop: 16 }}
        >
          <Typewriter words={roles} />
        </motion.p>

        <motion.p
          className="sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          I learn by building things and breaking them. Every failure teaches something new.
        </motion.p>

        <motion.div
          className="hero-brief"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <p>
            Currently deep in systems architecture, automation, and local AI — working daily with{' '}
            <strong>PHP</strong>, <strong>Python</strong>, <strong>Java</strong>, databases, and game dev with Godot.
          </p>
          <p>
            Every project is a chance to understand how systems fit together — from databases and APIs to
            agent loops and deployment pipelines. I don't copy-paste solutions; I tear them apart first.
          </p>
        </motion.div>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <a href="/Portfolio/projects" className="btn">View Projects</a>
          <a href="/Portfolio/about" className="btn btn-outline">About Me</a>
        </motion.div>
      </div>
    </section>
  );
}
