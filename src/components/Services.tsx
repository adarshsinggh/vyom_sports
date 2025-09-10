import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'TALENT REPRESENTATION',
      description: 'Vyom manages careers with the discretion of a confidant and the vision of a strategist. Guiding every step from contract advisory & sponsorship alignment to brand building & global endorsements. Every move is aligned with legacy in mind, ensuring athletes are not just participants, but icons in the making.',
      image: '/2.png'
    },
    {
      title: 'EDUCATION PATHWAYS',
      description: 'Guiding entry into the world\'s most prestigious universities. Vyom curates academic journeys across the UK, USA and Australia, ensuring every placement is a launchpad for global opportunity.',
      image: '/3.png'
    },
    {
      title: 'BESPOKE TRAVEL & RESIDENCY',
      description: 'Make your journey as exclusive as the destination. Vyom orchestrates seamless movement across borders arranging premium hospitality, private flights, five-star residencies, visa concierge, and match-day logistics. Travel refined to its most effortless form.',
      image: '/1.png'
    },
    {
      title: 'GLOBAL SPORT SCHOLARSHIP',
      description: 'For prodigy destined to rise. Vyom profiles athletes with precision, securing scholarships and sponsored tie-ups with leading universities and clubs. More than financial aid, these opportunities are pathways to prestige, placing athletes on stages where their potential meets recognition.',
      image: '/5.png'
    },
    {
      title: 'CLUB COLLABORATIONS',
      description: 'Vyom opens the gates to the world\'s most elite clubs. We expand network via global alliances in summer cricket exchanges, overseas placement and professional scouting, bridging talent with institutions. These collaborations open doors for athletes to prove, perform, and belong on international stages.',
      image: '/6.png'
    },
    {
      title: 'PRIVATE HOSPITALITY & VIP ACCESS',
      description: 'Exclusive entry to the world\'s biggest events. Vyom curates experiences beyond the ticket offering access to VIP suites, private lounges, meet-and-greets with sporting legends and bespoke travel packages. This is sport at its most intimate, where adrenaline meets privilege.',
      image: '/4.png'
    },
    {
      title: 'BRAND ARCHITECTURE',
      description: 'Turning athletes into cultural powerhouses. Vyom aligns talent with the world\'s most prestigious brands, shaping endorsements, media presence and activations into platforms of influence. Each partnership moves beyond visibility to build legacy, positioning athletes as icons who transcend sport.',
      image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bebas text-vyom-midnight mb-6">
            OUR SERVICES
          </h2>
          <p className="text-xl text-eclipse-grey max-w-3xl mx-auto font-inter">
            Unlocking experiences that begin where tickets end.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-aurora-teal hover:border-aurora-teal/20 hover:-translate-y-2"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bebas text-vyom-midnight mb-4">
                  {service.title}
                </h3>
                <p className="text-eclipse-grey font-inter leading-relaxed text-lg">
                  {service.description}
                </p>
                <div className="mt-6">
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;