
import React, { useRef, useState } from "react";
import LettreDev from "../components/LettreDev";
import LettreAutre from "../components/LettreAutre";
import LettreStagiaire from "../components/LettreStagiaire";
import EnglishCoverLetter from "./EnglishCoverLetter";
import { useReactToPrint } from "react-to-print";

const CoverLetterSwitcher: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const [version, setVersion] = useState<"dev" | "autre" | "stagiaire" | "anglais">("dev");

  const handlePrint = useReactToPrint({
  contentRef: componentRef,
  documentTitle: "Ma_Lettre_de_Motivation - Sylvain Baraduc",
});


  const renderLetter = () => {
    switch (version) {
      case "dev":
        return <LettreDev />;
      case "autre":
        return <LettreAutre />;
      case "stagiaire":
        return <LettreStagiaire />;
      case "anglais":
        return <EnglishCoverLetter />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-end space-x-2 mb-6 no-print">
        <button
          onClick={() => setVersion("dev")}
          className={`px-4 py-2 rounded ${version === "dev" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Version Développeur
        </button>
        <button
          onClick={() => setVersion("autre")}
          className={`px-4 py-2 rounded ${version === "autre" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Version Polyvalente
        </button>
        <button
          onClick={() => setVersion("stagiaire")}
          className={`px-4 py-2 rounded ${version === "stagiaire" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Version Stagiaire
        </button>
        <button
          onClick={() => setVersion("anglais")}
          className={`px-4 py-2 rounded ${version === "anglais" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Version Anglaise
        </button>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handlePrint}
        >
          Télécharger en PDF
        </button>
      </div>

      {/* Wrapper avec ref pour impression */}
      <div ref={componentRef}>{renderLetter()}</div>
    </div>
  );
};

export default CoverLetterSwitcher;
