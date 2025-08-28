import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
    MapPin,
    Phone,
    Mail,
    CheckCircle,
    ArrowRight,
    Home,
    Building,
    Car,
    Globe,
    Users,
    Award,
    Star,
    Shield,
    Clock
} from "lucide-react";
import { siteConstants } from "@/constants/siteConstants";

// Define the props type for dynamic routes
type PageProps = {
    params: Promise<{ slug: string }>;
};

// Location data
const locations = {
    "araria": { name: "Araria", state: "Bihar, India", population: "2.8M+", established: "1990" },
    "arwal": { name: "Arwal", state: "Bihar, India", population: "700K+", established: "2001" },
    "aurangabad": { name: "Aurangabad", state: "Bihar, India", population: "2.5M+", established: "1972" },
    "banka": { name: "Banka", state: "Bihar, India", population: "2.0M+", established: "1991" },
    "begusarai": { name: "Begusarai", state: "Bihar, India", population: "3.0M+", established: "1972" },
    "bhagalpur": { name: "Bhagalpur", state: "Bihar, India", population: "3.0M+", established: "1948" },
    "bhojpur": { name: "Bhojpur", state: "Bihar, India", population: "2.7M+", established: "1972" },
    "buxar": { name: "Buxar", state: "Bihar, India", population: "1.7M+", established: "1992" },
    "darbhanga": { name: "Darbhanga", state: "Bihar, India", population: "3.9M+", established: "1866" },
    "east-champaran": { name: "East Champaran", state: "Bihar, India", population: "5.1M+", established: "1866" },
    "gaya": { name: "Gaya", state: "Bihar, India", population: "4.4M+", established: "1865" },
    "gopalganj": { name: "Gopalganj", state: "Bihar, India", population: "2.6M+", established: "1973" },
    "jamui": { name: "Jamui", state: "Bihar, India", population: "1.8M+", established: "1991" },
    "jehanabad": { name: "Jehanabad", state: "Bihar, India", population: "1.1M+", established: "1986" },
    "kaimur": { name: "Kaimur", state: "Bihar, India", population: "1.6M+", established: "1991" },
    "katihar": { name: "Katihar", state: "Bihar, India", population: "3.1M+", established: "1973" },
    "khagaria": { name: "Khagaria", state: "Bihar, India", population: "1.7M+", established: "1981" },
    "kishanganj": { name: "Kishanganj", state: "Bihar, India", population: "1.7M+", established: "1990" },
    "lakhisarai": { name: "Lakhisarai", state: "Bihar, India", population: "1.0M+", established: "1994" },
    "madhepura": { name: "Madhepura", state: "Bihar, India", population: "2.0M+", established: "1981" },
    "madhubani": { name: "Madhubani", state: "Bihar, India", population: "4.5M+", established: "1972" },
    "munger": { name: "Munger", state: "Bihar, India", population: "1.4M+", established: "1972" },
    "muzaffarpur": { name: "Muzaffarpur", state: "Bihar, India", population: "4.8M+", established: "1865" },
    "nalanda": { name: "Nalanda", state: "Bihar, India", population: "2.9M+", established: "1972" },
    "nawada": { name: "Nawada", state: "Bihar, India", population: "2.2M+", established: "1973" },
    "patna": { name: "Patna", state: "Bihar, India", population: "6.2M+", established: "1865" },
    "purnia": { name: "Purnia", state: "Bihar, India", population: "3.2M+", established: "1865" },
    "rohtas": { name: "Rohtas", state: "Bihar, India", population: "3.0M+", established: "1972" },
    "saharsa": { name: "Saharsa", state: "Bihar, India", population: "1.9M+", established: "1954" },
    "samastipur": { name: "Samastipur", state: "Bihar, India", population: "4.3M+", established: "1865" },
    "saran": { name: "Saran", state: "Bihar, India", population: "3.9M+", established: "1865" },
    "sheikhpura": { name: "Sheikhpura", state: "Bihar, India", population: "600K+", established: "1994" },
    "sheohar": { name: "Sheohar", state: "Bihar, India", population: "650K+", established: "1994" },
    "sitamarhi": { name: "Sitamarhi", state: "Bihar, India", population: "3.4M+", established: "1972" },
    "siwan": { name: "Siwan", state: "Bihar, India", population: "3.3M+", established: "1972" },
    "supaul": { name: "Supaul", state: "Bihar, India", population: "2.2M+", established: "1991" },
    "vaishali": { name: "Vaishali", state: "Bihar, India", population: "3.5M+", established: "1972" },
    "west-champaran": { name: "West Champaran", state: "Bihar, India", population: "4.0M+", established: "1866" },
};

const services = [
    {
        title: "Residential Moving",
        description: "Complete home relocation services with professional packing and careful handling",
        icon: Home,
        features: ["Professional Packing", "Furniture Protection", "Safe Transportation", "Unpacking Service"],
        color: "from-[#e11c09]/20 to-[#e11c09]/5"
    },
    {
        title: "Office Relocation",
        description: "Efficient corporate moving solutions with minimal business disruption",
        icon: Building,
        features: ["Business Continuity", "Equipment Handling", "Document Security", "Quick Setup"],
        color: "from-[#1037b6]/20 to-[#1037b6]/5"
    },
    {
        title: "Vehicle Transportation",
        description: "Safe and secure car and bike transportation across locations",
        icon: Car,
        features: ["Enclosed Transport", "Insurance Coverage", "Real-time Tracking", "Damage Protection"],
        color: "from-[#e11c09]/20 to-[#e11c09]/5"
    },
    {
        title: "International Moving",
        description: "Worldwide relocation services with customs clearance support",
        icon: Globe,
        features: ["Customs Documentation", "Sea & Air Freight", "Door-to-Door Service", "Insurance Coverage"],
        color: "from-[#1037b6]/20 to-[#1037b6]/5"
    }
];

