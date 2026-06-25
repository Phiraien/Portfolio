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
    desc: 'Private repository — currently under development.',
    tags: ['Private'],
    url: null,
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.title}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
