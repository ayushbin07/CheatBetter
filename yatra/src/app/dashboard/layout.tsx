import { Home, Compass, Heart, MessageSquare, Settings, LogOut, Search, Bell, Menu } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#F8F9FA] flex overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-100 hidden md:flex flex-col h-screen fixed left-0 top-0">
                <div className="p-6">
                    <Link href="/" className="text-2xl font-heading font-bold text-[#1B4E66] tracking-wide block mb-1">
                        Yatra
                    </Link>
                    <p className="text-xs text-gray-400 font-medium">Travel & Explore</p>
                </div>

                <nav className="flex-1 px-4 space-y-2 mt-4">
                    {[
                        { id: "Overview", icon: Home, active: true },
                        { id: "My Trips", icon: Compass, active: false },
                        { id: "Saved", icon: Heart, active: false },
                        { id: "Reviews", icon: MessageSquare, active: false },
                        { id: "Settings", icon: Settings, active: false },
                    ].map((item) => (
                        <button
                            key={item.id}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${item.active
                                ? "bg-[#2C7DA0]/10 text-[#2C7DA0] font-semibold"
                                : "text-gray-500 hover:bg-gray-50 hover:text-charcoal font-medium"
                                }`}
                        >
                            <item.icon size={20} />
                            <span>{item.id}</span>
                        </button>
                    ))}
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all font-medium">
                        <LogOut size={20} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 ml-0 md:ml-64 flex flex-col h-screen overflow-y-auto">
                {/* Top Header */}
                <header className="bg-white/80 backdrop-blur-md sticky top-0 z-30 border-b border-gray-100 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button className="md:hidden p-2 text-gray-500 bg-gray-50 rounded-lg">
                            <Menu size={24} />
                        </button>
                        <div className="relative hidden sm:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search destinations..."
                                className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-full text-sm font-medium outline-none focus:ring-2 focus:ring-[#2C7DA0]/20 w-64 transition-all"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="relative p-2 text-gray-500 hover:text-charcoal transition-colors bg-gray-50 rounded-full">
                            <Bell size={20} />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#F77F00] rounded-full ring-2 ring-white"></span>
                        </button>
                        <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#2C7DA0] to-[#6FB3D2] flex items-center justify-center text-white font-bold text-sm shadow-sm ring-2 ring-white">
                            YK
                        </div>
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
