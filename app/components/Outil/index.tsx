import React from 'react';
import Image from 'next/image';
import { Box, User, Activity, Smile, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: <Box className="h-10 w-10 text-blue" />,
    title: 'Environnement 3D',
    description:
      'Reproduction réaliste d’un centre de santé avec des éléments interactifs (lit, instruments).',
  },
  {
    icon: <User className="h-10 w-10 text-blue" />,
    title: 'Patient Virtuel',
    description:
      'Modèles 3D avec une grande diversité physique, dynamique et clinique.',
  },
  {
    icon: <Activity className="h-10 w-10 text-blue" />,
    title: 'Symptômes & Diagnostic',
    description:
      'Simulation de symptômes et d’examens physiques sur des zones corporelles définies.',
  },
  {
    icon: <Smile className="h-10 w-10 text-blue" />,
    title: 'Émotions Réalistes',
    description:
      'Expressions faciales basées sur des théories psychologiques via Face Control Rig.',
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-blue" />,
    title: 'Dialogue Interactif',
    description:
      'Module de chat intelligent avec des feedbacks pédagogiques pour guider l’apprenant.',
  },
];

const screenshots = [
  '/scroll/2.png',
  '/scroll/3.png',
  '/scroll/4.png',
  '/scroll/5.png',
  '/scroll/6.png',
  '/scroll/7.png'
];

const Manage = () => {
  return (
    <section id="outil" className="py-20 sm:py-32 bg-lightgrey">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-darkpurple mb-4">
            L’Outil DiagVerse
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Un environnement 3D pour la consultation, un patient virtuel 3D
            animé par l’intelligence artificielle et les agents virtuels.
          </p>
        </div>

        {/* Grille des fonctionnalités */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-darkpurple mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Section des captures */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-darkpurple">
            Captures d’écran de l’interface
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {screenshots.map((src, index) => (
              <div
                key={index}
                className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform"
              >
                <Image
                  src={src}
                  alt={`Capture d’écran ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manage;
