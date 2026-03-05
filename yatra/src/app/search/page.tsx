"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Filter, Star, Mountain, Camera, Tent, ChevronRight, Heart, X, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CATEGORIES = ["All", "Trekking", "Temples", "Wildlife", "Lakes", "Villages", "Peaks"];

const DESTINATION_DATA = [
    {
        id: 1,
        name: "Everest Base Camp",
        region: "Solukhumbu",
        category: "Trekking",
        rating: 4.9,
        reviews: 3204,
        duration: "14 days",
        difficulty: "Hard",
        image: "/everest_base_camp_card.png",
        tags: ["High Altitude", "Iconic", "Himalayan"],
        saved: false,
    },
    {
        id: 2,
        name: "Phewa Lake",
        region: "Pokhara",
        category: "Lakes",
        rating: 4.7,
        reviews: 5110,
        duration: "3 days",
        difficulty: "Easy",
        image: "/pokhara_lake_bento_1772693938781.png",
        tags: ["Serene", "Mountain Views", "Boating"],
        saved: true,
    },
    {
        id: 3,
        name: "Kathmandu Valley",
        region: "Bagmati",
        category: "Temples",
        rating: 4.8,
        reviews: 8750,
        duration: "5 days",
        difficulty: "Easy",
        image: "/kathmandu_valley_bento_1772693909729.png",
        tags: ["UNESCO", "Cultural", "Historic"],
        saved: false,
    },
    {
        id: 4,
        name: "Chitwan National Park",
        region: "Narayani",
        category: "Wildlife",
        rating: 4.6,
        reviews: 2890,
        duration: "4 days",
        difficulty: "Easy",
        image: "/kathmandu_valley_bento_1772693909729.png",
        tags: ["Safari", "Jungle", "Rhinos"],
        saved: false,
    },
    {
        id: 5,
        name: "Annapurna Circuit",
        region: "Gandaki",
        category: "Trekking",
        rating: 4.9,
        reviews: 4120,
        duration: "18 days",
        difficulty: "Hard",
        image: "/everest_base_camp_card.png",
        tags: ["Classic Trek", "Diverse", "Thorong La"],
        saved: false,
    },
    {
        id: 6,
        name: "Rara Lake",
        region: "Karnali",
        category: "Lakes",
        rating: 4.8,
        reviews: 980,
        duration: "7 days",
        difficulty: "Moderate",
        image: "/pokhara_lake_bento_1772693938781.png",
        tags: ["Remote", "Crystal Clear", "Pristine"],
        saved: false,
    },
    {
        id: 7,
        name: "Lumbini",
        region: "Rupandehi",
        category: "Temples",
        rating: 4.5,
        reviews: 6200,
        duration: "2 days",
        difficulty: "Easy",
        image: "/kathmandu_valley_bento_1772693909729.png",
        tags: ["Birthplace of Buddha", "Pilgrimage", "Peace"],
        saved: false,
    },
    {
        id: 8,
        name: "Bandipur Village",
        region: "Tanahun",
        category: "Villages",
        rating: 4.6,
        reviews: 1420,
        duration: "2 days",
        difficulty: "Easy",
        image: "/kathmandu_valley_bento_1772693909729.png",
        tags: ["Newari", "Hilltop", "Traditional"],
        saved: false,
    },
    {
        id: 9,
        name: "Manaslu Trek",
        region: "Gorkha",
        category: "Trekking",
        rating: 4.8,
        reviews: 1870,
        duration: "16 days",
        difficulty: "Hard",
        image: "/everest_base_camp_card.png",
        tags: ["Remote", "8000m Peak", "Tibetan Culture"],
        saved: false,
    },
    {
        id: 10,
        name: "Tilicho Lake",
        region: "Manang",
        category: "Lakes",
        rating: 4.7,
        reviews: 2100,
        duration: "10 days",
        difficulty: "Hard",
        image: "/pokhara_lake_bento_1772693938781.png",
        tags: ["Highest Lake", "Extreme", "Breathtaking"],
        saved: false,
    },
    {
        id: 11,
        name: "Bardia National Park",
        region: "Bardiya",
        category: "Wildlife",
        rating: 4.5,
        reviews: 1560,
        duration: "4 days",
        difficulty: "Easy",
        image: "/kathmandu_valley_bento_1772693909729.png",
        tags: ["Tigers", "Dolphins", "Remote Safari"],
        saved: false,
    },
    {
        id: 12,
        name: "Ghandruk Village",
        region: "Kaski",
        category: "Villages",
        rating: 4.7,
        reviews: 2340,
        duration: "3 days",
        difficulty: "Moderate",
        image: "/pokhara_lake_bento_1772693938781.png",
        tags: ["Gurung Culture", "Mountain Views", "Homestay"],
        saved: false,
    },
];

