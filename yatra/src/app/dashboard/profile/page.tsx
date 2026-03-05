"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    User, Bell, Shield, Globe, ChevronRight,
    Mountain, Camera, Map, Heart, Trees, Ship, LogOut,
    Pencil, CheckCircle2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TABS = ["Profile", "Preferences", "Notifications", "Privacy"];

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState("Profile");
    const [interests, setInterests] = useState(["Mountains", "Trekking", "Photography"]);

    const toggleInterest = (item: string) => {
        setInterests((prev) => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8 pb-16">

            {/* Profile Header Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative overflow-hidden rounded-[2rem] h-52 shadow-sm"
            >
                <Image src="/hero-bg.jpg" alt="Cover" fill className="object-cover brightness-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end gap-5">
                    {/* Avatar */}
                    <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#2C7DA0] to-[#6FB3D2] flex items-center justify-center text-white text-3xl font-bold shadow-xl ring-4 ring-white">
                            YK
                        </div>
                        <button className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#F77F00] flex items-center justify-center text-white shadow-lg">
                            <Pencil size={13} />
                        </button>
                    </div>

                    <div className="text-white mb-1 flex-1">
                        <h2 className="font-heading font-bold text-2xl leading-tight">Yatra Khatri</h2>
                        <p className="text-white/70 text-sm font-medium">@mountain_explorer · Kathmandu, NP</p>
                    </div>

                    <button className="shrink-0 bg-white/15 backdrop-blur-md border border-white/30 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-white/30 transition-all">
                        Edit Profile
                    </button>
                </div>
            </motion.div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
                {[
                    { value: "3", label: "Trips Done" },
                    { value: "12", label: "Places Saved" },
                    { value: "7", label: "Reviews" },
                ].map((stat, i) => (
                    <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-3xl font-bold text-charcoal mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-2 bg-white border border-gray-100 rounded-2xl p-1.5 shadow-sm">
                {TABS.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all ${activeTab === tab
                                ? "bg-[#2C7DA0] text-white shadow-md"
                                : "text-gray-500 hover:text-charcoal"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>

                {activeTab === "Profile" && (
                    <div className="bg-white border border-gray-100 rounded-[1.5rem] shadow-sm p-6 space-y-5">
                        <h3 className="font-heading font-bold text-lg text-charcoal">Personal Information</h3>
                        {[
                            { label: "First Name", value: "Yatra" },
                            { label: "Last Name", value: "Khatri" },
                            { label: "Username", value: "@mountain_explorer" },
                            { label: "Email", value: "yatra@example.com" },
                            { label: "Country", value: "Nepal" },
                        ].map((field) => (
                            <div key={field.label}>
                                <label className="text-xs text-gray-500 font-semibold uppercase tracking-wider block mb-1">{field.label}</label>
                                <div className="w-full px-4 py-3 bg-gray-50 rounded-xl text-charcoal font-medium text-sm border-none outline-none">
                                    {field.value}
                                </div>
                            </div>
                        ))}
                        <button className="bg-gradient-to-r from-[#2C7DA0] to-[#1B4E66] text-white px-8 py-3 rounded-xl font-semibold hover:-translate-y-0.5 transition-all shadow-md">
                            Save Changes
                        </button>
                    </div>
                )}

                {activeTab === "Preferences" && (
                    <div className="space-y-6">
                        <div className="bg-white border border-gray-100 rounded-[1.5rem] shadow-sm p-6">
                            <h3 className="font-heading font-bold text-lg text-charcoal mb-5">Travel Interests</h3>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    { id: "Mountains", icon: Mountain },
                                    { id: "Trekking", icon: Mountain },
                                    { id: "Photography", icon: Camera },
                                    { id: "Culture", icon: Map },
                                    { id: "Wildlife", icon: Heart },
                                    { id: "Nature", icon: Trees },
                                    { id: "Lakes", icon: Ship },
                                    { id: "Spiritual", icon: Globe },
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => toggleInterest(item.id)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-all ${interests.includes(item.id)
                                                ? "bg-[#2C7DA0] text-white border-[#2C7DA0] shadow-sm"
                                                : "bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-300"
                                            }`}
                                    >
                                        <item.icon size={16} />
                                        {item.id}
                                        {interests.includes(item.id) && <CheckCircle2 size={14} className="text-white/80" />}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white border border-gray-100 rounded-[1.5rem] shadow-sm p-6">
                            <h3 className="font-heading font-bold text-lg text-charcoal mb-5">Travel Style</h3>
                            <div className="space-y-3">
                                {[
                                    { label: "Solo Explorer", sub: "Independent, self-paced" },
                                    { label: "Adventure Seeker", sub: "Challenging experiences" },
                                    { label: "Cultural Immersion", sub: "Local traditions & food" },
                                ].map((style, i) => (
                                    <div key={i} className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${i === 0 ? "border-[#2C7DA0] bg-[#2C7DA0]/5" : "border-gray-100 hover:border-gray-200"}`}>
                                        <div>
                                            <p className={`font-semibold text-sm ${i === 0 ? "text-[#2C7DA0]" : "text-charcoal"}`}>{style.label}</p>
                                            <p className="text-xs text-gray-500 mt-0.5">{style.sub}</p>
                                        </div>
                                        {i === 0 && <CheckCircle2 size={20} className="text-[#2C7DA0]" />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "Notifications" && (
                    <div className="bg-white border border-gray-100 rounded-[1.5rem] shadow-sm p-6">
                        <h3 className="font-heading font-bold text-lg text-charcoal mb-5">Notification Preferences</h3>
                        <div className="space-y-4">
                            {[
                                { label: "Destination Recommendations", sub: "Get personalized travel suggestions", active: true },
                                { label: "Travel Deals", sub: "Exclusive offers and discounts", active: true },
                                { label: "Events near you", sub: "Local festivals and cultural events", active: false },
                                { label: "Weather Alerts", sub: "Important weather updates for your trips", active: true },
                            ].map((notif, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${notif.active ? "bg-[#2C7DA0]/10 text-[#2C7DA0]" : "bg-gray-200 text-gray-400"}`}>
                                            <Bell size={18} />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-sm text-charcoal">{notif.label}</p>
                                            <p className="text-xs text-gray-500 mt-0.5">{notif.sub}</p>
                                        </div>
                                    </div>
                                    <div className={`w-12 h-6 rounded-full transition-colors cursor-pointer ${notif.active ? "bg-[#2C7DA0]" : "bg-gray-300"} flex items-center`}>
                                        <div className={`w-5 h-5 rounded-full bg-white shadow-sm transform transition-transform mx-0.5 ${notif.active ? "translate-x-6" : "translate-x-0"}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === "Privacy" && (
                    <div className="bg-white border border-gray-100 rounded-[1.5rem] shadow-sm p-6 space-y-4">
                        <h3 className="font-heading font-bold text-lg text-charcoal">Privacy & Security</h3>
                        {[
                            { icon: Shield, label: "Change Password", sub: "Last changed 3 months ago" },
                            { icon: Globe, label: "Profile Visibility", sub: "Public profile" },
                            { icon: User, label: "Data & Privacy", sub: "Manage your data" },
                        ].map((item, i) => (
                            <button key={i} className="w-full flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors text-left group">
                                <div className="w-10 h-10 rounded-full bg-[#2C7DA0]/10 text-[#2C7DA0] flex items-center justify-center">
                                    <item.icon size={18} />
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold text-sm text-charcoal">{item.label}</p>
                                    <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
                                </div>
                                <ChevronRight size={18} className="text-gray-400 group-hover:text-charcoal transition-colors" />
                            </button>
                        ))}

                        <div className="pt-4 border-t border-gray-100">
                            <Link href="/">
                                <button className="w-full flex items-center justify-center gap-2 p-4 bg-red-50 text-red-600 rounded-xl font-semibold hover:bg-red-100 transition-colors">
                                    <LogOut size={18} /> Sign Out
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
