import SpotlightCard from './SpotlightCard';

const projects = [
  {
    title: 'OS Scheduling Algorithms',
    desc: 'Implementation of operating system scheduling algorithms — FCFS, SJF, Round Robin, and Priority Scheduling — with performance comparison.',
    tags: ['C', 'Algorithms'],
    url: 'https://github.com/Phiraien/OS-Scheduling-algos',
  },
  {
    title: 'Java-Nomies',
    desc: 'A collection of Java projects and exercises exploring object-oriented programming concepts through practical implementations.',
    tags: ['Java', 'OOP'],
    url: 'https://github.com/Phiraien/Java-Nomies',
  },
  {
    title: 'NewGen',
    desc: 'PHP e-commerce platform with checkout system, user authentication, product management, and game store integration.',
    tags: ['PHP', 'MySQL', 'E-Commerce'],
    url: 'https://github.com/Phiraien/NewGen',
  },
  {
    title: 'FileSync',
    desc: 'Premium dark-themed cloud file manager with drag & drop uploads, Supabase auth, real-time search, grid/list views, storage analytics, and Framer Motion animations.',
    tags: ['Next.js', 'React', 'Tailwind', 'Supabase'],
    url: 'https://github.com/Phiraien/filesync-app',
  },
  {
    title: 'Biodata Website',
    desc: 'Personal biodata and resume website — clean, responsive design built with HTML and CSS.',
    tags: ['HTML', 'CSS'],
    url: 'https://github.com/Phiraien/biodata-website',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <SpotlightCard key={p.title} className="project-card">
              <div className="card-top">
                <h3>{p.title}</h3>
                {p.tags.map((t) => (
                  <span className={`tag${t === 'Private' ? ' tag-private' : ''}`} key={t}>{t}</span>
                ))}
              </div>
              <p>{p.desc}</p>
              {p.url && (
                <a href={p.url} target="_blank" rel="noopener" className="card-link">
                  View on GitHub &rarr;
                </a>
              )}
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
