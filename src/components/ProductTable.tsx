
import React from 'react';
import { useProducts } from '../contexts/ProductContext';
import { Product } from '../types/Product';
import { Button } from './ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Edit, Trash2, Eye } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

interface ProductTableProps {
  onEdit: (product: Product) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({ onEdit }) => {
  const { products, deleteProduct } = useProducts();
  const { toast } = useToast();

  const handleDelete = (productId: string, productName: string) => {
    if (window.confirm(`¿Estás seguro de que quieres eliminar "${productName}"?`)) {
      deleteProduct(productId);
      toast({
        title: "Producto eliminado",
        description: `${productName} ha sido eliminado correctamente`
      });
    }
  };

  const getCategoryLabel = (category: string) => {
    const labels: { [key: string]: string } = {
      'marcas': 'Marcas',
      'gafas-sol': 'Gafas de Sol',
      'gafas-oftalmicas': 'Gafas Oftálmicas',
      'hombres': 'Hombres',
      'mujeres': 'Mujeres',
      'niños': 'Niños'
    };
    return labels[category] || category;
  };

  const getGenderLabel = (gender: string) => {
    const labels: { [key: string]: string } = {
      'hombres': 'Hombres',
      'mujeres': 'Mujeres',
      'niños': 'Niños',
      'unisex': 'Unisex'
    };
    return labels[gender] || gender;
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Referencia</TableHead>
            <TableHead>Marca</TableHead>
            <TableHead>Categorías</TableHead>
            <TableHead>Género</TableHead>
            <TableHead>Material</TableHead>
            <TableHead>Colores</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                {product.images.length > 0 ? (
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Eye className="h-4 w-4 text-gray-400" />
                  </div>
                )}
              </TableCell>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.ref}</TableCell>
              <TableCell>{product.brand}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {product.categories.map((category, index) => (
                    <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {getCategoryLabel(category)}
                    </span>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {getGenderLabel(product.gender)}
                </span>
              </TableCell>
              <TableCell>{product.material}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {product.colorsAvailable.slice(0, 2).map((color, index) => (
                    <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {color}
                    </span>
                  ))}
                  {product.colorsAvailable.length > 2 && (
                    <span className="text-xs text-gray-500">
                      +{product.colorsAvailable.length - 2}
                    </span>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onEdit(product)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(product.id, product.name)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      {products.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>No hay productos registrados</p>
          <p className="text-sm">Agrega tu primer producto usando el botón "Agregar Producto"</p>
        </div>
      )}
    </div>
  );
};

export default ProductTable;
