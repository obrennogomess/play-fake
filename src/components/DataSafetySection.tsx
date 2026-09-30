import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Share2, Lock, Trash2, X } from 'lucide-react';

export const DataSafetySection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-6 sm:py-8 border-b border-[#f1f3f4]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[#202124]">
              Segurança dos dados
            </h2>
            <p className="text-xs text-[#5f6368] mt-0.5">
              A segurança começa com a compreensão da forma como os desenvolvedores coletam e compartilham seus dados.
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#5f6368] hover:text-[#202124] hover:bg-[#f1f3f4] transition-colors shrink-0"
            aria-label="Ver mais sobre segurança"
          >
            <ArrowRight className="w-5 h-5 text-[#5f6368]" />
          </button>
        </div>

        {/* Intro */}
        <div className="mt-3 text-sm text-[#5f6368] leading-relaxed">
          "Nosso sistema é feito com todos os tipos de segurança e desenvolvimento web para que nossos clientes tenham o melhor de nós com a máxima segurança."
        </div>

        {/* 3 Pillars Box */}
        <div className="mt-4 p-4 sm:p-5 rounded-2xl border border-[#dadce0] bg-[#fafafa] space-y-4">
          <div className="flex items-start gap-3.5">
            <div className="w-6 h-6 shrink-0 mt-0.5 text-[#5f6368]">
              <Share2 className="w-5 h-5 text-[#5f6368]" />
            </div>
            <div className="text-xs sm:text-sm text-[#202124]">
              Este app pode compartilhar estes tipos de dados com terceiros
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-6 h-6 shrink-0 mt-0.5 text-[#5f6368]">
              <Lock className="w-5 h-5 text-[#5f6368]" />
            </div>
            <div className="text-xs sm:text-sm text-[#202124]">
              Nenhum dado pessoal sensível foi coletado
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-6 h-6 shrink-0 mt-0.5 text-[#5f6368]">
              <Trash2 className="w-5 h-5 text-[#5f6368]" />
            </div>
            <div className="text-xs sm:text-sm text-[#202124]">
              Você pode solicitar a exclusão dos dados a qualquer momento
            </div>
          </div>

          {/* Action button */}
          <div className="pt-2">
            <button
              onClick={() => setShowModal(true)}
              className="text-xs sm:text-sm font-semibold text-[#01875f] hover:underline"
            >
              Ver detalhes de segurança
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 border border-[#e0e0e0] max-h-[85vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-3 border-b border-[#f1f3f4]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#01875f]" />
                <h3 className="text-base font-bold text-[#202124]">
                  Políticas de Segurança do Cineva
                </h3>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-[#5f6368] hover:text-[#202124] p-1 rounded-full hover:bg-[#f1f3f4]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-3 text-xs sm:text-sm text-[#5f6368] leading-relaxed">
              <p>
                <strong>Criptografia em Trânsito:</strong> Toda a comunicação entre o aplicativo e os servidores de streaming utiliza criptografia HTTPS e TLS 1.3 de ponta a ponta.
              </p>
              <p>
                <strong>Privacidade do Usuário:</strong> O player não rastreia localização por GPS, microfone ou contatos. Apenas armazena preferências locais de favoritos e resolução de vídeo no próprio dispositivo.
              </p>
              <p>
                <strong>Exclusão de Cadastro:</strong> Se você possui um cadastro ou conta de ativação, pode solicitar a remoção imediata dos registros diretamente ao suporte do aplicativo.
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2 text-sm text-white font-medium bg-[#01875f] hover:bg-[#01704e] rounded-lg"
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
