import React from 'react';
import { Instagram, Facebook, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
             <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                 <img 
                    src="https://painel.lipplead.com/wp-content/uploads/2026/02/f8caa5a7-b668-4b67-89e2-d5612bf103e0-removebg-preview.webp" 
                    alt="UCX Sports Logo" 
                    className="h-20 md:h-24 w-auto object-contain"
                 />
             </div>
             <p className="text-slate-500 text-sm">
               Equipamento de elite para goleiros que exigem o máximo.
             </p>
          </div>

          <div className="flex gap-6">
             <a href="#" className="text-slate-400 hover:text-ucx-cyan transition-colors">
                 <Instagram size={24} />
             </a>
             <a href="#" className="text-slate-400 hover:text-ucx-cyan transition-colors">
                 <Facebook size={24} />
             </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
            <p>&copy; 2024 UCX Sports. Todos os direitos reservados.</p>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
                <ShieldCheck size={14} />
                <span>Compra Segura e Garantida</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;