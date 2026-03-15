"use client";
import { useEffect, useState } from "react";
import Eye from "@/lib/components/hero/Eye";
import FrameBorder from "@/lib/components/hero/FrameBorder";
import DragonLink from "@/lib/components/nav/dragon_link";
import Presentation from "@/lib/components/presentations/Presentation";

export default function Home() {
  const [isScrollLocked, setIsScrollLocked] = useState(true);

  useEffect(() => {
    // ── Lock scroll until a nav link is clicked ──────────────────────────────
    document.body.style.overflow = isScrollLocked ? "hidden" : "";

    const navEl = document.getElementById("navigation");
    const unlockScroll = (e) => {
      const anchor = e.target.closest("a[href]");
      if (!anchor) return;
      // Prevent the native jump — it would fire before overflow is cleared
      e.preventDefault();
      // Release body scroll first by updating state
      setIsScrollLocked(false);

      const targetId = anchor.getAttribute("href")?.replace("#", "");
      if (targetId) {
        // Wait a tick for React to remove overflow classes from <main>
        setTimeout(() => {
          const targetEl = document.getElementById(targetId);
          targetEl?.scrollIntoView({ behavior: "smooth" });
        }, 10);
      }
    };

    if (isScrollLocked) {
      navEl?.addEventListener("click", unlockScroll);
    }

    // ── Reveal navigation overlay on any first interaction ───────────────────
    let triggered = false;
    let timeoutId;

    const handleInteraction = (e) => {
      // For keydown events, only trigger on Space or ArrowDown
      if (e?.type === "keydown" && e.code !== "Space" && e.code !== "ArrowDown") {
        return;
      }

      if (triggered) return;
      triggered = true;
      clearTimeout(timeoutId);

      console.log("Scroll event triggered by:", e?.type ?? "timeout");
      const background = document.getElementById("background");
      const navigation = document.getElementById("navigation");
      const emptyEye = document.getElementById("empty_eye");
      const title = document.getElementById("title");
      const leftVines = document.getElementById("left_vines");
      const rightVines = document.getElementById("right_vines");

      background.style.opacity = "1";
      navigation.style.opacity = "1";

      emptyEye.src = "/empty_eye_2.png";
      leftVines.src = "/left_vines_2.png";
      rightVines.src = "/right_vines_2.png";

      title.style.filter = "brightness(0.40)";

      removeListeners();
    };

    const removeListeners = () => {
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("wheel", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };

    window.addEventListener("scroll", handleInteraction, { passive: true });
    window.addEventListener("wheel", handleInteraction, { passive: true });
    window.addEventListener("touchstart", handleInteraction, { passive: true });
    window.addEventListener("click", handleInteraction);
    window.addEventListener("keydown", handleInteraction);

    // Fallback: trigger after 10 seconds of inactivity
    timeoutId = setTimeout(() => handleInteraction(null), 10_000);

    return () => {
      removeListeners();
      clearTimeout(timeoutId);
      navEl?.removeEventListener("click", unlockScroll);
      // Always clean up body lock on unmount padding
      document.body.style.overflow = "";
    };
  }, [isScrollLocked]);

  return (
    <main className={`relative ${isScrollLocked ? "h-svh overflow-hidden" : "min-h-svh overflow-x-hidden"}`}>
      <section className="flex flex-row relative overflow-hidden w-full h-svh bg-[url('/eye_background.jpg')] bg-cover bg-center bg-no-repeat">
        <h1 className="hidden">Hugo Malezet</h1>

        <div className="absolute top-0 left-0 md:block hidden">
          <FrameBorder />
        </div>

        <Eye />

        <div className="absolute top-0 left-0 w-full h-32 lg:h-full lg:w-auto lg:left-30 pointer-events-none flex justify-center items-center z-1005">
          <img id="left_vines" src="/left_vines.png" className="absolute h-[100vw] lg:h-full w-auto rotate-90 lg:rotate-0 lg:relative transition-all duration-500" alt="Left Vines" />
        </div>

        <div className="absolute bottom-[8.5%] lg:bottom-auto lg:top-0 left-0 lg:left-auto lg:right-30 w-full h-32 lg:h-full lg:w-auto pointer-events-none flex justify-center items-center z-1005">
          <img id="right_vines" src="/right_vines.png" className="absolute h-[100vw] lg:h-full w-auto rotate-90 lg:rotate-0 lg:relative transition-all duration-500" alt="Right Vines" />
        </div>

        <div className="absolute bottom-10 md:top-0 md:right-0 md:bottom-auto">
          <FrameBorder orientation="right" />
        </div>

        <div className="blur-fade-vertical w-full absolute left-0 box-border bottom-22 sm:left-1/8 lg:w-1/4 md:w-1/2 bg-foreground/80 z-1005 px-12 pt-6 pb-2 transition-filter duration-500 md:bottom-0 md:top-auto md:translate-y-0" id="title">
          <img src="/hugo_malezet_titre.png" alt="" className="w-full" />
        </div>
      </section>
      <div id="background" className="absolute top-0 left-0 w-screen h-screen bg-foreground/75 z-1000 transition-opacity duration-500" style={{ opacity: "0" }}>

      </div>
      <section id="navigation" className="w-screen h-screen absolute top-0 left-0 z-2000 transition-opacity duration-500" style={{ opacity: "0" }}>
        <div className="absolute top-1/8 left-1/4 -translate-y-1/2">
          <DragonLink dragon="Pura.png" text="Présentation" href="#presentation" />
        </div>
        <div className="absolute top-1/3 md:top-1/4 right-1/7 -translate-y-1/2">
          <DragonLink dragon="Artrish.png" text="Passions" href="#passions" />
        </div>
        <div className="absolute top-3/7 left-1/8 -translate-y-1/2">
          <DragonLink dragon="Lada.png" text="Expérience" href="#experience" />
        </div>
        <div className="absolute top-4/7 right-1/10 -translate-y-1/2">
          <DragonLink dragon="Yinva.png" text="Projets" href="#projets" />
        </div>
        <div className="absolute top-6/9 md:top-7/9 left-1/5 -translate-y-1/2">
          <DragonLink dragon="Pestia.png" text="Contact" href="#contact" />
        </div>
        <div className="absolute top-9/11 right-2/9 -translate-y-1/2">
          <DragonLink dragon="Drii.png" text="Maîtrises" href="#maitrise" />
        </div>
      </section>

      <Presentation />
    </main>
  );
}
