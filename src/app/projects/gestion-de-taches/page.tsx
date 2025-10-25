import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function GestionDeTaches() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white px-6 py-16 max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">Gestion de tâches</h1>
                <p className="text-gray-700 mb-6">
                    Application de gestion de tâches avec création, modification et suppression de tâches, 
                    organisation par catégories, et rappels par notifications.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Création, modification et suppression de tâches</li>
                    <li>Organisation des tâches par catégories</li>
                    <li>Rappels par notifications</li>

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