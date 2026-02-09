import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const LightningBeam = ({ delay, duration, className }: { delay: number; duration: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, x: -100, y: -100 }}
    animate={{ 
      opacity: [0, 1, 0, 0],
      x: ["0%", "100%"],
      y: ["0%", "100%"],
    }}
    transition={{ 
      duration: duration, 
      ease: "linear", 
      repeat: Infinity, 
      repeatDelay: delay,
      times: [0, 0.4, 0.5, 1]
    }}
    className={`absolute z-0 pointer-events-none w-[150%] h-[150%] ${className}`}
  >
    <div className="w-[40%] h-[2px] bg-gradient-to-r from-transparent via-ucx-cyan to-transparent shadow-[0_0_15px_rgba(6,182,212,0.6)] transform -rotate-45 blur-[1px]" />
  </motion.div>
);

const Hero: React.FC = () => {
  return (
    <section id="hero_section" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Goleiro em ação" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ucx-navy via-ucx-navy/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ucx-navy via-ucx-navy/70 to-transparent" />
      </div>

      {/* Lightning / Rays Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <LightningBeam delay={2} duration={3} className="top-[-20%] left-[-20%]" />
        <LightningBeam delay={5} duration={4} className="top-[10%] left-[-10%] opacity-50" />
        <LightningBeam delay={0.5} duration={2.5} className="top-[-30%] left-[20%]" />
        
        {/* Horizontal Fast Flash */}
        <motion.div
             animate={{ opacity: [0, 0.1, 0] }}
             transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 10 }}
             className="absolute top-1/3 left-0 w-full h-32 bg-cyan-400/20 blur-3xl transform -skew-y-12"
        />
      </div>

      <div className="container mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-12 items-center">
        
        {/* 1. Headline (Text) */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-start-1 lg:row-start-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-ucx-cyan text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck size={14} />
              Performance Profissional
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1] mb-6 relative">
              <span className="absolute -left-8 -top-8 text-ucx-cyan/10 text-9xl -z-10 animate-pulse-slow select-none">⚡</span>
              SEGURANÇA <br />
              ABSOLUTA COM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ucx-cyan to-blue-500 filter drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                CONTACTGRIP PRO
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-xl font-light leading-relaxed">
              A fusão perfeita entre a aderência do látex 4mm e a liberdade do NeoFlex Pro™. Projetada para quem não aceita falhas nos momentos decisivos.
            </p>
          </motion.div>

        {/* 2. Hero Visual (Image) */}
        <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 relative flex justify-center perspective-1000 my-4 lg:my-0">
            {/* Wrapper for Entrance Animation */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                className="relative z-10 w-full max-w-md"
            >
                {/* Wrapper for Floating Animation */}
                <motion.div
                   animate={{ y: [0, -15, 0] }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                   className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-cyan-900/20 group bg-slate-900/80 backdrop-blur-sm"
                >
                    {/* Background Glow inside card */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-950 z-0" />
                    
                    {/* Centered Image - Changed to object-cover to fill card */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <img 
                            src="https://painel.lipplead.com/wp-content/uploads/2026/02/Gemini_Generated_Image_4bc71v4bc71v4bc7-1-_1_-scaled.webp" 
                            alt="Luva UCX Pro Detail" 
                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 will-change-transform"
                        />
                    </div>

                    {/* Shimmer Effect */}
                    <motion.div 
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: "200%", opacity: [0, 0.3, 0] }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/20 to-transparent skew-x-12 pointer-events-none z-20"
                    />
                    
                    {/* Floating Badge */}
                    <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-950/90 backdrop-blur-md rounded-xl border border-slate-700/50 z-30 shadow-lg">
                        <div className="flex items-center gap-2 mb-1">
                            <Zap size={14} className="text-yellow-400 fill-yellow-400 animate-pulse" />
                            <p className="text-ucx-cyan text-xs font-bold uppercase">Tecnologia em Foco</p>
                        </div>
                        <p className="text-white text-sm font-medium">Palma 4mm com memória de impacto</p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Decorative Elements - Pulsing Aura */}
            <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-ucx-cyan/10 rounded-full blur-3xl" 
            />
        </div>

        {/* 3. CTA Buttons */}
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 lg:col-start-1 lg:row-start-2 lg:self-start"
          >
            <a 
              href="https://wa.me/5527997088071"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-ucx-cyan hover:bg-cyan-400 text-ucx-navy text-lg font-bold rounded-lg transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(6,182,212,0.3)] relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Quero Grip Profissional
                <ArrowRight size={20} />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
            </a>
            <a 
              href="#tech"
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-white font-semibold rounded-lg transition-all backdrop-blur-sm"
            >
              Ver Detalhes Técnicos
            </a>
          </motion.div>

      </div>
    </section>
  );
};

export default Hero;