import { motion } from 'motion/react';
import BorderGlow from '../components/BorderGlow';
import '../components/BorderGlow.css';

const skills = [
  {
    title: 'Languages',
    items: ['PHP', 'Python', 'JavaScript', 'TypeScript', 'Java', 'Go', 'SQL', 'C'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Vite', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Backend & Tools',
    items: ['Supabase', 'MySQL', 'Oracle', 'REST APIs', 'Git', 'Godot', 'Linux'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="page-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills &amp; Tools
        </motion.h2>
        <div className="skills-grid">
          {skills.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <BorderGlow className="skill-cat" backgroundColor="#1a1a28" borderRadius={16} glowRadius={16} colors={['#6b6bf0', '#ff9ffc', '#6b6bf0']}>
                <h3>{cat.title}</h3>
                <ul className="skill-pills">
                  {cat.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
