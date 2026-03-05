import { MessageSquare } from "lucide-react";

export default function ReviewsPage() {
    return (
        <div className="max-w-4xl mx-auto py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
                <MessageSquare size={32} />
            </div>
            <h1 className="text-3xl font-heading font-bold text-charcoal">Reviews</h1>
            <p className="text-gray-500 font-medium">Your travel reviews and feedback will appear here.</p>
        </div>
    );
}
