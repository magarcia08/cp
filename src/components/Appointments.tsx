
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

const Appointments: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    notes: ''
  });

  const services = [
    'Examen Visual Completo',
    'Consulta de Lentes de Contacto',
    'Reparación de Monturas',
    'Asesoría en Gafas de Sol',
    'Control Post-venta'
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos de la cita:', formData);
    // Aquí se procesaría la cita
    alert('¡Cita agendada exitosamente! Te contactaremos para confirmar.');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Calendar className="w-16 h-16 mx-auto text-wood mb-4" />
          <h2 className="text-4xl font-bold text-darkGray mb-4">Agenda tu Cita</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Reserva tu cita con nuestros especialistas en salud visual
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Appointment Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-darkGray mb-6">Información de la Cita</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-darkGray mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wood"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-darkGray mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wood"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-darkGray mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wood"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-darkGray mb-2">
                    Fecha Preferida
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wood"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-darkGray mb-2">
                    Hora Preferida
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wood"
                    required
                  >
                    <option value="">Seleccionar hora</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-darkGray mb-2">
                  Tipo de Servicio
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wood"
                  required
                >
                  <option value="">Seleccionar servicio</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-darkGray mb-2">
                  Notas Adicionales (Opcional)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wood"
                  placeholder="Describe cualquier síntoma o solicitud especial..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-wood to-wood-dark text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Agendar Cita
              </button>
            </form>
          </div>

          {/* Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-onix to-darkGray rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Información Importante</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-wood-light rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Las citas se confirman dentro de 24 horas</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-wood-light rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Llega 15 minutos antes de tu cita</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-wood-light rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Trae tu identificación y seguro médico</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-wood-light rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Examen visual gratuito en primera consulta</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-darkGray mb-6">Horarios de Atención</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-semibold">Lunes - Viernes:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Sábados:</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Domingos:</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointments;
