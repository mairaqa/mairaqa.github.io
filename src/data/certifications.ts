import type { L } from '../i18n';

export type CertGroup = 'testing' | 'ai' | 'linux';

export interface Certification {
  /** certification = passed an accredited exam; course = completion certificate */
  type: 'certification' | 'course';
  name: L;
  /** Shorter name for the one-page resume (falls back to `name`). */
  short?: L;
  issuer: string;
  /** ISO date (yyyy-mm-dd), used for sorting and display */
  date: string;
  group: CertGroup;
  /** Credential id. Privacy: not published by default, the verification link is enough. */
  id?: string;
  /** Public verification page from the issuer. Preferred over a file. */
  verifyUrl?: string;
  /**
   * Your own copy in public/certificates/. Images open in a viewer, PDFs in a new tab.
   * Privacy: not used by default. The cleaned images live in private/certificates/ (not published).
   */
  file?: string;
}

export const certGroups: Record<CertGroup, L> = {
  testing: 'testing',
  ai: { en: 'ai', es: 'inteligencia artificial' },
  linux: { en: 'linux & security', es: 'linux y seguridad' },
};

export const certifications: Certification[] = [
  // ---- testing
  {
    type: 'certification',
    name: 'ISTQB® Certified Tester Advanced Level Test Automation Engineering (v2.0)',
    short: 'ISTQB® CTAL Test Automation Engineering v2.0',
    issuer: 'ISTQB · iSQI',
    date: '2025-05-04',
    group: 'testing',
    verifyUrl: 'https://zertdb.isqi.org/certification/verification/t/E_9-24HZLYWE5%24rdFBQ9/language/en',
  },
  {
    type: 'certification',
    name: 'ISTQB® Certified Tester Foundation Level (v4.0)',
    short: 'ISTQB® CTFL Foundation Level v4.0',
    issuer: 'ISTQB · iSQI',
    date: '2024-04-22',
    group: 'testing',
    verifyUrl: 'https://zertdb.isqi.org/certification/verification/t/_Z_sh-PkQWtyh2_%24%24f%21p/language/en',
  },
  {
    type: 'certification',
    name: 'ITIL® Foundation Certificate in IT Service Management',
    short: 'ITIL® Foundation',
    issuer: 'AXELOS',
    date: '2020-02-01',
    group: 'testing',
  },
  {
    type: 'certification',
    name: 'Scrum Master',
    issuer: 'Scrum Manager',
    date: '2023-01-01',
    group: 'testing',
    verifyUrl: 'https://scrummanager.com/website/c/profile/member.php?id=42730',
  },
  {
    type: 'certification',
    name: 'Agile Foundation',
    issuer: 'Scrum Manager',
    date: '2023-01-01',
    group: 'testing',
    verifyUrl: 'https://scrummanager.com/website/c/profile/member.php?id=42730',
  },
  {
    type: 'course',
    name: 'Implement a Test Automation area',
    short: 'Implement a Test Automation area',
    issuer: 'Cool Testers',
    date: '2025-09-11',
    group: 'testing',
    verifyUrl: 'https://www.credential.net/b4025c81-550b-4a5c-aae0-24f065d2c31e',
  },
  {
    type: 'course',
    name: 'Appium Mobile Automation: Android & iOS + Frameworks + CI/CD',
    short: 'Appium Mobile Automation (Android & iOS)',
    issuer: 'Udemy',
    date: '2021-12-17',
    group: 'testing',
    verifyUrl: 'https://www.udemy.com/certificate/UC-78ec186c-34d9-4b1e-ab0d-bea4718e60ba/',
  },
  {
    type: 'course',
    name: 'QA Testing: Guía Básica para QA y Robot Framework',
    short: 'QA Testing y Robot Framework',
    issuer: 'Udemy',
    date: '2026-11-18',
    group: 'testing',
    verifyUrl: 'https://www.udemy.com/certificate/UC-798e2ced-8162-477e-9b45-eb4be6cb9927/',
  },
  {
    type: 'course',
    name: 'Webservice Automation using SoapUI, Groovy and Maven',
    short: 'Webservice Automation with SoapUI',
    issuer: 'Udemy',
    date: '2019-12-13',
    group: 'testing',
    verifyUrl: 'https://www.udemy.com/certificate/UC-I66PPLAB/',
  },
  // ---- ai
  {
    type: 'course',
    name: 'Generative AI for Software Development (Professional Certificate, 3 courses)',
    short: 'Generative AI for Software Development',
    issuer: 'DeepLearning.AI',
    date: '2026-10-18',
    group: 'ai',
    verifyUrl: 'https://www.deeplearning.ai/certificates/f33fff11-0d43-46c9-a19d-b24808e8a213',
  },
  {
    type: 'course',
    name: 'Agentic AI',
    issuer: 'DeepLearning.AI',
    date: '2026-10-27',
    group: 'ai',
    verifyUrl: 'https://www.deeplearning.ai/certificates/491539c3-2822-488e-b240-a6dfd1b87436',
  },
  {
    type: 'course',
    name: 'AI Prompting for Everyone',
    issuer: 'DeepLearning.AI',
    date: '2026-10-06',
    group: 'ai',
    verifyUrl: 'https://www.deeplearning.ai/certificates/ac293d97-044b-42b8-94de-2f090c9bc03a',
  },
  // ---- linux & security (Hack4u, course titles in Spanish as issued)
  {
    type: 'course',
    name: 'Python Ofensivo',
    issuer: 'Hack4u',
    date: '2025-03-08',
    group: 'linux',
    verifyUrl: 'https://hack4u.io/certificate/4254-4958-5710-6431',
  },
  {
    type: 'course',
    name: 'Arch Linux desde Cero',
    issuer: 'Hack4u',
    date: '2026-03-21',
    group: 'linux',
    verifyUrl: 'https://hack4u.io/certificate/7996-6578-5376-3148',
  },
  {
    type: 'course',
    name: 'Personalización de Linux',
    issuer: 'Hack4u',
    date: '2025-03-18',
    group: 'linux',
    verifyUrl: 'https://hack4u.io/certificate/0106-4293-9819-9594',
  },
  {
    type: 'course',
    name: 'Introducción a Linux',
    issuer: 'Hack4u',
    date: '2024-12-09',
    group: 'linux',
    verifyUrl: 'https://hack4u.io/certificate/1954-4479-7865-7967',
  },
];

const newestFirst = (a: Certification, b: Certification) => b.date.localeCompare(a.date);
/** Exam-based certifications, most recent first. */
export const certs = certifications.filter((c) => c.type === 'certification').sort(newestFirst);
/** Courses of a group, most recent first. */
export const byGroup = (g: CertGroup) => certifications.filter((c) => c.type === 'course' && c.group === g).sort(newestFirst);
export const courseCount = certifications.filter((c) => c.type === 'course').length;
/** Entries dated yyyy-01-01 only know the year, so they show the year alone. */
export const hasMonth = (iso: string) => !iso.endsWith('-01-01');

const months = {
  en: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
  es: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
};
export const formatDate = (iso: string, lang: 'en' | 'es') => {
  const [y, m] = iso.split('-');
  return hasMonth(iso) ? `${months[lang][Number(m) - 1]} ${y}` : y;
};
