import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConstants } from "@/constants/siteConstants";
import { Globe, Truck, Shield, Clock, Users, CheckCircle, Star, ArrowRight, MapPin, Phone, Mail, Award, Zap } from "lucide-react";
import { internationalMovingImage } from "@/assets/services";
import Image from "next/image";
import Link from "next/link";

export default function InternationalMovingPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#e11c09] via-[#b81500] to-[#1037b6] text-white py-20 lg:py-32 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-white rounded-full -translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                        <Globe className="w-5 h-5 text-yellow-300 fill-current" />
                        <span className="text-sm font-medium">Professional Service</span>
                    </div>
                    <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                        International Moving
                        <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                            Services
                        </span>
                    </h1>
                    <p className="text-lg lg:text-xl xl:text-2xl text-red-100 max-w-4xl mx-auto leading-relaxed">
                        Professional international relocation services with customs clearance, documentation, and worldwide shipping to any destination.
                    </p>
                </div>
            </section>

            {/* Service Overview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#e11c09]/10 to-[#1037b6]/10 text-[#e11c09] px-4 py-2 rounded-full">
                                <Star className="w-5 h-5" />
                                <span className="text-sm font-medium">Service Overview</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Professional International
                                <span className="block bg-gradient-to-r from-[#e11c09] to-[#e11c09] bg-clip-text text-transparent">
                                    Moving Solutions
                                </span>
                            </h2>
                            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    Our international moving services are designed to handle relocations to any country worldwide with comprehensive
                                    support including customs clearance, documentation, and door-to-door delivery.
                                </p>
                                <p>
                                    We handle all aspects of international moves including air freight, sea freight, customs documentation,
                                    and final delivery at your destination. Our global network ensures smooth international relocations.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100">
                                    <CheckCircle className="w-5 h-5 text-[#e11c09]" />
                                    <span className="text-sm font-medium text-gray-700">Global Network</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100">
                                    <CheckCircle className="w-5 h-5 text-[#1037b6]" />
                                    <span className="text-sm font-medium text-gray-700">Customs Clearance</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <Image
                                    src={internationalMovingImage.src}
                                    alt="Professional International Moving Services"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[#e11c09] to-[#1037b6] rounded-full flex items-center justify-center">
                                            <Globe className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Global Moving</h4>
                                            <p className="text-sm text-gray-600">Worldwide relocation services</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Features */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#e11c09]/10 to-[#1037b6]/10 text-[#e11c09] px-4 py-2 rounded-full mb-6">
                            <Zap className="w-5 h-5" />
                            <span className="text-sm font-medium">What We Offer</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Comprehensive
                            <span className="block bg-gradient-to-r from-[#e11c09] to-[#e11c09] bg-clip-text text-transparent">
                                International Services
                            </span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Globe className="w-12 h-12 text-[#e11c09]" />,
                                title: "Worldwide Shipping",
                                description: "Relocation services to any country worldwide"
                            },
                            {
                                icon: <Truck className="w-12 h-12 text-[#1037b6]" />,
                                title: "Air & Sea Freight",
                                description: "Multiple shipping options for your needs"
                            },
                            {
                                icon: <Shield className="w-12 h-12 text-[#e11c09]" />,
                                title: "Customs Clearance",
                                description: "Complete customs documentation and clearance"
                            },
                            {
                                icon: <Users className="w-12 h-12 text-[#1037b6]" />,
                                title: "Global Network",
                                description: "International partners and local support"
                            },
                            {
                                icon: <Clock className="w-12 h-12 text-[#e11c09]" />,
                                title: "Door-to-Door",
                                description: "Complete service from origin to destination"
                            },
                            {
                                icon: <Award className="w-12 h-12 text-[#1037b6]" />,
                                title: "Documentation",
                                description: "All required paperwork and permits"
                            }
                        ].map((feature, index) => (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2 bg-white overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#e11c09]/5 to-[#1037b6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <CardHeader className="relative z-10">
                                    <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <CardDescription className="text-gray-600 text-base">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Process */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#e11c09]/10 to-[#1037b6]/10 text-[#e11c09] px-4 py-2 rounded-full mb-6">
                            <CheckCircle className="w-5 h-5" />
                            <span className="text-sm font-medium">Our Process</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            How We Handle Your
                            <span className="block bg-gradient-to-r from-[#e11c09] to-[#e11c09] bg-clip-text text-transparent">
                                International Move
                            </span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Consultation",
                                description: "International move planning and documentation"
                            },
                            {
                                step: "02",
                                title: "Packing",
                                description: "Professional packing for international shipping"
                            },
                            {
                                step: "03",
                                title: "Shipping",
                                description: "Air or sea freight with tracking"
                            },
                            {
                                step: "04",
                                title: "Delivery",
                                description: "Customs clearance and final delivery"
                            }
                        ].map((process, index) => (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2 bg-white overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#e11c09]/5 to-[#1037b6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <CardHeader className="relative z-10">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#e11c09] to-[#e11c09] rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-xl">{process.step}</span>
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">{process.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <CardDescription className="text-gray-600 text-base">
                                        {process.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-[#1037b6] via-[#0d2b8f] to-[#e11c09] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 translate-y-1/2"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                        <Star className="w-5 h-5 text-yellow-300 fill-current" />
                        <span className="text-sm text-white font-medium">Get Started Today</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                        Ready to Start Your
                        <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                            International Move?
                        </span>
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Contact us today for a free consultation and quote for your international moving needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button className="bg-[#e11c09] hover:bg-[#b81500] text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl group">
                                Get Free Quote
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                        </Link>
                        <a href={`tel:${siteConstants.phone}`}>
                            <Button className="bg-white text-[#1037b6] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 group shadow-xl">
                                Contact Us
                                <Phone className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
