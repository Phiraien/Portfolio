import ShinyText from '../components/ShinyText';
import '../components/ShinyText.css';
import BorderGlow from '../components/BorderGlow';
import '../components/BorderGlow.css';

export default function Contact() {
  return (
    <section id="contact" className="page-section">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2>
          <ShinyText text="Get in Touch" disabled={false} speed={2} className="" />
        </h2>
        <p className="contact-text">Have a project in mind or just want to say hi? Let's talk.</p>
        <BorderGlow className="contact-card">
          <div className="contact-links">
            <a href="mailto:kerala.emperor2@gmail.com" className="btn">Email Me</a>
            <a href="https://github.com/Phiraien" target="_blank" rel="noopener" className="btn btn-outline">GitHub</a>
          </div>
        </BorderGlow>
      </div>
    </section>
  );
}
