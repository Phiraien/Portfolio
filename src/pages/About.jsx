export default function About() {
  return (
    <section id="about" className="page-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>Engineering student who learns by building things and breaking them. Every project, every failure — that's where the real lessons live. I don't just follow tutorials; I take things apart to understand how they work, then put them back together better.</p>
            <p>Currently deep in systems, automation, and local AI deployment. Working daily with PHP, Python, and Java — building web apps, designing databases (Oracle, MySQL), and tinkering with game dev in Godot 4.5. Always optimizing for two things: <strong>time</strong> and <strong>understanding</strong>.</p>
            <p>My current obsession: building a personal AI OS — a local, private, self-hosted system that learns with me. Not because it's trendy, but because I want to understand exactly how the pieces fit together, from the database to the agent loop.</p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-num">5+</span>
              <span>Projects Built</span>
            </div>
            <div className="stat">
              <span className="stat-num">3+</span>
              <span>Years Building</span>
            </div>
            <div className="stat">
              <span className="stat-num">∞</span>
              <span>Curiosity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
