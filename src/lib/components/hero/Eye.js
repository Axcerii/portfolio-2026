"use client";

import React, { useState, useEffect, useRef } from "react";

export default function Eye() {
    const containerRef = useRef(null);
    const [pupilPosition, setPupilPosition] = useState({ x: 0, y: 0 });

    // Valeurs de base pour un conteneur de 700px
    const BASE_SIZE = 800;
    const BASE_RADIUS_X = 170;
    const BASE_RADIUS_Y = 220;
    const ROTATION_DEG = -40;

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();

            // Calcul du scale actuel par rapport à la base de 700px
            const currentScale = rect.width / BASE_SIZE;

            // Adaptation des rayons au scale actuel
            const dynamicRadiusX = BASE_RADIUS_X * currentScale;
            const dynamicRadiusY = BASE_RADIUS_Y * currentScale;

            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            let dx = event.clientX - centerX;
            let dy = event.clientY - centerY;

            const angle = (ROTATION_DEG * Math.PI) / 180;

            const cos = Math.cos(-angle);
            const sin = Math.sin(-angle);

            // Rotation inverse pour calculer la contrainte dans l'ellipse
            const rotatedX = dx * cos - dy * sin;
            const rotatedY = dx * sin + dy * cos;

            // Utilisation des rayons dynamiques
            const normalized =
                (rotatedX * rotatedX) / (dynamicRadiusX * dynamicRadiusX) +
                (rotatedY * rotatedY) / (dynamicRadiusY * dynamicRadiusY);

            let finalX = rotatedX;
            let finalY = rotatedY;

            if (normalized > 1) {
                const scaleConstraint = 1 / Math.sqrt(normalized);
                finalX *= scaleConstraint;
                finalY *= scaleConstraint;
            }

            // Re-rotation vers l'angle original
            const cos2 = Math.cos(angle);
            const sin2 = Math.sin(angle);

            const outputX = finalX * cos2 - finalY * sin2;
            const outputY = finalX * sin2 + finalY * cos2;

            setPupilPosition({ x: outputX, y: outputY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        /* Rendu responsive : 
           - w-full : prend toute la place disponible
           - max-w-[700px] : ne dépasse pas la taille d'origine
           - aspect-square : garde un ratio 1:1 pour les calculs
        */
        <div
            ref={containerRef}
            className="relative w-full max-w-[800px] aspect-square flex items-center justify-center overflow-hidden mx-auto"
        >
            <img
                src="/sclera.png"
                alt=""
                className="absolute inset-0 pointer-events-none w-17/20 my-auto object-contain"
            />

            <div
                className="absolute pointer-events-none flex items-center justify-center w-11/20"
                style={{
                    transform: `translate(${pupilPosition.x}px, ${pupilPosition.y}px)`,
                    transition: "transform 0.1s ease-out",
                    height: "100%"
                }}
            >
                <img
                    src="/pupil.png"
                    alt=""
                    className="w-full object-contain" // Ajuste le % selon la taille voulue
                />
            </div>

            <img
                src="/empty_eye.png"
                alt=""
                className="absolute inset-0 pointer-events-none w-full h-full object-contain"
            />
        </div>
    );
}