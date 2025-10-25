import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects: Record<string, { title: string; description: string; points: string[] }> = {
  "application-de-location-immobiliere": {
    title: "Application de location immobilière",
    description: "Application web complète avec React, Node.js et MongoDB.",
    points: [
      "Recherche, réservation, gestion des contrats",
      "Système de paiement intégré",
      "Tableau de bord administrateur",
    ],
  },
  // ...autres projets ici
};

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects[params.slug];

  if (!project) return notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-6 py-16 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-700 mb-6">{project.description}</p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          {project.points.map((pt, i) => (
            <li key={i}>{pt}</li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
