"use client";

import { useState } from "react";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { siteConstants } from "@/constants/siteConstants";

const services = [
    { name: "Packing and Moving Services", href: "/services/packing-moving", description: "Complete packing and moving solutions" },
    { name: "Loading and Unloading", href: "/services/loading-unloading", description: "Professional loading and unloading services" },
    { name: "Domestic Moving Services", href: "/services/domestic", description: "Local and domestic relocation" },
    { name: "Office Relocations", href: "/services/office-relocation", description: "Professional office moving" },
    { name: "Car Transportation", href: "/services/car-transport", description: "Safe vehicle transportation" },
    { name: "International Moving", href: "/services/international", description: "Worldwide relocation services" },
    { name: "Warehousing and Storage", href: "/services/storage", description: "Secure storage solutions" }
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    return (
        <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#bf4705] to-[#d45a0a] rounded-xl flex items-center justify-center shadow-lg">
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold bg-gradient-to-r from-[#bf4705] to-[#d45a0a] bg-clip-text text-transparent">
                                        {siteConstants.name}
                                    </h1>
                                    <p className="text-xs text-gray-500 -mt-1">Professional Moving Services</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link
                                href="/"
                                className="text-gray-900 hover:text-[#bf4705] px-3 py-2 text-sm font-medium transition-colors duration-200 hover:scale-105"
                            >
                                Home
                            </Link>

                            {/* Services Dropdown */}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="text-gray-900 hover:text-[#bf4705] hover:bg-orange-50 px-3 py-2 text-sm font-medium transition-all duration-200"
                                    >
                                        Services
                                        <ChevronDown className="ml-1 h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    align="start"
                                    className="w-80 p-4 bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl rounded-xl"
                                >
                                    <div className="grid grid-cols-1 gap-2">
                                        {services.map((service) => (
                                            <DropdownMenuItem key={service.name} asChild>
                                                <Link
                                                    href={service.href}
                                                    className="flex flex-col items-start p-3 rounded-lg hover:bg-orange-50 transition-colors duration-200 cursor-pointer"
                                                >
                                                    <span className="font-medium text-gray-900">{service.name}</span>
                                                    <span className="text-sm text-gray-500">{service.description}</span>
                                                </Link>
                                            </DropdownMenuItem>
                                        ))}
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-gray-200">
                                        <Link
                                            href="/services"
                                            className="block text-center text-[#bf4705] font-medium hover:text-[#a03d04] transition-colors duration-200"
                                        >
                                            View All Services →
                                        </Link>
                                    </div>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <Link
                                href="/about"
                                className="text-gray-900 hover:text-[#bf4705] px-3 py-2 text-sm font-medium transition-colors duration-200 hover:scale-105"
                            >
                                About
                            </Link>
                            <Link
                                href="/contact"
                                className="text-gray-900 hover:text-[#bf4705] px-3 py-2 text-sm font-medium transition-colors duration-200 hover:scale-105"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Button className="bg-[#bf4705] hover:bg-[#a03d04] text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg">
                            Get Free Quote
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-900 hover:text-[#bf4705] p-2"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-gray-200 py-4">
                        <div className="space-y-2">
                            <Link
                                href="/"
                                className="block px-3 py-2 text-gray-900 hover:text-[#bf4705] hover:bg-orange-50 rounded-lg transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </Link>

                            {/* Mobile Services */}
                            <div className="px-3 py-2">
                                <button
                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                    className="flex items-center justify-between w-full text-gray-900 font-medium mb-2 hover:text-[#bf4705] transition-colors duration-200"
                                >
                                    <span>Services</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {isServicesOpen && (
                                    <div className="pl-4 space-y-2 mt-2">
                                        {services.map((service) => (
                                            <Link
                                                key={service.name}
                                                href={service.href}
                                                className="block text-gray-600 hover:text-[#bf4705] py-1 transition-colors duration-200"
                                                onClick={() => {
                                                    setIsMobileMenuOpen(false);
                                                    setIsServicesOpen(false);
                                                }}
                                            >
                                                {service.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <Link
                                href="/about"
                                className="block px-3 py-2 text-gray-900 hover:text-[#bf4705] hover:bg-orange-50 rounded-lg transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="/contact"
                                className="block px-3 py-2 text-gray-900 hover:text-[#bf4705] hover:bg-orange-50 rounded-lg transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>

                            <div className="px-3 pt-4">
                                <Button className="w-full bg-[#bf4705] hover:bg-[#a03d04] text-white py-3 rounded-lg font-semibold transition-all duration-200">
                                    Get Free Quote
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
