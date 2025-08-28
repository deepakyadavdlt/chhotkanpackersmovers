"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Users, Truck, Award, Globe, Search, ArrowRight } from "lucide-react";
import { siteConstants } from "@/constants/siteConstants";

// Location data based on the reference website
const locations = [
    { name: "Araria", slug: "araria", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Arwal", slug: "arwal", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Aurangabad", slug: "aurangabad", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Banka", slug: "banka", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Begusarai", slug: "begusarai", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Bhagalpur", slug: "bhagalpur", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Bhojpur", slug: "bhojpur", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Buxar", slug: "buxar", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Darbhanga", slug: "darbhanga", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "East Champaran", slug: "east-champaran", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Gaya", slug: "gaya", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Gopalganj", slug: "gopalganj", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Jamui", slug: "jamui", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Jehanabad", slug: "jehanabad", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Kaimur", slug: "kaimur", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Katihar", slug: "katihar", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Khagaria", slug: "khagaria", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Kishanganj", slug: "kishanganj", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Lakhisarai", slug: "lakhisarai", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Madhepura", slug: "madhepura", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Madhubani", slug: "madhubani", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Munger", slug: "munger", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Muzaffarpur", slug: "muzaffarpur", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Nalanda", slug: "nalanda", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Nawada", slug: "nawada", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Patna", slug: "patna", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Purnia", slug: "purnia", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Rohtas", slug: "rohtas", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Saharsa", slug: "saharsa", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Samastipur", slug: "samastipur", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Saran", slug: "saran", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Sheikhpura", slug: "sheikhpura", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Sheohar", slug: "sheohar", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Sitamarhi", slug: "sitamarhi", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Siwan", slug: "siwan", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Supaul", slug: "supaul", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "Vaishali", slug: "vaishali", state: "Bihar, India", support: "24/7", fleet: "Available" },
    { name: "West Champaran", slug: "west-champaran", state: "Bihar, India", support: "24/7", fleet: "Available" },
];

const stats = [
    { icon: Globe, value: "38", label: "Districts Covered", color: "text-[#e11c09]", bgColor: "bg-[#e11c09]/10" },
    { icon: Users, value: "1000+", label: "Bihar Customers", color: "text-[#1037b6]", bgColor: "bg-[#1037b6]/10" },
    { icon: Truck, value: "50+", label: "Fleet Vehicles", color: "text-[#e11c09]", bgColor: "bg-[#e11c09]/10" },
    { icon: Award, value: "15+", label: "Years of Experience", color: "text-[#1037b6]", bgColor: "bg-[#1037b6]/10" },
];

export default function LocationsPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredLocations = locations.filter(location =>
        location.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#e11c09] via-[#b81500] to-[#1037b6] text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
                    <div className="text-center">
                        <Badge className="bg-white/20 text-white border-white/30 mb-6 px-4 py-2 text-sm backdrop-blur-sm">
                            Our Service Locations
                        </Badge>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Bihar <span className="text-yellow-300">Locations</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed px-4">
                            Serving every corner of Bihar with 38 districts covered. Find your nearest Chhotkan Packers and Movers location for reliable, professional moving services.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center bg-white text-[#e11c09] hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl"
                            >
                                Get Free Quote
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center border-2 border-white/30 text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold backdrop-blur-sm rounded-xl transition-all duration-300"
                            >
                                Contact Support
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Enhanced Decorative Elements */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-pulse delay-500"></div>
                <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/5 rounded-full blur-lg animate-pulse delay-700"></div>
            </section>

            {/* Statistics Section */}
            <section className="py-12 sm:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full ${stat.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color}`} />
                                </div>
                                <div className={`text-2xl sm:text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                                    {stat.value}
                                </div>
                                <div className="text-gray-600 font-medium text-sm sm:text-base">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Search and Locations Section */}
            <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Enhanced Search Bar */}
                    <div className="max-w-2xl mx-auto mb-12">
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Search for your location..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-6 py-4 pl-14 text-base sm:text-lg border-2 border-gray-200 rounded-2xl focus:border-[#e11c09] focus:ring-4 focus:ring-[#e11c09]/10 transition-all duration-300 outline-none shadow-lg hover:shadow-xl"
                            />
                            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-focus-within:text-[#e11c09] transition-colors duration-300" />
                        </div>
                        {searchTerm && (
                            <p className="text-center text-sm text-gray-600 mt-2">
                                Found {filteredLocations.length} location{filteredLocations.length !== 1 ? 's' : ''}
                            </p>
                        )}
                    </div>

                    {/* Enhanced Locations Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                        {filteredLocations.map((location, index) => (
                            <Link
                                key={location.slug}
                                href={`/packers-and-movers-in-${location.slug}`}
                                className="group"
                            >
                                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 hover:border-[#e11c09]/20 hover:bg-gradient-to-br hover:from-white hover:to-gray-50">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#e11c09] transition-colors duration-300 mb-1">
                                                {location.name}
                                            </h3>
                                            <p className="text-gray-600 text-sm flex items-center">
                                                <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                                                <span className="truncate">{location.state}</span>
                                            </p>
                                        </div>
                                        <div className="text-right ml-2">
                                            <Badge className="bg-green-100 text-green-700 text-xs px-2 py-1">
                                                {location.support}
                                            </Badge>
                                        </div>
                                    </div>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Truck className="w-4 h-4 mr-2 text-[#1037b6] flex-shrink-0" />
                                            <span>Fleet: {location.fleet}</span>
                                        </div>
                                    </div>

                                    <div className="pt-3 border-t border-gray-100">
                                        <div className="flex items-center justify-between text-[#e11c09] font-medium group-hover:text-[#1037b6] transition-colors duration-300">
                                            <span className="text-sm">View Services</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Enhanced No Results Message */}
                    {filteredLocations.length === 0 && searchTerm && (
                        <div className="text-center py-16">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                                <MapPin className="w-10 h-10 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">No locations found</h3>
                            <p className="text-gray-500 mb-4">Try searching with different keywords</p>
                            <button
                                onClick={() => setSearchTerm("")}
                                className="text-[#e11c09] hover:text-[#1037b6] font-medium transition-colors duration-300"
                            >
                                Clear search
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Enhanced CTA Section */}
            <section className="py-12 sm:py-16 bg-gradient-to-r from-[#e11c09] to-[#1037b6] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                        Need Help Finding Your Location?
                    </h2>
                    <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Our customer support team is ready to help you connect with your nearest location
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href={`tel:${siteConstants.phone}`}
                            className="inline-flex items-center justify-center bg-white text-[#e11c09] hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl"
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            Call: {siteConstants.phone}
                        </Link>
                        <Link
                            href={`mailto:${siteConstants.email}`}
                            className="inline-flex items-center justify-center border-2 border-white/30 text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold backdrop-blur-sm rounded-xl transition-all duration-300"
                        >
                            <Mail className="w-5 h-5 mr-2" />
                            Email Support
                        </Link>
                    </div>
                </div>

                {/* CTA Decorative Elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
            </section>
        </div>
    );
}
