import Link from "next/link";
import { siteConstants } from "@/constants/siteConstants";
import { logoImage } from "@/assets/logo";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const services = [
    { name: "Packing and Moving", href: "/services/packing-and-moving" },
    { name: "Loading and Unloading", href: "/services/loading-and-unloading" },
    { name: "Domestic Moving", href: "/services/domestic-moving" },
    { name: "Office Relocations", href: "/services/office-relocation" },
    { name: "Car Transportation", href: "/services/car-transport" },
    { name: "International Moving", href: "/services/international-moving" },
    { name: "Warehousing and Storage", href: "/services/warehousing-and-storage" },
];

const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
];

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center bg-yellow-50 space-x-3 mb-6 py-2 ">
                            <Image src={logoImage.src} alt="logo" width={100} height={100} className="w-40 md:w-52" />

                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            {siteConstants.description}
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-[#e11c09] hover:bg-[#b81500] rounded-full flex items-center justify-center transition-colors duration-200">
                                <FaFacebook className="w-5 h-5 text-white" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-[#1037b6] hover:bg-[#0d2b8f] rounded-full flex items-center justify-center transition-colors duration-200">
                                <FaTwitter className="w-5 h-5 text-white" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-[#e11c09] hover:bg-[#b81500] rounded-full flex items-center justify-center transition-colors duration-200">
                                <FaInstagram className="w-5 h-5 text-white" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-[#1037b6] hover:bg-[#0d2b8f] rounded-full flex items-center justify-center transition-colors duration-200">
                                <FaYoutube className="w-5 h-5 text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <Link
                                        href={service.href}
                                        className="text-gray-300 hover:text-[#e11c09] transition-colors duration-200"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-[#1037b6] transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-7 h-7 bg-[#e11c09] rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                                    <Phone className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-300 font-medium">Phone</p>
                                    <a href={`tel:${siteConstants.phone}`} className=" block text-gray-400">{siteConstants.phone}</a>
                                    <a href={`tel:${siteConstants.phone2}`} className=" block text-gray-400">{siteConstants.phone2}</a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-7 h-7 bg-[#1037b6] rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                                    <Mail className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-300 font-medium">Email</p>
                                    <a href={`mailto:${siteConstants.email}`} className=" block text-gray-400">{siteConstants.email}</a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-7 h-7 bg-[#e11c09] rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                                    <MapPin className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-300 font-medium">Address</p>
                                    <p className="text-gray-400">{siteConstants.address}</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-7 h-7 bg-[#1037b6] rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                                    <Clock className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-300 font-medium">Working Hours</p>
                                    <p className="text-gray-400">{siteConstants.workingHours}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800 bg-gray-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <p className=" text-sm md:text-base text-gray-400">
                                &copy; 2025 {siteConstants.name}. All rights reserved. designed by <a href="https://dleaftech.com" target="_blank" className="text-[#e11c09] hover:text-[#b81500] transition-colors duration-200">Dleaftech Private Limited</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
