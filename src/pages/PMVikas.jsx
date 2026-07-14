import { motion } from 'motion/react';
import pmvikasEntries from '../data/pmvikas';

export default function PMVikas() {
  const sorted = [...pmvikasEntries].reverse();

  return (
    <section className="page-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          PMVikas
        </motion.h2>

        <motion.p
          className="pmvikas-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Daily activity log for the PMVikas course.
        </motion.p>

        {sorted.length === 0 && (
          <motion.p
            className="pmvikas-empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            No entries yet. Add them in <code>src/data/pmvikas.js</code>.
          </motion.p>
        )}

        <div className="pmvikas-grid">
          {sorted.map((entry, i) => (
            <motion.article
              key={entry.date + entry.title}
              className="pmvikas-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="pmvikas-date">{entry.date}</div>
              <h3 className="pmvikas-title">{entry.title}</h3>
              <div className="pmvikas-content">
                {entry.content.split('\n').filter(Boolean).map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>
              {entry.tags && entry.tags.length > 0 && (
                <div className="pmvikas-tags">
                  {entry.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
