
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-amber-100 py-12" style={{
      background: `
        linear-gradient(135deg, #2D1B12 0%, #3E2723 25%, #4E342E 50%, #3E2723 75%, #2D1B12 100%),
        radial-gradient(circle at 20% 50%, rgba(78, 52, 46, 0.8) 0%, transparent 60%),
        radial-gradient(circle at 80% 20%, rgba(93, 64, 55, 0.6) 0%, transparent 50%),
        repeating-linear-gradient(0deg, rgba(78, 52, 46, 0.4) 0px, transparent 3px, transparent 12px, rgba(78, 52, 46, 0.4) 15px),
        repeating-linear-gradient(90deg, rgba(93, 64, 55, 0.3) 0px, transparent 2px, transparent 16px, rgba(93, 64, 55, 0.3) 18px),
        linear-gradient(45deg, rgba(78, 52, 46, 0.5) 25%, transparent 25%),
        linear-gradient(-45deg, rgba(93, 64, 55, 0.5) 25%, transparent 25%),
        repeating-linear-gradient(30deg, rgba(62, 39, 35, 0.3) 0px, transparent 1px, transparent 20px, rgba(62, 39, 35, 0.3) 21px)
      `,
      backgroundSize: '100% 100%, 140px 140px, 100px 100px, 20px 20px, 25px 25px, 50px 50px, 50px 50px, 30px 30px'
    }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/6bcf489c-f157-48d0-a822-06748ab8acfd.png" 
                alt="Visión Zimag Logo" 
                className="h-32 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-amber-200 mb-4">
              Cuidando tu salud visual con profesionalismo y calidad.
            </p>
            <div className="text-amber-200 space-y-1">
              <p>📍 Calle 47 # 29 - 31</p>
              <p className="pl-4">Edificio Herad Center</p>
              <p>📞 +57 316 9805500</p>
              <p>✉️ visionzimag@gmail.com</p>
              <div className="mt-3">
                <p className="font-semibold text-amber-100">Horario:</p>
                <p className="text-sm">Lun - Vie: 8:00 a.m - 6:00 p.m</p>
                <p className="text-sm">Sábados: 8:00 a.m - 1:00 p.m</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-amber-100">Servicio</h3>
            <ul className="space-y-2 text-amber-200">
              <li>Examen Visual</li>
              <li>Montura Premium</li>
              <li>Lente de Contacto</li>
              <li>Gafa de Sol</li>
              <li>Reparación</li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-amber-100">Medio de Pago</h3>
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xs">VISA</span>
              </div>
              <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                <span className="text-red-600 font-bold text-xs">MC</span>
              </div>
              <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                <span className="text-blue-700 font-bold text-xs">AMEX</span>
              </div>
              <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                <span className="text-green-600 font-bold text-xs">PSE</span>
              </div>
              <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                <span className="text-purple-600 font-bold text-xs">NEQUI</span>
              </div>
              <div className="bg-white rounded-lg p-2 flex items-center justify-center">
                <span className="text-green-700 font-bold text-xs">CASH</span>
              </div>
            </div>
            <p className="text-amber-200 text-sm">
              Aceptamos diferentes forma de pago para tu comodidad.
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-amber-100">Síguenos</h3>
            <div className="grid grid-cols-3 gap-3 mb-4">
              <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors" title="Facebook">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/visionzimag/" className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-colors" title="Instagram">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors" title="LinkedIn">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors" title="TikTok">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors" title="YouTube">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-red-700 hover:bg-red-800 rounded-full flex items-center justify-center transition-colors" title="Pinterest">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.098.119.112.223.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
            <p className="text-amber-200 text-sm">
              Mantente al día con nuestras últimas ofertas y novedades.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-amber-600 mt-8 pt-8 text-center text-amber-200">
          <p>&copy; 2025 Visión Zimag. Todos los derechos reservados.</p>
          <p className="text-sm mt-2">Diseñado con ❤️ para el cuidado de tu visión</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
