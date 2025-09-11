import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    services: [
      'Lorem Ipsum',
      'Dolor Sit Amet',
      'Consectetur',
      'Adipiscing Elit'
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'Press'
    ],
    resources: [
      'Blog',
      'Lorem Ipsum',
      'Dolor Sit',
      'Newsletter'
    ],
    support: [
      'Contact Us',
      'Help Center',
      'Privacy Policy',
      'Terms of Service'
    ]
  };

  return (
    <footer className="bg-vyom-midnight text-white">
      <div className="container mx-auto px-6 pt-16 pb-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/white-logo.png" 
                alt="Vyom Sports Logo"
                className="w-21 h-20 object-fit"
              />
              {/* <span className="text-2xl font-bebas text-white">
                VYOM SPORTS
              </span> */}
            </div>
            
            <p className="text-orbit-silver mb-6 leading-relaxed font-inter text-sm">
              Unlocking access to sport at its highest level. Vyom curates moments that go beyond tickets and itineraries. From front-row adrenaline to private hospitality, global pathways, and legacies that last.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-eclipse-grey rounded-lg flex items-center justify-center text-orbit-silver hover:text-white hover:bg-aurora-teal transition-all duration-300 shadow-lg">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-eclipse-grey rounded-lg flex items-center justify-center text-orbit-silver hover:text-white hover:bg-aurora-teal transition-all duration-300 shadow-lg">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-eclipse-grey rounded-lg flex items-center justify-center text-orbit-silver hover:text-white hover:bg-aurora-teal transition-all duration-300 shadow-lg">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="w-10 h-10 bg-eclipse-grey rounded-lg flex items-center justify-center text-orbit-silver hover:text-white hover:bg-aurora-teal transition-all duration-300 shadow-lg">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bebas text-lg mb-4">SERVICES</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-orbit-silver hover:text-aurora-teal font-inter text-sm">Talent Representation</a></li>
              <li><a href="#" className="text-orbit-silver hover:text-aurora-teal font-inter text-sm">Education Pathways</a></li>
              <li><a href="#" className="text-orbit-silver hover:text-aurora-teal font-inter text-sm">Sport Scholarship</a></li>
              <li><a href="#" className="text-orbit-silver hover:text-aurora-teal font-inter text-sm">Bespoke Travel & Residency</a></li>
              <li><a href="#" className="text-orbit-silver hover:text-aurora-teal font-inter text-sm">Club Collaborations</a></li>
              <li><a href="#" className="text-orbit-silver hover:text-aurora-teal font-inter text-sm">Private Hospitality & VIP Access</a></li>
              <li><a href="#" className="text-orbit-silver hover:text-aurora-teal font-inter text-sm">Brand Architecture</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bebas text-lg mb-4">COMPANY</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-orbit-silver hover:text-aurora-teal font-inter text-sm">About Us</a></li>
              <li><a href="#" className="text-orbit-silver hover:text-aurora-teal font-inter text-sm">Our Team</a></li>
              <li><a href="#" className="text-orbit-silver hover:text-aurora-teal font-inter text-sm">Careers</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bebas text-lg mb-4">SUPPORT</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-orbit-silver hover:text-aurora-teal font-inter text-sm">Contact Us</a></li>
              <li><a href="#" className="text-orbit-silver hover:text-aurora-teal font-inter text-sm">Help Center</a></li>
              <li><a href="#" className="text-orbit-silver hover:text-aurora-teal font-inter text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-orbit-silver hover:text-aurora-teal font-inter text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-eclipse-grey rounded-2xl p-8 mb-8 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-2/3 mb-6 lg:mb-0">
              <h3 className="text-2xl font-bebas text-white mb-2">INSIDE VYOM</h3>
              <p className="text-orbit-silver font-inter text-sm">
                Step into the circle. Be the first to know about exclusive access, stories, and opportunities from the world of luxury sport.
              </p>
            </div>
            <div className="lg:w-1/3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 bg-vyom-midnight border border-aurora-teal/30 rounded-l-lg text-white placeholder-orbit-silver focus:outline-none focus:border-aurora-teal focus:ring-2 focus:ring-aurora-teal/20 font-inter transition-all duration-300"
                />
                <button className="bg-aurora-teal text-white px-6 py-3 rounded-r-lg font-inter font-semibold hover:bg-aurora-teal/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-aurora-teal/20 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6 mb-4 lg:mb-0">
              <div className="text-orbit-silver text-xs font-inter">
                © 2025 Vyom Sports. All rights reserved.
              </div>
              <a 
                href="https://nlivtech.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-orbit-silver hover:text-aurora-teal text-xs font-inter transition-colors duration-300"
              >
                <span>Made with</span>
                <Heart className="w-3 h-3 text-red-500" fill="currentColor" />
                <span>by nLivtech</span>
              </a>
            </div>
            <div className="flex items-center space-x-6 text-xs">
              <a href="#" className="text-orbit-silver hover:text-aurora-teal font-inter">
                Privacy Policy
              </a>
              <a href="#" className="text-orbit-silver hover:text-aurora-teal font-inter">
                Terms of Service
              </a>
              <a href="#" className="text-orbit-silver hover:text-aurora-teal font-inter">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;