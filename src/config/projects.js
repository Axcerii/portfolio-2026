import React from "react";
import { SiReact, SiNextdotjs, SiTailwindcss, SiJest, SiPhp, SiMysql, SiJquery, SiJavascript, SiModx, SiTypescript, SiSvelte, SiPrisma, SiDocker, SiPostgresql, SiNestjs } from "react-icons/si";
import { TbBrandAdobeIllustrator, TbBrandAdobePhotoshop, TbBrandAdobePremier } from "react-icons/tb";
import { TbBrandCSharp } from "react-icons/tb";

export const projectsContent = [
    {
        id: "projet-1",
        title: "Last Fragment",
        subtitle: "Un Jeu de Rôle",
        image: "/royaume_augeaime.jpg",
        description: "Résumer Last Fragment en quelques mots serait impossible. Au-delà d'un simple projet, c'est mon âme qui se trouve dans cette œuvre. J'ai réalisé des bots, des sites internet, d'innombrables assets et consacré des heures d'écriture à ce projet, qui n'a pour simple but que de nous divertir et de faire grandir mes amis et moi. Il s'agit d'un jeu de rôle papier, comme Donjons et Dragons, mais dans mon propre univers. Un site internet existe et me permet de regrouper mes informations en un seul endroit, ainsi que de m'aider à organiser mes sessions de jeu en ligne. Une version 2 est en cours et est disponible sur mon GitHub.",
        images: [
            "/royaume_augeaime.jpg",
            "/projets/lf/serena_eye.jpg",
            "/projets/lf/lf_background.png",
            "/projets/lf/dragon_symbol.jpg",
            "/projets/lf/saxifra.jpg",
            "/projets/lf/fiche_personnage.png",
            "/projets/lf/bestiaire.png",
            "/projets/lf/admin_combat.png"
        ],
        skills: [
            { name: "PHP", icon: <SiPhp /> },
            { name: "Photoshop", icon: <TbBrandAdobePhotoshop /> },
            { name: "Illustrator", icon: <TbBrandAdobeIllustrator /> },
            { name: "Premier", icon: <TbBrandAdobePremier /> },
            { name: "Javascript", icon: <SiJavascript /> },
            { name: "jQuery", icon: <SiJquery /> },
            { name: "MySql", icon: <SiMysql /> },
        ],
        link: "https://lastfragment.alwaysdata.net/",
        github: "https://github.com/Axcerii/LastFragment"
    },
    {
        id: "projet-2",
        title: "RenaultGroup - OneHealth",
        subtitle: "Application de mutuelle RenaultGroup",
        image: "/projets/onehealth/onehealth.png",
        description: "Travail dans le cadre d'un stage alterné chez Intersel, Livinweb. Création d'un site internet pour les droits à la santé des salariés de RenaultGroup. Le site permet de consulter ses droits à la santé dans toutes les langues où RenaultGroup est implanté. Le site utilise un système de CMS créer spécifiquement pour les clients de l'agence sur lequel j'ai pu travaillé. J'ai également travaillé sur l'accessibilité du site pour les personnes en situation de handicaps.",
        images: [
            "/projets/onehealth/onehealth.png",
            "/projets/onehealth/onehealth2.png"
        ],
        skills: [
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
            { name: "ModX", icon: <SiModx /> },
            { name: "Javascript", icon: <SiJavascript /> },
            { name: "jQuery", icon: <SiJquery /> },
            { name: "MySql", icon: <SiMysql /> },
        ],
        link: "https://onehealth.renaultgroup.com/",
    },
    {
        id: "projet-3",
        title: "Bwhat",
        subtitle: "Application d'Achat de Boîte Détente",
        image: "/projets/bwhat/bwhat.webp",
        description: "Projet fictif de création d'une application d'achat de boîte détente. Une vente de boîte pour se relaxer et se déconnecter des réseaux sociaux et des tracas du quotidien. Si seulement c'était réel...",
        images: [
            "/projets/bwhat/bwhat1.png",
            "/projets/bwhat/bwhat2.png",
            "/projets/bwhat/bwhat3.png"
        ],
        skills: [
            { name: "Typescript", icon: <SiTypescript /> },
            { name: "SvelteKit", icon: <SiSvelte /> },
            { name: "MySql", icon: <SiMysql /> },
            { name: "Prisma", icon: <SiPrisma /> },
            { name: "Docker", icon: <SiDocker /> },
        ],
        github: "https://github.com/Axcerii/bwhat/tree/master",
    },
    {
        id: "projet-4",
        title: "Héritage Silencieux",
        subtitle: "Partage d'histoire et contes",
        image: "/projets/hs/hs1.png",
        description: "Projet fictif de création d'une application de partage d'histoires et de contes pour le projet Last Fragment, avec un frontend et backend séparés. Le backend est testé avec Jest et utilise NestJS pour la création d'API REST. Le frontend est développé avec SvelteKit et Tailwind CSS pour une interface utilisateur réactive et moderne. L'application permet aux utilisateurs de soumettre, lire et commenter des histoires, favorisant ainsi la créativité et l'interaction au sein de la communauté.",
        images: [
            "/projets/hs/hs1.png",
            "/projets/hs/hs2.png",
            "/projets/hs/hs3.png",
            "/projets/hs/hs4.png"
        ],
        skills: [
            { name: "Svelte", icon: <SiSvelte /> },
            { name: "Typescript", icon: <SiTypescript /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "Prisma", icon: <SiPrisma /> },
            { name: "Docker", icon: <SiDocker /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
            { name: "NestJS", icon: <SiNestjs /> },
            { name: "Jest", icon: <SiJest /> },

        ],
        github: "https://github.com/Axcerii/ReaDBrary",
        link: "https://heritagesilencieux.fr",
    }
];
