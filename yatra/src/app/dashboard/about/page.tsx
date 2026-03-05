"use client";

import { useState } from "react";
import { ChevronDown, Mountain, Globe, Users, Shield } from "lucide-react";

const FAQS = [
    {
        question: "What is Yatra?",
        answer: "Yatra is a travel planning platform focused on Nepal. We help explorers discover destinations, plan itineraries, and connect with local guides for authentic Himalayan experiences.",
    },
    {
        question: "Is Yatra free to use?",
        answer: "Yes! Browsing destinations, saving places, and creating basic itineraries are completely free. We offer optional premium features for advanced trip planning and exclusive local experiences.",
    },
    {
        question: "How are itineraries created?",
        answer: "Our itineraries are curated by local travel experts who know Nepal inside and out. Each plan is designed to balance must-see landmarks with hidden gems, ensuring an authentic experience.",
    },
    {
        question: "Can I customize my trip?",
        answer: "Absolutely. Every itinerary can be fully customized — adjust dates, swap destinations, change accommodation tiers, and add or remove activities to match your preferences.",
    },
    {
        question: "Is it safe to travel to Nepal?",
        answer: "Nepal is generally very safe for tourists. We provide real-time weather alerts, altitude advisories, and local safety tips for every destination to help you travel confidently.",
    },
    {
        question: "How do I contact support?",
        answer: "You can reach our support team via the Settings page or email us at support@yatra.app. We typically respond within 24 hours.",
    },
];

function AccordionItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
            >
                <span className="font-semibold text-charcoal pr-4">{question}</span>
                <ChevronDown
                    size={20}
                    className={`text-gray-400 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
            </button>
            <div
                className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
                <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{answer}</p>
                </div>
            </div>
        </div>
    );
}

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-10 pb-16">
            {/* Hero Section */}
            <div className="text-center space-y-3">
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-charcoal tracking-tight">About Yatra</h1>
                <p className="text-gray-500 font-medium max-w-2xl mx-auto">
                    Your trusted companion for exploring the beauty of Nepal — from the peaks of the Himalayas to the ancient temples of the Kathmandu Valley.
                </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-3">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#2C7DA0] flex items-center justify-center">
                        <Mountain size={22} />
                    </div>
                    <h3 className="font-heading font-bold text-charcoal text-lg">Our Mission</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        To make Nepal accessible to every traveler by providing thoughtfully curated itineraries, real-time travel insights, and connections to trusted local guides.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-3">
                    <div className="w-11 h-11 rounded-xl bg-orange-50 text-[#F77F00] flex items-center justify-center">
                        <Globe size={22} />
                    </div>
                    <h3 className="font-heading font-bold text-charcoal text-lg">Why Nepal?</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Home to 8 of the world&apos;s 14 highest peaks, UNESCO heritage sites, diverse wildlife, and a rich tapestry of cultures — Nepal offers experiences unlike anywhere else.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-3">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <Users size={22} />
                    </div>
                    <h3 className="font-heading font-bold text-charcoal text-lg">Our Community</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Join thousands of explorers sharing tips, reviews, and stories. Whether you&apos;re a solo trekker or a family adventurer, there&apos;s a place for you here.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-3">
                    <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                        <Shield size={22} />
                    </div>
                    <h3 className="font-heading font-bold text-charcoal text-lg">Trust & Safety</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        All listed guides and accommodations are verified. We provide altitude advisories, weather alerts, and 24/7 support so you can explore with peace of mind.
                    </p>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="space-y-5">
                <h2 className="text-2xl font-heading font-bold text-charcoal">Frequently Asked Questions</h2>
                <div className="space-y-3">
                    {FAQS.map((faq, i) => (
                        <AccordionItem key={i} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </div>
    );
}
