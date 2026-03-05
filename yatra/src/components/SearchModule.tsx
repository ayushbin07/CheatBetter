"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Calendar, Users, Search } from "lucide-react";
import Link from "next/link";

export default function SearchModule() {
    const [activeTab, setActiveTab] = useState("Hotels");
    const tabs = ["Hotels", "Flights", "Rentals"];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="w-[90%] md:w-[800px] z-20 mx-auto mt-12 relative"
        >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-3 md:p-4 rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.3)] will-change-transform">
                {/* Tabs */}
                <div className="flex gap-2 mb-4 px-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab
                                ? "bg-white/25 text-white shadow-[0_4px_12px_rgba(255,255,255,0.1)] border border-white/30"
                                : "bg-transparent text-white/80 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Inputs */}
                <div className="bg-white/95 backdrop-blur-3xl rounded-2xl p-3 flex flex-col md:flex-row gap-2 items-center shadow-inner">
                    <div className="flex-1 w-full hover:bg-gray-50/80 transition-colors rounded-xl p-3 flex items-center gap-4 cursor-pointer">
                        <div className="p-2.5 bg-gray-100 rounded-full text-[#2C7DA0]">
                            <MapPin size={20} strokeWidth={2} />
                        </div>
                        <div className="flex flex-col flex-1">
                            <span className="text-xs text-gray-500 font-semibold tracking-wider uppercase mb-0.5">Destination</span>
                            <input
                                type="text"
                                placeholder="Where to?"
                                className="outline-none text-charcoal font-medium w-full bg-transparent placeholder-gray-400 text-sm"
                            />
                        </div>
                    </div>

                    <div className="hidden md:block w-px h-12 bg-gray-200"></div>

                    <div className="flex-1 w-full hover:bg-gray-50/80 transition-colors rounded-xl p-3 flex items-center gap-4 cursor-pointer">
                        <div className="p-2.5 bg-gray-100 rounded-full text-[#2C7DA0]">
                            <Calendar size={20} strokeWidth={2} />
                        </div>
                        <div className="flex flex-col flex-1">
                            <span className="text-xs text-gray-500 font-semibold tracking-wider uppercase mb-0.5">Dates</span>
                            <input
                                type="text"
                                placeholder="Check-in / out"
                                className="outline-none text-charcoal font-medium w-full bg-transparent placeholder-gray-400 text-sm"
                            />
                        </div>
                    </div>

                    <div className="hidden md:block w-px h-12 bg-gray-200"></div>

                    <div className="flex-1 w-full hover:bg-gray-50/80 transition-colors rounded-xl p-3 flex items-center gap-4 cursor-pointer">
                        <div className="p-2.5 bg-gray-100 rounded-full text-[#2C7DA0]">
                            <Users size={20} strokeWidth={2} />
                        </div>
                        <div className="flex flex-col flex-1">
                            <span className="text-xs text-gray-500 font-semibold tracking-wider uppercase mb-0.5">Guests</span>
                            <input
                                type="text"
                                placeholder="2 Guests"
                                className="outline-none text-charcoal font-medium w-full bg-transparent placeholder-gray-400 text-sm"
                            />
                        </div>
                    </div>

                    <button className="w-full md:w-auto mt-2 md:mt-0 bg-gradient-to-tr from-[#F77F00] to-[#FF9B3D] hover:from-[#C75A00] hover:to-[#F77F00] text-white p-5 rounded-xl transition-all duration-300 flex items-center justify-center shadow-[0_8px_24px_rgba(247,127,0,0.4)] hover:shadow-[0_12px_32px_rgba(247,127,0,0.6)] hover:-translate-y-1">
                        <Search size={24} strokeWidth={2.5} />
                        <span className="md:hidden ml-2 font-semibold tracking-wide">Search</span>
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
