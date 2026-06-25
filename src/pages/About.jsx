import { useEffect, useRef } from 'react';
import Threads from '../components/Threads';
import DecryptedText from '../components/DecryptedText';
import TrueFocus from '../components/TrueFocus';
import '../components/TrueFocus.css';

export default function About() {
  const ref = useRef(null);

  return (
    <>
      <Threads color={[0.42, 0.42, 0.94]} amplitude={0.8} distance={0.2} enableMouseInteraction={false} />
      <section id="about" className="page-section" ref={ref}>
        <div className="container">
          <h2 className="section-title">
            <DecryptedText
              text="About Me"
              animateOn="view"
              revealDirection="start"
              speed={80}
              maxIterations={8}
              sequential={true}
              useOriginalCharsOnly={false}
              characters="!@#$%^&*()_+-=[]{}|;:,.<>?"
              className="decrypted-heading"
            />
          </h2>
          <div className="about-grid">
            <div className="about-text">
              <TrueFocus
                sentence="Engineering student passionate about systems, automation, and game development. I learn by building things and breaking them — every failure teaches something new."
                manualMode={false}
                blurAmount={3}
                borderColor="#6b6bf0"
                animationDuration={1}
                pauseBetweenAnimations={1}
              />
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
