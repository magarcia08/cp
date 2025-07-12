
import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: '¡Hola! Soy Lucas, el asistente virtual de Visión Zimag. ¿En qué puedo ayudarte hoy?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const quickReplies = [
    'Agendar cita',
    'Ver promociones',
    'Información de productos',
    'Horarios de atención',
    'Ubicación'
  ];

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const userMessage: Message = {
        id: messages.length + 1,
        text: inputText,
        isUser: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);
      setInputText('');

      // Simulate bot response
      setTimeout(() => {
        const botResponse = generateBotResponse(inputText);
        const botMessage: Message = {
          id: messages.length + 2,
          text: botResponse,
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      }, 1000);
    }
  };

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('cita') || input.includes('agendar')) {
      return 'Perfecto, puedo ayudarte a agendar una cita. Necesitaré algunos datos: nombre, teléfono, fecha preferida y tipo de servicio. ¿Te gustaría proceder con el agendamiento?';
    } else if (input.includes('promoción') || input.includes('oferta') || input.includes('descuento')) {
      return 'Tenemos excelentes promociones activas: 2x1 en monturas seleccionadas, examen visual gratuito, y 20% de descuento para estudiantes. ¿Te interesa alguna en particular?';
    } else if (input.includes('horario') || input.includes('hora')) {
      return 'Nuestros horarios son: Lunes a Viernes de 9:00 AM a 6:00 PM, Sábados de 9:00 AM a 2:00 PM. Los domingos permanecemos cerrados.';
    } else if (input.includes('precio') || input.includes('costo')) {
      return 'Nuestros precios varían según el producto. Monturas desde $150.000, gafas de sol desde $250.000, y lentes de contacto desde $89.000. ¿Te interesa algún producto específico?';
    } else if (input.includes('ubicación') || input.includes('dirección')) {
      return 'Estamos ubicados en Calle 47 # 29 - 31, Edificio Herad Center. Contamos con parqueadero y fácil acceso en transporte público. ¿Necesitas direcciones específicas?';
    } else {
      return 'Gracias por tu consulta. Nuestro equipo está listo para ayudarte con cualquier duda sobre productos, servicios o citas. ¿Hay algo específico que te gustaría saber?';
    }
  };

  const handleQuickReply = (reply: string) => {
    setInputText(reply);
    handleSendMessage();
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-wood hover:bg-wood-dark text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 animate-bounce"
        >
          <MessageCircle size={24} />
        </button>
      ) : (
        <div className="bg-white rounded-2xl shadow-2xl w-80 h-96 flex flex-col overflow-hidden animate-slide-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-onix to-darkGray text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-wood rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">L</span>
              </div>
              <span className="font-semibold">Lucas</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-wood-light transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-2xl ${
                    message.isUser
                      ? 'bg-wood text-white rounded-br-none'
                      : 'bg-gray-100 text-darkGray rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="px-4 pb-2">
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(reply)}
                  className="text-xs px-3 py-1 bg-gray-100 hover:bg-wood hover:text-white rounded-full transition-colors duration-200"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wood text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-wood hover:bg-wood-dark text-white p-2 rounded-lg transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
