"use client";

import React, { useEffect, useRef } from "react";
import { experiencesContent } from "@/config/experiences";

// ─── tiny reusable pieces ────────────────────────────────────────────────────

function SectionLabel({ children }) {
    return (
        <span className="uppercase tracking-[0.25em] text-xs font-semibold text-primary opacity-80">
            {children}
        </span>
    );
}

// ─── Timeline Entry ──────────────────────────────────────────────────────────

function TimelineItem({ exp, index }) {
    const isEven = index % 2 === 0;

    return (
        <div className="relative z-10 w-full mb-16 last:mb-0 flex flex-col md:flex-row items-center justify-between group">

            {/* Desktop Left side */}
            <div className={`order-2 md:order-1 w-full md:w-5/12 ${isEven ? '' : 'md:order-3'} pl-24 md:pl-0`}>
                <div className={`flex flex-col gap-2`}>
                    <span className="text-primary font-bold tracking-widest text-sm uppercase bg-primary/10 px-3 py-1 rounded-full border border-primary/20 inline-block">
                        {exp.date}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-secondary mt-2">
                        {exp.title}
                    </h3>
                    <h4 className="text-secondary/60 text-lg font-medium tracking-wide">
                        {exp.entity}
                    </h4>
                    <p className={`text-background/80 mt-3 leading-relaxed text-[1.0625rem] text-left`}>
                        {exp.description}
                    </p>
                </div>
            </div>

            {/* Center dot/icon on the timeline */}
            <div className="order-1 md:order-2 absolute left-[14px] md:relative md:left-auto md:w-2/12 flex justify-center items-center z-20">
                <div
                    className="
                        w-12 h-12 rounded-full 
                        bg-foreground border-4 border-primary
                        flex justify-center items-center 
                        text-primary text-xl
                        shadow-[0_0_15px_rgba(220,29,70,0.4)]
                        group-hover:scale-125 group-hover:bg-primary group-hover:text-foreground
                        transition-all duration-500 ease-out
                    "
                >
                    {exp.icon}
                </div>
            </div>

            {/* Desktop Right side (empty if Even, filled if Odd) */}
            {isEven ? (
                <div className="order-3 md:w-5/12 hidden md:block" />
            ) : (
                <div className="order-3 md:order-1 md:w-5/12 hidden md:block" />
            )}

        </div>
    );
}

// ─── main component ───────────────────────────────────────────────────────────

export default function Experiences() {
    return (
        <section
            id="experience"
            className="
                relative w-full overflow-hidden
                bg-foreground text-background
                px-6 py-24 md:py-32
            "
        >
            {/* ── subtle background texture ── */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `repeating-linear-gradient(
                        45deg,
                        var(--color-primary) 0px,
                        var(--color-primary) 1px,
                        transparent 1px,
                        transparent 60px
                    )`,
                }}
            />

            {/* ── decorative accent bar (top left to right) ── */}
            <div
                aria-hidden
                className="absolute left-0 top-0 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-40"
            />

            {/* ── Main heading for section ── */}
            <div className="relative z-10 mx-auto max-w-6xl mb-20 md:mb-28 text-center">
                <SectionLabel>Parcours</SectionLabel>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-secondary mt-3 leading-tight">
                    Mon <span className="text-primary">Expérience</span>
                </h2>
                <div className="h-px w-24 bg-primary/40 mx-auto mt-8" />
            </div>

            {/* ── Timeline Container ── */}
            <div className="relative z-10 max-w-5xl mx-auto pb-16">

                {/* Center line (mobile: left, desktop: center) */}
                <div className="absolute left-[38px] md:left-1/2 top-0 bottom-0 w-[2px] bg-primary/30 transform -translate-x-1/2 z-0" />
                <div className="absolute left-[38px] md:left-1/2 top-0 h-full w-[2px] bg-linear-to-b from-primary via-primary to-transparent transform -translate-x-1/2 z-0" />

                {/* Arrow at the top pointing up */}
                <div className="absolute left-[38px] md:left-1/2 top-0 transform -translate-x-1/2 -translate-y-full z-20 flex flex-col items-center">
                    <div
                        className="
                            w-0 h-0 
                            border-l-8 border-l-transparent 
                            border-r-8 border-r-transparent 
                            border-b-12 border-b-primary
                            filter drop-shadow-[0_0_10px_rgba(220,29,70,0.8)]
                            animate-bounce
                        "
                    />
                    <div className="w-[2px] h-8 bg-primary animate-pulse" />
                </div>

                {/* Experiences List */}
                <div className="relative z-10">
                    {experiencesContent.map((exp, idx) => (
                        <TimelineItem key={exp.id} exp={exp} index={idx} />
                    ))}
                </div>
            </div>

        </section>
    );
}
