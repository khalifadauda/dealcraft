import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OperationsPage() {
  return (
    <div className="bg-gray-50 font-sans">
      <Header />

      {/* Operations Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          className="absolute w-full h-full object-cover"
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/314ba70ac8-05ec94bd2bee4cdc30fe.png"
          alt="modern Nigerian agricultural warehouse with electronic systems, workers using tablets for inventory management, professional photography"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-5 h-full flex flex-col justify-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Our Operational Excellence</h1>
          <p className="text-xl text-white max-w-2xl text-balance">
            Detailed insight into our innovative processes and electronic warehouse receipt system
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-5">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-green-600">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-500">Our Operations</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-green-600 font-medium">Operational Details</span>
          </div>
        </div>
      </div>

      {/* SecureStore Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-green-600 mb-6">
                SecureStore: Electronic Warehouse Receipt System
              </h2>
              <p className="text-base mb-4">
                Our flagship innovation, the SecureStore electronic warehouse receipt system, is revolutionizing
                agricultural finance in Nigeria by creating a secure, transparent, and efficient platform for farmers to
                monetize their stored commodities.
              </p>
              <p className="text-base mb-4">
                This digital solution transforms physical commodities into tradable electronic receipts, enabling
                farmers to access finance without selling their produce during low-price periods, while providing
                financial institutions with secure collateral for agricultural loans.
              </p>
              <div className="mt-6">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3">
                  Learn More About SecureStore
                  <i className="fa-solid fa-arrow-right ml-2"></i>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  className="w-full h-[350px] object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7dff807283-a0c3edf5bb3ffe6263ad.png"
                  alt="Nigerian farmer receiving electronic warehouse receipt on tablet, digital agricultural finance system in action, professional photography"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-green-600 mb-10 text-center">How SecureStore Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/dd595abfca-2bcc23ceb8aecce634de.png"
                  alt="Nigerian farmer delivering grain commodities to modern warehouse, agricultural produce quality check, professional photography"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Commodity Deposit & Assessment</h3>
                <p className="text-base">
                  Farmers deposit their commodities at our certified warehouses where they undergo rigorous quality
                  assessment and grading according to national standards.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/a7bb5ed241-8eba8c784f205de94b43.png"
                  alt="digital receipt generation on tablet device in Nigerian warehouse, electronic documentation system, professional photography"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Electronic Receipt Generation</h3>
                <p className="text-base">
                  Our system generates secure electronic warehouse receipts that detail the quantity, quality, and value
                  of the stored commodities, with unique identifiers and security features.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/701fdfea07-4ebc89e2fa7c2cdfb84e.png"
                  alt="Nigerian farmer meeting with bank official using tablet to show electronic receipt as collateral, agricultural finance, professional photography"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Financial Access & Trading</h3>
                <p className="text-base">
                  Farmers can use these electronic receipts as collateral for loans from partner financial institutions
                  or trade them on our platform for immediate liquidity.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-green-600 mb-6">Key System Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex">
                <div className="mr-4 text-green-600 text-3xl">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Blockchain Security</h4>
                  <p className="text-base">
                    Our system utilizes blockchain technology to ensure the integrity and immutability of warehouse
                    receipts, preventing fraud and unauthorized modifications.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 text-green-600 text-3xl">
                  <i className="fa-solid fa-mobile-screen-button"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Mobile Accessibility</h4>
                  <p className="text-base">
                    Farmers can access their electronic receipts and manage transactions through our mobile application,
                    designed for ease of use even in areas with limited connectivity.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 text-green-600 text-3xl">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Real-time Market Data</h4>
                  <p className="text-base">
                    The system provides real-time market prices and trends, enabling farmers to make informed decisions
                    about when to sell their commodities for maximum profit.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 text-green-600 text-3xl">
                  <i className="fa-solid fa-building-columns"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Financial Institution Integration</h4>
                  <p className="text-base">
                    Direct integration with partner banks and microfinance institutions streamlines the loan application
                    process using warehouse receipts as collateral.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warehouse Network Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-green-600 mb-10 text-center">Our Warehouse Network</h2>

          <div className="flex flex-col md:flex-row-reverse gap-10 items-center mb-12">
            <div className="md:w-1/2">
              <p className="text-base mb-4">
                DealCraft operates a strategic network of certified warehouses across Nigeria's key agricultural
                regions, ensuring farmers have convenient access to quality storage facilities.
              </p>
              <p className="text-base mb-4">
                Our warehouses are equipped with modern preservation technology to maintain commodity quality, reducing
                post-harvest losses and ensuring the value of stored produce is maintained over time.
              </p>
              <p className="text-base">
                Each facility is managed by trained professionals who ensure proper handling, storage, and security of
                all commodities, giving farmers and financial institutions confidence in the system.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">12+</div>
                  <p className="text-sm">Warehouse Locations</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">50,000MT</div>
                  <p className="text-sm">Storage Capacity</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">8</div>
                  <p className="text-sm">Agricultural States</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                  <p className="text-sm">Security Monitoring</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  className="w-full h-[400px] object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d001eabcfc-19548ade3f7de941ed8b.png"
                  alt="map of Nigeria showing warehouse network locations with pins and connections, agricultural distribution system, professional graphic"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-green-600 mb-6">Warehouse Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg">
                <div className="text-green-600 text-3xl mb-4 text-center">
                  <i className="fa-solid fa-temperature-low"></i>
                </div>
                <h4 className="text-lg font-bold mb-2 text-center">Climate Control</h4>
                <p className="text-base text-center">
                  Temperature and humidity monitoring systems to maintain optimal storage conditions
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <div className="text-green-600 text-3xl mb-4 text-center">
                  <i className="fa-solid fa-bug-slash"></i>
                </div>
                <h4 className="text-lg font-bold mb-2 text-center">Pest Management</h4>
                <p className="text-base text-center">
                  Integrated pest management systems to protect stored commodities
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <div className="text-green-600 text-3xl mb-4 text-center">
                  <i className="fa-solid fa-lock"></i>
                </div>
                <h4 className="text-lg font-bold mb-2 text-center">Security Systems</h4>
                <p className="text-base text-center">24/7 surveillance and access control to ensure commodity safety</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Platform Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-green-600 mb-6">Integrated Trading Platform</h2>
              <p className="text-base mb-4">
                Complementing our SecureStore system is our digital commodity trading platform that connects farmers
                directly with buyers, eliminating intermediaries and ensuring fair pricing.
              </p>
              <p className="text-base mb-4">
                The platform allows holders of electronic warehouse receipts to list their commodities for sale, with
                transparent pricing based on current market conditions and quality grades.
              </p>
              <p className="text-base">
                Buyers can search for specific commodities, compare prices and quality, and make purchases with secure
                payment processing, streamlining the entire trading process.
              </p>

              <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold mb-4">Platform Features:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fa-solid fa-check text-green-600 mr-3 mt-1"></i>
                    <span>Real-time market price updates and historical trends</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check text-green-600 mr-3 mt-1"></i>
                    <span>Secure payment processing with escrow protection</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check text-green-600 mr-3 mt-1"></i>
                    <span>Quality verification and dispute resolution mechanisms</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check text-green-600 mr-3 mt-1"></i>
                    <span>Logistics coordination for commodity delivery</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  className="w-full h-[400px] object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f65b776429-2d463cf0fc32b8d241c2.png"
                  alt="digital interface of agricultural commodity trading platform with price charts and product listings, Nigerian context, professional screenshot"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Partnerships Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-green-600 mb-10 text-center">Financial Partnerships</h2>
          <p className="text-center max-w-3xl mx-auto mb-12 text-base">
            We have established strategic partnerships with leading financial institutions to provide farmers with
            access to credit using their electronic warehouse receipts as collateral.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Loan Products</h3>
                <p className="text-base mb-4">
                  Our partner banks offer specialized loan products for farmers with electronic warehouse receipts, with
                  favorable terms including:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <i className="fa-solid fa-circle-check text-green-600 mr-3 mt-1"></i>
                    <span>Up to 70% loan-to-value ratio on stored commodities</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-circle-check text-green-600 mr-3 mt-1"></i>
                    <span>Competitive interest rates below market average</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-circle-check text-green-600 mr-3 mt-1"></i>
                    <span>Flexible repayment terms aligned with harvest cycles</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-circle-check text-green-600 mr-3 mt-1"></i>
                    <span>Streamlined application process with minimal documentation</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-gray-300">
                  <p className="font-medium">Average processing time: 3-5 business days</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Partner Institutions</h3>
                <p className="text-base mb-4">
                  We work with a diverse range of financial partners to ensure farmers have multiple options for
                  financing:
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white p-4 rounded-lg flex items-center justify-center h-24">
                    <p className="font-medium text-center">Commercial Banks</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg flex items-center justify-center h-24">
                    <p className="font-medium text-center">Microfinance Institutions</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg flex items-center justify-center h-24">
                    <p className="font-medium text-center">Agricultural Development Banks</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg flex items-center justify-center h-24">
                    <p className="font-medium text-center">Fintech Lenders</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-300">
                  <p className="font-medium">Total financing facilitated: ₦2.5 billion in 2022</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                    alt="Bank Partner"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-3/4">
                <p className="text-lg italic mb-4">
                  "DealCraft's electronic warehouse receipt system has transformed agricultural lending in Nigeria. The
                  security and transparency of their platform has allowed us to extend financing to farmers we
                  previously couldn't serve, with minimal risk."
                </p>
                <p className="font-bold">Ibrahim Olatunji</p>
                <p className="text-sm">Head of Agricultural Finance, First Bank Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-green-600 mb-10 text-center">Impact & Results</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">30%</div>
              <p className="text-xl font-medium mb-4">Average Income Increase</p>
              <p className="text-base">
                Farmers using our system have seen significant income growth by selling at optimal market prices
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">₦4.5B</div>
              <p className="text-xl font-medium mb-4">Total Trading Volume</p>
              <p className="text-base">Value of commodities traded through our platform in the last fiscal year</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">12,000+</div>
              <p className="text-xl font-medium mb-4">Farmers Empowered</p>
              <p className="text-base">Small and medium-scale farmers benefiting from our warehouse receipt system</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-green-600 mb-6">Success Stories</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex">
                <div className="mr-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-9.jpg"
                      alt="Farmer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Adamu Ibrahim, Maize Farmer</h4>
                  <p className="text-base mb-3">
                    "I used to sell my maize immediately after harvest when prices were lowest. With SecureStore, I
                    stored my harvest and received a loan to cover my immediate needs. Three months later, I sold at 40%
                    higher prices."
                  </p>
                  <p className="text-sm text-gray-600">Kaduna State, Nigeria</p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"
                      alt="Farmer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Blessing Audu, Sorghum Farmer</h4>
                  <p className="text-base mb-3">
                    "The trading platform is a game-changer. I was able to connect with a large buyer in Lagos and sell
                    my sorghum at a fair price without a middleman. The logistics support made the delivery process
                    seamless."
                  </p>
                  <p className="text-sm text-gray-600">Benue State, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Partner with DealCraft Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-balance">
            Whether you're a farmer seeking to maximize your income, a financial institution looking for secure
            agricultural collateral, or a buyer sourcing quality commodities, we have a solution for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 font-bold">
              Contact Us
              <i className="fa-solid fa-phone-volume ml-2"></i>
            </Button>
            <Button
              variant="outline"
              className="border border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 font-bold bg-transparent"
            >
              Explore Our Solutions
              <i className="fa-solid fa-arrow-right-to-bracket ml-2"></i>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
