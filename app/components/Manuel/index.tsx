import React from 'react';
import { DownloadCloud, Package, Navigation, BrainCircuit, MessageCircle } from 'lucide-react';


const subSections = [
    {
        icon: <Package className="h-8 w-8 text-blue" />,
        title: "Installation",
        description: "Prérequis et guide de démarrage."
    },
    {
        icon: <Navigation className="h-8 w-8 text-blue" />,
        title: "Navigation 3D",
        description: "Maîtrisez les contrôles de la simulation."
    },
    {
        icon: <BrainCircuit className="h-8 w-8 text-blue" />,
        title: "Diagnostic (IA)",
        description: "Utiliser les outils et l'IA d'aide."
    },
    {
        icon: <MessageCircle className="h-8 w-8 text-blue" />,
        title: "Émotions & Interactions",
        description: "Comprendre les retours du patient."
    },
];

const Manuel = () => {
    return (
        <section id="manuel" className="py-20 sm:py-32 bg-lightgrey">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* TITRE ET DESCRIPTION CENTRÉS */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-bold text-darkpurple mb-4">
                        Manuel d'Utilisation
                    </h2>
                    <p className="text-lg text-gray-600">
                        Un guide détaillé pour vous aider à maîtriser toutes les fonctionnalités de DiagVerse.
                    </p>
                </div>

                {/* GRILLE DES FONCTIONNALITÉS */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {subSections.map(section => (
                        <div key={section.title} className="bg-white p-6 rounded-xl shadow-sm text-center transform transition-transform hover:-translate-y-1">
                            <div className="inline-block bg-blue-100 p-3 rounded-full">
                                {section.icon}
                            </div>
                            <h3 className="font-semibold text-lg mt-4 mb-1 text-darkpurple">{section.title}</h3>
                            <p className="text-sm text-gray-600">{section.description}</p>
                        </div>
                    ))}
                </div>

                {/* BOUTON DE TÉLÉCHARGEMENT CENTRÉ */}
                <div className="mt-16 text-center">
                    <a
                        href="/manual.pdf"
                        download
                        className="bg-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-navyblue transition-transform transform hover:scale-105 inline-flex items-center gap-3"
                    >
                        <DownloadCloud className="h-6 w-6" />
                        Télécharger le manuel PDF
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Manuel;