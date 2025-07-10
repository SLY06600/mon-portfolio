"use client";

import React from "react";
// import { useReactToPrint } from "react-to-print";
// import CVComponent from "@/components/CV";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// import { cvData } from "../../data/cvData";
// import { cvDataNonInformatique } from "../../data/cvDataNonInformatique";
import CvSwitcher from "@/components/CvSwitcher";
// import { data } from "react-router-dom";

export default function CV() {
  // const componentRef = useRef<HTMLDivElement>(null);
  // const [isMounted, setIsMounted] = useState(false);

  // On attend que le composant soit bien monté côté client
  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // const handlePrint = useReactToPrint({
  //  contentRef: componentRef,
  //   documentTitle: "Mon_CV - Sylvain Baraduc",
  // });

  // const [cvVersion, setCvVersion] = useState<"dev" | "autre">("dev");

  // if (!isMounted) return null; // Empêche rendu serveur et s’assure que ref est attaché

  return (
    <>
      <Navbar className="no-print" />
      {/* <div>
        <div className="flex justify-end p-4 no-print">
          <button
            onClick={() => setCvVersion("dev")}
            className={`px-4 py-2 rounded ${cvVersion === "dev" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          >
            Version Développeur
          </button>
          <button
            onClick={() => setCvVersion("autre")}
            className={`px-4 py-2 rounded ${cvVersion === "autre" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          >
            Version Polyvalente
          </button>
          <button>
            Version Stagiere
          </button>

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => {
              console.log("Ref content:", componentRef.current);
              handlePrint();
            }}
          >
            Télécharger en PDF
          </button>
        </div>

        <div ref={componentRef}>
          <CVComponent data={cvVersion === "dev" ? cvData : cvDataNonInformatique} />
        </div>
      </div> */}
      < CvSwitcher />
      <Footer />
    </>
  );
}
