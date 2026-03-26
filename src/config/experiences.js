import React from "react";
import { FaGraduationCap, FaLaptopCode, FaBriefcase, FaScroll, } from "react-icons/fa";
import { SiRenault } from "react-icons/si";
import { MdOutlineWorkOutline } from "react-icons/md";

export const experiencesContent = [
    {
        id: "exp-0",
        title: "Développeur Fullstack",
        entity: "Alchiimy - Saint Germain en Laye",
        date: "2025 - Fevrier 2026",
        description: "Gestion complète d'un site internet sous Bubble.io pour un site de rencontre usant de données sensibles et de multiples API / Agent IA.",
        icon: <FaLaptopCode />,
    },
    {
        id: "exp-1",
        title: "MBA - Développeur Fullstack",
        entity: "MyDigitalSchool - Paris",
        date: "2025 - Aujourd'hui",
        description: "Continuation du CDA avec un approfondissement dans la gestion de projet, le développement d'application complexe et l'architecture logicielle.",
        icon: <FaGraduationCap />,
    },
    {
        id: "exp-2",
        title: "Développeur Fullstack",
        entity: "Intersel, Livinweb - Paris",
        date: "2025",
        description: "Développement de plusieurs site pour des clients (RenaultGroup, Sir Winston) en utilisant la technologie ModX (Framework PHP) sur des sites multilingues avec une attention particulière sur l'accessibilité.",
        icon: <SiRenault />,
    },
    {
        id: "exp-3",
        title: "Bachelor - Concepteur Développeur d'Applications (CDA) - Bac+3",
        entity: "MyDigitalSchool - Paris",
        date: "2024 - 2025",
        description: "Apprentissage du développement web et mobile avec les nouvelles technologies et un large éventail de connaissances sur les métiers du web. (Fullstack, UI/UX, SEO, DevSecOps, etc.)",
        icon: <FaGraduationCap />,
    },
    {
        id: "exp-4",
        title: "ENI École Informatique",
        entity: "Paris",
        date: "Fin 2023 - 2024",
        description: "Formation intensive sur le C# et l'usage du framework backend .NET et de ses outils associés. (SQL Server, Visual Studio, Entity Framework, etc.)",
        icon: <FaScroll />,
    },
    {
        id: "exp-5",
        title: "Stage Développeur Fullstack",
        entity: "Infotrafic - Puiseux-Pontoise",
        date: "2022",
        description: "Gestion des publicités et de l'AdSense sur le site web, update du site web avec les nouvelles versions de Angular et correction CSS.",
        icon: <FaBriefcase />,
    },
    {
        id: "exp-6",
        title: "Diplôme Universitaire de Technologie (DUT) en Métiers du Multimédia et de l'Internet (MMI) Bac+2",
        entity: "Université de Cergy - Sarcelles",
        date: "2020-2022",
        description: "Apprentissage de tous les outils numériques, du développement web, à la conception de base de données en passant par le design graphique, la communication, le marketing où encore le montage vidéo.",
        icon: <FaGraduationCap />,
    }
];
