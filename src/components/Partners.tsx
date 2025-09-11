import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    { name: 'NIKE' },
    { name: 'ADIDAS' },
    { name: 'PUMA' },
    { name: 'UNDER ARMOUR' },
    { name: 'NEW BALANCE' },
    { name: 'REEBOK' },
    { name: 'JORDAN' },
    { name: 'CONVERSE' },
    { name: 'ASICS' },
    { name: 'VANS' }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bebas tracking-widest text-aurora-teal mb-3">
            TRUSTED BY LEADING BRANDS
          </h2>
          <p className="text-eclipse-grey font-inter text-base">
            Partnering with the world’s most prestigious names in sports
          </p>
        </div>

        {/* Scrolling Logos */}
        <div className="relative overflow-hidden">
          {/* Gradient fade on edges */}
          {/* Gradient fade on edges */}
<div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-20 pointer-events-none"></div>
<div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-20 pointer-events-none"></div>

          <div className="flex animate-scroll space-x-16 items-center">
            {/* First set */}
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-10 py-4 flex items-center justify-center 
                           hover:scale-110 hover:text-vyom-midnight transition-all duration-300"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-500 
                                 font-bebas text-xl tracking-[0.25em] whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
            ))}

            {/* Duplicate set for seamless scroll */}
            {partners.map((partner, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 px-10 py-4 flex items-center justify-center 
                           hover:scale-110 hover:text-vyom-midnight transition-all duration-300"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-500 
                                 font-bebas text-xl tracking-[0.25em] whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Partners;
