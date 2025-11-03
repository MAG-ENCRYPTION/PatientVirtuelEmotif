import Image from "next/image";
import Link from "next/link";

// Liens synchronisés avec la navbar
const navigation = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'Objectif', href: '#objectif' },
  { name: 'Manuel', href: '#manuel' },
  { name: 'Démo', href: '#demo' },
  { name: 'Outil', href: '#outil' },
  { name: 'Contributeurs', href: '#contributeurs' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-10 px-6 lg:px-16 mt-24 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* COLONNE LOGO + ICONES SOCIALES */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold tracking-wide">DiagVerse</h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            
          </p>
          <div className="flex gap-5 pt-3">
            <Link href="https://linkedin.com" target="_blank" className="hover:scale-125 transition-transform duration-300">
              <Image src="/images/footer/linkedin.png" alt="LinkedIn" width={24} height={24} />
            </Link>
            <Link href="https://facebook.com" target="_blank" className="hover:scale-125 transition-transform duration-300">
              <Image src="/images/footer/facebook.svg" alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:scale-125 transition-transform duration-300">
              <Image src="/images/footer/twitter.svg" alt="Twitter" width={24} height={24} />
            </Link>
          </div>
        </div>

        {/* COLONNE MENU PRINCIPAL */}
        <div>
          <h4 className="text-xl font-semibold mb-6">Menu</h4>
          <ul className="space-y-3">
            {navigation.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COLONNE À PROPOS */}
        <div>
          <h4 className="text-xl font-semibold mb-6">À propos</h4>
          <ul className="space-y-3">
            <li>
              <Link href="#objectif" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                Notre mission
              </Link>
            </li>
            <li>
              <Link href="#contributeurs" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                Équipe
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* COLONNE LÉGALE */}
        <div>
          <h4 className="text-xl font-semibold mb-6">Légal</h4>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                Conditions d'utilisation
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* BAS DU FOOTER */}
      <div className="border-t border-gray-800 mt-16 pt-6 text-center text-gray-500 text-sm">
        © 2025 <span className="text-white font-semibold">DiagVerse</span>. Tous droits réservés.
      </div>
    </footer>
  );
}
