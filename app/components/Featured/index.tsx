"use client"
import React from 'react';
import { Download, PlayCircle, UserPlus} from 'lucide-react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { FaWindows } from 'react-icons/fa';

const Featured = () => {
    return (
        <section id="demo" className="py-20 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-darkpurple mb-4">
                        Découvrez la Démo
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Testez DiagVerse avec une démo interactive. Téléchargez l’app ou accédez en ligne pour explorer un scénario de diagnostic.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

                    {/* COLONNE-1 : Étapes */}
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 bg-blue text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">1</div>
                            <div>
                                <h3 className="text-xl font-semibold text-darkpurple">Créer un compte gratuit</h3>
                                <p className="text-gray-600 mt-1">Inscrivez-vous en quelques secondes pour accéder à la plateforme.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 bg-blue text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">2</div>
                            <div>
                                <h3 className="text-xl font-semibold text-darkpurple">Télécharger l’application</h3>
                                <p className="text-gray-600 mt-1">Disponible sur toutes les plateformes majeures.</p>
                                <div className="flex space-x-4 mt-3">
                                    {/* Remplacez les '#' par vos vrais liens */}
                                    <a href="#" aria-label="App Store" className="text-gray-500 hover:text-black"><FaApple size={28} /></a>
                                    <a href="#" aria-label="Google Play" className="text-gray-500 hover:text-black"><FaGooglePlay size={28} /></a>
                                    <a href="#" aria-label="Windows" className="text-gray-500 hover:text-black"><FaWindows size={28} /></a>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 bg-blue text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">3</div>
                            <div>
                                <h3 className="text-xl font-semibold text-darkpurple">Explorer des cas</h3>
                                <p className="text-gray-600 mt-1">Lancez-vous dans un scénario de diagnostic et testez vos compétences.</p>
                            </div>
                        </div>
                    </div>

                    {/* COLONNE-2 : Vidéo Placeholder */}
                    <div className="bg-gray-300 rounded-2xl aspect-video w-full flex flex-col items-center justify-center border-2 border-dashed cursor-pointer hover:border-blue transition-colors">
                        {/* Ce bouton peut soit lancer une vidéo externe, soit être remplacé par une vidéo embarquée */}
                        <a href="#" className="group">
                            <PlayCircle className="h-20 w-20 text-gray-500 group-hover:text-blue transition-colors" />
                            <p className="mt-4 text-gray-600 font-semibold group-hover:text-blue">Lancer la démo</p>
                        </a>
                        <span className="mt-2 text-sm text-gray-500">(fichier: demo-video.mp4)</span>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Featured;
