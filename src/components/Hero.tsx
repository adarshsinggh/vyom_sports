import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="
        relative flex items-center justify-center overflow-hidden
        h-auto md:min-h-screen
      "
    >
      {/* Background Image */}
      <div className="w-full">
        <img
          src="/banner.png"
          alt="Sports Banner"
          className="
            w-full h-auto
            object-contain md:object-cover
          "
        />
      </div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-vyom-midnight/40 z-10"></div> */}
    </section>
  );
};

export default Hero;
