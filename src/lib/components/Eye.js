"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Eye() {
    const containerRef = useRef(null);
    const [pupilPosition, setPupilPosition] = useState({ x: 0, y: 0 });

    const ELLIPSE_RADIUS_X = 170;
    const ELLIPSE_RADIUS_Y = 250;
    const ROTATION_DEG = -40;

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();

            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            let dx = event.clientX - centerX;
            let dy = event.clientY - centerY;

            const angle = (ROTATION_DEG * Math.PI) / 180;

            const cos = Math.cos(-angle);
            const sin = Math.sin(-angle);

            const rotatedX = dx * cos - dy * sin;
            const rotatedY = dx * sin + dy * cos;

            const normalized =
                (rotatedX * rotatedX) / (ELLIPSE_RADIUS_X * ELLIPSE_RADIUS_X) +
                (rotatedY * rotatedY) / (ELLIPSE_RADIUS_Y * ELLIPSE_RADIUS_Y);

            let finalX = rotatedX;
            let finalY = rotatedY;

            if (normalized > 1) {
                const scale = 1 / Math.sqrt(normalized);
                finalX *= scale;
                finalY *= scale;
            }

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
        <div
            ref={containerRef}
            className="relative w-[750px] h-[750px] flex items-center justify-center overflow-hidden"
        >
            <Image
                src="/sclera.png"
                alt=""
                width={750}
                height={750}
                className="absolute pointer-events-none"
            />

            <div
                className="absolute pointer-events-none"
                style={{
                    transform: `translate(${pupilPosition.x}px, ${pupilPosition.y}px)`,
                    transition: "transform 0.1s ease-out"
                }}
            >
                <Image
                    src="/pupil.png"
                    alt=""
                    width={425}
                    height={425}
                    className="max-w-none"
                />
            </div>

            <Image
                src="/empty_eye.png"
                alt=""
                width={750}
                height={750}
                className="absolute pointer-events-none"
            />
        </div>
    );
}
