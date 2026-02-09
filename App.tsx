import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechSpecs from './components/TechSpecs';
import ProductShowcase from './components/ProductShowcase';
import SizeGuide from './components/SizeGuide';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative font-sans selection:bg-ucx-cyan selection:text-ucx-navy">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-ucx-cyan/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px]" />
      </div>

      <Header isScrolled={isScrolled} />
      
      <main className="z-10 flex-grow">
        <Hero />
        <TechSpecs />
        <ProductShowcase />
        <SizeGuide />
        <FinalCTA />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;