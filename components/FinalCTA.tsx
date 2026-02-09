import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ShoppingCart, X, HelpCircle, ChevronLeft } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalView, setModalView] = useState<'select-size' | 'show-chart'>('select-size');

  const sizes = [8, 9, 10, 11];

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalView('select-size');
    setIsModalOpen(true);
  };

  const handleSizeSelect = (size: number) => {
    const message = `Olá, quero comprar a luva UCX com ContactGrip Pro no tamanho ${size}!`;
    const url = `https://wa.me/5527997088071?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsModalOpen(false);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-ucx-navy">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-20">
         <div className="absolute -right-20 -top-20 w-96 h-96 bg-ucx-cyan rounded-full blur-[128px]" />
         <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-600 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">
            VOCÊ ESTÁ A UM PASSO <br />
            DO <span className="text-ucx-cyan">NÍVEL PRO</span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-10 font-light max-w-2xl mx-auto">
            Leve a tecnologia UCX para dentro da sua área e sinta a diferença no primeiro encaixe.
          </p>

          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-ucx-cyan via-blue-500 to-ucx-cyan">
             <div className="bg-slate-950 rounded-xl p-8 md:p-12">
                <div className="flex flex-col items-center gap-2 mb-8 text-yellow-500 font-bold bg-yellow-500/10 py-2 px-4 rounded-full inline-flex">
                    <span className="animate-pulse">⚠️ Estoque limitado da coleção atual</span>
                </div>

                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <button
                        onClick={handleOpenModal}
                        className="flex items-center justify-center gap-3 px-8 py-5 bg-green-500 hover:bg-green-400 text-slate-950 text-lg font-bold rounded-xl transition-all shadow-lg hover:shadow-green-500/25 transform hover:-translate-y-1 w-full md:w-auto"
                    >
                        <MessageCircle size={24} />
                        COMPRAR PELO WHATSAPP
                    </button>
                </div>
                <p className="mt-6 text-sm text-slate-500">
                    Atendimento personalizado • Envio para todo o Brasil
                </p>
             </div>
          </div>
        </motion.div>
      </div>

      {/* Modal for Size Selection */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
             {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/50">
                 {modalView === 'show-chart' ? (
                   <button 
                     onClick={() => setModalView('select-size')}
                     className="text-slate-400 hover:text-white flex items-center gap-1 text-sm font-medium transition-colors"
                   >
                     <ChevronLeft size={18} />
                     Voltar
                   </button>
                 ) : (
                    <h3 className="text-xl font-heading font-bold text-white">Selecione seu Tamanho</h3>
                 )}
                 
                 <button 
                    onClick={() => setIsModalOpen(false)}
                    className="text-slate-400 hover:text-white transition-colors"
                 >
                    <X size={24} />
                 </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                 <AnimatePresence mode="wait">
                   {modalView === 'select-size' ? (
                     <motion.div 
                        key="select"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                     >
                       <p className="text-slate-400 mb-6 text-center">
                         Escolha o tamanho para verificar a disponibilidade imediata no WhatsApp.
                       </p>
                       
                       <div className="grid grid-cols-2 gap-4 mb-8">
                          {sizes.map((size) => (
                            <button
                              key={size}
                              onClick={() => handleSizeSelect(size)}
                              className="group relative p-4 bg-slate-800 border border-slate-700 rounded-xl hover:border-ucx-cyan hover:bg-slate-800/80 transition-all duration-200"
                            >
                               <span className="text-2xl font-bold text-white group-hover:text-ucx-cyan transition-colors">{size}</span>
                               <span className="block text-xs text-slate-500 mt-1">Profissional</span>
                            </button>
                          ))}
                       </div>

                       <div className="text-center">
                          <button
                             onClick={() => setModalView('show-chart')} 
                             className="inline-flex items-center gap-2 text-ucx-cyan hover:text-cyan-300 text-sm font-medium underline-offset-4 hover:underline transition-all"
                          >
                             <HelpCircle size={16} />
                             Não sei meu tamanho
                          </button>
                       </div>
                     </motion.div>
                   ) : (
                     <motion.div
                        key="chart"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex flex-col items-center"
                     >
                        <div className="w-full bg-white/5 rounded-lg overflow-hidden border border-slate-700 mb-4">
                           <img 
                              src="https://painel.lipplead.com/wp-content/uploads/2026/02/Gemini_Generated_Image_ms9z67ms9z67ms9z-scaled-e1770340616501.webp"
                              alt="Tabela de Medidas"
                              className="w-full h-auto object-contain"
                           />
                        </div>
                        <p className="text-sm text-slate-500 text-center">
                           Meça da ponta do dedo médio até o início do punho.
                        </p>
                     </motion.div>
                   )}
                 </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FinalCTA;