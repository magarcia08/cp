
import React, { useState } from 'react';
import { Youtube, Eye } from 'lucide-react';

const Blog: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hablemos-claro');

  const youtubeVideos = [
    {
      id: '1',
      title: 'Cuidado de la Vista en Casa',
      videoId: 'dQw4w9WgXcQ',
      description: 'Consejo práctico para mantener una buena salud visual'
    },
    {
      id: '2',
      title: 'Ejercicio para los Ojo',
      videoId: 'dQw4w9WgXcQ',
      description: 'Rutina diaria de ejercicio ocular'
    },
    {
      id: '3',
      title: 'Importancia de los Examen Visual',
      videoId: 'dQw4w9WgXcQ',
      description: 'Por qué debe revisar tu vista regularmente'
    }
  ];

  const cuidadoVisionContent = [
    {
      id: '1',
      title: 'Protege tu Vista del Sol',
      content: 'Usar gafa de sol con protección UV es esencial para mantener la salud de tu ojo.',
      image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop',
      tips: ['Usa gafa con protección UV 100%', 'Evita la exposición directa al sol', 'Consulta regularmente con tu especialista']
    },
    {
      id: '2',
      title: 'Descanso Visual en el Trabajo',
      content: 'La regla 20-20-20: cada 20 minuto, mira algo a 20 pie de distancia por 20 segundo.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
      tips: ['Ajusta la pantalla a la altura del ojo', 'Parpadea con frecuencia', 'Mantén buena iluminación']
    },
    {
      id: '3',
      title: 'Alimentación para la Salud Visual',
      content: 'Una dieta rica en vitamina A, C y E contribuye a mantener ojo saludable.',
      image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=400&h=300&fit=crop',
      tips: ['Consume zanahoria y verdura verde', 'Incluye pescado rico en Omega-3', 'Mantente hidratado']
    }
  ];

  const sections = [
    { id: 'hablemos-claro', label: 'Información y Tips', icon: Youtube },
    { id: 'cuidado-vision', label: 'Novedades sobre Salud Visual', icon: Eye }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'hablemos-claro':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-onix mb-6">Información y Tips</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {youtubeVideos.map((video) => (
                <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-video bg-gradient-to-r from-onix to-wood relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                        <span className="text-white text-2xl">▶</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-lg mb-2 text-onix">{video.title}</h4>
                    <p className="text-gray-600 text-sm">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'cuidado-vision':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-onix mb-6">Novedades sobre Salud Visual</h3>
            <div className="space-y-6">
              {cuidadoVisionContent.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="md:flex">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full md:w-1/3 h-48 md:h-auto object-cover"
                    />
                    <div className="p-6 md:flex-1">
                      <h4 className="font-semibold text-lg mb-3 text-onix">{item.title}</h4>
                      <p className="text-gray-600 mb-4">{item.content}</p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-wood">Consejo:</h5>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {item.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-start">
                              <span className="text-wood mr-2">•</span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-onix mb-4">Blog de Visión Zimag</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Información, Tips Y Novedades sobre la salud Visual
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeSection === section.id
                    ? 'bg-wood text-white shadow-lg'
                    : 'bg-white text-onix hover:bg-onix hover:text-white shadow-md border border-gray-200'
                }`}
              >
                <IconComponent size={20} />
                <span>{section.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="animate-fade-in">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default Blog;
