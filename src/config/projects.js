import React from "react";
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiFirebase } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

export const projectsContent = [
    {
        id: "projet-1",
        title: "Chronicles of Aethelgard",
        subtitle: "Un RPG de Dark Fantasy",
        image: "/royaume_augeaime.jpg", // Placeholder image from the passions
        description: "Un jeu de rôle immersif en ligne, axé sur la narration et les choix des joueurs. Développé avec un moteur maison en C# pour le backend et React pour interfaces web de gestion de personnage.",
        images: [
            "/royaume_augeaime.jpg",
            "/royaume_augeaime.jpg",
            "/royaume_augeaime.jpg"
        ],
        skills: [
            { name: "C#", icon: <TbBrandCSharp /> },
            { name: "React", icon: <SiReact /> },
            { name: "Node.js", icon: <SiNodedotjs /> }
        ],
        link: "https://example.com/aethelgard",
        github: "https://github.com/example/aethelgard"
    },
    {
        id: "projet-2",
        title: "Nexus Dashboard",
        subtitle: "Interface d'Analytique",
        image: "/hatsune_miku.png", // Placeholder image
        description: "Un tableau de bord moderne et performant pour la visualisation de données en temps réel. Construit avec Next.js et stylisé avec Tailwind CSS pour une esthétique épurée.",
        images: [
            "/hatsune_miku.png",
            "/hatsune_miku.png"
        ],
        skills: [
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
            { name: "Firebase", icon: <SiFirebase /> }
        ],
        link: "https://example.com/nexus",
        // No GitHub link for this one to demonstrate conditional rendering
    }
];
