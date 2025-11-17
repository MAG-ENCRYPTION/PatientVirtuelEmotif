"use client";
import React, { useState } from "react";
import {
  DownloadCloud,
  Package,
  Navigation,
  BrainCircuit,
  MessageCircle,
  Wrench,
  Cog,
  Book,
  BookAIcon,
  BookAlert,
} from "lucide-react";
import Image from "next/image";

const subSections = [
  {
    icon: <Package className="h-8 w-8 text-blue" />,
    title: "Installation",
    description: "Prérequis et guide de démarrage.",
  },
  {
    icon: <Navigation className="h-8 w-8 text-blue" />,
    title: "Navigation 3D",
    description: "Maîtrisez les contrôles de la simulation.",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-blue" />,
    title: "Diagnostic",
    description: "Utiliser les outils et l'IA d'aide.",
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-blue" />,
    title: "Émotions & Interactions",
    description: "Comprendre les retours du patient.",
  },
];

const Manuel = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <section id="manuel" className="py-20 sm:py-32 bg-lightgrey relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* TITRE ET DESCRIPTION CENTRÉS */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-darkpurple mb-4">
            Manuel d'Utilisation
          </h2>
          <p className="text-lg text-gray-600">
            Un guide détaillé pour vous aider à maîtriser toutes les
            fonctionnalités de DiagVerse.
          </p>
        </div>

        {/* GRILLE DES FONCTIONNALITÉS */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {subSections.map((section) => (
            <div
              key={section.title}
              className="bg-white p-6 rounded-xl shadow-sm text-center transform transition-transform hover:-translate-y-1"
            >
              <div className="inline-block bg-blue-100 p-3 rounded-full">
                {section.icon}
              </div>
              <h3 className="font-semibold text-lg mt-4 mb-1 text-darkpurple">
                {section.title}
              </h3>
              <p className="text-sm text-gray-600">{section.description}</p>
            </div>
          ))}
        </div>

        {/* BOUTON DE TÉLÉCHARGEMENT CENTRÉ */}
        <div className="mt-16 text-center">
          <button
            onClick={handleDownloadClick}
            className="bg-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-navyblue transition-transform transform hover:scale-105 inline-flex items-center gap-3"
          >
            <DownloadCloud className="h-6 w-6" />
            Télécharger le manuel PDF
          </button>
        </div>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center w-[90%] max-w-md relative">
            {/* Bouton de fermeture */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* Logo DiagVerse */}
            <div className="flex justify-center mb-4">
              <Image
                src="/images/banner/Logo_Diagverse.png"
                alt="Logo DiagVerse"
                width={150}
                height={150}
                className="rounded-full"
              />
            </div>

            {/* Icône développement */}
            <div className="flex justify-center items-center gap-3 mb-3 text-blue">
              <BookAlert className="h-20 w-20" />
            </div>

            <h2 className="text-2xl font-semibold text-darkpurple mb-2">
              Manuel en cours de rédaction 
            </h2>
            <p className="text-gray-600 text-sm">
              Le manuel PDF du DiagVerse est actuellement en cours de
              préparation. Merci de Patienter encore un tout petit peu. 🙏
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-6 bg-blue text-white px-6 py-2 rounded-full hover:bg-navyblue transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Manuel;
