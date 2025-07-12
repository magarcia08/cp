
import React, { useState, useEffect } from 'react';
import { useProducts } from '../contexts/ProductContext';
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';
import Brands from './Brands';
import { Product } from '../types/Product';

interface CatalogProps {
  onNavigateToAppointments?: () => void;
}

const Catalog: React.FC<CatalogProps> = ({ onNavigateToAppointments }) => {
  const { filteredProducts, filterProducts } = useProducts();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeView, setActiveView] = useState('todos');

  const categories = [
    { id: 'gafas-sol', label: 'Gafas de Sol' },
    { id: 'gafas-oftalmicas', label: 'Gafas Oftálmicas' },
    { id: 'lentes-contacto', label: 'Lentes de Contacto' },
    { id: 'hombres', label: 'Hombres' },
    { id: 'mujeres', label: 'Mujeres' },
    { id: 'niños', label: 'Niños' }
  ];

  const viewOptions = [
    { id: 'todos', label: 'Todos los Productos' },
    { id: 'marcas', label: 'Marcas' }
  ];

  const handleCategoryChange = (categoryId: string) => {
    // Si es una categoría de género
    if (['hombres', 'mujeres', 'niños'].includes(categoryId)) {
      setSelectedGender(categoryId === selectedGender ? '' : categoryId);
      filterProducts({ 
        categories: selectedCategories.length > 0 ? selectedCategories : undefined,
        gender: categoryId === selectedGender ? undefined : categoryId 
      });
    } else {
      // Si es una categoría de producto
      const newCategories = selectedCategories.includes(categoryId)
        ? selectedCategories.filter(cat => cat !== categoryId)
        : [...selectedCategories, categoryId];
      
      setSelectedCategories(newCategories);
      filterProducts({ 
        categories: newCategories.length > 0 ? newCategories : undefined,
        gender: selectedGender || undefined 
      });
    }
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  useEffect(() => {
    filterProducts({ categories: [], gender: undefined });
  }, []);

  const isCategorySelected = (categoryId: string) => {
    if (['hombres', 'mujeres', 'niños'].includes(categoryId)) {
      return selectedGender === categoryId;
    }
    return selectedCategories.includes(categoryId);
  };

  if (activeView === 'marcas') {
    return (
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-onix mb-4">Nuestro Catálogo</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explora nuestra amplia selección de productos para el cuidado visual
            </p>
          </div>

          {/* View Options */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            {viewOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveView(option.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeView === option.id
                    ? 'bg-wood text-white shadow-lg'
                    : 'bg-gray-200 text-onix hover:bg-onix hover:text-white'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <Brands />
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-onix mb-4">Nuestro Catálogo</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explora nuestra amplia selección de productos para el cuidado visual
            </p>
          </div>

          {/* View Options */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in">
            {viewOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveView(option.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeView === option.id
                    ? 'bg-wood text-white shadow-lg'
                    : 'bg-gray-200 text-onix hover:bg-onix hover:text-white'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          {/* Video Section */}
          <div className="mb-12 animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-r from-onix to-wood p-8 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-4">Descubre Nuestra Colección</h3>
                    <p className="text-lg opacity-90">Video promocional de nuestros productos</p>
                    <div className="mt-6 w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto cursor-pointer hover:bg-white/30 transition-colors">
                      <span className="text-3xl">▶</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isCategorySelected(category.id)
                    ? 'bg-wood text-white shadow-lg'
                    : 'bg-gray-200 text-onix hover:bg-onix hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Selected filters display */}
          {(selectedCategories.length > 0 || selectedGender) && (
            <div className="mb-8 flex flex-wrap gap-2 justify-center">
              <span className="text-gray-600 font-medium">Filtros activos:</span>
              {selectedCategories.map((cat) => (
                <span key={cat} className="bg-wood/10 text-wood px-3 py-1 rounded-full text-sm border border-wood/30">
                  {categories.find(c => c.id === cat)?.label}
                </span>
              ))}
              {selectedGender && (
                <span className="bg-onix/10 text-onix px-3 py-1 rounded-full text-sm border border-onix/30">
                  {categories.find(c => c.id === selectedGender)?.label}
                </span>
              )}
            </div>
          )}

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No se encontraron productos con los filtros seleccionados.</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Details Modal */}
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={closeProductDetails}
          onNavigateToAppointments={onNavigateToAppointments}
        />
      )}
    </>
  );
};

export default Catalog;
