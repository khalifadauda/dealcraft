"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/#company-overview") {
      return pathname === "/"
    }
    return pathname === path
  }

  const getLinkClasses = (path: string) => {
    return isActive(path) ? "text-green-600 font-semibold transition" : "text-gray-700 hover:text-green-600 transition"
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-5 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="text-2xl font-bold text-green-600">DealCraft</div>
          <span className="text-gray-700 ml-2">Partners Nigeria Ltd</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/#company-overview" className={getLinkClasses("/#company-overview")}>
            Company Overview
          </Link>
          <Link href="/vision" className={getLinkClasses("/vision")}>
            Our Vision
          </Link>
          <Link href="/operations" className={getLinkClasses("/operations")}>
            Our Operations
          </Link>
          <Link href="/outcomes" className={getLinkClasses("/outcomes")}>
            Target Outcomes
          </Link>
          <Link href="/secure-stores" className={`${getLinkClasses("/secure-stores")} font-bold text-lg`}>
            Secure Stores
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fa-solid fa-bars text-xl"></i>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="container mx-auto px-5 py-4 flex flex-col space-y-4">
            <Link
              href="/#company-overview"
              className={getLinkClasses("/#company-overview")}
              onClick={() => setIsMenuOpen(false)}
            >
              Company Overview
            </Link>
            <Link href="/vision" className={getLinkClasses("/vision")} onClick={() => setIsMenuOpen(false)}>
              Our Vision
            </Link>
            <Link href="/operations" className={getLinkClasses("/operations")} onClick={() => setIsMenuOpen(false)}>
              Our Operations
            </Link>
            <Link href="/outcomes" className={getLinkClasses("/outcomes")} onClick={() => setIsMenuOpen(false)}>
              Target Outcomes
            </Link>
            <Link
              href="/secure-stores"
              className={`${getLinkClasses("/secure-stores")} font-bold text-lg`}
              onClick={() => setIsMenuOpen(false)}
            >
              Secure Stores
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
