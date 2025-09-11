import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Packages from './components/Packages';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-vyom-midnight">
      <Header />
      <main>
        <Hero />
        <Partners />
        <Services />
        <About />
        <Team />
        <Packages />
        <News />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;