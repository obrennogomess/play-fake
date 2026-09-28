import React, { useState } from 'react';
import { Star, Smartphone, Tablet, Tv, Info, MessageSquarePlus, Check, MoreVertical } from 'lucide-react';
import { Review, DeviceFilter } from '../types';
import { AddReviewModal } from './AddReviewModal';

interface ReviewsSectionProps {
  reviews: Review[];
  onVoteHelpful: (reviewId: string, isHelpful: boolean) => void;
  onAddReview: (review: Omit<Review, 'id' | 'date' | 'helpfulCount' | 'userVoted'>) => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  reviews,
  onVoteHelpful,
  onAddReview,
}) => {
  const [selectedDevice, setSelectedDevice] = useState<DeviceFilter>('Todos');
  const [showVerifiedModal, setShowVerifiedModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);
  const [sortBy, setSortBy] = useState<'relevance' | 'recent' | 'rating'>('relevance');

  const filteredReviews = reviews.filter((r) => {
    if (selectedDevice === 'Todos') return true;
    return r.device === selectedDevice;
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === 'recent') {
      return b.id.localeCompare(a.id);
    }
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    return b.helpfulCount - a.helpfulCount;
  });

  const displayReviews = sortedReviews.slice(0, visibleCount);

  return (
    <section className="py-6 sm:py-8 border-b border-[#f1f3f4]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[#202124]">
              Classificações e resenhas
            </h2>
            <button
              onClick={() => setShowVerifiedModal(true)}
              className="mt-1 flex items-center gap-1.5 text-xs text-[#5f6368] hover:text-[#202124] transition-colors"
            >
              <span>As notas e avaliações são verificadas</span>
              <Info className="w-3.5 h-3.5 text-[#5f6368]" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#01875f] bg-[#e6f4ea] hover:bg-[#ceead6] transition-colors cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Escrever avaliação</span>
            </button>
          </div>
        </div>

        {/* Device selector filter chips */}
        <div className="mt-5 flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
          <button
            onClick={() => setSelectedDevice('Todos')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors whitespace-nowrap cursor-pointer ${
              selectedDevice === 'Todos'
                ? 'bg-[#e6f4ea] text-[#01875f] border-[#01875f] font-semibold'
                : 'bg-white text-[#5f6368] border-[#dadce0] hover:bg-[#f1f3f4]'
            }`}
          >
            Todos os aparelhos
          </button>

          <button
            onClick={() => setSelectedDevice('TV Box')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer ${
              selectedDevice === 'TV Box'
                ? 'bg-[#e6f4ea] text-[#01875f] border-[#01875f] font-semibold'
                : 'bg-white text-[#5f6368] border-[#dadce0] hover:bg-[#f1f3f4]'
            }`}
          >
            <Tv className="w-3.5 h-3.5" />
            <span>TV Box</span>
          </button>

          <button
            onClick={() => setSelectedDevice('Telefone')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer ${
              selectedDevice === 'Telefone'
                ? 'bg-[#e6f4ea] text-[#01875f] border-[#01875f] font-semibold'
                : 'bg-white text-[#5f6368] border-[#dadce0] hover:bg-[#f1f3f4]'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Telefone</span>
          </button>

          <button
            onClick={() => setSelectedDevice('Tablet')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer ${
              selectedDevice === 'Tablet'
                ? 'bg-[#e6f4ea] text-[#01875f] border-[#01875f] font-semibold'
                : 'bg-white text-[#5f6368] border-[#dadce0] hover:bg-[#f1f3f4]'
            }`}
          >
            <Tablet className="w-3.5 h-3.5" />
            <span>Tablet</span>
          </button>

          <button
            onClick={() => setSelectedDevice('Fire Stick')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer ${
              selectedDevice === 'Fire Stick'
                ? 'bg-[#e6f4ea] text-[#01875f] border-[#01875f] font-semibold'
                : 'bg-white text-[#5f6368] border-[#dadce0] hover:bg-[#f1f3f4]'
            }`}
          >
            <Tv className="w-3.5 h-3.5" />
            <span>Fire Stick</span>
          </button>
        </div>

        {/* Rating Overview and Breakdown Bars */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 p-5 rounded-2xl bg-[#fafafa] border border-[#e0e0e0]">
          {/* Big Rating Score */}
          <div className="flex flex-col items-center sm:items-start shrink-0 text-center sm:text-left">
            <span className="text-5xl sm:text-6xl font-extrabold text-[#202124] tracking-tight">
              5,0
            </span>
            <div className="flex items-center gap-1 mt-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-[#01875f] text-[#01875f]" />
              ))}
            </div>
            <span className="text-xs text-[#5f6368] mt-1">
              404.281 avaliações no Brasil
            </span>
          </div>

          {/* Breakdown Bars */}
          <div className="flex-1 max-w-md space-y-1.5">
            {/* 5 stars */}
            <div className="flex items-center gap-3 text-xs text-[#5f6368]">
              <span className="w-3 text-right font-medium">5</span>
              <div className="flex-1 h-3 bg-[#e0e0e0] rounded-full overflow-hidden">
                <div className="h-full bg-[#01875f] rounded-full w-[96%]" />
              </div>
            </div>
            {/* 4 stars */}
            <div className="flex items-center gap-3 text-xs text-[#5f6368]">
              <span className="w-3 text-right font-medium">4</span>
              <div className="flex-1 h-3 bg-[#e0e0e0] rounded-full overflow-hidden">
                <div className="h-full bg-[#01875f] rounded-full w-[3%]" />
              </div>
            </div>
            {/* 3 stars */}
            <div className="flex items-center gap-3 text-xs text-[#5f6368]">
              <span className="w-3 text-right font-medium">3</span>
              <div className="flex-1 h-3 bg-[#e0e0e0] rounded-full overflow-hidden">
                <div className="h-full bg-[#01875f] rounded-full w-[1%]" />
              </div>
            </div>
            {/* 2 stars */}
            <div className="flex items-center gap-3 text-xs text-[#5f6368]">
              <span className="w-3 text-right font-medium">2</span>
              <div className="flex-1 h-3 bg-[#e0e0e0] rounded-full overflow-hidden">
                <div className="h-full bg-[#01875f] rounded-full w-[0%]" />
              </div>
            </div>
            {/* 1 star */}
            <div className="flex items-center gap-3 text-xs text-[#5f6368]">
              <span className="w-3 text-right font-medium">1</span>
              <div className="flex-1 h-3 bg-[#e0e0e0] rounded-full overflow-hidden">
                <div className="h-full bg-[#01875f] rounded-full w-[0%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Sort selector */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-xs text-[#5f6368]">
            Mostrando <strong>{displayReviews.length}</strong> de {filteredReviews.length} comentários sobre o streaming IPTV
          </span>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#5f6368]">Ordenar por:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-[#dadce0] rounded-lg px-2.5 py-1 text-xs text-[#202124] focus:outline-none focus:ring-1 focus:ring-[#01875f]"
            >
              <option value="relevance">Mais úteis</option>
              <option value="recent">Mais recentes</option>
              <option value="rating">Melhor avaliação</option>
            </select>
          </div>
        </div>

        {/* Reviews List */}
        <div className="mt-5 space-y-6">
          {displayReviews.map((rev) => (
            <div
              key={rev.id}
              className="pb-6 border-b border-[#f1f3f4] last:border-b-0 animate-in fade-in duration-200"
            >
              {/* Review Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  {rev.avatarUrl ? (
                    <img
                      src={rev.avatarUrl}
                      alt={rev.author}
                      className="w-9 h-9 rounded-full object-cover shrink-0"
                    />
                  ) : (
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-xs shrink-0"
                      style={{ backgroundColor: rev.avatarColor || '#01875f' }}
                    >
                      {rev.author.charAt(0).toUpperCase()}
                    </div>
                  )}

                  <div>
                    <h4 className="text-sm font-semibold text-[#202124]">
                      {rev.author}
                    </h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className={`w-3.5 h-3.5 ${
                              s <= rev.rating
                                ? 'fill-[#01875f] text-[#01875f]'
                                : 'text-[#dadce0]'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-[#5f6368]">{rev.date}</span>
                      <span className="text-xs text-[#01875f] bg-[#e6f4ea] px-1.5 py-0.2 rounded font-medium">
                        {rev.device}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  className="text-[#5f6368] hover:text-[#202124] p-1 rounded-full hover:bg-[#f1f3f4]"
                  title="Opções"
                >
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>

              {/* Review Content */}
              <p className="mt-3 text-sm text-[#202124] leading-relaxed">
                {rev.content}
              </p>

              {/* Helpful count */}
              <div className="mt-2 text-xs text-[#5f6368]">
                Essa avaliação foi marcada como útil por {rev.helpfulCount} pessoas
              </div>

              {/* Helpful Vote Buttons */}
              <div className="mt-3 flex items-center gap-3">
                <span className="text-xs text-[#5f6368]">Você achou isso útil?</span>

                <button
                  onClick={() => onVoteHelpful(rev.id, true)}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                    rev.userVoted === 'yes'
                      ? 'bg-[#e6f4ea] text-[#01875f] border-[#01875f] font-semibold'
                      : 'bg-white text-[#5f6368] border-[#dadce0] hover:bg-[#f1f3f4]'
                  }`}
                >
                  Sim {rev.userVoted === 'yes' && '✓'}
                </button>

                <button
                  onClick={() => onVoteHelpful(rev.id, false)}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                    rev.userVoted === 'no'
                      ? 'bg-[#fce8e6] text-[#c5221f] border-[#c5221f] font-semibold'
                      : 'bg-white text-[#5f6368] border-[#dadce0] hover:bg-[#f1f3f4]'
                  }`}
                >
                  Não
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < sortedReviews.length && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 5)}
              className="px-6 py-2.5 rounded-xl border border-[#dadce0] text-xs sm:text-sm font-semibold text-[#01875f] hover:bg-[#f1f3f4] transition-colors cursor-pointer"
            >
              Ver todas as avaliações de IPTV ({sortedReviews.length})
            </button>
          </div>
        )}
      </div>

      {/* Verified Reviews Info Modal */}
      {showVerifiedModal && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 border border-[#e0e0e0]">
            <h3 className="text-base font-bold text-[#202124]">
              Avaliações Verificadas
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#5f6368] leading-relaxed">
              As notas e avaliações são fornecidas por usuários reais que baixaram e ativaram o aplicativo Cineva em seus dispositivos Android, TV Box ou Smart TV. Avaliações com termos ofensivos ou spam são filtradas automaticamente.
            </p>
            <div className="mt-5 flex justify-end">
              <button
                onClick={() => setShowVerifiedModal(false)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#01875f] rounded-lg hover:bg-[#01704e]"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Review Modal */}
      <AddReviewModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSubmit={onAddReview}
      />
    </section>
  );
};
