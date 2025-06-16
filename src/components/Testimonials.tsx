
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "María Elena Rodríguez",
      location: "Villa General Belgrano",
      property: "Cabaña Los Robles",
      rating: 5,
      text: "Desde que tengo el bot de HOSPEDO, no pierdo ni una consulta. Antes se me escapaban mensajes de noche o cuando estaba ocupada. Ahora el bot responde al toque y yo confirmo las reservas. ¡Aumenté un 40% mis reservas!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Carlos Mendoza", 
      location: "La Cumbrecita",
      property: "Complejo La Cascada",
      rating: 5,
      text: "El bot de anuncios es increíble. Yo no entendía nada de Facebook Ads, pero ellos lo configuraron todo. Las campañas se manejan solas y cada mes recibo más reservas. La inversión se paga sola.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Ana y Roberto Castro",
      location: "Nono",
      property: "Casa de Campo El Descanso",
      rating: 5,
      text: "Los tutoriales gratuitos nos ayudaron un montón. Mejoramos las fotos, optimizamos Google Maps y aprendimos a usar WhatsApp Business. Después contratamos el bot y ahora somos más profesionales.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Miguel Fernández",
      location: "Santa Rosa de Calamuchita",
      property: "Departamentos del Centro",
      rating: 5,
      text: "Lo que más me gusta es que son de acá, del valle. Entienden cómo trabajamos y qué necesitamos. No es una empresa de Buenos Aires que no conoce nuestra realidad. Son súper atentos por WhatsApp.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Laura Giménez",
      location: "Villa Alpina",
      property: "Apart Hotel Las Sierras",
      rating: 5,
      text: "Tenía miedo de la tecnología, pero HOSPEDO me acompañó paso a paso. El bot es muy fácil de usar y cuando tengo dudas, me responden al toque. Mis hijos no pueden creer lo digitalizados que estamos ahora.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Diego y Claudia Morales",
      location: "Embalse",
      property: "Cabañas del Lago",
      rating: 5,
      text: "La combinación de los dos bots es perfecta. Uno trae clientes con los anuncios y el otro los atiende automáticamente. Es como tener un empleado que trabaja 24 horas pero que no hay que pagarle sueldo.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Lo que dicen nuestros <span className="text-gradient">anfitriones</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de 150 alojamientos en el Valle de Calamuchita ya confían en HOSPEDO 
            para aumentar sus reservas y simplificar su gestión diaria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-slide-in border-0 shadow-md" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.property}</p>
                    <p className="text-xs text-hospedo-orange">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">150+</p>
            <p className="text-gray-600">Alojamientos activos</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">40%</p>
            <p className="text-gray-600">Aumento promedio de reservas</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">24/7</p>
            <p className="text-gray-600">Atención automática</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">3 años</p>
            <p className="text-gray-600">Experiencia en el valle</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
