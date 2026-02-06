import React, { Suspense } from 'react';
import CustomCursor from './components/CustomCursor';
import FloatingParticles from './components/FloatingParticles';
import ParallaxBackground from './components/ParallaxBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-washi-white">
      <CustomCursor />
      <FloatingParticles />
      <ParallaxBackground />
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <Philosophy />
        <Gallery />
      </main>

      <Footer />
    </div>
  );
};

export default App;