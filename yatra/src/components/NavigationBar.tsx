"use client";

import { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react";
import Link from "next/link";

export default function NavigationBar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between ${scrolled ? "bg-[#1B4E66]/90 backdrop-blur-md shadow-lg" : "bg-transparent"
                }`}
        >
            {/* Left: Logo + Mobile menu toggle */}
            <div className="flex items-center gap-4">
                <button
                    aria-label="Toggle Menu"
                    className="text-white hover:text-[#F77F00] transition-colors p-2 md:hidden"
                    onClick={() => setMenuOpen((o) => !o)}
                >
                    {menuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
                </button>
                <Link href="/" className="text-white text-xl font-heading font-semibold tracking-wide">
                    Yatra
                </Link>
            </div>

            {/* Center: Nav links (desktop) */}
            <div className="hidden md:flex items-center gap-8">
                {["Destinations", "Hotels", "Restaurants", "Experiences", "About"].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-white/90 hover:text-white font-medium text-sm tracking-wide transition-colors relative group"
                    >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F77F00] transition-all group-hover:w-full" />
                    </a>
                ))}
            </div>

            {/* Right: User icon */}
            <div className="flex items-center">
                <Link href="/dashboard">
                    <button
                        aria-label="User Profile"
                        className="text-white hover:text-[#F77F00] transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
                    >
                        <User size={22} strokeWidth={1.5} />
                    </button>
                </Link>
            </div>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 right-0 bg-[#1B4E66]/95 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-4 md:hidden shadow-xl">
                    {["Destinations", "Hotels", "Restaurants", "Experiences", "About"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-white/80 hover:text-white font-medium text-base py-1"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <hr className="border-white/10" />
                    <div className="flex gap-3">
                        <Link href="/onboarding" className="flex-1" onClick={() => setMenuOpen(false)}>
                            <button className="w-full border border-white/30 text-white py-2.5 rounded-xl font-semibold text-sm">
                                Log in
                            </button>
                        </Link>
                        <Link href="/onboarding" className="flex-1" onClick={() => setMenuOpen(false)}>
                            <button className="w-full bg-[#F77F00] text-white py-2.5 rounded-xl font-bold text-sm">
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
