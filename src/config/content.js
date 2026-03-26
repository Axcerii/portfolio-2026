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
    location: "France, Paris",
    contactEmail: "malezethp@gmail.com",
    quote: "Sur un échiquier, je ne mangerais qu'en diagonale. Et de côté une fois par an.",
    image: "/Photo2.png",
    paragraphs: [
        <>
            Passionné par de multiples choses, qui m’ont fait vaciller {<span className="text-secondary font-bold">d'apprentissage</span>}, en compétences, avant
            de m’amener dans cet univers par une suite étonnante, quoique prévisible, du développement web.
        </>,
        <>
            Depuis tout jeune, je suis plongé dans le monde de l’informatique, de par ma famille ou encore mes passions.
            Comme pour tous les enfants, viennent les jeux vidéos, l’envie d’{<span className="text-secondary font-bold">apprendre</span>}, l’envie de {<span className="text-secondary font-bold">construire</span>}, l’envie de {<span className="text-secondary font-bold">partager</span>}.
            Je {<span className="text-secondary font-bold">crée</span>} mon premier forum avec 0 visiteur sur les outils no-code de la fin de la décennie 2000.
        </>,
        <>
            Ma soif de créativité me pousse à apprendre de mon côté, en grandissant, des outils multimédias comme le défunt Photofiltre Studio X ou encore Windows Movie Maker.
            Pour résumer, j’ai toujours été un gamin qui voulait évoluer et me diversifier, et aujourd’hui je suis un adulte qui veut continuer à {<span className="text-secondary font-bold">apprendre</span>}.
        </>,
        <>
            Un métier où l’on peut {<span className="text-secondary font-bold">apprendre</span>} en continu, {<span className="text-secondary font-bold">créer</span>}, {<span className="text-secondary font-bold">partager</span>} et {<span className="text-secondary font-bold">s’amuser</span>}, il n’y en a pas 37 et me voilà en études de développement web
            à la recherche d’une alternance pour ma seconde année de Master en tant que Développeur Full Stack.
        </>,
        <>
            Et si ce paragraphe vous a ennuyé, alors, amusez-vous à jeter un œil à mes {<a href="/#projets" className="text-accent hover:text-primary underline-center">projets</a>}, et surtout, merci de me découvrir.
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
        { name: "Figma", icon: <SiFigma /> },
        { name: "PHP Natif", icon: <SiPhp /> },
    ],
    skillsSubtitle: "Au cours de ma carrière, j'ai acquis de nombreuses compétences et appris d'innombrables technologies. Voici une liste non-exhaustive des outils avec lesquels j'ai travaillés :",
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
            ],
        },
        {
            title: "Frameworks",
            skills: [
                { name: "Modx", icon: <SiModx /> },
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
                { name: "Responsive Design", icon: <FaMobileAlt /> },
            ],
        },
    ],
    passionsSubtitle: "Mes passions sont la raison de qui je suis",
    passions: [
        {
            title: "World Building & Écriture",
            description: "Écrire l’histoire, pour moi, ça signifie parler de conflit, de construire des religions, d’analyser notre monde afin d’en créer une copie fantastique immatérielle présente dans mon esprit, et surtout celui de mes lecteurs et joueurs. L’écriture et le world building n’est que l’une des faces du dé qu’est ma passion pour les jeux de rôles papiers, et dieu sait combien il y en a.",
            image: "passions/everything.svg",
            bgImage: "/royaume_augeaime.jpg"
        },
        {
            title: "Musique Japonaise Moderne",
            description: "Un fil turquoise est apparu quand j’étais jeune, et il ne m’a jamais lâché. La musique japonaise m’a, non seulement, marqué, mais aussi influencé. Mes modèles d’hier et d’aujourd’hui, mon style, ma façon de penser, de raisonner jusqu’à mes designs, tout cela a été renversé par une technologie présentant pourtant une légende non-vivante. Je serai ravi de parler autour de ce sujet avec vous.",
            image: "passions/ne.svg",
            bgImage: "/hatsune_miku.png"
        }
    ]
};

// ─── Contact ───────────────────────────────────────────────────────────

export const contactContent = {
    email: "malezethp@gmail.com",
    linkedin: "https://www.linkedin.com/in/hugo-malezet-a4a8821b9/",
    github: "https://github.com/Axcerii",
    cvFile: "/CV/Hugo_Malezet_CV.pdf"
};

