import React from "react";
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

interface DrawerProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ isOpen, setIsOpen }: DrawerProps) => {
    return (
        <main
            className={
                " fixed overflow-hidden z-50 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                (isOpen
                    ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                    : " transition-all delay-500 opacity-0 -translate-x-full  ")
            }
        >
            <section
                className={
                    "w-full max-w-md left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
                    (isOpen ? "translate-x-0" : "-translate-x-full")
                }
            >
                <article className="relative w-full max-w-md pb-10 flex flex-col space-y-6 h-full">
                    <header className="px-4 py-4 flex items-center justify-between border-b">
                        <Link href="#accueil" className='text-2xl font-bold text-blue' onClick={() => setIsOpen(false)}>
                            DiagVerse
                        </Link>
                        <button onClick={() => setIsOpen(false)} className="p-2">
                            <XMarkIcon className="block h-6 w-6" />
                        </button>
                    </header>
                    <div onClick={() => setIsOpen(false)}>
                        <DrawerContent />
                    </div>
                </article>
            </section>
            <section
                className="w-screen h-full cursor-pointer "
                onClick={() => setIsOpen(false)}
            ></section>
        </main>
    );
}

const DrawerContent = () => {
    const { navigation, contactLink, demoButton } = require('./Drawerdata');

    // LA MÊME FONCTION DE DÉFILEMENT
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col h-full">
            <div className="space-y-1 px-5 pt-2 pb-3">
                {[...navigation, contactLink].map((item: { name: string, href: string }) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        // ON AJOUTE L'ÉVÉNEMENT ONCLICK ICI AUSSI
                        onClick={(e) => handleLinkClick(e, item.href)}
                        className='text-black hover:bg-gray-100 hover:text-purple block py-3 rounded-md text-base font-medium'
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
            <div className="mt-auto px-5 pb-5">
                <a
                    href={demoButton.href}
                    onClick={(e) => handleLinkClick(e, demoButton.href)}
                    className='w-full text-center text-md font-semibold bg-blue text-white py-3 px-6 rounded-full hover:bg-navyblue transition-colors'
                >
                    {demoButton.name}
                </a>
            </div>
        </div>
    )
}

export default Drawer;