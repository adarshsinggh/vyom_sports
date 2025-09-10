import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <img
  src="/banner.png"
  alt="Sports Banner"
  className="w-full h-full object-cover"
/>
      </div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-vyom-midnight/60 z-10"></div> */}

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        {/* <h1 className="text-5xl md:text-7xl font-bebas text-white mb-6 leading-tight">
          FRONT ROW TO LUXURY SPORT
        </h1>
        
        <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto font-inter">
          For the select few who define the game.
        </p> */}
      </div>
    </section>
  );
};

export default Hero;