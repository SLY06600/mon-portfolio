// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// export default function ApplicationLocationImmobiliere() {
//   const [activeTab, setActiveTab] = useState<"description" | "features" | "screenshots" | "code">("description");

//   return (
//     <>
//       <Navbar />
//       <main className="min-h-screen bg-white px-6 py-16 max-w-5xl mx-auto space-y-12">
//         <h1 className="text-4xl font-bold text-center text-gray-800">
//           Application de location immobilière
//         </h1>

//         {/* Onglets */}
//         <div className="flex justify-center space-x-4 mb-8">
//           {["description", "features", "screenshots", "code"].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab as any)}
//               className={`px-4 py-2 rounded-t-lg font-semibold ${
//                 activeTab === tab
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//               }`}
//             >
//               {tab === "description" && "Description"}
//               {tab === "features" && "Fonctionnalités"}
//               {tab === "screenshots" && "Captures"}
//               {tab === "code" && "Code"}
//             </button>
//           ))}
//         </div>

//         {/* Contenu des onglets */}
//         <div className="border rounded-b-lg p-6 bg-gray-50">
//           {activeTab === "description" && (
//             <p className="text-gray-700 text-lg">
//               Application web complète permettant la recherche, la réservation et la gestion
//               de biens à louer, avec tableau de bord administrateur et paiements intégrés.
//               L’objectif est d’apprendre différentes logiques métiers selon les types d’applications.
//             </p>
//           )}

//           {activeTab === "features" && (
//             <ul className="list-disc list-inside text-gray-600 space-y-2">
//               <li>Recherche et filtrage des biens à louer</li>
//               <li>Réservation en ligne avec gestion des disponibilités</li>
//               <li>Tableau de bord admin pour gérer les biens, réservations et utilisateurs</li>
//               <li>Notifications par email lors de nouvelles réservations</li>
//             </ul>
//           )}

//           {activeTab === "screenshots" && (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <img
//                 src="/screenshots/home.png"
//                 alt="Page d'accueil"
//                 className="w-full rounded-lg shadow"
//               />
//               <img
//                 src="/screenshots/dashboard.png"
//                 alt="Tableau de bord admin"
//                 className="w-full rounded-lg shadow"
//               />
//               <img
//                 src="/screenshots/reservation.png"
//                 alt="Réservation d'un bien"
//                 className="w-full rounded-lg shadow"
//               />
//             </div>
//           )}

//           {activeTab === "code" && (
//             <div className="space-y-4">
//               <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
// {`// Exemple d'API route pour récupérer les biens
// app.get('/api/properties', async (req, res) => {
//   const properties = await Property.find();
//   res.json(properties);
// });`}
//               </pre>

//               <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
// {`// Exemple de composant React pour afficher la liste des biens
// function PropertyList({ properties }) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//       {properties.map(p => (
//         <div key={p._id} className="border p-4 rounded">
//           <h3 className="font-semibold">{p.name}</h3>
//           <p>{p.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }`}
//               </pre>
//             </div>
//           )}
//         </div>

//         {/* Lien retour */}
//         <div className="text-center">
//           <Link href="/projects" className="inline-block mt-6 text-blue-500 hover:underline">
//             ← Retour à la liste des projets
//           </Link>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// }


