"use client";
import React, { useState, useEffect } from "react";

export default function BottomNav() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            let isPassionsVisible = false;
            const passionsEl = document.getElementById("passions");
            
            if (passionsEl) {
                const rect = passionsEl.getBoundingClientRect();
                // Hide if passions is occupying the middle of the screen
                if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
                    isPassionsVisible = true;
                }
            }

            // Show nav when scrolled past 90% of the viewport height, EXCEPT if passions is visible
            if (window.scrollY > window.innerHeight * 0.9 && !isPassionsVisible) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const links = [
        { text: "Présentation", href: "#presentation", dragon: "Pura.png" },
        { text: "Passions", href: "#passions", dragon: "Artrish.png" },
        { text: "Expérience", href: "#experience", dragon: "Lada.png" },
        { text: "Projets", href: "#projets", dragon: "Yinva.png" },
        { text: "Contact", href: "#contact", dragon: "Pestia.png" },
        { text: "Maîtrises", href: "#maitrise", dragon: "Drii.png" },
    ];

    const handleClick = (e, href) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', href);
        }
    };

    return (
        <div 
            className={`fixed bottom-4 md:bottom-8 left-0 w-full z-[2000] transition-all duration-700 pointer-events-none flex justify-end md:justify-center px-6 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-wrap justify-center gap-x-6 gap-y-2 bg-foreground/60 backdrop-blur-md px-8 py-3 rounded-full border border-background/10 shadow-2xl pointer-events-auto max-w-[90vw]">
                {links.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        onClick={(e) => handleClick(e, link.href)}
                        className="group relative font-serif text-background/80 hover:text-accent transition-colors duration-300 text-sm lg:text-base py-1 px-2"
                    >
                        <span className="relative z-10 drop-shadow-md">{link.text}</span>
                        {/* Hover Icon */}
                        <img 
                            src={`/dragon_symbols/${link.dragon}`} 
                            alt="" 
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 opacity-0 group-hover:opacity-40 transition-all duration-500 color-accent pointer-events-none scale-50 group-hover:scale-100 z-0"
                        />
                    </a>
                ))}
            </nav>

            {/* Mobile Scroll to Top Button */}
            <button 
                onClick={scrollToTop}
                className="md:hidden flex items-center justify-center w-12 h-12 bg-foreground/80 backdrop-blur-md rounded-full border border-background/20 text-accent shadow-xl pointer-events-auto hover:bg-foreground transition-colors"
                aria-label="Retour en haut"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m18 15-6-6-6 6"/>
                </svg>
            </button>
        </div>
    );
}
