import { Bell } from "lucide-react";

export default function NotificationsPage() {
    return (
        <div className="max-w-4xl mx-auto py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-orange-50 text-[#F77F00] flex items-center justify-center mx-auto">
                <Bell size={32} />
            </div>
            <h1 className="text-3xl font-heading font-bold text-charcoal">Notifications</h1>
            <p className="text-gray-500 font-medium">Your alerts and updates will appear here.</p>
        </div>
    );
}