"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ApplicationLocationImmobiliere() {
  const tabs = ["description", "features", "screenshots", "code"] as const;
  type Tab = (typeof tabs)[number];
  const [activeTab, setActiveTab] = useState<Tab>("description");
  const [openFeatureIndex, setOpenFeatureIndex] = useState<number | null>(null);
  const [openScreenshotIndex, setOpenScreenshotIndex] = useState<number | null>(null);

  const features = [
    "Recherche et filtrage des biens à louer",
    "Réservation en ligne avec gestion des disponibilités",
    "Tableau de bord admin pour gérer les biens, réservations et utilisateurs",
    "Notifications par email lors de nouvelles réservations",
  ];

  const screenshots = [
    { src: "/screenshots/home.png", title: "Page d'accueil" },
    { src: "/screenshots/dashboard.png", title: "Tableau de bord admin" },
    { src: "/screenshots/reservation.png", title: "Réservation d'un bien" },
  ];

  const codeSnippets = [
    {
      title: "API Route - Récupération des biens",
      code: `app.get('/api/properties', async (req, res) => {
  const properties = await Property.find();
  res.json(properties);
});`,
    },
    {
      title: "Composant React - Liste des biens",
      code: `function PropertyList({ properties }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {properties.map(p => (
        <div key={p._id} className="border p-4 rounded">
          <h3 className="font-semibold">{p.name}</h3>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
}`,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-6 py-16 max-w-5xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Application de location immobilière
        </h1>
        {/* Onglets */}
        <div className="flex justify-center space-x-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-t-lg font-semibold ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab === "description" && "Description"}
              {tab === "features" && "Fonctionnalités"}
              {tab === "screenshots" && "Captures"}
              {tab === "code" && "Code"}
            </button>
          ))}
        </div>

        {/* Contenu des onglets */}
        <div className="border rounded-b-lg p-6 bg-gray-50 space-y-4">
          {activeTab === "description" && (
            <p className="text-gray-700 text-lg">
              Application web complète permettant la recherche, la réservation et la gestion
              de biens à louer, avec tableau de bord administrateur et paiements intégrés.
              L’objectif est d’apprendre différentes logiques métiers selon les types d’applications.
            </p>
          )}

          {activeTab === "features" && (
            <div className="space-y-2">
              {features.map((feat, idx) => (
                <div key={idx} className="border rounded-lg overflow-hidden">
                  <button
                    className="w-full text-left px-4 py-2 bg-gray-200 hover:bg-gray-300 font-medium flex justify-between items-center"
                    onClick={() =>
                      setOpenFeatureIndex(openFeatureIndex === idx ? null : idx)
                    }
                  >
                    {feat}
                    <span>{openFeatureIndex === idx ? "−" : "+"}</span>
                  </button>
                  {openFeatureIndex === idx && (
                    <div className="p-4 bg-gray-50 text-gray-700 transition-all duration-300">
                      {/* Ici tu peux mettre des détails supplémentaires */}
                      Détails et explications sur cette fonctionnalité.
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "screenshots" && (
            <div className="space-y-2">
              {screenshots.map((shot, idx) => (
                <div key={idx} className="border rounded-lg overflow-hidden">
                  <button
                    className="w-full text-left px-4 py-2 bg-gray-200 hover:bg-gray-300 font-medium flex justify-between items-center"
                    onClick={() =>
                      setOpenScreenshotIndex(openScreenshotIndex === idx ? null : idx)
                    }
                  >
                    {shot.title}
                    <span>{openScreenshotIndex === idx ? "−" : "+"}</span>
                  </button>
                  {openScreenshotIndex === idx && (
                    <div className="p-4 bg-gray-50 transition-all duration-300">
                      <img
                        src={shot.src}
                        alt={shot.title}
                        className="w-full rounded-lg shadow"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "code" && (
            <div className="space-y-4">
              {codeSnippets.map((snippet, idx) => (
                <div key={idx} className="border rounded-lg overflow-hidden">
                  <button
                    className="w-full text-left px-4 py-2 bg-gray-200 hover:bg-gray-300 font-medium flex justify-between items-center"
                    onClick={() =>
                      setOpenFeatureIndex(openFeatureIndex === idx ? null : idx)
                    }
                  >
                    {snippet.title}
                    <span>{openFeatureIndex === idx ? "−" : "+"}</span>
                  </button>
                  {openFeatureIndex === idx && (
                    <pre className="p-4 bg-gray-50 text-sm overflow-x-auto">
                      {snippet.code}
                    </pre>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Lien retour */}
        <div className="text-center">
          <Link href="/projects" className="inline-block mt-6 text-blue-500 hover:underline">
            ← Retour à la liste des projets
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
