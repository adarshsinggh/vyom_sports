import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'TALENT REPRESENTATION',
      description: 'Vyom manages careers with the discretion of a confidant and the vision of a strategist. Guiding every step from contract advisory & sponsorship alignment to brand building & global endorsements.',
      image: '/2.png',
      premium: true
    },
    {
      title: 'EDUCATION PATHWAYS',
      description: 'Guiding entry into the world\'s most prestigious universities. Vyom curates academic journeys across the UK, USA and Australia, ensuring every placement is a launchpad for global opportunity.',
      image: '/3.png',
      premium: false
    },
    {
      title: 'BESPOKE TRAVEL & RESIDENCY',
      description: 'Make your journey as exclusive as the destination. Vyom orchestrates seamless movement across borders arranging premium hospitality, private flights, five-star residencies.',
      image: '/1.png',
      premium: true
    },
    {
      title: 'GLOBAL SPORT SCHOLARSHIP',
      description: 'For prodigy destined to rise. Vyom profiles athletes with precision, securing scholarships and sponsored tie-ups with leading universities and clubs.',
      image: '/5.png',
      premium: false
    },
    {
      title: 'CLUB COLLABORATIONS',
      description: 'Vyom opens the gates to the world\'s most elite clubs. We expand network via global alliances in summer cricket exchanges, overseas placement and professional scouting.',
      image: '/6.png',
      premium: true
    },
    {
      title: 'PRIVATE HOSPITALITY & VIP ACCESS',
      description: 'Exclusive entry to the world\'s biggest events. Vyom curates experiences beyond the ticket offering access to VIP suites, private lounges, meet-and-greets with sporting legends.',
      image: '/4.png',
      premium: true
    },
    {
      title: 'BRAND ARCHITECTURE',
      description: 'Turning athletes into cultural powerhouses. Vyom aligns talent with the world\'s most prestigious brands, shaping endorsements, media presence and activations into platforms of influence.',
      image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      premium: false
    }
  ];

  return (
    <section id="services" className="py-32 bg-gradient-to-br from-vyom-midnight via-eclipse-grey to-vyom-midnight relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-aurora-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-summit-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-comet-plum/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Premium Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-aurora-teal/10 backdrop-blur-sm px-6 py-3 rounded-full border border-aurora-teal/20 mb-8">
            <Star className="w-5 h-5 text-aurora-teal" fill="currentColor" />
            <span className="text-aurora-teal font-inter font-semibold text-sm uppercase tracking-wider">Premium Services</span>
            <Star className="w-5 h-5 text-aurora-teal" fill="currentColor" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bebas text-white mb-8 leading-tight">
            CURATED
            <span className="block text-transparent bg-gradient-to-r from-aurora-teal via-summit-gold to-aurora-teal bg-clip-text">
              EXCELLENCE
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-orbit-silver max-w-4xl mx-auto font-inter leading-relaxed">
            Unlocking experiences that begin where tickets end. Each service crafted for those who demand nothing less than extraordinary.
          </p>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center mt-12">
            <div className="h-px bg-gradient-to-r from-transparent via-aurora-teal to-transparent w-64"></div>
            <div className="w-3 h-3 bg-aurora-teal rounded-full mx-4"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-aurora-teal to-transparent w-64"></div>
          </div>
        </div>

        {/* Premium Cards Container */}
        <div className="relative">
          {/* Gradient Overlays for Scroll Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-vyom-midnight to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-vyom-midnight to-transparent z-20 pointer-events-none"></div>
          
          <div className="overflow-x-auto pb-8 scrollbar-hide">
            <div className="flex gap-8 w-max px-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative w-96 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl hover:shadow-aurora-teal/20 transition-all duration-700 hover:-translate-y-3 hover:scale-105 flex-shrink-0"
                >
                  {/* Premium Badge */}
                  {service.premium && (
                    <div className="absolute top-6 right-6 z-30">
                      <div className="bg-gradient-to-r from-summit-gold to-aurora-teal text-white px-4 py-2 rounded-full text-xs font-inter font-bold uppercase tracking-wider shadow-lg">
                        Premium
                      </div>
                    </div>
                  )}

                  {/* Image Container with Overlay */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-vyom-midnight/80 via-vyom-midnight/20 to-transparent"></div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-6 left-6">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                        <div className="w-6 h-6 bg-aurora-teal rounded-lg"></div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 relative">
                    {/* Title */}
                    <h3 className="text-2xl font-bebas text-vyom-midnight mb-4 group-hover:text-aurora-teal transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-eclipse-grey font-inter leading-relaxed mb-8 text-base">
                      {service.description}
                    </p>
                    
                    {/* Premium CTA */}
                    <div className="flex items-center justify-between">
                      <button className="group/btn flex items-center space-x-3 text-aurora-teal font-inter font-semibold hover:text-vyom-midnight transition-all duration-300">
                        <span className="text-sm uppercase tracking-wider">Explore Service</span>
                        <div className="w-8 h-8 bg-aurora-teal/10 rounded-full flex items-center justify-center group-hover/btn:bg-aurora-teal group-hover/btn:text-white transition-all duration-300">
                          <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </div>
                      </button>
                      
                      {/* Service Number */}
                      <div className="text-right">
                        <div className="text-3xl font-bebas text-aurora-teal/30">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Premium Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-aurora-teal/0 via-aurora-teal/5 to-summit-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Premium Scroll Indicator */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-aurora-teal rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-aurora-teal/60 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-aurora-teal/30 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
            <p className="text-sm text-orbit-silver font-inter">
              Scroll to discover premium experiences
            </p>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-aurora-teal/30 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              <div className="w-2 h-2 bg-aurora-teal/60 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-aurora-teal rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-6 bg-gradient-to-r from-aurora-teal to-summit-gold p-1 rounded-2xl shadow-2xl">
            <div className="bg-white rounded-xl px-8 py-4">
              <p className="text-vyom-midnight font-inter font-semibold">
                Ready to elevate your experience?
              </p>
            </div>
            <button className="text-white font-inter font-semibold px-8 py-4 hover:bg-white/10 rounded-xl transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Services;