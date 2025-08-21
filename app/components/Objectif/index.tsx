import React from 'react';
import Image from 'next/image';
import { Target } from 'lucide-react';

const Objectif = () => {
    return (
        <section id="objectif" className="py-20 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-darkpurple flex items-center justify-center gap-4">
                        <Target className="h-10 w-10 text-blue" />
                        L'Objectif de DiagVerse
                    </h2>
                </div>
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-x-16 gap-y-10">

                    {/* COLONNE-1 : Image illustrative */}
                    <div className="order-last lg:order-first">
                        {/* Placeholder pour votre image */}
                        <div className="w-full h-96 bg-gray-200 rounded-2xl flex items-center justify-center">
                            <span className="text-gray-500">Espace pour image illustrative</span>
                        </div>
                    </div>

                    {/* COLONNE-2 : Contenu texte */}
                    <div className="text-lg text-gray-700 leading-relaxed">
                        <p>
                            Réduire les erreurs de diagnostic en apportant aux médecins apprenants
                            un espace où l'apprentissage de la consultation se fait de façon simple.
                        </p>
                        <p className="mt-4">
                            DiagVerse offre un environnement 3D immersif et sécurisé pour s'entraîner,
                            expérimenter face à des patients virtuels, et perfectionner ses compétences
                            cliniques sans aucun risque.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Objectif;