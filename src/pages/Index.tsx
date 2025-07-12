
import React, { useState } from 'react';
import { ProductProvider } from '../contexts/ProductContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LandingPage from '../components/LandingPage';
import Catalog from '../components/Catalog';
import WhyChooseUs from '../components/WhyChooseUs';
import Brands from '../components/Brands';
import Sunglasses from '../components/Sunglasses';
import OpticalGlasses from '../components/OpticalGlasses';
import Men from '../components/Men';
import Women from '../components/Women';
import Children from '../components/Children';
import Blog from '../components/Blog';
import Appointments from '../components/Appointments';
import About from '../components/About';
import AdminPanel from '../components/AdminPanel';
import Chatbot from '../components/Chatbot';
import InstagramFloat from '../components/InstagramFloat';
import Footer from '../components/Footer';

// Componentes con información temporal
const Accesorios = () => (
  <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-onix mb-4">Accesorios para el Cuidado Visual</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Complementa tu experiencia visual con nuestros accesorios de calidad premium
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div className="h-48 bg-gradient-to-r from-wood to-wood-dark"></div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-onix mb-2">Estuches de Protección</h3>
            <p className="text-gray-600">Estuches resistentes y elegantes para proteger tus gafas.</p>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div className="h-48 bg-gradient-to-r from-onix to-gray-700"></div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-onix mb-2">Cordones y Cadenas</h3>
            <p className="text-gray-600">Mantén tus gafas siempre seguras con nuestros cordones de diseño.</p>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div className="h-48 bg-gradient-to-r from-gray-400 to-gray-600"></div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-onix mb-2">Kit de Limpieza</h3>
            <p className="text-gray-600">Todo lo que necesitas para mantener tus lentes impecables.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const LentesContacto = () => (
  <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-onix mb-4">Lentes de Contacto</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Comodidad y claridad visual sin límites con nuestra selección de lentes de contacto
        </p>
      </div>
      
      {/* Benefits Section */}
      <div className="mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-wood mb-6 text-center">Beneficios</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-wood rounded-full"></div>
              <span className="text-onix font-medium">Mayor Rendimiento Visual</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-wood rounded-full"></div>
              <span className="text-onix font-medium">Fácil Adaptación</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-wood rounded-full"></div>
              <span className="text-onix font-medium">Mejor Precio</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-wood rounded-full"></div>
              <span className="text-onix font-medium">Exclusivo de ópticas NO venta Internet</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-wood rounded-full"></div>
              <span className="text-onix font-medium">#1 en transmisión de oxígeno</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold text-wood mb-6">Tipos Disponibles</h3>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-onix mb-2">Lentes Diarios</h4>
              <p className="text-gray-600">Máxima higiene y comodidad para uso diario.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-onix mb-2">Lentes Mensuales</h4>
              <p className="text-gray-600">Durabilidad y economía para uso prolongado.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-onix mb-2">Lentes de Color</h4>
              <p className="text-gray-600">Cambia tu look con nuestros lentes de colores naturales.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-wood to-wood-dark rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Consulta Especializada</h3>
          <p className="mb-6">Nuestros especialistas te ayudarán a encontrar los lentes perfectos para ti.</p>
          <button className="bg-white text-wood px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Agendar Consulta
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Empresas = () => (
  <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-onix mb-4">Servicios Empresariales</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Cuidamos la salud visual de tu equipo de trabajo con servicios especializados
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-wood mb-6">¿Por qué elegir nuestros servicios?</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-wood rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h4 className="font-semibold text-onix">Planes Corporativos</h4>
                <p className="text-gray-600">Descuentos especiales para empresas y organizaciones.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-wood rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h4 className="font-semibold text-onix">Atención in-situ</h4>
                <p className="text-gray-600">Llevamos nuestros servicios directamente a tu empresa.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-wood rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <h4 className="font-semibold text-onix">Seguimiento Personalizado</h4>
                <p className="text-gray-600">Programa de seguimiento continuo para empleados.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-onix mb-6">Solicita más información</h3>
          <p className="text-gray-600 mb-4">Dejanos tus datos</p>
          <form className="space-y-4">
            <input type="text" placeholder="Nombre de la empresa" className="w-full p-3 border border-gray-300 rounded-lg" />
            <input type="email" placeholder="Email corporativo" className="w-full p-3 border border-gray-300 rounded-lg" />
            <input type="tel" placeholder="Teléfono" className="w-full p-3 border border-gray-300 rounded-lg" />
            <input type="number" placeholder="Número de empleados" className="w-full p-3 border border-gray-300 rounded-lg" />
            <textarea placeholder="Servicios de interés" rows={4} className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
            <button type="submit" className="w-full bg-wood text-white py-3 rounded-lg font-semibold hover:bg-wood-dark transition-colors">
              Enviar Solicitud
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

const ServiciosEmpresariales = () => (
  <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-onix mb-4">Servicios Empresariales Especializados</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Soluciones integrales para el bienestar visual de tu organización
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-wood rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-2xl">👁️</span>
          </div>
          <h3 className="text-xl font-bold text-onix mb-3">Exámenes Visuales</h3>
          <p className="text-gray-600">Evaluaciones completas de salud visual para todos los empleados.</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-onix rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-2xl">📊</span>
          </div>
          <h3 className="text-xl font-bold text-onix mb-3">Reportes Corporativos</h3>
          <p className="text-gray-600">Informes detallados sobre la salud visual de tu equipo.</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-2xl">🎯</span>
          </div>
          <h3 className="text-xl font-bold text-onix mb-3">Programas Preventivos</h3>
          <p className="text-gray-600">Planes de prevención y cuidado visual personalizados.</p>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-wood to-wood-dark rounded-2xl p-8 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">¿Listo para cuidar la visión de tu equipo?</h3>
        <p className="text-xl mb-6">Contáctanos para diseñar un plan a medida de tu empresa</p>
        <button className="bg-white text-wood px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Contactar Ahora
        </button>
      </div>
    </div>
  </div>
);

const JornadasSalud = () => (
  <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-onix mb-4">Jornadas de Salud Visual</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Programas comunitarios gratuitos para promover la salud visual
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <h3 className="text-2xl font-bold text-wood mb-6">Nuestras Jornadas Incluyen:</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-wood">
              <h4 className="font-semibold text-onix mb-2">Exámenes Visuales Gratuitos</h4>
              <p className="text-gray-600">Evaluaciones básicas de agudeza visual y detección temprana de problemas.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-onix">
              <h4 className="font-semibold text-onix mb-2">Charlas Educativas</h4>
              <p className="text-gray-600">Información sobre cuidado visual, prevención y buenos hábitos.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-gray-500">
              <h4 className="font-semibold text-onix mb-2">Asesoría Especializada</h4>
              <p className="text-gray-600">Consultas con nuestros optómetras y recomendaciones personalizadas.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-onix mb-6">Solicita tu jornada de salud visual gratuita</h3>
          <p className="text-gray-600 mb-6">¿Eres parte de una institución educativa, empresa o comunidad? Solicita una jornada de salud visual gratuita.</p>
          <form className="space-y-4">
            <input type="text" placeholder="Nombre de la institución" className="w-full p-3 border border-gray-300 rounded-lg" />
            <input type="text" placeholder="Persona de contacto" className="w-full p-3 border border-gray-300 rounded-lg" />
            <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg" />
            <input type="tel" placeholder="Teléfono" className="w-full p-3 border border-gray-300 rounded-lg" />
            <textarea placeholder="Detalles de la jornada solicitada" rows={3} className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
            <button type="submit" className="w-full bg-wood text-white py-3 rounded-lg font-semibold hover:bg-wood-dark transition-colors">
              Solicitar Jornada
            </button>
          </form>
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="text-2xl font-bold text-onix mb-4">Próximas Jornadas</h3>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <p className="text-gray-600 text-lg">
            Mantente atento a nuestras redes sociales para conocer las próximas fechas y ubicaciones de nuestras jornadas de salud visual gratuitas.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Contactenos = () => (
  <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-onix mb-4">Contáctenos</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Estamos aquí para ayudarte con todas tus necesidades de salud visual
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-wood mb-6">Información de Contacto</h3>
          <div className="space-y-6 text-gray-600">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-onix mb-2">📍 Dirección</h4>
              <p>Calle 47 # 29 - 31</p>
              <p>Edificio Herad Center</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-onix mb-2">📱 Teléfono</h4>
              <p>+57 316 9805500</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-onix mb-2">✉️ Email</h4>
              <p>visionzimag@gmail.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-onix mb-2">🕒 Horario de Atención</h4>
              <div>
                <p><strong>Lunes a Viernes:</strong> 8:00 a.m - 6:00 p.m</p>
                <p><strong>Sábados:</strong> 8:00 a.m - 12:00 p.m</p>
                <p><strong>Domingos:</strong> Cerrado</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-wood mb-6">Envíanos un Mensaje</h3>
          <form className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
            <input type="text" placeholder="Tu nombre completo" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wood focus:border-transparent" />
            <input type="email" placeholder="Tu email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wood focus:border-transparent" />
            <input type="tel" placeholder="Tu teléfono" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wood focus:border-transparent" />
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wood focus:border-transparent">
              <option value="">Selecciona el motivo de consulta</option>
              <option value="cita">Agendar cita</option>
              <option value="productos">Consulta sobre productos</option>
              <option value="precios">Información de precios</option>
              <option value="servicios">Servicios empresariales</option>
              <option value="otro">Otro</option>
            </select>
            <textarea placeholder="Tu mensaje" rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wood focus:border-transparent"></textarea>
            <button type="submit" className="w-full bg-gradient-to-r from-wood to-wood-dark text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

// Componente temporal para Productos
const Productos = () => (
  <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-onix mb-4">Nuestros Productos</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Descubre nuestra amplia gama de productos para el cuidado de tu visión
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-onix mb-2">Gafas Oftálmicas</h3>
            <p className="text-gray-600">Amplia selección de monturas para corrección visual con estilo y comodidad.</p>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div className="h-48 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-onix mb-2">Gafas de Sol</h3>
            <p className="text-gray-600">Protección UV y estilo en una amplia variedad de diseños modernos.</p>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div className="h-48 bg-gradient-to-r from-green-400 to-teal-500"></div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-onix mb-2">Lentes de Contacto</h3>
            <p className="text-gray-600">Comodidad y libertad visual con lentes de contacto de alta calidad.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Index = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  const handleNavigateToAppointments = () => {
    setActiveSection('agendar-cita');
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'landing':
        return <LandingPage />;
      case 'productos':
        return <Productos />;
      case 'catalogo':
        return <Catalog onNavigateToAppointments={handleNavigateToAppointments} />;
      case 'accesorios':
        return <Accesorios />;
      case 'brigadas':
        return (
          <>
            <Empresas />
            <ServiciosEmpresariales />
            <JornadasSalud />
          </>
        );
      case 'gafas-sol':
        return <Sunglasses />;
      case 'gafas-oftalmicas':
        return <OpticalGlasses />;
      case 'lentes-contacto':
        return <LentesContacto />;
      case 'hombres':
        return <Men />;
      case 'mujeres':
        return <Women />;
      case 'niños':
        return <Children />;
      case 'brigadas-empresas':
        return <Empresas />;
      case 'servicios-empresariales':
        return <ServiciosEmpresariales />;
      case 'brigadas-jornadas':
        return <JornadasSalud />;
      case 'blog':
        return <Blog />;
      case 'contactenos':
        return <Contactenos />;
      case 'agendar-cita':
        return <Appointments />;
      case 'admin':
        return <AdminPanel />;
      default:
        return (
          <>
            <Hero onNavigate={setActiveSection} />
            <Catalog onNavigateToAppointments={handleNavigateToAppointments} />
            <WhyChooseUs />
          </>
        );
    }
  };

  return (
    <ProductProvider>
      <div className="min-h-screen">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        <main>
          {renderSection()}
        </main>
        <Footer />
        <Chatbot />
        <InstagramFloat />
      </div>
    </ProductProvider>
  );
};

export default Index;
