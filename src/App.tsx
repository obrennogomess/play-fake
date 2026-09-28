import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { AppHero } from './components/AppHero';
import { ScreenshotsCarousel } from './components/ScreenshotsCarousel';
import { AboutSection } from './components/AboutSection';
import { DataSafetySection } from './components/DataSafetySection';
import { ReviewsSection } from './components/ReviewsSection';
import { InstallModal } from './components/InstallModal';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { INITIAL_REVIEWS } from './data/reviews';
import { Review } from './types';

export default function App() {
  const [reviews, setReviews] = useState<Review[]>(() => {
    try {
      const saved = localStorage.getItem('cineva_reviews');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_REVIEWS;
  });

  const [activeCategory, setActiveCategory] = useState('Apps');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showInstallModal, setShowInstallModal] = useState(false);
  const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'completed'>('idle');
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Save reviews when changed
  useEffect(() => {
    try {
      localStorage.setItem('cineva_reviews', JSON.stringify(reviews));
    } catch (e) {
      console.error(e);
    }
  }, [reviews]);

  // Handle Install & APK Download
  const handleInstallClick = () => {
    setShowInstallModal(true);
    if (downloadState === 'downloading') return;

    setDownloadState('downloading');
    setDownloadProgress(10);

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          setDownloadState('completed');

          // Trigger physical download of Cineva.apk
          const link = document.createElement('a');
          link.href = '/Cineva.apk';
          link.download = 'Cineva.apk';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          setToastMessage('Download do Cineva.apk iniciado com sucesso!');
          return 100;
        }
        return prev + 20;
      });
    }, 350);
  };

  const handleRestartDownload = () => {
    setDownloadState('downloading');
    setDownloadProgress(20);
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          setDownloadState('completed');

          const link = document.createElement('a');
          link.href = '/Cineva.apk';
          link.download = 'Cineva.apk';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          return 100;
        }
        return prev + 25;
      });
    }, 300);
  };

  // Handle Share
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Cineva - Streaming & IPTV Player',
          text: 'Baixe o aplicativo Cineva para assistir canais em 4K, filmes e esportes sem travamento no TV Box e celular!',
          url: window.location.href,
        });
        return;
      } catch (err) {
        // User cancelled or not supported
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setToastMessage('Link copiado para a área de transferência!');
    } catch {
      setToastMessage('Link pronto para compartilhamento!');
    }
  };

  // Handle Wishlist
  const handleToggleWishlist = () => {
    setIsWishlisted((prev) => {
      const next = !prev;
      setToastMessage(
        next
          ? 'Cineva adicionado à sua lista de desejos!'
          : 'Cineva removido da lista de desejos'
      );
      return next;
    });
  };

  // Handle Helpful Vote
  const handleVoteHelpful = (reviewId: string, isHelpful: boolean) => {
    setReviews((prev) =>
      prev.map((r) => {
        if (r.id !== reviewId) return r;

        if (isHelpful) {
          if (r.userVoted === 'yes') {
            return { ...r, helpfulCount: r.helpfulCount - 1, userVoted: null };
          }
          const prevDeduction = r.userVoted === 'no' ? 0 : 0;
          return {
            ...r,
            helpfulCount: r.helpfulCount + 1 - prevDeduction,
            userVoted: 'yes',
          };
        } else {
          if (r.userVoted === 'no') {
            return { ...r, userVoted: null };
          }
          const prevDeduction = r.userVoted === 'yes' ? 1 : 0;
          return {
            ...r,
            helpfulCount: Math.max(0, r.helpfulCount - prevDeduction),
            userVoted: 'no',
          };
        }
      })
    );
  };

  // Handle Add New Review
  const handleAddReview = (newRev: Omit<Review, 'id' | 'date' | 'helpfulCount' | 'userVoted'>) => {
    const formattedDate = new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(new Date());

    const created: Review = {
      ...newRev,
      id: `rev-${Date.now()}`,
      date: formattedDate,
      helpfulCount: 1,
      userVoted: 'yes',
    };

    setReviews((prev) => [created, ...prev]);
    setToastMessage('Sua avaliação sobre o Cineva IPTV foi publicada!');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#202124]">
      {/* Header */}
      <Header
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        onSearch={(term) => {
          setToastMessage(`Filtrando resultados por: "${term}"`);
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* App Hero: Icon, Title, Rating, Downloads, Instalar Button */}
        <AppHero
          onInstall={handleInstallClick}
          onShare={handleShare}
          onToggleWishlist={handleToggleWishlist}
          isWishlisted={isWishlisted}
          downloadState={downloadState}
          downloadProgress={downloadProgress}
        />

        {/* Screenshots Carousel */}
        <ScreenshotsCarousel />

        {/* About App / Sobre Nosso Trabalho */}
        <AboutSection />

        {/* Data Safety / Segurança dos Dados */}
        <DataSafetySection />

        {/* Ratings & Reviews (Comentários sobre IPTV e Streaming) */}
        <ReviewsSection
          reviews={reviews}
          onVoteHelpful={handleVoteHelpful}
          onAddReview={handleAddReview}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Install Guidance Modal */}
      <InstallModal
        isOpen={showInstallModal}
        onClose={() => setShowInstallModal(false)}
        downloadProgress={downloadProgress}
        downloadState={downloadState}
        onRestartDownload={handleRestartDownload}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}
    </div>
  );
}
