import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-green-600 mb-4">DealCraft</div>
            <p className="max-w-xs text-gray-300">
              Revolutionizing commodity trading and agricultural finance in Nigeria through innovative technology
              solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/#company-overview" className="text-gray-300 hover:text-green-600 transition">
                    Company Overview
                  </Link>
                </li>
                <li>
                  <Link href="/vision" className="text-gray-300 hover:text-green-600 transition">
                    Our Vision
                  </Link>
                </li>
                <li>
                  <Link href="/operations" className="text-gray-300 hover:text-green-600 transition">
                    Our Operations
                  </Link>
                </li>
                <li>
                  <Link href="/outcomes" className="text-gray-300 hover:text-green-600 transition">
                    Target Outcomes
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">More Info</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/secure-stores" className="text-gray-300 hover:text-green-600 transition font-bold">
                    Secure Stores
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-600 transition">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-600 transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-600 transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-600 transition">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 DealCraft Partners Nigeria Ltd. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-green-600 transition">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-600 transition">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-600 transition">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-600 transition">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
