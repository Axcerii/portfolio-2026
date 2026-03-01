import Eye from "@/lib/components/hero/Eye";
import FrameBorder from "@/lib/components/hero/FrameBorder";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <section className="flex flex-rowabsolute w-screen h-screen z-0 bg-[url('/eye_background.jpg')] bg-cover bg-center bg-no-repeat">
        <h1 className="hidden">Hugo Malezet</h1>

        <div className="absolute top-0 left-0 md:block hidden">
          <FrameBorder />
        </div>

        <Eye />

        <div className="absolute top-0 left-0 w-full h-32 lg:h-full lg:w-auto lg:left-30 pointer-events-none flex justify-center items-center">
          <img src="/left_vines.png" className="absolute h-[100vw] lg:h-full w-auto rotate-90 lg:rotate-0 lg:relative" alt="Left Vines" />
        </div>

        <div className="absolute bottom-[8.5%] lg:bottom-auto lg:top-0 left-0 lg:left-auto lg:right-30 w-full h-32 lg:h-full lg:w-auto pointer-events-none flex justify-center items-center">
          <img src="/right_vines.png" className="absolute h-[100vw] lg:h-full w-auto rotate-90 lg:rotate-0 lg:relative" alt="Right Vines" />
        </div>

        <div className="absolute bottom-10 md:top-0 md:right-0 md:bottom-auto">
          <FrameBorder orientation="right" />
        </div>

        <div className="w-full absolute left-0 box-border bottom-22 sm:bottom-0 sm:left-1/8 lg:w-1/4 md:w-1/2 bg-foreground/80 z-1000 px-12 pt-6 pb-2">
          <img src="/hugo_malezet_titre.png" alt="" className="w-full" />
        </div>
      </section>
    </main>
  );
}
