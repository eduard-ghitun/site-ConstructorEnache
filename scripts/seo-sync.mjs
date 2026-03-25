import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SEO_SITE_URL, getInitialHeadMeta, orderedRoutes } from '../src/data/seoConfig.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');
const distDir = path.join(projectRoot, 'dist');

function buildSitemapXml() {
  const urls = orderedRoutes
    .map(
      (route) => `  <url>
    <loc>${SEO_SITE_URL}${route.path === '/' ? '/' : route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function buildRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${SEO_SITE_URL}/sitemap.xml
`;
}

function replaceTag(html, pattern, value) {
  return html.replace(pattern, value);
}

function injectHeadMeta(html, pathname) {
  const meta = getInitialHeadMeta(pathname, SEO_SITE_URL);

  let result = html;
  result = replaceTag(result, /<title>.*?<\/title>/s, `<title>${meta.title}</title>`);
  result = replaceTag(
    result,
    /<meta name="description" content=".*?"\s*\/?>/s,
    `<meta name="description" content="${meta.description}" />`,
  );
  result = replaceTag(
    result,
    /<meta name="keywords" content=".*?"\s*\/?>/s,
    `<meta name="keywords" content="${meta.keywords}" />`,
  );
  result = replaceTag(
    result,
    /<meta property="og:type" content=".*?"\s*\/?>/s,
    `<meta property="og:type" content="${meta.type}" />`,
  );
  result = replaceTag(
    result,
    /<meta property="og:title" content=".*?"\s*\/?>/s,
    `<meta property="og:title" content="${meta.title}" />`,
  );
  result = replaceTag(
    result,
    /<meta property="og:description" content=".*?"\s*\/?>/s,
    `<meta property="og:description" content="${meta.description}" />`,
  );
  result = replaceTag(
    result,
    /<meta property="og:url" content=".*?"\s*\/?>/s,
    `<meta property="og:url" content="${meta.canonicalUrl}" />`,
  );
  result = replaceTag(
    result,
    /<meta property="og:image" content=".*?"\s*\/?>/s,
    `<meta property="og:image" content="${meta.imageUrl}" />`,
  );
  result = replaceTag(
    result,
    /<meta name="twitter:title" content=".*?"\s*\/?>/s,
    `<meta name="twitter:title" content="${meta.title}" />`,
  );
  result = replaceTag(
    result,
    /<meta name="twitter:description" content=".*?"\s*\/?>/s,
    `<meta name="twitter:description" content="${meta.description}" />`,
  );
  result = replaceTag(
    result,
    /<meta name="twitter:image" content=".*?"\s*\/?>/s,
    `<meta name="twitter:image" content="${meta.imageUrl}" />`,
  );
  result = replaceTag(
    result,
    /<link rel="canonical" href=".*?"\s*\/?>/s,
    `<link rel="canonical" href="${meta.canonicalUrl}" />`,
  );
  result = replaceTag(
    result,
    /<script id="structured-data" type="application\/ld\+json">.*?<\/script>/s,
    `<script id="structured-data" type="application/ld+json">${meta.structuredData}</script>`,
  );

  return result;
}

async function writeSourceSeoFiles() {
  await writeFile(path.join(publicDir, 'sitemap.xml'), buildSitemapXml(), 'utf8');
  await writeFile(path.join(publicDir, 'robots.txt'), buildRobotsTxt(), 'utf8');
}

async function writeStaticRouteShells() {
  const distIndexPath = path.join(distDir, 'index.html');
  let baseHtml;

  try {
    baseHtml = await readFile(distIndexPath, 'utf8');
  } catch {
    return;
  }

  const homeHtml = injectHeadMeta(baseHtml, '/');
  await writeFile(distIndexPath, homeHtml, 'utf8');
  await writeFile(path.join(distDir, '404.html'), homeHtml, 'utf8');

  for (const route of orderedRoutes) {
    if (route.path === '/') {
      continue;
    }

    const targetDir = path.join(distDir, route.path.replace(/^\//, ''));
    await mkdir(targetDir, { recursive: true });
    await writeFile(path.join(targetDir, 'index.html'), injectHeadMeta(baseHtml, route.path), 'utf8');
  }
}

await writeSourceSeoFiles();
await writeStaticRouteShells();

console.log(`SEO synced for ${orderedRoutes.length} routes.`);
