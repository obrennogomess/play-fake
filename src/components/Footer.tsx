import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f8f9fa] border-t border-[#dadce0] mt-10 pt-10 pb-12 text-[#5f6368] text-xs">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer links columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pb-10 border-b border-[#dadce0]">
          {/* Column 1 */}
          <div>
            <h4 className="font-bold text-[#202124] text-sm mb-3">Google Play</h4>
            <ul className="space-y-2.5">
              <li><a href="#playpass" className="hover:text-[#202124] transition-colors">Play Pass</a></li>
              <li><a href="#playpoints" className="hover:text-[#202124] transition-colors">Play Points</a></li>
              <li><a href="#giftcards" className="hover:text-[#202124] transition-colors">Vales-presente</a></li>
              <li><a href="#redeem" className="hover:text-[#202124] transition-colors">Resgatar</a></li>
              <li><a href="#refund" className="hover:text-[#202124] transition-colors">Política de reembolso</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-bold text-[#202124] text-sm mb-3">Crianças e família</h4>
            <ul className="space-y-2.5">
              <li><a href="#familyguide" className="hover:text-[#202124] transition-colors">Guia para a família</a></li>
              <li><a href="#familysharing" className="hover:text-[#202124] transition-colors">Compartilhamento em família</a></li>
              <li><a href="#parental" className="hover:text-[#202124] transition-colors">Controle dos Pais</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-bold text-[#202124] text-sm mb-3">Cineva Streaming</h4>
            <ul className="space-y-2.5">
              <li><a href="#tvbox" className="hover:text-[#202124] transition-colors">Guia de Instalação TV Box</a></li>
              <li><a href="#firestick" className="hover:text-[#202124] transition-colors">Tutorial Fire TV Stick</a></li>
              <li><a href="#suporte" className="hover:text-[#202124] transition-colors">Suporte e Ativação IPTV</a></li>
              <li><a href="#lista" className="hover:text-[#202124] transition-colors">Grade de Programação (EPG)</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-bold text-[#202124] text-sm mb-3">Segurança e Termos</h4>
            <ul className="space-y-2.5">
              <li><a href="#playprotect" className="hover:text-[#202124] transition-colors">Play Protect Certificado</a></li>
              <li><a href="#privacidade" className="hover:text-[#202124] transition-colors">Privacidade do Usuário</a></li>
              <li><a href="#seguranca" className="hover:text-[#202124] transition-colors">Segurança dos Dados</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#terms" className="hover:text-[#202124] transition-colors">Termos de Serviço</a>
            <a href="#privacy" className="hover:text-[#202124] transition-colors">Privacidade</a>
            <a href="#about" className="hover:text-[#202124] transition-colors">Sobre o Google Play</a>
            <a href="#devs" className="hover:text-[#202124] transition-colors">Desenvolvedores</a>
            <a href="#store" className="hover:text-[#202124] transition-colors">Google Store</a>
          </div>

          <div className="flex items-center gap-2 text-[#202124] font-medium">
            <span>Brasil (Português)</span>
          </div>
        </div>

        <div className="mt-4 text-[11px] text-[#80868b]">
          Todos os preços incluem tributos incidentes. Google Play e a logomarca do Google Play são marcas registradas da Google LLC.
        </div>
      </div>
    </footer>
  );
};
