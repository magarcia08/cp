
import React from 'react';
import { Users } from 'lucide-react';

const About: React.FC = () => {
  const team = [
    {
      name: 'Dr. Carlos Zimag',
      role: 'Optómetra Principal',
      experience: '15 años de experiencia',
      image: 'photo-1612349317150-e413f6a5b16d'
    },
    {
      name: 'Dra. María González',
      role: 'Especialista en Lentes de Contacto',
      experience: '12 años de experiencia',
      image: 'photo-1594824047227-c7d73fa4c5c9'
    },
    {
      name: 'Andrés Rodríguez',
      role: 'Asesor en Monturas',
      experience: '8 años de experiencia',
      image: 'photo-1507003211169-0a1dd7228f2d'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <Users className="w-16 h-16 mx-auto text-onix mb-4 transform hover:scale-110 transition-all duration-300" />
          <h2 className="text-4xl font-bold text-black mb-4">Quiénes Somos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de 20 años cuidando la salud visual de nuestros clientes con dedicación y profesionalismo
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-black mb-6">Nuestra Historia</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Visión Zimag nació en 2003 con la misión de proporcionar servicios de salud visual 
                de la más alta calidad. Fundada por el Dr. Carlos Zimag, nuestra óptica ha crecido 
                hasta convertirse en una referencia en la ciudad.
              </p>
              <p>
                Combinamos tecnología de vanguardia con un enfoque personalizado, asegurando que 
                cada cliente reciba la atención que merece. Nuestro compromiso va más allá de la 
                venta; nos dedicamos a educar y acompañar a nuestros pacientes en su journey visual.
              </p>
              <p>
                Con más de 10,000 clientes satisfechos, seguimos innovando para ofrecer las 
                mejores soluciones visuales del mercado.
              </p>
            </div>
          </div>
          <div className="relative animate-fade-in group">
            <img
              src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop&crop=center"
              alt="Nuestra óptica"
              className="w-full h-96 object-cover rounded-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl group-hover:opacity-30 transition-all duration-500"></div>
            <div className="absolute bottom-6 left-6 text-white transform group-hover:scale-110 transition-all duration-300">
              <p className="text-lg font-semibold">Ubicados en el corazón de la ciudad</p>
            </div>
            {/* Decorative floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-onix rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-wood rounded-full opacity-30 animate-pulse"></div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-black text-center mb-12 animate-fade-in">Nuestros Valores</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'C', title: 'Calidad', desc: 'Productos de las mejores marcas internacionales y tecnología de última generación.', bg: 'bg-onix' },
              { icon: 'P', title: 'Profesionalismo', desc: 'Equipo altamente capacitado con certificaciones internacionales.', bg: 'bg-wood' },
              { icon: 'C', title: 'Confianza', desc: 'Más de 20 años construyendo relaciones duraderas con nuestros clientes.', bg: 'bg-black' }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl transform hover:scale-105 transition-all duration-500 animate-fade-in group hover:shadow-xl"
                   style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`w-16 h-16 ${value.bg} rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  <span className="text-white font-bold text-xl">{value.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-black mb-3 group-hover:text-onix transition-colors duration-300">{value.title}</h4>
                <p className="text-gray-600">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-3xl font-bold text-black text-center mb-12 animate-fade-in">Nuestro Equipo</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-gray-700 to-black rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-500 animate-fade-in group hover:shadow-2xl"
                   style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative">
                  <img
                    src={`https://images.unsplash.com/${member.image}?w=300&h=300&fit=crop&crop=face`}
                    alt={member.name}
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-onix-light transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-700"
                  />
                  <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-t from-onix via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
                </div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-onix-light transition-colors duration-300">{member.name}</h4>
                <p className="text-onix-light font-semibold mb-2">{member.role}</p>
                <p className="text-gray-300">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
