export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <p>&copy; 2026 Phi Raien.</p>
        <a href="#" className="back-to-top" aria-label="Back to top"
           onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          &uarr;
        </a>
      </div>
    </footer>
  );
}
