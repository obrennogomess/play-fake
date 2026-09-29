import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

export const ScreenshotsCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const screenshots = [
    {
      id: 1,
      src: '/screenshots/screenshot1.svg',
      title: 'Rastreamento de Encomendas em Tempo Real',
      subtitle: 'Acompanhe todas as suas entregas nacionais e internacionais dos Correios',
    },
    {
      id: 2,
      src: '/screenshots/screenshot2.svg',
      title: 'Notificações e Avisos de Entrega',
      subtitle: 'Saiba o momento exato em que o carteiro saiu para entrega ao destinatário',
    },
    {
      id: 3,
      src: '/screenshots/screenshot3.svg',
      title: 'Simulador de Preços e Prazos Sedex & PAC',
      subtitle: 'Calcule fretes e descubra o prazo estimado com precisão',
    },
    {
      id: 4,
      src: '/screenshots/screenshot4.svg',
      title: 'Minhas Importações e Gestão de Pacotes',
      subtitle: 'Organize suas encomendas com apelidos personalizados e histórico completo',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-6 border-b border-[#f1f3f4]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative group">
          {/* Scroll Left Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/95 shadow-lg border border-[#dadce0] flex items-center justify-center text-[#202124] hover:bg-white transition-opacity opacity-0 group-hover:opacity-100 hidden sm:flex cursor-pointer"
            aria-label="Rolar para esquerda"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Screenshot List */}
          <div
            ref={scrollRef}
            className="flex items-center gap-4 overflow-x-auto scrollbar-none py-2 scroll-smooth"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {screenshots.map((s, idx) => (
              <div
                key={s.id}
                onClick={() => setSelectedImage(idx)}
                className="shrink-0 w-[280px] sm:w-[380px] aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 border border-[#e0e0e0] bg-[#111827] cursor-pointer group/item relative"
                style={{ scrollSnapAlign: 'start' }}
              >
                <img
                  src={s.src}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover/item:scale-[1.02]"
                />
                
                {/* Overlay hover badge */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-black/60 backdrop-blur-xs text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Ampliar tela</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Right Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/95 shadow-lg border border-[#dadce0] flex items-center justify-center text-[#202124] hover:bg-white transition-opacity opacity-0 group-hover:opacity-100 hidden sm:flex cursor-pointer"
            aria-label="Rolar para direita"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-md animate-in fade-in duration-150">
          <div className="relative max-w-5xl w-full">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#00e5ff] p-2 transition-colors flex items-center gap-1 text-sm font-semibold"
            >
              <span>Fechar</span>
              <X className="w-6 h-6" />
            </button>

            {/* Main Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0c1427]">
              <img
                src={screenshots[selectedImage].src}
                alt={screenshots[selectedImage].title}
                className="w-full max-h-[75vh] object-contain mx-auto"
              />
              <div className="p-4 bg-[#111827] text-white">
                <h4 className="text-base font-bold text-white">
                  {screenshots[selectedImage].title}
                </h4>
                <p className="text-xs text-[#94a3b8] mt-1">
                  {screenshots[selectedImage].subtitle}
                </p>
              </div>
            </div>

            {/* Prev / Next controls */}
            {selectedImage > 0 && (
              <button
                onClick={() => setSelectedImage(selectedImage - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}
            {selectedImage < screenshots.length - 1 && (
              <button
                onClick={() => setSelectedImage(selectedImage + 1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
