import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConstants } from "@/constants/siteConstants";
import { Users, Award, Shield, Clock, MapPin, Phone, Mail, Star, Truck, Package, Building, Car, Globe, CheckCircle, TrendingUp, Target, Headphones, Zap, Heart, Home, ArrowRight } from "lucide-react";
import { about_us_image } from "@/assets/about-us";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section - Enhanced */}
            <section className="relative bg-gradient-to-br from-[#e11c09] via-[#b81500] to-[#1037b6] text-white py-20 lg:py-32 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-white rounded-full -translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                        <Star className="w-5 h-5 text-yellow-300 fill-current" />
                        <span className="text-sm font-medium">About Our Company</span>
                    </div>
                    <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                        We are the best
                        <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                            moving company
                        </span>
                        in the world.
                    </h1>
                    <p className="text-lg lg:text-xl xl:text-2xl text-red-100 max-w-4xl mx-auto leading-relaxed">
                        We endeavor to comprehend what they're going through, what they need, what their price tags are,
                        and what means quite a bit to them and their clients.
                    </p>
                </div>
            </section>

            {/* Company Story - Enhanced with Image */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#e11c09]/10 to-[#1037b6]/10 text-[#e11c09] px-4 py-2 rounded-full">
                                <Heart className="w-5 h-5" />
                                <span className="text-sm font-medium">Our Story</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Founded with a
                                <span className="block bg-gradient-to-r from-[#e11c09] to-[#1037b6] bg-clip-text text-transparent">
                                    Vision of Excellence
                                </span>
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    Founded in 2009, {siteConstants.name} began with a simple mission: to make moving
                                    stress-free and reliable for families and businesses across India.
                                </p>
                                <p>
                                    What started as a small local moving company in Patna has grown into one of the
                                    most trusted names in the industry, serving customers across 100+ cities nationwide.
                                </p>
                                <p>
                                    Our journey has been driven by our commitment to quality, customer satisfaction,
                                    and continuous improvement. Every move we handle is an opportunity to exceed expectations
                                    and build lasting relationships.
                                </p>
                            </div>
                            <Button className="bg-gradient-to-r from-[#e11c09] to-[#e11c09] hover:from-[#b81500] hover:to-[#b81500] text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                                Learn More About Us
                            </Button>
                        </div>
                        <div className="relative">
                            <div className="relative bg-gradient-to-br from-[#e11c09]/10 to-[#1037b6]/10 rounded-3xl p-8 shadow-xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#e11c09]/5 to-[#1037b6]/5 rounded-3xl"></div>
                                <div className="relative z-10 text-center">
                                    <div className="w-28 h-28 bg-gradient-to-br from-[#e11c09] to-[#e11c09] rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                                        <Award className="w-14 h-14 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">15+ Years of Excellence</h3>
                                    <p className="text-gray-600">
                                        From humble beginnings to becoming a leading moving company,
                                        our commitment to quality has never wavered.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Description - Enhanced with Image */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#e11c09]/10 to-[#1037b6]/10 text-[#e11c09] px-4 py-2 rounded-full mb-6">
                            <Target className="w-5 h-5" />
                            <span className="text-sm font-medium">Who We Are</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Professional Packers and Movers
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                            {siteConstants.name} are best packers and movers specialise in offering packing and moving services for any conceivable kind of good.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We provide a wide range of moving services, including packing and moving, office and residential relocation, loading and unloading, and automobile carrier services. We employ the most cutting-edge methods to deliver service that is focused on quality.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We are a leading organisation in the {siteConstants.name} sector and are dedicated to offering our clients the most prompt, secure, trustworthy, and affordable services available anywhere in the world.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Our team members are dedicated to providing our customers with the individualised care and tailored outcomes they expect. Every shift we carry out is distinct.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
                                    <CheckCircle className="w-5 h-5 text-[#e11c09]" />
                                    <span className="text-sm font-medium text-gray-700">Professional Service</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
                                    <CheckCircle className="w-5 h-5 text-[#1037b6]" />
                                    <span className="text-sm font-medium text-gray-700">24/7 Support</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <Image
                                    src={about_us_image.src}
                                    alt="Professional Moving Services"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[#e11c09] to-[#1037b6] rounded-full flex items-center justify-center">
                                            <Package className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Professional Packing</h4>
                                            <p className="text-sm text-gray-600">Expert packing services</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Enhanced */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#e11c09]/10 to-[#1037b6]/10 text-[#e11c09] px-4 py-2 rounded-full mb-6">
                            <TrendingUp className="w-5 h-5" />
                            <span className="text-sm font-medium">Why Choose Us</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            We create opportunity to
                            <span className="block bg-gradient-to-r from-[#e11c09] to-[#e11c09] bg-clip-text text-transparent">
                                reach potential
                            </span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Package className="w-12 h-12 text-[#e11c09]" />,
                                title: "Economical Air Freight",
                                description: "Packers and movers are given intense training materials properly."
                            },
                            {
                                icon: <Clock className="w-12 h-12 text-[#1037b6]" />,
                                title: "Time Bound Deliveries",
                                description: "Packers and movers are given intense training materials properly."
                            },
                            {
                                icon: <Shield className="w-12 h-12 text-[#e11c09]" />,
                                title: "Safety & Reliability",
                                description: "Packers and movers are given intense training materials properly."
                            },
                            {
                                icon: <Truck className="w-12 h-12 text-[#1037b6]" />,
                                title: "Transport Solutions",
                                description: "Packers and movers are given intense training materials properly."
                            },
                            {
                                icon: <Building className="w-12 h-12 text-[#e11c09]" />,
                                title: "Warehousing Solutions",
                                description: "Packers and movers are given intense training materials properly."
                            },
                            {
                                icon: <Headphones className="w-12 h-12 text-[#1037b6]" />,
                                title: "24/7 Online Support",
                                description: "Packers and movers are given intense training materials properly."
                            }
                        ].map((service, index) => (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50/30 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#e11c09]/5 to-[#1037b6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <CardHeader className="relative z-10">
                                    <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <CardDescription className="text-gray-600 text-base">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Services - Enhanced */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#e11c09]/10 to-[#1037b6]/10 text-[#e11c09] px-4 py-2 rounded-full mb-6">
                            <Zap className="w-5 h-5" />
                            <span className="text-sm font-medium">Our Services</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            We are helping you to get
                            <span className="block bg-gradient-to-r from-[#e11c09] to-[#e11c09] bg-clip-text text-transparent">
                                moving solution
                            </span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Building className="w-12 h-12 text-[#e11c09]" />,
                                title: "Commercial Movers",
                                description: "Quality Work is Best Organization Building Make all time Packers and Movers and packing."
                            },
                            {
                                icon: <Home className="w-12 h-12 text-[#1037b6]" />,
                                title: "Residential Moves",
                                description: "Quality Work is Best Organization Building Make all time Packers and Movers and packing."
                            },
                            {
                                icon: <Truck className="w-12 h-12 text-[#e11c09]" />,
                                title: "Transportation Service",
                                description: "Quality Work is Best Organization Building Make all time Packers and Movers and packing."
                            },
                            {
                                icon: <Users className="w-12 h-12 text-[#1037b6]" />,
                                title: "Corporate Relocation",
                                description: "Quality Work is Best Organization Building Make all time Packers and Movers and packing."
                            },
                            {
                                icon: <Package className="w-12 h-12 text-[#e11c09]" />,
                                title: "Warehousing & Storage",
                                description: "Quality Work is Best Organization Building Make all time Packers and Movers and packing."
                            },
                            {
                                icon: <Car className="w-12 h-12 text-[#1037b6]" />,
                                title: "Door to Door Service",
                                description: "Quality Work is Best Organization Building Make all time Packers and Movers and packing."
                            }
                        ].map((service, index) => (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2 bg-white overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#e11c09]/5 to-[#1037b6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <CardHeader className="relative z-10">
                                    <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <CardDescription className="text-gray-600 text-base mb-4">
                                        {service.description}
                                    </CardDescription>
                                    <Button className="bg-gradient-to-r from-[#e11c09] to-[#e11c09] hover:from-[#b81500] hover:to-[#b81500] text-white w-full group-hover:scale-105 transition-transform duration-300">
                                        Learn More
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Excellence - Enhanced */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#e11c09]/10 to-[#1037b6]/10 text-[#e11c09] px-4 py-2 rounded-full">
                                <Users className="w-5 h-5" />
                                <span className="text-sm font-medium">Our Team Excellence</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Professional Team with
                                <span className="block bg-gradient-to-r from-[#e11c09] to-[#e11c09] bg-clip-text text-transparent">
                                    Essential Training
                                </span>
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-[#e11c09] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <CheckCircle className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Full-Time Professionals</h3>
                                        <p className="text-gray-600">All of the members of our packing crew are full-time workers who must go through essential training programmes to learn the talent of packing.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-[#1037b6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <CheckCircle className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Essential Training</h3>
                                        <p className="text-gray-600">Our team undergoes comprehensive training programs to master the art of professional packing and moving.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-[#e11c09] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <CheckCircle className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Meticulous Results</h3>
                                        <p className="text-gray-600">Result: A meticulous and effective shifting experience that exceeds customer expectations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-[#e11c09]/10 to-[#1037b6]/10 rounded-3xl p-8 shadow-xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#e11c09]/5 to-[#1037b6]/5 rounded-3xl"></div>
                                <div className="relative z-10 text-center">
                                    <div className="w-28 h-28 bg-gradient-to-br from-[#e11c09] to-[#e11c09] rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                                        <Users className="w-14 h-14 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Trained Professionals</h3>
                                    <p className="text-gray-600">
                                        Our team combines knowledge, skill, and experience to deliver exceptional moving services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section - Enhanced */}
            <section className="py-20 bg-gradient-to-br from-[#e11c09] via-[#b81500] to-[#1037b6] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Numbers That Speak
                        </h2>
                        <p className="text-xl text-red-100 max-w-3xl mx-auto">
                            Our achievements and the trust our customers place in us.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { number: "5000+", label: "Happy Customers", icon: <Users className="w-8 h-8 text-red-200" /> },
                            { number: "100+", label: "Cities Served", icon: <MapPin className="w-8 h-8 text-blue-200" /> },
                            { number: "15+", label: "Years Experience", icon: <Award className="w-8 h-8 text-red-200" /> },
                            { number: "99%", label: "Satisfaction Rate", icon: <Star className="w-8 h-8 text-blue-200" /> }
                        ].map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {stat.icon}
                                </div>
                                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                                <div className="text-red-100 text-lg">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Info Section - Enhanced */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#e11c09]/10 to-[#1037b6]/10 text-[#e11c09] px-4 py-2 rounded-full mb-6">
                            <Phone className="w-5 h-5" />
                            <span className="text-sm font-medium">Get In Touch</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Ready to start your
                            <span className="block bg-gradient-to-r from-[#e11c09] to-[#e11c09] bg-clip-text text-transparent">
                                moving journey?
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Contact us today for a consultation and get started with your relocation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <Phone className="w-8 h-8 text-[#e11c09]" />,
                                title: "Phone",
                                content: siteConstants.phone,
                                subtitle: "Available 24/7"
                            },
                            {
                                icon: <Mail className="w-8 h-8 text-[#1037b6]" />,
                                title: "Email",
                                content: siteConstants.email,
                                subtitle: "Quick response guaranteed"
                            },
                            {
                                icon: <MapPin className="w-8 h-8 text-[#e11c09]" />,
                                title: "Address",
                                content: siteConstants.address,
                                subtitle: "Visit us anytime"
                            },
                            {
                                icon: <Clock className="w-8 h-8 text-[#1037b6]" />,
                                title: "Working Hours",
                                content: siteConstants.workingHours,
                                subtitle: "Emergency services available"
                            }
                        ].map((item, index) => (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#e11c09]/5 to-[#1037b6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <CardHeader className="relative z-10">
                                    <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <CardTitle className="text-lg text-gray-900">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <p className="text-gray-600 mb-2 font-medium">{item.content}</p>
                                    <p className="text-sm text-gray-500">{item.subtitle}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
