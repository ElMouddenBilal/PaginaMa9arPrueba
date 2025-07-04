import React, { useState, useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import logoMa9arBlanco from '../assets/LogoMa9arBlancoNeutroPNG.png';
import logoMa9ar from '../assets/LogoMa9arPNG.png';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detecta si estás en la home
  const isHome = location.pathname === "/" || location.pathname === "/home";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Quiénes Somos', href: '#about', isPage: true, route: '/quienes-somos' },
    { name: 'Actividades', href: '#activities', isPage: true, route: '/actividades' },
    { name: 'Eventos', href: '#events', isPage: true, route: '/eventos' },
    { name: 'Blog', isPage: true, route: '/blog' },
  ];

  // Función para manejar la navegación
  const handleNavClick = (href) => {
    if (!isHome) {
      // Si no estás en home, navega a home con el hash
      window.location.href = `/${href}`;
    }
    // Si estás en home, el href normal funcionará
    setIsMenuOpen(false);
  };

  // Lógica para el fondo del navbar
  const getNavbarBg = () => {
    if (isHome) {
      return isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-soft border-b border-neutral-100' 
        : 'bg-transparent';
    } else {
      // En páginas de detalle, siempre azul
      return 'bg-[#002060] shadow-soft';
    }
  };

  // Lógica para el color del texto
  const getTextColor = () => {
    if (isHome) {
      return isScrolled ? 'text-black' : 'text-white';
    } else {
      return 'text-white';
    }
  };

  // Lógica para el logo
  const getLogo = () => {
    if (isHome) {
      return isScrolled ? logoMa9ar : logoMa9arBlanco;
    } else {
      return logoMa9arBlanco;
    }
  };

  // Lógica para el botón de contacto
  const getContactButtonStyle = () => {
    if (isHome) {
      return isScrolled 
        ? 'bg-primary-900 text-white' 
        : 'bg-white text-primary-900';
    } else {
      return 'bg-[#C19E4B] text-white';
    }
  };

  // Lógica para el botón móvil
  const getMobileButtonStyle = () => {
    if (isHome) {
      return isScrolled 
        ? 'text-neutral-700 hover:bg-neutral-100' 
        : 'text-white hover:bg-white/10';
    } else {
      return 'text-white hover:bg-white/10';
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${getNavbarBg()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={getLogo()}
              alt="Casa de les Ciències i el Coneixement"
              className="h-10 w-auto transition-all duration-300 hover:scale-105"
              style={{
                maxWidth: '70px',
                height: 'auto',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
            {navItems.map((item) =>
              item.isPage ? (
                <Link
                  key={item.name}
                  to={item.route}
                  className={`relative font-medium text-lg transition-all duration-200 hover:scale-105 group ${getTextColor()} hover:text-[#C19E4B]`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  <span 
                    className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full"
                    style={{ backgroundColor: '#C19E4B' }}
                  ></span>
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative font-medium text-lg transition-all duration-200 hover:scale-105 group ${getTextColor()} hover:text-[#C19E4B]`}
                >
                  {item.name}
                  <span 
                    className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full"
                    style={{ backgroundColor: '#C19E4B' }}
                  ></span>
                </a>
              )
            )}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={() => handleNavClick('#contact')}
              className={`relative px-8 py-3 font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-medium overflow-hidden group ${getContactButtonStyle()} hover:bg-[#C19E4B] hover:text-white`}
              style={{ borderRadius: '8px' }}
            >
              <span className="relative z-10">Contacto</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-3 rounded-lg transition-all duration-300 hover:scale-110 ${getMobileButtonStyle()}`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white/95 backdrop-blur-lg rounded-2xl mt-4 shadow-strong border border-neutral-100">
              {navItems.map((item) =>
                item.isPage ? (
                  <Link
                    key={item.name}
                    to={item.route}
                    className="block px-4 py-3 text-neutral-700 font-medium text-lg hover:text-primary-900 hover:bg-primary-50 rounded-xl transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-neutral-700 font-medium text-lg hover:text-primary-900 hover:bg-primary-50 rounded-xl transition-all duration-300"
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.name}
                  </a>
                )
              )}
              <a
                href="#contact"
                className="block px-4 py-3 bg-primary-900 text-white font-semibold text-lg hover:bg-primary-800 transition-all duration-300 mt-4 text-center"
                style={{ borderRadius: '8px' }}
                onClick={() => handleNavClick('#contact')}
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;