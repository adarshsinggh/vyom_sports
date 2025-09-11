import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
          {/* Content Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bebas text-vyom-midnight mb-8">
              ABOUT US
            </h2>

            <div className="mb-12">
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

            <div className="bg-aurora-teal/5 rounded-2xl p-8 border-l-4 border-aurora-teal">
              <p className="text-eclipse-grey font-inter italic text-lg leading-relaxed">
                "Vyom is for the few who understand that sport, at its highest level, is not entertainment. It is culture, power and legacy. And those who step into Vyom are not just watching history, they are living it."
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Professional Business Person"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vyom-midnight/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;