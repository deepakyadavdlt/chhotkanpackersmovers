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
import { logoImage } from "@/assets/logo";
import Image from "next/image";

const services = [
    { name: "Packing and Moving", href: "/services/packing-and-moving" },
    { name: "Loading and Unloading", href: "/services/loading-and-unloading" },
    { name: "Domestic Moving", href: "/services/domestic-moving" },
    { name: "Office Relocations", href: "/services/office-relocation" },
    { name: "Car Transportation", href: "/services/car-transport" },
    { name: "International Moving", href: "/services/international-moving" },
    { name: "Warehousing & Storage", href: "/services/warehousing-and-storage" },
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    return (
        <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/">
                        <div className="flex items-center space-x-3">
                            <Image src={logoImage.src} alt="logo" width={100} height={100} className=" w-40 md:w-50 " />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <Link href="/" className="text-gray-900 hover:text-[#e11c09] transition-colors duration-200 font-medium">
                            Home
                        </Link>

                        {/* Services Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="text-gray-900 hover:text-[#e11c09] hover:bg-gray-100 transition-colors duration-200 font-medium">
                                    Services
                                    <ChevronDown className="ml-2 h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-xl rounded-lg">
                                {services.map((service) => (
                                    <DropdownMenuItem key={service.name} asChild>
                                        <Link href={service.href} className="text-gray-700 hover:text-[#e11c09] hover:bg-gray-50 cursor-pointer">
                                            {service.name}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Link href="/about" className="text-gray-900 hover:text-[#e11c09] transition-colors duration-200 font-medium">
                            About
                        </Link>
                        <Link href="/contact" className="text-gray-900 hover:text-[#e11c09] transition-colors duration-200 font-medium">
                            Contact
                        </Link>

                        {/* CTA Button */}
                        <Link href="/contact">
                            <Button className="bg-gradient-to-r from-[#e11c09] to-[#b81500] hover:from-[#b81500] hover:to-[#e11c09] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Get Quote
                            </Button></Link>

                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <Button
                            variant="ghost"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-900 hover:text-[#e11c09]"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-gray-200 py-4">
                        <div className="space-y-2">
                            <Link
                                href="/"
                                className="block px-3 py-2 text-gray-900 font-medium hover:text-[#e11c09] transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </Link>

                            {/* Mobile Services */}
                            <div className="px-3 py-2">
                                <button
                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                    className="flex items-center justify-between w-full text-gray-900 font-medium mb-2 hover:text-[#e11c09] transition-colors duration-200"
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
                                                className="block text-gray-600 hover:text-[#e11c09] py-1 transition-colors duration-200"
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
                                className="block px-3 py-2 text-gray-900 font-medium hover:text-[#e11c09] transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="/contact"
                                className="block px-3 py-2 text-gray-900 font-medium hover:text-[#e11c09] transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>

                            {/* Mobile CTA */}
                            <div className="px-3 pt-2">
                                <Button className="w-full bg-gradient-to-r from-[#e11c09] to-[#b81500] hover:from-[#b81500] hover:to-[#e11c09] text-white py-2 rounded-lg font-medium transition-all duration-300">
                                    Get Quote
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
