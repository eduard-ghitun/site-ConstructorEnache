import { Link, useLocation } from 'react-router-dom';
import { brandDetails, contactDetails } from '../data/siteContent';
import BrandLogo from './BrandLogo';

function Footer({ links }) {
  const location = useLocation();
  const routeLinks = [
    { label: 'Despre', href: '/despre' },
    { label: 'Servicii', href: '/servicii' },
    { label: 'Proiecte', href: '/proiecte' },
    { label: 'Contact', href: '/contact' },
    { label: 'Suceava', href: '/suceava' },
    { label: 'Botosani', href: '/botosani' },
  ];
  const sectionHref = (href) => (location.pathname === '/' ? href : `/${href}`);

  return (
    <footer className="site-footer pattern-bg architect-grid">
      <div className="container footer-grid">
        <div>
          <Link className="brand brand--footer" to="/">
            <BrandLogo />
          </Link>
          <p className="footer-copy">
            Lucrari de constructii, instalatii si finisaje executate organizat pentru clienti din
            Suceava si Botosani care cauta un rezultat curat, serios si bine dus pana la capat.
          </p>
        </div>

        <div>
          <h3>Contact</h3>
          <ul className="footer-list">
            <li>
              <a href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}>{contactDetails.phone}</a>
            </li>
            <li>
              <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            </li>
            <li>
              <a href={contactDetails.facebook.url} target="_blank" rel="noreferrer">
                Facebook: {contactDetails.facebook.label}
              </a>
            </li>
            <li>{contactDetails.location}</li>
          </ul>
        </div>

        <div>
          <h3>Linkuri utile</h3>
          <ul className="footer-list">
            {routeLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Navigare rapida</h3>
          <ul className="footer-list">
            {links.map((link) => (
              <li key={link.href}>
                {link.type === 'route' ? (
                  <Link to={link.href}>{link.label}</Link>
                ) : (
                  <a href={sectionHref(link.href)}>{link.label}</a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Servicii principale</h3>
          <ul className="footer-list">
            <li>Case la rosu si la cheie</li>
            <li>Finisaje interioare si exterioare</li>
            <li>Instalatii electrice si sanitare</li>
            <li>Pavaje si detalii decorative</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {brandDetails.company}. Toate drepturile rezervate.</p>
      </div>
    </footer>
  );
}

export default Footer;
