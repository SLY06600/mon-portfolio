"use client";

import React from "react";
// import { useReactToPrint } from "react-to-print";
// import CVComponent from "@/components/CV";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// import { cvData } from "../../data/cvData";
// import { cvDataNonInformatique } from "../../data/cvDataNonInformatique";
// import CoverLetter from "@/components/CoverLetter";
// import EnglishCoverLetter from "@/components/EnglishCoverLetter";
import CoverLetterSwitcher from "@/components/CoverLetterSwitcher";
// import { data } from "react-router-dom";

export default function CV() {
//   const componentRef = useRef<HTMLDivElement>(null);
//   const [isMounted, setIsMounted] = useState(false);

  // On attend que le composant soit bien monté côté client
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const handlePrint = useReactToPrint({
//    contentRef: componentRef,
//     documentTitle: "Ma_Lettre_de_Motivation - Sylvain Baraduc",
//   });

//  const [lettreVersion, setLettreVersion] = useState<"dev" | "autre" | "stagiaire" | "anglais">("dev");


//   if (!isMounted) return null; // Empêche rendu serveur et s’assure que ref est attaché

  return (
    <>
      <Navbar className="no-print" />
  
      <CoverLetterSwitcher />
      
      <Footer />
    </>
  );
}