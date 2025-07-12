
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
  index: number;
  onViewDetails?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index, onViewDetails }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(product);
    }
  };

  return (
    <div
      className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-xl animate-fade-in group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden h-64">
        {product.images.length > 0 && (
          <>
            <img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 group-hover:rotate-1"
            />
            
            {product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-opacity-70 z-10"
                  type="button"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-opacity-70 z-10"
                  type="button"
                >
                  <ChevronRight size={16} />
                </button>
                
                {/* Image indicators */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  {product.images.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
        
        <div className="absolute top-4 right-4 bg-onix text-white px-3 py-1 rounded-full text-sm font-semibold transform group-hover:scale-110 transition-all duration-300">
          {product.ref}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-black mb-2 group-hover:text-onix transition-colors duration-300">
          {product.name}
        </h3>
        
        <div className="space-y-2 mb-4">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Referencia:</span> {product.ref}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Material:</span> {product.material}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Marca:</span> {product.brand}
          </p>
        </div>
        
        {/* Colors Available */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">Colores disponibles:</p>
          <div className="flex flex-wrap gap-1">
            {product.colorsAvailable.map((color, idx) => (
              <span
                key={idx}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
              >
                {color}
              </span>
            ))}
          </div>
        </div>
        
        {product.description && (
          <p className="text-gray-600 mb-4 text-sm line-clamp-2">{product.description}</p>
        )}
        
        <button 
          onClick={handleViewDetails}
          className="w-full bg-gradient-to-r from-gray-700 to-black text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Ver Detalles
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
