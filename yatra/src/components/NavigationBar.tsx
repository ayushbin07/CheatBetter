"use client";

import { useState, useEffect } from "react";
import { Menu, User } from "lucide-react";

export default function NavigationBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between ${scrolled
                    ? "bg-[#2C7DA0]/90 backdrop-blur-md shadow-lg"
                    : "bg-transparent"
                }`}
        >
            <div className="flex items-center gap-4">
                <button
                    aria-label="Menu"
                    className="text-white hover:text-[#F77F00] transition-colors p-2"
                >
                    <Menu size={28} strokeWidth={1.5} />
                </button>
                {/* If there was a logo, it would go here */}
                <span className="text-white text-xl font-heading font-semibold tracking-wide hidden sm:block">
                    Yatra
                </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
                {["Destinations", "Hotels", "Restaurants", "Experiences", "About"].map(
                    (item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-white/90 hover:text-white font-medium text-sm tracking-wide transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F77F00] transition-all group-hover:w-full"></span>
                        </a>
                    )
                )}
            </div>

            <div>
                <button
                    aria-label="User Profile"
                    className="text-white hover:text-[#F77F00] transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
                >
                    <User size={24} strokeWidth={1.5} />
                </button>
            </div>
        </nav>
    );
}
