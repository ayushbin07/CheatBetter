"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    Star, MapPin, Clock, Mountain, ChevronLeft, Heart, Share2,
    Calendar, Users, Camera, ShieldCheck, CheckCircle2, X, ChevronRight, ZoomIn
} from "lucide-react";

const DECK_PHOTOS = [
    "/kathmandu_valley_bento_1772693909729.png",
    "/hero-bg.jpg",
    "/pokhara_lake_bento_1772693938781.png",
    "/everest_base_camp_card.png",
];

const HIGHLIGHTS = [
    { icon: Mountain, text: "Altitude: 3,440 m" },
    { icon: Clock, text: "Duration: 14 Days" },
    { icon: Users, text: "Group size: 2 – 12" },
    { icon: Camera, text: "Best time: Oct – Dec" },
];

const REVIEWS = [
    {
        name: "Arjun Sharma",
        date: "Jan 2026",
        rating: 5,
        text: "Absolutely life-changing. The views from Base Camp took my breath away. Every difficult step was worth it.",
    },
    {
        name: "Priya Thapa",
        date: "Nov 2025",
        rating: 5,
        text: "Our guide was incredible. The tea houses were cozy. It was tough but deeply fulfilling.",
    },
];

export default function DestinationDetailPage() {
    const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
    const [userRating, setUserRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    return (
        <div className="min-h-screen bg-[#F8F9FA] font-sans">

            {/* Image Preview Lightbox */}
            <AnimatePresence>
                {lightboxIdx !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
                        onClick={() => setLightboxIdx(null)}
                    >
                        <button onClick={() => setLightboxIdx(null)} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"><X size={20} /></button>
                        <button
                            onClick={(e) => { e.stopPropagation(); setLightboxIdx(i => i !== null ? (i - 1 + DECK_PHOTOS.length) % DECK_PHOTOS.length : 0); }}
                            className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                        ><ChevronLeft size={24} /></button>
                        <button
                            onClick={(e) => { e.stopPropagation(); setLightboxIdx(i => i !== null ? (i + 1) % DECK_PHOTOS.length : 0); }}
                            className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                        ><ChevronRight size={24} /></button>
                        <motion.div
                            key={lightboxIdx}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-[90vw] h-[70vh] max-w-4xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image src={DECK_PHOTOS[lightboxIdx]} alt={`Gallery ${lightboxIdx + 1}`} fill className="object-contain" />
                        </motion.div>
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                            {DECK_PHOTOS.map((_, i) => (
                                <button key={i} onClick={(e) => { e.stopPropagation(); setLightboxIdx(i); }} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === lightboxIdx ? "bg-white" : "bg-white/30"}`} />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Back Navigation */}
            <div className="fixed top-5 left-5 z-50">
                <Link href="/search">
                    <button className="flex items-center gap-2 bg-white/90 backdrop-blur-md border border-white/30 shadow-lg px-4 py-2.5 rounded-full text-charcoal font-semibold text-sm hover:-translate-x-0.5 transition-transform">
                        <ChevronLeft size={18} /> Back
                    </button>
                </Link>
            </div>

            {/* Hero Image Gallery */}
            <div className="relative w-full h-[60vh] overflow-hidden rounded-b-[3rem]">
                <Image
                    src="/everest_base_camp_card.png"
                    alt="Everest Base Camp"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Photo gallery thumbnails */}
                <div className="absolute bottom-6 right-6 flex gap-2">
                    {DECK_PHOTOS.map((photo, i) => (
                        <div key={i} onClick={() => setLightboxIdx(i)} className="w-14 h-14 rounded-xl overflow-hidden border-2 border-white shadow-md cursor-pointer hover:scale-105 transition-transform relative group/thumb">
                            <Image src={photo} alt={`Photo ${i + 1}`} fill className="object-cover" />
                            <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/30 transition-colors flex items-center justify-center">
                                <ZoomIn size={16} className="text-white opacity-0 group-hover/thumb:opacity-100 transition-opacity" />
                            </div>
                        </div>
                    ))}
                    <button onClick={() => setLightboxIdx(0)} className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-md border-2 border-white/30 text-white font-bold text-xs flex items-center justify-center hover:bg-white/30 transition-colors">
                        +{DECK_PHOTOS.length}
                    </button>
                </div>

                {/* Action buttons */}
                <div className="absolute top-6 right-6 flex gap-2">
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-all">
                        <Heart size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-all">
                        <Share2 size={18} />
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-5 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* Left: Details */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Title & Rating */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-[#2C7DA0]/10 text-[#2C7DA0] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Trekking</span>
                            <span className="bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-full">Hard</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-2 leading-tight">
                            Everest Base Camp Trek
                        </h1>
                        <div className="flex items-center gap-3 text-gray-500 text-sm font-medium">
                            <span className="flex items-center gap-1"><MapPin size={15} />Solukhumbu, Nepal</span>
                            <span>•</span>
                            <span className="flex items-center gap-1 text-[#F77F00]">
                                <Star size={15} className="fill-[#F77F00]" /> 4.9 (3,204 reviews)
                            </span>
                        </div>
                    </motion.div>

                    {/* Highlights */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                        <h2 className="font-heading font-bold text-xl text-charcoal mb-4">Highlights</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {HIGHLIGHTS.map((h, i) => (
                                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col items-center gap-2 text-center hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 bg-[#2C7DA0]/10 rounded-xl flex items-center justify-center text-[#2C7DA0]">
                                        <h.icon size={20} strokeWidth={1.8} />
                                    </div>
                                    <span className="text-xs font-semibold text-gray-600">{h.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Description */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        <h2 className="font-heading font-bold text-xl text-charcoal mb-3">About this Trek</h2>
                        <p className="text-gray-600 leading-relaxed font-light text-base">
                            The Everest Base Camp Trek is one of the world&#39;s most iconic trekking routes. Beginning with a flight to Lukla,
                            trekkers journey through Sherpa villages, ancient monasteries, and breathtaking high-altitude landscapes before
                            reaching EBC at 5,364m. The route passes through Namche Bazaar, Tengboche, Dingboche, and Lobuche, offering
                            unparalleled views of the world&#39;s highest peaks including Lhotse, Nuptse, Ama Dablam, and of course, Everest itself.
                        </p>
                        <p className="text-gray-600 leading-relaxed font-light text-base mt-3">
                            This 14-day guided experience includes experienced local guides, all accommodation in teahouses, airport transfers,
                            and emergency evacuation insurance.
                        </p>
                    </motion.div>

                    {/* What&lsquo;s Included */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                        <h2 className="font-heading font-bold text-xl text-charcoal mb-4">What&apos;s Included</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                                "Expert local guide", "Teahouse accommodation",
                                "All permits & fees", "Airport transfers",
                                "Emergency medical cover", "Daily breakfast & dinner",
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3 text-gray-700 font-medium text-sm">
                                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Reviews */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                        <h2 className="font-heading font-bold text-xl text-charcoal mb-4">Traveller Reviews</h2>
                        <div className="space-y-4">
                            {REVIEWS.map((r, i) => (
                                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between mb-3">
                                        <div>
                                            <p className="font-semibold text-charcoal">{r.name}</p>
                                            <p className="text-xs text-gray-400">{r.date}</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            {Array.from({ length: r.rating }).map((_, j) => (
                                                <Star key={j} size={14} className="fill-[#F77F00] text-[#F77F00]" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-gray-600 font-light text-sm leading-relaxed">{r.text}</p>
                                </div>
                            ))}
                        </div>

                        {/* Interactive Rating System */}
                        <div className="mt-6 bg-white border border-gray-100 rounded-2xl p-5">
                            <h3 className="font-heading font-bold text-charcoal mb-3">Rate this destination</h3>
                            <div className="flex items-center gap-1 mb-2">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <button
                                        key={star}
                                        onMouseEnter={() => setHoverRating(star)}
                                        onMouseLeave={() => setHoverRating(0)}
                                        onClick={() => setUserRating(star)}
                                        className="p-0.5 transition-transform hover:scale-110"
                                    >
                                        <Star
                                            size={28}
                                            className={`transition-colors ${(hoverRating || userRating) >= star ? "fill-[#F77F00] text-[#F77F00]" : "text-gray-300"}`}
                                        />
                                    </button>
                                ))}
                                {userRating > 0 && (
                                    <span className="ml-2 text-sm font-semibold text-charcoal">{userRating}/5</span>
                                )}
                            </div>
                            {userRating > 0 && (
                                <p className="text-xs text-emerald-600 font-medium">Thanks for rating! Your feedback helps other travellers.</p>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* Right: Booking Card */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-1"
                >
                    <div className="sticky top-6 bg-white border border-gray-100 rounded-[1.5rem] shadow-xl p-6">
                        <div className="text-3xl font-heading font-bold text-charcoal mb-1">
                            $1,299 <span className="text-base text-gray-400 font-normal">/ person</span>
                        </div>
                        <div className="flex items-center gap-1 mb-5">
                            <ShieldCheck size={16} className="text-emerald-500" />
                            <span className="text-xs text-gray-500 font-medium">Free cancellation up to 7 days before</span>
                        </div>

                        <div className="border border-gray-100 rounded-xl divide-y divide-gray-100 mb-4">
                            <div className="p-3 flex items-center gap-3">
                                <Calendar size={18} className="text-[#2C7DA0]" />
                                <div>
                                    <p className="text-xs text-gray-400 font-medium">Start Date</p>
                                    <p className="text-sm font-semibold text-charcoal">October 15, 2026</p>
                                </div>
                            </div>
                            <div className="p-3 flex items-center gap-3">
                                <Users size={18} className="text-[#2C7DA0]" />
                                <div>
                                    <p className="text-xs text-gray-400 font-medium">Guests</p>
                                    <p className="text-sm font-semibold text-charcoal">2 Adults</p>
                                </div>
                            </div>
                        </div>

                        <button className="w-full bg-gradient-to-r from-[#F77F00] to-[#FF9B3D] text-white py-4 rounded-xl font-bold text-base hover:shadow-[0_8px_24px_rgba(247,127,0,0.4)] hover:-translate-y-0.5 transition-all duration-200">
                            Book Now
                        </button>
                        <button className="w-full mt-3 border border-[#2C7DA0] text-[#2C7DA0] py-3.5 rounded-xl font-semibold text-sm hover:bg-[#2C7DA0]/5 transition-colors">
                            Save to Wishlist
                        </button>

                        <p className="text-center text-xs text-gray-400 mt-4">You won&apos;t be charged yet</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
