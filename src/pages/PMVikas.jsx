import { motion } from 'motion/react';
import pmvikasEntries from '../data/pmvikas';

function groupByMonth(entries) {
  const map = new Map();
  for (const entry of entries) {
    const [year, month] = entry.date.split('-').map(Number);
    const key = `${year}-${String(month).padStart(2, '0')}`;
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(entry);
  }
  return map;
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function monthLabel(key) {
  const [year, month] = key.split('-').map(Number);
  return `${MONTH_NAMES[month - 1]} ${year}`;
}

function isSameDay(a, b) {
  if (!a || !b) return false;
  const [ay, am, ad] = a.split('-').map(Number);
  const [by, bm, bd] = b.split('-').map(Number);
  return ay === by && am === bm && ad === bd;
}

const today = new Date();
const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

export default function PMVikas() {
  const sorted = [...pmvikasEntries].reverse();
  const grouped = groupByMonth(sorted);
  const months = [...grouped.entries()].sort((a, b) => b[0].localeCompare(a[0]));

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
          Daily activity log for the internship.
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

        <div className="pmvikas-calendar-months">
          {months.map(([monthKey, entries]) => (
            <motion.div
              key={monthKey}
              className="pmvikas-month"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="pmvikas-month-title">{monthLabel(monthKey)}</h3>

              <div className="pmvikas-timeline">
                {entries.map((entry, i) => {
                  const day = Number(entry.date.split('-')[2]);
                  const isToday = isSameDay(entry.date, todayStr);
                  return (
                    <motion.article
                      key={entry.date + entry.title}
                      className={`pmvikas-day ${isToday ? 'pmvikas-day--today' : ''}`}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-20px' }}
                      transition={{ duration: 0.4, delay: i * 0.04 }}
                    >
                      <div className="pmvikas-day-marker">
                        <div className="pmvikas-day-dot" />
                        <span className="pmvikas-day-date">{day}</span>
                      </div>

                      <div className="pmvikas-day-card">
                        <div className="pmvikas-day-header">
                          <h4 className="pmvikas-title">{entry.title}</h4>
                          {isToday && <span className="pmvikas-badge">Today</span>}
                        </div>

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
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
