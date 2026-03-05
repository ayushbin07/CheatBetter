"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, User, Mountain, Ship, Building2, Binoculars, Map, Camera, Heart, Trees } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TOTAL_STEPS = 9;

export default function OnboardingWizard() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        username: "",
        firstName: "",
        lastName: "",
        interests: [] as string[],
        travelStyle: "",
        budget: "",
        activityInterests: [] as string[],
        notifications: [] as string[],
    });

    const nextStep = () => setStep((p) => Math.min(TOTAL_STEPS, p + 1));
    const prevStep = () => setStep((p) => Math.max(1, p - 1));

    const toggleSelection = (key: "interests" | "activityInterests" | "notifications", value: string) => {
        setFormData((prev) => {
            const current = prev[key];
            if (current.includes(value)) {
                return { ...prev, [key]: current.filter((i) => i !== value) };
            }
            return { ...prev, [key]: [...current, value] };
        });
    };

    // 1: Login/Create, 2: Username, 3: Name, 4: Interests (Images), 5: Style, 6: Budget, 7: Activity (Images), 8: Notif, 9: Done
    return (
        <div className="min-h-screen relative flex items-center justify-center p-4 selection:bg-[#F77F00]/30 overflow-hidden">
            {/* Background (Persists from Landing) */}
            <div className="absolute inset-0 z-0">
                <Image src="/hero-bg.png" alt="Background" fill className="object-cover scale-105 blur-[20px] brightness-[0.7] saturate-[1.2]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B4E66]/60 via-transparent to-black/30"></div>
            </div>

            {/* Glassmorphism Wizard Modal */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 w-full max-w-2xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] shadow-[0_32px_64px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col min-h-[500px]"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-white/10">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                        transition={{ duration: 0.4 }}
                        className="h-full bg-gradient-to-r from-[#2C7DA0] via-[#6FB3D2] to-[#F77F00]"
                    />
                </div>

                {/* Header Navigation */}
                <div className="px-8 pt-8 pb-4 flex items-center justify-between">
                    <button
                        onClick={prevStep}
                        disabled={step === 1 || step === TOTAL_STEPS}
                        className={`p-2 rounded-full transition-all ${step === 1 || step === TOTAL_STEPS
                            ? "opacity-0 pointer-events-none"
                            : "text-white/80 hover:text-white hover:bg-white/10"
                            }`}
                    >
                        <ArrowLeft size={24} />
                    </button>

                    <span className="text-white/60 font-medium text-sm tracking-widest uppercase">
                        {step === TOTAL_STEPS ? "Complete" : `Step ${step} of ${TOTAL_STEPS}`}
                    </span>

                    <div className="w-10"></div> {/* Spacer to center title */}
                </div>

                {/* Step Content Area */}
                <div className="flex-1 px-8 md:px-12 pb-12 flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full flex-1 flex flex-col"
                        >
                            {step === 1 && (
                                <div className="text-center w-full max-w-sm mx-auto my-auto py-8">
                                    <h2 className="text-3xl font-heading font-bold text-white mb-2">Welcome to Yatra</h2>
                                    <p className="text-white/70 mb-8 font-light">Join the community of explorers.</p>

                                    <div className="space-y-4">
                                        <button onClick={nextStep} className="w-full py-4 rounded-xl bg-white text-charcoal font-semibold hover:-translate-y-1 transition-transform shadow-lg hover:shadow-xl">
                                            Continue with Email
                                        </button>
                                        <button onClick={nextStep} className="w-full py-4 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all">
                                            Continue with Google
                                        </button>
                                    </div>
                                    <p className="mt-6 text-sm text-white/50">Already have an account? <span className="text-white cursor-pointer hover:underline">Log in</span></p>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="w-full max-w-sm mx-auto my-auto">
                                    <h2 className="text-3xl font-heading font-bold text-white mb-2">Choose a username</h2>
                                    <p className="text-white/70 mb-8 font-light">This is how you will be known in the Yatra community.</p>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#2C7DA0]">
                                            <User size={20} />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="e.g. mountain_explorer"
                                            value={formData.username}
                                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/90 backdrop-blur-sm text-charcoal outline-none focus:ring-4 focus:ring-[#6FB3D2]/30 transition-all font-medium"
                                            autoFocus
                                        />
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="w-full max-w-sm mx-auto my-auto">
                                    <h2 className="text-3xl font-heading font-bold text-white mb-2">What is your name?</h2>
                                    <p className="text-white/70 mb-8 font-light">We use this to personalize your bookings and plans.</p>
                                    <div className="space-y-4">
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            value={formData.firstName}
                                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                            className="w-full px-4 py-4 rounded-xl bg-white/90 backdrop-blur-sm text-charcoal outline-none focus:ring-4 focus:ring-[#6FB3D2]/30 transition-all font-medium"
                                            autoFocus
                                        />
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            value={formData.lastName}
                                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                            className="w-full px-4 py-4 rounded-xl bg-white/90 backdrop-blur-sm text-charcoal outline-none focus:ring-4 focus:ring-[#6FB3D2]/30 transition-all font-medium"
                                        />
                                    </div>
                                </div>
                            )}

                            {step === 4 && (
                                <div className="w-full my-auto flex flex-col h-full justify-center">
                                    <h2 className="text-3xl font-heading font-bold text-white mb-2">What do you love?</h2>
                                    <p className="text-white/70 mb-8 font-light">Select your travel interests. (Multiple)</p>

                                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
                                        {[
                                            { id: "Mountains", icon: Mountain, color: "from-blue-500/80 to-[#1B4E66]/90" },
                                            { id: "Nature", icon: Trees, color: "from-green-500/80 to-[#2D6A4F]/90" },
                                            { id: "Lakes", icon: Ship, color: "from-cyan-400/80 to-[#2C7DA0]/90" },
                                            { id: "Cities", icon: Building2, color: "from-purple-500/80 to-slate-800/90" },
                                            { id: "Wildlife", icon: Binoculars, color: "from-orange-400/80 to-amber-700/90" },
                                            { id: "Culture", icon: Map, color: "from-red-400/80 to-rose-700/90" },
                                        ].map((interest) => (
                                            <button
                                                key={interest.id}
                                                onClick={() => toggleSelection("interests", interest.id)}
                                                className={`relative overflow-hidden group rounded-2xl aspect-[4/3] flex flex-col justify-end p-4 text-left transition-all ${formData.interests.includes(interest.id) ? "ring-4 ring-[#F77F00] ring-offset-2 ring-offset-[#1B4E66]/50 scale-[0.98]" : "hover:scale-[1.02]"
                                                    }`}
                                            >
                                                <div className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-80 group-hover:opacity-100 transition-opacity z-0`}></div>
                                                <div className="relative z-10 text-white flex flex-col gap-2">
                                                    <interest.icon size={28} className="text-white/80" />
                                                    <span className="font-semibold text-lg">{interest.id}</span>
                                                </div>
                                                {formData.interests.includes(interest.id) && (
                                                    <div className="absolute top-3 right-3 z-10 text-white">
                                                        <CheckCircle2 size={24} fill="#F77F00" />
                                                    </div>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {step === 5 && (
                                <div className="w-full max-w-md mx-auto my-auto">
                                    <h2 className="text-3xl font-heading font-bold text-white mb-2">How do you travel?</h2>
                                    <p className="text-white/70 mb-8 font-light">Choose your primary travel style.</p>
                                    <div className="space-y-3">
                                        {["Solo", "Couple", "Friends", "Family", "Group"].map((style) => (
                                            <button
                                                key={style}
                                                onClick={() => setFormData({ ...formData, travelStyle: style })}
                                                className={`w-full p-4 rounded-xl flex items-center justify-between border transition-all ${formData.travelStyle === style
                                                    ? "bg-white/20 border-white text-white shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                                                    : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10"
                                                    }`}
                                            >
                                                <span className="font-medium text-lg">{style}</span>
                                                {formData.travelStyle === style && <CheckCircle2 size={20} className="text-[#F77F00]" />}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {step === 6 && (
                                <div className="w-full max-w-md mx-auto my-auto">
                                    <h2 className="text-3xl font-heading font-bold text-white mb-2">What is your budget?</h2>
                                    <p className="text-white/70 mb-8 font-light">We will tailor recommendations for you.</p>
                                    <div className="flex flex-col gap-4">
                                        {[
                                            { id: "Budget", desc: "Hostels, street food, public transport" },
                                            { id: "Mid-Range", desc: "3-4 star hotels, restaurants, guided tours" },
                                            { id: "Luxury", desc: "5-star resorts, private transfers, exclusive access" },
                                        ].map((budget) => (
                                            <button
                                                key={budget.id}
                                                onClick={() => setFormData({ ...formData, budget: budget.id })}
                                                className={`w-full p-5 rounded-xl text-left border transition-all ${formData.budget === budget.id
                                                    ? "bg-gradient-to-r from-[#2C7DA0]/80 to-[#1B4E66]/80 border-white/50 text-white"
                                                    : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10"
                                                    }`}
                                            >
                                                <div className="font-semibold text-xl mb-1">{budget.id}</div>
                                                <div className={`text-sm ${formData.budget === budget.id ? "text-white/80" : "text-white/50"}`}>{budget.desc}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {step === 7 && (
                                <div className="w-full my-auto flex flex-col h-full justify-center">
                                    <h2 className="text-3xl font-heading font-bold text-white mb-2">Top Activities?</h2>
                                    <p className="text-white/70 mb-8 font-light">Select activities you enjoy. (Multiple)</p>

                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                                        {[
                                            { id: "Trekking", icon: Mountain },
                                            { id: "Photography", icon: Camera },
                                            { id: "Temple Visits", icon: Map },
                                            { id: "Food", icon: Heart },
                                            { id: "Camping", icon: Trees },
                                            { id: "Road Trips", icon: Ship },
                                            { id: "Shopping", icon: Binoculars },
                                            { id: "Spiritual", icon: User },
                                        ].map((activity) => (
                                            <button
                                                key={activity.id}
                                                onClick={() => toggleSelection("activityInterests", activity.id)}
                                                className={`relative overflow-hidden group rounded-2xl aspect-square flex flex-col items-center justify-center p-4 text-center transition-all ${formData.activityInterests.includes(activity.id)
                                                    ? "bg-white/25 border-2 border-white text-white drop-shadow-lg"
                                                    : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/15"
                                                    }`}
                                            >
                                                <activity.icon size={32} strokeWidth={1.5} className="mb-3" />
                                                <span className="font-semibold text-sm">{activity.id}</span>
                                                {formData.activityInterests.includes(activity.id) && (
                                                    <div className="absolute top-2 right-2 text-[#F77F00]">
                                                        <CheckCircle2 size={16} fill="currentColor" className="text-white" />
                                                    </div>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {step === 8 && (
                                <div className="w-full max-w-md mx-auto my-auto">
                                    <h2 className="text-3xl font-heading font-bold text-white mb-2">Stay Updated</h2>
                                    <p className="text-white/70 mb-8 font-light">What would you like to hear about?</p>
                                    <div className="space-y-3">
                                        {[
                                            "Destination recommendations",
                                            "Travel deals",
                                            "Events",
                                            "Weather alerts",
                                        ].map((notif) => (
                                            <button
                                                key={notif}
                                                onClick={() => toggleSelection("notifications", notif)}
                                                className={`w-full p-4 rounded-xl flex items-center gap-4 border transition-all text-left ${formData.notifications.includes(notif)
                                                    ? "bg-white/20 border-white text-white shadow-lg"
                                                    : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10"
                                                    }`}
                                            >
                                                <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${formData.notifications.includes(notif) ? "bg-[#F77F00] border-[#F77F00]" : "border-white/30"}`}>
                                                    {formData.notifications.includes(notif) && <CheckCircle2 size={16} className="text-white" />}
                                                </div>
                                                <span className="font-medium">{notif}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {step === 9 && (
                                <div className="text-center w-full max-w-sm mx-auto my-auto py-12">
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                                        className="w-24 h-24 bg-gradient-to-tr from-[#F77F00] to-[#FFD6A3] rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(247,127,0,0.5)]"
                                    >
                                        <CheckCircle2 size={48} className="text-white" />
                                    </motion.div>
                                    <h2 className="text-4xl font-heading font-bold text-white mb-4">You're ready.</h2>
                                    <p className="text-white/80 mb-10 text-lg">Your adventure in Nepal begins now.</p>

                                    <Link href="/dashboard" className="inline-block w-full">
                                        <button className="w-full bg-white text-charcoal font-bold py-5 rounded-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 text-lg shadow-lg">
                                            Go to Dashboard
                                        </button>
                                    </Link>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Footer Buttons */}
                {step < TOTAL_STEPS && (
                    <div className="px-8 pb-8 flex justify-end">
                        <button
                            onClick={nextStep}
                            className="bg-gradient-to-r from-[#2C7DA0] to-[#1B4E66] hover:from-[#1B4E66] hover:to-[#0F3142] text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:-translate-y-0.5"
                        >
                            {step === 1 ? "Start" : step === TOTAL_STEPS - 1 ? "Finish" : "Next"}
                        </button>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
