import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, Shield, Sparkles, Tv, Zap, Film, Radio } from 'lucide-react';
import { APP_DETAILS } from '../data/reviews';

export const AboutSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const tags = [
    { label: 'IPTV Streaming', primary: true },
    { label: 'Canais Ao Vivo', primary: true },
    { label: 'Filmes & Séries', primary: true },
    { label: 'Esportes 4K', primary: false },
    { label: 'Estilizado', primary: false },
    { label: 'Casual', primary: false },
    { label: 'ativação e qualificação', primary: false },
    { label: 'Off-line', primary: false },
  ];

  return (
    <section className="py-6 sm:py-8 border-b border-[#f1f3f4]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-bold text-[#202124]">
            Sobre este app
          </h2>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#5f6368] hover:text-[#202124] hover:bg-[#f1f3f4] transition-colors"
            aria-label="Mais detalhes sobre o app"
          >
            <ArrowRight className="w-5 h-5 text-[#5f6368]" />
          </button>
        </div>

        {/* Short summary */}
        <div className="mt-3 text-sm text-[#5f6368] leading-relaxed">
          <p className="font-medium text-[#202124]">
            {APP_DETAILS.subtitle}
          </p>
          <p className="mt-1">
            <strong>Cineva IPTV</strong> é o reprodutor de mídia e streaming mais completo e veloz para TV Box, Smart TV Android e Firestick. Assista a canais de TV aberta e fechada em Ultra HD 4K, filmes que acabaram de sair do cinema, séries completas e todos os jogos de futebol ao vivo com zero atraso e sem travamentos.
          </p>

          {/* Expandable detailed content */}
          {isExpanded && (
            <div className="mt-4 pt-4 border-t border-[#f1f3f4] space-y-4 animate-in fade-in duration-200">
              <div>
                <h3 className="text-sm font-bold text-[#202124] mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#01875f]" />
                  Recursos Exclusivos do Cineva:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#5f6368]">
                  <li><strong>Aceleração de Hardware Nativa:</strong> Decodificação gráfica direta pela GPU para economizar a memória RAM da TV Box.</li>
                  <li><strong>Buffer Inteligente Anti-Congelamento:</strong> Mantém o fluxo contínuo de vídeo mesmo com variações na velocidade de internet.</li>
                  <li><strong>Guia EPG Completo:</strong> Veja a programação com horários atualizados e sinopse em tempo real.</li>
                  <li><strong>Suporte a Áudio Multicanal 5.1 &amp; Legendas:</strong> Alterne dublagem e legendas com facilidade.</li>
                  <li><strong>Controle Parental com Código PIN:</strong> Proteja canais e conteúdos adultos para navegação segura das crianças.</li>
                  <li><strong>Organização por Categorias &amp; Favoritos:</strong> Marque seus canais prediletos e acesse em um clique pelo controle.</li>
                </ul>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#f8f9fa] border border-[#e0e0e0]">
                  <Tv className="w-5 h-5 text-[#01875f] mb-1" />
                  <div className="text-xs font-bold text-[#202124]">Smart TV &amp; Box</div>
                  <div className="text-[11px] text-[#5f6368]">Navegação por controle</div>
                </div>
                <div className="p-3 rounded-xl bg-[#f8f9fa] border border-[#e0e0e0]">
                  <Film className="w-5 h-5 text-[#01875f] mb-1" />
                  <div className="text-xs font-bold text-[#202124]">Cinema 4K VOD</div>
                  <div className="text-[11px] text-[#5f6368]">Filmes e séries diários</div>
                </div>
                <div className="p-3 rounded-xl bg-[#f8f9fa] border border-[#e0e0e0]">
                  <Radio className="w-5 h-5 text-[#01875f] mb-1" />
                  <div className="text-xs font-bold text-[#202124]">Futebol Ao Vivo</div>
                  <div className="text-[11px] text-[#5f6368]">60 FPS sem atraso</div>
                </div>
                <div className="p-3 rounded-xl bg-[#f8f9fa] border border-[#e0e0e0]">
                  <Zap className="w-5 h-5 text-[#01875f] mb-1" />
                  <div className="text-xs font-bold text-[#202124]">Troca Rápida</div>
                  <div className="text-[11px] text-[#5f6368]">Troca em 1 segundo</div>
                </div>
              </div>

              <div className="pt-2 text-xs text-[#5f6368] space-y-1">
                <div><strong>Versão:</strong> {APP_DETAILS.version}</div>
                <div><strong>Tamanho do download:</strong> {APP_DETAILS.apkSize}</div>
                <div><strong>Atualizado em:</strong> {APP_DETAILS.updatedAt}</div>
                <div><strong>Oferecido por:</strong> {APP_DETAILS.developer}</div>
              </div>
            </div>
          )}
        </div>

        {/* Toggle button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 text-xs sm:text-sm font-semibold text-[#01875f] hover:underline flex items-center gap-1 cursor-pointer"
        >
          <span>{isExpanded ? 'Mostrar menos' : 'Ler mais sobre o Cineva'}</span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {/* Tags row */}
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((t, i) => (
            <span
              key={i}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer select-none ${
                t.primary
                  ? 'bg-[#e6f4ea] text-[#01875f] border-[#ceead6]'
                  : 'bg-white text-[#5f6368] border-[#dadce0] hover:bg-[#f1f3f4]'
              }`}
            >
              {t.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
