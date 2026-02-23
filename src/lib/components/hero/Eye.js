"use client";

import React, { useState, useEffect, useRef } from "react";

// Ratio of the pupil relative to the empty_eye image (0.55 = 55%)
const PUPIL_TO_EYE_RATIO = 0.55;

export default function Eye() {
    const containerRef = useRef(null);
    const emptyEyeRef = useRef(null);
    const [pupilPosition, setPupilPosition] = useState({ x: 0, y: 0 });
    const [pupilSize, setPupilSize] = useState(null); // in px, derived from empty_eye rendered size

    const BASE_SIZE = 800;
    const BASE_RADIUS_X = 170;
    const BASE_RADIUS_Y = 220;
    const ROTATION_DEG = -40;

    // Measure the actual rendered size of empty_eye.png and keep the pupil proportional
    useEffect(() => {
        const eyeEl = emptyEyeRef.current;
        if (!eyeEl) return;

        const updatePupilSize = () => {
            // naturalWidth/Height give the intrinsic image dimensions.
            // The image is rendered with object-contain inside the square container,
            // so we compute the actual rendered width ourselves.
            const containerEl = containerRef.current;
            if (!containerEl || !eyeEl.naturalWidth) return;

            const containerW = containerEl.clientWidth;
            const containerH = containerEl.clientHeight;
            const imgRatio = eyeEl.naturalWidth / eyeEl.naturalHeight;
            const containerRatio = containerW / containerH;

            // object-contain: letterbox/pillarbox depending on aspect ratio
            let renderedW, renderedH;
            if (imgRatio > containerRatio) {
                renderedW = containerW;
                renderedH = containerW / imgRatio;
            } else {
                renderedH = containerH;
                renderedW = containerH * imgRatio;
            }

            setPupilSize(Math.round(renderedW * PUPIL_TO_EYE_RATIO));
        };

        // Run once after the image loads
        if (eyeEl.complete && eyeEl.naturalWidth) {
            updatePupilSize();
        } else {
            eyeEl.addEventListener("load", updatePupilSize);
        }

        // Re-run on container resize (e.g. window resize)
        const ro = new ResizeObserver(updatePupilSize);
        if (containerRef.current) ro.observe(containerRef.current);

        return () => {
            eyeEl.removeEventListener("load", updatePupilSize);
            ro.disconnect();
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const currentScale = rect.width / BASE_SIZE;
            const dynamicRadiusX = BASE_RADIUS_X * currentScale;
            const dynamicRadiusY = BASE_RADIUS_Y * currentScale;

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
                (rotatedX * rotatedX) / (dynamicRadiusX * dynamicRadiusX) +
                (rotatedY * rotatedY) / (dynamicRadiusY * dynamicRadiusY);

            let finalX = rotatedX;
            let finalY = rotatedY;

            if (normalized > 1) {
                const scaleConstraint = 1 / Math.sqrt(normalized);
                finalX *= scaleConstraint;
                finalY *= scaleConstraint;
            }

            const cos2 = Math.cos(angle);
            const sin2 = Math.sin(angle);

            setPupilPosition({
                x: finalX * cos2 - finalY * sin2,
                y: finalX * sin2 + finalY * cos2,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full max-w-[800px] aspect-square flex items-center justify-center overflow-hidden mx-auto"
        >
            <img
                src="/sclera.png"
                alt=""
                className="absolute inset-0 pointer-events-none w-17/20 my-auto object-contain"
            />

            {/* Pupil — size is driven by the actual rendered size of empty_eye.png */}
            <div
                className="absolute pointer-events-none flex items-center justify-center"
                style={{
                    width: pupilSize ? `${pupilSize}px` : "55%",
                    height: pupilSize ? `${pupilSize}px` : "55%",
                    transform: `translate(${pupilPosition.x}px, ${pupilPosition.y}px)`,
                    transition: "transform 0.1s ease-out",
                }}
            >
                <img
                    src="/pupil.png"
                    alt=""
                    className="w-full h-full object-contain"
                />
            </div>

            <img
                ref={emptyEyeRef}
                src="/empty_eye.png"
                alt=""
                className="absolute inset-0 pointer-events-none w-full h-full object-contain"
            />
        </div>
    );
}