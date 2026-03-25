import { brandDetails, contactDetails, serviceCategories } from './businessData.js';
import { contactPageContent, homeFaqs, localPagesContent, servicesPageContent } from './sitePagesContent.js';

export const SEO_SITE_URL = 'https://www.dekoconstruct.ro';
export const SEO_DEFAULT_IMAGE = '/images/proiecte/cover-proiecte.jpg';
export const SEO_DEFAULT_THEME_COLOR = '#090c11';

const defaultAreas = ['Suceava', 'Botosani', 'judetul Suceava', 'judetul Botosani'];
const commonServiceNames = serviceCategories.map((category) => category.title);

export const routeSeo = {
  '/': {
    path: '/',
    title: 'Firma constructii Suceava si Botosani | Case, finisaje si instalatii | Deko Construct',
    description:
      'Deko Construct executa constructii, finisaje interioare si exterioare, case la rosu si la cheie, instalatii electrice si sanitare pentru proiecte din Suceava si Botosani.',
    keywords: [
      'firma constructii Suceava',
      'firma constructii Botosani',
      'constructii case Suceava',
      'constructii case Botosani',
      'finisaje interioare Suceava',
      'instalatii sanitare Botosani',
      'Deko Construct',
    ],
    type: 'website',
    pageType: 'WebPage',
    breadcrumbName: 'Acasa',
    changefreq: 'weekly',
    priority: '1.0',
    services: commonServiceNames,
    faq: homeFaqs,
    areaServed: defaultAreas,
  },
  '/despre': {
    path: '/despre',
    title: 'Despre Deko Construct | Experienta in constructii pentru Suceava si Botosani',
    description:
      'Afla mai multe despre Deko Construct, echipa cu peste 25 de ani de experienta in constructii, finisaje si instalatii pentru proiecte rezidentiale din Suceava si Botosani.',
    keywords: [
      'despre firma constructii Suceava',
      'despre firma constructii Botosani',
      'echipa constructii Suceava',
      'constructor cu experienta Botosani',
    ],
    type: 'website',
    pageType: 'AboutPage',
    breadcrumbName: 'Despre',
    changefreq: 'monthly',
    priority: '0.8',
    areaServed: defaultAreas,
    services: commonServiceNames,
  },
  '/servicii': {
    path: '/servicii',
    title: 'Servicii constructii Suceava si Botosani | Finisaje, instalatii, case la cheie',
    description:
      'Vezi serviciile Deko Construct pentru Suceava si Botosani: constructii la rosu, case la cheie, finisaje interioare si exterioare, instalatii electrice si sanitare.',
    keywords: [
      'servicii constructii Suceava',
      'servicii constructii Botosani',
      'finisaje Suceava',
      'finisaje Botosani',
      'instalatii electrice Suceava',
      'case la cheie Botosani',
    ],
    type: 'website',
    pageType: 'CollectionPage',
    breadcrumbName: 'Servicii',
    changefreq: 'weekly',
    priority: '0.9',
    areaServed: defaultAreas,
    services: commonServiceNames,
    faq: servicesPageContent.serviceFaqs,
  },
  '/contact': {
    path: '/contact',
    title: 'Contact Deko Construct | Oferta lucrari in Suceava si Botosani',
    description:
      'Contacteaza Deko Construct pentru oferte de constructii, finisaje si instalatii in Suceava si Botosani. Consultanta gratuita prin telefon, email sau WhatsApp.',
    keywords: [
      'contact firma constructii Suceava',
      'contact firma constructii Botosani',
      'oferta constructii Suceava',
      'oferta finisaje Botosani',
    ],
    type: 'website',
    pageType: 'ContactPage',
    breadcrumbName: 'Contact',
    changefreq: 'monthly',
    priority: '0.8',
    areaServed: defaultAreas,
    services: commonServiceNames,
    faq: contactPageContent.faqs,
  },
  '/proiecte': {
    path: '/proiecte',
    title: 'Proiecte constructii si finisaje | Portofoliu Deko Construct Suceava si Botosani',
    description:
      'Exploreaza portofoliul Deko Construct cu proiecte de interior, exterior si santier pentru lucrari realizate in Suceava, Botosani si zone apropiate.',
    keywords: [
      'proiecte constructii Suceava',
      'portofoliu finisaje Botosani',
      'lucrari realizate Suceava',
      'galerie proiecte constructii',
    ],
    type: 'website',
    pageType: 'CollectionPage',
    breadcrumbName: 'Proiecte',
    changefreq: 'weekly',
    priority: '0.8',
    areaServed: defaultAreas,
  },
  '/suceava': {
    path: '/suceava',
    title: 'Firma constructii Suceava | Case la rosu, finisaje si instalatii | Deko Construct',
    description:
      'Firma de constructii din Suceava pentru case la rosu, finisaje interioare si exterioare, instalatii electrice si sanitare. Lucrari in Suceava si judetul Suceava.',
    keywords: [
      'firma constructii Suceava',
      'constructii Suceava',
      'finisaje Suceava',
      'instalatii Suceava',
      'constructor case Suceava',
    ],
    type: 'website',
    pageType: 'WebPage',
    breadcrumbName: 'Suceava',
    changefreq: 'weekly',
    priority: '0.9',
    areaServed: ['Suceava', 'judetul Suceava', ...localPagesContent.suceava.nearbyAreas],
    services: localPagesContent.suceava.schemaServices,
    faq: localPagesContent.suceava.faqs,
  },
  '/botosani': {
    path: '/botosani',
    title: 'Firma constructii Botosani | Constructii, finisaje si instalatii | Deko Construct',
    description:
      'Firma de constructii din Botosani pentru constructii de case, renovari, finisaje, fatade si instalatii. Lucrari in Botosani si judetul Botosani.',
    keywords: [
      'firma constructii Botosani',
      'constructii Botosani',
      'finisaje Botosani',
      'instalatii Botosani',
      'constructor case Botosani',
    ],
    type: 'website',
    pageType: 'WebPage',
    breadcrumbName: 'Botosani',
    changefreq: 'weekly',
    priority: '0.9',
    areaServed: ['Botosani', 'judetul Botosani', ...localPagesContent.botosani.nearbyAreas],
    services: localPagesContent.botosani.schemaServices,
    faq: localPagesContent.botosani.faqs,
  },
};

