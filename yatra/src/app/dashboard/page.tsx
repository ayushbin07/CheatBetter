"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { CloudLightning, MapPin, PlaneTakeoff, Clock, Calendar, Compass, Heart, X, Mountain, Utensils, Camera, Sun, ChevronRight, Bike, ChevronLeft, Star, ArrowLeftRight, ZoomIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useToast } from "@/components/ToastProvider";

const NepalMap = dynamic(() => import("@/components/NepalMap"), { ssr: false });

/* ── Data ── */
const MONTHLY_STATS = [
    { month: "Jan", trips: 1, hours: 12 },
    { month: "Feb", trips: 0, hours: 0 },
    { month: "Mar", trips: 2, hours: 24 },
    { month: "Apr", trips: 1, hours: 8 },
    { month: "May", trips: 0, hours: 0 },
    { month: "Jun", trips: 3, hours: 36 },
    { month: "Jul", trips: 2, hours: 20 },
    { month: "Aug", trips: 1, hours: 14 },
    { month: "Sep", trips: 0, hours: 0 },
    { month: "Oct", trips: 4, hours: 48 },
    { month: "Nov", trips: 2, hours: 18 },
    { month: "Dec", trips: 1, hours: 10 },
];

const COMPARE_DESTINATIONS = [
    { name: "Kathmandu", altitude: "1,400m", bestTime: "Oct–Dec", budget: "$30/day", style: "Cultural", rating: 4.8, image: "/kathmandu_valley_bento_1772693909729.png" },
    { name: "Pokhara", altitude: "827m", bestTime: "Sep–Nov", budget: "$25/day", style: "Adventure", rating: 4.7, image: "/pokhara_lake_bento_1772693938781.png" },
];

const RECOMMENDATIONS = [
    { id: 1, name: "Annapurna Circuit", region: "Gandaki", rating: 4.9, image: "/kathmandu_valley_bento_1772693909729.png", tag: "Trending" },
    { id: 2, name: "Chitwan Safari", region: "Narayani", rating: 4.6, image: "/pokhara_lake_bento_1772693938781.png", tag: "Popular" },
    { id: 3, name: "Langtang Valley", region: "Bagmati", rating: 4.8, image: "/kathmandu_valley_bento_1772693909729.png", tag: "Hidden Gem" },
    { id: 4, name: "Upper Mustang", region: "Dhaulagiri", rating: 4.9, image: "/pokhara_lake_bento_1772693938781.png", tag: "Exclusive" },
    { id: 5, name: "Rara Lake", region: "Karnali", rating: 4.7, image: "/kathmandu_valley_bento_1772693909729.png", tag: "Remote" },
];

