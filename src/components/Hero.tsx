
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5491123456789?text=Hola%2C%20quiero%20saber%20más%20sobre%20HOSPEDO', '_blank');
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-hospedo-orange/10 via-white to-hospedo-blue/10 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/80 rounded-full border border-hospedo-orange/20 mb-8">
            <span className="text-hospedo-orange font-medium text-sm">
              🏔️ Desde el Valle de Calamuchita
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Digitaliza tu{' '}
            <span className="text-gradient">
              alojamiento
            </span>
            <br />
            y aumenta tus reservas
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Herramientas simples y efectivas para anfitriones que quieren más reservas directas. 
            Sin complicaciones técnicas, con el toque humano de siempre.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button onClick={openWhatsApp} size="lg" className="btn-whatsapp text-lg px-8 py-4">
              Hablar por WhatsApp
            </Button>
            <Button 
              onClick={() => scrollToSection('tutoriales')} 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-2 border-hospedo-blue text-hospedo-blue hover:bg-hospedo-blue hover:text-white"
            >
              Ver Tutoriales Gratis
            </Button>
          </div>

          {/* Value Proposition Points */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center animate-slide-in">
              <div className="w-16 h-16 bg-gradient-hospedo rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤖</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Bot de Reservas</h3>
              <p className="text-gray-600">Automatiza las consultas y confirma reservas 24/7 por WhatsApp</p>
            </div>
            
            <div className="text-center animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-hospedo rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Bot de Anuncios</h3>
              <p className="text-gray-600">Crea campañas en redes sociales que realmente funcionen</p>
            </div>
            
            <div className="text-center animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-gradient-hospedo rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📚</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Guías Gratuitas</h3>
              <p className="text-gray-600">Aprende a mejorar tu presencia digital paso a paso</p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={() => scrollToSection('tutoriales')}
            className="animate-bounce text-hospedo-orange hover:text-hospedo-orange-dark transition-colors duration-200"
          >
            <ArrowDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
