import { Compass } from "lucide-react";

export default function TripsPage() {
    return (
        <div className="max-w-4xl mx-auto py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#2C7DA0] flex items-center justify-center mx-auto">
                <Compass size={32} />
            </div>
            <h1 className="text-3xl font-heading font-bold text-charcoal">My Trips</h1>
            <p className="text-gray-500 font-medium">Your upcoming and past trips will appear here.</p>
        </div>
    );
}
