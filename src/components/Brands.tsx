
import React, { useState } from 'react';
import { useProducts } from '../contexts/ProductContext';
import ProductCard from './ProductCard';

const Brands: React.FC = () => {
  const { products, filterProducts } = useProducts();
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const brands = [
    {
      id: 'ray-ban',
      name: 'Ray-Ban',
      logo: 'https://images.unsplash.com/photo-1556306535-38febf6782ef?w=200&h=100&fit=crop'
    },
    {
      id: 'oakley',
      name: 'Oakley',
      logo: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=100&fit=crop'
    },
    {
      id: 'prada',
      name: 'Prada',
      logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=100&fit=crop'
    },
    {
      id: 'gucci',
      name: 'Gucci',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop'
    },
    {
      id: 'versace',
      name: 'Versace',
      logo: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=200&h=100&fit=crop'
    },
    {
      id: 'armani',
      name: 'Armani',
      logo: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=100&fit=crop'
    },
    {
      id: 'dolce-gabbana',
      name: 'Dolce & Gabbana',
      logo: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=100&fit=crop'
    },
    {
      id: 'nacionales',
      name: 'Nacionales',
      logo: 'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=200&h=100&fit=crop'
    }
  ];

  const handleBrandClick = (brandName: string) => {
    setSelectedBrand(brandName);
    const filtered = products.filter(product => 
      product.brand.toLowerCase().includes(brandName.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const resetFilter = () => {
    setSelectedBrand(null);
    setFilteredProducts(products);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-black mb-4">Nuestras Marcas</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explora las mejores marcas de monturas y gafas disponibles
          </p>
        </div>

        {!selectedBrand ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {brands.map((brand, index) => (
              <div
                key={brand.id}
                onClick={() => handleBrandClick(brand.name)}
                className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-32">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-black group-hover:text-onix transition-colors duration-300">
                    {brand.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-black">
                Productos de {selectedBrand}
              </h3>
              <button
                onClick={resetFilter}
                className="bg-onix text-white px-6 py-2 rounded-lg hover:bg-onix-dark transition-colors duration-300"
              >
                Ver todas las marcas
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No se encontraron productos de la marca {selectedBrand}.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Brands;
