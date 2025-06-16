
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowDown, Calendar, Mail, Phone } from 'lucide-react';

const Tutorials = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5491123456789?text=Hola%2C%20quiero%20acceso%20a%20los%20tutoriales%20gratuitos%20de%20HOSPEDO', '_blank');
  };

  const tutorials = [
    {
      title: "Optimiza tu perfil de Google Maps",
      description: "Aprende a configurar tu ficha de Google para aparecer cuando los turistas busquen alojamiento en tu zona.",
      duration: "15 min",
      level: "Básico",
      icon: <Phone className="h-6 w-6" />
    },
    {
      title: "Cómo responder consultas por WhatsApp",
      description: "Plantillas y mejores prácticas para convertir consultas en reservas confirmadas.",
      duration: "20 min",
      level: "Básico",
      icon: <Mail className="h-6 w-6" />
    },
    {
      title: "Fotos que venden: Guía de fotografía",
      description: "Técnicas simples para tomar fotos atractivas de tu alojamiento con tu celular.",
      duration: "25 min",
      level: "Intermedio",
      icon: <Calendar className="h-6 w-6" />
    },
    {
      title: "Gestiona tu calendario de disponibilidad",
      description: "Herramientas gratuitas para evitar dobles reservas y mantener actualizada tu disponibilidad.",
      duration: "18 min",
      level: "Básico",
      icon: <Calendar className="h-6 w-6" />
    },
    {
      title: "Estrategias de precios por temporada",
      description: "Cómo ajustar tus tarifas según la demanda y maximizar tus ingresos.",
      duration: "30 min",
      level: "Avanzado",
      icon: <Mail className="h-6 w-6" />
    },
    {
      title: "Automatiza tu comunicación básica",
      description: "Primeros pasos para automatizar respuestas frecuentes sin perder el toque personal.",
      duration: "22 min",
      level: "Intermedio",
      icon: <Phone className="h-6 w-6" />
    }
  ];

  return (
    <section id="tutoriales" className="py-20 bg-hospedo-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Aprende <span className="text-gradient">gratis</span> a digitalizar tu alojamiento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Guías paso a paso, pensadas para anfitriones que están dando sus primeros pasos en el mundo digital. 
            Sin tecnicismos, con ejemplos reales.
          </p>
          <Button onClick={openWhatsApp} size="lg" className="btn-whatsapp">
            Acceder a Tutoriales Gratis
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-gradient-hospedo rounded-lg text-white">
                    {tutorial.icon}
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-hospedo-blue/10 text-hospedo-blue rounded-full text-xs font-medium">
                      {tutorial.duration}
                    </span>
                    <span className="px-2 py-1 bg-hospedo-orange/10 text-hospedo-orange rounded-full text-xs font-medium">
                      {tutorial.level}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-xl">{tutorial.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {tutorial.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            ¿Queres recibir nuevos tutoriales cada semana?
          </p>
          <Button onClick={openWhatsApp} variant="outline" className="border-2 border-hospedo-blue text-hospedo-blue hover:bg-hospedo-blue hover:text-white">
            Suscribirse al Newsletter
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Tutorials;
