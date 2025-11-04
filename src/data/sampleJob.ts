import { Job } from '../utils/jobHelpers';

export const sampleJob: Job = {
  id: 'job-001',
  title: 'Développeur Frontend React (H/F)',
  company: 'Agence Digitale',
  location: 'Paris / Remote',
  contractType: 'CDI',
  salary: '35k-45k',
  remote: true,
  url: 'https://example.com/offre/react-dev-001',
  postedDate: '2025-11-01',
  description:
    `Nous recherchons un Développeur Frontend expérimenté sur React/TypeScript pour rejoindre notre équipe produit. Vous travaillerez sur des composants réutilisables, l'optimisation des performances et l'intégration d'APIs REST/GraphQL. Compétences requises : React, TypeScript, Next.js, tests (Jest/Vitest), CI/CD. Connaissances Docker et AWS appréciées.`,
  requirements: ['React', 'TypeScript', 'Next.js', 'Jest', 'CI/CD', 'REST', 'GraphQL'],
};

export default sampleJob;
