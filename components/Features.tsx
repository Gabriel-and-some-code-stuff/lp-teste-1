import { Section } from './Section';
import { ClipboardCheck, Leaf, UserCheck, ShieldCheck } from 'lucide-react';
import { BenefitItem } from '../types';

const benefits: BenefitItem[] = [
  {
    title: "Metodologia Japonesa 5S",
    description: "Aplicamos os conceitos Seiri e Seisou para garantir organização e limpeza impecável, aumentando a produtividade da sua equipe.",
    iconName: "ClipboardCheck"
  },
  {
    title: "Produtos Biodegradáveis",
    description: "Utilizamos tecnologia de última geração que limpa profundamente sem agredir o meio ambiente ou a saúde dos ocupantes.",
    iconName: "Leaf"
  },
  {
    title: "Supervisão Ativa",
    description: "Acompanhamento regular por supervisores dedicados para garantir a qualidade contínua e a satisfação total nos serviços.",
    iconName: "UserCheck"
  }
];

const IconMap = {
  ClipboardCheck: ClipboardCheck,
  Leaf: Leaf,
  UserCheck: UserCheck,
  ShieldCheck: ShieldCheck,
};

export const Features: React.FC = () => {
  return (
    <Section id="diferenciais">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-2">Por que escolher o Grupo Seiri?</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Qualidade técnica e responsabilidade ambiental</h3>
        <p className="text-gray-600 text-lg">
          Nossa abordagem une processos rigorosos de controle de qualidade com o respeito pelo meio ambiente.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {benefits.map((item, index) => {
          const Icon = IconMap[item.iconName];
          return (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                <Icon size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};