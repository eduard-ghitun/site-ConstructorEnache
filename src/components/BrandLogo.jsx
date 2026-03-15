import { brandDetails } from '../data/siteContent';

function BrandLogo() {
  return (
    <>
      <span className="brand-icon" aria-hidden="true">
        <svg viewBox="0 0 64 64" role="img" focusable="false">
          <path d="M10 46V24.5L22.5 14L32 20.5L41.5 14L54 24.5V46" />
          <path d="M19 46V31h8v15" />
          <path d="M37 46V28h8v18" />
          <path d="M22.5 14h19" />
          <path d="M32 20.5V10" />
          <path d="M14 46h36" />
        </svg>
      </span>

      <span className="brand-text">
        <strong>{brandDetails.company}</strong>
        <small>{brandDetails.tagline}</small>
      </span>
    </>
  );
}

export default BrandLogo;
