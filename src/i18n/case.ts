// The website is styled in lowercase on purpose, but a CV needs normal capitalization:
// recruiters and ATS (applicant tracking systems) look for "QA", "API", "Python"...
// These helpers turn the lowercase site copy into properly cased text for the resume PDF.

// Longest terms first so "github actions" wins over "github", "apis" over "api", etc.
const TERMS: [string, string][] = [
  ["i've", "I've"],
  ["i'm", "I'm"],
  ["i'd", "I'd"],
  ['air traffic management', 'Air Traffic Management'],
  ['ctal-tae', 'CTAL-TAE'],
  ['istqb', 'ISTQB'],
  ['robot framework', 'Robot Framework'],
  ['github actions', 'GitHub Actions'],
  ['docker compose', 'Docker Compose'],
  ['swagger/openapi', 'Swagger/OpenAPI'],
  ['british council', 'British Council'],
  ['trace viewer', 'Trace Viewer'],
  ['junit xml', 'JUnit XML'],
  ['linkedin', 'LinkedIn'],
  ['chromium', 'Chromium'],
  ['firefox', 'Firefox'],
  ['webkit', 'WebKit'],
  ['gitlab', 'GitLab'],
  ['github', 'GitHub'],
  ['bitbucket', 'Bitbucket'],
  ['playwright', 'Playwright'],
  ['python', 'Python'],
  ['selenium', 'Selenium'],
  ['appium', 'Appium'],
  ['locust', 'Locust'],
  ['jenkins', 'Jenkins'],
  ['grafana', 'Grafana'],
  ['postman', 'Postman'],
  ['soapui', 'SoapUI'],
  ['jmeter', 'JMeter'],
  ['maven', 'Maven'],
  ['docker', 'Docker'],
  ['kubernetes', 'Kubernetes'],
  ['minikube', 'Minikube'],
  ['helm', 'Helm'],
  ['linux', 'Linux'],
  ['mockserver', 'MockServer'],
  ['mysql', 'MySQL'],
  ['jira', 'Jira'],
  ['allure', 'Allure'],
  ['junit', 'JUnit'],
  ['devops', 'DevOps'],
  ['kapsch', 'Kapsch'],
  ['indra', 'Indra'],
  ['aptis', 'Aptis'],
  ['ci/cd', 'CI/CD'],
  ['ci', 'CI'],
  ['gnu make', 'GNU Make'],
  ['gitleaks', 'Gitleaks'],
  ['pylint', 'Pylint'],
  ['sdlc', 'SDLC'],
  ['apis', 'APIs'],
  ['api', 'API'],
  ['qa', 'QA'],
  ['ai', 'AI'],
  ['ui', 'UI'],
  ['b2', 'B2'],
  ['cv', 'CV'],
  ['i', 'I'],
  ['b.sc.', 'B.Sc.'],
];

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');
// \p{L} so accented letters (é, ñ...) count as part of a word
const PATTERN = new RegExp(`(?<![\\p{L}\\d])(${TERMS.map(([k]) => escape(k)).join('|')})(?![\\p{L}\\d])`, 'giu');
const MAP = new Map(TERMS.map(([k, v]) => [k, v]));

/** Fix the casing of known technical terms and names. */
export const terms = (s: string) => s.replace(PATTERN, (m) => MAP.get(m.toLowerCase()) ?? m);

/** Sentence case: known terms fixed, first letter of every sentence uppercase. */
export const sentence = (s: string) =>
  // the first letter (after any leading symbols like "¿" or "☾ ") and the first letter after
  // . ! ? that follow a word of 3+ letters (so abbreviations like "B.Sc." don't count)
  terms(s).replace(/(^[^\p{L}]*|(?<=\p{L}{3})[.!?]\s+[^\p{L}]*)(\p{Ll})/gu, (_, before, c) => before + c.toUpperCase());

/** Title case for job titles: "senior qa engineer" -> "Senior QA Engineer". */
export const title = (s: string) =>
  terms(s).replace(/(^|\s)(\p{Ll})/gu, (_, sp, c) => sp + c.toUpperCase());
