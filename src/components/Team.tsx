import React from 'react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'LOREM IPSUM',
      position: 'Chief Executive Officer',
      description: 'Visionary leader with over 15 years of experience in luxury sports management and global partnerships.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
    },
    {
      name: 'DOLOR SIT AMET',
      position: 'Head of Talent Relations',
      description: 'Expert in athlete representation and brand partnerships, connecting talent with world-class opportunities.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
    },
    {
      name: 'CONSECTETUR ADIPISCING',
      position: 'Director of Global Operations',
      description: 'Orchestrates seamless international experiences and manages our worldwide network of premium partners.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bebas text-vyom-midnight mb-6">
            MEET OUR TEAM
          </h2>
          <p className="text-xl text-eclipse-grey max-w-3xl mx-auto font-inter">
            The visionaries behind Vyom's exclusive world of luxury sports experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vyom-midnight/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bebas text-vyom-midnight mb-2 group-hover:text-aurora-teal transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-aurora-teal font-inter font-semibold mb-4 uppercase tracking-wider text-sm">
                  {member.position}
                </p>
                <p className="text-eclipse-grey font-inter leading-relaxed text-sm">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex space-x-4 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a href="#" className="w-10 h-10 bg-aurora-teal/10 rounded-lg flex items-center justify-center text-aurora-teal hover:bg-aurora-teal hover:text-white transition-all duration-300">
                    <span className="text-sm font-inter font-semibold">in</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-aurora-teal/10 rounded-lg flex items-center justify-center text-aurora-teal hover:bg-aurora-teal hover:text-white transition-all duration-300">
                    <span className="text-sm font-inter font-semibold">@</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-aurora-teal/5 to-vyom-midnight/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bebas text-vyom-midnight mb-4">
              JOIN OUR EXCLUSIVE NETWORK
            </h3>
            <p className="text-eclipse-grey font-inter mb-6 leading-relaxed">
              Ready to experience sport at its highest level? Connect with our team and discover what it means to live beyond the ordinary.
            </p>
            <button className="bg-aurora-teal text-white px-8 py-4 rounded-xl font-inter font-semibold hover:bg-aurora-teal/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;