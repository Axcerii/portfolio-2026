"use client";

import React, { useState } from "react";
import { presentationContent } from "@/config/content";

export default function Passions() {
    const [hovered, setHovered] = useState(null);

    return (
        <section id="passions" className="relative h-screen min-h-screen w-full bg-foreground flex flex-col md:flex-row overflow-x-hidden">
            
            {/* Subtle digital pattern / mesh effect overlay */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay z-0"
                 style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '30px'
                 }}
            />

            {/* Central Text Overlay - Desktop only. Smaller text, moves left/right based on hover state. */}
            <div 
                className={`hidden md:block absolute top-1/2 left-1/2 -translate-y-1/2 z-30 pointer-events-none text-center transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.25,1)] w-80
                ${hovered === 1 ? 'translate-x-[150%]' : hovered === 2 ? '-translate-x-[250%]' : '-translate-x-1/2'}`}
            >
                <div className="bg-foreground/40 backdrop-blur-md px-6 py-3 rounded-full border border-background/10 shadow-xl">
                    <h3 className="font-serif text-lg lg:text-xl text-background tracking-wider">
                        {presentationContent.passionsSubtitle}
                    </h3>
                </div>
            </div>

            {/* Mobile Header (replaces central text for the carousel view) */}
            <div className="md:hidden pt-20 pb-4 px-6 text-center z-20 flex flex-col items-center">
                <h3 className="font-serif text-xl sm:text-2xl text-background tracking-wide">
                    {presentationContent.passionsSubtitle}
                </h3>
                <div className="w-12 h-0.5 bg-secondary mx-auto mt-3 mb-5 opacity-50" />
                
                {/* Mobile Swipe Indicator */}
                <div className="flex items-center justify-center gap-3 text-background/60 text-sm italic animate-pulse">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M15 18l-6-6 6-6"></path></svg>
                    <span>Glissez pour explorer</span>
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M9 18l6-6-6-6"></path></svg>
                </div>
            </div>

            {/* Carousel Container for Mobile / Flex row for Desktop */}
            <div className="relative w-full flex-1 flex flex-row overflow-x-auto snap-x snap-mandatory md:overflow-x-visible md:snap-none z-10 no-scrollbar">
                
                {/* Panel 1: World Building */}
                <div 
                    className={`group relative flex-none w-full md:w-auto md:flex-1 snap-center flex flex-col justify-center items-center p-8 lg:p-16 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.25,1)] md:border-r border-background/20 z-10 overflow-hidden
                               ${hovered === 1 ? "md:flex-[1.5] shadow-2xl" : hovered === 2 ? "md:opacity-40 md:scale-95" : ""}`}
                    onMouseEnter={() => setHovered(1)}
                    onMouseLeave={() => setHovered(null)}
                >
                    {/* Background color transition for Panel 1 */}
                    <div className={`hidden md:block absolute inset-0 bg-linear-to-br from-secondary/30 to-transparent transition-opacity duration-1000 ease-in-out ${hovered === 1 ? 'opacity-100' : 'opacity-0'}`} />
                    
                    <div className="relative z-10 flex flex-col items-center text-center max-w-lg cursor-default w-full">
                        {/* Image Icon */}
                        <div className="mb-6 opacity-90 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700 ease-out drop-shadow-[0_0_15px_rgba(222,186,99,0.3)]">
                            <img src={presentationContent.passions[0].image} alt="World Building Icon" className="h-24 w-24 sm:h-32 sm:w-32 object-contain" />
                        </div>
                        
                        <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-wide text-background transition-colors duration-700 ${hovered === 1 ? 'text-secondary' : ''}`}>
                            {presentationContent.passions[0].title}
                        </h2>
                        
                        <div className="w-12 sm:w-16 h-1 bg-secondary mx-auto mb-4 sm:mb-6 transition-all duration-1000 ease-out md:group-hover:w-full opacity-60 md:group-hover:opacity-100" />
                        
                        <p className={`text-base sm:text-lg lg:text-xl text-background/80 font-light leading-relaxed transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.25,1)]
                                      md:opacity-0 md:translate-y-8 md:group-hover:opacity-100 md:group-hover:translate-y-0`}>
                            {presentationContent.passions[0].description}
                        </p>
                    </div>
                </div>

                {/* Desktop Dead-zone area (Spacer in the middle to break the direct transition) */}
                <div 
                    className="hidden md:block w-48 lg:w-64 shrink-0 h-full cursor-default z-20"
                    onMouseEnter={() => setHovered(null)}
                />

                {/* Panel 2: Japanese Modern Music */}
                <div 
                    className={`group relative flex-none w-full md:w-auto md:flex-1 snap-center flex flex-col justify-center items-center p-8 lg:p-16 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.25,1)] z-10 overflow-hidden
                               ${hovered === 2 ? "md:flex-[1.5] shadow-2xl" : hovered === 1 ? "md:opacity-40 md:scale-95" : ""}`}
                    onMouseEnter={() => setHovered(2)}
                    onMouseLeave={() => setHovered(null)}
                >
                    {/* Background color transition for Panel 2 */}
                    <div className={`hidden md:block absolute inset-0 bg-linear-to-bl from-accent/20 to-transparent transition-opacity duration-1000 ease-in-out ${hovered === 2 ? 'opacity-100' : 'opacity-0'}`} />
                    
                    <div className="relative z-10 flex flex-col items-center text-center max-w-lg cursor-default w-full">
                        {/* Image Icon */}
                        <div className="mb-6 opacity-90 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700 ease-out drop-shadow-[0_0_15px_rgba(29,220,179,0.3)]">
                            <img src={presentationContent.passions[1].image} alt="Japanese Music Icon" className="h-24 w-24 sm:h-32 sm:w-32 object-contain" />
                        </div>
                        
                        <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-wide text-background transition-colors duration-700 ${hovered === 2 ? 'text-accent' : ''}`}>
                            {presentationContent.passions[1].title}
                        </h2>
                        
                        <div className="w-12 sm:w-16 h-1 bg-accent mx-auto mb-4 sm:mb-6 transition-all duration-1000 ease-out md:group-hover:w-full opacity-60 md:group-hover:opacity-100" />
                        
                        <p className={`text-base sm:text-lg lg:text-xl text-background/80 font-light leading-relaxed transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.25,1)]
                                      md:opacity-0 md:translate-y-8 md:group-hover:opacity-100 md:group-hover:translate-y-0`}>
                            {presentationContent.passions[1].description}
                        </p>
                    </div>
                </div>

            </div>
            
            {/* Embedded styles to hide the scrollbar for the mobile carousel for a cleaner look */}
            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
