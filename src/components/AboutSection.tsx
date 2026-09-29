import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, Shield, Sparkles, Package, Truck, Clock, MapPin } from 'lucide-react';
import { APP_DETAILS } from '../data/reviews';

export const AboutSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const tags = [
    { label: 'Rastreamento de Objetos', primary: true },
    { label: 'Entregas & Sedex', primary: true },
    { label: 'PAC & Logística', primary: true },
    { label: 'Produtividade', primary: false },
    { label: 'Cálculo de Frete', primary: false },
    { label: 'Minhas Importações', primary: false },
    { label: 'Agências Correios', primary: false },
    { label: 'Notificações de Entrega', primary: false },
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
            O aplicativo oficial dos <strong>Correios</strong> foi desenvolvido para facilitar o acompanhamento e envio de suas encomendas e correspondências. Rastreie seus pacotes em tempo real, receba notificações a cada movimentação e tenha total controle das suas compras e entregas na palma da mão.
          </p>

          {/* Expandable detailed content */}
          {isExpanded && (
            <div className="mt-4 pt-4 border-t border-[#f1f3f4] space-y-4 animate-in fade-in duration-200">
              <div>
                <h3 className="text-sm font-bold text-[#202124] mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#01875f]" />
                  Recursos do Aplicativo Correios:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#5f6368]">
                  <li><strong>Rastreamento Inteligente:</strong> Acompanhe todas as suas encomendas nacionais e internacionais com histórico completo.</li>
                  <li><strong>Notificações em Tempo Real:</strong> Seja avisado assim que o carteiro sair para a entrega e quando a encomenda for entregue.</li>
                  <li><strong>Cálculo de Preços e Prazos:</strong> Simule o valor e o prazo de entrega para Sedex, Sedex 10, Sedex 12 e PAC.</li>
                  <li><strong>Minhas Importações:</strong> Acompanhe compras internacionais, declare dados fiscais e realize pagamentos de tributos com facilidade.</li>
                  <li><strong>Busca de Agências:</strong> Localize as agências e pontos de atendimento dos Correios mais próximos de você.</li>
                  <li><strong>Organização com Apelidos:</strong> Personalize o nome de cada código de rastreamento para saber exatamente qual produto está chegando.</li>
                </ul>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#f8f9fa] border border-[#e0e0e0]">
                  <Package className="w-5 h-5 text-[#01875f] mb-1" />
                  <div className="text-xs font-bold text-[#202124]">Rastreamento</div>
                  <div className="text-[11px] text-[#5f6368]">Nacional &amp; Internacional</div>
                </div>
                <div className="p-3 rounded-xl bg-[#f8f9fa] border border-[#e0e0e0]">
                  <Truck className="w-5 h-5 text-[#01875f] mb-1" />
                  <div className="text-xs font-bold text-[#202124]">Sedex &amp; PAC</div>
                  <div className="text-[11px] text-[#5f6368]">Entregas rápidas</div>
                </div>
                <div className="p-3 rounded-xl bg-[#f8f9fa] border border-[#e0e0e0]">
                  <Clock className="w-5 h-5 text-[#01875f] mb-1" />
                  <div className="text-xs font-bold text-[#202124]">Tempo Real</div>
                  <div className="text-[11px] text-[#5f6368]">Alertas instantâneos</div>
                </div>
                <div className="p-3 rounded-xl bg-[#f8f9fa] border border-[#e0e0e0]">
                  <MapPin className="w-5 h-5 text-[#01875f] mb-1" />
                  <div className="text-xs font-bold text-[#202124]">Agências</div>
                  <div className="text-[11px] text-[#5f6368]">Localize perto de você</div>
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
          <span>{isExpanded ? 'Mostrar menos' : 'Ler mais sobre o app'}</span>
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
