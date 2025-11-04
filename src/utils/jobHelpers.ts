export type Job = {
  id?: string;
  title: string;
  company?: string;
  location?: string;
  contractType?: string;
  salary?: string | number;
  remote?: boolean;
  description: string;
  requirements?: string[];
  niceToHave?: string[];
  responsibilities?: string[];
  url?: string;
  postedDate?: string;
  refId?: string;
};

export type CandidateProfile = {
  name: string;
  title?: string;
  summary?: string;
  skills: string[];
  experiences?: { company?: string; title?: string; years?: number; bullets?: string[] }[];
  education?: string[];
  languages?: string[];
  contact?: { email?: string; phone?: string };
};

const COMMON_SKILLS = [
  'react',
  "c#",
  'csharp',
  '.net',
  'react.js',
  'next.js',
  'typescript',
  'javascript',
  'node',
  'node.js',
  'express',
  'graphql',
  'rest',
  'docker',
  'kubernetes',
  'aws',
  'terraform',
  'sql',
  'postgres',
  'mongodb',
  'html',
  'css',
  'sass',
  'tailwind',
  'jest',
  'vitest',
  'testing',
  'ci/cd',
  'webpack',
  'babel',
];

// Extend common skills with additional backend frameworks and infra commonly present in job listings
const EXTRA_COMMON = [
  'php',
  'laravel',
  'symfony',
  'spring',
  'spring boot',
  'spring-boot',
  'postgresql',
  'mysql',
  'redis',
  'react-native',
  'firebase',
  'openweather',
  'java',
  'quarkus',
  'azure',
  'microservices',
  'jwt',
  'oauth',
];

// append extras
for (const s of EXTRA_COMMON) COMMON_SKILLS.push(s);

function normalize(skill: string) {
  return skill
    .toLowerCase()
    .replace(/[^a-z0-9+.#\-]/g, '')
    .replace(/js$/, 'js');
}

/**
 * Extract likely requirements / skills from a free-text job description.
 * Uses a simple keyword match against COMMON_SKILLS plus heuristics.
 */
export function parseRequirements(text: string): string[] {
  if (!text) return [];
  const found = new Set<string>();
  const lower = text.toLowerCase();

  for (const s of COMMON_SKILLS) {
    const re = new RegExp('\\b' + s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&') + '\\b', 'i');
    if (re.test(lower)) found.add(s);
  }

  // simple extraction of words that look like skills (CamelCase or tech names)
  const tokenMatches = Array.from(lower.matchAll(/\b[a-z+#.]{2,30}\b/g)).map((m) => m[0]);
  for (const t of tokenMatches) {
    if (t.length > 1 && /[a-z]/.test(t)) {
      // add tokens that contain common substrings
      if (t.includes('react') || t.includes('node') || t.includes('typescript') || t.includes('sql')) {
        found.add(t);
      }
    }
  }

  return Array.from(found).map(normalize);
}

/**
 * Score a candidate against a job based on matching skills.
 * Returns percentage [0..100].
 */
export function scoreCandidate(job: Job, candidate: CandidateProfile): number {
  const jobReqs = (job.requirements && job.requirements.length > 0
    ? job.requirements
    : parseRequirements(job.description)) as string[];

  if (!jobReqs || jobReqs.length === 0) return 0;

  const normJobReqs = jobReqs.map(normalize);
  const normCand = candidate.skills.map(normalize);

  const matches = normJobReqs.filter((r) => normCand.includes(r));
  const score = Math.round((matches.length / normJobReqs.length) * 100);
  return score;
}

/**
 * Build CV sections prioritised for the given job.
 * Returns the list of priority sections and some bullets for Skills/Experience.
 */
export function buildCvSections(job: Job, candidate: CandidateProfile) {
  const jobReqs = (job.requirements && job.requirements.length > 0
    ? job.requirements
    : parseRequirements(job.description)) as string[];

  const normJobReqs = jobReqs.map(normalize);
  const normCand = candidate.skills.map(normalize);

  const matchedSkills = normCand.filter((s) => normJobReqs.includes(s));

  const skillsBullets = matchedSkills.length
    ? matchedSkills.map((s) => `• ${s}`)
    : candidate.skills.slice(0, 8).map((s) => `• ${s}`);

  const experienceBullets: string[] = [];
  if (candidate.experiences && candidate.experiences.length) {
    for (const exp of candidate.experiences.slice(0, 3)) {
      const title = exp.title ? `${exp.title}` : '';
      const company = exp.company ? ` @ ${exp.company}` : '';
      const years = exp.years ? ` (${exp.years} ans)` : '';
      experienceBullets.push(`• ${title}${company}${years}`);
      if (exp.bullets) {
        for (const b of exp.bullets.slice(0, 3)) experienceBullets.push(`  - ${b}`);
      }
    }
  }

  const prioritySections = ['Compétences', 'Expérience', 'Projets', 'Formation'];

  return {
    prioritySections,
    bulletsBySection: { Compétences: skillsBullets, Expérience: experienceBullets },
  };
}

/**
 * Generate a short French cover letter from job and candidate profile.
 */
export function generateCoverLetter(job: Job, candidate: CandidateProfile, tone: 'formal' | 'friendly' = 'formal') {
  const matched = parseRequirements(job.description).filter((r) => candidate.skills.map(normalize).includes(normalize(r)));
  const skillLine = matched.length ? `Je maîtrise notamment : ${matched.slice(0, 6).join(', ')}.` : '';

  const intro = tone === 'formal' ? `Madame, Monsieur,` : `Bonjour,`;

  const opening = `${intro}\n\nJe vous contacte au sujet de l'offre "${job.title}"${job.company ? ` chez ${job.company}` : ''}. ${candidate.summary ? candidate.summary + '\n\n' : ''}`;

  const body = `${skillLine} ${candidate.experiences && candidate.experiences.length ? `Lors de mes expériences précédentes, j'ai occupé des postes tels que ${candidate.experiences[0].title || ''} chez ${candidate.experiences[0].company || ''}.` : ''}`;

  const closing = `\n\nDisponible rapidement, je serais ravi(e) d'échanger afin de vous présenter plus en détail mon parcours et mes réalisations.\n\nCordialement,\n${candidate.name}`;

  return `${opening}\n${body}\n${closing}`;
}

const jobHelpers = {
  parseRequirements,
  scoreCandidate,
  buildCvSections,
  generateCoverLetter,
};

export default jobHelpers;
