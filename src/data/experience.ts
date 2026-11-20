import type { L } from '../i18n';

// Most recent first.
export const experience: {
  role: L;
  company: string;
  client?: L;
  period: L;
  current: boolean;
  bullets: L<string[]>;
  stack: string[];
}[] = [
  {
    role: 'qa engineer',
    company: 'Digital Consult Group',
    client: 'Kapsch',
    period: '2025 → 2026',
    current: false,
    bullets: {
      en: [
        'designed and maintained automated functional, integration, regression and performance tests with python, robot framework and locust.',
        'built api contract tests against swagger/openapi specifications, using mockserver to simulate dependent services.',
        'integrated the tests into gitlab ci/cd and validated applications deployed with docker, kubernetes, minikube and helm.',
        'worked with international agile teams across the sdlc on release validation and continuous quality improvement.',
      ],
      es: [
        'diseñé y mantuve tests automatizados funcionales, de integración, de regresión y de rendimiento con python, robot framework y locust.',
        'desarrollé pruebas de contrato de apis a partir de especificaciones swagger/openapi, usando mockserver para simular los servicios dependientes.',
        'integré los tests en gitlab ci/cd y validé aplicaciones desplegadas con docker, kubernetes, minikube y helm.',
        'trabajé con equipos ágiles internacionales durante todo el ciclo de vida en la validación de releases y la mejora continua de la calidad.',
      ],
    },
    // key tools only (≤6): the bullets carry the detail
    stack: ['Python', 'Robot Framework', 'Locust', 'MockServer', 'GitLab CI', 'Kubernetes'],
  },
  {
    role: 'qa engineer',
    company: 'Novanotio, S.L.',
    client: { en: 'Indra · air traffic management (ATM)', es: 'Indra · Gestión del tráfico aéreo (ATM)' },
    period: '2024 → 2025',
    current: false,
    bullets: {
      en: [
        'designed and implemented automated testing solutions for air traffic management projects with python, robot framework, selenium and playwright, tailored to each project context.',
        'led qa teams: analysed and improved qa processes, and mentored the teams to maintain and evolve the testing solutions.',
        'integrated the tests into ci/cd and built solutions to integrate, manage and analyse test reports, making quality tracking more efficient.',
        'tested apis with postman and performance with jmeter, on linux and docker-based environments.',
      ],
      es: [
        'diseñé e implementé soluciones de pruebas automatizadas para proyectos de gestión del tráfico aéreo con python, robot framework, selenium y playwright, adaptadas al contexto de cada proyecto.',
        'lideré equipos de qa: analicé y mejoré los procesos de qa, y formé a los equipos para mantener y evolucionar las soluciones de testing.',
        'integré los tests en ci/cd y desarrollé soluciones para integrar, gestionar y analizar los reportes de pruebas, haciendo más eficiente el seguimiento de la calidad.',
        'probé apis con postman y el rendimiento con jmeter, en entornos linux y basados en docker.',
      ],
    },
    stack: ['Python', 'Robot Framework', 'Selenium', 'Playwright', 'JMeter', 'Docker'],
  },
  {
    role: 'qa engineer',
    company: 'Xplain AG Ibérica, S.L.',
    period: '2019 → 2024',
    current: false,
    bullets: {
      en: [
        'automated functional, regression, confirmation and non-functional tests for web, mobile and desktop applications.',
        'built automation frameworks from scratch with robot framework, selenium and appium, using maven.',
        'tested apis with postman and soapui, and reported results in grafana.',
        'supported development and devops with jenkins and docker-based test environments, and mentored junior team members.',
      ],
      es: [
        'automaticé tests funcionales, de regresión, de confirmación y no funcionales para aplicaciones web, móviles y de escritorio.',
        'construí frameworks de automatización desde cero con robot framework, selenium y appium, usando maven.',
        'probé apis con postman y soapui, y reporté los resultados en grafana.',
        'apoyé a desarrollo y devops con jenkins y entornos de pruebas basados en docker, y formé a compañeros junior.',
      ],
    },
    stack: ['Robot Framework', 'Selenium', 'Appium', 'JUnit', 'pytest', 'Postman', 'SoapUI', 'Jenkins', 'Docker', 'Grafana'],
  },
  {
    role: 'software engineer',
    company: 'Tiss Comercializadora de Software y Servicios',
    period: '2017 → 2018',
    current: false,
    bullets: {
      en: ['contributed to software development, documentation reviews and improvement proposals.'],
      es: ['participé en el desarrollo de software, la revisión de documentación y propuestas de mejora.'],
    },
    stack: ['Software development'],
  },
];
