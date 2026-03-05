"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Home, Compass, Heart, MessageSquare, Settings, LogOut, Search, Bell, Menu, X, Info } from "lucide-react";
import Link from "next/link";

const NAV_ITEMS = [
    { id: "Overview", icon: Home, href: "/dashboard" },
    { id: "My Trips", icon: Compass, href: "/dashboard/trips" },
    { id: "Saved", icon: Heart, href: "/dashboard/saved" },
    { id: "Reviews", icon: MessageSquare, href: "/dashboard/reviews" },
    { id: "About Us", icon: Info, href: "/dashboard/about" },
    { id: "Settings", icon: Settings, href: "/dashboard/settings" },
];

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#F8F9FA] flex overflow-hidden">
            {/* Mobile sidebar overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden" onClick={() => setMobileMenuOpen(false)}>
                    <div className="absolute inset-0 bg-black/40" />
                </div>
            )}

            {/* Sidebar */}
            <aside className={`w-64 bg-white border-r border-gray-100 flex flex-col h-screen fixed left-0 top-0 z-50 transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
                <div className="p-6 flex items-center justify-between">
                    <div>
                        <Link href="/" className="text-2xl font-heading font-bold text-[#1B4E66] tracking-wide block mb-1">
                            Yatra
                        </Link>
                        <p className="text-xs text-gray-400 font-medium">Travel & Explore</p>
                    </div>
                    <button className="md:hidden p-1 text-gray-400 hover:text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                        <X size={20} />
                    </button>
                </div>

                <nav className="flex-1 px-4 space-y-2 mt-4">
                    {NAV_ITEMS.map((item) => {
                        const isActive = item.href === "/dashboard"
                            ? pathname === "/dashboard"
                            : pathname.startsWith(item.href);
                        return (
                            <Link
                                key={item.id}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive
                                    ? "bg-[#2C7DA0]/10 text-[#2C7DA0] font-semibold"
                                    : "text-gray-500 hover:bg-gray-50 hover:text-charcoal font-medium"
                                    }`}
                            >
                                <item.icon size={20} />
                                <span>{item.id}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <Link
                        href="/"
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all font-medium"
                    >
                        <LogOut size={20} />
                        <span>Logout</span>
                    </Link>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 ml-0 md:ml-64 flex flex-col h-screen overflow-y-auto">
                {/* Top Header */}
                <header className="bg-white/80 backdrop-blur-md sticky top-0 z-30 border-b border-gray-100 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button className="md:hidden p-2 text-gray-500 bg-gray-50 rounded-lg" onClick={() => setMobileMenuOpen(true)}>
                            <Menu size={24} />
                        </button>
                        <Link href="/search" className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#2C7DA0] text-white rounded-full text-sm font-semibold hover:bg-[#1B4E66] transition-colors shadow-sm">
                            <Search size={16} />
                            Search
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="/dashboard/notifications" className="relative p-2 text-gray-500 hover:text-charcoal transition-colors bg-gray-50 rounded-full">
                            <Bell size={20} />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#F77F00] rounded-full ring-2 ring-white"></span>
                        </Link>
                        <Link href="/dashboard/profile" className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#2C7DA0] to-[#6FB3D2] flex items-center justify-center text-white font-bold text-sm shadow-sm ring-2 ring-white">
                            YK
                        </Link>
                    </div>
                </header>

                {/* Dashboard Content */}
                <div className="p-6 md:p-8 flex-1">
                    {children}
                </div>
            </main>
        </div>
    );
}
