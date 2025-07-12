
import React, { useState } from 'react';
import { Eye, Settings, Wrench, MessageCircle, Calendar, Book } from 'lucide-react';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';
import BlogManager from './BlogManager';

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showProductForm, setShowProductForm] = useState(false);

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Eye },
    { id: 'products', label: 'Productos', icon: Settings },
    { id: 'blog', label: 'Blog', icon: Book },
    { id: 'appointments', label: 'Citas', icon: Calendar },
    { id: 'messages', label: 'Mensajes', icon: MessageCircle },
    { id: 'settings', label: 'Configuración', icon: Wrench }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-onix">Panel de Control</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-wood">
                <h3 className="text-lg font-semibold text-onix mb-2">Productos</h3>
                <p className="text-3xl font-bold text-wood">156</p>
                <p className="text-gray-600 text-sm">Total de productos</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-onix">
                <h3 className="text-lg font-semibold text-onix mb-2">Citas Pendientes</h3>
                <p className="text-3xl font-bold text-onix">23</p>
                <p className="text-gray-600 text-sm">Esta semana</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-gray-500">
                <h3 className="text-lg font-semibold text-onix mb-2">Mensajes</h3>
                <p className="text-3xl font-bold text-gray-600">8</p>
                <p className="text-gray-600 text-sm">Sin leer</p>
              </div>
            </div>
          </div>
        );

      case 'products':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-onix">Gestión de Productos</h2>
              <button
                onClick={() => setShowProductForm(true)}
                className="bg-wood text-white px-4 py-2 rounded-lg hover:bg-wood-dark transition-colors"
              >
                Agregar Producto
              </button>
            </div>
            
            {showProductForm ? (
              <ProductForm onClose={() => setShowProductForm(false)} />
            ) : (
              <ProductTable onEdit={() => setShowProductForm(true)} />
            )}
          </div>
        );

      case 'blog':
        return <BlogManager />;

      case 'appointments':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-onix">Gestión de Citas</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600">Sistema de gestión de citas en desarrollo...</p>
            </div>
          </div>
        );

      case 'messages':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-onix">Mensajes de Contacto</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600">Sistema de mensajes en desarrollo...</p>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-onix">Configuración del Sistema</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600">Configuración del sistema en desarrollo...</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-wood to-wood-dark text-white p-6">
            <h1 className="text-3xl font-bold">Panel de Administración</h1>
            <p className="opacity-90">Gestiona tu sitio web desde aquí</p>
          </div>

          <div className="flex">
            {/* Sidebar */}
            <div className="w-64 bg-gray-50 p-6 border-r">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-wood text-white'
                          : 'text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <IconComponent size={20} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Content */}
            <div className="flex-1 p-6">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
