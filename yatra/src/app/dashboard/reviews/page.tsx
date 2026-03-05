"use client";

import { useState } from "react";
import { MessageSquare, Star, ThumbsUp, MapPin } from "lucide-react";
import Image from "next/image";

const MY_REVIEWS = [
    { id: 1, dest: "Everest Base Camp", region: "Solukhumbu", rating: 5, date: "Mar 2025", text: "Absolutely unforgettable. The trek tested my limits but the views made it all worthwhile.", likes: 24, image: "/everest_base_camp_card.png" },
    { id: 2, dest: "Kathmandu Valley", region: "Bagmati", rating: 4, date: "Jan 2025", text: "Rich culture, incredible temples. The crowds can be intense but the history is unmatched.", likes: 18, image: "/kathmandu_valley_bento_1772693909729.png" },
    { id: 3, dest: "Pokhara", region: "Kaski", rating: 5, date: "Nov 2024", text: "Peaceful and stunning. Phewa Lake at sunrise is pure magic.", likes: 31, image: "/pokhara_lake_bento_1772693938781.png" },
];

const DESTINATIONS_TO_REVIEW = [
    { id: "chitwan", name: "Chitwan Safari", image: "/kathmandu_valley_bento_1772693909729.png" },
    { id: "lumbini", name: "Lumbini", image: "/pokhara_lake_bento_1772693938781.png" },
];

export default function ReviewsPage() {
    const [ratings, setRatings] = useState<Record<string, number>>({});
    const [hovers, setHovers] = useState<Record<string, number>>({});
    const [submitted, setSubmitted] = useState<string[]>([]);

    const handleRate = (destId: string, star: number) => {
        setRatings(prev => ({ ...prev, [destId]: star }));
    };

    const handleSubmit = (destId: string) => {
        setSubmitted(prev => [...prev, destId]);
    };

    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <MessageSquare size={22} />
                </div>
                <div>
                    <h1 className="text-2xl font-heading font-bold text-charcoal">My Reviews</h1>
                    <p className="text-sm text-gray-500">{MY_REVIEWS.length} reviews written</p>
                </div>
            </div>

            {/* Rating Summary */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-8 flex items-center gap-6">
                <div className="text-center">
                    <p className="text-4xl font-heading font-bold text-charcoal">4.7</p>
                    <div className="flex items-center gap-0.5 mt-1 justify-center">
                        {[1, 2, 3, 4, 5].map(s => (
                            <Star key={s} size={14} className={`${s <= 4 ? "fill-[#F77F00] text-[#F77F00]" : "text-[#F77F00]"}`} style={s === 5 ? { clipPath: "inset(0 30% 0 0)" } : undefined} />
                        ))}
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Average</p>
                </div>
                <div className="flex-1 space-y-1.5">
                    {[5, 4, 3, 2, 1].map(star => {
                        const count = MY_REVIEWS.filter(r => r.rating === star).length;
                        const pct = MY_REVIEWS.length > 0 ? (count / MY_REVIEWS.length) * 100 : 0;
                        return (
                            <div key={star} className="flex items-center gap-2">
                                <span className="text-xs text-gray-500 w-3">{star}</span>
                                <Star size={10} className="text-[#F77F00] fill-[#F77F00]" />
                                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#F77F00] rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
                                </div>
                                <span className="text-xs text-gray-400 w-4 text-right">{count}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Past Reviews */}
            <div className="space-y-4 mb-10">
                {MY_REVIEWS.map(r => (
                    <div key={r.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex">
                        <div className="relative w-28 md:w-36 shrink-0">
                            <Image src={r.image} alt={r.dest} fill className="object-cover" />
                        </div>
                        <div className="p-4 flex-1">
                            <div className="flex items-start justify-between gap-2 mb-1">
                                <div>
                                    <h3 className="font-heading font-bold text-charcoal">{r.dest}</h3>
                                    <p className="text-xs text-gray-400 flex items-center gap-1"><MapPin size={10} /> {r.region} · {r.date}</p>
                                </div>
                                <div className="flex items-center gap-0.5">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} size={12} className={i < r.rating ? "fill-[#F77F00] text-[#F77F00]" : "text-gray-200"} />
                                    ))}
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 font-light mt-2">{r.text}</p>
                            <div className="flex items-center gap-1 mt-3 text-xs text-gray-400">
                                <ThumbsUp size={12} /> {r.likes} helpful
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Rate Unreviewed Destinations */}
            <h2 className="font-heading font-bold text-lg text-charcoal mb-4">Rate Your Visits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {DESTINATIONS_TO_REVIEW.map(dest => (
                    <div key={dest.id} className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-4">
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
                            <Image src={dest.image} alt={dest.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-heading font-bold text-sm text-charcoal">{dest.name}</h3>
                            {submitted.includes(dest.id) ? (
                                <p className="text-xs text-emerald-600 font-medium mt-1">✓ Rated {ratings[dest.id]}/5 — Thanks!</p>
                            ) : (
                                <div className="flex items-center gap-0.5 mt-1">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <button
                                            key={star}
                                            onMouseEnter={() => setHovers(h => ({ ...h, [dest.id]: star }))}
                                            onMouseLeave={() => setHovers(h => ({ ...h, [dest.id]: 0 }))}
                                            onClick={() => handleRate(dest.id, star)}
                                            className="transition-transform hover:scale-110"
                                        >
                                            <Star size={20} className={`transition-colors ${(hovers[dest.id] || ratings[dest.id] || 0) >= star ? "fill-[#F77F00] text-[#F77F00]" : "text-gray-200"}`} />
                                        </button>
                                    ))}
                                    {(ratings[dest.id] ?? 0) > 0 && (
                                        <button onClick={() => handleSubmit(dest.id)} className="ml-2 text-xs bg-[#2C7DA0] text-white px-3 py-1 rounded-full font-semibold hover:bg-[#1B4E66] transition-colors">
                                            Submit
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
