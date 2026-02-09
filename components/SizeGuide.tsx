import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ruler, X } from 'lucide-react';

const SizeGuide: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="sizes" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto bg-slate-800/30 border border-slate-700 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-ucx-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <Ruler className="mx-auto text-ucx-cyan w-12 h-12 mb-6" />
          
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            O Ajuste Perfeito para sua Mão
          </h2>
          <p className="text-slate-400 mb-8">
            Não arrisque o tamanho errado. Use nosso guia oficial UCX para garantir a máxima performance do ContactGrip.
          </p>
          
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-slate-950 font-bold rounded-lg hover:bg-slate-200 transition-colors"
          >
            <Ruler size={18} />
            Abrir Tabela de Medidas
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-2xl flex flex-col items-center justify-center"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute -top-12 right-0 md:-right-8 text-slate-400 hover:text-white transition-colors z-20"
              >
                <X size={32} />
              </button>

              <div className="relative w-full bg-slate-900 rounded-xl border border-slate-700 shadow-2xl overflow-hidden">
                 <img 
                    src="https://painel.lipplead.com/wp-content/uploads/2026/02/Gemini_Generated_Image_ms9z67ms9z67ms9z-scaled-e1770340616501.webp" 
                    alt="Tabela de Medidas UCX" 
                    className="w-full h-auto max-h-[80vh] object-contain"
                 />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SizeGuide;