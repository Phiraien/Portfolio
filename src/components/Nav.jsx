export default function Nav({ activeSection }) {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav>
      <div className="container nav-inner">
        <a href="#" className="logo" aria-label="Home" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          PR
        </a>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`nav-link${activeSection === l.href.slice(1) ? ' active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector(l.href);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
