import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed w-full z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="hidden md:block bg-brand-primary text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center max-w-7xl">
          <div className="flex gap-6">
            <a href="tel:1532326197" className="flex items-center gap-2 hover:text-gray-200">
              <Phone size={14} /> (15) 3232-6197
            </a>
            <a href="mailto:contato@gruposeiri.com.br" className="flex items-center gap-2 hover:text-gray-200">
              <Mail size={14} /> contato@gruposeiri.com.br
            </a>
          </div>
          <span className="font-semibold text-xs tracking-wider opacity-90">LIMPEZA PROFISSIONAL E TERCEIRIZAÇÃO</span>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="https://www.gruposeiri.com.br/assets/images/empresa-conservacao-e-limpeza-em-sorocaba-zona-sul-193x112.png" 
              alt="Grupo Seiri" 
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-600 hover:text-brand-primary font-semibold transition-colors text-sm uppercase tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <a href="#contato">
              <Button variant="accent" size="sm">
                Orçamento Rápido
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className="text-gray-600 hover:text-brand-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-gray-50"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a href="#contato" onClick={() => setIsOpen(false)}>
                <Button fullWidth variant="accent">Solicitar Orçamento</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};