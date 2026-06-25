import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <p>&copy; 2026 Phi Raien.</p>
        <NavLink to="/" className="back-to-top" aria-label="Back to top">&uarr;</NavLink>
      </div>
    </footer>
  );
}
