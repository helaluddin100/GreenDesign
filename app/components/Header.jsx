'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Leaf, ShoppingCart, User, Menu, X, Search } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount] = useState(3)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Leaf className="h-8 w-8 text-emerald-600 mr-2" />
            <span className="text-2xl font-bold text-gray-900">GreenBuild</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Home</Link>
            <Link href="/houses" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Browse Designs</Link>
            <Link href="/about" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">About</Link>
            <Link href="/blog" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Blog</Link>
            <Link href="/contact" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Contact</Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="p-2 text-gray-700 hover:text-emerald-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>

            {/* Cart */}
            <button className="relative p-2 text-gray-700 hover:text-emerald-600 transition-colors">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Login Button */}
            <Link href="/login" className="hidden sm:flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors">
              <User className="h-4 w-4 mr-2" />
              Login
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-emerald-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Home</Link>
              <Link href="/houses" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Browse Designs</Link>
              <Link href="/about" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">About</Link>
              <Link href="/blog" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Blog</Link>
              <Link href="/contact" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Contact</Link>
              <Link href="/login" className="flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors w-fit">
                <User className="h-4 w-4 mr-2" />
                Login
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}