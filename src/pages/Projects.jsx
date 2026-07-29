import { motion } from 'motion/react';
import SpotlightCard from '../components/SpotlightCard';
import BorderGlow from '../components/BorderGlow';
import '../components/BorderGlow.css';

const projects = [
  {
    title: 'FileSync',
    desc: 'Premium dark-themed cloud file manager with drag & drop uploads, Supabase auth, and Framer Motion animations. Built with Next.js, Tailwind CSS v4.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    url: 'https://github.com/Phiraien/filesync-app',
  },
  {
    title: 'NewGen',
    desc: 'PHP e-commerce platform with checkout system, user authentication, product management, and game integration.',
    tags: ['PHP', 'MySQL', 'E-commerce'],
    url: 'https://github.com/Phiraien/NewGen',
  },
  {
    title: 'Go Programs',
    desc: 'Small Go HTTP services: hello-server, calculator, URL shortener, and more — exploring concurrency and microservice patterns.',
    tags: ['Go', 'REST', 'Microservices'],
    url: 'https://github.com/Phiraien/go-programs',
  },
  {
    title: 'Biodata',
    desc: 'Personal biodata and resume website — clean HTML & CSS.',
    tags: ['HTML', 'CSS'],
    url: 'https://github.com/Phiraien/biodata-website',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="page-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <a href={p.url || '#'} target="_blank" rel="noopener" className="project-link-wrap">
                <BorderGlow className="project-card-wrap">
                  <SpotlightCard className="project-card">
                    <div className="card-top">
                      <h3>{p.title}</h3>
                      {p.tags.map((t) => (
                        <span className="tag" key={t}>{t}</span>
                      ))}
                    </div>
                    <p>{p.desc}</p>
                    {p.url && (
                      <span className="card-link">
                        View on GitHub &rarr;
                      </span>
                    )}
                  </SpotlightCard>
                </BorderGlow>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
