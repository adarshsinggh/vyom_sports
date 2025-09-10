import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-celestial-haze">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bebas text-vyom-midnight mb-8">
              ABOUT US
            </h2>

            <div className="mb-8">
              <p className="text-lg text-eclipse-grey leading-relaxed font-inter mb-6">
                Vyom sits at the intersection of luxury, sport and global access. We exist not to explain the game, but to awaken a new way of experiencing it. For those who already demand more, Vyom is the invitation to step inside.
              </p>
              <p className="text-lg text-eclipse-grey leading-relaxed font-inter mb-6">
                Curators of the unrepeatable, front-row adrenaline, private moments with legends, global arenas that feel personal transforming sport from spectacle to possession.
              </p>
              <p className="text-lg text-eclipse-grey leading-relaxed font-inter">
                What most only witness, our clients live. What most call a dream, we call a standard.
              </p>
            </div>

            <div className="bg-aurora-teal/5 rounded-2xl p-6 border-l-4 border-aurora-teal">
              <p className="text-eclipse-grey font-inter italic">
                "Vyom is for the few who understand that sport, at its highest level, is not entertainment. It is culture, power and legacy. And those who step into Vyom are not just watching history, they are living it."
              </p>
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