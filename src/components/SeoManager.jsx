import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { brandDetails, contactDetails, serviceCategories } from '../data/siteContent';

const DEFAULT_SITE_URL = 'https://www.dekoconstruct.ro';
const DEFAULT_IMAGE_PATH = '/images/proiecte/cover-proiecte.jpg';

const routeSeo = {
  '/': {
    title: 'Deko Construct | Constructii, finisaje si instalatii in Romania',
    description:
      'Deko Construct executa constructii, finisaje interioare si exterioare, instalatii electrice si sanitare, case la rosu si la cheie. Consultanta gratuita pentru proiecte in Romania.',
    type: 'website',
  },
  '/proiecte': {
    title: 'Proiecte Deko Construct | Portofoliu lucrari interior, exterior si santier',
    description:
      'Vezi proiectele realizate de Deko Construct: lucrari de interior, exterior si santier, cu imagini din executie si finisaje pentru case si amenajari rezidentiale.',
    type: 'website',
  },
};

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

function getSiteUrl() {
  if (typeof window === 'undefined') {
    return DEFAULT_SITE_URL;
  }

  return window.location.origin?.startsWith('http') ? window.location.origin : DEFAULT_SITE_URL;
}

function buildStructuredData({ pathname, siteUrl, canonicalUrl, imageUrl, title, description }) {
  const websiteNode = {
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: `${siteUrl}/`,
    name: brandDetails.company,
    description,
    inLanguage: 'ro-RO',
  };

  const businessNode = {
    '@type': 'GeneralContractor',
    '@id': `${siteUrl}/#business`,
    name: brandDetails.company,
    description:
      'Firma de constructii specializata in constructii complete, finisaje, instalatii electrice si sanitare, lucrari interioare si exterioare.',
    url: `${siteUrl}/`,
    image: imageUrl,
    telephone: contactDetails.phone.replace(/\s+/g, ''),
    email: contactDetails.email,
    sameAs: [contactDetails.facebook.url],
    areaServed: {
      '@type': 'Country',
      name: 'Romania',
    },
    knowsAbout: serviceCategories.map((service) => service.title),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: contactDetails.phone.replace(/\s+/g, ''),
        email: contactDetails.email,
        contactType: 'customer support',
        areaServed: 'RO',
        availableLanguage: ['ro'],
      },
    ],
  };

  const pageNode = {
    '@type': 'WebPage',
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: title,
    description,
    inLanguage: 'ro-RO',
    isPartOf: {
      '@id': `${canonicalUrl}#website`,
    },
    about: {
      '@id': `${canonicalUrl}#business`,
    },
  };

  const graph = [websiteNode, businessNode, pageNode];

  if (pathname === '/proiecte') {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Acasa',
          item: `${getSiteUrl()}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Proiecte',
          item: canonicalUrl,
        },
      ],
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const siteUrl = getSiteUrl();
    const seo = routeSeo[location.pathname] ?? routeSeo['/'];
    const canonicalUrl = `${siteUrl}${location.pathname === '/' ? '/' : location.pathname}`;
    const imageUrl = `${siteUrl}${DEFAULT_IMAGE_PATH}`;

    document.title = seo.title;

    ensureMeta('name', 'description', seo.description);
    ensureMeta('name', 'robots', 'index, follow, max-image-preview:large');
    ensureMeta('name', 'author', brandDetails.company);
    ensureMeta(
      'name',
      'keywords',
      'firma constructii, constructii case, case la rosu, case la cheie, finisaje interioare, finisaje exterioare, instalatii electrice, instalatii sanitare, Deko Construct',
    );
    ensureMeta('name', 'theme-color', '#090c11');
    ensureMeta('property', 'og:locale', 'ro_RO');
    ensureMeta('property', 'og:type', seo.type);
    ensureMeta('property', 'og:title', seo.title);
    ensureMeta('property', 'og:description', seo.description);
    ensureMeta('property', 'og:url', canonicalUrl);
    ensureMeta('property', 'og:site_name', brandDetails.company);
    ensureMeta('property', 'og:image', imageUrl);
    ensureMeta('property', 'og:image:alt', `${brandDetails.company} - proiect reprezentativ`);
    ensureMeta('name', 'twitter:card', 'summary_large_image');
    ensureMeta('name', 'twitter:title', seo.title);
    ensureMeta('name', 'twitter:description', seo.description);
    ensureMeta('name', 'twitter:image', imageUrl);

    ensureLink('canonical', canonicalUrl);

    let structuredDataScript = document.head.querySelector('#structured-data');

    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.setAttribute('id', 'structured-data');
      structuredDataScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredDataScript);
    }

    structuredDataScript.textContent = JSON.stringify(
      buildStructuredData({
        pathname: location.pathname,
        siteUrl,
        canonicalUrl,
        imageUrl,
        title: seo.title,
        description: seo.description,
      }),
    );
  }, [location.pathname]);

  return null;
}

export default SeoManager;
