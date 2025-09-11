import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'SERVICES', href: '#services' },
    { label: 'ABOUT', href: '#about' },
    { label: 'PACKAGES', href: '#packages' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Vyom Sports Logo" 
              className="w-50 h-20 object-fit"
            />
            <span className="text-2xl font-bebas text-vyom-midnight">
              {/* VYOM SPORTS */}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-vyom-midnight hover:text-aurora-teal font-inter font-medium text-sm"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('#contact')}
              className="bg-aurora-teal text-white px-6 py-2 rounded-lg font-inter font-medium text-sm hover:bg-aurora-teal/90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              GET STARTED
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-vyom-midnight"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-celestial-haze rounded-lg mx-4 shadow-lg">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-vyom-midnight hover:text-aurora-teal font-inter font-medium text-sm py-2"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('#contact')}
                className="bg-aurora-teal text-white px-6 py-3 rounded-lg font-inter font-medium text-sm hover:bg-aurora-teal/90 mt-4 transition-all duration-300 shadow-md"
              >
                GET STARTED
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;