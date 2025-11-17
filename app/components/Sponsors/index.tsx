"use client";

import Image from "next/image";
import Link from "next/link";

interface Sponsor {
  name: string;
  website: string;
  logoUrl: string;
}

const sponsors: Sponsor[] = [
  {
    name: "École Nationale Supérieure Polytechnique de Yaoundé (ENSPY)",
    website: "https://www.polytechnique.cm",
    logoUrl: "/images/sponsors/logo_enspy.jpg",
  },
  {
    name: "Université Grenoble Alpes",
    website: "https://www.univ-grenoble-alpes.fr",
    logoUrl: "/images/sponsors/uga.png",
  },
  {
    name: "INRIA",
    website: "https://www.inria.fr",
    logoUrl: "/images/sponsors/inria.png",
  },
  {
    name: "CNRS",
    website: "https://www.cnrs.fr",
    logoUrl: "/images/sponsors/cnrs.png",
  },
  {
    name: "Région Auvergne-Rhône-Alpes",
    website: "https://www.auvergnerhonealpes.fr",
    logoUrl: "/images/sponsors/ARA.png",
  },
  {
    name: "Laboratoire d'Informatique de Grenoble (LIG)",
    website: "https://www.liglab.fr",
    logoUrl: "/images/sponsors/LIG.svg",
  },
  {
    name: "Université de Yaoundé I",
    website: "https://www.uy1.uninet.cm",
    logoUrl: "/images/sponsors/uy1.png",
  },
  {
    name: "Chaire MIAI @ Grenoble Alpes",
    website: "https://miai.univ-grenoble-alpes.fr",
    logoUrl: "/images/sponsors/MIAI_Cluster.png",
  },
];

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="py-20 sm:py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-darkpurple mb-4 relative inline-block">
            Nos Partenaires & Sponsors
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-blue rounded-full w-24 mx-auto"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
            DIAGVERSE est soutenu par des institutions académiques et de recherche d’excellence au Cameroun et en France.
          </p>
        </div>

        {/* Grille avec carrés uniformes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12">
          {sponsors.map((sponsor) => (
            <Link
              key={sponsor.name}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              title={`Visiter le site de ${sponsor.name}`}
            >
              <div className="
                bg-white 
                rounded-xl 
                shadow-md 
                hover:shadow-xl 
                transition-all 
                duration-300 
                border 
                border-gray-200 
                w-44 h-44 md:w-48 md:h-48 
                flex 
                items-center 
                justify-center 
                p-4
              ">
                <Image
                  src={sponsor.logoUrl}
                  alt={`Logo ${sponsor.name}`}
                  width={180}
                  height={180}
                  className="object-contain w-full h-full"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Message discret */}
        <div className="text-center mt-16">
          <p className="text-sm text-gray-500">
            Merci à tous nos partenaires pour leur confiance et leur soutien.
          </p>
        </div>
      </div>
    </section>
  );
}
