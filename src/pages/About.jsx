import Threads from '../components/Threads';

export default function About() {
  return (
    <>
      <Threads color={[0.29, 0.29, 0.88]} amplitude={1} distance={0.3} enableMouseInteraction={false} />
      <section id="about" className="page-section">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>Engineering student passionate about systems, automation, and game development. I learn by building things and breaking them — every failure teaches something new.</p>
              <p>Currently working with PHP, Python, and Java. I enjoy system architecture, web development, database design, and game dev with Godot. Always looking for the next thing to build.</p>
            </div>
            <div className="about-stats">
              <div className="stat"><span className="stat-num">5+</span><span>Projects Built</span></div>
              <div className="stat"><span className="stat-num">5</span><span>Languages</span></div>
              <div className="stat"><span className="stat-num">∞</span><span>Curiosity</span></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
