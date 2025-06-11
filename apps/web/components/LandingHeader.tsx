"use client"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function LandingHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <svg className="w-4 h-4 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg md:text-2xl font-bold text-gray-900">
                Sample<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Dekho</span>
              </h1>
              <p className="text-[10px] md:text-xs text-gray-500 hidden md:block">Sample Marketplace</p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium">
              How It Works
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium">
              Success Stories
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium">
              Pricing
            </a>
            <a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Login */}
            <Button variant="ghost" className="hidden sm:flex text-gray-600 hover:text-purple-600 font-medium">
              Sign In
            </Button>
            
            {/* Get Started */}
            <Button className="hidden md:flex bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-sm md:text-base font-semibold px-3 md:px-6 py-1.5 md:py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
              Get Started
            </Button>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="lg:hidden -ml-2 p-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-10 h-10 text-gray-600" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white border-t border-gray-200`}>
        <div className="px-4 py-4 space-y-3">
          <a href="#features" className="block text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium py-2">
            Features
          </a>
          <a href="#how-it-works" className="block text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium py-2">
            How It Works
          </a>
          <a href="#testimonials" className="block text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium py-2">
            Success Stories
          </a>
          <a href="#pricing" className="block text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium py-2">
            Pricing
          </a>
          <a href="#contact" className="block text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium py-2">
            Contact
          </a>
          <div className="pt-3 border-t border-gray-200">
            <Button variant="ghost" className="w-full justify-center text-gray-600 hover:text-purple-600 font-medium mb-2">
              Sign In
            </Button>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-2 rounded-full">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
} 