
import React from 'react';

const Promotions: React.FC = () => {
  const promotions = [
    {
      id: 1,
      title: '2x1 en Monturas Seleccionadas',
      description: 'Llévate dos monturas por el precio de una. Aplica en modelos seleccionados.',
      discount: '50% OFF',
      image: 'photo-1596464716127-f2a82984de30',
      validUntil: '31 de Diciembre, 2024'
    },
    {
      id: 2,
      title: 'Examen Visual Gratuito',
      description: 'Agenda tu cita y recibe un examen visual completo sin costo adicional.',
      discount: 'GRATIS',
      image: 'photo-1574258495973-f010dfbb5371',
      validUntil: 'Todo el año'
    },
    {
      id: 3,
      title: 'Descuento Estudiantes',
      description: 'Estudiantes universitarios reciben 20% de descuento en cualquier compra.',
      discount: '20% OFF',
      image: 'photo-1559056199-641a0ac8b55e',
      validUntil: 'Válido todo el año'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-black mb-4">Promociones Especiales</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Aprovecha nuestras ofertas exclusivas y cuida tu salud visual por menos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotions.map((promo, index) => (
            <div
              key={promo.id}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 animate-fade-in group hover:shadow-3xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${promo.image}?w=400&h=250&fit=crop&crop=center`}
                  alt={promo.title}
                  className="w-full h-48 object-cover transform group-hover:scale-125 transition-all duration-1000 group-hover:-rotate-3"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
                <div className="absolute top-4 left-4 bg-onix text-white px-4 py-2 rounded-full font-bold text-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-pulse">
                  {promo.discount}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-onix transition-colors duration-300">{promo.title}</h3>
                <p className="text-gray-600 mb-4">{promo.description}</p>
                <div className="text-sm text-wood font-semibold mb-4">
                  Válido hasta: {promo.validUntil}
                </div>
                <button className="w-full bg-gradient-to-r from-gray-700 to-black text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  Obtener Promoción
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-black rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-500 animate-fade-in">
          <h3 className="text-2xl font-bold text-white mb-4">
            ¡No te pierdas nuestras promociones!
          </h3>
          <p className="text-gray-300 mb-6">
            Suscríbete a nuestro newsletter y sé el primero en conocer ofertas exclusivas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-3 rounded-lg border-none outline-none text-black transform focus:scale-105 transition-all duration-300"
            />
            <button className="bg-onix hover:bg-onix-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
