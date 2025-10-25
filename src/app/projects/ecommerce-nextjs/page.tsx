import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ECommerceNextJS() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white px-6 py-16 max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">E-Commerce Next.js</h1>
                <p className="text-gray-700 mb-6">
                    Plateforme e-commerce complète développée avec Next.js, offrant une expérience utilisateur fluide, un catalogue de produits, un panier d&apos;achat et une intégration de paiement sécurisée.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Next.js pour le rendu côté serveur et les performances optimales</li>
                    <li>Intégration avec Stripe pour les paiements sécurisés</li>
                    <li>Gestion du catalogue de produits et du panier d&apos;achat</li>
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
