import { CandidateProfile } from '../utils/jobHelpers';

export const sampleCandidate: CandidateProfile = {
  name: 'Sylvain Baraduc',
  title: 'Développeur Frontend / Fullstack',
  summary: "Développeur spécialisé React/Next.js et TypeScript, je construis des interfaces performantes et accessibles.",
  skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind', 'Node.js', 'Express', 'Jest', 'Vitest', 'Docker'],
  experiences: [
    {
      company: 'MonPortfolio',
      title: 'Développeur Frontend',
      years: 2,
      bullets: ['Développement d’un site portfolio en Next.js', 'Mise en place d’API routes', 'Internationalisation FR/EN'],
    },
  ],
  education: ['Licence Informatique'],
  languages: ['Français (natif)', 'Anglais (professionnel)'],
  contact: { email: 'sylvain@example.com' },
};

export default sampleCandidate;
