import Link from "next/link";
import Image from "next/image";
import { Mountain, MapPin, Compass, Home } from "lucide-react";

export default function NotFoundPage() {
    return (
        <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-[#F8F9FA]">
            {/* Blurred background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="404 background"
                    fill
                    className="object-cover brightness-50 blur-sm scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#1B4E66]/50 to-black/70" />
            </div>

            {/* Glassmorphism Card */}
            <div className="relative z-10 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] shadow-[0_32px_64px_rgba(0,0,0,0.4)] p-10 md:p-16 max-w-lg w-full mx-4 text-center">

                {/* Icon */}
                <div className="w-20 h-20 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Mountain size={40} className="text-white/70" strokeWidth={1.5} />
                </div>

                {/* 404 text */}
                <h1 className="text-8xl md:text-9xl font-heading font-bold text-white/10 select-none leading-none mb-2">
                    404
                </h1>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3 -mt-2">
                    Lost in the Mountains
                </h2>
                <p className="text-white/70 font-light leading-relaxed mb-8">
                    Looks like this trail doesn&apos;t exist. The path you&apos;re looking for may have
                    moved or never existed. Let&apos;s get you back to base camp.
                </p>

                {/* Coordinates flavor text */}
                <div className="flex items-center justify-center gap-2 text-white/40 text-xs font-mono mb-8">
                    <MapPin size={12} />
                    <span>27.9881° N, 86.9250° E — Somewhere in Nepal</span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/" className="flex-1">
                        <button className="w-full bg-white text-charcoal font-bold py-4 rounded-xl hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg">
                            <Home size={18} /> Back Home
                        </button>
                    </Link>
                    <Link href="/search" className="flex-1">
                        <button className="w-full bg-[#F77F00]/90 hover:bg-[#F77F00] text-white font-bold py-4 rounded-xl hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(247,127,0,0.4)] transition-all duration-200 flex items-center justify-center gap-2">
                            <Compass size={18} /> Explore
                        </button>
                    </Link>
                </div>
            </div>

            {/* Bottom hint */}
            <p className="relative z-10 mt-8 text-white/40 text-sm font-medium">
                Yatra · Travel & Tourism Nepal
            </p>
        </div>
    );
}
