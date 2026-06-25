import Magnet from '../components/Magnet';
import BorderGlow from '../components/BorderGlow';
import '../components/BorderGlow.css';

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
            <Magnet key={cat.title} padding={60} magnetStrength={1.5} activeTransition="transform 0.2s ease-out" wrapperClassName="magnet-wrap">
              <BorderGlow className="skill-cat" backgroundColor="#1a1a28" borderRadius={16} glowRadius={16} colors={['#6b6bf0', '#ff9ffc', '#6b6bf0']}>
                <h3>{cat.title}</h3>
                <ul>{cat.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </BorderGlow>
            </Magnet>
          ))}
        </div>
      </div>
    </section>
  );
}
