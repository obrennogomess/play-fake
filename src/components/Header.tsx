import React, { useState } from 'react';
import { Search, HelpCircle, X } from 'lucide-react';

interface HeaderProps {
  onSearch?: (term: string) => void;
  activeCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onSearch,
  activeCategory = 'Apps',
  onSelectCategory,
}) => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showHelpModal, setShowHelpModal] = useState(false);

  const categories = [
    { id: 'Jogos', label: 'Jogos' },
    { id: 'Apps', label: 'Apps' },
    { id: 'Filmes', label: 'Filmes' },
    { id: 'Livros', label: 'Livros' },
    { id: 'Criancas', label: 'Crianças' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
    setShowSearchModal(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#e0e0e0]">
      {/* Top Navbar */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <a
            href="/"
            className="flex items-center gap-2 select-none group"
            title="Google Play"
          >
            {/* Google Play Triangle Logo */}
            <svg
              className="w-10 h-10 shrink-0"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.7 5.5C7.2 6.0 7.0 6.8 7.0 7.7V32.3C7.0 33.2 7.2 34.0 7.7 34.5L7.8 34.6L22.6 19.8V19.5V19.2L7.8 4.4L7.7 5.5Z"
                fill="#00E5FF"
              />
              <path
                d="M27.5 24.7L22.6 19.8V19.5V19.2L27.5 14.3L27.6 14.4L33.4 17.7C35.0 18.6 35.0 20.4 33.4 21.3L27.6 24.6L27.5 24.7Z"
                fill="#FFD600"
              />
              <path
                d="M22.6 19.5L7.7 34.4C8.2 34.9 9.1 35.0 10.1 34.4L27.6 24.7L22.6 19.5Z"
                fill="#FF3D00"
              />
              <path
                d="M22.6 19.5L27.6 14.3L10.1 4.6C9.1 4.0 8.2 4.1 7.7 4.6L22.6 19.5Z"
                fill="#00E676"
              />
            </svg>
            <div className="flex items-center">
              <span className="text-[22px] font-medium tracking-tight leading-none text-[#5f6368]">
                <span className="font-semibold text-[#202124]">Google</span> Play
              </span>
            </div>
          </a>
        </div>

        {/* Right action icons matching example site */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Search Button */}
          <button
            onClick={() => setShowSearchModal(true)}
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#5f6368] hover:bg-[#f1f3f4] transition-colors"
            title="Pesquisar"
            aria-label="Pesquisar"
          >
            <Search className="w-5 h-5 text-[#5f6368]" />
          </button>

          {/* Help Button with ? (help_outline) */}
          <button
            onClick={() => setShowHelpModal(true)}
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#5f6368] hover:bg-[#f1f3f4] transition-colors"
            title="Ajuda e feedback"
            aria-label="Ajuda"
          >
            <HelpCircle className="w-5 h-5 text-[#5f6368]" />
          </button>
        </div>
      </div>

      {/* Categories sub-navigation */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-1 sm:gap-6 overflow-x-auto scrollbar-none py-1">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                className={`relative px-3 sm:px-4 py-2 text-sm sm:text-[15px] font-medium transition-colors whitespace-nowrap ${
                  isActive
                    ? 'text-[#01875f] font-semibold'
                    : 'text-[#5f6368] hover:text-[#202124]'
                }`}
              >
                {cat.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#01875f] rounded-t-full" />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Search Modal */}
      {showSearchModal && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-start justify-center pt-20 px-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-4 border border-[#e0e0e0] animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-[#f1f3f4]">
              <div className="flex items-center gap-2 text-[#202124] font-medium text-base">
                <Search className="w-5 h-5 text-[#01875f]" />
                <span>Pesquisar no Google Play</span>
              </div>
              <button
                onClick={() => setShowSearchModal(false)}
                className="text-[#5f6368] hover:text-[#202124] p-1 rounded-full hover:bg-[#f1f3f4]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSearchSubmit} className="mt-3">
              <input
                type="text"
                autoFocus
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Pesquisar apps, IPTV, canais ou jogos..."
                className="w-full px-4 py-3 bg-[#f1f3f4] rounded-xl text-[#202124] focus:outline-none focus:ring-2 focus:ring-[#01875f] text-sm"
              />
              <div className="mt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowSearchModal(false)}
                  className="px-4 py-2 text-sm text-[#5f6368] font-medium hover:bg-[#f1f3f4] rounded-lg"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-sm text-white font-medium bg-[#01875f] hover:bg-[#01704e] rounded-lg"
                >
                  Pesquisar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Help Modal */}
      {showHelpModal && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 border border-[#e0e0e0]">
            <div className="flex items-center justify-between pb-3 border-b border-[#f1f3f4]">
              <h3 className="text-lg font-semibold text-[#202124]">
                Ajuda com Cineva IPTV
              </h3>
              <button
                onClick={() => setShowHelpModal(false)}
                className="text-[#5f6368] hover:text-[#202124] p-1 rounded-full hover:bg-[#f1f3f4]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-4 space-y-3 text-sm text-[#5f6368] leading-relaxed">
              <p>
                <strong>Como instalar no TV Box ou Smart TV?</strong>
                <br />
                Clique no botão verde <strong>Instalar</strong> para baixar o aplicativo <code className="bg-[#f1f3f4] px-1.5 py-0.5 rounded text-[#202124]">Cineva.apk</code> diretamente para seu aparelho.
              </p>
              <p>
                <strong>Requisitos mínimos:</strong>
                <br />
                Android 5.0 ou superior, conexão de internet recomendada de pelo menos 15 Mbps para conteúdos em HD e 35 Mbps para 4K.
              </p>
              <p>
                <strong>Compatibilidade:</strong>
                <br />
                TV Box Android, Smart TVs Android (TCL, Philips, Philco), Amazon Fire TV Stick, Xiaomi Mi Box / Stick, smartphones e tablets Android.
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowHelpModal(false)}
                className="px-5 py-2 text-sm text-white font-medium bg-[#01875f] hover:bg-[#01704e] rounded-lg"
              >
                Entendi
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
