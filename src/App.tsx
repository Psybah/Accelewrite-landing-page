import React from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Stats />
      <Benefits />
      <Testimonials />
      <CTA />
    </div>
  );
}

export default App;