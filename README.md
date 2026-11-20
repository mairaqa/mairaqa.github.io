# QA Engineer Portfolio · mt_qa

Personal portfolio built with [Astro](https://astro.build) + Tailwind CSS v4.
English (`/`) and Spanish (`/es/`), dark theme by default with a light toggle.
Published at **https://mairaqa.github.io** (GitHub Pages).

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321, live reload while editing
npm run build    # static site in ./dist + resume PDFs
npm run preview  # serve the build (needed to test the CSP, which is off in dev)
```

Requires Node >= 22.12.

## Edit your content

All content lives in `src/data/`. Text can be one string for both languages or `{ en: '...', es: '...' }`.

| File | What it holds |
| --- | --- |
| `src/data/profile.ts` | name, role, hero (`tagline`, `intro`, `focus` = core expertise), about, the About data table (`stats`), skills (`core` shown as tags, `also` as plain text), education, languages, socials |
| `src/data/projects.ts` | projects: summary, highlights, key tools, collapsible case study, evidence links (requirements, test cases, traceability, CI runs), full stack |
| `src/data/experience.ts` | jobs, most recent first (bullets + up to 6 key tools) |
| `src/data/certifications.ts` | certifications and courses, with the issuer's verification links |

Interface labels (buttons, headings) for both languages are in `src/i18n/index.ts`.

### Capitalization

Most copy in `src/data` is written in lowercase and gets its capitalization on render
(`src/i18n/case.ts`): sentences start with a capital letter, and known names keep their casing
("QA", "API", "Python", "GitHub Actions"...). Text already written with capitals is left as is.
If you add a new product name in lowercase, add it to the `TERMS` list in `case.ts`.

## Resume (generated automatically)

The resume is **not** a file you maintain by hand. It is built from the same data as the site:

- `/resume` and `/es/resume` show it as a web page (with a print button). They are not in the menu;
  visitors download the PDF from the hero, the contact section or the footer.
- `npm run build` prints both pages to `resume-en.pdf` and `resume-es.pdf` with Playwright
  (`scripts/generate-resume.mjs`). Run `npm run resume` after a build to regenerate only the PDFs.
  Check that each PDF stays on one page after changing content (`pdfinfo dist/resume-en.pdf`).
- The PDFs are also copied to `public/`, so commit them: if the build machine has no Chromium,
  the build keeps the committed PDFs instead of failing.

The script uses `CHROME_PATH` if set, otherwise the newest Chromium in `~/.cache/ms-playwright`
(`npx playwright install chromium` installs one).

## Certifications and courses

In `src/data/certifications.ts`, `type: 'certification'` is for accredited exams (ISTQB, ITIL, Scrum Manager)
and `type: 'course'` is for completion certificates. ISTQB certifications are shown as cards, the others as rows,
and courses are grouped by topic in collapsible lists. Each one links to the issuer's public verification page,
which proves it without publishing any document.

## Privacy

This site deliberately publishes **as little personal data as possible**:

- **No email and no phone number.** Contact happens through LinkedIn; share your email privately when needed.
  Anything published (HTML, PDF, images) gets scraped for spam and phishing lists sooner or later.
- **Location is the country only** ("Spain · Remote"), never the city.
- **No second surname, no study years** (they reveal your age), **no credential numbers.**
- **No certificate images.** The cleaned copies are in `private/certificates/`, which is never published
  (Astro only serves `public/`) and is git-ignored. The "verify credential" links are enough proof.
- The resume PDFs and the structured data for search engines (JSON-LD) follow the same rules.
- No cookies, analytics, trackers or third-party scripts. `localStorage` only keeps the theme and the bug-hunt
  progress, in the visitor's own browser.
- Commits use the GitHub `noreply` email, so the personal email never appears in the public history.

Before publishing new content, ask: does a recruiter need this to decide to contact me? If not, leave it out.

## Security

- **Content-Security-Policy**: Astro generates a `<meta>` CSP with hashes for every script and style
  (`security.csp` in `astro.config.mjs`). No inline scripts or `data:` fonts are allowed.
- **HTTP headers**: `public/_headers` (Netlify/Cloudflare) and `vercel.json` (Vercel) add clickjacking protection,
  `nosniff`, referrer and permissions policies and HSTS. **GitHub Pages ignores both files**; there the CSP
  still applies because it is in the HTML, and GitHub provides HTTPS.
- External links use `rel="noopener noreferrer"`.
- `/.well-known/security.txt` tells people how to report a vulnerability.
- `.github/dependabot.yml` opens weekly PRs with dependency updates. Run `npm audit` before deploying.
- No forms or user input: nothing to inject into and no personal data to leak.

## Accessibility and SEO

- Content is visible without JavaScript (the reveal animation only hides sections when JS can show them again).
- Animations respect "reduce motion". Visible focus outline, skip link, mobile menu closes with Escape.
- Accessible names include the visible text of the theme and language buttons (WCAG 2.5.3).
- `hreflang` alternates for en/es, `sitemap.xml` (built by `src/pages/sitemap.xml.ts`), JSON-LD `Person`
  with public profile links only.

## Easter eggs

- 6 bugs are hidden around the page. The 🐞 counter in the header tracks how many you caught.
- Catch the bug crawling over the terminal to see it reported in the test output.
- The 404 page is a failed test. Open the browser console for a message to developers.

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml` builds the site and the resume PDFs and publishes `dist/` on every push to `main`.

One-time setup:

1. Create a **public** repository named `mairaqa.github.io` and push this project to its `main` branch.
2. In the repository, **Settings → Pages → Source: GitHub Actions**.
3. The site goes live at https://mairaqa.github.io (`site` in `astro.config.mjs` and the `Canonical`
   in `public/.well-known/security.txt` already point there).

With a custom domain later, update those two places and `public/robots.txt`.
