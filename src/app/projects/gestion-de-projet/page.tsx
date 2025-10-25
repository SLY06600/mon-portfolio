import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ApplicationGestionDeProjet() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white px-6 py-16 max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">Application de gestion de projet</h1>
                <p className="text-gray-700 mb-6">
                    Outil complet de gestion de projet permettant la création, l&apos;assignation et le suivi des tâches, avec des fonctionnalités de collaboration en temps réel et des tableaux de bord personnalisables.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">  
                    <li>Création, assignation et suivi des tâches</li>
                    <li>Fonctionnalités de collaboration en temps réel</li>
                    <li>Tableaux de bord personnalisables</li>
                </ul>
                {/* Retour à la liste des projets */}
                <Link href="/projects" className="inline-block mt-6 text-blue-500 hover:underline">
                    ← Retour à la liste des projets
                </Link>
            </main>
            <Footer />
        </>
    );
}
