import React, { useState, useEffect, useRef } from 'react';
import { useProducts } from '../contexts/ProductContext';
import { Product } from '../types/Product';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Upload, X, Plus, FolderOpen } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

interface ProductFormProps {
  product?: Product | null;
  onClose: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onClose }) => {
  const { addProduct, updateProduct } = useProducts();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    ref: '',
    material: '',
    brand: '',
    description: '',
    categories: [] as string[],
    gender: 'unisex' as 'hombres' | 'mujeres' | 'niños' | 'unisex',
    images: [] as string[],
    colorsAvailable: [] as string[]
  });

  const [newColor, setNewColor] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const availableCategories = [
    { id: 'marcas', label: 'Marcas' },
    { id: 'gafas-sol', label: 'Gafas de Sol' },
    { id: 'gafas-oftalmicas', label: 'Gafas Oftálmicas' },
    { id: 'hombres', label: 'Hombres' },
    { id: 'mujeres', label: 'Mujeres' },
    { id: 'niños', label: 'Niños' }
  ];

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        ref: product.ref,
        material: product.material,
        brand: product.brand,
        description: product.description || '',
        categories: product.categories,
        gender: product.gender,
        images: product.images,
        colorsAvailable: product.colorsAvailable
      });
    }
  }, [product]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.ref || !formData.material || !formData.brand || formData.categories.length === 0) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos obligatorios incluyendo al menos una categoría",
        variant: "destructive"
      });
      return;
    }

    const productData: Product = {
      id: product?.id || Date.now().toString(),
      ...formData
    };

    if (product) {
      updateProduct(product.id, productData);
      toast({
        title: "Producto actualizado",
        description: "El producto se ha actualizado correctamente"
      });
    } else {
      addProduct(productData);
      toast({
        title: "Producto agregado",
        description: "El producto se ha agregado correctamente"
      });
    }

    onClose();
  };

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        categories: [...formData.categories, categoryId]
      });
    } else {
      setFormData({
        ...formData,
        categories: formData.categories.filter(cat => cat !== categoryId)
      });
    }
  };

  const addColor = () => {
    if (newColor.trim() && !formData.colorsAvailable.includes(newColor.trim())) {
      setFormData({
        ...formData,
        colorsAvailable: [...formData.colorsAvailable, newColor.trim()]
      });
      setNewColor('');
    }
  };

  const removeColor = (colorToRemove: string) => {
    setFormData({
      ...formData,
      colorsAvailable: formData.colorsAvailable.filter(color => color !== colorToRemove)
    });
  };

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0 && formData.images.length < 3) {
      const file = files[0];
      
      // Create a preview URL for the selected file
      const previewUrl = URL.createObjectURL(file);
      
      // In a real application, you would upload this file to a server
      // For now, we'll use the preview URL
      setFormData({
        ...formData,
        images: [...formData.images, previewUrl]
      });

      toast({
        title: "Imagen agregada",
        description: `Se ha agregado la imagen: ${file.name}`,
      });

      // Reset the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } else if (formData.images.length >= 3) {
      toast({
        title: "Límite alcanzado",
        description: "Solo puedes agregar hasta 3 imágenes por producto",
        variant: "destructive"
      });
    }
  };

  const addImage = () => {
    if (imageUrl.trim() && formData.images.length < 3) {
      setFormData({
        ...formData,
        images: [...formData.images, imageUrl.trim()]
      });
      setImageUrl('');
    }
  };

  const removeImage = (index: number) => {
    // If it's a blob URL, revoke it to free memory
    const imageToRemove = formData.images[index];
    if (imageToRemove.startsWith('blob:')) {
      URL.revokeObjectURL(imageToRemove);
    }
    
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index)
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Nombre del Producto *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            placeholder="Ej: Montura Clásica Premium"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="ref">Referencia *</Label>
          <Input
            id="ref"
            value={formData.ref}
            onChange={(e) => setFormData({...formData, ref: e.target.value})}
            placeholder="Ej: VZ-001"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="material">Material *</Label>
          <Input
            id="material"
            value={formData.material}
            onChange={(e) => setFormData({...formData, material: e.target.value})}
            placeholder="Ej: Acetato Italiano"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="brand">Marca *</Label>
          <Input
            id="brand"
            value={formData.brand}
            onChange={(e) => setFormData({...formData, brand: e.target.value})}
            placeholder="Ej: Ray-Ban"
            required
          />
        </div>
      </div>

      {/* Categories Multi-select */}
      <div>
        <Label>Categorías * (selecciona una o más)</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2 p-4 border rounded-lg">
          {availableCategories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={category.id}
                checked={formData.categories.includes(category.id)}
                onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
              />
              <Label htmlFor={category.id} className="text-sm">
                {category.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="gender">Género</Label>
        <Select value={formData.gender} onValueChange={(value) => setFormData({...formData, gender: value as any})}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hombres">Hombres</SelectItem>
            <SelectItem value="mujeres">Mujeres</SelectItem>
            <SelectItem value="niños">Niños</SelectItem>
            <SelectItem value="unisex">Unisex</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="description">Descripción</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          placeholder="Descripción del producto"
          rows={3}
        />
      </div>

      {/* Colors Section */}
      <div>
        <Label>Colores Disponibles</Label>
        <div className="flex gap-2 mt-2">
          <Input
            value={newColor}
            onChange={(e) => setNewColor(e.target.value)}
            placeholder="Agregar color"
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addColor())}
          />
          <Button type="button" onClick={addColor} size="sm">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {formData.colorsAvailable.map((color, index) => (
            <div key={index} className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm">
              {color}
              <button
                type="button"
                onClick={() => removeColor(color)}
                className="ml-2 text-red-500 hover:text-red-700"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Images Section */}
      <div>
        <Label>Imágenes del Producto (máximo 3)</Label>
        
        {/* File Upload Section */}
        <div className="mt-2 p-4 border-2 border-dashed border-gray-300 rounded-lg">
          <div className="text-center">
            <FolderOpen className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-600 mb-4">Selecciona imágenes desde tu computadora</p>
            <Button 
              type="button" 
              onClick={handleFileSelect} 
              disabled={formData.images.length >= 3}
              className="mb-4"
            >
              <Upload className="h-4 w-4 mr-2" />
              Seleccionar Archivo
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              multiple={false}
            />
          </div>
        </div>

        {/* URL Input Section (Alternative) */}
        <div className="mt-4">
          <Label className="text-sm text-gray-600">O agregar por URL</Label>
          <div className="flex gap-2 mt-2">
            <Input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="URL de la imagen"
              disabled={formData.images.length >= 3}
            />
            <Button 
              type="button" 
              onClick={addImage} 
              size="sm"
              disabled={formData.images.length >= 3 || !imageUrl.trim()}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Image Preview */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          {formData.images.map((image, index) => (
            <div key={index} className="relative">
              <img 
                src={image} 
                alt={`Producto ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg border"
                onError={(e) => {
                  console.log('Error loading image:', image);
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <Button type="submit" className="bg-black hover:bg-gray-800 text-white flex-1">
          {product ? 'Actualizar Producto' : 'Agregar Producto'}
        </Button>
        <Button type="button" variant="outline" onClick={onClose}>
          Cancelar
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;
