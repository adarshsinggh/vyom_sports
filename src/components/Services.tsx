import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'TALENT REPRESENTATION',
      description:
        'Vyom manages careers with the discretion of a confidant and the vision of a strategist. Guiding every step from contract advisory & sponsorship alignment to brand building & global endorsements.',
      image: '/2.png',
      premium: true,
    },
    {
      title: 'EDUCATION PATHWAYS',
      description:
        "Guiding entry into the world's most prestigious universities. Vyom curates academic journeys across the UK, USA and Australia, ensuring every placement is a launchpad for global opportunity.",
      image: '/3.png',
      premium: false,
    },
    {
      title: 'BESPOKE TRAVEL & RESIDENCY',
      description:
        'Make your journey as exclusive as the destination. Vyom orchestrates seamless movement across borders arranging premium hospitality, private flights, five-star residencies.',
      image: '/1.png',
      premium: true,
    },
    {
      title: 'GLOBAL SPORT SCHOLARSHIP',
      description:
        'For prodigy destined to rise. Vyom profiles athletes with precision, securing scholarships and sponsored tie-ups with leading universities and clubs.',
      image: '/5.png',
      premium: false,
    },
    {
      title: 'CLUB COLLABORATIONS',
      description:
        "Vyom opens the gates to the world's most elite clubs. We expand network via global alliances in summer cricket exchanges, overseas placement and professional scouting.",
      image: '/6.png',
      premium: true,
    },
    {
      title: 'PRIVATE HOSPITALITY & VIP ACCESS',
      description:
        "Exclusive entry to the world's biggest events. Vyom curates experiences beyond the ticket offering access to VIP suites, private lounges, meet-and-greets with sporting legends.",
      image: '/4.png',
      premium: true,
    },
    {
      title: 'BRAND ARCHITECTURE',
      description:
        'Turning athletes into cultural powerhouses. Vyom aligns talent with the world\'s most prestigious brands, shaping endorsements, media presence and activations into platforms of influence.',
      image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      premium: false,
    },
  ];

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const container = document.getElementById('services-container');
    if (!container) return;

    const checkScroll = () => {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft + container.clientWidth < container.scrollWidth
      );
    };

    checkScroll(); // initial
    container.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    return () => {
      container.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scrollLeft = () => {
    const container = document.getElementById('services-container');
    if (container) {
      container.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('services-container');
    if (container) {
      container.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 bg-gradient-to-br from-vyom-midnight via-eclipse-grey to-vyom-midnight relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-aurora-teal/10 backdrop-blur-sm px-6 py-3 rounded-full border border-aurora-teal/20 mb-8">
            <span className="text-aurora-teal font-inter font-semibold text-sm uppercase tracking-wider">
              Premium Services
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bebas text-white mb-8 leading-tight whitespace-nowrap">
            CURATED EXPERIENCE
          </h2>

          <p className="text-xl md:text-2xl text-orbit-silver max-w-4xl mx-auto font-inter leading-relaxed font-light">
            Unlocking experiences that begin where tickets end. Each service
            crafted for those who demand nothing less than extraordinary.
          </p>
        </div>

        {/* Arrows + Cards */}
        <div className="relative">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={scrollLeft}
              className="absolute left-4 top-1/2 -translate-y-1/2 
                       z-40 w-12 h-12 
                       bg-white text-vyom-midnight 
                       rounded-full shadow-xl 
                       flex items-center justify-center 
                       hover:bg-aurora-teal hover:text-white 
                       transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={scrollRight}
              className="absolute right-4 top-1/2 -translate-y-1/2 
                         z-40 w-12 h-12 
                         bg-white text-vyom-midnight 
                         rounded-full shadow-xl 
                         flex items-center justify-center 
                         hover:bg-aurora-teal hover:text-white 
                         transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          <div
            className="overflow-x-auto pb-8 scrollbar-hide"
            id="services-container"
          >
            <div className="flex gap-8 w-max px-16 py-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative w-96 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl transition-all duration-700 hover:shadow-aurora-teal/20 hover:-translate-y-2 flex-shrink-0"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-vyom-midnight/80 via-vyom-midnight/20 to-transparent"></div>
                  </div>

                  <div className="p-8 relative">
                    <h3 className="text-2xl font-bebas text-vyom-midnight mb-4 group-hover:text-aurora-teal transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-eclipse-grey font-inter leading-relaxed mb-8 text-base">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <button className="group/btn flex items-center space-x-3 text-aurora-teal font-inter font-semibold hover:text-vyom-midnight transition-all duration-300">
                        <span className="text-sm uppercase tracking-wider">
                          Explore Service
                        </span>
                        <div className="w-8 h-8 bg-aurora-teal/10 rounded-full flex items-center justify-center group-hover/btn:bg-aurora-teal group-hover/btn:text-white transition-all duration-300">
                          <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </div>
                      </button>
                      <div className="text-right">
                        <div className="text-3xl font-bebas text-aurora-teal/30">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
