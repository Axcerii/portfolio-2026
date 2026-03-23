import React from "react";
import { FaGraduationCap, FaLaptopCode, FaBriefcase } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";

export const experiencesContent = [
    {
        id: "exp-1",
        title: "Concepteur Développeur d'Applications",
        entity: "Tech Innovators - Paris",
        date: "2023 - Présent",
        description: "Développement d'interfaces web complexes et de microservices performants. Mise en place de pipelines CI/CD et gestion d'une équipe de développeurs juniors dans un contexte Agile.",
        icon: <FaLaptopCode />,
    },
    {
        id: "exp-2",
        title: "Alternance Développeur Full-Stack",
        entity: "Agence Créative Web - Lyon",
        date: "2021 - 2023",
        description: "Création de sites vitrines et d'applications E-commerce sur mesure. Participation active à l'architecture des bases de données et au renforcement de la sécurité des applications.",
        icon: <MdOutlineWorkOutline />,
    },
    {
        id: "exp-3",
        title: "BTS SIO Option SLAM",
        entity: "Lycée Polyvalent René Descartes",
        date: "2019 - 2021",
        description: "Apprentissage des fondamentaux du développement objet, de la conception de bases de données, et l'architecture logiciel. Projet de fin d'année réalisé autour de solutions de gestion hospitalière.",
        icon: <FaGraduationCap />,
    },
    {
        id: "exp-4",
        title: "Stage Intégrateur Web",
        entity: "Studio Pixels - Marseille",
        date: "Été 2020",
        description: "Intégration de maquettes Figma en HTML/CSS/JS. Optimisation SEO et amélioration de l'accessibilité sur des plateformes existantes.",
        icon: <FaBriefcase />,
    }
];
