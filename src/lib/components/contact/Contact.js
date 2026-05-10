"use client";

import React from "react";
import { contactContent } from "@/config/content";
import { FiLinkedin, FiGithub, FiMail, FiDownload } from "react-icons/fi";

// ─── tiny reusable pieces ────────────────────────────────────────────────────

function SectionLabel({ children }) {
    return (
        <span className="uppercase tracking-[0.25em] text-xs font-semibold text-accent opacity-80">
            {children}
        </span>
    );
}

// ─── Contact Button ──────────────────────────────────────────────────────────

function ContactButton({ href, icon, label, isDownload, colorClass }) {
    const Component = isDownload ? "a" : "a";
    const downloadProps = isDownload ? { download: true } : {};

    return (
        <Component
            href={href}
            target={!isDownload ? "_blank" : "_self"}
            rel={!isDownload ? "noopener noreferrer" : ""}
            {...downloadProps}
            className="
                group relative flex flex-col items-center justify-center p-8 lg:p-12
                w-full aspect-square md:aspect-auto md:h-64
                bg-background/5 border border-accent/20 rounded-2xl
                hover:border-accent hover:bg-accent/10
                transition-all duration-500 overflow-hidden
            "
        >
            {/* Glowing background on hover */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="
                w-16 h-16 rounded-full flex items-center justify-center bg-accent/10 border border-accent/30 text-accent mb-6
                group-hover:scale-110 group-hover:bg-accent group-hover:text-foreground transition-all duration-500 shadow-[0_0_15px_rgba(var(--color-accent-rgb),0.2)]
                z-10
            ">
                <span className="text-3xl">{icon}</span>
            </div>

            <span className="font-serif text-xl text-accent z-10">{label}</span>
            <span className="absolute bottom-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-xs uppercase tracking-widest text-background/60 z-10 w-full text-center">
                Cliquer pour ouvrir
            </span>
        </Component>
    );
}

// ─── main component ───────────────────────────────────────────────────────────

export default function Contact() {
    return (
        <section
            id="contact"
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
                    backgroundImage: `repeating-radial-gradient(
                        circle at 50% 50%,
                        var(--color-accent) 0px,
                        var(--color-accent) 1px,
                        transparent 1px,
                        transparent 40px
                    )`,
                }}
            />

            {/* ── decorative accent bar ── */}
            <div
                aria-hidden
                className="absolute left-1/2 top-0 h-32 w-px bg-linear-to-b from-transparent via-accent to-transparent transform -translate-x-1/2 opacity-60"
            />

            {/* ── Main heading for section ── */}
            <div className="relative z-10 mx-auto max-w-6xl mb-20 text-center">
                <SectionLabel>Mes coordonées</SectionLabel>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-background mt-3 leading-tight">
                    Restons en <span className="text-accent">Contact</span>
                </h2>
                <div className="h-px w-24 bg-accent/40 mx-auto mt-8" />
            </div>

            {/* ── Links Grid ── */}
            <div className="relative z-10 mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {contactContent.email && (
                    <ContactButton
                        href={`mailto:${contactContent.email}`}
                        icon={<FiMail />}
                        label="malezethp@gmail.com"
                    />
                )}

                {contactContent.linkedin && (
                    <ContactButton
                        href={contactContent.linkedin}
                        icon={<FiLinkedin />}
                        label="Hugo Malezet"
                    />
                )}

                {contactContent.github && (
                    <ContactButton
                        href={contactContent.github}
                        icon={<FiGithub />}
                        label="Axcerii"
                    />
                )}

                {contactContent.cvFile && (
                    <ContactButton
                        href={contactContent.cvFile}
                        icon={<FiDownload />}
                        label="Mon CV"
                        isDownload={true}
                    />
                )}
            </div>

            <div className="relative z-10 mt-32 text-center text-background/40 text-sm tracking-widest uppercase">
                © 2026 Hugo Malezet. Tous droits réservés. <br />
                Image d'Hatsune Miku par <a href="https://lam-illust.com/" className="underline-center text-accent" target="_blank" rel="noopener noreferrer">LAM</a> sous Licence Creative Common <a href="https://piapro.net/intl/en_for_creators.html" className="underline-center text-accent" target="_blank" rel="noopener noreferrer">(CC-BY-NC)</a>
            </div>
        </section>
    );
}
