import React from "react";
import "@/styles/print.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Icons
const IconEmail = () => (
  <svg aria-hidden="true" className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M4 4h16v16H4z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconPhone = () => (
  <svg aria-hidden="true" className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1.21.39 2.39.75 3.5a2 2 0 0 1-.45 2.11L9.91 10.09a16 16 0 0 0 6 6l1.76-1.76a2 2 0 0 1 2.11-.45c1.11.36 2.29.62 3.5.75a2 2 0 0 1 1.72 2z" />
  </svg>
);

const IconLocation = () => (
  <svg aria-hidden="true" className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconLink = () => (
  <svg aria-hidden="true" className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 1 7 7l-2 2a5 5 0 0 1-7-7l2-2z" />
    <path d="M14 11a5 5 0 0 0-7-7l-2 2a5 5 0 0 0 7 7l2-2z" />
  </svg>
);

const iconMap: { [key: string]: React.ReactElement } = {
  email: <IconEmail />,
  phone: <IconPhone />,
  location: <IconLocation />,
  link: <IconLink />,
  linkedin: <FaLinkedin />,
  gith: <FaGithub />,
};

interface CVData {
  personalInfo: { name: string; title: string };
  contact: { icon: string; text: string; href?: string }[];
  technicalSkills: string[];
  softSkills: string[];
  languages: string[];
  interests: string[];
  accroche: string;
  about: string;
  experiences: {
    title: string;
    company: string;
    period: string;
    location: string;
    description?: string;
  }[];
  personalProjects: { title: string; points: string[] }[];
  education: {
    degree: string;
    school: string;
    period: string;
    description?: string;
  }[];
}

interface CVComponentProps {
  data: CVData;
}

const EnglishResume: React.FC<CVComponentProps> = ({ data }) => (
  <div className="min-h-screen bg-white py-4 px-2 cv-container">
    <div className="mx-auto grid grid-cols-1 md:grid-cols-3 border border-gray-200">
      {/* Left Column */}
      <div className="bg-blue-900 text-white p-2 md:col-span-1 flex flex-col text-xs">
        <div className="text-center">
          <h2 className="text-lg font-bold mt-2">{data.personalInfo.name}</h2>
          <p className="text-[10px] text-blue-300 mt-1">{data.personalInfo.title}</p>
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-semibold border-b border-blue-400 pb-1">Contact</h3>
          <ul className="mt-2 space-y-1 text-[10px] text-blue-200">
            {data.contact.map(({ icon, text, href }, i) => (
              <li key={i}>
                {iconMap[icon]}
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="underline">
                    {text}
                  </a>
                ) : (
                  text
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-semibold border-b border-blue-400 pb-1">Technical Skills</h3>
          <ul className="mt-2 space-y-1 text-[10px] text-blue-300">
            {data.technicalSkills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-semibold border-b border-blue-400 pb-1">Soft Skills</h3>
          <ul className="mt-2 list-disc list-inside text-[10px] text-blue-300 space-y-0.5">
            {data.softSkills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-semibold border-b border-blue-400 pb-1">Languages</h3>
          <ul className="mt-2 space-y-0.5 text-[10px] text-blue-300">
            {data.languages.map((lang, i) => (
              <li key={i}>{lang}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-semibold border-b border-blue-400 pb-1">Interests</h3>
          <ul className="mt-2 list-disc list-inside text-[10px] text-blue-300 space-y-0.5">
            {data.interests.map((interest, i) => (
              <li key={i}>{interest}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Column */}
      <div className="p-3 md:col-span-2 text-[10px] space-y-3">
        <section>
          <p className="italic text-gray-700">{data.accroche}</p>
        </section>

        <section>
          <h3 className="text-base font-bold text-blue-900 border-b border-blue-200 pb-1">About</h3>
          <p className="text-[10px] leading-snug">{data.about}</p>
        </section>

        <section>
          <h3 className="text-base font-bold text-blue-900 border-b border-blue-200 pb-1">Experience</h3>
          <ul className="space-y-2">
            {data.experiences.map(({ title, company, period, location, description }, i) => (
              <li key={i}>
                <p className="font-semibold text-[11px]">
                  {title} — {company}
                </p>
                <p className="italic text-[9px]">
                  {location} — {period}
                </p>
                {description && <p className="mt-0.5">{description}</p>}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-base font-bold text-blue-900 border-b border-blue-200 pb-1">Personal Projects</h3>
          {data.personalProjects.map(({ title, points }, i) => (
            <div key={i} className="mt-1">
              <h4 className="font-semibold">{title}</h4>
              <ul className="list-disc ml-4 space-y-0.5">
                {points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h3 className="text-base font-bold text-blue-900 border-b border-blue-200 pb-1">Education</h3>
          <ul className="space-y-2">
            {data.education.map(({ degree, school, period, description }, i) => (
              <li key={i}>
                <p className="font-semibold text-[11px]">{degree}</p>
                <p className="italic text-[9px]">
                  {school} — {period}
                </p>
                {description && <p className="mt-0.5">{description}</p>}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  </div>
);

export default EnglishResume;
