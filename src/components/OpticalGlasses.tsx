
import React, { useEffect, useState } from 'react';
import { useProducts } from '../contexts/ProductContext';
import ProductCard from './ProductCard';

const OpticalGlasses: React.FC = () => {
  const { products } = useProducts();
  const [opticalProducts, setOpticalProducts] = useState(products);

  useEffect(() => {
    const filtered = products.filter(product => 
      product.categories.includes('gafas-oftalmicas')
    );
    setOpticalProducts(filtered);
  }, [products]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-black mb-4">Gafas Oftálmicas</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mejora tu visión con nuestras monturas oftálmicas de alta calidad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opticalProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>

        {opticalProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No hay gafas oftálmicas disponibles en este momento.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default OpticalGlasses;
