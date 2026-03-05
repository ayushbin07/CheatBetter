"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Home, Compass, Map } from "lucide-react";

export default function NotFoundPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#EAF5FB] via-[#F8F9FA] to-[#FFF4E8] flex flex-col items-center justify-center relative overflow-hidden px-4 py-12 font-sans">

            {/* Subtle decorative background blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#2C7DA0]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#F77F00]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />
            <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-[#2D6A4F]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 text-center max-w-lg w-full mx-auto">

                {/* Floating Illustration */}
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-6 drop-shadow-2xl"
                >
                    <Image
                        src="/404-illustration.png"
                        alt="Lost hiker with broken compass in the mountains"
                        fill
                        className="object-contain"
                        priority
                    />
                </motion.div>

                {/* 404 number */}
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-7xl md:text-8xl font-heading font-black tracking-tighter text-[#2C7DA0]/20 leading-none select-none mb-2"
                >
                    404
                </motion.p>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-4xl font-heading font-bold text-[#1B4E66] mb-3 leading-tight"
                >
                    Page Not Found
                </motion.h1>

                {/* Supporting message */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-500 font-light text-base md:text-lg leading-relaxed mb-10 max-w-md mx-auto"
                >
                    Looks like this path doesn&apos;t exist. <br />
                    Let&apos;s get you back to exploring Nepal.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3"
                >
                    <Link href="/dashboard">
                        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#2C7DA0] to-[#1B4E66] hover:from-[#1B4E66] hover:to-[#0F3142] text-white px-7 py-3.5 rounded-2xl font-semibold shadow-[0_8px_24px_rgba(44,125,160,0.3)] hover:shadow-[0_12px_32px_rgba(44,125,160,0.5)] hover:-translate-y-0.5 transition-all duration-200">
                            <Home size={18} />
                            Go to Dashboard
                        </button>
                    </Link>

                    <Link href="/search">
                        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#F77F00] hover:bg-[#C75A00] text-white px-7 py-3.5 rounded-2xl font-semibold shadow-[0_8px_24px_rgba(247,127,0,0.3)] hover:shadow-[0_12px_32px_rgba(247,127,0,0.5)] hover:-translate-y-0.5 transition-all duration-200">
                            <Compass size={18} />
                            Explore Destinations
                        </button>
                    </Link>

                    <Link href="/search">
                        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-gray-200 text-charcoal hover:bg-gray-50 hover:border-gray-300 px-7 py-3.5 rounded-2xl font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                            <Map size={18} />
                            Search Places
                        </button>
                    </Link>
                </motion.div>

                {/* Quick nav links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 flex items-center justify-center gap-6 flex-wrap"
                >
                    {["Destinations", "Hotels", "Restaurants", "Travel Guides"].map((link) => (
                        <Link
                            key={link}
                            href="/search"
                            className="text-sm text-gray-400 hover:text-[#2C7DA0] font-medium transition-colors relative group"
                        >
                            {link}
                            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#2C7DA0] group-hover:w-full transition-all duration-300" />
                        </Link>
                    ))}
                </motion.div>

                {/* Brand tag */}
                <p className="mt-10 text-xs text-gray-300 font-medium tracking-wide">
                    YATRA · Travel & Tourism Nepal
                </p>
            </div>
        </div>
    );
}
