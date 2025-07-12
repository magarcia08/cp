
import React from 'react';
import { Button } from './ui/button';

interface HeroProps {
  onNavigate?: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleCatalogClick = () => {
    if (onNavigate) {
      onNavigate('catalogo');
    }
  };

  const handleAppointmentClick = () => {
    if (onNavigate) {
      onNavigate('agendar-cita');
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-onix leading-tight">
                Más ahora
                <span className="block text-wood">
                  mis ojos te ven
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Descubre la mejor selección de lente y montura con la calidad y estilo que mereces.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={handleCatalogClick}
                className="bg-wood hover:bg-wood-dark text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Ver Catálogo
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleAppointmentClick}
                className="px-8 py-4 text-lg font-semibold rounded-full border-2 border-onix hover:border-wood hover:text-wood transition-all duration-300"
              >
                Agendar Cita
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-wood">500+</div>
                <div className="text-onix">Montura</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-onix">50+</div>
                <div className="text-wood">Marca</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-600">Calidad</div>
                <div className="text-onix">Premium</div>
              </div>
            </div>
          </div>

          {/* Image with animations */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative z-10">
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200">
                <img 
                  src="/lovable-uploads/284758ba-e5f2-4f38-bdb5-5d6402cfa205.png" 
                  alt="Familia feliz usando lente" 
                  className="w-full h-auto rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
            
            {/* Decorative animated elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-wood/20 to-onix/20 rounded-full opacity-30 blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-gradient-to-br from-onix/20 to-wood/20 rounded-full opacity-30 blur-3xl animate-bounce"></div>
            
            {/* Additional animated circles */}
            <div className="absolute top-10 left-10 w-4 h-4 bg-wood rounded-full animate-ping"></div>
            <div className="absolute bottom-20 right-20 w-6 h-6 bg-onix rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-0 w-3 h-3 bg-gray-500 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
