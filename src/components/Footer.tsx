import React from 'react';

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
                src="/Screenshot 2025-09-05 at 12.02.06.png" 
                alt="Vyom Sports Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-2xl font-bebas text-white">
                VYOM SPORTS
              </span>
            </div>
            
            <p className="text-orbit-silver mb-6 leading-relaxed font-inter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-eclipse-grey rounded-lg flex items-center justify-center text-orbit-silver hover:text-white hover:bg-aurora-teal transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">
                <span className="font-inter font-semibold">F</span>
              </a>
              <a href="#" className="w-10 h-10 bg-eclipse-grey rounded-lg flex items-center justify-center text-orbit-silver hover:text-white hover:bg-aurora-teal transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">
                <span className="font-inter font-semibold">T</span>
              </a>
              <a href="#" className="w-10 h-10 bg-eclipse-grey rounded-lg flex items-center justify-center text-orbit-silver hover:text-white hover:bg-aurora-teal transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">
                <span className="font-inter font-semibold">I</span>
              </a>
              <a href="#" className="w-10 h-10 bg-eclipse-grey rounded-lg flex items-center justify-center text-orbit-silver hover:text-white hover:bg-aurora-teal transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">
                <span className="font-inter font-semibold">L</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bebas text-lg mb-4">SERVICES</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-orbit-silver hover:text-aurora-teal font-inter">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bebas text-lg mb-4">COMPANY</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-orbit-silver hover:text-aurora-teal font-inter">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bebas text-lg mb-4">RESOURCES</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-orbit-silver hover:text-aurora-teal font-inter">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bebas text-lg mb-4">SUPPORT</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-orbit-silver hover:text-aurora-teal font-inter">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-eclipse-grey rounded-2xl p-8 mb-8 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-2/3 mb-6 lg:mb-0">
              <h3 className="text-2xl font-bebas text-white mb-2">LOREM IPSUM</h3>
              <p className="text-orbit-silver font-inter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
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
            <div className="text-orbit-silver text-sm mb-4 lg:mb-0 font-inter">
              © 2025 Vyom Sports. All rights reserved. Lorem ipsum dolor sit amet.
            </div>
            <div className="flex items-center space-x-6 text-sm">
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