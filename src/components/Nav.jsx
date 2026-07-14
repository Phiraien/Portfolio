import { NavLink } from 'react-router-dom';

export default function Nav() {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/skills', label: 'Skills' },
    { to: '/projects', label: 'Projects' },
    { to: '/pmvikas', label: 'PMVikas' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav>
      <div className="container nav-inner">
        <NavLink to="/" className="logo" aria-label="Home">Phi Raien</NavLink>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} end={l.to === '/'}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
