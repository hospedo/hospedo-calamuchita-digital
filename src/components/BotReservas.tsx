
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const BotReservas = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5491123456789?text=Hola%2C%20quiero%20información%20sobre%20el%20Bot%20de%20Reservas%20de%20HOSPEDO', '_blank');
  };

  const features = [
    "Responde consultas automáticamente 24/7",
    "Muestra disponibilidad en tiempo real",
    "Confirma reservas y solicita datos del huésped",
    "Envía recordatorios de check-in automáticos",
    "Integración con tu calendario existente",
    "Respuestas personalizadas con tu estilo",
    "Derivación a humano cuando es necesario",
    "Reportes de consultas y conversiones"
  ];

  return (
    <section id="bot-reservas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in">
            <div className="inline-flex items-center px-4 py-2 bg-hospedo-orange/10 rounded-full mb-6">
              <span className="text-hospedo-orange font-medium text-sm">
                🤖 Bot de Reservas WhatsApp
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Nunca más pierdas una <span className="text-gradient">reserva</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Tu asistente virtual que trabaja 24/7, responde consultas al instante y 
              convierte visitantes en huéspedes confirmados. Todo por WhatsApp, como ya lo haces.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-hospedo-whatsapp flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={openWhatsApp} size="lg" className="btn-whatsapp">
                Ver Demo en Vivo
              </Button>
              <Button onClick={openWhatsApp} variant="outline" size="lg" className="border-2 border-hospedo-orange text-hospedo-orange hover:bg-hospedo-orange hover:text-white">
                Solicitar Cotización
              </Button>
            </div>
          </div>

          {/* Demo Card */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Card className="bg-hospedo-gray-light border-0 shadow-xl">
              <CardHeader className="bg-hospedo-whatsapp text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">H</span>
                  </div>
                  <div>
                    <CardTitle className="text-white">Bot HOSPEDO</CardTitle>
                    <CardDescription className="text-white/80">En línea</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="bg-white p-3 rounded-lg rounded-bl-none shadow-sm">
                  <p className="text-sm text-gray-700">
                    ¡Hola! 👋 Soy el asistente de <strong>Cabaña Los Pinos</strong>. 
                    ¿En qué fechas te gustaría hospedarte?
                  </p>
                </div>
                
                <div className="bg-hospedo-whatsapp/10 p-3 rounded-lg rounded-br-none ml-8">
                  <p className="text-sm text-gray-700">
                    Hola! Para el 15 al 17 de diciembre
                  </p>
                </div>
                
                <div className="bg-white p-3 rounded-lg rounded-bl-none shadow-sm">
                  <p className="text-sm text-gray-700">
                    ✅ <strong>¡Excelente!</strong> Tengo disponibilidad para esas fechas.
                    <br />🏠 Cabaña para 4 personas
                    <br />💰 $25.000 por noche (total: $50.000)
                    <br />📍 Villa General Belgrano
                    <br /><br />¿Te interesa hacer la reserva?
                  </p>
                </div>

                <div className="text-center">
                  <span className="text-xs text-gray-500">El bot responde en segundos...</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotReservas;
