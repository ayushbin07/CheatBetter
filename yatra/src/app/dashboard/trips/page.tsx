"use client";

import { useState } from "react";
import { Compass, Calendar, MapPin, Clock, CheckCircle2, Plane } from "lucide-react";
import Image from "next/image";

const TABS = ["Upcoming", "Past", "Saved", "All"] as const;
type Tab = (typeof TABS)[number];

const TRIPS = [
    { id: 1, name: "Kathmandu Heritage Tour", dest: "Kathmandu", date: "Oct 15-22, 2025", days: 7, status: "upcoming" as const, image: "/kathmandu_valley_bento_1772693909729.png" },
    { id: 2, name: "Pokhara Adventure Week", dest: "Pokhara", date: "Nov 5-12, 2025", days: 7, status: "upcoming" as const, image: "/pokhara_lake_bento_1772693938781.png" },
    { id: 3, name: "Everest Base Camp Trek", dest: "Solukhumbu", date: "Mar 1-14, 2025", days: 14, status: "past" as const, image: "/everest_base_camp_card.png" },
    { id: 4, name: "Chitwan Safari", dest: "Chitwan", date: "Jan 10-14, 2025", days: 4, status: "past" as const, image: "/kathmandu_valley_bento_1772693909729.png" },
    { id: 5, name: "Annapurna Circuit", dest: "Gandaki", date: "TBD", days: 18, status: "saved" as const, image: "/pokhara_lake_bento_1772693938781.png" },
];

export default function TripsPage() {
    const [activeTab, setActiveTab] = useState<Tab>("All");

    const filtered = TRIPS.filter(t => activeTab === "All" || t.status === activeTab.toLowerCase());

    const statusBadge = (status: string) => {
        if (status === "upcoming") return <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 flex items-center gap-1"><Plane size={10} /> Upcoming</span>;
        if (status === "past") return <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-500 flex items-center gap-1"><CheckCircle2 size={10} /> Completed</span>;
        return <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-600 flex items-center gap-1"><Clock size={10} /> Saved</span>;
    };

    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#2C7DA0]/10 text-[#2C7DA0] flex items-center justify-center">
                    <Compass size={22} />
                </div>
                <h1 className="text-2xl font-heading font-bold text-charcoal">My Trips</h1>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 bg-gray-100 rounded-xl p-1 mb-8">
                {TABS.map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${activeTab === tab ? "bg-white text-[#2C7DA0] shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Trip Cards */}
            <div className="space-y-4">
                {filtered.length === 0 ? (
                    <div className="text-center py-16 text-gray-400">
                        <Compass size={40} className="mx-auto mb-3 opacity-30" />
                        <p className="font-medium">No trips in this category</p>
                    </div>
                ) : (
                    filtered.map(trip => (
                        <div key={trip.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex">
                            <div className="relative w-32 md:w-44 shrink-0">
                                <Image src={trip.image} alt={trip.name} fill className="object-cover" />
                            </div>
                            <div className="p-4 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-1">
                                        <h3 className="font-heading font-bold text-charcoal">{trip.name}</h3>
                                        {statusBadge(trip.status)}
                                    </div>
                                    <p className="text-sm text-gray-500 flex items-center gap-1"><MapPin size={13} /> {trip.dest}</p>
                                </div>
                                <div className="flex items-center gap-4 mt-3 text-xs text-gray-400">
                                    <span className="flex items-center gap-1"><Calendar size={12} /> {trip.date}</span>
                                    <span className="flex items-center gap-1"><Clock size={12} /> {trip.days} days</span>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
