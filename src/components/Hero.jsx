export default function Hero() {
  return (
    <section id="hero">
      <div className="container hero-content">
        <div className="hero-badge">Building things, breaking things</div>
        <h1>Phi Raien</h1>
        <p className="tagline">Engineering Student &middot; Developer &middot; Builder</p>
        <p className="sub">I learn by building things and breaking them — every failure teaches something new.</p>
        <div className="hero-links">
          <a href="https://github.com/Phiraien" target="_blank" rel="noopener" className="btn">GitHub</a>
          <a href="#contact" className="btn btn-outline"
             onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
