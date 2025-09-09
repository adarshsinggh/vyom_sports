import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Packages from './components/Packages';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-vyom-midnight">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Packages />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;