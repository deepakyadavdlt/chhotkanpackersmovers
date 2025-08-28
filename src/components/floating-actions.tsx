"use client";

import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { siteConstants } from "@/constants/siteConstants";

export default function FloatingActions() {
    const handleCall = () => {
        window.open(`tel:${siteConstants.phone}`, '_self');
    };

    const handleWhatsApp = () => {
        const message = "Hi! I'm interested in your packing and moving services. Can you please provide me with a quote?";
        const whatsappUrl = `https://wa.me/${siteConstants.phone.replace(/\s/g, '')}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
            {/* Call Button */}
            <button
                onClick={handleCall}
                className="w-14 h-14 bg-[#e11c09] hover:bg-[#b81500] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
                aria-label="Call us now"
            >
                <Phone className="w-6 h-6 group-hover:animate-pulse" />
            </button>

            {/* WhatsApp Button */}
            <button
                onClick={handleWhatsApp}
                className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp className="w-7 h-7 group-hover:animate-bounce" />
            </button>

            {/* Tooltip for Call */}
            <div className="absolute right-16 top-2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                Call Now
            </div>

            {/* Tooltip for WhatsApp */}
            <div className="absolute right-16 top-16 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                Chat on WhatsApp
            </div>
        </div>
    );
}
