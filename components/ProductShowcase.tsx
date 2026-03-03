import React, { useState, useRef } from 'react';
import { Camera, ZoomIn, ChevronDown } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [zoomState, setZoomState] = useState({ x: 50, y: 50, isZoomed: false });
  const imageRef = useRef<HTMLDivElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const images = [
    "https://painel.lipplead.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-09-at-11.13.08.jpeg",
    "https://painel.lipplead.com/wp-content/uploads/2026/02/Gemini_Generated_Image_pm52gapm52gapm52201_converted.webp",
    "https://painel.lipplead.com/wp-content/uploads/2026/02/Gemini_Generated_Image_hm7buvhm7buvhm7b201_converted.webp",
    "https://painel.lipplead.com/wp-content/uploads/2026/02/Gemini_Generated_Image_jjfndqjjfndqjjfn201_converted.webp",
    "https://painel.lipplead.com/wp-content/uploads/2026/02/Gemini_Generated_Image_jmgz4ijmgz4ijmgz201_converted-1.webp",
    "https://painel.lipplead.com/wp-content/uploads/2026/02/Gemini_Generated_Image_qps65gqps65gqps6201201_converted.webp",
    "https://painel.lipplead.com/wp-content/uploads/2026/02/Gemini_Generated_Image_36dv6a36dv6a36dv201_converted.webp"
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomState({ x, y, isZoomed: true });
  };

  const handleMouseLeave = () => {
    setZoomState(prev => ({ ...prev, isZoomed: false }));
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setZoomState(prev => ({ 
      x, 
      y, 
      isZoomed: !prev.isZoomed 
    }));
  };

  const scrollThumbnails = () => {
    if (thumbnailsRef.current) {
      thumbnailsRef.current.scrollBy({ top: 220, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ucx-cyan/5 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-ucx-cyan text-xs font-bold uppercase tracking-wider mb-4">
              <Camera size={14} />
              Galeria Pro
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-4">
                VISUALIZAÇÃO <span className="text-ucx-cyan">EM DETALHES</span>
            </h2>
            <p className="text-slate-400 max-w-lg">
                Explore a construção da luva. Passe o mouse ou toque para ampliar e ver a textura do ContactGrip.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
            {/* Main Image Stage */}
            <div className="lg:col-span-10 order-1 lg:order-2">
                <div 
                    ref={imageRef}
                    className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 group cursor-crosshair touch-none"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                >
                    {/* Placeholder removed to prevent blinking artifacts */}
                    <div className="absolute inset-0 bg-slate-800" />
                    
                    {/* Normal Image */}
                    <img 
                        src={images[selectedIndex]} 
                        alt="Produto em detalhe"
                        className={`w-full h-full object-cover transition-opacity duration-300 relative z-10 ${zoomState.isZoomed ? 'opacity-0' : 'opacity-100'}`}
                    />

                    {/* Zoomed Image (shown on hover/click) */}
                    <div 
                        className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-150 z-20"
                        style={{
                            opacity: zoomState.isZoomed ? 1 : 0,
                            backgroundImage: `url(${images[selectedIndex]})`,
                            backgroundPosition: `${zoomState.x}% ${zoomState.y}%`,
                            backgroundSize: '250%',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />

                    {/* Hint overlay */}
                    <div className={`absolute bottom-6 right-6 px-4 py-2 bg-slate-950/80 backdrop-blur rounded-lg border border-slate-700 pointer-events-none transition-opacity duration-300 z-30 ${zoomState.isZoomed ? 'opacity-0' : 'opacity-100'}`}>
                        <div className="flex items-center gap-2 text-xs font-bold text-white uppercase">
                            <ZoomIn size={14} className="text-ucx-cyan" />
                            Zoom Ativo
                        </div>
                    </div>
                </div>
            </div>

            {/* Thumbnails */}
            <div className="lg:col-span-2 order-2 lg:order-1 flex flex-col gap-4">
                <div 
                    ref={thumbnailsRef}
                    className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto scrollbar-hide pb-4 lg:pb-0 snap-x lg:snap-y"
                    style={{ maxHeight: '560px' }} // Height for approx 5 items (h-24 + gap-4)
                >
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedIndex(idx)}
                            className={`relative flex-shrink-0 w-20 h-20 lg:w-full lg:h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 snap-start ${selectedIndex === idx ? 'border-ucx-cyan shadow-[0_0_15px_rgba(6,182,212,0.3)] opacity-100' : 'border-transparent opacity-50 hover:opacity-100'}`}
                        >
                            <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
                
                {/* Scroll Down Button (Desktop Only) */}
                <button 
                    onClick={scrollThumbnails}
                    className="hidden lg:flex items-center justify-center w-full py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-ucx-cyan hover:border-ucx-cyan/50 hover:bg-slate-800 transition-all shadow-lg group"
                    aria-label="Ver mais fotos"
                >
                    <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;