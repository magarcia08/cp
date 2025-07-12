
import React from 'react';
import { Instagram } from 'lucide-react';

const InstagramFloat: React.FC = () => {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/visionzimag/', '_blank');
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={handleInstagramClick}
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 animate-pulse"
        title="Síguenos en Instagram"
      >
        <Instagram size={24} />
      </button>
    </div>
  );
};

export default InstagramFloat;
