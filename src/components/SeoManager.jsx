import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  SEO_DEFAULT_THEME_COLOR,
  getCanonicalUrl,
  getInitialHeadMeta,
  getPageSeo,
  getSiteUrl,
} from '../data/seoConfig';
import { brandDetails } from '../data/siteContent';

function ensureMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function ensureLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const siteUrl = getSiteUrl();
    const seo = getPageSeo(location.pathname);
    const headMeta = getInitialHeadMeta(location.pathname, siteUrl);
    const canonicalUrl = getCanonicalUrl(location.pathname, siteUrl);

    document.title = seo.title;

    ensureMeta('name', 'description', headMeta.description);
    ensureMeta('name', 'robots', 'index, follow, max-image-preview:large');
    ensureMeta('name', 'author', brandDetails.company);
    ensureMeta('name', 'keywords', headMeta.keywords);
    ensureMeta('name', 'theme-color', SEO_DEFAULT_THEME_COLOR);
    ensureMeta('property', 'og:locale', 'ro_RO');
    ensureMeta('property', 'og:type', seo.type);
    ensureMeta('property', 'og:title', headMeta.title);
    ensureMeta('property', 'og:description', headMeta.description);
    ensureMeta('property', 'og:url', canonicalUrl);
    ensureMeta('property', 'og:site_name', brandDetails.company);
    ensureMeta('property', 'og:image', headMeta.imageUrl);
    ensureMeta('property', 'og:image:alt', `${brandDetails.company} - proiect reprezentativ`);
    ensureMeta('name', 'twitter:card', 'summary_large_image');
    ensureMeta('name', 'twitter:title', headMeta.title);
    ensureMeta('name', 'twitter:description', headMeta.description);
    ensureMeta('name', 'twitter:image', headMeta.imageUrl);

    ensureLink('canonical', canonicalUrl);

    let structuredDataScript = document.head.querySelector('#structured-data');

    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.setAttribute('id', 'structured-data');
      structuredDataScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredDataScript);
    }

    structuredDataScript.textContent = headMeta.structuredData;
  }, [location.pathname]);

  return null;
}

export default SeoManager;
