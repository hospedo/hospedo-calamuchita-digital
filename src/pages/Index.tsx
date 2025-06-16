
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Tutorials from '@/components/Tutorials';
import BotReservas from '@/components/BotReservas';
import BotAnuncios from '@/components/BotAnuncios';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Tutorials />
      <BotReservas />
      <BotAnuncios />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
