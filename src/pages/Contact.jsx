import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Youtube } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#002060' }}>
            Contáctanos
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-8"
            style={{
              background: 'linear-gradient(to right, #002060, #C19E4B)'
            }}
          ></div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte. No dudes en contactarnos para cualquier consulta o información
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="rounded-2xl p-8 border border-neutral-100" style={{
              background: 'linear-gradient(to bottom right, #f0f8ff, #e6f3ff)'
            }}>
              <h3 className="text-2xl font-bold mb-8" style={{ color: '#002060' }}>
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{
                    backgroundColor: '#002060'
                  }}>
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1" style={{ color: '#002060' }}>
                      Dirección
                    </h4>
                    <p className="text-neutral-600">
                      Calle Principal 123<br />
                      Ciudad, Estado 12345<br />
                      España
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{
                    backgroundColor: '#002060'
                  }}>
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1" style={{ color: '#002060' }}>
                      Teléfono
                    </h4>
                    <p className="text-neutral-600">
                      +34 123 456 789<br />
                      +34 987 654 321
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{
                    backgroundColor: '#002060'
                  }}>
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1" style={{ color: '#002060' }}>
                      Email
                    </h4>
                    <p className="text-neutral-600">
                      info@centroislámico.org<br />
                      eventos@centroislámico.org
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{
                    backgroundColor: '#002060'
                  }}>
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1" style={{ color: '#002060' }}>
                      Horarios
                    </h4>
                    <div className="text-neutral-600 space-y-1">
                      <p><strong>Lunes - Viernes:</strong> 9:00 - 21:00</p>
                      <p><strong>Sábados:</strong> 9:00 - 22:00</p>
                      <p><strong>Domingos:</strong> 10:00 - 20:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100">
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#002060' }}>
                Síguenos
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center text-white hover:bg-pink-700 transition-colors duration-300 transform hover:scale-105"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white hover:bg-red-700 transition-colors duration-300 transform hover:scale-105"
                >
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-soft p-8 border border-neutral-100">
            <h3 className="text-2xl font-bold mb-8" style={{ color: '#002060' }}>
              Envíanos un Mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-colors duration-300"
                    style={{
                      focusRingColor: '#002060'
                    }}
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-colors duration-300"
                    style={{
                      focusRingColor: '#002060'
                    }}
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                  Teléfono (Opcional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-colors duration-300"
                  style={{
                    focusRingColor: '#002060'
                  }}
                  placeholder="+34 123 456 789"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                  Asunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-colors duration-300"
                  style={{
                    focusRingColor: '#002060'
                  }}
                >
                  <option value="">Selecciona un tema</option>
                  <option value="general">Consulta General</option>
                  <option value="events">Eventos y Actividades</option>
                  <option value="education">Programas Educativos</option>
                  <option value="membership">Membresía</option>
                  <option value="volunteer">Voluntariado</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-colors duration-300 resize-none"
                  style={{
                    focusRingColor: '#002060'
                  }}
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-4 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{
                  backgroundColor: '#C19E4B'
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#A0822A'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C19E4B'}
              >
                <Send className="h-5 w-5 mr-2" />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#002060' }}>
            Nuestra Ubicación
          </h3>
          <div className="bg-white rounded-2xl overflow-hidden shadow-soft border border-neutral-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.882684170227!2d2.1458488!3d41.3549036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a3cd9a56ec1d%3A0xf3f938677cee58e6!2z2YXYs9is2K8g2KfZhNil2K3Ys9in2YYgLyBNZXpxdWl0YSBBbC1JaHNhbg!5e0!3m2!1ses!2ses!4v1750796860548!5m2!1ses!2ses"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Centro Islámico - Mezquita Al-Ihsan, Barcelona"
            ></iframe>
          </div>
          <div className="text-center mt-4">
            <p className="text-neutral-600">
              <strong>Casa de les ciéncies i el coneixement de Barcelona</strong> - Barcelona, España
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;