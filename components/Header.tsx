import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Tecnologia', href: '#tech' },
    { name: 'Tamanhos', href: '#sizes' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="https://painel.lipplead.com/wp-content/uploads/2026/02/f8caa5a7-b668-4b67-89e2-d5612bf103e0-removebg-preview.webp" 
            alt="UCX Sports Logo" 
            className="h-16 md:h-20 w-auto object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-ucx-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5527997088071?text=Olá,%20quero%20garantir%20minha%20UCX!"
            className="group relative px-6 py-2 bg-transparent overflow-hidden rounded-full border border-ucx-cyan/30 text-ucx-cyan text-sm font-bold tracking-wide hover:bg-ucx-cyan hover:text-ucx-navy transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              GARANTIR A MINHA
              <ShoppingBag size={16} />
            </span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-200 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-ucx-cyan"
                >
                  {link.name}
                </a>
              ))}
               <a
                href="https://wa.me/5527997088071"
                className="w-full text-center py-3 bg-ucx-cyan text-ucx-navy font-bold rounded-lg"
              >
                COMPRAR AGORA
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;