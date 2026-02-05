import React from 'react';
import { Button } from './Button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 lg:min-h-[85vh] flex items-center bg-brand-secondary overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://www.gruposeiri.com.br/assets/images/empresa-seiri-de-limpeza-em-sorocaba-votorantim-4-850x607.png"
          alt="Equipe de limpeza Grupo Seiri"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/95 to-brand-secondary/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 border border-brand-accent/50 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
            <CheckCircle size={12} className="text-brand-accent" />
            Certificação 5S
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-sm">
            Excelência em Limpeza e Conservação com <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Metodologia 5S</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-2xl drop-shadow-md">
            Mais de 20 anos garantindo ambientes saudáveis e produtivos em Sorocaba e região com produtos biodegradáveis e equipe especializada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contato">
              <Button size="lg" variant="accent" className="w-full sm:w-auto gap-2">
                Solicitar Orçamento Gratuito <ArrowRight size={20} />
              </Button>
            </a>
            <a href="https://wa.me/551532326197" target="_blank" rel="noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-brand-primary">
                Falar no WhatsApp
              </Button>
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-white/80 text-sm font-medium">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
              <span>Atendimento em Sorocaba e Região</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
              <span>Produtos Biodegradáveis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};