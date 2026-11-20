// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mairaqa.github.io',
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  security: {
    // Content-Security-Policy <meta> with hashes for every script/style Astro emits.
    // Only active in `build`/`preview`, not in `dev`.
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        'upgrade-insecure-requests',
      ],
    },
  },
  markdown: { syntaxHighlight: false }, // no code blocks here; Shiki's inline styles would break the CSP
  // assetsInlineLimit 0: emit fonts as files instead of data: URIs, so the CSP can stay at font-src 'self'
  vite: { plugins: [tailwindcss()], build: { assetsInlineLimit: 0 } },
});
