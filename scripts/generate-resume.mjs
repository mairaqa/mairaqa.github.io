// Generates the resume PDFs (en + es) from the /resume pages using Playwright.
// Runs automatically after `astro build`, or on its own with `npm run resume`.
// Output: dist/resume-<lang>.pdf and public/resume-<lang>.pdf (so `npm run dev` also serves them).
import { existsSync, readdirSync, copyFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { preview } from 'astro';
import { chromium } from 'playwright-core';

const root = process.cwd();
const port = 4399;
const langs = { en: '/resume', es: '/es/resume' };

/** Find a Chromium: CHROME_PATH env var, or the newest one in the Playwright cache. */
function findChromium() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  const cache = join(homedir(), '.cache', 'ms-playwright');
  if (!existsSync(cache)) return undefined;
  const dirs = readdirSync(cache).filter((d) => /^chromium-\d+$/.test(d)).sort().reverse();
  for (const d of dirs) {
    for (const sub of ['chrome-linux64/chrome', 'chrome-linux/chrome', 'chrome-mac/Chromium.app/Contents/MacOS/Chromium', 'chrome-win/chrome.exe']) {
      const exe = join(cache, d, sub);
      if (existsSync(exe)) return exe;
    }
  }
}

if (!existsSync(join(root, 'dist'))) {
  console.error('✗ dist/ not found. Run `astro build` first.');
  process.exit(1);
}

const executablePath = findChromium();
let browser;
try {
  browser = await chromium.launch({ executablePath });
} catch (err) {
  console.warn(`⚠ resume PDFs not regenerated: no Chromium found (${err.message.split('\n')[0]}).`);
  console.warn('  Install one with `npx playwright install chromium` or set CHROME_PATH. The PDFs in public/ are kept.');
  process.exit(0); // don't fail the build; the committed PDFs in public/ are still deployed
}

const server = await preview({ root, server: { port }, logLevel: 'error' });
try {
  const page = await browser.newPage();
  for (const [lang, url] of Object.entries(langs)) {
    const res = await page.goto(`http://localhost:${port}${url}`, { waitUntil: 'networkidle' });
    if (!res?.ok()) throw new Error(`${url} returned ${res?.status()}`);
    await page.emulateMedia({ media: 'print' });
    const out = join(root, 'dist', `resume-${lang}.pdf`);
    await page.pdf({ path: out, format: 'A4', printBackground: true, preferCSSPageSize: true });
    copyFileSync(out, join(root, 'public', `resume-${lang}.pdf`));
    console.log(`✓ resume-${lang}.pdf generated`);
  }
} finally {
  await browser.close();
  await server.stop();
}
