// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import {
//   Code2,
//   Image,
//   ListChecks,
//   Info,
//   ChevronDown,
//   Terminal,
//   Cpu,
//   Github,
//   ExternalLink,
// } from "lucide-react";

// interface ProjectLayoutProps {
//   title: string;
//   description: string;
//   features?: string[];
//   screenshots?: { src: string; title: string }[];
//   codeSnippets?: { title: string; code: string }[];
//   techStack?: string[];
//   github?: string;
//   live?: string;
// }

// export default function ProjectLayout(props: Readonly<ProjectLayoutProps>) {
//   const {
//     title,
//     description,
//     features = [],
//     screenshots = [],
//     codeSnippets = [],
//     techStack = [],
//     github,
//     live,
//   } = props;

//   const tabs = [
//     { id: "description", label: "Description", icon: <Info size={18} /> },
//     { id: "features", label: "Fonctionnalités", icon: <ListChecks size={18} /> },
//     { id: "screenshots", label: "Captures", icon: <Image size={18} /> },
//     { id: "code", label: "Code", icon: <Code2 size={18} /> },
//   ] as const;

//   type Tab = (typeof tabs)[number]["id"];
//   const [activeTab, setActiveTab] = useState<Tab>("description");
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   return (
//     <main className="min-h-screen bg-gray-50 px-6 py-16 max-w-5xl mx-auto space-y-12">
//       {/* Title */}
//       <h1 className="text-4xl font-bold text-center text-gray-900">{title}</h1>

//       {/* GitHub & Live buttons */}
//       <div className="flex justify-center gap-4 mt-2">
//         {github && (
//           <a
//             href={github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
//           >
//             <Github size={18} /> GitHub
//           </a>
//         )}
//         {live && (
//           <a
//             href={live}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//           >
//             <ExternalLink size={18} /> Live Demo
//           </a>
//         )}
//       </div>

//       {/* Technologies utilisées */}
//       {techStack.length > 0 && (
//         <div className="flex flex-wrap justify-center gap-3 mt-4">
//           {techStack.map((tech, idx) => (
//             <span
//               key={idx}
//               className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm"
//             >
//               <Cpu size={14} /> {tech}
//             </span>
//           ))}
//         </div>
//       )}

//       {/* Tabs */}
//       <div className="flex justify-center space-x-2 sm:space-x-4 mb-8 flex-wrap">
//         {tabs.map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//             className={`flex items-center gap-2 px-4 py-2 rounded-t-lg font-semibold transition ${
//               activeTab === tab.id
//                 ? "bg-blue-600 text-white shadow-md"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//           >
//             {tab.icon}
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* Content */}
//       <div className="border rounded-b-lg p-6 bg-white shadow space-y-4">
//         {activeTab === "description" && (
//           <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
//         )}

//         {activeTab === "features" && (
//           <div className="space-y-2">
//             {features.map((feat, idx) => (
//               <div key={idx} className="border rounded-lg overflow-hidden">
//                 <button
//                   className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 font-medium flex justify-between items-center"
//                   onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
//                 >
//                   {feat}
//                   <ChevronDown
//                     className={`transition-transform ${
//                       openIndex === idx ? "rotate-180" : ""
//                     }`}
//                     size={18}
//                   />
//                 </button>
//                 {openIndex === idx && (
//                   <div className="p-4 bg-gray-50 text-gray-700 transition-all duration-300">
//                     Détails et explications supplémentaires sur cette fonctionnalité.
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}

//         {activeTab === "screenshots" && (
//           <div className="grid sm:grid-cols-2 gap-6">
//             {screenshots.map((shot, idx) => (
//               <div
//                 key={idx}
//                 className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
//               >
//                 <img
//                   src={shot.src}
//                   alt={shot.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-2 text-center text-sm text-gray-700 font-medium">
//                   {shot.title}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {activeTab === "code" && (
//           <div className="space-y-4">
//             {codeSnippets.map((snippet, idx) => (
//               <div key={idx} className="border rounded-lg overflow-hidden">
//                 <button
//                   className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 font-medium flex justify-between items-center"
//                   onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
//                 >
//                   <div className="flex items-center gap-2">
//                     <Terminal size={18} />
//                     {snippet.title}
//                   </div>
//                   <ChevronDown
//                     className={`transition-transform ${
//                       openIndex === idx ? "rotate-180" : ""
//                     }`}
//                     size={18}
//                   />
//                 </button>
//                 {openIndex === idx && (
//                   <pre className="p-4 bg-gray-900 text-gray-100 text-sm overflow-x-auto rounded-b-lg whitespace-pre-wrap">
//                     {snippet.code}
//                   </pre>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Back link */}
//       <div className="text-center">
//         <Link
//           href="/projects"
//           className="inline-block mt-6 text-blue-600 hover:underline font-medium"
//         >
//           ← Retour à la liste des projets
//         </Link>
//       </div>
//     </main>
//   );
// }


// src/components/ProjectLayout.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Code2, Image as ImageIcon, List, Wrench, Code, Database, Server } from "lucide-react";
import Image from "next/image";

