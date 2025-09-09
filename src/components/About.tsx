import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-celestial-haze">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Content */}
          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-6xl font-bebas text-vyom-midnight mb-8">
              LOREM IPSUM DOLOR
            </h2>

            <div className="mb-8">
              <p className="text-xl text-eclipse-grey leading-relaxed font-inter mb-6">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
              </p>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-aurora-teal rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-vyom-midnight font-inter font-semibold mb-2">Lorem Ipsum</h4>
                  <p className="text-eclipse-grey font-inter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-aurora-teal rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-vyom-midnight font-inter font-semibold mb-2">Dolor Sit Amet</h4>
                  <p className="text-eclipse-grey font-inter">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-aurora-teal rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-vyom-midnight font-inter font-semibold mb-2">Consectetur</h4>
                  <p className="text-eclipse-grey font-inter">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-2xl font-inter text-aurora-teal">
                Lorem Ipsum
              </div>
              <div className="h-px bg-aurora-teal flex-1"></div>
            </div>
          </div>

          {/* CEO Image */}
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                alt="CEO Portrait"
                className="w-full h-96 object-cover"
              />
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bebas text-vyom-midnight mb-1">LOREM IPSUM</h3>
                <p className="text-aurora-teal font-inter font-medium">Dolor Sit Amet</p>
                <p className="text-sm text-eclipse-grey font-inter mt-2">Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;