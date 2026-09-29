import React, { useState } from 'react';
import { Star, X } from 'lucide-react';
import { Review } from '../types';

interface AddReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (review: Omit<Review, 'id' | 'date' | 'helpfulCount' | 'userVoted'>) => void;
}

export const AddReviewModal: React.FC<AddReviewModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(5);
  const [device, setDevice] = useState<'Telefone' | 'Tablet' | 'TV Box' | 'Smart TV' | 'Fire Stick'>('TV Box');
  const [content, setContent] = useState('');
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) return;

    onSubmit({
      author: author.trim(),
      rating,
      device,
      content: content.trim(),
      avatarColor: '#01875f',
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 sm:p-8 border border-[#e0e0e0]">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#f1f3f4]">
          <h3 className="text-lg font-bold text-[#202124]">
            Avaliar aplicativo dos Correios
          </h3>
          <button
            onClick={onClose}
            className="text-[#5f6368] hover:text-[#202124] p-1.5 rounded-full hover:bg-[#f1f3f4]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          {/* Star selector */}
          <div>
            <label className="block text-xs font-semibold text-[#5f6368] mb-1.5">
              Sua nota para o aplicativo:
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => {
                const filled = (hoverRating !== null ? hoverRating : rating) >= star;
                return (
                  <button
                    key={star}
                    type="button"
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(null)}
                    onClick={() => setRating(star)}
                    className="p-1 text-2xl cursor-pointer hover:scale-110 transition-transform"
                    aria-label={`${star} estrelas`}
                  >
                    <Star
                      className={`w-7 h-7 ${
                        filled
                          ? 'fill-[#01875f] text-[#01875f]'
                          : 'text-[#dadce0]'
                      }`}
                    />
                  </button>
                );
              })}
              <span className="ml-2 text-sm font-bold text-[#202124]">
                {rating} de 5 estrelas
              </span>
            </div>
          </div>

          {/* Author Name */}
          <div>
            <label className="block text-xs font-semibold text-[#5f6368] mb-1">
              Seu Nome ou Apelido:
            </label>
            <input
              type="text"
              required
              placeholder="Ex: Carlos Eduardo"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#dadce0] text-sm text-[#202124] focus:outline-none focus:ring-2 focus:ring-[#01875f] focus:border-transparent"
            />
          </div>

          {/* Device */}
          <div>
            <label className="block text-xs font-semibold text-[#5f6368] mb-1">
              Qual dispositivo você utiliza?
            </label>
            <select
              value={device}
              onChange={(e) => setDevice(e.target.value as any)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#dadce0] text-sm text-[#202124] focus:outline-none focus:ring-2 focus:ring-[#01875f] bg-white"
            >
              <option value="Telefone">Celular Android</option>
              <option value="Tablet">Tablet Android</option>
              <option value="Smart TV">Outro Dispositivo Android</option>
            </select>
          </div>

          {/* Review text */}
          <div>
            <label className="block text-xs font-semibold text-[#5f6368] mb-1">
              Seu comentário sobre o rastreamento, notificações e entregas:
            </label>
            <textarea
              required
              rows={4}
              placeholder="Conte como tem sido sua experiência acompanhando suas encomendas pelo aplicativo..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#dadce0] text-sm text-[#202124] focus:outline-none focus:ring-2 focus:ring-[#01875f] focus:border-transparent resize-none"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#f1f3f4]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-[#5f6368] hover:bg-[#f1f3f4] rounded-lg transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-sm font-semibold text-white bg-[#01875f] hover:bg-[#01704e] rounded-lg shadow-xs transition-colors"
            >
              Publicar Avaliação
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