interface Screenshot {
  src: string;
  title: string;
}

interface CodeSnippet {
  title: string;
  code: string;
}

interface ProjectLayoutProps {
  title: string;
  description: string;
  features?: string[];
  screenshots?: Screenshot[];
  codeSnippets?: CodeSnippet[];
  techStack?: string[];
  github?: string;
  live?: string;
  image?: string;
}

export default function ProjectLayout({
  title,
  description,
  features,
  screenshots,
  codeSnippets,
  techStack,
  github,
  live,
  image,
}: ProjectLayoutProps) {
  const [tab, setTab] = useState<"overview" | "features" | "screenshots" | "code">("overview");
  const router = useRouter();

  // Mapping tech -> icon
  const techIcons: Record<string, JSX.Element> = {
    Java: <Code className="w-5 h-5" />,
    "C#": <Code className="w-5 h-5" />,
    "Spring Boot": <Code className="w-5 h-5" />,
    ".NET Core": <Code className="w-5 h-5" />,
    PostgreSQL: <Database className="w-5 h-5" />,
    SQLite: <Database className="w-5 h-5" />,
    React: <Code className="w-5 h-5" />,
    "Next.js": <Code className="w-5 h-5" />,
    TypeScript: <Code className="w-5 h-5" />,
    "Tailwind CSS": <Code className="w-5 h-5" />,
    MongoDB: <Database className="w-5 h-5" />,
    "Express": <Server className="w-5 h-5"  color="green"/>,
    "Sql-server": <Database className="w-5 h-5"  color="green"/>,
    "Python": <Code className="w-5 h-5"  color=""/>,


  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {image && (
          <div className="mb-6">
            <Image
              src={image}
              alt={title}
              width={800}
              height={400}
              className="mx-auto rounded-lg shadow-md object-cover"
              unoptimized
            />
          </div>
        )}

        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">{description}</p>
      </motion.div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        <button
          className={`px-4 py-2 rounded-xl transition ${
            tab === "overview" ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"
          }`}
          onClick={() => setTab("overview")}
        >
          <Wrench className="inline w-4 h-4 mr-2" />
          Aperçu
        </button>

        <button
          className={`px-4 py-2 rounded-xl transition ${
            tab === "features" ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"
          }`}
          onClick={() => setTab("features")}
        >
          <List className="inline w-4 h-4 mr-2" />
          Fonctionnalités
        </button>

        <button
          className={`px-4 py-2 rounded-xl transition ${
            tab === "screenshots" ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"
          }`}
          onClick={() => setTab("screenshots")}
        >
          <ImageIcon className="inline w-4 h-4 mr-2" />
          Captures
        </button>

        <button
          className={`px-4 py-2 rounded-xl transition ${
            tab === "code" ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"
          }`}
          onClick={() => setTab("code")}
        >
          <Code2 className="inline w-4 h-4 mr-2" />
          Code
        </button>
      </div>

      {/* Content */}
      <motion.div
        key={tab}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white p-6 rounded-2xl shadow-md"
      >
        {/* Overview / Tech Stack */}
        {tab === "overview" && (
          <div>
            <h3 className="text-xl font-semibold mb-3">Technologies utilisées</h3>
            <div className="flex flex-wrap gap-3">
              {techStack && techStack.length > 0 ? (
                techStack.map((tech) => (
                  <a
                    key={tech}
                    href={`https://www.google.com/search?q=${tech}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-gray-800 hover:bg-gray-200 transition"
                  >
                    {techIcons[tech] || <Code className="w-4 h-4" />}
                    <span className="text-sm">{tech}</span>
                  </a>
                ))
              ) : (
                <p className="text-gray-700">Technologies non spécifiées.</p>
              )}
            </div>
          </div>
        )}

        {/* Features */}
        {tab === "features" && features && (
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        )}

        {/* Screenshots */}
        {tab === "screenshots" && screenshots && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {screenshots.map((shot, i) => (
              <motion.div key={i} whileHover={{ scale: 1.03 }}>
                <Image
                  src={shot.src}
                  alt={shot.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md object-cover"
                  unoptimized
                />
                <p className="text-center text-sm text-gray-500 mt-2">{shot.title}</p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Code snippets */}
        {tab === "code" && codeSnippets && (
          <div className="space-y-6">
            {codeSnippets.map((snippet, i) => (
              <div key={i}>
                <h4 className="font-medium text-lg mb-2">{snippet.title}</h4>
                <pre className="bg-gray-900 text-green-200 p-4 rounded-lg overflow-x-auto">
                  <code>{snippet.code}</code>
                </pre>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Links */}
      <motion.div
        className="flex justify-center gap-4 mt-10 flex-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition"
          >
            Voir sur GitHub
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-500 transition"
          >
            Voir le site en ligne
          </a>
        )}
      </motion.div>

      {/* Back Link */}
      <div className="text-center mt-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={() => {
              if (window.history.length > 1) router.back();
              else router.push("/projects");
            }}
            className="text-blue-600 hover:underline font-bold"
          >
            {'\u2B05'} Retour
          </button>
        </motion.div>
      </div>
    </div>
  );
}
