"use client";

import React from "react";
import SkillPill from "../common/SkillPill";
import { presentationContent } from "@/config/content";
import { FaLocationDot } from "react-icons/fa6";

// ─── tiny reusable pieces ────────────────────────────────────────────────────

function SectionLabel({ children }) {
    return (
        <span className="uppercase tracking-[0.25em] text-xs font-semibold text-secondary opacity-80">
            {children}
        </span>
    );
}

// ─── main component ───────────────────────────────────────────────────────────

export default function Presentation() {
    return (
        <section
            id="presentation"
            className="
        relative min-h-screen w-full overflow-hidden
        bg-foreground text-background
        flex items-center justify-center
        px-6 py-24
      "
        >
            {/* ── subtle background texture ── */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `repeating-linear-gradient(
            60deg,
            var(--color-primary) 0px,
            var(--color-primary) 1px,
            transparent 1px,
            transparent 60px
          )`,
                }}
            />

            {/* ── decorative accent bar (left) ── */}
            <div
                aria-hidden
                className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-transparent via-primary to-transparent opacity-60"
            />

            {/* ── content grid ── */}
            <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-[380px_1fr]">

                {/* ── LEFT — portrait ── */}
                <div className="flex flex-col items-center gap-6">
                    {/* image frame */}
                    <div
                        className="
              relative w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-104
              rounded-2xl overflow-hidden
              border-2 border-secondary/30
              shadow-[0_0_60px_rgba(220,29,70,0.15)]
            "
                    >
                        {/* Replace /placeholder_portrait.jpg with your actual photo */}
                        <img
                            src={presentationContent.image}
                            alt="Hugo Malezet"
                            className="w-full h-full object-cover object-top"
                            onError={(e) => {
                                // Graceful fallback when no photo is set yet
                                e.currentTarget.style.display = "none";
                            }}
                        />
                        {/* gradient overlay at the bottom */}
                        <div className="absolute inset-0 bg-linear-to-t from-foreground/70 via-transparent to-transparent" />

                        {/* name tag inside frame */}
                        <div className="absolute bottom-4 left-4 right-4">
                            <p className="font-serif text-secondary text-lg leading-tight">{presentationContent.firstName} {presentationContent.surname}</p>
                            <p className="text-background/70 text-xs uppercase tracking-widest mt-0.5">
                                {presentationContent.title}
                            </p>
                        </div>
                    </div>

                    {/* contact / social line */}
                    <div className="flex gap-4 text-background/50 text-sm">
                        <span className="flex items-center gap-2">
                            <FaLocationDot />
                            {presentationContent.location}
                        </span>
                        <a
                            href={`mailto:${presentationContent.contactEmail}`}
                            className="hover:text-secondary transition-colors duration-300 underline-center"
                        >
                            {presentationContent.contactEmail}
                        </a>
                    </div>
                </div>

                {/* ── RIGHT — text content ── */}
                <div className="flex flex-col justify-center gap-10">

                    {/* heading */}
                    <div>
                        <SectionLabel>Présentation</SectionLabel>
                        <h2 className="font-serif text-4xl md:text-5xl text-secondary mt-2 leading-snug">
                            Bonjour, je suis {presentationContent.firstName}.
                        </h2>
                    </div>

                    {/* bio paragraphs */}
                    <div className="space-y-5 text-background/80 leading-relaxed max-w-prose text-[1.0625rem]">
                        {presentationContent.paragraphs.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>

                    {/* divider */}
                    <div className="h-px w-full bg-secondary/20" />

                    {/* skills */}
                    <div>
                        <SectionLabel>Technologies Préférées :</SectionLabel>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {presentationContent.skills.map((s) => (
                                <SkillPill key={s.name} icon={s.icon}>{s.name}</SkillPill>
                            ))}
                        </div>
                    </div>

                    {/* signature quote */}
                    <blockquote
                        className="
              relative pl-5 border-l-2 border-primary
              italic text-background/50 text-sm leading-relaxed
            "
                    >
                        « {presentationContent.quote} »
                    </blockquote>
                </div>
            </div>
        </section>
    );
}
