"use client";
import React from "react";

const Demo = () => {
  return (
    <section id="demo" className="py-20 sm:py-32 relative">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">

        {/* 🔥 Titre accrocheur */}
        <h2 className="text-4xl lg:text-5xl font-bold text-darkpurple mb-6">
          Plongez dans l’univers du DIAGVERSE
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Découvrez en exclusivité comment fonctionne notre plateforme grâce à cette vidéo démonstrative.
        </p>

        {/* 🎥 Vidéo seule */}
        <div className="rounded-2xl overflow-hidden aspect-video w-full shadow-lg border border-gray-200">
          <iframe
            src="https://drive.google.com/file/d/1RxVIqEDRQWfwBLhs8L9x8_OWo0FrMqWJ/preview"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Demo;
