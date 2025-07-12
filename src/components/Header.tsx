
import React, { useState } from 'react';
import { Menu, X, Search, Settings, ChevronDown } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [productosDropdownOpen, setProductosDropdownOpen] = useState(false);
  const [brigadasDropdownOpen, setBrigadasDropdownOpen] = useState(false);

  const mainMenuItems = [
    { id: 'inicio', label: 'Inicio' },
    { 
      id: 'productos', 
      label: 'Productos',
      hasDropdown: true,
      subCategories: [
        {
          category: 'Tipos',
          items: [
            { id: 'gafas-oftalmicas', label: 'Gafas Oftálmicas' },
            { id: 'gafas-sol', label: 'Gafas de Sol' },
            { id: 'lentes-contacto', label: 'Lentes de Contacto' }
          ]
        },
        {
          category: 'Categorías',
          items: [
            { id: 'mujeres', label: 'Mujeres' },
            { id: 'hombres', label: 'Hombres' },
            { id: 'niños', label: 'Niños' }
          ]
        }
      ]
    },
    { id: 'accesorios', label: 'Accesorios' },
    { 
      id: 'brigadas', 
      label: 'Brigadas',
      hasDropdown: true,
      subItems: [
        { id: 'brigadas-empresas', label: 'Empresas' },
        { id: 'servicios-empresariales', label: 'Servicios Empresariales' },
        { id: 'brigadas-jornadas', label: 'Jornadas de Salud' }
      ]
    },
    { id: 'catalogo', label: 'Catálogo' },
    { id: 'blog', label: 'Blog' },
    { id: 'contactenos', label: 'Contáctenos' }
  ];

  const handleMenuClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    setProductosDropdownOpen(false);
    setBrigadasDropdownOpen(false);
  };

  return (
    <header className="bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 shadow-xl border-b-3 border-amber-300" style={{
      backgroundImage: `
        radial-gradient(circle at 25% 45%, rgba(139, 69, 19, 0.15) 0%, transparent 45%),
        radial-gradient(circle at 75% 55%, rgba(160, 82, 45, 0.12) 0%, transparent 40%),
        linear-gradient(30deg, rgba(139, 69, 19, 0.08) 20%, transparent 30%),
        linear-gradient(-30deg, rgba(160, 82, 45, 0.08) 20%, transparent 30%),
        repeating-linear-gradient(0deg, rgba(139, 69, 19, 0.06) 0px, transparent 4px, transparent 16px, rgba(139, 69, 19, 0.06) 20px),
        repeating-linear-gradient(90deg, rgba(160, 82, 45, 0.06) 0px, transparent 5px, transparent 20px, rgba(160, 82, 45, 0.06) 25px),
        linear-gradient(180deg, rgba(222, 184, 135, 0.12) 0%, rgba(139, 69, 19, 0.06) 60%, rgba(222, 184, 135, 0.12) 100%)
      `,
      backgroundSize: '140px 140px, 120px 120px, 80px 80px, 80px 80px, 24px 24px, 30px 30px, 100% 100%'
    }}>
      <div className="container mx-auto px-3 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/6bcf489c-f157-48d0-a822-06748ab8acfd.png" 
              alt="Visión Zimag Logo" 
              className="h-20 w-auto hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                console.log('Error loading logo:', e);
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {mainMenuItems.map((item) => (
              <div key={item.id} className="relative">
                <button
                  onClick={() => {
                    if (item.hasDropdown) {
                      if (item.id === 'productos') {
                        setProductosDropdownOpen(!productosDropdownOpen);
                        setBrigadasDropdownOpen(false);
                      } else if (item.id === 'brigadas') {
                        setBrigadasDropdownOpen(!brigadasDropdownOpen);
                        setProductosDropdownOpen(false);
                      }
                    } else {
                      handleMenuClick(item.id);
                    }
                  }}
                  className={`flex items-center text-amber-800 hover:text-amber-700 transition-all duration-300 font-semibold px-3 py-2 rounded-lg hover:bg-amber-200/50 text-base ${
                    activeSection === item.id ? 'text-amber-900 bg-amber-200/70 font-bold' : ''
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={16} className="ml-1" />}
                </button>

                {/* Productos Dropdown Menu */}
                {item.id === 'productos' && (
                  <div className={`absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-lg border border-amber-200 z-50 transition-all duration-200 ${
                    productosDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}>
                    {item.subCategories?.map((subCategory) => (
                      <div key={subCategory.category} className="p-2">
                        <h4 className="font-bold text-amber-900 px-3 py-2 text-base border-b border-amber-100">
                          {subCategory.category}
                        </h4>
                        {subCategory.items.map((subItem) => (
                          <button
                            key={subItem.id}
                            onClick={() => handleMenuClick(subItem.id)}
                            className="block w-full text-left px-4 py-2 text-amber-800 hover:bg-amber-50 transition-all duration-300 rounded text-base font-medium"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                )}

                {/* Brigadas Dropdown Menu */}
                {item.id === 'brigadas' && (
                  <div className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-amber-200 z-50 transition-all duration-200 ${
                    brigadasDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}>
                    {item.subItems?.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => handleMenuClick(subItem.id)}
                        className="block w-full text-left px-4 py-3 text-amber-800 hover:bg-amber-50 transition-all duration-300 first:rounded-t-lg last:rounded-b-lg text-base font-medium"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search Bar and Admin Access */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border-2 border-amber-300/50 bg-white/80 text-amber-900 placeholder-amber-600/70 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 w-48 text-sm"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600/70" size={18} />
            </div>
            
            {/* Admin Button */}
            <button
              onClick={() => handleMenuClick('admin')}
              className={`p-2 rounded-full transition-all duration-300 hover:bg-amber-200/50 hover:scale-110 ${
                activeSection === 'admin' ? 'bg-amber-200/70 text-amber-900' : 'text-amber-800'
              }`}
              title="Panel de Administración"
            >
              <Settings size={18} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-amber-800 p-2 hover:bg-amber-200/50 rounded-lg transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 animate-fade-in bg-white rounded-lg shadow-lg border border-gray-100">
            {/* Mobile Search */}
            <div className="p-4 border-b border-gray-100">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-base"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>
            
            <div className="px-2">
              {mainMenuItems.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => {
                      if (item.hasDropdown) {
                        if (item.id === 'productos') {
                          setProductosDropdownOpen(!productosDropdownOpen);
                        } else if (item.id === 'brigadas') {
                          setBrigadasDropdownOpen(!brigadasDropdownOpen);
                        }
                      } else {
                        handleMenuClick(item.id);
                      }
                    }}
                    className={`flex items-center justify-between w-full text-left py-3 px-4 text-amber-800 hover:bg-gray-100 transition-all duration-300 rounded-lg my-1 text-base font-medium ${
                      activeSection === item.id ? 'bg-gray-100 text-amber-700 font-semibold' : ''
                    }`}
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown size={16} />}
                  </button>
                  
                  {/* Mobile Productos Submenu */}
                  {item.id === 'productos' && productosDropdownOpen && (
                    <div className="ml-4">
                      {item.subCategories?.map((subCategory) => (
                        <div key={subCategory.category} className="mb-2">
                          <h5 className="font-semibold text-amber-900 px-2 py-1 text-base">
                            {subCategory.category}
                          </h5>
                          {subCategory.items.map((subItem) => (
                            <button
                              key={subItem.id}
                              onClick={() => handleMenuClick(subItem.id)}
                              className="block w-full text-left py-2 px-4 text-amber-700 hover:bg-gray-50 transition-all duration-300 rounded-lg my-1 text-base"
                            >
                              {subItem.label}
                            </button>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Mobile Brigadas Submenu */}
                  {item.id === 'brigadas' && brigadasDropdownOpen && (
                    <div className="ml-4">
                      {item.subItems?.map((subItem) => (
                        <button
                          key={subItem.id}
                          onClick={() => handleMenuClick(subItem.id)}
                          className="block w-full text-left py-2 px-4 text-amber-700 hover:bg-gray-50 transition-all duration-300 rounded-lg my-1 text-base"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Admin Access */}
              <button
                onClick={() => handleMenuClick('admin')}
                className={`flex items-center w-full text-left py-3 px-4 text-amber-800 hover:bg-gray-100 transition-all duration-300 rounded-lg my-1 text-base font-medium ${
                  activeSection === 'admin' ? 'bg-gray-100 text-amber-700 font-semibold' : ''
                }`}
              >
                <Settings className="mr-2" size={18} />
                Administración
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
