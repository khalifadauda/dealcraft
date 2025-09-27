import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          className="absolute w-full h-full object-cover"
          src="/aerial-view-of-nigerian-farmland-with-diverse-crop.jpg"
          alt="Aerial view of Nigerian farmland with diverse crops and green fields"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-5 h-full flex flex-col justify-center items-center relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            DealCraft Partners Nigeria Ltd
          </h1>
          <p className="text-xl text-white max-w-2xl text-balance">
            Revolutionizing commodity trading and agricultural finance in Nigeria
          </p>
          <div className="mt-8">
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6">
              <Link href="#company-overview">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section id="company-overview" className="py-16 bg-white">
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-green-600 mb-6">Company Overview</h2>
              <p className="text-base mb-4">
                DealCraft Partners Nigeria Ltd is a pioneering commodity trading and agricultural finance company based
                in Nigeria. We specialize in creating innovative solutions that bridge the gap between farmers, traders,
                and financial institutions.
              </p>
              <p className="text-base mb-4">
                Founded with a vision to transform the agricultural commodities sector, we leverage technology and
                financial expertise to create sustainable value chains that benefit all stakeholders in the ecosystem.
              </p>
              <p className="text-base">
                Our operations span across multiple states in Nigeria, working with thousands of farmers and traders to
                improve efficiency, reduce post-harvest losses, and increase access to finance through our innovative
                electronic warehouse receipt system.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  className="w-full h-[350px] object-cover"
                  src="/nigerian-commodity-trading-floor-with-traders-exch.jpg"
                  alt="Nigerian commodity trading floor with traders exchanging agricultural products"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-green-600 mb-6">Our Vision</h2>
              <p className="text-base mb-4">
                At DealCraft Partners, we envision a transformed agricultural sector where smallholder farmers have
                reliable access to markets, fair prices for their produce, and the financial tools needed to grow their
                businesses.
              </p>
              <p className="text-base mb-4">
                We are committed to creating a more efficient, transparent, and inclusive agricultural value chain that
                contributes to food security, poverty reduction, and economic growth in Nigeria.
              </p>
              <div className="mt-6 flex flex-col space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-600 p-2 rounded-full text-white mr-4 mt-1">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Financial Inclusion</h3>
                    <p className="text-base">
                      Enabling access to financial services for underserved agricultural communities
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 p-2 rounded-full text-white mr-4 mt-1">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Market Efficiency</h3>
                    <p className="text-base">Creating transparent and efficient markets for agricultural commodities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 p-2 rounded-full text-white mr-4 mt-1">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Sustainable Development</h3>
                    <p className="text-base">
                      Contributing to Nigeria's achievement of key Sustainable Development Goals
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  className="w-full h-[400px] object-cover"
                  src="/nigerian-farmers-using-modern-agricultural-technol.jpg"
                  alt="Nigerian farmers using modern agricultural technology in a rural setting"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Operations Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-green-600 mb-10 text-center">Our Operations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/modern-warehouse-storing-agricultural-commodities-.jpg"
                  alt="Modern warehouse storing agricultural commodities in Nigeria"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Commodity Storage</h3>
                <p className="text-base">
                  We operate state-of-the-art storage facilities across key agricultural regions in Nigeria, helping
                  farmers reduce post-harvest losses and preserve the quality of their produce.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/nigerian-agricultural-worker-using-digital-warehou.jpg"
                  alt="Nigerian agricultural worker using digital warehouse receipt system on a tablet"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">SecureStore System</h3>
                <p className="text-base">
                  Our innovative electronic warehouse receipt system allows farmers to use stored commodities as
                  collateral for loans, improving access to finance and enabling better cash flow management.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/nigerian-commodity-trading-platform-displaying-mar.jpg"
                  alt="Nigerian commodity trading platform displaying market data on digital screens"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Market Facilitation</h3>
                <p className="text-base">
                  We connect farmers with buyers through our trading platform, ensuring fair prices and transparent
                  transactions while providing valuable market intelligence to all participants.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-green-600 mb-6">Our Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="font-semibold mb-2">Commodity Deposit</h4>
                <p className="text-sm">Farmers deposit their commodities in our certified warehouses</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h4 className="font-semibold mb-2">Quality Assessment</h4>
                <p className="text-sm">Commodities undergo quality testing and grading</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h4 className="font-semibold mb-2">Receipt Issuance</h4>
                <p className="text-sm">Electronic warehouse receipts are issued to farmers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h4 className="font-semibold mb-2">Financial Access</h4>
                <p className="text-sm">Receipts can be used as collateral for loans or sold on our platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Outcomes Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-green-600 mb-10 text-center">Target Outcomes</h2>
          <p className="text-center max-w-3xl mx-auto mb-12 text-base">
            Our operations are aligned with several United Nations Sustainable Development Goals, demonstrating our
            commitment to creating positive social and economic impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4">
                <img
                  className="w-full h-full object-contain"
                  src="/un-sdg-1-no-poverty-icon.jpg"
                  alt="UN SDG 1 No Poverty icon"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">SDG 1: No Poverty</h3>
              <p className="text-base">Improving farmer incomes through better market access and fair pricing</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4">
                <img
                  className="w-full h-full object-contain"
                  src="/un-sdg-2-zero-hunger-icon.jpg"
                  alt="UN SDG 2 Zero Hunger icon"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">SDG 2: Zero Hunger</h3>
              <p className="text-base">
                Enhancing food security by reducing post-harvest losses and improving supply chains
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4">
                <img
                  className="w-full h-full object-contain"
                  src="/un-sdg-8-decent-work-and-economic-growth-icon.jpg"
                  alt="UN SDG 8 Decent Work and Economic Growth icon"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">SDG 8: Economic Growth</h3>
              <p className="text-base">
                Creating jobs and promoting sustainable economic development in agricultural communities
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4">
                <img
                  className="w-full h-full object-contain"
                  src="/un-sdg-12-responsible-consumption-and-production-i.jpg"
                  alt="UN SDG 12 Responsible Consumption and Production icon"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">SDG 12: Responsible Consumption</h3>
              <p className="text-base">
                Promoting sustainable production practices and reducing waste in agricultural value chains
              </p>
            </div>
          </div>
          <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-green-600 mb-6">Key Performance Indicators</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">5,000+</div>
                <p className="text-base">Farmers supported across Nigeria</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">₦500M+</div>
                <p className="text-base">Value of commodities traded annually</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">30%</div>
                <p className="text-base">Reduction in post-harvest losses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-green-600 mb-10 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img
                  src="/professional-nigerian-business-executive-ceo-in-su.jpg"
                  alt="Oluwaseun Adebayo, Chief Executive Officer of DealCraft Partners Nigeria Ltd"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Oluwaseun Adebayo</h3>
                <p className="text-green-600 font-medium mb-3">Chief Executive Officer</p>
                <p className="text-base mb-4">
                  Over 15 years of experience in agricultural finance and commodity trading across West Africa.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-700 hover:text-green-600 transition">
                    <i className="fa-brands fa-linkedin text-lg"></i>
                  </a>
                  <a href="#" className="text-gray-700 hover:text-green-600 transition">
                    <i className="fa-brands fa-twitter text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img
                  src="/professional-nigerian-business-executive-coo-woman.jpg"
                  alt="Amina Ibrahim, Chief Operations Officer of DealCraft Partners Nigeria Ltd"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Amina Ibrahim</h3>
                <p className="text-green-600 font-medium mb-3">Chief Operations Officer</p>
                <p className="text-base mb-4">
                  Specialist in supply chain management with expertise in agricultural logistics and warehouse
                  operations.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-700 hover:text-green-600 transition">
                    <i className="fa-brands fa-linkedin text-lg"></i>
                  </a>
                  <a href="#" className="text-gray-700 hover:text-green-600 transition">
                    <i className="fa-brands fa-twitter text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img
                  src="/professional-nigerian-business-executive-cto-man-i.jpg"
                  alt="Chukwudi Okonkwo, Chief Technology Officer of DealCraft Partners Nigeria Ltd"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Chukwudi Okonkwo</h3>
                <p className="text-green-600 font-medium mb-3">Chief Technology Officer</p>
                <p className="text-base mb-4">
                  Technology innovator with a background in fintech and agricultural technology solutions.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-700 hover:text-green-600 transition">
                    <i className="fa-brands fa-linkedin text-lg"></i>
                  </a>
                  <a href="#" className="text-gray-700 hover:text-green-600 transition">
                    <i className="fa-brands fa-twitter text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Selling Propositions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-green-600 mb-10 text-center">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="grid grid-cols-1 gap-8">
                <div className="flex">
                  <div className="mr-4 text-green-600 text-3xl">
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Secure and Transparent</h3>
                    <p className="text-base">
                      Our SecureStore electronic warehouse receipt system uses advanced technology to ensure all
                      transactions are secure, traceable, and transparent.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 text-green-600 text-3xl">
                    <i className="fa-solid fa-handshake"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Strong Partnerships</h3>
                    <p className="text-base">
                      We have established strategic partnerships with financial institutions, government agencies, and
                      international organizations to create a robust ecosystem.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 text-green-600 text-3xl">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Data-Driven Approach</h3>
                    <p className="text-base">
                      We leverage market data and analytics to provide valuable insights to farmers, traders, and
                      financial institutions, enabling better decision-making.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="w-full h-[400px] object-cover"
                src="/nigerian-agricultural-technology-innovation-in-a-m.jpg"
                alt="Nigerian agricultural technology innovation in a modern farming setting"
              />
            </div>
          </div>
          <div className="mt-12 bg-green-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">Our Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-green-600 text-3xl mb-4 text-center">
                  <i className="fa-solid fa-users"></i>
                </div>
                <h4 className="text-lg font-bold mb-2 text-center">Community Development</h4>
                <p className="text-base text-center">
                  Creating economic opportunities in rural communities across Nigeria
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-green-600 text-3xl mb-4 text-center">
                  <i className="fa-solid fa-seedling"></i>
                </div>
                <h4 className="text-lg font-bold mb-2 text-center">Sustainable Agriculture</h4>
                <p className="text-base text-center">
                  Promoting sustainable farming practices that protect the environment
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-green-600 text-3xl mb-4 text-center">
                  <i className="fa-solid fa-money-bill-trend-up"></i>
                </div>
                <h4 className="text-lg font-bold mb-2 text-center">Financial Inclusion</h4>
                <p className="text-base text-center">
                  Bringing financial services to previously underserved agricultural communities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-green-600 mb-10 text-center">Contact Us</h2>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md h-full">
                <h3 className="text-2xl font-bold text-green-600 mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-green-600 text-xl mr-4 mt-1">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Head Office</h4>
                      <p className="text-base">15 Adeola Odeku Street, Victoria Island, Lagos, Nigeria</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-green-600 text-xl mr-4 mt-1">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-base">+234 (0) 123 456 7890</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-green-600 text-xl mr-4 mt-1">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-base">info@dealcraftpartners.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-green-600 text-xl mr-4 mt-1">
                      <i className="fa-solid fa-clock"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Business Hours</h4>
                      <p className="text-base">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="font-semibold mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#" className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-green-600 mb-6">Send Us a Message</h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
