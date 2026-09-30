import React, { useState } from 'react';
import { Star, Share2, Bookmark, Info, Laptop, Tv, Smartphone, Tablet, Check } from 'lucide-react';
import { APP_DETAILS } from '../data/reviews';

interface AppHeroProps {
  onInstall: () => void;
  onShare: () => void;
  onToggleWishlist: () => void;
  isWishlisted: boolean;
  downloadState: 'idle' | 'downloading' | 'completed';
  downloadProgress: number;
}

export const AppHero: React.FC<AppHeroProps> = ({
  onInstall,
  onShare,
  onToggleWishlist,
  isWishlisted,
  downloadState,
  downloadProgress,
}) => {
  const [showDeviceModal, setShowDeviceModal] = useState(false);
  const [showAgeModal, setShowAgeModal] = useState(false);

  return (
    <section className="pt-6 sm:pt-10 pb-6 border-b border-[#f1f3f4]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 lg:gap-10">
          
          {/* Left Info Column */}
          <div className="flex-1">
            <div className="flex items-start gap-4 sm:gap-6">
              {/* App Icon */}
              <div className="relative shrink-0 w-20 h-20 sm:w-28 sm:h-28 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#0000000d] bg-[#0c1427] flex items-center justify-center">
                <img
                  src="/images/logo.svg"
                  alt="Ícone do Cineva IPTV"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Developer */}
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#202124] leading-tight break-words">
                  {APP_DETAILS.name}
                </h1>

                <div className="mt-1 flex items-center gap-2">
                  <span className="text-sm sm:text-base font-medium text-[#01875f] hover:underline cursor-pointer">
                    {APP_DETAILS.developer}
                  </span>
                  <span className="text-xs text-[#5f6368]">•</span>
                  <span className="text-xs sm:text-sm text-[#5f6368]">
                    {APP_DETAILS.category}
                  </span>
                </div>

                {/* Subtitle / Device availability */}
                <button
                  onClick={() => setShowDeviceModal(true)}
                  className="mt-2 text-xs sm:text-sm text-[#5f6368] hover:text-[#202124] flex items-center gap-1.5 transition-colors text-left"
                >
                  <Tv className="w-3.5 h-3.5 text-[#01875f] shrink-0" />
                  <span>{APP_DETAILS.subtitle}</span>
                </button>
              </div>
            </div>

            {/* Metrics Row: Rating, Downloads, Age */}
            <div className="mt-6 flex items-center justify-between sm:justify-start gap-4 sm:gap-12 py-3 px-2 sm:px-0 border-y sm:border-y-0 border-[#f1f3f4]">
              {/* Rating */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center gap-1">
                  <span className="text-sm sm:text-base font-bold text-[#202124]">
                    5,0
                  </span>
                  <Star className="w-3.5 h-3.5 fill-[#202124] text-[#202124]" />
                </div>
                <span className="text-xs text-[#5f6368] mt-0.5">
                  {APP_DETAILS.ratingCountText}
                </span>
              </div>

              <div className="w-[1px] h-8 bg-[#dadce0] sm:block" />

              {/* Downloads */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span className="text-sm sm:text-base font-bold text-[#202124]">
                  {APP_DETAILS.downloadsText}
                </span>
                <span className="text-xs text-[#5f6368] mt-0.5">
                  Downloads
                </span>
              </div>

              <div className="w-[1px] h-8 bg-[#dadce0] sm:block" />

              {/* Content rating */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <button
                  onClick={() => setShowAgeModal(true)}
                  className="flex items-center gap-1 hover:opacity-80 transition-opacity"
                >
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-xs bg-[#000000] text-white text-[11px] font-bold">
                    18
                  </span>
                  <Info className="w-3.5 h-3.5 text-[#5f6368]" />
                </button>
                <span className="text-xs text-[#5f6368] mt-0.5 max-w-[120px] sm:max-w-none truncate">
                  Maiores de 18 anos
                </span>
              </div>
            </div>

            {/* Action Buttons: Instalar / Compartilhar / Lista de Desejos */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {/* Main Green Install Button */}
              <button
                onClick={onInstall}
                disabled={downloadState === 'downloading'}
                className="relative overflow-hidden inline-flex items-center justify-center px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-white font-medium text-sm sm:text-base bg-[#01875f] hover:bg-[#01704e] active:bg-[#005c3f] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer select-none min-w-[140px] disabled:cursor-wait"
              >
                {downloadState === 'downloading' ? (
                  <span>Carregando</span>
                ) : (
                  <span>Instalar</span>
                )}
              </button>

              {/* Share button */}
              <button
                onClick={onShare}
                className="inline-flex items-center gap-2 px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-[#01875f] font-medium text-sm hover:bg-[#e6f4ea] transition-colors cursor-pointer select-none border border-transparent hover:border-[#ceead6]"
                title="Compartilhar aplicativo"
              >
                <Share2 className="w-4 h-4 text-[#01875f]" />
                <span className="hidden sm:inline">Compartilhar</span>
              </button>

              {/* Wishlist button */}
              <button
                onClick={onToggleWishlist}
                className={`inline-flex items-center gap-2 px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-medium text-sm transition-colors cursor-pointer select-none border ${
                  isWishlisted
                    ? 'text-[#01875f] bg-[#e6f4ea] border-[#ceead6]'
                    : 'text-[#5f6368] hover:text-[#202124] hover:bg-[#f1f3f4] border-transparent'
                }`}
                title="Adicionar à lista de desejos"
              >
                <Bookmark className={`w-4 h-4 ${isWishlisted ? 'fill-[#01875f] text-[#01875f]' : ''}`} />
                <span className="hidden sm:inline">
                  {isWishlisted ? 'Na lista de desejos' : 'Adicionar à lista de desejos'}
                </span>
              </button>
            </div>

            {/* Quick compatibility badge */}
            <div className="mt-4 flex items-center gap-2 text-xs text-[#5f6368]">
              <span className="w-2 h-2 rounded-full bg-[#01875f]" />
              <span>Otimizado para controle remoto e toque em TV Box, Smart TV e Android</span>
            </div>
          </div>
        </div>
      </div>

      {/* Device Compatibility Modal */}
      {showDeviceModal && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 border border-[#e0e0e0] animate-in fade-in zoom-in-95 duration-150">
            <h3 className="text-lg font-bold text-[#202124]">
              Dispositivos Compatíveis
            </h3>
            <p className="text-xs text-[#5f6368] mt-1">
              O Cineva IPTV foi desenvolvido e testado para máxima performance nos seguintes aparelhos:
            </p>

            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f8f9fa] border border-[#e0e0e0]">
                <div className="w-10 h-10 rounded-lg bg-[#e8f0fe] flex items-center justify-center text-[#1a73e8] shrink-0">
                  <Tv className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-[#202124]">Smart TVs &amp; TV Box</h4>
                  <p className="text-xs text-[#5f6368]">Android TV, Google TV, Xiaomi Mi Box, Aquário, MXQ, TX3</p>
                </div>
                <span className="text-xs font-semibold text-[#01875f] bg-[#e6f4ea] px-2 py-0.5 rounded-full">100% Compatível</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f8f9fa] border border-[#e0e0e0]">
                <div className="w-10 h-10 rounded-lg bg-[#e8f0fe] flex items-center justify-center text-[#1a73e8] shrink-0">
                  <Laptop className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-[#202124]">Fire TV Stick</h4>
                  <p className="text-xs text-[#5f6368]">Firestick Lite, 4K, 4K Max e Fire TV Cube</p>
                </div>
                <span className="text-xs font-semibold text-[#01875f] bg-[#e6f4ea] px-2 py-0.5 rounded-full">100% Compatível</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f8f9fa] border border-[#e0e0e0]">
                <div className="w-10 h-10 rounded-lg bg-[#e8f0fe] flex items-center justify-center text-[#1a73e8] shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-[#202124]">Smartphones Android</h4>
                  <p className="text-xs text-[#5f6368]">Samsung, Motorola, Xiaomi, Realme, LG (Android 5.0+)</p>
                </div>
                <span className="text-xs font-semibold text-[#01875f] bg-[#e6f4ea] px-2 py-0.5 rounded-full">100% Compatível</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f8f9fa] border border-[#e0e0e0]">
                <div className="w-10 h-10 rounded-lg bg-[#e8f0fe] flex items-center justify-center text-[#1a73e8] shrink-0">
                  <Tablet className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-[#202124]">Tablets Android</h4>
                  <p className="text-xs text-[#5f6368]">Galaxy Tab, Lenovo Tab, Multilaser</p>
                </div>
                <span className="text-xs font-semibold text-[#01875f] bg-[#e6f4ea] px-2 py-0.5 rounded-full">100% Compatível</span>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowDeviceModal(false)}
                className="px-5 py-2 text-sm text-white font-medium bg-[#01875f] hover:bg-[#01704e] rounded-lg"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Content Rating Modal */}
      {showAgeModal && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 border border-[#e0e0e0]">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-md bg-black text-white text-base font-bold flex items-center justify-center">
                18
              </span>
              <div>
                <h3 className="text-base font-bold text-[#202124]">Classificação 18+</h3>
                <p className="text-xs text-[#5f6368]">ClassInd - Ministério da Justiça</p>
              </div>
            </div>
            <div className="mt-4 text-xs text-[#5f6368] space-y-2">
              <p>O aplicativo oferece acesso a canais abertos, fechados, filmes, séries e eventos ao vivo com conteúdos variados.</p>
              <p>Possui <strong>Controle Parental com senha PIN</strong> para bloquear canais e conteúdos adultos para crianças.</p>
            </div>
            <div className="mt-5 flex justify-end">
              <button
                onClick={() => setShowAgeModal(false)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#01875f] rounded-lg hover:bg-[#01704e]"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
