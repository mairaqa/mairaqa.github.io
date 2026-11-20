import type { L } from '../i18n';

// Source: maira_torres_qa_cv_en.pdf (nov 2026).
// Text can be a plain string (same in both languages) or { en, es }.
export const profile = {
  name: 'Maira Torres',
  monogram: 'mt_qa', // rendered with a green underscore and a bug
  role: { en: 'senior qa engineer', es: 'senior qa engineer' } as L,
  // hero: each line says one different thing (what she builds / how she helps teams / technical areas)
  // shown right after the role: "Senior QA Engineer focused on..."
  tagline: {
    en: 'focused on building effective quality engineering solutions.',
    es: 'enfocada en construir soluciones de ingeniería de calidad eficaces.',
  } as L,
  intro: {
    en: 'i help teams define and implement testing strategies, establish sustainable automation practices, and adapt the way of working to project needs, available resources, and team capabilities.',
    es: 'ayudo a los equipos a definir e implementar estrategias de testing, establecer prácticas de automatización sostenibles y adaptar la forma de trabajar a las necesidades del proyecto, los recursos disponibles y las capacidades del equipo.',
  } as L,
  // "core expertise" list in the hero
  focus: {
    en: ['test automation strategy & implementation', 'functional & non-functional testing', 'qa process improvement', 'ci/cd integration'],
    es: ['estrategia e implementación de automatización de pruebas', 'testing funcional y no funcional', 'mejora de procesos de qa', 'integración en ci/cd'],
  } as L<string[]>,
  // written with normal capitalization; sentence() in case.ts only fixes lowercase letters
  about: {
    en: [
      "Over the past 7+ years, one of the most rewarding parts of my work as a QA Engineer has been building test automation solutions from the ground up. Every project comes with its own challenges, from unfamiliar technologies and tight timelines to changing teams and different technical requirements.",
      "These experiences have shaped how I approach quality. I don't just focus on automating tests; I look for ways to improve quality assurance processes, identify opportunities for reuse, and design solutions that fit each project's needs and remain maintainable as teams and requirements evolve.",
      "I've worked across functional and non-functional testing for web, mobile, and desktop applications, both independently and in team leadership roles. This has allowed me to combine hands-on technical work with collaboration, knowledge sharing, and continuous improvement.",
      "Outside of day-to-day projects, I genuinely enjoy learning. Whether I'm exploring AI, Linux, or new approaches to software testing, curiosity has always been a driving force in my professional development.",
    ],
    es: [
      'Durante mis más de siete años de experiencia como QA Engineer, una de las cosas que más he disfrutado ha sido diseñar e implementar soluciones de automatización de pruebas desde cero. Cada proyecto ha supuesto nuevos desafíos: tecnologías con las que no estaba familiarizada, plazos ajustados, cambios en los equipos y requisitos técnicos diferentes.',
      'Estas experiencias han definido mi forma de entender la calidad. No me centro únicamente en automatizar pruebas; también busco oportunidades para mejorar procesos, reutilizar componentes y diseñar soluciones adaptadas a las necesidades de cada proyecto, que puedan mantenerse y evolucionar con el tiempo.',
      'He trabajado en pruebas funcionales y no funcionales de aplicaciones web, móviles y de escritorio, tanto de forma independiente como liderando equipos. Esto me ha permitido combinar el trabajo técnico con la colaboración, la transmisión de conocimientos y la mejora continua.',
      'Más allá de mis responsabilidades profesionales, disfruto aprendiendo cosas nuevas. Ya sea explorando la inteligencia artificial, Linux o nuevas formas de abordar el testing, la curiosidad siempre ha sido una parte importante de mi desarrollo profesional.',
    ],
  } as L<string[]>,
  stats: [
    // shown as a two-column table: indicator | content
    { label: { en: 'Experience', es: 'Experiencia' } as L, value: { en: '7+ years in QA', es: '7+ años en QA' } as L },
    { label: { en: 'Certification', es: 'Certificación' } as L, value: 'ISTQB Advanced (CTAL-TAE)' },
    { label: { en: 'Leadership', es: 'Liderazgo' } as L, value: { en: 'QA teams', es: 'Equipos de QA' } as L },
    // privacy: country only, never the city
    { label: { en: 'Location', es: 'Ubicación' } as L, value: { en: 'Spain · Remote', es: 'España · Remoto' } as L },
  ],
  // core: used in the jobs and the project above (shown as chips).
  // also: other tools worth listing (shown as plain text, so the page isn't a wall of tags).
  // The PDF lists both, so ATS keyword searches still match.
  skills: {
    automation: { core: ['Robot Framework', 'Playwright', 'Selenium', 'Appium', 'pytest'], also: ['JUnit', 'TestNG'] },
    'api & performance': { core: ['Postman', 'SoapUI', 'Swagger / OpenAPI', 'MockServer', 'JMeter', 'Locust'], also: ['API contract testing', 'Requests', 'k6'] },
    programming: { core: ['Python', 'SQL'], also: ['Java', 'Groovy'] },
    'ci/cd & build': { core: ['GitLab CI', 'Jenkins', 'GitHub Actions', 'Docker'], also: ['Git', 'Bitbucket', 'Maven'] },
    devops: { core: ['Linux', 'Kubernetes', 'Helm'], also: ['Minikube', 'Azure'] },
    'data & tools': { core: ['Jira', 'MySQL', 'Grafana', 'Allure'], also: ['MongoDB', 'Xray'] },
    methodologies: { core: ['Agile / Scrum'], also: ['TDD', 'BDD', 'ATDD'] },
  } as Record<string, { core: string[]; also?: string[] }>,
  education: [
    {
      degree: { en: "master's in computer engineering", es: 'máster en ingeniería informática' } as L,
      school: { en: 'Universidad de Castilla-La Mancha, Spain', es: 'Universidad de Castilla-La Mancha, España' } as L,
    },
    {
      degree: { en: 'b.sc. in computer science', es: 'ingeniería en sistemas computacionales' } as L,
      school: { en: 'Tecnológico Nacional de México, Mexico', es: 'Tecnológico Nacional de México, México' } as L,
    },
  ],
  spoken: [
    { lang: { en: 'spanish', es: 'español' } as L, level: { en: 'Native or bilingual proficiency', es: 'Competencia bilingüe o nativa' } as L },
    { lang: { en: 'english', es: 'inglés' } as L, level: { en: 'Full professional proficiency', es: 'Competencia profesional completa' } as L },
  ],
  // Privacy: no email or phone on the public site. Contact goes through LinkedIn.
  socials: {
    github: 'https://github.com/mairaqa',
    linkedin: 'https://www.linkedin.com/in/mairatorresqa',
  },
  resume: {
    summary: {
      en: 'senior qa engineer with 7+ years of experience in functional testing, test automation, and api and performance testing. experienced in ci/cd, devops environments and qa process improvement with international teams.',
      es: 'senior qa engineer con más de 7 años de experiencia en testing funcional, automatización de pruebas y pruebas de apis y de rendimiento. experiencia en ci/cd, entornos devops y mejora de procesos de qa con equipos internacionales.',
    } as L,
    updated: { en: 'nov 2026', es: 'nov 2026' } as L,
  },
};
