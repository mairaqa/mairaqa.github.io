export const langs = ['en', 'es'] as const;
export type Lang = (typeof langs)[number];

/** A value that can be shared by both languages or translated per language. */
export type L<T = string> = T | { en: T; es: T };

export function t<T>(value: L<T>, lang: Lang): T {
  if (value && typeof value === 'object' && 'en' in (value as object) && 'es' in (value as object)) {
    return (value as { en: T; es: T })[lang];
  }
  return value as T;
}

export function getLang(locale: string | undefined): Lang {
  return locale === 'es' ? 'es' : 'en';
}

/** Build a path for the given language: en has no prefix, es lives under /es. */
export function path(lang: Lang, p = '/'): string {
  const clean = p.startsWith('/') ? p : `/${p}`;
  return lang === 'en' ? clean : `/es${clean === '/' ? '/' : clean}`;
}

export const ui = {
  en: {
    nav: { about: 'About', projects: 'Projects', experience: 'Experience', certifications: 'Certifications', contact: 'Contact' },
    menu: 'Menu',
    skip: 'Skip to content',
    themeDark: '☾ Dark',
    themeLight: '☀ Light',
    themeLabel: 'Toggle color theme',
    langLabel: 'Leer en español',
    hi: "Hi, I'm",
    coreExpertise: 'Core expertise',
    viewProjects: 'View projects',
    downloadCv: 'Download CV',
    available: 'Available for work',
    bugEscaped: 'A bug escaped! Click to catch it',
    bugLog1: '  ✗ bug_escaped_to_production',
    bugLog2: '  ✓ bug caught and reported. thanks for testing!',
    // section titles: one word -> "Projects_", several words -> "about_me_" (see SectionTitle.astro)
    about: 'About me',
    projects: 'Projects',
    suites: (n: number) => `${n} test ${n === 1 ? 'suite' : 'suites'}`,
    browsers: 'Cross-browser',
    stackLabel: 'Stack',
    source: 'Source',
    caseStudy: 'Case study: architecture, pipeline and stack',
    report: 'Test report',
    passed: (a: number, b: number) => `${a}/${b} passed`,
    // test-result style labels stay lowercase on purpose
    status: { passing: 'passing', 'in progress': 'in progress', experiment: 'experiment' },
    experience: 'Experience',
    client: 'Client',
    education: 'Education',
    spoken: 'Languages',
    alsoUsed: 'also',
    certifications: 'Certifications & courses',
    certsMeta: (n: number, m: number) => `${n} certifications, ${m} courses`,
    certsSub: 'Certifications',
    coursesSub: 'Courses',
    courses: (n: number) => `${n} ${n === 1 ? 'course' : 'courses'}`,
    verify: 'Verify credential',
    viewCert: 'View certificate',
    contact: 'Get in touch',
    openToWork: 'Open to work',
    contactText: 'Looking for a QA engineer who cares about quality from day one? Send me a message on LinkedIn and tell me about your team and your product.',
    contactCta: 'Message me on LinkedIn',
    knownBugs: (n: number) => `${n} known ${n === 1 ? 'bug' : 'bugs'}`,
    hunt: {
      counter: (a: number, b: number) => `Bugs found ${a}/${b}`,
      intro: (b: number) => `There are ${b} bugs hidden on this page. Can you find them all?`,
      caught: (a: number, b: number) => `Bug ${a}/${b} caught.`,
      done: "All bugs found. You'd make a great QA, so let's talk.",
      reset: 'Hide them again',
      label: 'Hidden bug, click to catch it',
    },
    resumePage: {
      title: 'Resume',
      download: 'Download PDF',
      print: 'Print',
      back: 'Back to portfolio',
      summary: 'Summary',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Selected projects',
      project: 'Project',
      certifications: 'Certifications',
      training: 'Additional training',
      education: 'Education',
      spoken: 'Languages',
    },
    notFound: {
      title: 'Page not found',
      expected: 'Expected',
      received: 'Received',
      hint: "This page doesn't exist. The link may be outdated, or the URL has a typo.",
      back: 'Go to the home page',
    },
  },
  es: {
    nav: { about: 'Sobre mí', projects: 'Proyectos', experience: 'Experiencia', certifications: 'Certificaciones', contact: 'Contacto' },
    menu: 'Menú',
    skip: 'Saltar al contenido',
    themeDark: '☾ Oscuro',
    themeLight: '☀ Claro',
    themeLabel: 'Cambiar tema de color',
    langLabel: 'Read in English',
    hi: 'Hola, soy',
    coreExpertise: 'Especialidades principales',
    viewProjects: 'Ver proyectos',
    downloadCv: 'Descargar CV',
    available: 'Disponible para trabajar',
    bugEscaped: '¡Se escapó un bug! Haz clic para atraparlo',
    bugLog1: '  ✗ bug_escaped_to_production',
    bugLog2: '  ✓ bug atrapado y reportado. ¡gracias por probar!',
    about: 'Sobre mí',
    projects: 'Proyectos',
    suites: (n: number) => `${n} ${n === 1 ? 'suite' : 'suites'} de test`,
    browsers: 'Multinavegador',
    stackLabel: 'Stack',
    source: 'Código',
    caseStudy: 'Caso técnico: arquitectura, pipeline y stack',
    report: 'Reporte de tests',
    passed: (a: number, b: number) => `${a}/${b} pasados`,
    status: { passing: 'pasando', 'in progress': 'en progreso', experiment: 'experimento' },
    experience: 'Experiencia',
    client: 'Cliente',
    education: 'Formación académica',
    spoken: 'Idiomas',
    alsoUsed: 'también',
    certifications: 'Certificaciones y cursos',
    certsMeta: (n: number, m: number) => `${n} certificaciones, ${m} cursos`,
    certsSub: 'Certificaciones',
    coursesSub: 'Cursos',
    courses: (n: number) => `${n} ${n === 1 ? 'curso' : 'cursos'}`,
    verify: 'Verificar credencial',
    viewCert: 'Ver certificado',
    contact: 'Contacto',
    openToWork: 'Disponible',
    contactText: '¿Buscas una QA engineer que cuide la calidad desde el primer día? Escríbeme por LinkedIn y cuéntame sobre tu equipo y tu producto.',
    contactCta: 'Escríbeme por LinkedIn',
    knownBugs: (n: number) => `${n} ${n === 1 ? 'bug conocido' : 'bugs conocidos'}`,
    hunt: {
      counter: (a: number, b: number) => `Bugs encontrados ${a}/${b}`,
      intro: (b: number) => `Hay ${b} bugs escondidos en esta página. ¿Puedes encontrarlos todos?`,
      caught: (a: number, b: number) => `Bug ${a}/${b} atrapado.`,
      done: 'Encontraste todos los bugs. Serías una gran QA, así que hablemos.',
      reset: 'Volver a esconderlos',
      label: 'Bug escondido, haz clic para atraparlo',
    },
    resumePage: {
      title: 'CV',
      download: 'Descargar PDF',
      print: 'Imprimir',
      back: 'Volver al portfolio',
      summary: 'Resumen',
      skills: 'Habilidades',
      experience: 'Experiencia',
      projects: 'Proyectos destacados',
      project: 'Proyecto',
      certifications: 'Certificaciones',
      training: 'Formación complementaria',
      education: 'Formación académica',
      spoken: 'Idiomas',
    },
    notFound: {
      title: 'Página no encontrada',
      expected: 'Esperado',
      received: 'Recibido',
      hint: 'Esta página no existe. Puede que el enlace esté desactualizado o que la URL tenga un error.',
      back: 'Ir a la página de inicio',
    },
  },
} as const;

export type UI = (typeof ui)['en'];
export const useUI = (lang: Lang) => ui[lang] as unknown as UI;
