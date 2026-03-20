"use client";

import React, { useMemo } from "react";
import { presentationContent } from "@/config/content";

/* ────────────────────────────────────────────────────────────
   SkillCard – individual locker tile
   ──────────────────────────────────────────────────────────── */
function SkillCard({ name, icon }) {
    return (
        <article
            aria-label={name}
            title={name}
            className="
                group/card relative flex flex-col items-center justify-center gap-2
                px-3 py-5 rounded-xl cursor-default
                bg-transparent
                border border-background/20
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:border-primary
                hover:shadow-[0_0_0_1px_color-mix(in_srgb,var(--primary)_30%,transparent),0_8px_28px_-6px_color-mix(in_srgb,var(--primary)_35%,transparent)]
            "
        >
            {/* Notch accent at top */}
            <span
                className="
                    absolute top-0 left-1/2 -translate-x-1/2
                    h-1 w-5 rounded-b-md
                    bg-primary/60
                    transition-all duration-300
                    group-hover/card:w-9 group-hover/card:bg-primary
                "
            />

            <span
                className="
                    text-3xl leading-none
                    text-background/80
                    transition-all duration-300
                    group-hover/card:text-primary group-hover/card:scale-110
                "
                aria-hidden="true"
            >
                {icon}
            </span>

            <span
                className="
                    text-[0.6rem] font-semibold uppercase tracking-widest text-center leading-tight
                    text-background/60
                    transition-all duration-300
                    group-hover/card:text-primary group-hover/card:opacity-100
                "
            >
                {name}
            </span>
        </article>
    );
}

/* ────────────────────────────────────────────────────────────
   SkillColumn – vertically scrolling column
   Repeats items until there are MIN_ITEMS, then doubles for the
   seamless infinite-loop trick.
   ──────────────────────────────────────────────────────────── */
function SkillColumn({ skills, direction, duration }) {
    const MIN_ITEMS = 8;

    const filled = useMemo(() => {
        let arr = [...skills];
        while (arr.length < MIN_ITEMS) arr = [...arr, ...skills];
        return [...arr, ...arr]; // doubled for seamless loop
    }, [skills]);

    const animationName = direction === "up" ? "skillScrollUp" : "skillScrollDown";

    return (
        <div className="flex flex-col gap-3 flex-1 min-w-0">
            <div
                style={{
                    animationName,
                    animationDuration: `${duration}s`,
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite",
                }}
                className="flex flex-col gap-3"
                aria-hidden="true"
            >
                {filled.map((skill, idx) => (
                    <SkillCard key={`${skill.name}-${idx}`} name={skill.name} icon={skill.icon} />
                ))}
            </div>
        </div>
    );
}

/* ────────────────────────────────────────────────────────────
   Column configs – each column has a distinct direction & speed
   ──────────────────────────────────────────────────────────── */
const COLUMN_CONFIGS = [
    { direction: "up",   duration: 14 },
    { direction: "down", duration: 22 },
    { direction: "up",   duration: 18 },
    { direction: "down", duration: 12 },
    { direction: "up",   duration: 26 },
];

/* ────────────────────────────────────────────────────────────
   Skills – main section
   ──────────────────────────────────────────────────────────── */
export default function Skills() {
    const { skills_masteries, skillsSubtitle } = presentationContent;

    // Distribute skills evenly across columns
    const desktopCols = COLUMN_CONFIGS.length;
    const columns = useMemo(() => {
        const cols = Array.from({ length: desktopCols }, () => []);
        skills_masteries.forEach((item, i) => cols[i % desktopCols].push(item));
        return cols;
    }, [skills_masteries]);

    return (
        <section
            id="maitrise"
            aria-labelledby="skills-heading"
            className="relative py-20 overflow-hidden bg-foreground"
        >
            {/* Headings */}
            <h2
                id="skills-heading"
                className="text-center text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-tight text-background mb-2 px-6"
            >
                Mes{" "}
                <span className="text-primary">Maîtrises</span>
            </h2>
            <p className="text-center text-sm uppercase tracking-widest text-background/50 mb-14 px-6">
                {skillsSubtitle}
            </p>

            {/* Scrolling grid – full width, columns share equal space */}
            <div
                role="list"
                aria-label="Skills grid"
                className="
                    flex gap-3 w-full px-3
                    h-[420px] sm:h-[480px] lg:h-[560px]
                    [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)]
                    overflow-hidden
                "
            >
                {columns.map((colSkills, colIndex) => (
                    <SkillColumn
                        key={colIndex}
                        skills={colSkills}
                        direction={COLUMN_CONFIGS[colIndex].direction}
                        duration={COLUMN_CONFIGS[colIndex].duration}
                    />
                ))}
            </div>

            {/* Keyframes injected inline for the scroll animation */}
            <style>{`
                @keyframes skillScrollUp {
                    from { transform: translateY(0); }
                    to   { transform: translateY(-50%); }
                }
                @keyframes skillScrollDown {
                    from { transform: translateY(-50%); }
                    to   { transform: translateY(0); }
                }
                @media (prefers-reduced-motion: reduce) {
                    [style*="skillScroll"] { animation: none !important; }
                }
            `}</style>

            {/* Screen-reader list */}
            <ul aria-label="List of skills" className="sr-only">
                {skills_masteries.map((skill) => (
                    <li key={skill.name}>{skill.name}</li>
                ))}
            </ul>
        </section>
    );
}
