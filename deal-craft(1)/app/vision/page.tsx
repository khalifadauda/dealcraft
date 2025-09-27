import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function VisionPage() {
  return (
    <div className="bg-gray-50 font-sans">
      <Header />

      {/* Vision Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          className="absolute w-full h-full object-cover"
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/35e558c5c8-0c904422828272f8464a.png"
          alt="Nigerian farmers with modern agricultural technology, rural setting with traditional and modern elements, professional photography"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-5 h-full flex flex-col justify-center items-center relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Our Vision</h1>
          <p className="text-xl text-white max-w-2xl text-balance">
            Transforming Nigeria's agricultural sector through innovation and financial inclusion
          </p>
        </div>
      </section>

      {/* Vision Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-green-600 mb-6">Our Vision Statement</h2>
              <p className="text-base mb-4">
                At DealCraft Partners, we envision a transformed agricultural sector where smallholder farmers have
                reliable access to markets, fair prices for their produce, and the financial tools needed to grow their
                businesses.
              </p>
              <p className="text-base mb-4">
                We are committed to creating a more efficient, transparent, and inclusive agricultural value chain that
                contributes to food security, poverty reduction, and economic growth in Nigeria.
              </p>
              <p className="text-base">
                Our vision extends beyond commercial success to creating lasting positive impact on communities,
                improving livelihoods, and contributing to Nigeria's economic development through sustainable
                agricultural practices.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  className="w-full h-[350px] object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f24ecba153-f55ff9b65978d47302fd.png"
                  alt="Nigerian agricultural landscape with farmers using modern technology, green fields with crops, rural setting with traditional and modern elements combined"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-green-600 mb-10 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-handshake text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-base">
                We operate with transparency and honesty in all our dealings with farmers, traders, financial
                institutions, and other stakeholders.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-lightbulb text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-base">
                We continuously seek new and better ways to solve challenges in the agricultural value chain through
                technology and creative thinking.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-users text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Inclusivity</h3>
              <p className="text-base">
                We are committed to creating solutions that work for all stakeholders, especially smallholder farmers
                who have traditionally been underserved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-green-600 mb-10 text-center">Strategic Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="bg-green-600 p-3 rounded-full text-white mr-4 mt-1">
                    <i className="fa-solid fa-money-bill-wave"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Financial Inclusion</h3>
                    <p className="text-base">
                      Enabling access to financial services for underserved agricultural communities through our
                      innovative electronic warehouse receipt system and partnerships with financial institutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="bg-green-600 p-3 rounded-full text-white mr-4 mt-1">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Market Efficiency</h3>
                    <p className="text-base">
                      Creating transparent and efficient markets for agricultural commodities by connecting farmers
                      directly with buyers and providing real-time market information.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="bg-green-600 p-3 rounded-full text-white mr-4 mt-1">
                    <i className="fa-solid fa-leaf"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Sustainable Development</h3>
                    <p className="text-base">
                      Contributing to Nigeria's achievement of key Sustainable Development Goals through our operations
                      and partnerships with local and international organizations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md h-full">
                <h3 className="text-2xl font-bold text-green-600 mb-6">Long-Term Vision</h3>
                <p className="text-base mb-6">
                  By 2030, DealCraft Partners aims to become the leading agricultural commodities platform in West
                  Africa, serving over 100,000 farmers and facilitating transactions worth over ₦10 billion annually.
                </p>
                <div className="mt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3">
                      <i className="fa-solid fa-check text-white text-xs"></i>
                    </div>
                    <span className="text-base">Expand operations to 20 states across Nigeria</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3">
                      <i className="fa-solid fa-check text-white text-xs"></i>
                    </div>
                    <span className="text-base">Develop a network of 500+ certified warehouses</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3">
                      <i className="fa-solid fa-check text-white text-xs"></i>
                    </div>
                    <span className="text-base">Facilitate access to over ₦5 billion in financing for farmers</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3">
                      <i className="fa-solid fa-check text-white text-xs"></i>
                    </div>
                    <span className="text-base">Reduce post-harvest losses by 50% for participating farmers</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3">
                      <i className="fa-solid fa-check text-white text-xs"></i>
                    </div>
                    <span className="text-base">Expand operations to neighboring West African countries</span>
                  </div>
                </div>
                <div className="mt-8">
                  <img
                    className="w-full h-[200px] object-cover rounded-lg"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/054ece0aae-91ef7e451bd9c04cc4fd.png"
                    alt="African farmers using digital technology in fields, showing mobile phones with agricultural apps, professional photography"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Alignment Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-green-600 mb-10 text-center">
            Alignment with Sustainable Development Goals
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-12 text-base">
            Our vision and operations are strategically aligned with several United Nations Sustainable Development
            Goals, demonstrating our commitment to creating positive social and economic impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md flex">
                <div className="w-16 h-16 mr-4 flex-shrink-0">
                  <img
                    className="w-full h-full object-contain"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/13f8f4ce48-b2d3d02df18948eca5e6.png"
                    alt="SDG 1 No Poverty icon"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">SDG 1: No Poverty</h3>
                  <p className="text-base mb-3">
                    Our vision directly addresses poverty reduction by improving farmer incomes through better market
                    access and fair pricing for their commodities.
                  </p>
                  <p className="text-base">
                    By enabling access to finance through our warehouse receipt system, we help farmers invest in their
                    operations and break the cycle of poverty.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex">
                <div className="w-16 h-16 mr-4 flex-shrink-0">
                  <img
                    className="w-full h-full object-contain"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/87ca5ce21e-9f7ef7b33496d8802893.png"
                    alt="SDG 2 Zero Hunger icon"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">SDG 2: Zero Hunger</h3>
                  <p className="text-base mb-3">
                    We envision a Nigeria where food security is enhanced through reduced post-harvest losses and
                    improved agricultural supply chains.
                  </p>
                  <p className="text-base">
                    Our operations help farmers produce more efficiently and get their products to market more
                    effectively, contributing to greater food availability.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md flex">
                <div className="w-16 h-16 mr-4 flex-shrink-0">
                  <img
                    className="w-full h-full object-contain"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/9b78d795c6-62fa92d961d7a28444ed.png"
                    alt="SDG 8 Decent Work and Economic Growth icon"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">SDG 8: Economic Growth</h3>
                  <p className="text-base mb-3">
                    Our vision includes creating jobs and promoting sustainable economic development in agricultural
                    communities across Nigeria.
                  </p>
                  <p className="text-base">
                    By formalizing agricultural trading and creating new opportunities in the value chain, we contribute
                    to inclusive economic growth.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex">
                <div className="w-16 h-16 mr-4 flex-shrink-0">
                  <img
                    className="w-full h-full object-contain"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d286313654-18daf522c34c37c9c0c9.png"
                    alt="SDG 12 Responsible Consumption and Production icon"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">SDG 12: Responsible Consumption</h3>
                  <p className="text-base mb-3">
                    We envision agricultural value chains that minimize waste and promote sustainable production
                    practices throughout Nigeria.
                  </p>
                  <p className="text-base">
                    Our operations focus on reducing post-harvest losses and encouraging responsible resource management
                    in agriculture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision In Action Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-green-600 mb-10 text-center">Our Vision in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/5c88bacc08-e4c0dddb33ab2a2ab064.png"
                  alt="Nigerian farmers using mobile phones to check commodity prices, rural setting, agricultural technology in action"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Market Information System</h3>
                <p className="text-base">
                  Our digital platform provides real-time market information to farmers, helping them make informed
                  decisions about when and where to sell their produce.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/dc29e0c56e-6204796d793e37077898.png"
                  alt="Modern Nigerian warehouse facility storing agricultural commodities, organized storage with technology integration"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Secure Storage Network</h3>
                <p className="text-base">
                  Our expanding network of certified warehouses provides farmers with safe storage for their
                  commodities, reducing post-harvest losses and price volatility.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/00ffe4b6b7-fa3c2749ff40847d8eb3.png"
                  alt="Nigerian farmer receiving financial services in rural setting, mobile banking for agriculture, professional photography"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Financial Inclusion Initiatives</h3>
                <p className="text-base">
                  Our partnerships with financial institutions are bringing banking services to previously underserved
                  agricultural communities across Nigeria.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 bg-green-50 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <img
                  className="w-full h-[250px] object-cover rounded-lg"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/9a1ef8b38f-1ce846cb37d6593f8931.png"
                  alt="Nigerian agricultural community meeting, farmers and business people discussing plans, professional photography"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-green-600 mb-4">Community Engagement</h3>
                <p className="text-base mb-4">
                  Our vision extends beyond business to active community engagement. We regularly conduct farmer
                  education programs, community outreach initiatives, and stakeholder forums to ensure our solutions
                  address real needs.
                </p>
                <p className="text-base">
                  By working closely with agricultural communities, we ensure that our vision remains grounded in the
                  realities of Nigerian farming while pushing forward with innovative solutions that can transform the
                  sector.
                </p>
                <div className="mt-6">
                  <Button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4">
                    Learn About Our Community Programs
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Roadmap Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-green-600 mb-10 text-center">Our Vision Roadmap</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-300 hidden md:block"></div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center md:items-start mb-12 relative">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                    <h3 className="text-xl font-bold mb-2 text-green-600">2023-2024</h3>
                    <h4 className="text-lg font-semibold mb-3">Foundation Building</h4>
                    <p className="text-base">
                      Establish core infrastructure, develop the SecureStore system, and form key partnerships with
                      financial institutions and government agencies.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hidden md:flex">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start mb-12 relative">
                <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hidden md:flex">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                    <h3 className="text-xl font-bold mb-2 text-green-600">2025-2026</h3>
                    <h4 className="text-lg font-semibold mb-3">Scaling Operations</h4>
                    <p className="text-base">
                      Expand warehouse network to 10 states, reach 20,000 farmers, and develop advanced market
                      intelligence tools for agricultural commodities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start mb-12 relative">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                    <h3 className="text-xl font-bold mb-2 text-green-600">2027-2028</h3>
                    <h4 className="text-lg font-semibold mb-3">Innovation & Integration</h4>
                    <p className="text-base">
                      Introduce blockchain technology for full traceability, integrate with international markets, and
                      launch innovative financial products for farmers.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hidden md:flex">
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start relative">
                <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hidden md:flex">
                  <span className="text-white font-bold">4</span>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                    <h3 className="text-xl font-bold mb-2 text-green-600">2029-2030</h3>
                    <h4 className="text-lg font-semibold mb-3">Regional Expansion</h4>
                    <p className="text-base">
                      Expand operations to neighboring West African countries, serve 100,000+ farmers, and establish
                      DealCraft as the leading agricultural platform in the region.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 text-balance">
            Join Us in Transforming Nigerian Agriculture
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8 text-balance">
            Whether you're a farmer, trader, investor, or potential partner, we invite you to be part of our vision for
            a more efficient, inclusive, and sustainable agricultural sector.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button className="bg-white text-green-600 hover:bg-gray-100 font-medium py-3 px-6">Partner With Us</Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-medium py-3 px-6 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
