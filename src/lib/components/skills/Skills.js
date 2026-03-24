"use client";

import React, { useMemo } from "react";
import { presentationContent } from "@/config/content";
import SkillCard from "./SkillCard";

/* ────────────────────────────────────────────────────────────
   SkillColumn
   - Pauses scroll on hover/touch (no position shift)
   - Title pinned at the very bottom, full-width, ultra-thin
   ──────────────────────────────────────────────────────────── */
function SkillColumn({ title, skills, direction, duration }) {
    const MIN_ITEMS = 8;

    const filled = useMemo(() => {
        let arr = [...skills];
        while (arr.length < MIN_ITEMS) arr = [...arr, ...skills];
        return [...arr, ...arr];
    }, [skills]);

    const animationName = direction === "up" ? "skillScrollUp" : "skillScrollDown";

    return (
        <div className="group/col relative flex flex-col flex-1 min-w-0 overflow-hidden">

            {/* Scrolling track — paused on hover via CSS group */}
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
                    <SkillCard
                        key={`${skill.name}-${idx}`}
                        name={skill.name}
                        icon={skill.icon}
                    />
                ))}
            </div>

            {/* Category title — pinned at the bottom, slides up on hover */}
            <div className="
                absolute bottom-1/2 inset-x-0 z-30 translate-y-1/2
                flex items-end justify-center
                pointer-events-none
                pb-2
            ">
                <span className="
                    relative
                    w-full text-center
                    text-xl font-thin uppercase tracking-[0.2em]
                    text-background/0
                    transition-all duration-500 ease-out
                    translate-y-2
                    group-hover/col:text-accent
                    group-hover/col:translate-y-0
                    group-hover/col:bg-foreground/80
                    group-hover/col:backdrop-blur-md
                    group-hover/col:py-8
                    group-hover/col:border-x-accent/80
                    group-hover/col:border-x-6
                    z-1000
                ">
                    {title}
                </span>
            </div>

        </div>
    );
}

/* ────────────────────────────────────────────────────────────
   Column configs
   ──────────────────────────────────────────────────────────── */
const COLUMN_CONFIGS = [
    { direction: "up", duration: 16 },
    { direction: "down", duration: 24 },
    { direction: "up", duration: 19 },
    { direction: "down", duration: 13 },
    { direction: "up", duration: 28 },
];

/* ────────────────────────────────────────────────────────────
   Skills – main section
   ──────────────────────────────────────────────────────────── */
export default function Skills() {
    const { skills_masteries, skillsSubtitle } = presentationContent;

    return (
        <section
            id="maitrise"
            aria-labelledby="skills-heading"
            className="relative py-20 overflow-hidden bg-foreground"
        >
            <p className="text-xl uppercase tracking-widest text-background mb-14 px-6 w-1/2 mx-auto">
                {skillsSubtitle}
            </p>

            {/* Grid */}
            <div
                role="list"
                aria-label="Skills grid"
                className="
                    flex gap-3 w-full px-3
                    h-[420px] sm:h-[480px] lg:h-[560px]
                    overflow-hidden
                    mask-[linear-gradient(to_bottom,transparent_0%,black_12%,black_80%,transparent_100%)]
                "
            >
                {skills_masteries.map((col, i) => (
                    <SkillColumn
                        key={i}
                        title={col.title}
                        skills={col.skills}
                        direction={COLUMN_CONFIGS[i % COLUMN_CONFIGS.length].direction}
                        duration={COLUMN_CONFIGS[i % COLUMN_CONFIGS.length].duration}
                    />
                ))}
            </div>

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

            <ul aria-label="List of skills" className="sr-only">
                {skills_masteries.flatMap((col) =>
                    col.skills.map((s) => (
                        <li key={`${col.title}-${s.name}`}>{col.title}: {s.name}</li>
                    ))
                )}
            </ul>
        </section>
    );
}
