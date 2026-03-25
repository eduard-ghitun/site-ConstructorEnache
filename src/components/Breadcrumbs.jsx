import { Link } from 'react-router-dom';

function Breadcrumbs({ items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={item.label} className="breadcrumbs__item">
          {item.href ? <Link to={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
          {index < items.length - 1 ? <strong>/</strong> : null}
        </span>
      ))}
    </nav>
  );
}

export default Breadcrumbs;
