import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ApplicationReservationRestaurant() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white px-6 py-16 max-w-3xl mx-auto">   
                <h1 className="text-3xl font-bold mb-4">Application de réservation de restaurant</h1>
                <p className="text-gray-700 mb-6">
                    Outil complet de gestion des réservations par créneau horaire, avec une interface dédiée aux clients et un back-office pour le personnel du restaurant. Notifications par email et intégration avec les calendriers populaires. 
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Interface utilisateur intuitive pour les clients</li>
                    <li>Back-office pour gérer les réservations et les créneaux horaires</li>
                    <li>Notifications automatiques par email</li>
                    <li>Intégration avec Google Calendar et Outlook</li>
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
