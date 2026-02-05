import React from 'react';
import { Facebook, Instagram, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <h5 className="text-2xl font-bold tracking-tight text-white mb-2">Grupo Seiri</h5>
            <p className="text-gray-400 text-sm leading-relaxed">
              Referência em limpeza profissional e terceirização de serviços em Sorocaba e região há mais de 20 anos. Qualidade, compromisso e responsabilidade ambiental.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.facebook.com/GrupoSeiri" target="_blank" rel="noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-brand-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/GrupoSeiri" target="_blank" rel="noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-brand-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2 inline-block">Links Rápidos</h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-brand-accent transition-colors">Início</a></li>
              <li><a href="#diferenciais" className="hover:text-brand-accent transition-colors">Diferenciais</a></li>
              <li><a href="#servicos" className="hover:text-brand-accent transition-colors">Serviços</a></li>
              <li><a href="#galeria" className="hover:text-brand-accent transition-colors">Galeria</a></li>
              <li><a href="#contato" className="hover:text-brand-accent transition-colors">Solicitar Orçamento</a></li>
            </ul>
          </div>

          {/* Services List */}
          <div>
            <h5 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2 inline-block">Serviços</h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Limpeza Pós-Obra</li>
              <li>Limpeza de Fachadas</li>
              <li>Limpeza Corporativa</li>
              <li>Jardinagem e Paisagismo</li>
              <li>Portaria e Recepção</li>
              <li>Sanitização de Ambientes</li>
            </ul>
          </div>

          {/* Region */}
          <div>
            <h5 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2 inline-block">Área de Atuação</h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-accent rounded-full"></div> Sorocaba</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-accent rounded-full"></div> Votorantim</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-accent rounded-full"></div> Itu</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-accent rounded-full"></div> Salto</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-accent rounded-full"></div> Região Metropolitana</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Grupo Seiri. Todos os direitos reservados.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            Voltar ao topo <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};