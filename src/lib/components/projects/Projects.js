"use client";

import React, { useState, useEffect, useCallback } from "react";
import SkillPill from "../common/SkillPill";
import { projectsContent } from "@/config/projects";
import { FiExternalLink, FiGithub, FiX, FiMousePointer, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useEmblaCarousel from "embla-carousel-react";

// ─── tiny reusable pieces ────────────────────────────────────────────────────

function SectionLabel({ children }) {
    return (
        <span className="uppercase tracking-[0.25em] text-xs font-semibold text-secondary opacity-80">
            {children}
        </span>
    );
}

// ─── Project Modal (Carousel) ────────────────────────────────────────────────

function ProjectModal({ project, onClose }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        requestAnimationFrame(() => setIsVisible(true));
    }, []);

    const scrollTo = useCallback((index) => {
        if (emblaApi) emblaApi.scrollTo(index);
    }, [emblaApi]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
    }, [emblaApi, onSelect]);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    // Prevent scrolling behind modal
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    const hasImages = project.images && project.images.length > 0;
    const imagesToDisplay = hasImages ? project.images : [project.image];

    return (
        <div
            className="fixed inset-0 z-5000 flex items-center justify-center p-4 sm:p-6 lg:p-12 animate-in fade-in duration-500"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-xl cursor-pointer"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div
                className="
                    relative w-full max-w-5xl h-[80vh] flex flex-col items-center justify-center
                    bg-transparent overflow-hidden
                    pointer-events-auto
                    animate-in fade-in zoom-in-95 duration-700 ease-out
                "
            >
                {/* Close Button, floating top right */}
                <button
                    onClick={onClose}
                    className="cursor-pointer absolute top-4 right-4 z-20 p-3 rounded-full bg-background/20 hover:bg-background/40 backdrop-blur-md transition-colors text-white"
                    aria-label="Fermer"
                >
                    <FiX className="text-2xl" />
                </button>

                {/* Carousel Area */}
                <div className="w-full h-full relative flex flex-col items-center justify-center">
                    <div className="w-full h-full relative overflow-hidden" ref={emblaRef}>
                        <div className="flex w-full h-full touch-pan-y">
                            {imagesToDisplay.map((imgSrc, index) => (
                                <div
                                    key={index}
                                    className={`flex-[0_0_100%] h-full flex items-center justify-center min-w-0 p-4 sm:p-10 transition-opacity duration-500 ${index === selectedIndex ? (isVisible ? "opacity-100" : "opacity-0") : "opacity-100"
                                        }`}
                                >
                                    <img
                                        src={imgSrc}
                                        alt={`Slide ${index + 1}`}
                                        className="max-h-full max-w-full object-contain rounded-xl drop-shadow-2xl"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination Bullets */}
                    {imagesToDisplay.length > 1 && (
                        <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-3 z-10 w-full">
                            {imagesToDisplay.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollTo(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === selectedIndex
                                        ? "bg-secondary w-6"
                                        : "bg-background/40 hover:bg-background/80"
                                        }`}
                                    aria-label={`Aller à l'image ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}

                    {/* Navigation Buttons (Desktop Only) */}
                    {imagesToDisplay.length > 1 && (
                        <>
                            <button
                                onClick={scrollPrev}
                                className="hidden lg:flex absolute left-4 z-20 p-3 rounded-full bg-background/20 hover:bg-background/40 backdrop-blur-md transition-colors text-white items-center justify-center cursor-pointer"
                                aria-label="Image précédente"
                            >
                                <FiChevronLeft className="text-3xl" />
                            </button>
                            <button
                                onClick={scrollNext}
                                className="hidden lg:flex absolute right-4 z-20 p-3 rounded-full bg-background/20 hover:bg-background/40 backdrop-blur-md transition-colors text-white items-center justify-center cursor-pointer"
                                aria-label="Image suivante"
                            >
                                <FiChevronRight className="text-3xl" />
                            </button>
                        </>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 z-20 w-full px-4">
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                flex items-center gap-2 px-5 py-2.5 
                                rounded-full bg-background/10 backdrop-blur-md border border-secondary/60 text-secondary
                                hover:bg-secondary hover:text-foreground hover:border-secondary
                                transition-all duration-300 font-semibold text-sm uppercase tracking-wider
                            "
                        >
                            <FiExternalLink className="text-lg" />
                            Voir le projet
                        </a>
                    )}

                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                flex items-center gap-2 px-5 py-2.5 
                                rounded-full bg-background/10 backdrop-blur-md border border-background/20 text-background
                                hover:bg-background/20 hover:border-background/60
                                transition-all duration-300 font-semibold text-sm uppercase tracking-wider
                            "
                        >
                            <FiGithub className="text-lg" />
                            Code source
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

// ─── Project Card Component ────────────────────────────────────────────────────

function ProjectCard({ project, isReversed, onOpenModal }) {
    return (
        <div className={`relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2 items-center mb-32 last:mb-0`}>

            {/* ── IMAGE SECTION (Clickable for Modal) ── */}
            <div className={`flex flex-col items-center gap-6 ${isReversed ? 'lg:order-2' : ''}`}>
                <div
                    onClick={() => onOpenModal(project)}
                    className="
                        group cursor-pointer
                        relative w-full aspect-video md:aspect-4/3 lg:aspect-square max-w-md lg:max-w-none
                        rounded-2xl overflow-hidden
                        border-2 border-secondary/30
                        shadow-[0_0_60px_rgba(220,29,70,0.15)]
                        transition-transform duration-500 hover:scale-[1.02] hover:shadow-[0_0_80px_rgba(220,29,70,0.25)]
                    "
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                            e.currentTarget.style.display = "none";
                        }}
                    />
                    {/* gradient overlay at the bottom */}
                    <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-80" />

                    {/* Hover text overlay */}
                    <div className="absolute inset-0 bg-foreground/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex flex-col items-center gap-3">
                            <FiMousePointer className="text-4xl text-secondary drop-shadow-lg" />
                            <span className="uppercase tracking-[0.2em] text-sm font-semibold text-background drop-shadow-md">
                                Voir la galerie
                            </span>
                        </div>
                    </div>

                    {/* tags inside frame */}
                    <div className="absolute bottom-6 left-6 right-6 flex flex-col items-start gap-1 transition-transform duration-500 group-hover:-translate-y-2">
                        <span className="text-secondary font-serif text-2xl drop-shadow-md">{project.title}</span>
                        <span className="text-background/80 text-xs uppercase tracking-widest drop-shadow-sm">{project.subtitle}</span>
                    </div>
                </div>
            </div>

            {/* ── TEXT CONTENT SECTION ── */}
            <div className={`flex flex-col justify-center gap-8`}>

                {/* Heading */}
                <div>
                    <SectionLabel>Projet</SectionLabel>
                    <h3 className="font-serif text-3xl md:text-4xl text-secondary mt-2 leading-snug">
                        {project.title}
                    </h3>
                </div>

                {/* Description */}
                <p className="text-background/80 leading-relaxed max-w-prose text-[1.0625rem] text-left w-full">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className={`flex flex-wrap gap-2`}>
                    {project.skills?.map((skill, index) => (
                        <SkillPill key={index} icon={skill.icon}>
                            {skill.name}
                        </SkillPill>
                    ))}
                </div>

                {/* Actions */}
                <div className={`flex flex-wrap gap-4 mt-2`}>
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                flex items-center gap-2 px-5 py-2.5 
                                rounded-full border border-secondary/60 text-secondary
                                hover:bg-secondary hover:text-foreground hover:border-secondary
                                transition-all duration-300 font-semibold text-sm uppercase tracking-wider
                            "
                        >
                            <FiExternalLink className="text-lg" />
                            Voir le projet
                        </a>
                    )}

                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                flex items-center gap-2 px-5 py-2.5 
                                rounded-full border border-background/20 text-background/80
                                hover:bg-background/10 hover:border-background/40 hover:text-background
                                transition-all duration-300 font-semibold text-sm uppercase tracking-wider
                            "
                        >
                            <FiGithub className="text-lg" />
                            Code source
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

// ─── main component ───────────────────────────────────────────────────────────

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section
            id="projets"
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
                        -60deg,
                        var(--color-primary) 0px,
                        var(--color-primary) 1px,
                        transparent 1px,
                        transparent 60px
                    )`,
                }}
            />

            {/* ── decorative accent bar (right) ── */}
            <div
                aria-hidden
                className="absolute right-0 top-0 h-full w-1 bg-linear-to-b from-transparent via-primary to-transparent opacity-60"
            />

            {/* ── Main heading for section ── */}
            <div className="relative z-10 mx-auto max-w-6xl mb-20 md:mb-28 text-center">
                <SectionLabel>Sélection d'œuvres</SectionLabel>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-secondary mt-3 leading-tight">
                    Mes <span className="text-primary">Projets</span>
                </h2>
                <div className="h-px w-24 bg-primary/40 mx-auto mt-8" />
            </div>

            {/* ── Projects List ── */}
            <div className="relative z-10 w-full">
                {projectsContent.map((project, index) => (
                    <ProjectCard
                        key={project.id || index}
                        project={project}
                        isReversed={index % 2 !== 0}
                        onOpenModal={setSelectedProject}
                    />
                ))}
            </div>

            {/* ── Modal Portal ── */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
}