export default function DashboardPage() {
    const [showItinerary, setShowItinerary] = useState(false);
    const [chartMetric, setChartMetric] = useState<"trips" | "hours">("trips");
    const carouselRef = useRef<HTMLDivElement>(null);
    const { toast } = useToast();

    return (
        <div className="max-w-6xl mx-auto space-y-6 pb-12">

            {/* Greeting & Weather Row */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
                <div>
                    <h1 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-1 tracking-tight">Welcome back, Explorer</h1>
                    <p className="text-gray-500 font-medium">Your next adventure to Nepal is 14 days away.</p>
                </div>

                <div className="flex items-center gap-3">
                    <a href="/task1/index.html" className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3 cursor-pointer hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-[#F77F00]">
                            <Bike size={20} />
                        </div>
                        <div>
                            <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">Rent</div>
                            <div className="font-bold text-sm text-charcoal">Scooter</div>
                        </div>
                    </a>

                    <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow">
                    <div>
                        <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">Kathmandu</div>
                        <div className="font-bold text-lg text-charcoal">24°C</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#2C7DA0]">
                        <CloudLightning size={20} />
                    </div>
                </div>
                </div>
            </div>

            {/* Stats Bento Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: "Trips Completed", value: "3", icon: Compass, color: "text-[#2C7DA0]", bg: "bg-blue-50" },
                    { label: "Places Saved", value: "12", icon: MapPin, color: "text-[#F77F00]", bg: "bg-orange-50" },
                    { label: "Upcoming Flights", value: "1", icon: PlaneTakeoff, color: "text-emerald-600", bg: "bg-emerald-50" },
                    { label: "Travel Hours", value: "48", icon: Clock, color: "text-purple-600", bg: "bg-purple-50" },
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                        <div className={`${stat.bg} ${stat.color} w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                            <stat.icon size={20} strokeWidth={2.5} />
                        </div>
                        <div className="text-3xl font-bold text-charcoal mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Main Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-2">

                {/* Large Feature Card: Upcoming Trip — Kathmandu */}
                <div className="lg:col-span-2 relative overflow-hidden rounded-[2rem] shadow-sm group min-h-[300px] cursor-pointer">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/kathmandu_valley_bento_1772693909729.png"
                            alt="Kathmandu Valley"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>

                    {/* Hover Details Overlay — Kathmandu */}
                    <div className="absolute inset-0 z-[15] bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                        <div className="grid grid-cols-2 gap-4 p-8 max-w-md">
                            <div className="flex items-start gap-3">
                                <div className="w-9 h-9 rounded-lg bg-[#F77F00]/20 flex items-center justify-center shrink-0">
                                    <Mountain size={18} className="text-[#F77F00]" />
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm">Altitude</p>
                                    <p className="text-white/70 text-xs">1,400m above sea level</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-9 h-9 rounded-lg bg-[#2C7DA0]/20 flex items-center justify-center shrink-0">
                                    <Sun size={18} className="text-[#6FB3D2]" />
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm">Best Season</p>
                                    <p className="text-white/70 text-xs">Oct – Dec, clear skies</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                                    <Camera size={18} className="text-emerald-400" />
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm">Top Sight</p>
                                    <p className="text-white/70 text-xs">Swayambhunath Stupa</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-9 h-9 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
                                    <Utensils size={18} className="text-purple-400" />
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm">Must Try</p>
                                    <p className="text-white/70 text-xs">Momos & Newari cuisine</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-8 z-10 transition-opacity duration-300 group-hover:opacity-0">
                        <div>
                            <span className="inline-block px-3 py-1 bg-[#F77F00] text-white text-xs font-bold uppercase tracking-wider rounded-lg mb-3 shadow-lg">Next Trip</span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2 leading-tight">Kathmandu Valley <br /> Heritage Tour</h2>
                            <div className="flex items-center gap-4 text-white/80 text-sm font-medium">
                                <span className="flex items-center gap-1"><Calendar size={16} /> Oct 15 - Oct 22</span>
                                <span className="flex items-center gap-1"><MapPin size={16} /> Kathmandu, NP</span>
                            </div>
                        </div>
                    </div>

                    {/* View Itinerary button — always visible, above overlay */}
                    <div className="absolute bottom-8 right-8 z-[20]">
                        <button
                            onClick={() => setShowItinerary(true)}
                            className="bg-white text-charcoal px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-xl text-center"
                        >
                            View Itinerary
                        </button>
                    </div>
                </div>

                {/* Small Feature Card: Saved Destination — Pokhara */}
                <Link href="/destinations/pokhara" className="relative overflow-hidden rounded-[2rem] shadow-sm group min-h-[300px] cursor-pointer block">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/pokhara_lake_bento_1772693938781.png"
                            alt="Pokhara Lake"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    </div>

                    {/* Hover Details Overlay — Pokhara */}
                    <div className="absolute inset-0 z-[5] bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                        <div className="space-y-3 p-6">
                            <div className="flex items-start gap-3">
                                <div className="w-9 h-9 rounded-lg bg-[#2C7DA0]/20 flex items-center justify-center shrink-0">
                                    <Mountain size={18} className="text-[#6FB3D2]" />
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm">Annapurna Gateway</p>
                                    <p className="text-white/70 text-xs">Base camp treks start here</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                                    <Camera size={18} className="text-emerald-400" />
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm">Phewa Lake</p>
                                    <p className="text-white/70 text-xs">Boating with mountain views</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-9 h-9 rounded-lg bg-[#F77F00]/20 flex items-center justify-center shrink-0">
                                    <Sun size={18} className="text-[#F77F00]" />
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm">Paragliding Hub</p>
                                    <p className="text-white/70 text-xs">World-class thermals & views</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-4 right-4 z-10">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white">
                            <Heart size={20} fill="currentColor" />
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                        <h3 className="text-2xl font-heading font-bold text-white mb-1">Pokhara</h3>
                        <p className="text-white/80 text-sm font-medium">Saved 2 days ago</p>
                    </div>
                </Link>
            </div>

            {/* ───────── Interactive Charts ───────── */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-heading font-bold text-charcoal">Travel Statistics</h2>
                    <div className="flex gap-1 bg-gray-100 rounded-lg p-0.5">
                        {(["trips", "hours"] as const).map(m => (
                            <button key={m} onClick={() => setChartMetric(m)} className={`px-3 py-1 text-xs font-semibold rounded-md capitalize transition-colors ${chartMetric === m ? "bg-white text-[#2C7DA0] shadow-sm" : "text-gray-500 hover:text-gray-700"}`}>{m}</button>
                        ))}
                    </div>
                </div>
                <div className="flex items-end gap-2 h-48">
                    {MONTHLY_STATS.map((s) => {
                        const val = s[chartMetric];
                        const max = Math.max(...MONTHLY_STATS.map(d => d[chartMetric]));
                        const pct = max > 0 ? (val / max) * 100 : 0;
                        return (
                            <div key={s.month} className="flex-1 flex flex-col items-center gap-1 group/bar">
                                <span className="text-[10px] font-bold text-[#2C7DA0] opacity-0 group-hover/bar:opacity-100 transition-opacity">{val}</span>
                                <div className="w-full bg-gray-100 rounded-t-md relative" style={{ height: "160px" }}>
                                    <div className="absolute bottom-0 w-full rounded-t-md bg-gradient-to-t from-[#2C7DA0] to-[#6FB3D2] transition-all duration-500 group-hover/bar:from-[#F77F00] group-hover/bar:to-[#F9A825]" style={{ height: `${Math.max(pct, 4)}%` }} />
                                </div>
                                <span className="text-[10px] text-gray-400 font-medium">{s.month}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* ───────── Map-Based Interface ───────── */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-lg font-heading font-bold text-charcoal mb-4">Explore Nepal</h2>
                <NepalMap />
            </div>

            {/* ───────── Comparison View ───────── */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-center gap-2 mb-6">
                    <ArrowLeftRight size={18} className="text-[#2C7DA0]" />
                    <h2 className="text-lg font-heading font-bold text-charcoal">Compare Destinations</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {COMPARE_DESTINATIONS.map((d, i) => (
                        <div key={d.name} className="border border-gray-100 rounded-xl overflow-hidden">
                            <div className="relative h-32">
                                <Image src={d.image} alt={d.name} fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <h3 className="absolute bottom-3 left-4 text-white font-heading font-bold text-lg">{d.name}</h3>
                            </div>
                            <div className="p-4 space-y-3">
                                {[
                                    { label: "Altitude", value: d.altitude },
                                    { label: "Best Season", value: d.bestTime },
                                    { label: "Budget", value: d.budget },
                                    { label: "Style", value: d.style },
                                    { label: "Rating", value: `⭐ ${d.rating}` },
                                ].map(row => (
                                    <div key={row.label} className="flex justify-between text-sm">
                                        <span className="text-gray-400">{row.label}</span>
                                        <span className="font-semibold text-charcoal">{row.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 text-center">
                    <span className="inline-flex items-center gap-1 text-xs text-[#2C7DA0] font-semibold bg-[#2C7DA0]/10 px-3 py-1.5 rounded-full">
                        <ArrowLeftRight size={12} /> Side-by-side comparison
                    </span>
                </div>
            </div>

            {/* ───────── Recommendation Carousel ───────── */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-heading font-bold text-charcoal">Recommended For You</h2>
                    <div className="flex gap-2">
                        <button onClick={() => carouselRef.current?.scrollBy({ left: -260, behavior: "smooth" })} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#2C7DA0] hover:text-white transition-colors"><ChevronLeft size={16} /></button>
                        <button onClick={() => carouselRef.current?.scrollBy({ left: 260, behavior: "smooth" })} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#2C7DA0] hover:text-white transition-colors"><ChevronRight size={16} /></button>
                    </div>
                </div>
                <div ref={carouselRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2" style={{ scrollbarWidth: "none" }}>
                    {RECOMMENDATIONS.map(r => (
                        <div key={r.id} className="min-w-[240px] snap-start bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow group/card flex-shrink-0">
                            <div className="relative h-32">
                                <Image src={r.image} alt={r.name} fill className="object-cover group-hover/card:scale-105 transition-transform duration-500" />
                                <span className="absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wider bg-white/90 text-[#F77F00] px-2 py-0.5 rounded-full">{r.tag}</span>
                            </div>
                            <div className="p-3">
                                <h3 className="font-heading font-bold text-sm text-charcoal">{r.name}</h3>
                                <p className="text-xs text-gray-400">{r.region}</p>
                                <div className="flex items-center gap-1 mt-1">
                                    <Star size={12} className="text-amber-400" fill="currentColor" />
                                    <span className="text-xs font-semibold text-charcoal">{r.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Itinerary Slide-Over Panel */}
            {showItinerary && (
                <div className="fixed inset-0 z-50 flex justify-end" onClick={() => setShowItinerary(false)}>
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/40 animate-[fadeIn_200ms_ease-out]" />

                    {/* Panel */}
                    <div
                        className="relative w-full md:w-1/2 h-full bg-white shadow-2xl overflow-y-auto animate-[slideIn_300ms_ease-out]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-white/90 backdrop-blur-md z-10 border-b border-gray-100 px-8 py-6 flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-heading font-bold text-charcoal">Kathmandu Valley Heritage Tour</h2>
                                <p className="text-sm text-gray-500 font-medium mt-1">Oct 15 – Oct 22 &middot; 7 nights</p>
                            </div>
                            <button
                                onClick={() => setShowItinerary(false)}
                                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-charcoal transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Itinerary Content */}
                        <div className="px-8 py-6 space-y-6">
                            {[
                                {
                                    day: 1,
                                    date: "Oct 15",
                                    title: "Arrival in Kathmandu",
                                    items: [
                                        "Arrive at Tribhuvan International Airport",
                                        "Transfer to Hotel Yak & Yeti",
                                        "Evening walk around Thamel district",
                                        "Welcome dinner with traditional Nepali cuisine",
                                    ],
                                },
                                {
                                    day: 2,
                                    date: "Oct 16",
                                    title: "Kathmandu Durbar Square",
                                    items: [
                                        "Guided tour of Kathmandu Durbar Square",
                                        "Visit Kumari Ghar (Living Goddess temple)",
                                        "Explore Asan Bazaar for local spices",
                                        "Lunch at a rooftop café overlooking the square",
                                    ],
                                },
                                {
                                    day: 3,
                                    date: "Oct 17",
                                    title: "Swayambhunath & Patan",
                                    items: [
                                        "Sunrise visit to Swayambhunath (Monkey Temple)",
                                        "Drive to Patan Durbar Square",
                                        "Traditional Newari cooking class",
                                        "Visit the Golden Temple & Mahabouddha",
                                    ],
                                },
                                {
                                    day: 4,
                                    date: "Oct 18",
                                    title: "Bhaktapur Heritage Day",
                                    items: [
                                        "Full day exploring Bhaktapur old town",
                                        "55-Window Palace & Nyatapola Temple",
                                        "Pottery Square hands-on experience",
                                        "Try Juju Dhau (King Curd) — local specialty",
                                    ],
                                },
                                {
                                    day: 5,
                                    date: "Oct 19",
                                    title: "Pashupatinath & Boudhanath",
                                    items: [
                                        "Morning visit to Pashupatinath Temple",
                                        "Walk to Boudhanath Stupa",
                                        "Explore Tibetan monasteries nearby",
                                        "Meditation session at a local monastery",
                                    ],
                                },
                                {
                                    day: 6,
                                    date: "Oct 20",
                                    title: "Nagarkot Excursion",
                                    items: [
                                        "Drive to Nagarkot for panoramic Himalayan views",
                                        "Sunrise viewing of Mt. Everest range",
                                        "Hike through terraced farmland",
                                        "Return to Kathmandu in the evening",
                                    ],
                                },
                                {
                                    day: 7,
                                    date: "Oct 21",
                                    title: "Free Day & Shopping",
                                    items: [
                                        "Optional: Mountain flight over Everest",
                                        "Explore Thamel for souvenirs & handicrafts",
                                        "Spa & relaxation at the hotel",
                                        "Farewell dinner with cultural performances",
                                    ],
                                },
                                {
                                    day: 8,
                                    date: "Oct 22",
                                    title: "Departure",
                                    items: [
                                        "Breakfast at the hotel",
                                        "Transfer to Tribhuvan International Airport",
                                        "Depart Kathmandu",
                                    ],
                                },
                            ].map((day) => (
                                <div key={day.day} className="group/day">
                                    <div className="flex items-start gap-4">
                                        {/* Day marker */}
                                        <div className="flex flex-col items-center">
                                            <div className="w-10 h-10 rounded-full bg-[#2C7DA0]/10 text-[#2C7DA0] font-bold text-sm flex items-center justify-center shrink-0">
                                                {day.day}
                                            </div>
                                            {day.day < 8 && <div className="w-0.5 h-full bg-gray-100 mt-2" />}
                                        </div>

                                        {/* Day content */}
                                        <div className="flex-1 pb-6">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="font-heading font-bold text-charcoal">{day.title}</h3>
                                            </div>
                                            <p className="text-xs text-gray-400 font-medium mb-3">{day.date}</p>
                                            <div className="space-y-2">
                                                {day.items.map((item, i) => (
                                                    <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                                        <ChevronRight size={14} className="text-[#F77F00] mt-0.5 shrink-0" />
                                                        <span>{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
