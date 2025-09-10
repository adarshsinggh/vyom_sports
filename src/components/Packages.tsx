import React from 'react';

const Packages: React.FC = () => {
  const packages = [
    {
      name: 'LOREM',
      price: '$99',
      period: '/month',
      features: [
        'Lorem ipsum dolor sit amet',
        'Consectetur adipiscing elit',
        'Sed do eiusmod tempor',
        'Incididunt ut labore',
        'Et dolore magna aliqua'
      ],
      popular: false
    },
    {
      name: 'IPSUM',
      price: '$199',
      period: '/month',
      features: [
        'Lorem ipsum dolor sit amet',
        'Consectetur adipiscing elit',
        'Sed do eiusmod tempor',
        'Incididunt ut labore',
        'Et dolore magna aliqua',
        'Ut enim ad minim veniam',
        'Quis nostrud exercitation',
        'Ullamco laboris nisi'
      ],
      popular: true
    },
    {
      name: 'DOLOR',
      price: 'Custom',
      period: '',
      features: [
        'Lorem ipsum dolor sit amet',
        'Consectetur adipiscing elit',
        'Sed do eiusmod tempor',
        'Incididunt ut labore',
        'Et dolore magna aliqua',
        'Ut enim ad minim veniam',
        'Quis nostrud exercitation',
        'Ullamco laboris nisi'
      ],
      popular: false
    }
  ];

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bebas text-vyom-midnight mb-6">
            SPORTS PACKAGES
          </h2>
          <p className="text-xl text-eclipse-grey max-w-3xl mx-auto font-inter">
            Redefine what game-day means
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div key={index} className={`relative rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ${pkg.popular ? 'border-2 border-aurora-teal bg-gradient-to-b from-white to-aurora-teal/5 scale-105' : 'border border-gray-200 bg-white hover:border-aurora-teal/30'} p-8 hover:-translate-y-1`}>
              
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-aurora-teal text-white px-6 py-2 text-sm font-inter font-semibold rounded-full shadow-lg">
                    POPULAR
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-3xl font-bebas text-vyom-midnight mb-4">{pkg.name}</h3>
                
                <div className="mb-6">
                  <span className="text-4xl font-bebas text-vyom-midnight">
                    {pkg.price}
                  </span>
                  <span className="text-eclipse-grey font-inter">{pkg.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-aurora-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-eclipse-grey font-inter text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 font-inter font-semibold ${
                pkg.popular
                  ? 'bg-aurora-teal text-white hover:bg-aurora-teal/90 rounded-xl shadow-lg hover:shadow-xl'
                  : 'border-2 border-aurora-teal text-aurora-teal hover:bg-aurora-teal hover:text-white rounded-xl shadow-lg hover:shadow-xl'
              } transition-all duration-300`}>
                {pkg.price === 'Custom' ? 'CONTACT US' : 'GET STARTED'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;