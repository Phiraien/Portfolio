import GradientText from '../components/GradientText';
import '../components/GradientText.css';
import Orb from '../components/Orb';

export default function Home() {
  return (
    <>
      <Orb
        hue={240}
        hoverIntensity={0.3}
        rotateOnHover={true}
        backgroundColor="#12121a"
      />
      <section id="hero" className="page-hero">
        <div className="container hero-content">
          <div className="hero-badge">Building things, breaking things</div>
          <h1>
            <GradientText colors={['#4a4ae0', '#6b6bf0', '#ff9ffc', '#4a4ae0']} animationSpeed={6} direction="horizontal">
              Phi Raien
            </GradientText>
          </h1>
          <p className="tagline">Engineering Student &middot; Developer &middot; Builder</p>
          <p className="sub">I learn by building things and breaking them — every failure teaches something new.</p>
        </div>
      </section>
    </>
  );
}
