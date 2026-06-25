const skills = [
  { title: 'Languages', items: ['PHP', 'Python', 'JavaScript', 'Java', 'SQL'] },
  { title: 'Frontend', items: ['HTML / CSS', 'Tailwind CSS', 'Canvas / JS', 'Preline'] },
  { title: 'Backend & DB', items: ['Oracle', 'MySQL', 'REST APIs'] },
  { title: 'Tools', items: ['Git / GitHub', 'Godot 4.5', 'WSL'] },
];

export default function Skills() {
  return (
    <section id="skills" className="page-section">
      <div className="container">
        <h2>Skills &amp; Tools</h2>
        <div className="skills-grid">
          {skills.map((cat) => (
            <div className="skill-cat" key={cat.title}>
              <h3>{cat.title}</h3>
              <ul>{cat.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
