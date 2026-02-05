import React from 'react';
import { Section } from './Section';
import { ImageData } from '../types';

const galleryImages: ImageData[] = [
  {
    url: "https://www.gruposeiri.com.br/assets/images/empresa-de-limpeza-de-para-grandes-empresas-sorocaba-2-900x600-800x583.png",
    alt: "Limpeza grandes empresas",
    context: "Indústrias"
  },
  {
    url: "https://www.gruposeiri.com.br/assets/images/preco-de-limpeza-de-estofados-sorocaba-5-399x226-298x226.png",
    alt: "Higienização de estofados",
    context: "Estofados"
  },
  {
    url: "https://www.gruposeiri.com.br/assets/images/preco-terceirizacao-de-copeira-em-sorocaba-400x313-400x313.png",
    alt: "Serviço de copeira",
    context: "Copeira"
  },
  {
    url: "https://www.gruposeiri.com.br/assets/images/preco-de-limpeza-para-empresas-votorantim-400x298-400x298.png",
    alt: "Limpeza empresarial",
    context: "Escritórios"
  }
];

export const Gallery: React.FC = () => {
  return (
    <Section id="galeria">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Galeria de Atuação</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Confira alguns de nossos serviços realizados em Sorocaba, Votorantim e região.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages.map((img, idx) => (
          <div key={idx} className={`relative rounded-lg overflow-hidden h-48 md:h-64 ${idx === 0 ? 'col-span-2 md:col-span-2 md:row-span-2 md:h-auto' : ''}`}>
            <img 
              src={img.url} 
              alt={img.alt} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors duration-300 pointer-events-none"></div>
             <div className="absolute bottom-2 left-2 bg-white/90 px-3 py-1 rounded-md text-xs font-bold text-brand-secondary">
              {img.context}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};