"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";

interface Developer {
  name: string;
  role: string;
  avatar: string;
  linkedinUrl: string;
}

const developers: Developer[] = [
  {
    name: "Alain MBO",
    role: "Ingénieur de Conception",
    avatar: "/images/wework/mbo.jpg",
    linkedinUrl: "https://www.linkedin.com/in/alain-g%C3%A9rard-mbo-49608b281/",
  },
  {
    name: "Anaïs MBAHA",
    role: "Ingénieure de Conception",
    avatar: "/images/wework/anais.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/michele-anais-mbaha-ndoundam-4a3502273/",
  },
];

export default function TeamDev() {
  return (
    <section
      id="equipe-dev"
      className="py-20 sm:py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-darkpurple mb-4 relative inline-block">
            L'Équipe de Développement
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-blue rounded-full w-32 mx-auto"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
            Le Squelette du DIAGVERSE n'a pas de secret sur eux ... 
          </p>
        </div>

        {/* Grille centrée – 2 personnes seulement */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 max-w-4xl mx-auto justify-center">
          {developers.map((dev) => (
            <div
              key={dev.name}
              className="group relative bg-white text-center shadow-md rounded-2xl p-10 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl"
            >
              {/* Avatar avec orbites animées */}
              <div className="relative w-44 h-44 mx-auto mb-8 flex items-center justify-center">
                {/* Orbite bleue */}
                <div className="absolute w-52 h-52 border-2 border-blue/60 rounded-full opacity-0 group-hover:opacity-100 animate-spin-slow"></div>
                {/* Orbite verte */}
                <div className="absolute w-56 h-56 border-2 border-green-400/60 rounded-full opacity-0 group-hover:opacity-100 animate-spin-reverse"></div>

                {/* Avatar */}
                <div className="relative w-40 h-40 overflow-hidden rounded-full border-4 border-blue/20 group-hover:border-blue transition-all duration-500">
                  <Image
                    src={dev.avatar}
                    alt={`Photo de ${dev.name}`}
                    fill
                    className="object-cover"
                  />

                  {/* Icône LinkedIn */}
                  <Link
                    href={dev.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 bg-blue text-white rounded-full p-2.5 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110 shadow-lg"
                    aria-label={`LinkedIn de ${dev.name}`}
                  >
                    <Linkedin size={20} />
                  </Link>
                </div>
              </div>

              {/* Nom et rôle */}
              <h3 className="text-2xl font-bold text-darkpurple group-hover:text-blue transition-colors duration-300">
                {dev.name}
              </h3>
              <p className="text-lg text-gray-600 group-hover:text-gray-800 transition-colors duration-300 mt-2">
                {dev.role}
              </p>

              {/* Ligne décorative */}
              <div className="w-0 h-1 bg-blue mx-auto mt-6 rounded-full transition-all duration-500 group-hover:w-32"></div>
            </div>
          ))}
        </div>

        {/* Petit message bonus (optionnel) */}
        <div className="text-center mt-20">
          <p className="text-gray-500 italic">
            Le cœur technique et créatif du projet
          </p>
        </div>
      </div>
    </section>
  );
}