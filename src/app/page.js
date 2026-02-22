import Eye from "@/lib/components/hero/Eye";
import FrameBorder from "@/lib/components/hero/FrameBorder";

export default function Home() {
  return (
    <main className="relative">
      <section className="flex flex-rowabsolute w-screen h-screen z-0 bg-[url('/eye_background.jpg')] bg-cover bg-center bg-no-repeat">
        <h1 className="hidden">Hugo Malezet</h1>

        <div className="absolute top-0 left-0">
          <FrameBorder />
        </div>

        <Eye />

        <div className="absolute top-0 right-0">
          <FrameBorder orientation="right" />
        </div>

        <div className="absolute bottom-0 left-1/8 w-1/4 bg-foreground/80 z-1000 px-12 pt-6 pb-2">
          <img src="/hugo_malezet_titre.png" alt="" className="w-full" />
        </div>
      </section>
    </main>
  );
}
