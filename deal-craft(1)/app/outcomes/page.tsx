import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function OutcomesPage() {
  return (
    <div className="bg-gray-50 font-sans">
      <Header />

      {/* Page Title Section */}
      <section className="bg-green-600 text-white py-12">
        <div className="container mx-auto px-5">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Sustainable Development Goals</h1>
          <p className="text-lg max-w-3xl text-balance">
            Our expected outcomes and contributions towards creating a more sustainable and equitable agricultural
            ecosystem in Nigeria.
          </p>
        </div>
      </section>

      {/* SDG Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-green-600 mb-6">Our Commitment to Sustainability</h2>
              <p className="text-base mb-4">
                At DealCraft Partners, we believe that business success and positive social impact go hand in hand. Our
                operations are strategically aligned with several United Nations Sustainable Development Goals (SDGs),
                demonstrating our commitment to creating lasting change in Nigeria's agricultural sector.
              </p>
              <p className="text-base mb-4">
                Through our innovative solutions like the SecureStore electronic warehouse receipt system, we're working
                to address key challenges facing smallholder farmers and agricultural communities across Nigeria.
              </p>
              <p className="text-base">
                Our impact-focused approach ensures that while we build a successful business, we also contribute
                meaningfully to poverty reduction, food security, economic growth, and responsible production practices.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  className="w-full h-[350px] object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/35e558c5c8-0e81b4f177ab80bd7f2b.png"
                  alt="Nigerian farmers with modern agricultural technology, sustainable farming practices, professional photography with SDG logos overlaid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-green-600 mb-10 text-center">Our SDG Contributions</h2>
          <div className="grid grid-cols-1 gap-10">
            {/* SDG 1: No Poverty */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-green-50 p-8 flex flex-col justify-center items-center">
                  <div className="w-32 h-32 mb-6">
                    <img
                      className="w-full h-full object-contain"
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/13f8f4ce48-b2d3d02df18948eca5e6.png"
                      alt="SDG 1 No Poverty icon, official UN sustainable development goal symbol"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-green-600 text-center">SDG 1: No Poverty</h3>
                  <p className="text-center mt-2">End poverty in all its forms everywhere</p>
                </div>
                <div className="md:w-2/3 p-8">
                  <h4 className="text-xl font-bold text-green-600 mb-4">Our Contributions</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-green-600 p-1 rounded-full text-white mr-3 mt-1">
                        <i className="fa-solid fa-check text-xs"></i>
                      </div>
                      <div>
                        <p className="font-medium">Increased Farmer Incomes</p>
                        <p className="text-gray-600">
                          Our warehouse receipt system allows farmers to store their produce and sell when prices are
                          favorable, increasing their income by up to 30%.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-600 p-1 rounded-full text-white mr-3 mt-1">
                        <i className="fa-solid fa-check text-xs"></i>
                      </div>
                      <div>
                        <p className="font-medium">Access to Finance</p>
                        <p className="text-gray-600">
                          By enabling farmers to use their stored commodities as collateral, we've helped over 2,000
                          farmers access loans totaling more than ₦200 million.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-600 p-1 rounded-full text-white mr-3 mt-1">
                        <i className="fa-solid fa-check text-xs"></i>
                      </div>
                      <div>
                        <p className="font-medium">Rural Community Development</p>
                        <p className="text-gray-600">
                          Our operations have created over 500 direct and indirect jobs in rural communities, providing
                          stable income sources for families.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-6 bg-gray-50 p-4 rounded">
                    <p className="font-medium text-green-600">2025 Target:</p>
                    <p>
                      Increase average farmer income by 45% and expand financial access to 10,000 farmers across
                      Nigeria.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SDG 2: Zero Hunger */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-green-50 p-8 flex flex-col justify-center items-center">
                  <div className="w-32 h-32 mb-6">
                    <img
                      className="w-full h-full object-contain"
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/87ca5ce21e-9f7ef7b33496d8802893.png"
                      alt="SDG 2 Zero Hunger icon, official UN sustainable development goal symbol"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-green-600 text-center">SDG 2: Zero Hunger</h3>
                  <p className="text-center mt-2">End hunger, achieve food security and improved nutrition</p>
                </div>
                <div className="md:w-2/3 p-8">
                  <h4 className="text-xl font-bold text-green-600 mb-4">Our Contributions</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-green-600 p-1 rounded-full text-white mr-3 mt-1">
                        <i className="fa-solid fa-check text-xs"></i>
                      </div>
                      <div>
                        <p className="font-medium">Reducing Post-Harvest Losses</p>
                        <p className="text-gray-600">
                          Our storage facilities have helped reduce post-harvest losses from 40% to less than 10%,
                          ensuring more food reaches consumers.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-600 p-1 rounded-full text-white mr-3 mt-1">
                        <i className="fa-solid fa-check text-xs"></i>
                      </div>
                      <div>
                        <p className="font-medium">Improving Supply Chain Efficiency</p>
                        <p className="text-gray-600">
                          By connecting farmers directly with buyers, we've shortened the supply chain, reducing costs
                          and ensuring fresher produce reaches markets.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-600 p-1 rounded-full text-white mr-3 mt-1">
                        <i className="fa-solid fa-check text-xs"></i>
                      </div>
                      <div>
                        <p className="font-medium">Supporting Smallholder Farmers</p>
                        <p className="text-gray-600">
                          We've provided training on improved farming techniques to over 3,000 farmers, helping increase
                          yields by an average of 25%.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-6 bg-gray-50 p-4 rounded">
                    <p className="font-medium text-green-600">2025 Target:</p>
                    <p>
                      Reduce post-harvest losses to less than 5% and increase the volume of food stored in our
                      facilities by 200%.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SDG 8: Economic Growth */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-green-50 p-8 flex flex-col justify-center items-center">
                  <div className="w-32 h-32 mb-6">
                    <img
                      className="w-full h-full object-contain"
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/9b78d795c6-62fa92d961d7a28444ed.png"
                      alt="SDG 8 Decent Work and Economic Growth icon, official UN sustainable development goal symbol"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-green-600 text-center">SDG 8: Economic Growth</h3>
                  <p className="text-center mt-2">Promote sustained, inclusive economic growth</p>
                </div>
                <div className="md:w-2/3 p-8">
                  <h4 className="text-xl font-bold text-green-600 mb-4">Our Contributions</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-green-600 p-1 rounded-full text-white mr-3 mt-1">
                        <i className="fa-solid fa-check text-xs"></i>
                      </div>
                      <div>
                        <p className="font-medium">Job Creation</p>
                        <p className="text-gray-600">
                          Our operations have created over 200 direct jobs and supported approximately 300 indirect jobs
                          in the agricultural value chain.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-600 p-1 rounded-full text-white mr-3 mt-1">
                        <i className="fa-solid fa-check text-xs"></i>
                      </div>
                      <div>
                        <p className="font-medium">Financial Inclusion</p>
                        <p className="text-gray-600">
                          By partnering with financial institutions, we've helped bring banking services to over 5,000
                          previously unbanked farmers.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-600 p-1 rounded-full text-white mr-3 mt-1">
                        <i className="fa-solid fa-check text-xs"></i>
                      </div>
                      <div>
                        <p className="font-medium">Digital Innovation</p>
                        <p className="text-gray-600">
                          Our electronic warehouse receipt system has introduced digital technology to agricultural
                          communities, bridging the digital divide.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-6 bg-gray-50 p-4 rounded">
                    <p className="font-medium text-green-600">2025 Target:</p>
                    <p>
                      Create 1,000 additional jobs and expand our digital platform to reach 25,000 farmers across
                      Nigeria.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SDG 12: Responsible Consumption */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-green-50 p-8 flex flex-col justify-center items-center">
                  <div className="w-32 h-32 mb-6">
                    <img
                      className="w-full h-full object-contain"
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d286313654-18daf522c34c37c9c0c9.png"
                      alt="SDG 12 Responsible Consumption and Production icon, official UN sustainable development goal symbol"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-green-600 text-center">SDG 12: Responsible Consumption</h3>
                  <p className="text-center mt-2">Ensure sustainable consumption and production patterns</p>
                </div>
                <div className="md:w-2/3 p-8">
                  <h4 className="text-xl font-bold text-green-600 mb-4">Our Contributions</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-green-600 p-1 rounded-full text-white mr-3 mt-1">
                        <i className="fa-solid fa-check text-xs"></i>
                      </div>
                      <div>
                        <p className="font-medium">Reducing Food Waste</p>
                        <p className="text-gray-600">
                          Our storage solutions and efficient supply chain have reduced food waste by approximately 30%
                          in the communities we serve.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-600 p-1 rounded-full text-white mr-3 mt-1">
                        <i className="fa-solid fa-check text-xs"></i>
                      </div>
                      <div>
                        <p className="font-medium">Promoting Sustainable Practices</p>
                        <p className="text-gray-600">
                          We provide training on sustainable farming methods to all farmers in our network, reducing
                          chemical use and improving soil health.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-600 p-1 rounded-full text-white mr-3 mt-1">
                        <i className="fa-solid fa-check text-xs"></i>
                      </div>
                      <div>
                        <p className="font-medium">Resource Efficiency</p>
                        <p className="text-gray-600">
                          Our warehouses utilize solar power and rainwater harvesting, reducing environmental impact
                          while maintaining operational efficiency.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-6 bg-gray-50 p-4 rounded">
                    <p className="font-medium text-green-600">2025 Target:</p>
                    <p>
                      Achieve carbon neutrality in our operations and train 15,000 farmers in sustainable agricultural
                      practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-green-600 mb-10 text-center">Measuring Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-50 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-green-600 mb-6">SDG Progress Overview</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">SDG 1: No Poverty</span>
                    <span className="text-sm font-medium">55%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "55%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">SDG 2: Zero Hunger</span>
                    <span className="text-sm font-medium">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "60%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">SDG 8: Economic Growth</span>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">SDG 12: Responsible Consumption</span>
                    <span className="text-sm font-medium">50%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "50%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-green-600 mb-6">Key Impact Statistics</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <i className="fa-solid fa-users text-green-600 text-2xl"></i>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-green-600">5,000+</p>
                    <p className="text-gray-600">Farmers supported across Nigeria</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <i className="fa-solid fa-warehouse text-green-600 text-2xl"></i>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-green-600">12</p>
                    <p className="text-gray-600">Storage facilities across 6 states</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <i className="fa-solid fa-money-bill-trend-up text-green-600 text-2xl"></i>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-green-600">₦500M+</p>
                    <p className="text-gray-600">Value of commodities traded annually</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <i className="fa-solid fa-seedling text-green-600 text-2xl"></i>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-green-600">30%</p>
                    <p className="text-gray-600">Average reduction in post-harvest losses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Roadmap Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-green-600 mb-10 text-center">Our SDG Roadmap</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="relative">
              {/* Timeline */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>
              {/* 2023 */}
              <div className="relative mb-16">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-8 md:text-right mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold text-green-600 mb-2">2023</h3>
                    <p className="text-gray-600 mb-4">Establish Baseline & Foundation</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex md:flex-row-reverse items-start">
                        <div className="bg-green-600 p-1 rounded-full text-white ml-0 md:ml-3 mr-3 md:mr-0 mt-1">
                          <i className="fa-solid fa-check text-xs"></i>
                        </div>
                        <p>Expand to 12 warehouses across 6 states</p>
                      </li>
                      <li className="flex md:flex-row-reverse items-start">
                        <div className="bg-green-600 p-1 rounded-full text-white ml-0 md:ml-3 mr-3 md:mr-0 mt-1">
                          <i className="fa-solid fa-check text-xs"></i>
                        </div>
                        <p>Reach 5,000 farmers with our services</p>
                      </li>
                      <li className="flex md:flex-row-reverse items-start">
                        <div className="bg-green-600 p-1 rounded-full text-white ml-0 md:ml-3 mr-3 md:mr-0 mt-1">
                          <i className="fa-solid fa-check text-xs"></i>
                        </div>
                        <p>Launch digital literacy program for farmers</p>
                      </li>
                    </ul>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-green-600"></div>
                  <div className="md:w-1/2 pl-0 md:pl-8">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium">Current Status:</p>
                      <p className="text-green-600 font-bold">Completed</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2024 */}
              <div className="relative mb-16">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-8 md:text-right mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold text-green-600 mb-2">2024</h3>
                    <p className="text-gray-600 mb-4">Scale Operations & Impact</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex md:flex-row-reverse items-start">
                        <div className="bg-green-600 p-1 rounded-full text-white ml-0 md:ml-3 mr-3 md:mr-0 mt-1">
                          <i className="fa-solid fa-check text-xs"></i>
                        </div>
                        <p>Expand to 8,000 farmers across 10 states</p>
                      </li>
                      <li className="flex md:flex-row-reverse items-start">
                        <div className="bg-green-600 p-1 rounded-full text-white ml-0 md:ml-3 mr-3 md:mr-0 mt-1">
                          <i className="fa-solid fa-check text-xs"></i>
                        </div>
                        <p>Increase financial access by 50%</p>
                      </li>
                      <li className="flex md:flex-row-reverse items-start">
                        <div className="bg-green-600 p-1 rounded-full text-white ml-0 md:ml-3 mr-3 md:mr-0 mt-1">
                          <i className="fa-solid fa-check text-xs"></i>
                        </div>
                        <p>Implement solar power at all facilities</p>
                      </li>
                    </ul>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-green-400"></div>
                  <div className="md:w-1/2 pl-0 md:pl-8">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium">Current Status:</p>
                      <p className="text-yellow-600 font-bold">In Progress</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2025 */}
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-8 md:text-right mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold text-green-600 mb-2">2025</h3>
                    <p className="text-gray-600 mb-4">Transform & Sustain</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex md:flex-row-reverse items-start">
                        <div className="bg-gray-300 p-1 rounded-full text-white ml-0 md:ml-3 mr-3 md:mr-0 mt-1">
                          <i className="fa-solid fa-check text-xs"></i>
                        </div>
                        <p>Reach 15,000 farmers across Nigeria</p>
                      </li>
                      <li className="flex md:flex-row-reverse items-start">
                        <div className="bg-gray-300 p-1 rounded-full text-white ml-0 md:ml-3 mr-3 md:mr-0 mt-1">
                          <i className="fa-solid fa-check text-xs"></i>
                        </div>
                        <p>Achieve carbon neutrality in operations</p>
                      </li>
                      <li className="flex md:flex-row-reverse items-start">
                        <div className="bg-gray-300 p-1 rounded-full text-white ml-0 md:ml-3 mr-3 md:mr-0 mt-1">
                          <i className="fa-solid fa-check text-xs"></i>
                        </div>
                        <p>Launch farmer innovation fund</p>
                      </li>
                    </ul>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gray-300"></div>
                  <div className="md:w-1/2 pl-0 md:pl-8">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium">Current Status:</p>
                      <p className="text-gray-500 font-bold">Planned</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-green-600 mb-10 text-center">Our SDG Partners</h2>
          <p className="text-center max-w-3xl mx-auto mb-12">
            We collaborate with various organizations to maximize our impact and contribute meaningfully to the
            Sustainable Development Goals.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex items-center justify-center h-[120px]">
              <img
                className="h-12 object-contain"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/a5b6934c97-21832fa184f267599b03.png"
                alt="World Bank logo simple"
              />
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex items-center justify-center h-[120px]">
              <img
                className="h-12 object-contain"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/0210e900e5-e1b15507a3fe9c7b8c72.png"
                alt="UNDP logo simple"
              />
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex items-center justify-center h-[120px]">
              <img
                className="h-12 object-contain"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/796e5cbd2b-d90b7a9a8c8b466e533f.png"
                alt="Nigerian Ministry of Agriculture logo simple"
              />
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex items-center justify-center h-[120px]">
              <img
                className="h-12 object-contain"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/2ce6d2d04f-04a53675e2fd83cda236.png"
                alt="African Development Bank logo simple"
              />
            </div>
          </div>
          <div className="mt-12 bg-green-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">Join Our Mission</h3>
            <p className="text-center max-w-3xl mx-auto mb-8">
              We're always looking for partners who share our vision of transforming Nigeria's agricultural sector and
              contributing to the achievement of the SDGs.
            </p>
            <div className="text-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6">
                Become a Partner
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 overflow-hidden">
        <img
          className="absolute w-full h-full object-cover"
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/49abb869a1-31a2d591ee99461ad400.png"
          alt="Nigerian farmers in a field with modern agricultural technology, sunset lighting, professional photography"
        />
        <div className="absolute inset-0 bg-green-600 bg-opacity-80"></div>
        <div className="container mx-auto px-5 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
              Join Us in Creating Sustainable Change
            </h2>
            <p className="text-white text-lg mb-8 text-balance">
              Together, we can transform Nigeria's agricultural sector and contribute to a more sustainable and
              equitable future.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button className="bg-white text-green-600 hover:bg-gray-100 font-medium py-3 px-6">Contact Us</Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-medium py-3 px-6 bg-transparent"
              >
                Download Impact Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
