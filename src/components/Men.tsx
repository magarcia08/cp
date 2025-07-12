
import React, { useEffect, useState } from 'react';
import { useProducts } from '../contexts/ProductContext';
import ProductCard from './ProductCard';

const Men: React.FC = () => {
  const { products } = useProducts();
  const [menProducts, setMenProducts] = useState(products);

  useEffect(() => {
    const filtered = products.filter(product => 
      product.gender === 'hombres' || product.gender === 'unisex'
    );
    setMenProducts(filtered);
  }, [products]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-black mb-4">Colección Hombres</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Monturas diseñadas especialmente para el estilo masculino
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>

        {menProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No hay productos para hombres disponibles en este momento.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Men;
