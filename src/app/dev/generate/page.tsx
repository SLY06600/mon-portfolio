"use client";

import React, { useState } from 'react';
import sampleJob from '../../../data/sampleJob';
// sampleCandidate kept for fallback if needed
import annonceData from '../../../data/annonceData';
import { cvData } from '../../../data/cvData';
import {
  parseRequirements,
  scoreCandidate,
  buildCvSections,
  generateCoverLetter,
  Job,
  CandidateProfile,
} from '../../../utils/jobHelpers';

export default function Page() {
  const [selectedAnnonceIndex, setSelectedAnnonceIndex] = useState<number>(0);
  const [jobText, setJobText] = useState<string>(sampleJob.description || '');
  const [jobTitle, setJobTitle] = useState<string>(sampleJob.title || '');

  // build candidate profile from cvData
  function cvToCandidate(): CandidateProfile {
    const skillsArray: string[] = [];
    const tech = cvData.technicalSkills as Record<string, string[]> | undefined;
    if (tech) {
      for (const key of Object.keys(tech)) {
        const arr = tech[key];
        if (Array.isArray(arr)) {
          // Some entries are strings containing multiple comma-separated skills.
          for (const item of arr) {
            if (!item) continue;
            // split on commas, slashes, ' and ', and parentheses
            const parts = item.split(/,|\/|\band\b|\(|\)|;|-/i).map((p) => p.trim()).filter(Boolean);
            skillsArray.push(...parts);
          }
        }
      }
    }

    const experiences = (cvData.experiences || []) as Array<{ company?: string; title?: string; description?: string }>;
    const mappedExp = experiences.map((e) => ({ company: e.company, title: e.title, years: undefined, bullets: e.description ? [e.description] : [] }));

    const education = (cvData.education || []) as Array<{ degree?: string }>;

    return {
      name: cvData.personalInfo?.name || 'Candidat',
      title: cvData.personalInfo?.title || '',
      summary: cvData.about || '',
      skills: Array.from(new Set(skillsArray)).slice(0, 40),
      experiences: mappedExp,
      education: education.map((ed) => ed.degree || '').filter(Boolean),
      languages: cvData.languages || [],
      contact: { email: (cvData.contact && cvData.contact[0] && cvData.contact[0].text) || '' },
    } as CandidateProfile;
  }

  const [candidate] = useState<CandidateProfile>(cvToCandidate());
  const [score, setScore] = useState<number | null>(null);
  const [letter, setLetter] = useState<string>('');
  const [cvSections, setCvSections] = useState<{ prioritySections: string[]; bulletsBySection: Record<string, string[]> } | null>(null);

  function makeJob(): Job {
    // if annonceData available and selected, use it
    const annonce = annonceData && annonceData[selectedAnnonceIndex];
    if (annonce) {
      return {
        id: annonce.id,
        title: annonce.title || jobTitle,
        company: annonce.contact?.name || '',
        location: annonce.location || annonce.location,
        description: annonce.description || jobText,
        requirements: parseRequirements(annonce.description || jobText),
        url: undefined,
      } as Job;
    }

    return {
      ...sampleJob,
      title: jobTitle,
      description: jobText,
      requirements: parseRequirements(jobText),
    };
  }

  function handleGenerate() {
    const job = makeJob();
    const s = scoreCandidate(job, candidate);
    const letterText = generateCoverLetter(job, candidate, 'formal');
    const cv = buildCvSections(job, candidate);
    setScore(s);
    setLetter(letterText);
    setCvSections(cv);
  }

  function handleSelectAnnonce(e: React.ChangeEvent<HTMLSelectElement>) {
    const index = Number(e.target.value) || 0;
    setSelectedAnnonceIndex(index);
    const annonce = annonceData && annonceData[index];
    if (annonce) {
      setJobTitle(annonce.title || '');
      setJobText(annonce.description || '');
    }
  }

  return (
    <div style={{ padding: 24, fontFamily: 'Inter, system-ui, sans-serif' }}>
      <h1 style={{ marginBottom: 8 }}>Générateur CV / Lettre — Démo</h1>
      <p style={{ color: '#555' }}>
        Colle ici la description d&#39;une offre (ou utilise l&#39;exemple). Clique « Générer » pour obtenir le score, les
        sections CV prioritaires et une lettre de motivation.
      </p>

      <div style={{ display: 'flex', gap: 16, marginTop: 16 }}>
        <div style={{ flex: 1 }}>
          <label style={{ display: 'block', fontWeight: 600 }}>Titre de l'offre</label>
          <input
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            style={{ width: '100%', padding: 8, marginBottom: 8 }}
          />

          <label style={{ display: 'block', fontWeight: 600 }}>Description / Offre</label>
          <textarea
            value={jobText}
            onChange={(e) => setJobText(e.target.value)}
            rows={12}
            style={{ width: '100%', padding: 8, fontFamily: 'monospace' }}
          />

          <div style={{ marginTop: 8 }}>
            <button onClick={handleGenerate} style={{ padding: '8px 12px', marginRight: 8 }}>
              Générer
            </button>
            <button
              onClick={() => {
                setJobText(sampleJob.description || '');
                setJobTitle(sampleJob.title || '');
                setScore(null);
                setLetter('');
                setCvSections(null);
              }}
              style={{ padding: '8px 12px' }}
            >
              Réinitialiser
            </button>
          </div>
        </div>

        <div style={{ width: 420 }}>
          <div style={{ marginBottom: 12 }}>
            <h3>Profil candidat</h3>
            <div style={{ marginTop: 8 }}>
              <label style={{ display: 'block', fontWeight: 600 }}>Choisir une annonce</label>
              <select value={selectedAnnonceIndex} onChange={handleSelectAnnonce} style={{ width: '100%', padding: 8 }}>
                {annonceData && annonceData.length ? (
                  annonceData.map((a, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <option key={a.id || i} value={i}>{a.title || `Annonce ${i + 1}`}</option>
                  ))
                ) : (
                  <option value={0}>Exemple</option>
                )}
              </select>
            </div>
            <div>
              <strong>{candidate.name}</strong>
              <div style={{ color: '#555' }}>{candidate.title}</div>
            </div>
            <div style={{ marginTop: 8 }}>
              <strong>Compétences :</strong>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 6 }}>
                {candidate.skills.map((s) => (
                  <span
                    key={s}
                    style={{ background: '#eee', padding: '4px 8px', borderRadius: 6, fontSize: 12 }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div style={{ background: '#fafafa', padding: 12, borderRadius: 6 }}>
            <h4>Score</h4>
            <div style={{ fontSize: 24, fontWeight: 700 }}>{score !== null ? `${score} %` : '—'}</div>
            <h4 style={{ marginTop: 12 }}>Sections CV prioritaires</h4>
            {cvSections ? (
              <div>
                {cvSections.prioritySections.map((s: string) => (
                  <div key={s} style={{ fontWeight: 600 }}>
                    {s}
                  </div>
                ))}
                <div style={{ marginTop: 8 }}>
                  <strong>Compétences (extrait)</strong>
                  <ul>
                    {(cvSections.bulletsBySection?.['Compétences'] || []).map((b: string, i: number) => (
                      <li key={i}>{b.replace(/^•\s*/, '')}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div style={{ color: '#888' }}>Génère pour voir les sections.</div>
            )}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 20 }}>
        <h3>Lettre de motivation générée</h3>
        <pre style={{ whiteSpace: 'pre-wrap', background: '#fff', padding: 12, borderRadius: 6, border: '1px solid #eee' }}>
          {letter || 'Génère pour voir la lettre ici.'}
        </pre>
      </div>
    </div>
  );
}
