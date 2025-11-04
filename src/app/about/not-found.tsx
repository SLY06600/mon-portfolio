import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center space-y-6">
      <h1 className="text-6xl font-extrabold text-blue-600">404</h1>
      <h2 className="text-2xl font-bold">Page non trouvée</h2>
      <p className="text-gray-600 max-w-md">
        Oups ! La page que vous recherchez n’existe pas ou a été déplacée.
      </p>
      <Link
        href="/about"
        className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Retour en arriere
      </Link>
    </div>
    <Footer />
    </>
  );
}