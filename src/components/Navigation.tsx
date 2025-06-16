
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5491123456789?text=Hola%2C%20quiero%20saber%20más%20sobre%20HOSPEDO', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gradient">HOSPEDO</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-hospedo-orange transition-colors duration-200">
                Inicio
              </button>
              <button onClick={() => scrollToSection('tutoriales')} className="text-gray-700 hover:text-hospedo-orange transition-colors duration-200">
                Tutoriales
              </button>
              <button onClick={() => scrollToSection('bot-reservas')} className="text-gray-700 hover:text-hospedo-orange transition-colors duration-200">
                Bot Reservas
              </button>
              <button onClick={() => scrollToSection('bot-anuncios')} className="text-gray-700 hover:text-hospedo-orange transition-colors duration-200">
                Bot Anuncios
              </button>
              <button onClick={() => scrollToSection('testimonios')} className="text-gray-700 hover:text-hospedo-orange transition-colors duration-200">
                Testimonios
              </button>
            </div>
          </div>

          {/* WhatsApp Button */}
          <div className="hidden md:block">
            <Button onClick={openWhatsApp} className="btn-whatsapp">
              Contactanos
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-50 p-2 rounded-md text-gray-700 hover:text-hospedo-orange hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('inicio')} className="block px-3 py-2 text-gray-700 hover:text-hospedo-orange transition-colors duration-200">
              Inicio
            </button>
            <button onClick={() => scrollToSection('tutoriales')} className="block px-3 py-2 text-gray-700 hover:text-hospedo-orange transition-colors duration-200">
              Tutoriales
            </button>
            <button onClick={() => scrollToSection('bot-reservas')} className="block px-3 py-2 text-gray-700 hover:text-hospedo-orange transition-colors duration-200">
              Bot Reservas
            </button>
            <button onClick={() => scrollToSection('bot-anuncios')} className="block px-3 py-2 text-gray-700 hover:text-hospedo-orange transition-colors duration-200">
              Bot Anuncios
            </button>
            <button onClick={() => scrollToSection('testimonios')} className="block px-3 py-2 text-gray-700 hover:text-hospedo-orange transition-colors duration-200">
              Testimonios
            </button>
            <div className="px-3 py-2">
              <Button onClick={openWhatsApp} className="btn-whatsapp w-full">
                Contactanos
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
