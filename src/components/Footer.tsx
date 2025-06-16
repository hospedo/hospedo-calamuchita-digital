
import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5491123456789?text=Hola%2C%20quiero%20más%20información%20sobre%20HOSPEDO', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-hospedo-gray-dark text-white">
      {/* CTA Section */}
      <div className="bg-gradient-hospedo py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para aumentar tus reservas?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Hablemos por WhatsApp y veamos cómo HOSPEDO puede ayudar a tu alojamiento
          </p>
          <Button onClick={openWhatsApp} size="lg" className="bg-white text-hospedo-orange hover:bg-gray-100 text-lg px-8 py-4">
            Contactar por WhatsApp
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-gradient mb-4">HOSPEDO</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Somos emprendedores del Valle de Calamuchita que ayudamos a anfitriones 
                a digitalizar sus alojamientos con herramientas simples y efectivas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={openWhatsApp} className="btn-whatsapp">
                  <Phone className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-hospedo-gray-dark">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('inicio')} className="text-gray-300 hover:text-white transition-colors duration-200">
                    Inicio
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('tutoriales')} className="text-gray-300 hover:text-white transition-colors duration-200">
                    Tutoriales Gratis
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('bot-reservas')} className="text-gray-300 hover:text-white transition-colors duration-200">
                    Bot de Reservas
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('bot-anuncios')} className="text-gray-300 hover:text-white transition-colors duration-200">
                    Bot de Anuncios
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('testimonios')} className="text-gray-300 hover:text-white transition-colors duration-200">
                    Testimonios
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-white mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Automatización WhatsApp</li>
                <li>Campañas Publicitarias</li>
                <li>Capacitación Digital</li>
                <li>Optimización Google Maps</li>
                <li>Gestión de Reservas</li>
                <li>Soporte Técnico</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 HOSPEDO. Todos los derechos reservados. Hecho con ❤️ en el Valle de Calamuchita.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Términos y Condiciones
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