const features = [
    { text: "24/7 Customer Support", icon: Clock, color: "text-[#e11c09]" },
    { text: "Free Survey & Quote", icon: CheckCircle, color: "text-green-600" },
    { text: "Professional Team", icon: Users, color: "text-[#1037b6]" },
    { text: "Insurance Coverage", icon: Shield, color: "text-[#e11c09]" },
    { text: "Real-time Tracking", icon: Star, color: "text-yellow-600" },
    { text: "On-time Delivery", icon: CheckCircle, color: "text-green-600" },
    { text: "Quality Packing Materials", icon: Award, color: "text-[#1037b6]" },
    { text: "Competitive Pricing", icon: CheckCircle, color: "text-green-600" }
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params; // Await the params Promise

    // Check if the slug is for a packers and movers location
    if (!slug.startsWith("packers-and-movers-in-")) {
        return {
            title: "Page Not Found",
            description: "The requested page could not be found."
        };
    }

    // Extract the location name from the slug
    const locationName = slug.replace("packers-and-movers-in-", "");
    const location = locations[locationName as keyof typeof locations];

    if (!location) {
        return {
            title: "Page Not Found",
            description: "The requested page could not be found."
        };
    }

    const formattedLocation = location.name
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

    return {
        title: `${formattedLocation} | ${siteConstants.name} | Packers and Movers in ${formattedLocation}, Bihar`,
        description: `Professional packers and movers in ${formattedLocation}, Bihar. ${siteConstants.name} offers safe, reliable, and affordable moving, packing, and relocation services in ${formattedLocation} and all across Bihar. Get a free quote today!`,
        keywords: [
            ...siteConstants.keywords,
            formattedLocation,
            `${formattedLocation} Packers and Movers`,
            `Moving Services in ${formattedLocation}`,
            `Relocation ${formattedLocation}`,
            `Best Packers in ${formattedLocation}`,
        ].join(", "),
    };
}

export default async function SlugPage({ params }: PageProps) {
    const { slug } = await params; // Await the params Promise

    // Check if the slug is for a packers and movers location
    if (!slug.startsWith("packers-and-movers-in-")) {
        notFound();
    }

    // Extract the location name from the slug
    const locationName = slug.replace("packers-and-movers-in-", "");
    const location = locations[locationName as keyof typeof locations];

    if (!location) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Enhanced Hero Section */}
            <section className="relative bg-gradient-to-br from-[#e11c09] via-[#b81500] to-[#1037b6] text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
                    <div className="text-center">
                        <Badge className="bg-white/20 text-white border-white/30 mb-6 px-4 py-2 text-sm backdrop-blur-sm">
                            Professional Moving Services
                        </Badge>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight px-4">
                            Packers and Movers in <span className="text-yellow-300">{location.name}</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed px-4">
                            Professional packers and movers services in {location.name}, {location.state}. Get free quotes, professional packing, safe transportation, and reliable moving services.
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
                                Call Now
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

            {/* Enhanced Location Info Section */}
            <section className="py-12 sm:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        <Card className="border-2 border-[#e11c09]/20 hover:border-[#e11c09]/40 transition-all duration-300 hover:shadow-xl group">
                            <CardContent className="p-4 sm:p-6 text-center">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full bg-[#e11c09]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-[#e11c09]" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Location</h3>
                                <p className="text-gray-600 text-sm sm:text-base">{location.name}, {location.state}</p>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-[#1037b6]/20 hover:border-[#1037b6]/40 transition-all duration-300 hover:shadow-xl group">
                            <CardContent className="p-4 sm:p-6 text-center">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full bg-[#1037b6]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-[#1037b6]" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Population</h3>
                                <p className="text-gray-600 text-sm sm:text-base">{location.population}</p>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-[#e11c09]/20 hover:border-[#e11c09]/40 transition-all duration-300 hover:shadow-xl group">
                            <CardContent className="p-4 sm:p-6 text-center">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full bg-[#e11c09]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Award className="w-6 h-6 sm:w-8 sm:h-8 text-[#e11c09]" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Established</h3>
                                <p className="text-gray-600 text-sm sm:text-base">{location.established}</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Enhanced Services Section */}
            <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <Badge className="bg-[#e11c09] text-white mb-4 px-4 py-2 text-sm">
                            Our Services
                        </Badge>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Complete Moving Solutions in {location.name}
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            Professional packers and movers services tailored for {location.name} with years of experience and customer satisfaction
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {services.map((service, index) => (
                            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 bg-white">
                                <CardContent className="p-4 sm:p-6 text-center">
                                    <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#e11c09]" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                    <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                                    <ul className="space-y-2 text-left">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-gray-600">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Why Choose Us Section */}
            <section className="py-12 sm:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <Badge className="bg-[#1037b6] text-white mb-4 px-4 py-2 text-sm">
                            Why Choose Us
                        </Badge>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Trusted Packers and Movers in {location.name}
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            We provide reliable, professional, and affordable moving services with customer satisfaction guarantee
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 group">
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                                </div>
                                <span className="text-gray-700 font-medium text-sm sm:text-base">{feature.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced CTA Section */}
            <section className="py-12 sm:py-16 bg-gradient-to-r from-[#e11c09] to-[#1037b6] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                        Ready to Move in {location.name}?
                    </h2>
                    <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Get your free quote today and experience professional moving services in {location.name}
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
                            Email Quote
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
