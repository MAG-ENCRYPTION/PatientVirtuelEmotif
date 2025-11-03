export interface NavLink {
    name: string;
    href: string;
}

export const navigation: NavLink[] = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Objectif', href: '#objectif' },
    { name: 'Manuel', href: '#manuel' },
    { name: 'Démo', href: '#demo' },
    { name: 'Outil', href: '#outil' },
    { name: 'Contributeurs', href: '#contributeurs' },
];

export const contactLink: NavLink = {
    name: 'Contact',
    href: '#contact',
};

export const demoButton: NavLink = {
    name: 'Regarder la démo',
    href: '#demo',
}