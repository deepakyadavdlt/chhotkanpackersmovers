import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConstants } from "@/constants/siteConstants";
import { Users, Award, Shield, Clock, MapPin, Phone, Mail, Star, Truck, Package, Building, Car, Globe, CheckCircle } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#bf4705] to-[#d45a0a] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                        About {siteConstants.name}
                    </h1>
                    <p className="text-xl lg:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
                        Your trusted partner in professional moving services for over 15 years.
                        We're committed to making your relocation experience smooth, safe, and stress-free.
                    </p>
                </div>
            </section>

            {/* Company Story */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Our Story
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
                                <p>
                                    Today, we're proud to have helped over 5000 families and businesses relocate successfully,
                                    maintaining our reputation for excellence and reliability.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-[#bf4705]/10 to-orange-100 rounded-3xl p-8 shadow-xl">
                                <div className="text-center">
                                    <div className="w-28 h-28 bg-gradient-to-br from-[#bf4705] to-[#d45a0a] rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
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

            {/* Company Description */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Who We Are
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                            {siteConstants.name} are best packers and movers specialise in offering packing and moving services for any conceivable kind of good.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl p-12">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                            </div>
                            <div className="relative">
                                <div className="bg-gradient-to-br from-[#bf4705]/20 to-orange-100/50 rounded-2xl p-8">
                                    <div className="text-center">
                                        <div className="w-24 h-24 bg-gradient-to-br from-[#bf4705] to-[#d45a0a] rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                                            <Package className="w-12 h-12 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Packing</h3>
                                        <p className="text-gray-600 text-sm">
                                            More than just big men hauling furniture is involved in packing and moving.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our Expertise
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A combination of knowledge, skill, and experience are needed for a successful move.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <Package className="w-12 h-12 text-[#bf4705]" />,
                                title: "Packing & Moving",
                                description: "Professional packing services with cutting-edge methods focused on quality"
                            },
                            {
                                icon: <Building className="w-12 h-12 text-[#bf4705]" />,
                                title: "Office Relocation",
                                description: "Complete office and residential relocation services"
                            },
                            {
                                icon: <Truck className="w-12 h-12 text-[#bf4705]" />,
                                title: "Loading & Unloading",
                                description: "Expert loading and unloading with proper equipment"
                            },
                            {
                                icon: <Car className="w-12 h-12 text-[#bf4705]" />,
                                title: "Automobile Carrier",
                                description: "Specialized vehicle transportation services"
                            }
                        ].map((service, index) => (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2 bg-gradient-to-br from-white to-orange-50/30">
                                <CardHeader>
                                    <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-gray-600 text-base">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Excellence */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Our Team Excellence
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-[#bf4705] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <CheckCircle className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Full-Time Professionals</h3>
                                        <p className="text-gray-600">All of the members of our packing crew are full-time workers who must go through essential training programmes to learn the talent of packing.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-[#bf4705] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <CheckCircle className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Essential Training</h3>
                                        <p className="text-gray-600">Our team undergoes comprehensive training programs to master the art of professional packing and moving.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-[#bf4705] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                            <div className="bg-gradient-to-br from-[#bf4705]/10 to-orange-100 rounded-3xl p-8 shadow-xl">
                                <div className="text-center">
                                    <div className="w-28 h-28 bg-gradient-to-br from-[#bf4705] to-[#d45a0a] rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
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

            {/* Values Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The principles that guide everything we do and every service we provide.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Users className="w-12 h-12 text-[#bf4705]" />,
                                title: "Trust & Reliability",
                                description: "We build lasting relationships based on trust, transparency, and consistent delivery of promises."
                            },
                            {
                                icon: <Award className="w-12 h-12 text-[#bf4705]" />,
                                title: "Quality Excellence",
                                description: "Every service we provide meets the highest standards of quality and professionalism."
                            },
                            {
                                icon: <Star className="w-12 h-12 text-[#bf4705]" />,
                                title: "Innovation",
                                description: "We continuously improve our processes and adopt new technologies to serve you better."
                            },
                            {
                                icon: <Shield className="w-12 h-12 text-[#bf4705]" />,
                                title: "Customer First",
                                description: "Your satisfaction is our priority. We go above and beyond to exceed your expectations."
                            },
                            {
                                icon: <Clock className="w-12 h-12 text-[#bf4705]" />,
                                title: "Continuous Improvement",
                                description: "We learn from every experience and constantly enhance our services and processes."
                            },
                            {
                                icon: <Globe className="w-12 h-12 text-[#bf4705]" />,
                                title: "Global Standards",
                                description: "We offer the most prompt, secure, trustworthy, and affordable services available anywhere in the world."
                            }
                        ].map((value, index) => (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2">
                                <CardHeader>
                                    <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {value.icon}
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">{value.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-gray-600 text-base">
                                        {value.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-[#bf4705]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Numbers That Speak
                        </h2>
                        <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                            Our achievements and the trust our customers place in us.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { number: "5000+", label: "Happy Customers", icon: <Users className="w-8 h-8 text-orange-200" /> },
                            { number: "100+", label: "Cities Served", icon: <MapPin className="w-8 h-8 text-orange-200" /> },
                            { number: "15+", label: "Years Experience", icon: <Award className="w-8 h-8 text-orange-200" /> },
                            { number: "99%", label: "Satisfaction Rate", icon: <Star className="w-8 h-8 text-orange-200" /> }
                        ].map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {stat.icon}
                                </div>
                                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                                <div className="text-orange-100 text-lg">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Get In Touch
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Ready to start your moving journey? Contact us today for a consultation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <Phone className="w-8 h-8 text-[#bf4705]" />,
                                title: "Phone",
                                content: siteConstants.phone,
                                subtitle: "Available 24/7"
                            },
                            {
                                icon: <Mail className="w-8 h-8 text-[#bf4705]" />,
                                title: "Email",
                                content: siteConstants.email,
                                subtitle: "Quick response guaranteed"
                            },
                            {
                                icon: <MapPin className="w-8 h-8 text-[#bf4705]" />,
                                title: "Address",
                                content: siteConstants.address,
                                subtitle: "Visit us anytime"
                            },
                            {
                                icon: <Clock className="w-8 h-8 text-[#bf4705]" />,
                                title: "Working Hours",
                                content: siteConstants.workingHours,
                                subtitle: "Emergency services available"
                            }
                        ].map((item, index) => (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2">
                                <CardHeader>
                                    <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <CardTitle className="text-lg text-gray-900">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
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