export default function SearchPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [query, setQuery] = useState("");
    const [savedIds, setSavedIds] = useState<number[]>([2]);
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 6;

    const filtered = DESTINATION_DATA.filter(
        (d) =>
            (activeCategory === "All" || d.category === activeCategory) &&
            d.name.toLowerCase().includes(query.toLowerCase())
    );

    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const toggleSaved = (id: number) => {
        setSavedIds((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };

    const difficultyColor = (d: string) => {
        if (d === "Easy") return "text-emerald-600 bg-emerald-50";
        if (d === "Moderate") return "text-amber-600 bg-amber-50";
        return "text-red-600 bg-red-50";
    };

    return (
        <div className="min-h-screen bg-[#F8F9FA] font-sans">
            {/* Hero Search Banner */}
            <div className="relative w-full h-64 md:h-80 overflow-hidden">
                <Image
                    src="/hero-bg.jpg"
                    alt="Nepal Mountains"
                    fill
                    className="object-cover scale-105 brightness-75"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />

                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 gap-6">
                    <h1 className="text-3xl md:text-5xl font-heading font-bold text-white text-center drop-shadow-lg">
                        Discover Nepal
                    </h1>

                    {/* Search bar */}
                    <div className="w-full max-w-2xl flex items-center gap-3 bg-white/15 backdrop-blur-xl border border-white/25 rounded-2xl px-5 py-3 shadow-2xl">
                        <Search className="text-white/70 shrink-0" size={22} />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search destinations, treks, temples..."
                            className="flex-1 bg-transparent text-white placeholder-white/60 outline-none font-medium text-base"
                        />
                        {query && (
                            <button onClick={() => setQuery("")} className="text-white/60 hover:text-white transition-colors">
                                <X size={18} />
                            </button>
                        )}
                        <button className="bg-[#F77F00] hover:bg-[#C75A00] text-white px-5 py-2 rounded-xl font-semibold text-sm transition-colors shadow-lg flex items-center gap-2">
                            <Filter size={16} /> Filter
                        </button>
                    </div>
                </div>
            </div>

            {/* Category Tabs */}
            <div className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
                <div className="max-w-6xl mx-auto px-6 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
                            className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeCategory === cat
                                    ? "bg-[#2C7DA0] text-white shadow-md"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Results / Cards Grid */}
            <div className="max-w-6xl mx-auto px-6 py-10">
                {/* Result header */}
                <div className="flex items-center justify-between mb-6">
                    <p className="text-gray-500 font-medium">
                        Showing <span className="text-charcoal font-bold">{filtered.length}</span> destinations
                    </p>
                    <button className="text-[#2C7DA0] font-semibold text-sm flex items-center gap-1 hover:underline">
                        Sort by <ChevronRight size={16} />
                    </button>
                </div>

                <AnimatePresence>
                    {filtered.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-24 text-gray-400"
                        >
                            <Mountain size={48} className="mx-auto mb-4 opacity-30" />
                            <p className="text-xl font-medium">No destinations found</p>
                            <p className="text-sm mt-1">Try a different search or category</p>
                        </motion.div>
                    ) : (
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {paginated.map((dest, i) => (
                                <motion.div
                                    key={dest.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="bg-white rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100"
                                >
                                    {/* Card Image */}
                                    <div className="relative h-52 overflow-hidden">
                                        <Image
                                            src={dest.image}
                                            alt={dest.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                                        {/* Save button */}
                                        <button
                                            onClick={() => toggleSaved(dest.id)}
                                            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all hover:bg-white/40"
                                        >
                                            <Heart
                                                size={18}
                                                className={savedIds.includes(dest.id) ? "text-[#F77F00] fill-[#F77F00]" : "text-white"}
                                            />
                                        </button>

                                        {/* Category tag */}
                                        <div className="absolute bottom-4 left-4 flex gap-2">
                                            <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                                {dest.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-5">
                                        <div className="flex items-start justify-between gap-2 mb-2">
                                            <div>
                                                <h3 className="font-heading font-bold text-lg text-charcoal leading-tight">
                                                    {dest.name}
                                                </h3>
                                                <p className="text-sm text-gray-500 flex items-center gap-1 mt-0.5">
                                                    <MapPin size={14} /> {dest.region}
                                                </p>
                                            </div>

                                            <div className="flex items-center gap-1 shrink-0">
                                                <Star size={14} className="text-[#F77F00] fill-[#F77F00]" />
                                                <span className="font-bold text-sm text-charcoal">{dest.rating}</span>
                                                <span className="text-xs text-gray-400">({dest.reviews.toLocaleString()})</span>
                                            </div>
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 my-3">
                                            {dest.tags.map((tag) => (
                                                <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Footer row */}
                                        <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-3">
                                            <div className="flex items-center gap-3">
                                                <span className="flex items-center gap-1 text-xs text-gray-500">
                                                    <Camera size={13} /> {dest.duration}
                                                </span>
                                                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${difficultyColor(dest.difficulty)}`}>
                                                    {dest.difficulty}
                                                </span>
                                            </div>

                                            <Link href={`/destinations/${dest.id}`}>
                                                <button className="bg-[#2C7DA0] hover:bg-[#1B4E66] text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors flex items-center gap-1">
                                                    Explore <ChevronRight size={14} />
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-10">
                        <button
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 text-gray-500 hover:bg-[#2C7DA0] hover:text-white transition-colors disabled:opacity-40 disabled:pointer-events-none"
                        >
                            <ChevronLeft size={16} />
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${currentPage === page ? "bg-[#2C7DA0] text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                            >
                                {page}
                            </button>
                        ))}
                        <button
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 text-gray-500 hover:bg-[#2C7DA0] hover:text-white transition-colors disabled:opacity-40 disabled:pointer-events-none"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
