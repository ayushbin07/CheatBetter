import NavigationBar from "@/components/NavigationBar";
import SearchModule from "@/components/SearchModule";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-[150vh] bg-[#F8F9FA] overflow-x-hidden selection:bg-[#F77F00]/30">
      <NavigationBar />

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/hero-bg.png"
            alt="Himalayan Mountains Sunrise"
            fill
            className="object-cover object-center scale-105 will-change-transform"
            priority
          />
          {/* Subtle overlay to make glassmorphism pop */}
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#F8F9FA]"></div>
        </div>

        {/* Central Content */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 mt-16 md:mt-0">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFF] text-sm font-medium tracking-widest uppercase mb-6 shadow-lg">
              Find your next adventure
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-tight tracking-tight drop-shadow-2xl">
              Embark <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD6A3] to-[#F77F00]">Your</span> Journey
            </h1>
            <p className="mt-6 text-xl text-white/90 font-light max-w-2xl mx-auto drop-shadow-md">
              Experience the breathtaking beauty of Nepal, from the serene valleys to the majestic peaks of the Himalayas.
            </p>
          </div>

          {/* Premium Glassmorphism Search */}
          <SearchModule />
        </div>
      </section>

      {/* Content Section */}
      <section className="relative z-20 bg-[#F8F9FA] min-h-screen px-8 py-24 md:px-20 text-charcoal">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-[#1B4E66]">
          Discover Nepal
        </h2>
        <p className="max-w-2xl text-lg text-gray-600 font-sans leading-relaxed">
          More sections will be populated here. Scroll back up to see the layered parallax effect with the premium glass search module.
        </p>
      </section>
    </main>
  );
}
