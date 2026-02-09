import React from 'react';
import { motion } from 'framer-motion';
import { Hand, Layers, Scissors, Lock, LucideIcon } from 'lucide-react';
import { Feature } from '../types';

const TechCard: React.FC<{ feature: Feature; index: number }> = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 hover:border-ucx-cyan/50 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-ucx-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 mb-6 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 group-hover:bg-ucx-cyan group-hover:text-ucx-navy transition-colors duration-300 shadow-lg">
          <feature.icon size={28} strokeWidth={1.5} />
        </div>
        
        <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold uppercase tracking-wider text-ucx-cyan bg-ucx-cyan/10 rounded-full border border-ucx-cyan/20">
          {feature.highlight_tag}
        </div>

        <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-ucx-cyan transition-colors">
          {feature.tech_name}
        </h3>
        
        <p className="text-slate-400 leading-relaxed text-sm">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

const TechSpecs: React.FC = () => {
  const features: Feature[] = [
    {
      id: "feature_palma",
      tech_name: "Palma UCX ContactGrip Pro 4mm",
      icon: Hand,
      description: "Látex de alta aderência desenvolvido para recepção segura. Oferece controle consistente mesmo em lances rápidos e defesas à queima-roupa.",
      highlight_tag: "Grip Máximo"
    },
    {
      id: "feature_dorso",
      tech_name: "Dorso UCX NeoFlex Pro™️",
      icon: Layers,
      description: "Engenharia de materiais flexíveis que proporcionam um ajuste premium. Acompanha o movimento natural da mão sem travar.",
      highlight_tag: "Conforto"
    },
    {
      id: "feature_corte",
      tech_name: "Corte Híbrido (Neg + Roll)",
      icon: Scissors,
      description: "O equilíbrio perfeito. Encaixe justo e anatômico (Negativo) com a área de contato expandida (RollFinger). Sensibilidade e precisão.",
      highlight_tag: "Precisão"
    },
    {
      id: "feature_fechamento",
      tech_name: "Fechamento WrapLock 360™️",
      icon: Lock,
      description: "Sistema de envolvimento total do punho. Garante estabilidade da articulação e firmeza inabalável para socar a bola.",
      highlight_tag: "Estabilidade"
    }
  ];

  return (
    <section id="tech" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-4 uppercase tracking-tight">
                Tecnologia de <span className="text-ucx-cyan">Elite</span>
            </h2>
            <div className="h-1 w-24 bg-ucx-cyan mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <TechCard key={feature.id} feature={feature} index={idx} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-slate-900 border border-yellow-500/30 text-yellow-500/90 shadow-lg shadow-yellow-900/10">
                <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></span>
                <span className="text-sm font-semibold tracking-wide uppercase">Indicado para: Jogos Competitivos</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;