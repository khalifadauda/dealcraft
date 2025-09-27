import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

export default function SecureStoresPage() {
  return (
    <div className="bg-gray-50 font-sans">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="/modern-nigerian-agricultural-technology-innovation.jpg"
          alt="Modern Nigerian agricultural technology innovation"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-5 h-full flex flex-col justify-center items-center relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">SECURE STORES</h1>
          <p className="text-2xl md:text-3xl font-bold text-white max-w-3xl leading-tight">
            Revolutionary Digital Warehouse Solutions for Nigerian Agriculture
          </p>
        </div>
      </section>

      {/* Main USP Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black text-green-600 mb-8 leading-tight">
                What Makes Us Different
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
                At DealCraft Partners, we've developed a unique approach to commodity trading and agricultural finance
                that addresses the specific challenges facing Nigerian farmers and traders.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                Our innovations are designed to create value for all stakeholders in the agricultural ecosystem while
                promoting sustainable development and financial inclusion.
              </p>
              <div className="space-y-8 mt-8">
                <div className="flex items-start">
                  <div className="bg-green-600 p-3 rounded-full text-white mr-6 mt-1">
                    <i className="fas fa-lightbulb text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-2">Innovative Technology Solutions</h3>
                    <p className="text-lg leading-relaxed">
                      Our proprietary electronic warehouse receipt system transforms stored commodities into tradable
                      assets.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 p-3 rounded-full text-white mr-6 mt-1">
                    <i className="fas fa-handshake text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-2">Integrated Ecosystem</h3>
                    <p className="text-lg leading-relaxed">
                      We connect farmers, traders, financial institutions, and buyers in a seamless network that
                      benefits all participants.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 p-3 rounded-full text-white mr-6 mt-1">
                    <i className="fas fa-users text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-2">Community-Focused Approach</h3>
                    <p className="text-lg leading-relaxed">
                      Our operations are designed to empower local communities and create sustainable economic
                      opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/nigerian-commodity-trading-platform-displaying-mar.jpg"
                  alt="Nigerian commodity trading platform"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SecureStore System Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black text-green-600 mb-8 leading-tight">
                SecureStore: Our Flagship Innovation
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
                The SecureStore electronic warehouse receipt system is at the heart of our value proposition,
                transforming how agricultural commodities are stored, traded, and financed in Nigeria.
              </p>
              <div className="space-y-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center">
                    <div className="text-green-600 text-2xl mr-4">
                      <i className="fas fa-shield-halved"></i>
                    </div>
                    <h3 className="font-black text-lg">Secure Digital Receipts</h3>
                  </div>
                  <p className="text-base mt-3 ml-12 leading-relaxed">
                    Tamper-proof electronic receipts that accurately represent stored commodities
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center">
                    <div className="text-green-600 text-2xl mr-4">
                      <i className="fas fa-money-bill-transfer"></i>
                    </div>
                    <h3 className="font-black text-lg">Collateral for Financing</h3>
                  </div>
                  <p className="text-base mt-3 ml-12 leading-relaxed">
                    Receipts can be used as collateral for loans from partner financial institutions
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center">
                    <div className="text-green-600 text-2xl mr-4">
                      <i className="fas fa-arrow-right-arrow-left"></i>
                    </div>
                    <h3 className="font-black text-lg">Tradable Assets</h3>
                  </div>
                  <p className="text-base mt-3 ml-12 leading-relaxed">
                    Receipts can be bought and sold on our platform, creating liquidity for farmers
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center">
                    <div className="text-green-600 text-2xl mr-4">
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <h3 className="font-black text-lg">Real-time Market Data</h3>
                  </div>
                  <p className="text-base mt-3 ml-12 leading-relaxed">
                    Provides users with current market prices and trends to inform decision-making
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/nigerian-agricultural-worker-using-digital-warehou.jpg"
                  alt="Digital warehouse receipt system on tablet"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Advantages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-black text-green-600 mb-12 text-center leading-tight">
            Our Market Advantages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/modern-warehouse-storing-agricultural-commodities-.jpg"
                  alt="Modern warehouse storing agricultural commodities"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-green-600 text-4xl mb-4">
                  <i className="fas fa-warehouse"></i>
                </div>
                <h3 className="text-2xl font-black mb-4">Strategic Warehouse Network</h3>
                <p className="text-base leading-relaxed">
                  Our warehouses are strategically located across key agricultural regions in Nigeria, reducing
                  transportation costs and ensuring proximity to farmers.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/nigerian-farmers-using-modern-agricultural-technol.jpg"
                  alt="Nigerian farmers with modern agricultural technology"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-green-600 text-4xl mb-4">
                  <i className="fas fa-building-columns"></i>
                </div>
                <h3 className="text-2xl font-black mb-4">Financial Partnerships</h3>
                <p className="text-base leading-relaxed">
                  Our established relationships with leading Nigerian financial institutions provide our users with
                  preferential access to agricultural financing.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/nigerian-commodity-trading-floor-with-traders-exch.jpg"
                  alt="Nigerian commodity trading floor"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-green-600 text-4xl mb-4">
                  <i className="fas fa-globe"></i>
                </div>
                <h3 className="text-2xl font-black mb-4">Market Access</h3>
                <p className="text-base leading-relaxed">
                  Our trading platform connects farmers and traders with local and international buyers, opening new
                  markets and opportunities for Nigerian commodities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-green-600 mb-10 text-center">How We Compare</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="py-4 px-6 text-left">Features</th>
                  <th className="py-4 px-6 text-center">DealCraft</th>
                  <th className="py-4 px-6 text-center">Traditional Commodity Traders</th>
                  <th className="py-4 px-6 text-center">Other Digital Platforms</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Electronic Warehouse Receipts</td>
                  <td className="py-4 px-6 text-center text-green-600">
                    <i className="fas fa-check"></i>
                  </td>
                  <td className="py-4 px-6 text-center text-red-600">
                    <i className="fas fa-xmark"></i>
                  </td>
                  <td className="py-4 px-6 text-center text-yellow-600">Limited</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="py-4 px-6 font-medium">Integrated Financial Services</td>
                  <td className="py-4 px-6 text-center text-green-600">
                    <i className="fas fa-check"></i>
                  </td>
                  <td className="py-4 px-6 text-center text-red-600">
                    <i className="fas fa-xmark"></i>
                  </td>
                  <td className="py-4 px-6 text-center text-yellow-600">Limited</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Quality Assurance Standards</td>
                  <td className="py-4 px-6 text-center text-green-600">
                    <i className="fas fa-check"></i>
                  </td>
                  <td className="py-4 px-6 text-center text-yellow-600">Varies</td>
                  <td className="py-4 px-6 text-center text-yellow-600">Varies</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="py-4 px-6 font-medium">Physical Warehouse Network</td>
                  <td className="py-4 px-6 text-center text-green-600">
                    <i className="fas fa-check"></i>
                  </td>
                  <td className="py-4 px-6 text-center text-green-600">
                    <i className="fas fa-check"></i>
                  </td>
                  <td className="py-4 px-6 text-center text-red-600">
                    <i className="fas fa-xmark"></i>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Market Data & Analytics</td>
                  <td className="py-4 px-6 text-center text-green-600">
                    <i className="fas fa-check"></i>
                  </td>
                  <td className="py-4 px-6 text-center text-red-600">
                    <i className="fas fa-xmark"></i>
                  </td>
                  <td className="py-4 px-6 text-center text-green-600">
                    <i className="fas fa-check"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-green-600 mb-10 text-center">What Our Partners Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "DealCraft's SecureStore system has transformed how we manage our agricultural inventory. The ability to use stored commodities as collateral for financing has significantly improved our cash flow.",
                name: "Ibrahim Olatunji",
                role: "Large-Scale Cassava Farmer",
              },
              {
                quote:
                  "As a financial institution, partnering with DealCraft has allowed us to extend our services to agricultural communities with reduced risk. Their warehouse receipt system provides excellent collateral security.",
                name: "Aisha Mohammed",
                role: "Agricultural Finance Manager, Unity Bank",
              },
              {
                quote:
                  "DealCraft's platform has given our cooperative access to markets we couldn't reach before. The quality assurance standards have helped us command better prices for our produce.",
                name: "Emmanuel Adeyemi",
                role: "Chairman, Osun Farmers' Cooperative",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md relative">
                <div className="text-green-600 text-4xl absolute -top-4 -left-2">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="text-base mb-6 mt-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <Image
                    src={`/professional-nigerian-.jpg?height=48&width=48&query=professional Nigerian ${index % 2 === 0 ? "male" : "female"} testimonial headshot`}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Alignment Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">Aligned With Global Goals</h2>
          <p className="text-center max-w-3xl mx-auto mb-10">
            Our unique approach to agricultural finance and commodity trading supports key Sustainable Development
            Goals:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "No Poverty",
                description:
                  "Our financial inclusion initiatives help lift agricultural communities out of poverty through improved market access and fair pricing.",
              },
              {
                title: "Zero Hunger",
                description:
                  "By reducing post-harvest losses and improving supply chain efficiency, we contribute to food security across Nigeria.",
              },
              {
                title: "Economic Growth",
                description:
                  "Our operations create jobs and economic opportunities throughout the agricultural value chain.",
              },
              {
                title: "Responsible Consumption",
                description:
                  "We promote sustainable production practices and reduce waste throughout the agricultural supply chain.",
              },
            ].map((sdg, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-20 h-20 mx-auto mb-4">
                  <Image
                    src={`/sdg-${index + 1}-icon.jpg?height=80&width=80&query=SDG ${index + 1} ${sdg.title} icon`}
                    alt={`SDG ${index + 1} ${sdg.title} icon`}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold mb-3">{sdg.title}</h3>
                <p className="text-sm">{sdg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-green-600 bg-opacity-10">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-green-600 mb-8 leading-tight">
            Ready to Transform Your Agricultural Business?
          </h2>
          <p className="text-xl max-w-4xl mx-auto mb-10 leading-relaxed font-medium">
            Join thousands of farmers, traders, and financial institutions already benefiting from DealCraft's
            innovative Secure Stores solutions.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="bg-green-600 hover:bg-green-700 text-white font-black py-4 px-10 rounded-md transition text-lg">
              Contact Us Today
            </button>
            <button className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-black py-4 px-10 rounded-md transition text-lg">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