export const orderedRoutes = Object.values(routeSeo);

export const pageShellConfig = {
  manifestPath: '/site.webmanifest',
  iconPath: '/favicon.svg',
};

export function normalizePathname(pathname = '/') {
  const [cleanPath] = pathname.split(/[?#]/);

  if (!cleanPath || cleanPath === '/') {
    return '/';
  }

  return cleanPath.endsWith('/') ? cleanPath.slice(0, -1) : cleanPath;
}

export function getPageSeo(pathname = '/') {
  const normalizedPath = normalizePathname(pathname);

  return routeSeo[normalizedPath] ?? routeSeo['/'];
}

export function getSiteUrl() {
  if (typeof window === 'undefined') {
    return SEO_SITE_URL;
  }

  return window.location.origin?.startsWith('http') ? window.location.origin : SEO_SITE_URL;
}

export function getCanonicalUrl(pathname = '/', siteUrl = SEO_SITE_URL) {
  const normalizedPath = normalizePathname(pathname);

  return `${siteUrl}${normalizedPath === '/' ? '/' : normalizedPath}`;
}

function toAreaNode(name) {
  return {
    '@type': name.toLowerCase().includes('judet') ? 'AdministrativeArea' : 'City',
    name,
  };
}

function buildBreadcrumbItems(pathname, siteUrl, breadcrumbName) {
  if (pathname === '/') {
    return null;
  }

  return [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Acasa',
      item: `${siteUrl}/`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: breadcrumbName,
      item: getCanonicalUrl(pathname, siteUrl),
    },
  ];
}

export function buildStructuredData(pathname = '/', siteUrl = SEO_SITE_URL) {
  const normalizedPath = normalizePathname(pathname);
  const seo = getPageSeo(normalizedPath);
  const canonicalUrl = getCanonicalUrl(normalizedPath, siteUrl);
  const imageUrl = `${siteUrl}${SEO_DEFAULT_IMAGE}`;
  const areaServed = (seo.areaServed ?? defaultAreas).map(toAreaNode);

  const websiteNode = {
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: `${siteUrl}/`,
    name: brandDetails.company,
    description: routeSeo['/'].description,
    inLanguage: 'ro-RO',
  };

  const organizationNode = {
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: brandDetails.company,
    url: `${siteUrl}/`,
    logo: `${siteUrl}${pageShellConfig.iconPath}`,
    image: imageUrl,
    telephone: contactDetails.phone.replace(/\s+/g, ''),
    email: contactDetails.email,
    sameAs: [contactDetails.facebook.url],
    areaServed,
  };

  const localBusinessNode = {
    '@type': ['LocalBusiness', 'GeneralContractor'],
    '@id': `${siteUrl}/#localbusiness`,
    name: brandDetails.company,
    description: routeSeo['/'].description,
    url: `${siteUrl}/`,
    image: imageUrl,
    telephone: contactDetails.phone.replace(/\s+/g, ''),
    email: contactDetails.email,
    areaServed,
    serviceArea: areaServed,
    sameAs: [contactDetails.facebook.url],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        telephone: contactDetails.phone.replace(/\s+/g, ''),
        email: contactDetails.email,
        availableLanguage: ['ro'],
        areaServed: ['RO'],
      },
    ],
  };

  const pageNode = {
    '@type': seo.pageType ?? 'WebPage',
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: seo.title,
    description: seo.description,
    inLanguage: 'ro-RO',
    isPartOf: {
      '@id': `${siteUrl}/#website`,
    },
    about: {
      '@id': `${siteUrl}/#organization`,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: imageUrl,
    },
  };

  const graph = [websiteNode, organizationNode, localBusinessNode, pageNode];
  const breadcrumbItems = buildBreadcrumbItems(normalizedPath, siteUrl, seo.breadcrumbName);

  if (breadcrumbItems) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems,
    });
  }

  if (seo.services?.length) {
    graph.push(
      ...seo.services.map((serviceName, index) => ({
        '@type': 'Service',
        '@id': `${canonicalUrl}#service-${index + 1}`,
        name: serviceName,
        serviceType: serviceName,
        provider: {
          '@id': `${siteUrl}/#localbusiness`,
        },
        areaServed,
        url: canonicalUrl,
      })),
    );
  }

  if (seo.faq?.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      mainEntity: seo.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

export function getInitialHeadMeta(pathname = '/', siteUrl = SEO_SITE_URL) {
  const seo = getPageSeo(pathname);
  const canonicalUrl = getCanonicalUrl(pathname, siteUrl);
  const imageUrl = `${siteUrl}${SEO_DEFAULT_IMAGE}`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords.join(', '),
    canonicalUrl,
    imageUrl,
    themeColor: SEO_DEFAULT_THEME_COLOR,
    type: seo.type,
    structuredData: JSON.stringify(buildStructuredData(pathname, siteUrl)),
  };
}

export const defaultHeadMeta = getInitialHeadMeta('/');
