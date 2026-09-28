import React from 'react';
import { X, Download, CheckCircle, ShieldCheck, Tv, Smartphone, ArrowDown } from 'lucide-react';
import { APP_DETAILS } from '../data/reviews';

interface InstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  downloadProgress: number;
  downloadState: 'idle' | 'downloading' | 'completed';
  onRestartDownload: () => void;
}

export const InstallModal: React.FC<InstallModalProps> = ({
  isOpen,
  onClose,
  downloadProgress,
  downloadState,
  onRestartDownload,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 sm:p-8 border border-[#e0e0e0] max-h-[90vh] overflow-y-auto">
        
        {/* Top Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#0c1427] p-1 shadow-sm shrink-0 border border-gray-100">
              <img
                src="/images/logo.png"
                alt="Cineva Logo"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#202124]">
                Instalação do Cineva IPTV
              </h3>
              <p className="text-xs text-[#5f6368]">
                {APP_DETAILS.apkFilename} • {APP_DETAILS.apkSize} • v{APP_DETAILS.version}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#5f6368] hover:text-[#202124] p-1.5 rounded-full hover:bg-[#f1f3f4] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Download Status Box */}
        <div className="mt-5 p-4 rounded-2xl bg-[#f8f9fa] border border-[#e0e0e0]">
          {downloadState === 'downloading' ? (
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-[#202124] mb-2">
                <span className="flex items-center gap-1.5 text-[#01875f]">
                  <Download className="w-4 h-4 animate-bounce" />
                  Baixando APK oficial ({downloadProgress}%)...
                </span>
                <span className="text-[#5f6368]">
                  {((14.7 * downloadProgress) / 100).toFixed(1)} MB / 14,7 MB
                </span>
              </div>
              <div className="w-full h-2.5 bg-[#e0e0e0] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#01875f] rounded-full transition-all duration-300"
                  style={{ width: `${downloadProgress}%` }}
                />
              </div>
              <p className="text-[11px] text-[#5f6368] mt-2">
                O arquivo iniciará automaticamente no navegador. Caso não inicie, use o botão abaixo.
              </p>
            </div>
          ) : downloadState === 'completed' ? (
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#01875f] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#202124]">
                  Download do APK Concluído!
                </h4>
                <p className="text-xs text-[#5f6368] mt-0.5">
                  O arquivo <strong>Cineva.apk</strong> foi salvo na sua pasta de Downloads.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#5f6368]">Pronto para baixar o APK de streaming IPTV</span>
              <button
                onClick={onRestartDownload}
                className="text-xs font-semibold text-[#01875f] hover:underline"
              >
                Iniciar Agora
              </button>
            </div>
          )}
        </div>

        {/* Step by Step installation instructions */}
        <div className="mt-6">
          <h4 className="text-sm font-bold text-[#202124] flex items-center gap-2">
            <Tv className="w-4 h-4 text-[#01875f]" />
            Como instalar no seu TV Box, Fire Stick ou Celular:
          </h4>

          <div className="mt-3 space-y-3">
            {/* Step 1 */}
            <div className="flex items-start gap-3 text-xs">
              <span className="w-5 h-5 rounded-full bg-[#01875f] text-white flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                1
              </span>
              <div className="text-[#5f6368]">
                <strong className="text-[#202124]">Habilite Fontes Desconhecidas:</strong> Vá em <span className="bg-[#f1f3f4] px-1 py-0.5 rounded text-[#202124]">Configurações &gt; Segurança &gt; Instalar apps desconhecidos</span> no seu TV Box ou celular.
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-3 text-xs">
              <span className="w-5 h-5 rounded-full bg-[#01875f] text-white flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                2
              </span>
              <div className="text-[#5f6368]">
                <strong className="text-[#202124]">Abra o arquivo Cineva.apk:</strong> Acesse seu gerenciador de arquivos ou notificações e toque no arquivo baixado para iniciar a instalação.
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-3 text-xs">
              <span className="w-5 h-5 rounded-full bg-[#01875f] text-white flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                3
              </span>
              <div className="text-[#5f6368]">
                <strong className="text-[#202124]">Aproveite o Streaming:</strong> Abra o aplicativo Cineva, selecione seus canais em 4K, filmes e séries favoritos com áudio multicanal e zero travamento!
              </div>
            </div>
          </div>
        </div>

        {/* Security badge */}
        <div className="mt-5 p-3 rounded-xl bg-[#e6f4ea] border border-[#ceead6] flex items-center gap-2.5 text-xs text-[#137333]">
          <ShieldCheck className="w-5 h-5 shrink-0 text-[#01875f]" />
          <span>Verificado pelo Play Protect • Livre de vírus e malwares • 100% Seguro</span>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#f1f3f4]">
          <a
            href="/Cineva.apk"
            download="Cineva.apk"
            onClick={onRestartDownload}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#01875f] hover:bg-[#f1f3f4] border border-[#dadce0] transition-colors"
          >
            <ArrowDown className="w-4 h-4" />
            Baixar Novamente APK (14,7 MB)
          </a>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#01875f] hover:bg-[#01704e] transition-colors shadow-xs"
          >
            Concluir
          </button>
        </div>
      </div>
    </div>
  );
};
