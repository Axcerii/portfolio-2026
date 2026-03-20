import React from "react";
import {
    SiReact,
    SiJavascript,
    SiTypescript,
    SiNodedotjs,
    SiGit,
    SiCss,
    SiFigma,
    SiHtml5,
    SiSvelte,
    SiTailwindcss,
    SiNextdotjs,
    SiPostgresql,
    SiMongodb,
    SiDocker,
    SiFirebase,
    SiVercel,
    SiVite,
    SiVuedotjs,
    SiSass,
} from "react-icons/si";
import { MdOutlineDesignServices, MdAnimation } from "react-icons/md";
import { TbBrandCSharp, TbBrandThreejs } from "react-icons/tb";

export const presentationContent = {
    firstName: "Hugo",
    surname: "Malezet",
    title: "Développeur & Créatif",
    location: "France",
    contactEmail: "contact@hugo-malezet.fr",
    quote: "Je ne crée pas seulement ce qui est demandé — je crée ce qui est mémorable.",
    paragraphs: [
        <>
            Passionné par la création d'expériences numériques qui allient{" "}
            <span className="text-secondary font-semibold">esthétique</span> et{" "}
            <span className="text-secondary font-semibold">performance</span>, je suis
            développeur front-end et designer basé en France. J'ai à cœur de construire
            des interfaces qui racontent une histoire — chaque pixel, chaque interaction
            pensés pour l'utilisateur.
        </>,
        <>
            Mon univers créatif est fortement influencé par la fantasy, le world-building et
            la narration visuelle. Ces inspirations se retrouvent naturellement dans mes projets :
            des univers cohérents, une attention particulière aux détails, et une volonté permanente
            de dépasser le simple « ça fonctionne » pour atteindre le « ça captive ».
        </>,
        <>
            En dehors du code, vous me trouverez à écouter de la musique orchestrale, à construire
            des récits imaginaires, ou à explorer de nouvelles technologies qui me permettront de
            repousser encore les limites de ce que je crée.
        </>
    ],
    skills: [
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss /> },
        { name: "Svelte", icon: <SiSvelte /> },
        { name: "C#", icon: <TbBrandCSharp /> },
        { name: "React / Next.js", icon: <SiReact /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "UX / UI Design", icon: <MdOutlineDesignServices /> },
        { name: "Git", icon: <SiGit /> },
        { name: "Figma", icon: <SiFigma /> },
    ],
    skillsSubtitle: "Technologies & Outils",
    skills_masteries: [
        // — Languages
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "C#", icon: <TbBrandCSharp /> },
        // — Frameworks & Libraries
        { name: "React", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Svelte", icon: <SiSvelte /> },
        { name: "Vue.js", icon: <SiVuedotjs /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Three.js", icon: <TbBrandThreejs /> },
        // — Styling
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Sass", icon: <SiSass /> },
        // — Back-end & DB
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Firebase", icon: <SiFirebase /> },
        // — Build & Deploy
        { name: "Vite", icon: <SiVite /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Git", icon: <SiGit /> },
        // — Design
        { name: "Figma", icon: <SiFigma /> },
        { name: "UX / UI Design", icon: <MdOutlineDesignServices /> },
        { name: "Motion Design", icon: <MdAnimation /> },
    ],
    passionsSubtitle: "Au-delà du code, je nourris d'autres passions",
    passions: [
        {
            title: "World Building & Écriture",
            description: "Créer des mythes, forger des lois divines et dessiner les contours de civilisations oubliées. Le world-building est bien plus qu'une toile de fond pour moi : c'est un laboratoire d'idées où la narration rencontre la logique architecturale.",
            image: "passions/everything.svg",
            bgImage: "/royaume_augeaime.jpg"
        },
        {
            title: "Musique Japonaise Moderne",
            description: "Rythmes effrénés, fusions de genres et mélodies synthétiques. De la scène Vocaloid (Hatsune Miku) au math-rock, la musique japonaise moderne m'accompagne au quotidien ; elle est une source inépuisable d'énergie et d'inspiration créative.",
            image: "passions/ne.svg",
            bgImage: "/hatsune_miku.png"
        }
    ]
};
