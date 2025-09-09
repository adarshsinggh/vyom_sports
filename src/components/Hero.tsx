import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-vyom-midnight">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        >
          <source src="https://media.istockphoto.com/id/1178548617/video/speed-ramp-male-cricket-player-hitting-the-ball-with-his-bat.mp4?s=mp4-640x640-is&k=20&c=5OJKniems0OXAmPvXbTa2DrvomFbm-F_K0tkUWXkdl8=" type="video/mp4" />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-vyom-midnight/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bebas text-white mb-6 leading-tight">
          LOREM IPSUM DOLOR SIT AMET
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto font-inter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-aurora-teal text-white px-8 py-4 rounded-xl font-inter font-semibold text-lg hover:bg-aurora-teal/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
            LOREM IPSUM
          </button>
          
          <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-inter font-semibold text-lg hover:bg-white hover:text-vyom-midnight transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
            DOLOR SIT AMET
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;