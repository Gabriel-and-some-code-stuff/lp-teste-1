import React from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <Section id="contato" background="dark" className="relative overflow-hidden">
      {/* Decorative background element for sophistication */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-1/2 pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
        
        {/* Contact Info */}
        <div className="space-y-10 lg:sticky lg:top-24">
          <div>
            <h2 className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-3">Fale Conosco</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Pronto para elevar o nível da sua limpeza?
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Solicite um orçamento sem compromisso. Nossa equipe técnica analisará sua necessidade para oferecer a solução ideal com o melhor custo-benefício.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-5 group">
              <div className="bg-brand-primary/20 p-4 rounded-xl text-brand-primary bg-white transition-transform duration-300 group-hover:scale-110 shadow-lg">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Telefone</h4>
                <p className="text-gray-400 mb-1">Fale com um especialista</p>
                <a href="tel:1532326197" className="text-xl font-bold text-white hover:text-brand-accent transition-colors">
                  (15) 3232-6197
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="bg-brand-primary/20 p-4 rounded-xl text-brand-primary bg-white transition-transform duration-300 group-hover:scale-110 shadow-lg">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Email</h4>
                <p className="text-gray-400 mb-1">Envie sua solicitação</p>
                <a href="mailto:contato@gruposeiri.com.br" className="text-lg text-white hover:text-brand-accent transition-colors">
                  contato@gruposeiri.com.br
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
               <div className="bg-brand-primary/20 p-4 rounded-xl text-brand-primary bg-white transition-transform duration-300 group-hover:scale-110 shadow-lg">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Localização</h4>
                <p className="text-gray-400 leading-relaxed">
                  Rua Professora Maria de Almeida, 104<br/>
                  Vila Carvalho, Sorocaba - SP
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl border border-gray-100 relative">
           <h4 className="text-2xl font-bold text-gray-900 mb-2">Receba uma proposta</h4>
           <p className="text-gray-500 mb-8 text-sm">Preencha os dados abaixo e entraremos em contato em até 24h.</p>
           
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-gray-700">Nome Completo</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full px-4 py-3.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:bg-white focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all placeholder-gray-400"
                  placeholder="Seu nome"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-bold text-gray-700">WhatsApp / Telefone</label>
                <input 
                  type="tel" 
                  id="phone"
                  className="w-full px-4 py-3.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:bg-white focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all placeholder-gray-400"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold text-gray-700">E-mail Corporativo</label>
              <input 
                type="email" 
                id="email"
                className="w-full px-4 py-3.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:bg-white focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all placeholder-gray-400"
                placeholder="seu@empresa.com.br"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-bold text-gray-700">Interesse Principal</label>
              <div className="relative">
                <select 
                  id="service"
                  className="w-full px-4 py-3.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:bg-white focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled className="text-gray-400">Selecione o serviço desejado</option>
                  <option value="limpeza">Limpeza Corporativa & Comercial</option>
                  <option value="portaria">Portaria e Controle de Acesso</option>
                  <option value="pos-obra">Limpeza Pós-Obra</option>
                  <option value="fachada">Limpeza de Fachadas</option>
                  <option value="condominio">Zeladoria para Condomínios</option>
                  <option value="outros">Outros Serviços</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-brand-primary">
                  <ChevronDown size={20} />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-gray-700">Mensagem (Opcional)</label>
              <textarea 
                id="message"
                rows={3}
                className="w-full px-4 py-3.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:bg-white focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all placeholder-gray-400 resize-none"
                placeholder="Conte-nos mais sobre sua necessidade (tamanho do local, frequência desejada, etc)..."
              ></textarea>
            </div>

            <Button fullWidth size="lg" variant="primary" type="submit" className="mt-2 py-4 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
              Solicitar Orçamento Gratuito
            </Button>
            
            <p className="text-xs text-center text-gray-400 mt-4 leading-relaxed px-4">
              Seus dados estão protegidos. Ao enviar, você concorda em receber o contato de nossa equipe comercial.
            </p>
          </form>
        </div>

      </div>
    </Section>
  );
};