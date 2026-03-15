import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { brandDetails } from '../data/siteContent';
import BrandLogo from './BrandLogo';

function Navbar({ links }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen);

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 24);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function renderLink(link) {
    if (link.type === 'route') {
      return (
        <Link key={link.href} to={link.href} onClick={() => setIsOpen(false)}>
          {link.label}
        </Link>
      );
    }

    if (location.pathname === '/') {
      return (
        <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
          {link.label}
        </a>
      );
    }

    return (
      <Link key={link.href} to={`/${link.href}`} onClick={() => setIsOpen(false)}>
        {link.label}
      </Link>
    );
  }

  const contactLink = location.pathname === '/' ? '#contact' : '/#contact';

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar">
        <Link className="brand" to="/" aria-label={`${brandDetails.company} - acasa`}>
          <BrandLogo />
        </Link>

        <nav
          className={`nav-links ${isOpen ? 'is-open' : ''}`}
          id="mobile-navigation"
          aria-label="Navigatie principala"
        >
          {links.map((link) => renderLink(link))}
        </nav>

        <div className="nav-actions">
          <Link className="nav-cta desktop-only" to={contactLink}>
            Solicita oferta
          </Link>
          <button
            type="button"
            className={`menu-toggle ${isOpen ? 'is-open' : ''}`}
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? 'Inchide meniul' : 'Deschide meniul'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
