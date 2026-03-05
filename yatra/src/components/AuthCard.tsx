"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AuthCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            className="flex items-center gap-3"
        >
            {/* Sign Up — filled pill */}
            <Link href="/onboarding">
                <button className="bg-[#F77F00] hover:bg-[#C75A00] text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-[0_4px_20px_rgba(247,127,0,0.45)] hover:shadow-[0_6px_28px_rgba(247,127,0,0.6)] hover:-translate-y-px transition-all duration-200 tracking-wide">
                    Get Started
                </button>
            </Link>

            {/* Log In — ghost pill */}
            <Link href="/onboarding">
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 hover:border-white/40 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-px tracking-wide">
                    Log In
                </button>
            </Link>
        </motion.div>
    );
}
