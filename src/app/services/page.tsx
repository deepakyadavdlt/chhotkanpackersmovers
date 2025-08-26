import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConstants } from "@/constants/siteConstants";

const services = [
    {
        id: "packing-moving",
        title: "Packing and Moving Services",
        description: "Complete packing and moving solutions for any conceivable kind of goods with cutting-edge methods focused on quality.",
        features: [
            "Professional packing & unpacking",
            "Furniture disassembly & assembly",
            "Safe loading & unloading",
            "Door-to-door service",
            "Insurance coverage",
            "24/7 customer support"
        ],
        price: "Starting from ₹15,000",
        duration: "2-7 days",
        icon: "📦",
        popular: true
    },
    {
        id: "loading-unloading",
        title: "Loading and Unloading",
        description: "Professional loading and unloading services with experienced manpower and proper equipment.",
        features: [
            "Skilled labor team",
            "Proper equipment usage",
            "Safe handling techniques",
            "Insurance coverage",
            "Quick turnaround time",
            "Available 24/7"
        ],
        price: "Starting from ₹5,000",
        duration: "1-2 days",
        icon: "🚛",
        popular: false
    },
    {
        id: "domestic",
        title: "Domestic Moving Services",
        description: "Professional residential relocation services across India with safe and secure handling of your belongings.",
        features: [
            "Local and long-distance moves",
            "Complete home relocation",
            "Furniture protection",
            "Timely delivery",
            "Unpacking assistance",
            "Post-move support"
        ],
        price: "Starting from ₹20,000",
        duration: "3-10 days",
        icon: "🏠",
        popular: true
    },
    {
        id: "office-relocation",
        title: "Office Relocations",
        description: "Comprehensive office moving services including IT equipment, furniture, and sensitive documents.",
        features: [
            "IT equipment handling",
            "Furniture disassembly",
            "Document security",
            "Minimal downtime",
            "Weekend moves available",
            "Post-move setup"
        ],
        price: "Starting from ₹50,000",
        duration: "1-3 days",
        icon: "🏢",
        popular: false
    },
    {
        id: "car-transport",
        title: "Car Transportation",
        description: "Safe and secure vehicle transportation services across India with specialized carriers.",
        features: [
            "Enclosed carriers",
            "Door-to-door service",
            "Insurance coverage",
            "Real-time tracking",
            "Nationwide coverage",
            "Express delivery available"
        ],
        price: "Starting from ₹8,000",
        duration: "2-5 days",
        icon: "🚗",
        popular: false
    },
    {
        id: "international",
        title: "International Moving",
        description: "Worldwide relocation services with customs clearance and international logistics expertise.",
        features: [
            "Customs documentation",
            "International logistics",
            "Container shipping",
            "Air freight options",
            "Destination services",
            "Multilingual support"
        ],
        price: "Starting from ₹1,00,000",
        duration: "15-45 days",
        icon: "✈️",
        popular: false
    },
    {
        id: "storage",
        title: "Warehousing and Storage",
        description: "Secure storage solutions for short-term and long-term needs with climate-controlled options.",
        features: [
            "Climate-controlled units",
            "24/7 security",
            "Flexible terms",
            "Inventory management",
            "Easy access",
            "Insurance options"
        ],
        price: "Starting from ₹2,000/month",
        duration: "Flexible",
        icon: "🏭",
        popular: false
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#bf4705] to-[#d45a0a] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                        Our Services
                    </h1>
                    <p className="text-xl lg:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive moving solutions designed to make your relocation smooth, safe, and stress-free.
                        From local moves to international relocations, we've got you covered.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            What We Offer
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Professional moving services tailored to meet your specific needs.
                            Each service is designed with quality, safety, and customer satisfaction in mind.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <Card key={service.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                <CardHeader className="relative">
                                    {service.popular && (
                                        <Badge className="absolute top-4 right-4 bg-[#bf4705] text-white">
                                            Popular
                                        </Badge>
                                    )}
                                    <div className="text-5xl mb-4">{service.icon}</div>
                                    <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                                    <CardDescription className="text-gray-600 text-base">
                                        {service.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, index) => (
                                                <li key={index} className="flex items-center text-gray-600">
                                                    <svg className="w-4 h-4 text-[#bf4705] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                                        <div>
                                            <p className="text-sm text-gray-500">Starting Price</p>
                                            <p className="font-semibold text-[#bf4705]">{service.price}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Duration</p>
                                            <p className="font-semibold text-gray-900">{service.duration}</p>
                                        </div>
                                    </div>

                                    <Button className="w-full bg-[#bf4705] hover:bg-[#a03d04] text-white py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
                                        Get Quote
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Why Choose {siteConstants.name}?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We stand out from the competition with our commitment to excellence,
                            customer satisfaction, and innovative solutions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: "⭐",
                                title: "15+ Years Experience",
                                description: "Over a decade and a half of expertise in the moving industry"
                            },
                            {
                                icon: "🤝",
                                title: "5000+ Happy Customers",
                                description: "Trusted by thousands of satisfied customers across India"
                            },
                            {
                                icon: "🛡️",
                                title: "100% Insured",
                                description: "Complete insurance coverage for your peace of mind"
                            },
                            {
                                icon: "⏰",
                                title: "24/7 Support",
                                description: "Round-the-clock customer support and emergency services"
                            }
                        ].map((feature, index) => (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                                <CardHeader>
                                    <div className="text-5xl mb-4">{feature.icon}</div>
                                    <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-gray-600 text-base">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            How It Works
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our simple and efficient process ensures your move is smooth and stress-free.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Get Quote",
                                description: "Contact us for a free consultation and detailed quote"
                            },
                            {
                                step: "02",
                                title: "Plan & Schedule",
                                description: "We'll work with you to plan the perfect moving schedule"
                            },
                            {
                                step: "03",
                                title: "Execute Move",
                                description: "Our professional team handles everything with care"
                            },
                            {
                                step: "04",
                                title: "Settle In",
                                description: "We help you settle into your new location smoothly"
                            }
                        ].map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="w-20 h-20 bg-[#bf4705] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-white font-bold text-2xl">{step.step}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#bf4705]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Get Started?
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
                            Contact Us
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
