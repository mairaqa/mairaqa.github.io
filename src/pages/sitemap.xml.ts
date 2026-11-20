// Static sitemap for search engines, built at compile time (no extra dependency).
import type { APIRoute } from 'astro';
import { langs, path } from '../i18n';

const pages = ['/', '/resume'];

export const GET: APIRoute = ({ site }) => {
  const urls = pages.flatMap((p) => langs.map((l) => new URL(path(l, p), site).href));
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
