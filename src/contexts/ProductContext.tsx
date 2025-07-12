
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product, Brand } from '../types/Product';

interface ProductContextType {
  products: Product[];
  brands: Brand[];
  addProduct: (product: Product) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  addBrand: (brand: Brand) => void;
  filteredProducts: Product[];
  filterProducts: (filters: ProductFilters) => void;
}

interface ProductFilters {
  categories?: string[];
  gender?: string;
  brand?: string;
  searchTerm?: string;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Datos de ejemplo actualizados
const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Montura Clásica Premium',
    ref: 'VZ-001',
    colorsAvailable: ['Negro', 'Marrón', 'Azul Marino'],
    material: 'Acetato Italiano',
    images: [
      'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=400&h=300&fit=crop'
    ],
    categories: ['gafas-oftalmicas', 'hombres', 'mujeres'],
    gender: 'unisex',
    brand: 'Ray-Ban',
    description: 'Elegante montura clásica perfecta para uso diario'
  },
  {
    id: '2',
    name: 'Gafas de Sol Deportivas',
    ref: 'VZ-002',
    colorsAvailable: ['Negro', 'Blanco', 'Rojo'],
    material: 'Policarbonato',
    images: [
      'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=300&fit=crop'
    ],
    categories: ['gafas-sol', 'hombres'],
    gender: 'hombres',
    brand: 'Oakley',
    description: 'Protección UV400 con diseño deportivo moderno'
  },
  {
    id: '3',
    name: 'Montura Infantil Colorida',
    ref: 'VZ-003',
    colorsAvailable: ['Rosa', 'Azul', 'Verde'],
    material: 'Silicona Flexible',
    images: [
      'https://images.unsplash.com/photo-1583792028088-daa9b71e97fc?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop'
    ],
    categories: ['gafas-oftalmicas', 'niños'],
    gender: 'niños',
    brand: 'Kids Vision',
    description: 'Montura resistente y cómoda para niños'
  }
];

const sampleBrands: Brand[] = [
  {
    id: '1',
    name: 'Ray-Ban',
    logo: 'https://images.unsplash.com/photo-1556306535-38febf6782ef?w=200&h=100&fit=crop',
    description: 'Marca icónica de gafas con más de 80 años de historia'
  },
  {
    id: '2',
    name: 'Oakley',
    logo: 'https://images.unsplash.com/photo-1556306535-38febf6782ef?w=200&h=100&fit=crop',
    description: 'Especialistas en gafas deportivas de alta tecnología'
  }
];

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(sampleProducts);
  const [brands, setBrands] = useState<Brand[]>(sampleBrands);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(sampleProducts);

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
    setFilteredProducts([...products, product]);
  };

  const updateProduct = (id: string, updatedProduct: Partial<Product>) => {
    const updated = products.map(p => 
      p.id === id ? { ...p, ...updatedProduct } : p
    );
    setProducts(updated);
    setFilteredProducts(updated);
  };

  const deleteProduct = (id: string) => {
    const filtered = products.filter(p => p.id !== id);
    setProducts(filtered);
    setFilteredProducts(filtered);
  };

  const addBrand = (brand: Brand) => {
    setBrands([...brands, brand]);
  };

  const filterProducts = (filters: ProductFilters) => {
    let filtered = [...products];

    if (filters.categories && filters.categories.length > 0) {
      filtered = filtered.filter(p => 
        filters.categories!.some(category => p.categories.includes(category))
      );
    }

    if (filters.gender && filters.gender !== 'todos') {
      filtered = filtered.filter(p => p.gender === filters.gender || p.gender === 'unisex');
    }

    if (filters.brand) {
      filtered = filtered.filter(p => p.brand.toLowerCase().includes(filters.brand!.toLowerCase()));
    }

    if (filters.searchTerm) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(filters.searchTerm!.toLowerCase()) ||
        p.ref.toLowerCase().includes(filters.searchTerm!.toLowerCase()) ||
        p.brand.toLowerCase().includes(filters.searchTerm!.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  return (
    <ProductContext.Provider value={{
      products,
      brands,
      addProduct,
      updateProduct,
      deleteProduct,
      addBrand,
      filteredProducts,
      filterProducts
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
