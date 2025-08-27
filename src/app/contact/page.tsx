import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { siteConstants } from "@/constants/siteConstants";
import { MapPin, Phone, Mail, Clock, MessageSquare, Star, Send, CheckCircle, ArrowRight, Home, Truck, Package, Users, Award, Shield } from "lucide-react";

export default function ContactPage() {
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
                        <MessageSquare className="w-5 h-5 text-yellow-300 fill-current" />
                        <span className="text-sm font-medium">Get In Touch</span>
                    </div>
                    <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                        Let's Start Your
                        <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                            Moving Journey
                        </span>
                        Together
                    </h1>
                    <p className="text-lg lg:text-xl xl:text-2xl text-red-100 max-w-4xl mx-auto leading-relaxed">
                        Get in touch with us for all your moving needs. Our team is ready to help you plan the perfect relocation experience.
                    </p>
                </div>
            </section>

            {/* Contact Form Section - Enhanced */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#e11c09]/10 to-[#1037b6]/10 text-[#e11c09] px-4 py-2 rounded-full mb-6">
                            <Send className="w-5 h-5" />
                            <span className="text-sm font-medium">Send Message</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Fill out the form below and we'll get back to you within 24 hours with a personalized quote.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                        {/* Contact Form - Enhanced with Home Page Fields */}
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-100 overflow-hidden">
                            <div className="relative">
                                {/* Decorative Elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#e11c09]/10 to-[#1037b6]/10 rounded-full -translate-y-16 translate-x-16"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-[#1037b6]/10 to-[#e11c09]/10 rounded-full translate-y-12 -translate-x-12"></div>

                                <form className="space-y-6 relative z-10">
                                    <div className="grid sm:grid-cols-1 gap-4 sm:gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-3">Your Name *</label>
                                            <Input
                                                type="text"
                                                placeholder="Enter your full name"
                                                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#e11c09] focus:border-[#e11c09] transition-all duration-300 text-base sm:text-lg bg-white/80 backdrop-blur-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-3">Your Email *</label>
                                            <Input
                                                type="email"
                                                placeholder="Enter your email address"
                                                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#e11c09] focus:border-[#e11c09] transition-all duration-300 text-base sm:text-lg bg-white/80 backdrop-blur-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-3">Your Phone Number *</label>
                                        <Input
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#e11c09] focus:border-[#e11c09] transition-all duration-300 text-base sm:text-lg bg-white/80 backdrop-blur-sm"
                                        />
                                    </div>

                                    <div className="grid sm:grid-cols-1 gap-4 sm:gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-3">Move From *</label>
                                            <Input
                                                type="text"
                                                placeholder="Current location"
                                                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#e11c09] focus:border-[#e11c09] transition-all duration-300 text-base sm:text-lg bg-white/80 backdrop-blur-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-3">Move To *</label>
                                            <Input
                                                type="text"
                                                placeholder="Destination"
                                                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#e11c09] focus:border-[#e11c09] transition-all duration-300 text-base sm:text-lg bg-white/80 backdrop-blur-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-3">Message</label>
                                        <textarea
                                            rows={4}
                                            placeholder="Tell us about your moving requirements, timeline, and any special needs..."
                                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#e11c09] focus:border-[#e11c09] transition-all duration-300 text-base sm:text-lg bg-white/80 backdrop-blur-sm resize-none"
                                        ></textarea>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-[#e11c09] to-[#1037b6] hover:from-[#b81500] hover:to-[#0d2b8f] text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl group"
                                    >
                                        Send Message
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Button>
                                </form>
                            </div>
                        </div>

                        {/* Contact Information - Enhanced */}
                        <div className="space-y-6">


                            <div className="space-y-4 sm:space-y-6">
                                {[
                                    {
                                        icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                                        bgColor: "bg-[#e11c09]",
                                        title: "Phone",
                                        content: siteConstants.phone,
                                        subtitle: siteConstants.phone2,
                                        description: "Available 24/7 for urgent inquiries"
                                    },
                                    {
                                        icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                                        bgColor: "bg-[#1037b6]",
                                        title: "Email",
                                        content: siteConstants.email,
                                        subtitle: "",
                                        description: "Quick response guaranteed within 24 hours"
                                    },
                                    {
                                        icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                                        bgColor: "bg-[#e11c09]",
                                        title: "Address",
                                        content: siteConstants.address,
                                        subtitle: "",
                                        description: "Visit us anytime during business hours"
                                    },
                                    {
                                        icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                                        bgColor: "bg-[#1037b6]",
                                        title: "Working Hours",
                                        content: siteConstants.workingHours,
                                        subtitle: "",
                                        description: "Emergency services available 24/7"
                                    }
                                ].map((item, index) => (
                                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#e11c09]/5 to-[#1037b6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <CardContent className="p-4 sm:p-6 relative z-10">
                                            <div className="flex items-start">
                                                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${item.bgColor} rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                                    {item.icon}
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-1 sm:mb-2">{item.title}</h3>
                                                    <p className="text-gray-600 mb-1 font-medium text-sm sm:text-base break-words">{item.content}</p>
                                                    {item.subtitle && <p className="text-gray-600 mb-1 font-medium text-sm sm:text-base break-words">{item.subtitle}</p>}
                                                    <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">{item.description}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section - Enhanced */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#e11c09]/10 to-[#1037b6]/10 text-[#e11c09] px-4 py-2 rounded-full mb-6">
                            <Star className="w-5 h-5" />
                            <span className="text-sm font-medium">Why Choose Us</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Professional Service
                            <span className="block bg-gradient-to-r from-[#e11c09] to-[#1037b6] bg-clip-text text-transparent">
                                You Can Trust
                            </span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {[
                            {
                                icon: <Truck className="w-10 h-10 sm:w-12 sm:h-12 text-[#e11c09]" />,
                                title: "Fast Delivery",
                                description: "Quick and efficient moving services across India"
                            },
                            {
                                icon: <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-[#1037b6]" />,
                                title: "Safe & Secure",
                                description: "Your belongings are protected with comprehensive insurance"
                            },
                            {
                                icon: <Users className="w-10 h-10 sm:w-12 sm:h-12 text-[#e11c09]" />,
                                title: "Expert Team",
                                description: "Trained professionals with years of experience"
                            },
                            {
                                icon: <Award className="w-10 h-10 sm:w-12 sm:h-12 text-[#1037b6]" />,
                                title: "Quality Assured",
                                description: "15+ years of excellence in the moving industry"
                            }
                        ].map((feature, index) => (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2 bg-white overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#e11c09]/5 to-[#1037b6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <CardHeader className="relative z-10 p-4 sm:p-6">
                                    <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <CardTitle className="text-lg sm:text-xl text-gray-900">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="relative z-10 p-4 sm:p-6 pt-0">
                                    <CardDescription className="text-gray-600 text-sm sm:text-base">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section - Enhanced */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#e11c09]/10 to-[#1037b6]/10 text-[#e11c09] px-4 py-2 rounded-full mb-6">
                            <MessageSquare className="w-5 h-5" />
                            <span className="text-sm font-medium">FAQ</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Frequently Asked
                            <span className="block bg-gradient-to-r from-[#e11c09] to-[#1037b6] bg-clip-text text-transparent">
                                Questions
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Get answers to common questions about our moving services.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                        {[
                            {
                                question: "How far in advance should I book your services?",
                                answer: "We recommend booking at least 2-3 weeks in advance for domestic moves and 4-6 weeks for international relocations to ensure availability."
                            },
                            {
                                question: "Do you provide packing materials?",
                                answer: "Yes, we provide all necessary packing materials including boxes, bubble wrap, packing paper, and tape at competitive rates."
                            },
                            {
                                question: "Is my furniture insured during the move?",
                                answer: "Absolutely! All our moves include comprehensive insurance coverage to protect your belongings throughout the entire process."
                            },
                            {
                                question: "Can you handle fragile items?",
                                answer: "Yes, our team is specially trained to handle fragile items with extra care using appropriate packing materials and techniques."
                            },
                            {
                                question: "Do you offer weekend moving services?",
                                answer: "Yes, we offer weekend moving services for office relocations to minimize business disruption."
                            },
                            {
                                question: "What areas do you serve?",
                                answer: "We serve customers across India with our extensive network covering 100+ cities nationwide."
                            }
                        ].map((faq, index) => (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#e11c09]/5 to-[#1037b6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <CardHeader className="relative z-10 p-4 sm:p-6">
                                    <CardTitle className="text-base sm:text-lg text-gray-900 flex items-center">
                                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#e11c09] mr-2 sm:mr-3 flex-shrink-0" />
                                        <span className="break-words">{faq.question}</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="relative z-10 p-4 sm:p-6 pt-0">
                                    <CardDescription className="text-gray-600 text-sm sm:text-base">
                                        {faq.answer}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - Enhanced */}
            <section className="py-20 bg-gradient-to-br from-[#1037b6] via-[#0d2b8f] to-[#e11c09] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 translate-y-1/2"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                        <Star className="w-5 h-5 text-yellow-300 fill-current" />
                        <span className="text-sm font-medium">Get Started Today</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                        Ready to Start Your
                        <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                            Moving Journey?
                        </span>
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Contact us today for a free consultation and quote. Our moving experts are ready to help you plan the perfect relocation experience.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-[#e11c09] hover:bg-[#b81500] text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl group">
                            Get Free Quote
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                        <Button variant="outline" className="border-white text-[#1037b6] hover:bg-white hover:text-[#1037b6] px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 group">
                            Call Now
                            <Phone className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
