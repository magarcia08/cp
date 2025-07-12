
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ArrowLeft, ZoomIn } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
  onNavigateToAppointments?: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ 
  product, 
  onClose, 
  onNavigateToAppointments 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleImageZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsZoomed(true);
  };

  const closeZoom = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setIsZoomed(false);
  };

  const handleAppointmentClick = () => {
    onClose(); // Cerrar el modal de detalles
    if (onNavigateToAppointments) {
      onNavigateToAppointments();
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <button
              onClick={onClose}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="mr-2" size={20} />
              Volver al catálogo
            </button>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-square group">
                  {product.images.length > 0 && (
                    <>
                      <img
                        src={product.images[currentImageIndex]}
                        alt={product.name}
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={handleImageZoom}
                      />
                      
                      {/* Zoom Icon */}
                      <button
                        onClick={handleImageZoom}
                        className="absolute top-4 right-4 bg-white bg-opacity-80 text-gray-800 p-2 rounded-full hover:bg-opacity-100 transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100"
                      >
                        <ZoomIn size={20} />
                      </button>
                      
                      {product.images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 text-gray-800 p-2 rounded-full hover:bg-opacity-100 transition-all duration-300 shadow-lg"
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 text-gray-800 p-2 rounded-full hover:bg-opacity-100 transition-all duration-300 shadow-lg"
                          >
                            <ChevronRight size={20} />
                          </button>
                        </>
                      )}
                    </>
                  )}
                </div>

                {/* Thumbnails */}
                {product.images.length > 1 && (
                  <div className="flex space-x-2 overflow-x-auto">
                    {product.images.map((image, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                          idx === currentImageIndex 
                            ? 'border-wood shadow-md' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${product.name} ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Information */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-wood/10 text-wood px-3 py-1 rounded-full text-sm font-semibold border border-wood/30">
                      {product.ref}
                    </span>
                    <span className="text-sm text-gray-500">{product.brand}</span>
                  </div>
                  <h1 className="text-3xl font-bold text-onix mb-2">{product.name}</h1>
                  {product.description && (
                    <p className="text-gray-600 text-lg">{product.description}</p>
                  )}
                </div>

                {/* Product Details */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-onix mb-1">Referencia</h3>
                      <p className="text-gray-600">{product.ref}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-onix mb-1">Material</h3>
                      <p className="text-gray-600">{product.material}</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-onix mb-1">Marca</h3>
                    <p className="text-gray-600">{product.brand}</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-onix mb-2">Colores Disponibles</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.colorsAvailable.map((color, idx) => (
                        <span
                          key={idx}
                          className="bg-white border border-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-onix mb-2">Categorías</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.categories.map((category, idx) => (
                        <span
                          key={idx}
                          className="bg-wood/10 text-wood px-3 py-1 rounded-full text-sm border border-wood/30"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div>
                  <button 
                    onClick={handleAppointmentClick}
                    className="w-full bg-gradient-to-r from-wood to-wood-dark text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Agendar Cita
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      {isZoomed && product.images.length > 0 && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-[60] flex items-center justify-center p-4" 
          onClick={closeZoom}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <button
              onClick={closeZoom}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-all duration-300 z-10"
            >
              <X size={24} />
            </button>
            <img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="max-w-full max-h-full object-contain cursor-zoom-out"
              onClick={closeZoom}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
