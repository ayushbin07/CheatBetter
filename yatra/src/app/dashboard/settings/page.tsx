"use client";

import { useState } from "react";
import { Settings, User, Bell, Globe, Moon, Shield, ChevronRight } from "lucide-react";

function Toggle({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) {
    return (
        <button
            onClick={onToggle}
            className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${enabled ? "bg-[#2C7DA0]" : "bg-gray-200"}`}
        >
            <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${enabled ? "translate-x-5" : ""}`} />
        </button>
    );
}

export default function SettingsPage() {
    const [darkMode, setDarkMode] = useState(false);
    const [emailNotifs, setEmailNotifs] = useState(true);
    const [pushNotifs, setPushNotifs] = useState(true);
    const [travelAlerts, setTravelAlerts] = useState(true);
    const [language, setLanguage] = useState("en");
    const [profileVisibility, setProfileVisibility] = useState("public");

    return (
        <div className="max-w-3xl mx-auto space-y-8 pb-16">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-heading font-bold text-charcoal tracking-tight">Settings</h1>
                <p className="text-gray-500 font-medium mt-1">Manage your account preferences</p>
            </div>

            {/* Account Section */}
            <section className="space-y-1">
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider px-1 mb-3">Account</h2>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-50">
                    <div className="flex items-center justify-between px-6 py-5">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#2C7DA0] flex items-center justify-center"><User size={18} /></div>
                            <div>
                                <p className="font-semibold text-charcoal text-sm">Display Name</p>
                                <p className="text-xs text-gray-400">Explorer</p>
                            </div>
                        </div>
                        <ChevronRight size={18} className="text-gray-300" />
                    </div>
                    <div className="flex items-center justify-between px-6 py-5">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#2C7DA0] flex items-center justify-center"><Globe size={18} /></div>
                            <div>
                                <p className="font-semibold text-charcoal text-sm">Language</p>
                                <p className="text-xs text-gray-400">Choose your preferred language</p>
                            </div>
                        </div>
                        <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="text-sm bg-gray-50 border-none rounded-lg px-3 py-1.5 text-charcoal font-medium outline-none focus:ring-2 focus:ring-[#2C7DA0]/20"
                        >
                            <option value="en">English</option>
                            <option value="ne">नेपाली</option>
                            <option value="hi">हिन्दी</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between px-6 py-5">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center"><Moon size={18} /></div>
                            <div>
                                <p className="font-semibold text-charcoal text-sm">Dark Mode</p>
                                <p className="text-xs text-gray-400">Switch to dark theme</p>
                            </div>
                        </div>
                        <Toggle enabled={darkMode} onToggle={() => setDarkMode(!darkMode)} />
                    </div>
                </div>
            </section>

            {/* Notifications Section */}
            <section className="space-y-1">
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider px-1 mb-3">Notifications</h2>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-50">
                    <div className="flex items-center justify-between px-6 py-5">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-orange-50 text-[#F77F00] flex items-center justify-center"><Bell size={18} /></div>
                            <div>
                                <p className="font-semibold text-charcoal text-sm">Email Notifications</p>
                                <p className="text-xs text-gray-400">Deals, updates & recommendations</p>
                            </div>
                        </div>
                        <Toggle enabled={emailNotifs} onToggle={() => setEmailNotifs(!emailNotifs)} />
                    </div>
                    <div className="flex items-center justify-between px-6 py-5">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-orange-50 text-[#F77F00] flex items-center justify-center"><Bell size={18} /></div>
                            <div>
                                <p className="font-semibold text-charcoal text-sm">Push Notifications</p>
                                <p className="text-xs text-gray-400">Real-time alerts on your device</p>
                            </div>
                        </div>
                        <Toggle enabled={pushNotifs} onToggle={() => setPushNotifs(!pushNotifs)} />
                    </div>
                    <div className="flex items-center justify-between px-6 py-5">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center"><Globe size={18} /></div>
                            <div>
                                <p className="font-semibold text-charcoal text-sm">Travel Alerts</p>
                                <p className="text-xs text-gray-400">Weather & safety updates for saved destinations</p>
                            </div>
                        </div>
                        <Toggle enabled={travelAlerts} onToggle={() => setTravelAlerts(!travelAlerts)} />
                    </div>
                </div>
            </section>

            {/* Privacy Section */}
            <section className="space-y-1">
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider px-1 mb-3">Privacy</h2>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-50">
                    <div className="flex items-center justify-between px-6 py-5">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center"><Shield size={18} /></div>
                            <div>
                                <p className="font-semibold text-charcoal text-sm">Profile Visibility</p>
                                <p className="text-xs text-gray-400">Control who can see your profile</p>
                            </div>
                        </div>
                        <select
                            value={profileVisibility}
                            onChange={(e) => setProfileVisibility(e.target.value)}
                            className="text-sm bg-gray-50 border-none rounded-lg px-3 py-1.5 text-charcoal font-medium outline-none focus:ring-2 focus:ring-[#2C7DA0]/20"
                        >
                            <option value="public">Public</option>
                            <option value="friends">Friends Only</option>
                            <option value="private">Private</option>
                        </select>
                    </div>
                </div>
            </section>
        </div>
    );
}
