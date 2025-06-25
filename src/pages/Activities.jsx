import React from 'react';
import { Calendar, Users, BookOpen, Heart, MessageSquare, PartyPopper } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ActivityCard from '../components/ActivityCard';

const Activities = () => {
  const navigate = useNavigate();

  const activities = [
    {
      title: "Clases de Corán",
      description: "Sesiones semanales de recitación y memorización del Sagrado Corán para todas las edades.",
      image: "https://images.pexels.com/photos/8923862/pexels-photo-8923862.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Educación",
      icon: <BookOpen className="h-6 w-6" />,
      date: "2024-05-10", // <-- AÑADIDO
      place: "Sala principal", // <-- AÑADIDO
      details: `<h2 class="text-2xl font-bold mt-8 mb-4 text-[#002060]">Un trimestre de aprendizaje y hermandad</h2>...` // <-- AÑADIDO (el HTML largo)
    },
    {
      title: "Iftar Comunitario",
      description: "Reuniones especiales durante Ramadán para compartir la ruptura del ayuno en comunidad.",
      image: "https://images.pexels.com/photos/6529613/pexels-photo-6529613.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Celebraciones",
      icon: <Users className="h-6 w-6" />,
      date: "2024-04-15", // <-- AÑADIDO
      place: "Comedor principal", // <-- AÑADIDO
      details: `<h2 class="text-2xl font-bold mt-8 mb-4 text-[#002060]">Compartiendo la bendición del iftar</h2><p>Durante el mes sagrado de Ramadán...</p>` // <-- AÑADIDO
    },
    {
      title: "Programa de Ayuda Social",
      description: "Distribución de alimentos y apoyo a familias necesitadas de la comunidad local.",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Servicio Social",
      icon: <Heart className="h-6 w-6" />,
      date: "2024-03-20", // <-- AÑADIDO
      place: "Centro comunitario", // <-- AÑADIDO
      details: `<h2 class="text-2xl font-bold mt-8 mb-4 text-[#002060]">Extendiendo una mano solidaria</h2><p>Nuestro programa de ayuda social...</p>` // <-- AÑADIDO
    },
    {
      title: "Conferencias Islámicas",
      description: "Charlas educativas sobre diversos temas islámicos con expertos invitados.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Educación",
      icon: <MessageSquare className="h-6 w-6" />,
      date: "2024-02-28", // <-- AÑADIDO
      place: "Auditorio principal", // <-- AÑADIDO
      details: `<h2 class="text-2xl font-bold mt-8 mb-4 text-[#002060]">Enriqueciendo el conocimiento islámico</h2><p>Nuestras conferencias islámicas...</p>` // <-- AÑADIDO
    },
    {
      title: "Actividades Juveniles",
      description: "Programas especiales para jóvenes musulmanes con deportes y actividades recreativas.",
      image: "https://images.pexels.com/photos/8815020/pexels-photo-8815020.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Juventud",
      icon: <Users className="h-6 w-6" />,
      date: "2024-01-25", // <-- AÑADIDO
      place: "Instalaciones deportivas", // <-- AÑADIDO
      details: `<h2 class="text-2xl font-bold mt-8 mb-4 text-[#002060]">Fortaleciendo la identidad juvenil</h2><p>Nuestro programa de actividades juveniles...</p>` // <-- AÑADIDO
    },
    {
      title: "Celebración de Eid",
      description: "Festividades anuales de Eid al-Fitr y Eid al-Adha con toda la comunidad.",
      image: "https://images.pexels.com/photos/8828596/pexels-photo-8828596.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Celebraciones",
      icon: <PartyPopper className="h-6 w-6" />,
      date: "2024-06-15", // <-- AÑADIDO
      place: "Patio principal y salones", // <-- AÑADIDO
      details: `<h2 class="text-2xl font-bold mt-8 mb-4 text-[#002060]">Celebrando las festividades más importantes</h2><p>Las celebraciones de Eid...</p>` // <-- AÑADIDO
    }
  ];

  const categories = ["Todas", "Educación", "Celebraciones", "Servicio Social", "Juventud"];
  const [selectedCategory, setSelectedCategory] = React.useState("Todas");

  const filteredActivities = selectedCategory === "Todas" 
    ? activities 
    : activities.filter(activity => activity.category === selectedCategory);

  // Para el grid de botones en móvil
  const mobileCategoryRows = [
    ["Educación", "Celebraciones"],
    ["Servicio Social", "Juventud"]
  ];

  return (
    <section id="activities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#002060' }}>
            Actividades Realizadas
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-8"
            style={{
              background: 'linear-gradient(to right, #002060, #C19E4B)'
            }}
          ></div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Conoce las diversas actividades que realizamos para fortalecer nuestra fe y servir a la comunidad
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-16">
          {/* Mobile layout */}
          <div className="flex flex-col gap-3 sm:hidden">
            {/* Botón "Todas" */}
            <button
              onClick={() => setSelectedCategory("Todas")}
              className={`w-full px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === "Todas"
                  ? 'text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              style={{
                backgroundColor: selectedCategory === "Todas" ? '#002060' : undefined
              }}
            >
              Todas
            </button>
            {/* Las otras categorías en 2 filas de 2 */}
            {mobileCategoryRows.map((row, i) => (
              <div key={i} className="flex gap-3">
                {row.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-1/2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      selectedCategory === category
                        ? 'text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    style={{
                      backgroundColor: selectedCategory === category ? '#002060' : undefined
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            ))}
          </div>
          {/* Desktop/tablet layout */}
          <div className="hidden sm:flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{
                  backgroundColor: selectedCategory === category ? '#002060' : undefined
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActivities.map((activity, index) => (
            <ActivityCard
              key={index}
              activity={activity}
              onClick={() => navigate(`/actividades/${index}`)}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <p className="text-lg text-neutral-600 mb-6">
            ¿Te gustaría participar en nuestras actividades?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ 
              backgroundColor: '#002060',
              '&:hover': { backgroundColor: '#001040' }
            }}
            onMouseEnter={e => e.target.style.backgroundColor = '#001040'}
            onMouseLeave={e => e.target.style.backgroundColor = '#002060'}
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Activities;