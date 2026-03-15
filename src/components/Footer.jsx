import { Link } from 'react-router-dom';
import { brandDetails, contactDetails } from '../data/siteContent';
import BrandLogo from './BrandLogo';

function Footer({ links }) {
  return (
    <footer className="site-footer pattern-bg architect-grid">
      <div className="container footer-grid">
        <div>
          <a className="brand brand--footer" href="#acasa">
            <BrandLogo />
          </a>
          <p className="footer-copy">
            Lucrari de constructii, instalatii si finisaje executate organizat, pentru clienti care
            cauta un rezultat curat, serios si bine dus pana la capat.
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
          <h3>Linkuri rapide</h3>
          <ul className="footer-list">
            {links.map((link) => (
              <li key={link.href}>
                {link.type === 'route' ? (
                  <Link to={link.href}>{link.label}</Link>
                ) : (
                  <a href={`/${link.href}`}>{link.label}</a>
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
