import GradientText from '../components/GradientText';
import '../components/GradientText.css';
import ShinyText from '../components/ShinyText';
import '../components/ShinyText.css';
import RotatingText from '../components/RotatingText';
import '../components/RotatingText.css';
import Orb from '../components/Orb';
import Noise from '../components/Noise';
import '../components/Noise.css';

export default function Home() {
  return (
    <>
      <Orb
        hue={240}
        hoverIntensity={0.3}
        rotateOnHover={true}
        backgroundColor="#120F17"
      />
      <Noise
        patternSize={200}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={4}
        patternAlpha={12}
      />
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

          <div style={{ marginTop: 24, marginBottom: 16 }}>
            <RotatingText
              texts={['Engineering Student', 'Developer', 'Builder', 'Problem Solver']}
              mainClassName="rotating-role"
              staggerDuration={0.03}
              staggerFrom="first"
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              rotationInterval={3000}
            />
          </div>

          <ShinyText
            text="I learn by building things and breaking them. Every failure teaches something new."
            disabled={false}
            speed={3}
            className="hero-sub"
          />
        </div>
      </section>
    </>
  );
}
