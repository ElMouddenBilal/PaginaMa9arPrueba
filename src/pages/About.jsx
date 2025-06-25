import { Book, Users, Heart, Award } from "lucide-react";
import fotoMa9arPorFuera from "../assets/fotoMa9arPorFuera.jpg"; // Ajusta la extensión si es .png o .jpeg

export default function About() {
  const values = [
    {
      icon: Book,
      title: "Educación Islámica",
      description: "Promovemos el conocimiento del Corán y la Sunnah a través de clases y talleres educativos."
    },
    {
      icon: Users,
      title: "Unidad Comunitaria",
      description: "Fomentamos la hermandad y la solidaridad entre los miembros de nuestra comunidad."
    },
    {
      icon: Heart,
      title: "Servicio Social",
      description: "Desarrollamos programas de ayuda y apoyo para familias necesitadas de la región."
    },
    {
      icon: Award,
      title: "Excelencia Moral",
      description: "Cultivamos los valores islámicos de honestidad, respeto y compasión en nuestra vida diaria."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#002060' }}>
            Quiénes Somos
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-8"
            style={{
              background: 'linear-gradient(to right, #002060, #C19E4B)'
            }}
          ></div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Desde 2008, la Casa de les Ciències i el Coneixement ha sido un pilar fundamental en la comunidad musulmana local, 
            ofreciendo un espacio sagrado para la oración, el aprendizaje y la fraternidad.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-3xl shadow-soft p-10 mb-20 border border-neutral-100">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6" style={{ color: '#002060' }}>Nuestra Misión</h3>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Servir como un centro espiritual y cultural que fortalece la fe, 
                promueve la comprensión del Islam auténtico, y construye puentes 
                de diálogo intercultural en nuestra sociedad.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Nos dedicamos a crear un ambiente acogedor donde cada musulmán 
                pueda crecer espiritualmente y contribuir positivamente a la 
                comunidad en general.
              </p>
            </div>
            <div className="relative">
              <img
                src={fotoMa9arPorFuera}
                alt="Fachada del Ma9ar"
                className="rounded-2xl shadow-medium w-full h-80 object-cover"
              />
              <div className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(to top, #00206033, transparent)'
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-soft text-center transform hover:scale-105 transition-all duration-300 hover:shadow-medium border border-neutral-100"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 icon-container-${index}`}
                  style={{
                    background: '#b3d9ff',
                  }}
                >
                  <Icon
                    className={`h-8 w-8 transition-colors duration-300 icon-${index}`}
                    style={{ color: '#002060' }}
                  />
                </div>
                <h4
                  className={`text-xl font-bold mb-4 transition-colors duration-300 title-${index}`}
                  style={{ color: '#002060' }}
                >
                  {value.title}
                </h4>
                <p className="text-neutral-600 leading-relaxed">{value.description}</p>
                
                {/* CSS para el hover completo con los colores invertidos */}
                <style>
                  {`
                    .group:hover .icon-container-${index} {
                      background: #C19E4B !important; /* fondo dorado */
                    }
                    .group:hover .icon-${index} {
                      color: #fdf4d9 !important; /* icono dorado clarito */
                    }
                    .group:hover .title-${index} {
                      color: #C19E4B !important; /* título dorado */
                    }
                  `}
                </style>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}