import { CloudLightning, MapPin, PlaneTakeoff, Clock, Calendar, Compass, Heart } from "lucide-react";
import Image from "next/image";

export default function DashboardPage() {
    return (
        <div className="max-w-6xl mx-auto space-y-6 pb-12">

            {/* Greeting & Weather Row */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
                <div>
                    <h1 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-1 tracking-tight">Welcome back, Explorer</h1>
                    <p className="text-gray-500 font-medium">Your next adventure to Nepal is 14 days away.</p>
                </div>

                <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow">
                    <div>
                        <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">Kathmandu</div>
                        <div className="font-bold text-lg text-charcoal">24°C</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#2C7DA0]">
                        <CloudLightning size={20} />
                    </div>
                </div>
            </div>

            {/* Stats Bento Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: "Trips Completed", value: "3", icon: Compass, color: "text-[#2C7DA0]", bg: "bg-blue-50" },
                    { label: "Places Saved", value: "12", icon: MapPin, color: "text-[#F77F00]", bg: "bg-orange-50" },
                    { label: "Upcoming Flights", value: "1", icon: PlaneTakeoff, color: "text-emerald-600", bg: "bg-emerald-50" },
                    { label: "Travel Hours", value: "48", icon: Clock, color: "text-purple-600", bg: "bg-purple-50" },
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                        <div className={`${stat.bg} ${stat.color} w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                            <stat.icon size={20} strokeWidth={2.5} />
                        </div>
                        <div className="text-3xl font-bold text-charcoal mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Main Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-2">

                {/* Large Feature Card: Upcoming Trip */}
                <div className="lg:col-span-2 relative overflow-hidden rounded-[2rem] shadow-sm group min-h-[300px] cursor-pointer">
                    {/* We will rely on the matching generated image pattern. Make sure the filename matches what gets copied locally. */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/kathmandu_valley_bento_1772693909729.png"
                            alt="Kathmandu Valley"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-8 z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <span className="inline-block px-3 py-1 bg-[#F77F00] text-white text-xs font-bold uppercase tracking-wider rounded-lg mb-3 shadow-lg">Next Trip</span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2 leading-tight">Kathmandu Valley <br /> Heritage Tour</h2>
                            <div className="flex items-center gap-4 text-white/80 text-sm font-medium">
                                <span className="flex items-center gap-1"><Calendar size={16} /> Oct 15 - Oct 22</span>
                                <span className="flex items-center gap-1"><MapPin size={16} /> Kathmandu, NP</span>
                            </div>
                        </div>

                        <button className="bg-white text-charcoal px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-xl w-full md:w-auto text-center">
                            View Itinerary
                        </button>
                    </div>
                </div>

                {/* Small Feature Card: Saved Destination */}
                <div className="relative overflow-hidden rounded-[2rem] shadow-sm group min-h-[300px] cursor-pointer">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/pokhara_lake_bento_1772693938781.png"
                            alt="Pokhara Lake"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    </div>

                    <div className="absolute top-4 right-4 z-10">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white">
                            <Heart size={20} fill="currentColor" />
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                        <h3 className="text-2xl font-heading font-bold text-white mb-1">Pokhara</h3>
                        <p className="text-white/80 text-sm font-medium">Saved 2 days ago</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
