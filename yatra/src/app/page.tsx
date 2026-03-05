import NavigationBar from "@/components/NavigationBar";
import AuthCard from "@/components/AuthCard";
import Image from "next/image";

// ─────────────────────────────────────────────────
// 🏔 FOREGROUND POSITION — tweak this value freely
//    Positive px  →  moves foreground DOWN (less visible)
//    Negative px  →  moves foreground UP   (more visible, covers more)
// ─────────────────────────────────────────────────
const FOREGROUND_Y_PX = 200; // <── change this number

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#F8F9FA] overflow-x-hidden selection:bg-[#F77F00]/30">
      <NavigationBar />

      {/* Hero Section — layered depth stack */}
      <section className="relative w-full h-screen overflow-hidden">

        {/* ── LAYER 1: Cloud timelapse video background (z-0) ── */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            src="/clouds.mp4"
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* ── LAYER 2 (z-10): "Embark Your Journey" headline — BELOW the foreground ── */}
        {/* Mountains will cut OVER the text creating a depth illusion */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-32 md:pt-36 px-4 pointer-events-none">
          <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-heading font-bold text-white/85 leading-[1.0] tracking-tight drop-shadow-2xl translate-y-[80px]">
            Embark Your Journey
          </h1>
        </div>

        {/* ── LAYER 3 (z-20): Foreground mountain ── */}
        <div
          className="absolute bottom-0 left-0 w-full z-20 pointer-events-none select-none"
          style={{ transform: `translateY(${FOREGROUND_Y_PX}px)` }}
        >
          <Image
            src="/foreground.png"
            alt="Mountain foreground"
            width={1920}
            height={800}
            className="w-full h-auto object-bottom"
            priority
          />
        </div>

        {/* ── GRADIENT OVERLAY (z-25): black at bottom, transparent at top — above foreground ── */}
        <div className="absolute inset-0 z-25 pointer-events-none bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {/* ── LAYER 4 (z-30): Subtitle + Auth buttons — pinned to bottom ── */}
        <div className="absolute bottom-10 left-0 right-0 z-30 flex flex-col items-center gap-4 px-4 pointer-events-auto">
          <p className="text-sm md:text-base text-white/70 font-light max-w-lg mx-auto drop-shadow-md text-center">
            Experience the breathtaking beauty of Nepal — from serene valleys
            to the majestic peaks of the Himalayas.
          </p>
          <AuthCard />
        </div>
      </section>
    </main>
  );
}
