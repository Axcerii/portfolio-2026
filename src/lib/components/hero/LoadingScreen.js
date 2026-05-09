"use client";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // ── Preload Hero Images ──────────────────────────────────────────────────
    const imagesToLoad = [
      "/eye_background.jpg",
      "/left_vines.png",
      "/right_vines.png",
      "/hugo_malezet_titre.png",
      "/sclera.png",
      "/pupil.png",
      "/empty_eye.png",
      "/frame_border_background.jpg",
      "/hugo_artrish.png",
      "/malezet_artrish.png"
    ];

    let loadedCount = 0;
    const handleLoad = () => {
      loadedCount++;
      if (loadedCount === imagesToLoad.length) {
        setIsFadingOut(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 500); // Wait for smooth fade-out animation to finish
      }
    };

    imagesToLoad.forEach((src) => {
      const img = new Image();
      img.onload = handleLoad;
      img.onerror = handleLoad; // Increment on error to avoid infinite loading
      img.src = src;
    });
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`fixed inset-0 z-9999 flex flex-col items-center justify-center loading-screen-background transition-opacity duration-500 pointer-events-none ${isFadingOut ? "opacity-0" : "opacity-100"}`}>
      <img
        src="/dragon_symbols/Artrish.png"
        alt="Loading"
        className="w-64 h-64 animate-spin color-accent"
        style={{ animationDuration: "3s" }}
      />
      <h1 className="text-4xl px-8 font-serif text-accent text-center">Bienvenue sur mon portfolio !</h1>
    </div>
  );
}
