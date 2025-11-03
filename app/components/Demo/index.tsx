"use client";
import React, { useState } from "react";
import { PlayCircle, Wrench, Cog } from "lucide-react";
import { FaApple, FaGooglePlay, FaLinux, FaWindows } from "react-icons/fa";
import Image from "next/image";

const Demo = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <section id="demo" className="py-20 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-darkpurple mb-4">
            Découvrez la Démo
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Vous vous demandez sûrement à quoi ressemble le DIAGVERSE ...
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* COLONNE-1 : Étapes */}
          <div className="space-y-8">
            {/* Étape 1 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-blue text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-darkpurple">
                  Accéder au DIAGVERSE
                </h3>
                <p className="text-gray-600 mt-1">
                  Crée un compte pour accéder au DIAGVERSE{" "}
                  <a
                    href="#"
                    className="text-blue-600 font-semibold underline hover:text-blue-800 hover:underline-offset-4 transition-all duration-300"
                  >
                    ici
                  </a>
                </p>
              </div>
            </div>

            {/* Étape 2 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-blue text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-darkpurple">
                  Télécharger l’application
                </h3>
                <p className="text-gray-600 mt-1">
                  Disponible sur toutes les plateformes majeures.
                </p>
                <div className="flex space-x-4 mt-3">
                  <button
                    onClick={handleClick}
                    aria-label="App Store"
                    className="text-gray-500 hover:text-blue-600 transition-transform hover:scale-110"
                  >
                    <FaApple size={28} />
                  </button>
                  <button
                    onClick={handleClick}
                    aria-label="Google Play"
                    className="text-gray-500 hover:text-green-600 transition-transform hover:scale-110"
                  >
                    <FaGooglePlay size={28} />
                  </button>
                  <button
                    onClick={handleClick}
                    aria-label="Windows"
                    className="text-gray-500 hover:text-blue-500 transition-transform hover:scale-110"
                  >
                    <FaWindows size={28} />
                  </button>
                  <button
                    onClick={handleClick}
                    aria-label="Linux"
                    className="text-gray-500 hover:text-orange-500 transition-transform hover:scale-110"
                  >
                    <FaLinux size={28} />
                  </button>
                </div>
              </div>
            </div>

            {/* Étape 3 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-blue text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-darkpurple">
                  Explorer des cas
                </h3>
                <p className="text-gray-600 mt-1">
                  Lancez-vous dans un scénario de diagnostic et testez vos
                  compétences.
                </p>
              </div>
            </div>
          </div>

          {/* COLONNE-2 : Vidéo Google Drive */}
          <div className="rounded-2xl overflow-hidden aspect-video w-full shadow-lg border border-gray-200">
            <iframe
              src="https://drive.google.com/file/d/1RxVIqEDRQWfwBLhs8L9x8_OWo0FrMqWJ/preview"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>

      {/* ✅ POPUP MODAL */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center relative">
            {/* Bouton fermer */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-2xl"
            >
              ×
            </button>

            {/* Logo DiagVerse */}
            <div className="flex justify-center mb-4">
              <Image
                src="/images/banner/Logo_Diagverse.png"
                alt="Logo DiagVerse"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>

            {/* Icône engrenage + tournevis */}
            <div className="flex justify-center space-x-3 mb-4 animate-spin-slow">
              <Image
                src="/images/maintenance.png"
                alt="Logo DiagVerse"
                width={70}
                height={70}
                className="rounded-full"
              />
            </div>

            {/* Message */}
            <h3 className="text-xl font-semibold text-darkpurple">
              Application en cours de maintenance !
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Nos équipes y travaillent activement 
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Demo;
