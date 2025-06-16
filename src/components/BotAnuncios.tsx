
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Calendar } from 'lucide-react';

const BotAnuncios = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5491123456789?text=Hola%2C%20quiero%20información%20sobre%20el%20Bot%20de%20Anuncios%20de%20HOSPEDO', '_blank');
  };

  const features = [
    "Crea anuncios para Facebook e Instagram automáticamente",
    "Optimiza el público objetivo según tu ubicación",
    "Gestiona presupuestos de manera inteligente",
    "Genera contenido atractivo para cada temporada",
    "Reportes simples de rendimiento",
    "Integración con Google Ads",
    "Optimización continua de campañas",
    "Soporte personalizado incluido"
  ];

  const campaigns = [
    {
      title: "Temporada Alta",
      description: "Diciembre - Marzo",
      reach: "15,000 personas",
      cost: "$8,500/mes",
      color: "bg-hospedo-orange"
    },
    {
      title: "Fines de Semana Largos",
      description: "Fechas específicas",
      reach: "8,000 personas",
      cost: "$4,200/mes",
      color: "bg-hospedo-blue"
    },
    {
      title: "Temporada Baja",
      description: "Abril - Noviembre",
      reach: "5,000 personas",
      cost: "$2,800/mes",
      color: "bg-hospedo-whatsapp"
    }
  ];

  return (
    <section id="bot-anuncios" className="py-20 bg-gradient-to-br from-hospedo-blue/5 to-hospedo-orange/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Cards */}
          <div className="animate-fade-in order-2 lg:order-1">
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-hospedo text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Campañas Activas
                  </CardTitle>
                  <CardDescription className="text-white/80">
                    Gestión automática por temporada
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {campaigns.map((campaign, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${campaign.color}`}></div>
                          <div>
                            <p className="font-medium text-gray-900">{campaign.title}</p>
                            <p className="text-sm text-gray-500">{campaign.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">{campaign.reach}</p>
                          <p className="text-xs text-gray-500">{campaign.cost}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-hospedo-whatsapp border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-hospedo-whatsapp rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">📊</span>
                    </div>
                    <h3 className="font-semibold text-gray-900">Resultados del mes</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-2xl font-bold text-hospedo-whatsapp">127</p>
                      <p className="text-sm text-gray-600">Consultas generadas</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-hospedo-orange">23</p>
                      <p className="text-sm text-gray-600">Reservas confirmadas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-in order-1 lg:order-2">
            <div className="inline-flex items-center px-4 py-2 bg-hospedo-blue/10 rounded-full mb-6">
              <span className="text-hospedo-blue font-medium text-sm">
                📱 Bot de Anuncios Automáticos
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Campañas que <span className="text-gradient">funcionan</span> sin complicaciones
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Nuestro bot crea y optimiza anuncios en Facebook, Instagram y Google. 
              Tú solo defines el presupuesto, nosotros nos encargamos del resto.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-hospedo-blue flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-hospedo-gray-light p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-gray-900 mb-2">¿Cómo funciona?</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Nos contás sobre tu alojamiento y público objetivo</li>
                <li>Configuramos las campañas automáticas</li>
                <li>El bot optimiza anuncios según resultados</li>
                <li>Recibís reportes semanales simples</li>
              </ol>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={openWhatsApp} size="lg" className="btn-hospedo">
                Ver Casos de Éxito
              </Button>
              <Button onClick={openWhatsApp} variant="outline" size="lg" className="border-2 border-hospedo-blue text-hospedo-blue hover:bg-hospedo-blue hover:text-white">
                Solicitar Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotAnuncios;
