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
    SiSass,
    SiMake,
    SiFlutter,
    SiPhp,
    SiCakephp,
    SiGoogleappsscript,
    SiNginx,
    SiApache,
    SiAnsible,
    SiJquery,
    SiLinux,
    SiPrisma,
    SiMysql,
    SiModx,
    SiDavinciresolve,
    SiKrita,
    SiBlender,
    SiPhotopea,
    SiObsstudio,
} from "react-icons/si";
import { TbBrandCSharp, TbSeo, TbBrandAdobeIllustrator, TbBrandAdobePhotoshop, TbBrandAdobePremier } from "react-icons/tb";
import { FaAngular, FaBootstrap, FaBrain, FaPaintBrush, FaGoogle, FaMobileAlt } from "react-icons/fa";
import { FaB } from "react-icons/fa6";
import { BiLogoVisualStudio, BiAccessibility } from "react-icons/bi";
import { GiSpellBook } from "react-icons/gi";

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
        { name: "Git", icon: <SiGit /> },
        { name: "Figma", icon: <SiFigma /> },
    ],
    skillsSubtitle: "Technologies & Outils",
    skills_masteries: [
        {
            title: "Langages",
            skills: [
                { name: "HTML", icon: <SiHtml5 /> },
                { name: "CSS", icon: <SiCss /> },
                { name: "JavaScript", icon: <SiJavascript /> },
                { name: "TypeScript", icon: <SiTypescript /> },
                { name: "PHP", icon: <SiPhp /> },
                { name: "C#", icon: <TbBrandCSharp /> },
                { name: "Modx", icon: <SiModx /> },
            ],
        },
        {
            title: "Frameworks",
            skills: [
                { name: "React", icon: <SiReact /> },
                { name: "Next.js", icon: <SiNextdotjs /> },
                { name: "Svelte", icon: <SiSvelte /> },
                { name: "Angular", icon: <FaAngular /> },
                { name: "Node.js", icon: <SiNodedotjs /> },
                { name: "CakePHP", icon: <SiCakephp /> },
                { name: "Flutter", icon: <SiFlutter /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss /> },
                { name: "Sass", icon: <SiSass /> },
                { name: "Bootstrap", icon: <FaBootstrap /> },
                { name: "jQuery", icon: <SiJquery /> },
                { name: "Bubble.io", icon: <FaB /> },
                { name: "Google Apps Script", icon: <SiGoogleappsscript /> },
                { name: "Make", icon: <SiMake /> },
            ],
        },
        {
            title: "Données & Back-end",
            skills: [
                { name: "PostgreSQL", icon: <SiPostgresql /> },
                { name: "MySQL", icon: <SiMysql /> },
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "Firebase", icon: <SiFirebase /> },
                { name: "Prisma", icon: <SiPrisma /> },
                { name: "Node.js", icon: <SiNodedotjs /> },
            ],
        },
        {
            title: "DevOps & Outils",
            skills: [
                { name: "Git", icon: <SiGit /> },
                { name: "Docker", icon: <SiDocker /> },
                { name: "Nginx", icon: <SiNginx /> },
                { name: "Apache", icon: <SiApache /> },
                { name: "Linux", icon: <SiLinux /> },
                { name: "Ansible", icon: <SiAnsible /> },
                { name: "Vite", icon: <SiVite /> },
                { name: "Vercel", icon: <SiVercel /> },
                { name: "Visual Studio", icon: <BiLogoVisualStudio /> },
            ],
        },
        {
            title: "Design & Créatif",
            skills: [
                { name: "Figma", icon: <SiFigma /> },
                { name: "Adobe Illustrator", icon: <TbBrandAdobeIllustrator /> },
                { name: "Adobe Photoshop", icon: <TbBrandAdobePhotoshop /> },
                { name: "Adobe Premiere Pro", icon: <TbBrandAdobePremier /> },
                { name: "DaVinci Resolve", icon: <SiDavinciresolve /> },
                { name: "Krita", icon: <SiKrita /> },
                { name: "Blender", icon: <SiBlender /> },
                { name: "Photopea", icon: <SiPhotopea /> },
                { name: "OBS Studio", icon: <SiObsstudio /> },
                { name: "UI/UX", icon: <FaPaintBrush /> },
                { name: "SEO", icon: <TbSeo /> },
                { name: "SEA", icon: <FaGoogle /> },
                { name: "Accessibilité", icon: <BiAccessibility /> },
                { name: "Storytelling", icon: <GiSpellBook /> },
                { name: "Mobile", icon: <FaMobileAlt /> },
            ],
        },
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
