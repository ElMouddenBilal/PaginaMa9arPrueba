import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Quiénes Somos', href: '#about' },
    { name: 'Actividades', href: '#activities' },
    { name: 'Eventos', href: '#events' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contacto', href: '#contact' }
  ];

  const services = [
    'Oraciones Diarias',
    'Clases de Corán',
    'Educación Islámica',
    'Servicios de Matrimonio',
    'Asesoramiento Espiritual',
    'Programas Juveniles'
  ];

  return (
    <footer style={{
      background: 'linear-gradient(to bottom right, #002060, #001040, #002060)',
      color: 'white'
    }}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-8">
              <img 
                src="/logo-mosque-300x200.png" 
                alt="Centro Islámico" 
                className="h-16 w-auto"
                style={{ filter: 'brightness(1.2)' }}
              />
            </div>
            <p className="mb-8 leading-relaxed text-lg" style={{ color: '#b3d9ff' }}>
              Un espacio sagrado de encuentro, aprendizaje y crecimiento espiritual 
              para toda la comunidad musulmana local.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: 'rgba(0, 32, 96, 0.5)',
                  color: '#b3d9ff'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#1877f2';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 32, 96, 0.5)';
                  e.currentTarget.style.color = '#b3d9ff';
                }}
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: 'rgba(0, 32, 96, 0.5)',
                  color: '#b3d9ff'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#e4405f';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 32, 96, 0.5)';
                  e.currentTarget.style.color = '#b3d9ff';
                }}
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: 'rgba(0, 32, 96, 0.5)',
                  color: '#b3d9ff'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#ff0000';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 32, 96, 0.5)';
                  e.currentTarget.style.color = '#b3d9ff';
                }}
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-8" style={{ color: '#C19E4B' }}>
              Enlaces Rápidos
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition-colors duration-300 text-lg hover:underline"
                    style={{ color: '#b3d9ff' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#C19E4B'}
                    onMouseLeave={e => e.currentTarget.style.color = '#b3d9ff'}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-8" style={{ color: '#C19E4B' }}>
              Nuestros Servicios
            </h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service} className="text-lg" style={{ color: '#b3d9ff' }}>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-8" style={{ color: '#C19E4B' }}>
              Información de Contacto
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-4 mt-1 flex-shrink-0" style={{ color: '#C19E4B' }} />
                <div className="text-lg" style={{ color: '#b3d9ff' }}>
                  <p>Calle Principal 123</p>
                  <p>Ciudad, Estado 12345</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-4 flex-shrink-0" style={{ color: '#C19E4B' }} />
                <span className="text-lg" style={{ color: '#b3d9ff' }}>+34 123 456 789</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 mr-4 flex-shrink-0" style={{ color: '#C19E4B' }} />
                <span className="text-lg" style={{ color: '#b3d9ff' }}>info@centroislámico.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Prayer Times */}
        <div className="mt-16 pt-12" style={{ borderTop: '1px solid rgba(0, 32, 96, 0.3)' }}>
          <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: '#C19E4B' }}>
            Horarios de Oración Hoy
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div 
              className="rounded-2xl p-6 hover:scale-105 transition-all duration-300"
              style={{ 
                backgroundColor: '#C19E4B',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
              }}
            >
              <h4 className="font-bold mb-3 text-lg text-white">
                Fajr
              </h4>
              <p className="text-xl font-bold" style={{ color: '#002060' }}>
                06:15
              </p>
            </div>
            <div 
              className="rounded-2xl p-6 hover:scale-105 transition-all duration-300"
              style={{ 
                backgroundColor: '#C19E4B',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
              }}
            >
              <h4 className="font-bold mb-3 text-lg text-white">
                Dhuhr
              </h4>
              <p className="text-xl font-bold" style={{ color: '#002060' }}>
                13:30
              </p>
            </div>
            <div 
              className="rounded-2xl p-6 hover:scale-105 transition-all duration-300"
              style={{ 
                backgroundColor: '#C19E4B',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
              }}
            >
              <h4 className="font-bold mb-3 text-lg text-white">
                Asr
              </h4>
              <p className="text-xl font-bold" style={{ color: '#002060' }}>
                16:45
              </p>
            </div>
            <div 
              className="rounded-2xl p-6 hover:scale-105 transition-all duration-300"
              style={{ 
                backgroundColor: '#C19E4B',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
              }}
            >
              <h4 className="font-bold mb-3 text-lg text-white">
                Maghrib
              </h4>
              <p className="text-xl font-bold" style={{ color: '#002060' }}>
                19:20
              </p>
            </div>
            <div 
              className="rounded-2xl p-6 col-span-2 md:col-span-1 hover:scale-105 transition-all duration-300"
              style={{ 
                backgroundColor: '#C19E4B',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
              }}
            >
              <h4 className="font-bold mb-3 text-lg text-white">
                Isha
              </h4>
              <p className="text-xl font-bold" style={{ color: '#002060' }}>
                20:45
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div style={{ borderTop: '1px solid rgba(0, 32, 96, 0.3)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0 text-lg" style={{ color: '#b3d9ff' }}>
              <span>© 2024 Centro Islámico. Todos los derechos reservados.</span>
            </div>
            <div className="flex items-center text-lg" style={{ color: '#b3d9ff' }}>
              <span>Hecho con</span>
              <Heart className="h-5 w-5 text-red-400 mx-2" />
              <span>para nuestra comunidad</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;