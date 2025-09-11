import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-celestial-haze">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bebas text-vyom-midnight mb-6">
            GET IN TOUCH
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-aurora-teal">
            <h3 className="text-3xl font-bebas text-vyom-midnight mb-8">GET IN TOUCH</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-aurora-teal rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-inter font-semibold">P</span>
                </div>
                <div>
                  <h4 className="text-vyom-midnight font-inter font-semibold mb-1">Lorem Ipsum</h4>
                  <p className="text-aurora-teal font-inter font-medium">+1 (555) 123-4567</p>
                  <p className="text-eclipse-grey font-inter text-sm">Lorem ipsum dolor sit</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-aurora-teal rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-inter font-semibold">E</span>
                </div>
                <div>
                  <h4 className="text-vyom-midnight font-inter font-semibold mb-1">Dolor Sit</h4>
                  <p className="text-aurora-teal font-inter font-medium">lorem@ipsum.com</p>
                  <p className="text-eclipse-grey font-inter text-sm">Lorem ipsum dolor sit</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-aurora-teal rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-inter font-semibold">L</span>
                </div>
                <div>
                  <h4 className="text-vyom-midnight font-inter font-semibold mb-1">Consectetur</h4>
                  <p className="text-aurora-teal font-inter font-medium">Lorem Ipsum Center</p>
                  <p className="text-eclipse-grey font-inter text-sm">123 Lorem St, Ipsum City</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-aurora-teal">
            <h3 className="text-3xl font-bebas text-vyom-midnight mb-8">SEND MESSAGE</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-vyom-midnight font-inter font-medium mb-2">Lorem Ipsum *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-vyom-midnight font-inter focus:outline-none focus:border-aurora-teal focus:ring-2 focus:ring-aurora-teal/20 transition-all duration-300"
                    placeholder="Lorem ipsum"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-vyom-midnight font-inter font-medium mb-2">Dolor Sit *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-vyom-midnight font-inter focus:outline-none focus:border-aurora-teal focus:ring-2 focus:ring-aurora-teal/20 transition-all duration-300"
                    placeholder="lorem@ipsum.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-vyom-midnight font-inter font-medium mb-2">Consectetur</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-vyom-midnight font-inter focus:outline-none focus:border-aurora-teal focus:ring-2 focus:ring-aurora-teal/20 transition-all duration-300"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-vyom-midnight font-inter font-medium mb-2">Adipiscing *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-vyom-midnight font-inter focus:outline-none focus:border-aurora-teal focus:ring-2 focus:ring-aurora-teal/20 resize-none transition-all duration-300"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-aurora-teal text-white py-4 px-8 rounded-xl font-inter font-semibold hover:bg-aurora-teal/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;