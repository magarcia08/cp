
import React from 'react';
import { Eye, Award, Users, Clock } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Examen Visual",
      description: "Tecnología de última generación para cuidar tu salud visual",
      color: "text-wood"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Marca Premium",
      description: "Las mejore marca internacional y nacional",
      color: "text-onix"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Para Toda la Familia",
      description: "Montura para hombre, mujer y niño",
      color: "text-wood-dark"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Atención de Calidad",
      description: "Servicio personalizado y profesional",
      color: "text-onix-light"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-onix mb-6">
            ¿Por qué elegir <span className="text-wood">Visión Zimag</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos líder en el cuidado visual con un compromiso inquebrantable 
            hacia la excelencia y la satisfacción de nuestro cliente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in border border-gray-100 hover:border-wood/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${feature.color} mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-onix mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
