"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { siteConstants } from "@/constants/siteConstants";

export default function Topbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Hide topbar when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <div
            className={`bg-[#1037b6] text-white transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center py-3">
                    {/* Contact Information */}
                    <div className="flex flex-wrap  items-center justify-center sm:justify-start space-x-4 sm:space-x-6  space-y-2 sm:space-y-0">
                        {/* Phone */}
                        <a href={`tel:${siteConstants.phone}`}>
                            <div className="flex items-center space-x-2">
                                <Phone className="w-4 h-4 text-[#e11c09]" />
                                <span className=" text-xs md:text-sm font-medium">{siteConstants.phone}</span>
                            </div>
                        </a>
                        <a href={`tel:${siteConstants.phone2}`}>
                            <div className="flex items-center space-x-2">
                                <Phone className="w-4 h-4 text-[#e11c09]" />
                                <span className=" text-xs md:text-sm font-medium">{siteConstants.phone2}</span>
                            </div>
                        </a>
                        {/* Email */}
                        <a href={`mailto:${siteConstants.email}`}>
                            <div className="flex items-center space-x-2">
                                <Mail className="w-4 h-4 text-[#e11c09]" />
                                <span className=" text-xs md:text-sm font-medium">{siteConstants.email}</span>
                            </div>
                        </a>

                    </div>

                    {/* Social Media Links */}
                    <div className="hidden sm:flex items-center space-x-3">
                        <span className="text-sm font-medium text-gray-300 mr-2">Follow Us:</span>
                        <a
                            href="#"
                            className="w-8 h-8 bg-[#e11c09] hover:bg-[#b81500] rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                            aria-label="Facebook"
                        >
                            <FaFacebook className="w-4 h-4 text-white" />
                        </a>
                        <a
                            href="#"
                            className="w-8 h-8 bg-[#e11c09] hover:bg-[#b81500] rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                            aria-label="Twitter"
                        >
                            <FaTwitter className="w-4 h-4 text-white" />
                        </a>
                        <a
                            href="#"
                            className="w-8 h-8 bg-[#e11c09] hover:bg-[#b81500] rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                            aria-label="Instagram"
                        >
                            <FaInstagram className="w-4 h-4 text-white" />
                        </a>
                        <a
                            href="#"
                            className="w-8 h-8 bg-[#e11c09] hover:bg-[#b81500] rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                            aria-label="YouTube"
                        >
                            <FaYoutube className="w-4 h-4 text-white" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
