import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { siteConstants } from "@/constants/siteConstants";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#bf4705] to-[#d45a0a] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                        Contact Us
                    </h1>
                    <p className="text-xl lg:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
                        Get in touch with us for all your moving needs. Our team is here to help you plan
                        and execute a smooth, stress-free relocation.
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div>
                            <Card className="border-0 shadow-xl">
                                <CardHeader>
                                    <CardTitle className="text-3xl text-gray-900">Send us a Message</CardTitle>
                                    <CardDescription className="text-lg text-gray-600">
                                        Fill out the form below and we'll get back to you within 24 hours.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    First Name *
                                                </label>
                                                <Input
                                                    type="text"
                                                    placeholder="Enter your first name"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bf4705] focus:border-transparent transition-all duration-200"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Last Name *
                                                </label>
                                                <Input
                                                    type="text"
                                                    placeholder="Enter your last name"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bf4705] focus:border-transparent transition-all duration-200"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Email *
                                                </label>
                                                <Input
                                                    type="email"
                                                    placeholder="Enter your email address"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bf4705] focus:border-transparent transition-all duration-200"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Phone *
                                                </label>
                                                <Input
                                                    type="tel"
                                                    placeholder="Enter your phone number"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bf4705] focus:border-transparent transition-all duration-200"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Service Required
                                            </label>
                                            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bf4705] focus:border-transparent transition-all duration-200">
                                                <option value="">Select a service</option>
                                                <option value="packing-moving">Packing and Moving Services</option>
                                                <option value="loading-unloading">Loading and Unloading</option>
                                                <option value="domestic">Domestic Moving Services</option>
                                                <option value="office-relocation">Office Relocations</option>
                                                <option value="car-transport">Car Transportation</option>
                                                <option value="international">International Moving</option>
                                                <option value="storage">Warehousing and Storage</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Moving From
                                            </label>
                                            <Input
                                                type="text"
                                                placeholder="City, State"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bf4705] focus:border-transparent transition-all duration-200"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Moving To
                                            </label>
                                            <Input
                                                type="text"
                                                placeholder="City, State"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bf4705] focus:border-transparent transition-all duration-200"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Moving Date
                                            </label>
                                            <Input
                                                type="date"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bf4705] focus:border-transparent transition-all duration-200"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                rows={4}
                                                placeholder="Tell us about your moving requirements..."
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bf4705] focus:border-transparent transition-all duration-200 resize-none"
                                            ></textarea>
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full bg-[#bf4705] hover:bg-[#a03d04] text-white py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
                                        >
                                            Send Message
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Get In Touch
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    We're here to help you with all your moving needs. Whether you have questions about our services,
                                    need a quote, or want to schedule a consultation, don't hesitate to reach out.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-start">
                                            <div className="w-12 h-12 bg-[#bf4705] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 text-lg mb-2">Phone</h3>
                                                <p className="text-gray-600 mb-1">{siteConstants.phone}</p>
                                                <p className="text-gray-600">{siteConstants.phone2}</p>
                                                <p className="text-sm text-gray-500 mt-2">Available 24/7 for urgent inquiries</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-start">
                                            <div className="w-12 h-12 bg-[#bf4705] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 text-lg mb-2">Email</h3>
                                                <p className="text-gray-600 mb-1">{siteConstants.email}</p>
                                                <p className="text-sm text-gray-500 mt-2">We respond within 2 hours during business hours</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-start">
                                            <div className="w-12 h-12 bg-[#bf4705] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 text-lg mb-2">Office Address</h3>
                                                <p className="text-gray-600 mb-1">{siteConstants.address}</p>
                                                <p className="text-sm text-gray-500 mt-2">Visit us for in-person consultation</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-start">
                                            <div className="w-12 h-12 bg-[#bf4705] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 text-lg mb-2">Business Hours</h3>
                                                <p className="text-gray-600 mb-1">{siteConstants.workingHours}</p>
                                                <p className="text-sm text-gray-500 mt-2">Emergency services available 24/7</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Find Us
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our office is conveniently located in Patna, easily accessible from all parts of the city.
                        </p>
                    </div>

                    <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-6xl mb-4">🗺️</div>
                            <p className="text-gray-600 text-lg">Interactive Map Coming Soon</p>
                            <p className="text-gray-500">We're working on integrating a map to show our exact location</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Find answers to common questions about our services and moving process.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                question: "How much advance notice do you need for a move?",
                                answer: "We recommend booking at least 2-3 weeks in advance for local moves and 4-6 weeks for long-distance relocations. However, we can accommodate urgent moves with shorter notice."
                            },
                            {
                                question: "Do you provide packing materials?",
                                answer: "Yes, we provide all necessary packing materials including boxes, bubble wrap, packing paper, and tape. These are included in our packing service packages."
                            },
                            {
                                question: "Is my furniture insured during the move?",
                                answer: "Absolutely! All our moves include comprehensive insurance coverage. We also offer additional insurance options for high-value items."
                            },
                            {
                                question: "Can you help with furniture assembly?",
                                answer: "Yes, our team can disassemble furniture at the origin and reassemble it at the destination. This service is included in our standard moving packages."
                            },
                            {
                                question: "What areas do you serve?",
                                answer: "We provide services across India with coverage in 100+ cities. We also offer international moving services to major destinations worldwide."
                            },
                            {
                                question: "Do you work on weekends and holidays?",
                                answer: "Yes, we provide moving services 7 days a week, including weekends and holidays. We understand that sometimes moves need to happen outside regular business hours."
                            }
                        ].map((faq, index) => (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                                <CardHeader>
                                    <CardTitle className="text-lg text-gray-900">{faq.question}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-gray-600 text-base">
                                        {faq.answer}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#bf4705]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Start Your Moving Journey?
                    </h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                        Contact us today for a free consultation and quote. Our moving experts are ready to help
                        you plan the perfect relocation experience.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-white text-[#bf4705] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg">
                            Get Free Quote
                        </Button>
                        <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#bf4705] transition-all duration-200">
                            Call Now
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
