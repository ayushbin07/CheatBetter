import { Heart } from "lucide-react";

export default function SavedPage() {
    return (
        <div className="max-w-4xl mx-auto py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center mx-auto">
                <Heart size={32} />
            </div>
            <h1 className="text-3xl font-heading font-bold text-charcoal">Saved Places</h1>
            <p className="text-gray-500 font-medium">Destinations you&apos;ve saved for later will appear here.</p>
        </div>
    );
}
