import GradientText from '../components/GradientText';
import '../components/GradientText.css';

export default function Home() {
  return (
    <section id="hero" className="page-hero">
      <div className="container hero-content">
        <GradientText
          colors={['#6b6bf0', '#ff9ffc', '#6b6bf0']}
          animationSpeed={6}
          direction="horizontal"
          className="hero-name"
        >
          Phi Raien
        </GradientText>

        <p className="tagline" style={{ marginTop: 16 }}>
          Engineering Student &middot; Developer &middot; Builder
        </p>

        <p className="sub">
          I learn by building things and breaking them. Every failure teaches something new.
        </p>

        <div className="hero-brief">
          <p>
            Currently deep in systems architecture, automation, and local AI — working daily with{' '}
            <strong>PHP</strong>, <strong>Python</strong>, <strong>Java</strong>, databases, and game dev with Godot.
          </p>
          <p>
            Every project is a chance to understand how systems fit together — from databases and APIs to
            agent loops and deployment pipelines. I don't copy-paste solutions; I tear them apart first.
          </p>
        </div>

        <div className="hero-actions">
          <a href="/Portfolio/projects" className="btn">View Projects</a>
          <a href="/Portfolio/about" className="btn btn-outline">About Me</a>
        </div>
      </div>
    </section>
  );
}
