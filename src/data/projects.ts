import type { L } from '../i18n';

export type ProjectStatus = 'passing' | 'in progress' | 'experiment';

export interface Project {
  title: L;
  year: string;
  description: L;
  /** Short bullet points shown on the card */
  highlights?: L<string[]>;
  /** A few key tools shown as chips on the card */
  key?: string[];
  /** Technical detail, shown in a collapsible "case study" under the card */
  caseStudy?: { title: L; points: L<string[]> }[];
  /** Links to documentation and evidence in the repo */
  evidence?: { label: L; href: string }[];
  /** Full tech stack grouped by area (inside the case study) */
  stack?: { group: L; items: string[] }[];
  /** Browsers the suite runs on (shown as a matrix) */
  browsers?: string[];
  status: ProjectStatus;
  /** Only fill in with real numbers; without it no pass bar is shown */
  tests?: { passed: number; total: number };
  repo?: string;
  report?: string;
}

const repo = 'https://github.com/mairaqa/playwright-pytest-portfolio';

export const projects: Project[] = [
  {
    title: {
      en: 'playwright python qa automation framework',
      es: 'framework de automatización qa con playwright y python',
    },
    year: '2026',
    description: {
      en: 'a modular ui test automation framework built with python, pytest and playwright to apply test automation architecture and engineering practices.',
      es: 'framework modular de automatización de pruebas ui construido con python, pytest y playwright para aplicar arquitectura y buenas prácticas de ingeniería en automatización.',
    },
    highlights: {
      en: [
        'page object model, reusable pytest fixtures and data-driven tests keep ui interactions apart from test logic.',
        'cross-browser runs on chromium, firefox and webkit, in parallel with pytest-xdist, in docker and github actions.',
        'requirements traceability, allure reports, junit xml and playwright traces for analysis and debugging.',
      ],
      es: [
        'page object model, fixtures reutilizables de pytest y tests data-driven separan las interacciones de la ui de la lógica de los tests.',
        'ejecución multinavegador en chromium, firefox y webkit, en paralelo con pytest-xdist, en docker y github actions.',
        'trazabilidad de requisitos, reportes allure, junit xml y trazas de playwright para analizar y depurar.',
      ],
    },
    key: ['Python', 'pytest', 'Playwright', 'Docker', 'GitHub Actions', 'Allure'],
    // Facts from the repository (code, workflow and README), no claims beyond them.
    caseStudy: [
      {
        title: { en: 'architecture', es: 'arquitectura' },
        points: {
          en: [
            'page objects hold the locators and ui actions, and tests only describe behaviour, so a ui change is fixed in one place.',
            'pytest fixtures share the browser setup and test data, and data-driven tests reuse one flow for many inputs.',
          ],
          es: [
            'los page objects contienen los localizadores y las acciones de la ui, y los tests solo describen el comportamiento, así un cambio en la ui se corrige en un solo sitio.',
            'las fixtures de pytest comparten la configuración del navegador y los datos de prueba, y los tests data-driven reutilizan un mismo flujo para muchas entradas.',
          ],
        },
      },
      {
        title: { en: 'pipeline', es: 'pipeline' },
        points: {
          en: [
            'github actions runs one job per browser and merges the results into a single allure report.',
            'junit results are published to github checks and the actions summary.',
            'docker and docker compose give the same environment locally and in ci, and gnu make wraps the common commands.',
            'code quality, dependency and secret checks with pylint, pip-audit and gitleaks.',
          ],
          es: [
            'github actions ejecuta un job por navegador y une los resultados en un único reporte allure.',
            'los resultados junit se publican en github checks y en el resumen de actions.',
            'docker y docker compose dan el mismo entorno en local y en ci, y gnu make agrupa los comandos habituales.',
            'revisión de calidad de código, dependencias y secretos con pylint, pip-audit y gitleaks.',
          ],
        },
      },
    ],
    evidence: [
      { label: { en: 'Requirements', es: 'Requisitos' }, href: `${repo}/tree/main/docs/requirements` },
      { label: { en: 'Test cases', es: 'Casos de prueba' }, href: `${repo}/tree/main/docs/test-cases` },
      { label: { en: 'Traceability matrix', es: 'Matriz de trazabilidad' }, href: `${repo}/blob/main/docs/traceability.md` },
      { label: { en: 'CI runs', es: 'Ejecuciones de CI' }, href: `${repo}/actions/workflows/playwright.yml` },
    ],
    stack: [
      { group: { en: 'test automation', es: 'automatización' }, items: ['Python', 'pytest', 'Playwright', 'pytest-xdist'] },
      { group: { en: 'architecture & design', es: 'arquitectura y diseño' }, items: ['Page Object Model', 'Data-Driven Testing', 'Reusable Fixtures', 'Requirements Traceability'] },
      { group: { en: 'devops & ci/cd', es: 'devops y ci/cd' }, items: ['Docker', 'Docker Compose', 'GNU Make', 'GitHub Actions', 'Git'] },
      { group: { en: 'reporting & quality', es: 'reportes y calidad' }, items: ['Allure Report', 'JUnit XML', 'Playwright Trace Viewer', 'Pylint', 'pip-audit', 'Gitleaks'] },
    ],
    browsers: ['chromium', 'firefox', 'webkit'],
    status: 'passing',
    repo,
  },
];
