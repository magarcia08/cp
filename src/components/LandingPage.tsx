
import React from 'react';
import { Eye, Award, Users, Clock, Star, ArrowRight, Shield, Heart } from 'lucide-react';

const LandingPage: React.FC = () => {
  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Exámenes Visuales",
      description: "Tecnología de última generación para cuidar tu salud visual",
      color: "text-blue-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Marcas Premium",
      description: "Las mejores marcas internacionales y nacionales",
      color: "text-green-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Para Toda la Familia",
      description: "Monturas para hombres, mujeres y niños",
      color: "text-purple-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "20+ Años de Experiencia",
      description: "Más de dos décadas cuidando tu visión",
      color: "text-orange-600"
    }
  ];

  const testimonials = [
    {
      name: "María González",
      rating: 5,
      comment: "Excelente atención y gran variedad de monturas. Mi familia y yo siempre venimos aquí."
    },
    {
      name: "Carlos Rodríguez",
      rating: 5,
      comment: "Profesionales muy capacitados y precios justos. Totalmente recomendado."
    },
    {
      name: "Ana Martínez",
      rating: 5,
      comment: "Encontré las gafas perfectas para mi hija. Gran atención al cliente."
    }
  ];

  const stats = [
    { number: "20+", label: "Años de Experiencia" },
    { number: "5000+", label: "Clientes Satisfechos" },
    { number: "50+", label: "Marcas Disponibles" },
    { number: "100%", label: "Garantía de Calidad" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-onix/20 to-wood/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Tu <span className="text-onix">Visión</span><br />
                es Nuestra <span className="text-wood">Pasión</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Más de 20 años cuidando tu salud visual con tecnología de vanguardia 
                y las mejores marcas del mercado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-onix hover:bg-onix/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center group">
                  Agendar Cita Ahora
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                  Ver Catálogo
                </button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <img 
                  src="/portada.png"
                  alt="Familia feliz con gafas"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-onix rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-wood rounded-full opacity-80 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl lg:text-5xl font-bold text-onix mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              ¿Por qué elegir <span className="text-onix">Visión Zimag</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos líderes en el cuidado visual con un compromiso inquebrantable 
              hacia la excelencia y la satisfacción de nuestros clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${feature.color} mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nuestros <span className="text-wood">Servicios</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos una gama completa de servicios para cuidar tu salud visual
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in">
              <div className="h-48 bg-gradient-to-br from-onix to-onix/80 flex items-center justify-center">
                <Shield className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gafas de Sol</h3>
                <p className="text-gray-600 mb-4">Protección UV completa con estilo y elegancia para toda ocasión.</p>
                <button className="text-onix font-semibold hover:text-onix/80 transition-colors">
                  Ver Colección →
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="h-48 bg-gradient-to-br from-wood to-wood/80 flex items-center justify-center">
                <Eye className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gafas Oftálmicas</h3>
                <p className="text-gray-600 mb-4">Corrección visual precisa con monturas cómodas y modernas.</p>
                <button className="text-wood font-semibold hover:text-wood/80 transition-colors">
                  Ver Colección →
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <Heart className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Exámenes Visuales</h3>
                <p className="text-gray-600 mb-4">Evaluaciones completas con equipos de última generación.</p>
                <button className="text-gray-700 font-semibold hover:text-gray-600 transition-colors">
                  Agendar Cita →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Lo que dicen nuestros <span className="text-onix">clientes</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              La satisfacción de nuestros clientes es nuestro mayor logro
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.comment}"</p>
                <div className="font-semibold text-white">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-onix to-wood text-white">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            ¿Listo para cuidar tu visión?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Agenda tu cita hoy y descubre por qué somos la óptica de confianza 
            para miles de familias.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-onix hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Agendar Cita Ahora
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-onix px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Llamar Ahora
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
