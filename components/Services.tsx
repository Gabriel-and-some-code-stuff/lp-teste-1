import React from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { ImageData } from '../types';

const services: ImageData[] = [
  {
    url: "https://www.gruposeiri.com.br/assets/images/preco-de-limpeza-pos-obras-em-sorocaba-3-450x338.png",
    alt: "Limpeza Pós-Obra em Sorocaba",
    context: "Limpeza Pós-Obra"
  },
  {
    url: "https://www.gruposeiri.com.br/assets/images/terceirizacao-de-copeira-em-sorocaba-zona-norte-4-449x255.png",
    alt: "Copeira e Serviços de Apoio",
    context: "Copeira & Apoio"
  },
  {
    url: "https://www.gruposeiri.com.br/assets/images/empresa-de-dedetizacao-sanitizacao-sorocaba-400x240.png",
    alt: "Sanitização e Dedetização",
    context: "Sanitização"
  },
  {
    url: "https://www.gruposeiri.com.br/assets/images/preco-portaria-controlador-de-acesso-sorocaba-1-400x266-351x266.png",
    alt: "Portaria e Controle de Acesso",
    context: "Portaria & Recepção"
  },
  {
    url: "https://www.gruposeiri.com.br/assets/images/empresa-limpeza-de-fachadas-predios-sorocaba-1-400x313-400x297.png",
    alt: "Limpeza de Fachadas",
    context: "Limpeza de Fachadas"
  },
  {
    url: "https://www.gruposeiri.com.br/assets/images/empresa-limpeza-terceirizada-em-sorocaba-2-321x400.png",
    alt: "Limpeza Corporativa",
    context: "Limpeza Corporativa"
  }
];

export const Services: React.FC = () => {
  return (
    <Section id="servicos" background="gray">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div className="max-w-2xl">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-2">Nossos Serviços</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Soluções completas em Facilities
          </h3>
          <p className="text-gray-600 mt-4 text-lg">
            Da recepção à limpeza pesada, cuidamos de cada detalhe do seu patrimônio.
          </p>
        </div>
        <div className="hidden md:block">
           <a href="#contato">
            <Button variant="outline">Ver todos os serviços</Button>
           </a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="aspect-w-16 aspect-h-10 h-64 overflow-hidden relative">
              <img 
                src={service.url} 
                alt={service.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-xl font-bold text-white mb-1">{service.context}</h4>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Saiba mais sobre este serviço
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center md:hidden">
        <a href="#contato">
          <Button variant="primary" fullWidth>Solicitar Cotação</Button>
        </a>
      </div>
    </Section>
  );
};