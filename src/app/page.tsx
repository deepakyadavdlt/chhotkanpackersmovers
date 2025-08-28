import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { siteConstants } from "@/constants/siteConstants";
import { Package, Truck, Home, Building, Car, Globe, Award, Phone, Mail, MapPin, Clock, Star, CheckCircle, Users, Shield, Zap, Heart, Send, ArrowRight, Play, TrendingUp, Target, Headphones } from "lucide-react";
import { bannerImage } from "@/assets/home";
import { max_image, godrej_image, icici_bank_image, infosys_image, IBM_image, alahbad_bank_image } from "@/assets/home/our-clients";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Mobile First Design */}
      <section className="relative bg-gradient-to-b from-[#e11c09] to-[#b81500] text-white min-h-screen overflow-hidden">
        {/* Mobile Layout - Image Above, Text Below */}
        <div className="lg:hidden">
          {/* Mobile Image Section */}
          <div className="relative w-full h-64 sm:h-80">
            <img
              src={bannerImage.src}
              alt="Professional Moving Services"
              className="w-full h-full object-cover object-center"
            />
            {/* Mobile Image Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Floating Elements for Mobile */}

            <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse shadow-lg">
              <Building className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Mobile Text Content */}
          <div className="px-4 sm:px-6 py-8 text-center">
            <div className="space-y-4 max-w-md mx-auto">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Star className="w-4 h-4 text-yellow-300 fill-current" />
                <span className="text-sm font-medium">Trusted by 10,000+ Customers</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                <span className="block">We Make Moving</span>
                <span className="block bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
                  Cheap & Safe
                </span>
              </h1>

              <p className="text-base sm:text-lg text-red-100 leading-relaxed">
                Experience hassle-free journeys with our transport solutions that prioritize your comfort and safety.
              </p>

              <div className="flex flex-col gap-3">
                <Link href="/contact">
                  <Button className="w-full bg-white text-[#e11c09] hover:bg-gray-100 px-6 py-3 text-base font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                    Get A Quote
                  </Button>
                </Link>
                <a href={`tel:${siteConstants.phone}`}>
                  <Button className="w-full bg-[#1037b6] hover:bg-[#0d2b8f] text-white px-6 py-3 text-base font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-[#1037b6] hover:border-[#0d2b8f] flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </Button>
                </a>
              </div>

              {/* Mobile Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { number: "15+", label: "Years Experience" },
                  { number: "10K+", label: "Happy Customers" },
                  { number: "100+", label: "Cities Covered" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-xs text-red-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Original Design */}
        <div className="hidden lg:block">
          {/* Left Section - Text Content with Red Gradient Background */}
          <div className="relative z-20 w-full lg:w-3/4 h-screen flex items-center">
            <div className="px-4 sm:px-6 lg:px-8 lg:pl-16 xl:pl-20 py-20 lg:py-0">
              <div className="space-y-6 lg:space-y-8 max-w-2xl">
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 lg:px-6 py-2 mb-4 lg:mb-6">
                  <Star className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-300 fill-current" />
                  <span className="text-xs lg:text-sm font-medium">Trusted by 10,000+ Customers</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="block">We Make Moving</span>
                  <span className="block bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
                    Cheap & Safe
                  </span>
                </h1>

                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-red-100 leading-relaxed">
                  Experience hassle-free journeys with our transport solutions that prioritize your comfort and safety.
                  Complete packing and moving solutions with cutting-edge methods focused on quality.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-6 lg:mb-8">
                  <Link href="/contact">
                    <Button className="bg-white text-[#e11c09] hover:bg-gray-100 px-6 lg:px-8 xl:px-10 py-2 lg:py-3 xl:py-4 text-sm lg:text-base xl:text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/20">
                      Get A Quote
                    </Button>
                  </Link>
                  <a href={`tel:${siteConstants.phone}`}>
                    <Button className="bg-[#1037b6] hover:bg-[#0d2b8f] text-white px-6 lg:px-8 xl:px-10 py-2 lg:py-3 xl:py-4 text-sm lg:text-base xl:text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-[#1037b6] hover:border-[#0d2b8f] flex items-center space-x-2">
                      Call Now
                    </Button>
                  </a>
                </div>

                {/* Desktop Stats */}
                <div className="grid grid-cols-3 gap-3 lg:gap-4 xl:gap-8 max-w-md">
                  {[
                    { number: "15+", label: "Years Experience" },
                    { number: "10K+", label: "Happy Customers" },
                    { number: "100+", label: "Cities Covered" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-1 lg:mb-2">{stat.number}</div>
                      <div className="text-xs lg:text-sm text-red-100">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Full Height Image with Responsive Diagonal Cut */}
          <div className="absolute top-0 right-0 w-full lg:w-1/2 h-screen">
            {/* Main Image Container - Behind the diagonal cut */}
            <div className="relative w-full h-full z-10">
              <img
                src={bannerImage.src}
                alt="Professional Moving Services"
                className="w-full h-full object-cover object-center"
              />

              {/* Floating Service Icons - Responsive positioning */}
              <div className="absolute bottom-24 right-16 lg:bottom-32 lg:right-20 w-10 h-10 lg:w-14 lg:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce delay-1000 shadow-lg z-30">
                <Car className="w-5 h-5 lg:w-7 lg:h-7 text-white" />
              </div>
              <div className="absolute bottom-16 right-24 lg:bottom-20 lg:right-32 w-12 h-12 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse delay-500 shadow-lg z-30">
                <Building className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </div>

              {/* Floating Stats Cards - Responsive positioning */}
              <div className="absolute top-12 left-4 lg:top-16 lg:left-8 bg-white rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-xl z-30">
                <div className="text-center">
                  <div className="text-lg lg:text-2xl font-bold text-[#e11c09]">15+</div>
                  <div className="text-xs lg:text-sm text-gray-600">Years</div>
                </div>
              </div>
            </div>

            {/* Diagonal Cut Overlay - Only on desktop, positioned much more to the left */}
            <div className="hidden lg:block absolute top-0 left-0 w-full h-full pointer-events-none z-20">
              {/* Diagonal cut using CSS clip-path - much more to the left side */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#e11c09] to-[#b81500]" style={{
                clipPath: 'polygon(0 0, 18% 0, 5% 100%, 0 100%)'
              }}></div>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-white rounded-full -translate-x-1/2 translate-y-1/2"></div>
        </div>
      </section>

      {/* Service Categories Banner */}


      {/* About Us Section - Enhanced */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#e11c09]/10 to-[#1037b6]/10 text-[#e11c09] px-4 py-2 rounded-full">
                <Heart className="w-5 h-5" />
                <span className="text-sm font-medium">About Our Company</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                We are the best
                <span className="block bg-gradient-to-r from-[#e11c09] to-[#e11c09] bg-clip-text text-transparent">
                  moving company
                </span>
                in the world.
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                We endeavor to comprehend what they're going through, what they need, what their price tags are,
                and what means quite a bit to them and their clients.
              </p>

              {/* Key Features Grid */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <CheckCircle className="w-6 h-6 text-[#e11c09]" />, text: "Expertise and Experience" },
                  { icon: <CheckCircle className="w-6 h-6 text-[#1037b6]" />, text: "Customer-Centric Approach" },
                  { icon: <CheckCircle className="w-6 h-6 text-[#e11c09]" />, text: "Quality Assurance" },
                  { icon: <CheckCircle className="w-6 h-6 text-[#1037b6]" />, text: "24/7 Support" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    {feature.icon}
                    <span className="text-gray-700 font-medium text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about">
                  <Button className="bg-gradient-to-r w-full from-[#e11c09] to-[#b81500] hover:from-[#b81500] hover:to-[#e11c09] text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Know About Us
                  </Button>
                </Link>
                <a href={`tel:${siteConstants.phone}`}>
                  <Button variant="outline" className="border-2 w-full border-[#1037b6] text-[#1037b6] hover:bg-[#1037b6] hover:text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300">
                    Call Now
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative">
              {/* Main Image Card */}
              <div className="bg-gradient-to-br from-[#e11c09]/10 to-[#1037b6]/10 rounded-3xl p-4 sm:p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-center">
                    <div className="w-32 h-32  bg-[#e11c09]  rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl">
                      <Award className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Thousands</h3>
                    <p className="text-gray-600 mb-6">
                      Join thousands of satisfied customers who have chosen us for their moving needs.
                    </p>
                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#e11c09]">15+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#1037b6]">10K+</div>
                  <div className="text-sm text-gray-600">Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#e11c09]/10 to-[#1037b6]/10 text-[#e11c09] px-4 py-2 rounded-full mb-4">
              <Package className="w-5 h-5" />
              <span className="text-sm font-medium">Our Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Complete Packing & Moving Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional packing and moving services with cutting-edge methods focused on quality, safety, and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Packing & Moving",
                description: "Professional packing services with high-quality materials to ensure your belongings are protected during transit.",
                icon: <Package className="w-12 h-12 text-white" />,
                color: "from-[#e11c09] to-[#b81500]",
                features: ["Expert Packing", "Quality Materials", "Safe Handling"],
                link: "/services/packing-and-moving"
              },
              {
                title: "Loading & Unloading",
                description: "Specialized loading and unloading services with proper equipment and trained professionals for safe handling.",
                icon: <Truck className="w-12 h-12 text-white" />,
                color: "from-[#1037b6] to-[#0d2b8f]",
                features: ["Professional Team", "Proper Equipment", "Safety Protocols"],
                link: "/services/loading-and-unloading"
              },
              {
                title: "Domestic Moving",
                description: "Reliable domestic moving services across cities with careful planning and execution for stress-free relocation.",
                icon: <Home className="w-12 h-12 text-white" />,
                color: "from-[#e11c09] to-[#b81500]",
                features: ["Local & Long Distance", "Careful Planning", "Stress-Free"],
                link: "/services/domestic-moving"
              },
              {
                title: "Office Relocation",
                description: "Efficient office relocation services with minimal business disruption and professional handling of office equipment.",
                icon: <Building className="w-12 h-12 text-white" />,
                color: "from-[#1037b6] to-[#0d2b8f]",
                features: ["Minimal Disruption", "IT Equipment", "Weekend Moves"],
                link: "/services/office-relocation"
              },
              {
                title: "Car Transport",
                description: "Safe and secure car transportation services with specialized carriers and comprehensive insurance coverage.",
                icon: <Car className="w-12 h-12 text-white" />,
                color: "from-[#e11c09] to-[#b81500]",
                features: ["Specialized Carriers", "Insurance Coverage", "Door-to-Door"],
                link: "/services/car-transport"
              },
              {
                title: "International Moving",
                description: "Comprehensive international moving services with customs clearance and worldwide logistics expertise.",
                icon: <Globe className="w-12 h-12 text-white" />,
                color: "from-[#1037b6] to-[#0d2b8f]",
                features: ["Customs Clearance", "Worldwide Logistics", "Documentation"],
                link: "/services/international-moving"
              },
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 text-base mb-4">
                    {service.description}
                  </CardDescription>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2 justify-center">
                        <div className="flex items-start space-x-2 w-48">
                          <CheckCircle className="w-4 h-4 text-[#e11c09] flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link href={service.link}>
                    <Button className="w-full bg-gradient-to-r from-[#e11c09] to-[#b81500] hover:from-[#b81500] hover:to-[#e11c09] text-white rounded-lg transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center space-x-2">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - New */}
      <section className="py-20 bg-gradient-to-br from-[#1037b6] to-[#0d2b8f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Trusted Mover service</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              All movers and packers that wish to work with us must meet our standard criteria to ensure customers are receiving the highest standards of safe, reliable and quality relocation services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: <Globe className="w-12 h-12 text-blue-200" />, title: "Domestic and International Service" },
              { icon: <Truck className="w-12 h-12 text-blue-200" />, title: "Multi-modal Transport Service" },
              { icon: <Target className="w-12 h-12 text-blue-200" />, title: "End to End Tracking Service system" },
              { icon: <Clock className="w-12 h-12 text-blue-200" />, title: "Dedicated & Time Bound deliveries" }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button className="bg-[#e11c09] hover:bg-[#b81500] text-white px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#e11c09]/10 to-[#1037b6]/10 text-[#e11c09] px-4 py-2 rounded-full mb-4">
              <Star className="w-5 h-5" />
              <span className="text-sm font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">The {siteConstants.name} Advantage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine experience, expertise, and dedication to deliver exceptional moving services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12 text-[#e11c09]" />,
                title: "Expert Team",
                description: "Trained professionals with years of experience in moving and packing",
                color: "from-[#e11c09]/10 to-[#e11c09]/5"
              },
              {
                icon: <Shield className="w-12 h-12 text-[#1037b6]" />,
                title: "Fully Insured",
                description: "Complete protection for your belongings during transit",
                color: "from-[#1037b6]/10 to-[#1037b6]/5"
              },
              {
                icon: <Zap className="w-12 h-12 text-[#e11c09]" />,
                title: "Fast & Efficient",
                description: "Quick turnaround times without compromising on quality",
                color: "from-[#e11c09]/10 to-[#e11c09]/5"
              },
              {
                icon: <Heart className="w-12 h-12 text-[#1037b6]" />,
                title: "Customer First",
                description: "Your satisfaction is our top priority in everything we do",
                color: "from-[#1037b6]/10 to-[#1037b6]/5"
              }
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
                <CardHeader>
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#e11c09]/10 to-[#1037b6]/10 text-[#e11c09] px-4 py-2 rounded-full mb-4">
              <Star className="w-5 h-5" />
              <span className="text-sm font-medium">Customer Feedback</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">We love hearing feedback from our customers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of highly trained and experienced movers takes pride in delivering top-notch service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Lalit",
                location: "Customer",
                text: "I think this is the best of all Movers and Packers. All boys did an ultimate job in Patna. They were efficient, polite, and handled everything with care. From start to finish, they made the process smooth, stress-free, and truly professional. The way they packed fragile items, managed heavy furniture, and coordinated the move was simply excellent. I would highly recommend them to anyone looking for reliable movers.",
                rating: 5,
                avatar: "LM"
              },
              {
                name: "Sachin",
                location: "Customer",
                text: "All the service men who came for packing did an excellent job. Very patient, thorough and calm. Their calmness made my parents calm in the hour of constant stress. The packing was meticulous, the moving was well-organized, and everything arrived safely on time without any issue at all. They not only handled things professionally but also showed genuine care for our belongings. ",
                rating: 5,
                avatar: "SD"
              },
              {
                name: "Ankita",
                location: "Customer",
                text: "Chhotkan Packers Movers made my moving experience fantastic! I used their moving services and found they were more reliable than I expected. Everything was packed and moved safely, and the goods were delivered timely without hassles. Their team was courteous, supportive, and truly went above and beyond throughout the shifting. They kept me updated at every stage.",
                rating: 5,
                avatar: "AD"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">"{testimonial.text}"</p>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12  bg-[#e11c09]  rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#e11c09]/10 to-[#1037b6]/10 text-[#e11c09] px-4 py-2 rounded-full mb-4">
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">Our Clients</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Trusted by Leading Companies</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to serve some of the most respected brands and organizations across India.
            </p>
          </div>

          {/* Clients Carousel */}
          <div className="relative max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4 py-2 px-2 ">
                {[
                  max_image,
                  godrej_image,
                  icici_bank_image,
                  infosys_image,
                  IBM_image,
                  alahbad_bank_image
                ].map((image, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 p-4 h-24 md:h-28 lg:h-32">
                      <div className="w-full h-full  flex items-center justify-center">
                        <img
                          src={image.src}
                          alt={`Client ${index + 1}`}
                          className="max-w-full max-h-full object-contain transition-all duration-300  "
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation Buttons */}
              <CarouselPrevious className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300" />
              <CarouselNext className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Contact Section with Form */}
      <section className="py-20 bg-gradient-to-br from-[#1037b6] to-[#0d2b8f] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Contact us today for a free consultation and quote. Our team is ready to help you with your moving needs.
            </p>
          </div>

          {/* Contact Form and Info Grid */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 mb-16 w-full">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 overflow-hidden w-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">Get Your Free Quote</h3>
              <form className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">Your Name</label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/90 border-0 rounded-lg focus:ring-2 focus:ring-[#e11c09] focus:bg-white text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">Your Email</label>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/90 border-0 rounded-lg focus:ring-2 focus:ring-[#e11c09] focus:bg-white text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">Your Phone Number</label>
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/90 border-0 rounded-lg focus:ring-2 focus:ring-[#e11c09] focus:bg-white text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">Move From</label>
                  <Input
                    type="text"
                    placeholder="City, State"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/90 border-0 rounded-lg focus:ring-2 focus:ring-[#e11c09] focus:bg-white text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">Move To</label>
                  <Input
                    type="text"
                    placeholder="City, State"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/90 border-0 rounded-lg focus:ring-2 focus:ring-[#e11c09] focus:bg-white text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">Message</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your moving requirements"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/90 border-0 rounded-lg focus:ring-2 focus:ring-[#e11c09] focus:bg-white text-gray-900 placeholder-gray-500 resize-none text-sm sm:text-base"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#e11c09] to-[#b81500] hover:from-[#b81500] hover:to-[#e11c09] text-white py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Send Message & Get Quote</span>
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Get In Touch</h3>

              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    icon: <Phone className="w-6 h-6 text-[#e11c09]" />,
                    title: "Phone",
                    value: siteConstants.phone,
                    value2: siteConstants.phone2,
                    description: "Available 24/7 for urgent inquiries"
                  },
                  {
                    icon: <Mail className="w-6 h-6 text-[#1037b6]" />,
                    title: "Email",
                    value: siteConstants.email,
                    description: "Quick response guaranteed within 24 hours"
                  },
                  {
                    icon: <MapPin className="w-6 h-6 text-[#e11c09]" />,
                    title: "Address",
                    value: siteConstants.address,
                    description: "Visit us anytime during business hours"
                  },
                  {
                    icon: <Clock className="w-6 h-6 text-[#1037b6]" />,
                    title: "Working Hours",
                    value: siteConstants.workingHours,
                    description: "Emergency services available 24/7"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-white text-base sm:text-lg mb-1 sm:mb-2">{item.title}</h4>
                      <p className="text-blue-100 mb-1 text-sm sm:text-base break-words">{item.value}</p>
                      {item.value2 && <p className="text-blue-100 mb-1 text-sm sm:text-base break-words">{item.value2}</p>}
                      <p className="text-blue-200 text-xs sm:text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact CTA */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 text-center">
                <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Need Immediate Assistance?</h4>
                <p className="text-blue-100 mb-3 sm:mb-4 text-sm sm:text-base">Call us now for urgent moving requirements</p>
                <a href={`tel:${siteConstants.phone}`}>
                  <Button className="bg-[#e11c09] hover:bg-[#b81500] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base">
                    Call Now: {siteConstants.phone}
                  </Button>
                </a>
              </div>
            </div>
          </div>



          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 w-full">
            <Link href="/contact">
              <Button className="bg-[#e11c09] w-full hover:bg-[#b81500] text-white px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Get Free Quote
              </Button>
            </Link>
            <a href={`tel:${siteConstants.phone}`}>
              <Button className="bg-white w-full   text-[#1037b6] hover:bg-gray-100 px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-white hover:border-gray-100">
                Call Now
              </Button>
            </a>
          </div>

          <div className="text-center w-full">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-200" />
              <span className="text-blue-100 font-medium">
                <strong>Working Hours:</strong> {siteConstants.workingHours}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
