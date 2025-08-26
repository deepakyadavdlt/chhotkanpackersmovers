import Image from "next/image";
import { siteConstants } from "@/constants/siteConstants";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#bf4705]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#bf4705]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#bf4705]/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-[#bf4705]/10 text-[#bf4705] rounded-full text-sm font-medium">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Trusted by 5000+ Customers
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Professional
                  <span className="text-[#bf4705] block bg-gradient-to-r from-[#bf4705] to-[#d45a0a] bg-clip-text text-transparent">
                    Packers & Movers
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                  Complete packing and moving solutions for any conceivable kind of goods with cutting-edge methods focused on quality.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-[#bf4705] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#a03d04] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <span className="flex items-center justify-center">
                    Get Free Quote
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <button className="group border-2 border-[#bf4705] text-[#bf4705] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#bf4705] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                  <span className="flex items-center justify-center">
                    Our Services
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#bf4705] mb-2">15+</div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#bf4705] mb-2">5000+</div>
                  <div className="text-gray-600 text-sm">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#bf4705] mb-2">100+</div>
                  <div className="text-gray-600 text-sm">Cities Covered</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20 relative overflow-hidden">
                {/* Card Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent"></div>
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="w-28 h-28 bg-gradient-to-br from-[#bf4705] to-[#d45a0a] rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                      <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Why Choose Us?</h3>
                    <p className="text-gray-600">Professional moving services you can trust</p>
                  </div>

                  <div className="space-y-4">
                    {[
                      { icon: "👥", title: "Professional Team", desc: "Experienced & trained professionals" },
                      { icon: "📦", title: "Safe Packing", desc: "Secure & careful handling" },
                      { icon: "⏰", title: "On-Time Delivery", desc: "Punctual & reliable service" },
                      { icon: "🛡️", title: "Fully Insured", desc: "Complete protection coverage" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center p-3 rounded-xl hover:bg-orange-50 transition-colors duration-200 group">
                        <div className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-200">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{item.title}</div>
                          <div className="text-sm text-gray-600">{item.desc}</div>
                        </div>
                        <svg className="w-5 h-5 text-[#bf4705] opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#bf4705] rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#d45a0a] rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive moving solutions to make your relocation smooth and hassle-free
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-[#bf4705] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Packing and Moving Services</h3>
              <p className="text-gray-600 mb-6">
                Complete packing and moving solutions for any conceivable kind of goods with cutting-edge methods focused on quality.
              </p>
              <a href="#" className="text-[#bf4705] font-semibold hover:underline">Learn More →</a>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-[#bf4705] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Loading and Unloading</h3>
              <p className="text-gray-600 mb-6">
                Professional loading and unloading services with experienced manpower and proper equipment.
              </p>
              <a href="#" className="text-[#bf4705] font-semibold hover:underline">Learn More →</a>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-[#bf4705] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Domestic Moving Services</h3>
              <p className="text-gray-600 mb-6">
                Professional residential relocation services across India with safe and secure handling of your belongings.
              </p>
              <a href="#" className="text-[#bf4705] font-semibold hover:underline">Learn More →</a>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-[#bf4705] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Office Relocations</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive office moving services including IT equipment, furniture, and sensitive documents.
              </p>
              <a href="#" className="text-[#bf4705] font-semibold hover:underline">Learn More →</a>
            </div>

            {/* Service Card 5 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-[#bf4705] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Car Transportation</h3>
              <p className="text-gray-600 mb-6">
                Safe and secure vehicle transportation services across India with specialized carriers.
              </p>
              <a href="#" className="text-[#bf4705] font-semibold hover:underline">Learn More →</a>
            </div>

            {/* Service Card 6 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-[#bf4705] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">International Moving</h3>
              <p className="text-gray-600 mb-6">
                Worldwide relocation services with customs clearance and international logistics expertise.
              </p>
              <a href="#" className="text-[#bf4705] font-semibold hover:underline">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About {siteConstants.name}</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {siteConstants.description}
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#bf4705] rounded-full flex-shrink-0 mt-1 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Experienced Team</h3>
                    <p className="text-gray-600">Our skilled professionals ensure safe and efficient handling of your belongings.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#bf4705] rounded-full flex-shrink-0 mt-1 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Quality Service</h3>
                    <p className="text-gray-600">We maintain the highest standards of service quality and customer satisfaction.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#bf4705] rounded-full flex-shrink-0 mt-1 mr-4"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Affordable Pricing</h3>
                    <p className="text-gray-600">Competitive rates without compromising on service quality and safety.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#bf4705] mb-2">5000+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#bf4705] mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#bf4705] mb-2">100+</div>
                  <div className="text-gray-600">Cities Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#bf4705] mb-2">24/7</div>
                  <div className="text-gray-600">Customer Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it - hear from our satisfied customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex text-[#bf4705] mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "I think this is the best of all Movers and packers. All boys did ultimate job either of Patna. All are good and did smart and fantastic job everywhere."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#bf4705] rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  L
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Lalit</div>
                  <div className="text-gray-600 text-sm">Project Manager</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex text-[#bf4705] mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Very reliable and professional service. They handled our office relocation perfectly with minimal disruption to our business operations."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#bf4705] rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  SP
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sunita Patel</div>
                  <div className="text-gray-600 text-sm">Office Relocation</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex text-[#bf4705] mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Outstanding packing service! They packed everything so carefully and nothing was damaged during the long-distance move."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#bf4705] rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  AM
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Amit Mehta</div>
                  <div className="text-gray-600 text-sm">Bangalore to Chennai</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#bf4705]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Move?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Get a free quote today and experience the difference that professional moving services can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#bf4705] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#bf4705] transition-colors">
              Call Now
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Get in touch with us for all your moving needs</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#bf4705] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                    <p className="text-gray-600">{siteConstants.address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#bf4705] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                    <p className="text-gray-600">{siteConstants.phone}</p>
                    <p className="text-gray-600">{siteConstants.phone2}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#bf4705] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                    <p className="text-gray-600">{siteConstants.email}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#bf4705] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Working Hours</h4>
                    <p className="text-gray-600">{siteConstants.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bf4705] focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bf4705] focus:border-transparent" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bf4705] focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bf4705] focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bf4705] focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#bf4705] text-white py-3 rounded-lg font-semibold hover:bg-[#a03d04] transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
