"use client";

import React, { useState, useEffect, useRef } from "react";

// Ratio of the pupil relative to the empty_eye image (0.55 = 55%)
const PUPIL_TO_EYE_RATIO = 0.55;
// Ratio of the sclera relative to the empty_eye image (1.0 = same size)
const SCLERA_TO_EYE_RATIO = 1.0;

export default function Eye() {
    const containerRef = useRef(null);
    const emptyEyeRef = useRef(null);
    // Stores the live rendered pixel dimensions of empty_eye so the mouse handler
    // can read them without a stale closure (no re-render needed).
    const eyeRenderedSize = useRef({ w: 0, h: 0 });
    const [pupilPosition, setPupilPosition] = useState({ x: 0, y: 0 });
    const [pupilSize, setPupilSize] = useState(null); // in px, derived from empty_eye rendered size
    const [scleraSize, setScleraSize] = useState(null); // in px, derived from empty_eye rendered size

    // Fraction of the rendered eye width/height that forms the constraint ellipse
    const RADIUS_X_RATIO = 170 / 800; // ~0.2125
    const RADIUS_Y_RATIO = 220 / 800; // 0.275
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

            // Keep the rendered eye size available to the mouse handler
            eyeRenderedSize.current = { w: renderedW, h: renderedH };

            setPupilSize(Math.round(renderedW * PUPIL_TO_EYE_RATIO));
            setScleraSize(Math.round(renderedW * SCLERA_TO_EYE_RATIO));
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
            // Derive the constraint ellipse from the eye's actual rendered size so
            // the pupil can never leave the eye boundary regardless of screen size.
            const { w: eyeW, h: eyeH } = eyeRenderedSize.current;
            const dynamicRadiusX = (eyeW || rect.width) * RADIUS_X_RATIO;
            const dynamicRadiusY = (eyeH || rect.height) * RADIUS_Y_RATIO;

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
                className="absolute pointer-events-none object-contain z-999"
                style={{
                    width: scleraSize ? `${scleraSize}px` : "100%",
                    height: scleraSize ? `${scleraSize}px` : "100%",
                }}
            />

            {/* Pupil — size is driven by the actual rendered size of empty_eye.png */}
            <div
                className="absolute pointer-events-none flex items-center justify-center z-1002"
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
                className="absolute inset-0 pointer-events-none w-full h-full object-contain z-1003 transition-filter duration-500"
                id="empty_eye"
            />
        </div>
    );
}