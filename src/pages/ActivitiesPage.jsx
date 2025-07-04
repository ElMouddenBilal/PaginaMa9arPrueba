import React, { useState } from "react";
import { BookOpen, Heart, Users, MessageSquare, PartyPopper } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ActivityCard from "../components/ActivityCard";
import SectionIntro from "../components/SectionIntro";

const ActivitiesPage = () => {
  const navigate = useNavigate();

  // Tus actividades (puedes moverlas a un archivo aparte si quieres)
  const activities = [
    {
      title: "Clases de Corán",
      description: "Sesiones semanales de recitación y memorización del Sagrado Corán para todas las edades.",
      image: "https://images.pexels.com/photos/8923862/pexels-photo-8923862.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Educación",
      icon: <BookOpen className="h-6 w-6" />,
      date: "2024-05-10",
      place: "Sala principal",
      details: `<h2 class="text-2xl font-bold mt-8 mb-4 text-[#002060]">Un trimestre de aprendizaje y hermandad</h2>...`
    },
    {
      title: "Iftar Comunitario",
      description: "Reuniones especiales durante Ramadán para compartir la ruptura del ayuno en comunidad.",
      image: "https://images.pexels.com/photos/6529613/pexels-photo-6529613.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Celebraciones",
      icon: <Users className="h-6 w-6" />,
      date: "2024-04-15",
      place: "Comedor principal",
      details: `<h2 class="text-2xl font-bold mt-8 mb-4 text-[#002060]">Compartiendo la bendición del iftar</h2><p>Durante el mes sagrado de Ramadán...</p>`
    },
    {
      title: "Programa de Ayuda Social",
      description: "Distribución de alimentos y apoyo a familias necesitadas de la comunidad local.",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Servicio Social",
      icon: <Heart className="h-6 w-6" />,
      date: "2024-03-20",
      place: "Centro comunitario",
      details: `<h2 class="text-2xl font-bold mt-8 mb-4 text-[#002060]">Extendiendo una mano solidaria</h2><p>Nuestro programa de ayuda social...</p>`
    },
    {
      title: "Conferencias Islámicas",
      description: "Charlas educativas sobre diversos temas islámicos con expertos invitados.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Educación",
      icon: <MessageSquare className="h-6 w-6" />,
      date: "2024-02-28",
      place: "Auditorio principal",
      details: `<h2 class="text-2xl font-bold mt-8 mb-4 text-[#002060]">Enriqueciendo el conocimiento islámico</h2><p>Nuestras conferencias islámicas...</p>`
    },
    {
      title: "Actividades Juveniles",
      description: "Programas especiales para jóvenes musulmanes con deportes y actividades recreativas.",
      image: "https://images.pexels.com/photos/8815020/pexels-photo-8815020.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Juventud",
      icon: <Users className="h-6 w-6" />,
      date: "2024-01-25",
      place: "Instalaciones deportivas",
      details: `<h2 class="text-2xl font-bold mt-8 mb-4 text-[#002060]">Fortaleciendo la identidad juvenil</h2><p>Nuestro programa de actividades juveniles...</p>`
    },
    {
      title: "Celebración de Eid",
      description: "Festividades anuales de Eid al-Fitr y Eid al-Adha con toda la comunidad.",
      image: "https://images.pexels.com/photos/8828596/pexels-photo-8828596.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Celebraciones",
      icon: <PartyPopper className="h-6 w-6" />,
      date: "2024-06-15",
      place: "Patio principal y salones",
      details: `<h2 class="text-2xl font-bold mt-8 mb-4 text-[#002060]">Celebrando las festividades más importantes</h2><p>Las celebraciones de Eid...</p>`
    }
  ];

  const categories = ["Todas", "Educación", "Celebraciones", "Servicio Social", "Juventud"];
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const filteredActivities = selectedCategory === "Todas"
    ? activities
    : activities.filter(activity => activity.category === selectedCategory);

  // Para el grid de botones en móvil
  const mobileCategoryRows = [
    ["Educación", "Celebraciones"],
    ["Servicio Social", "Juventud"]
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-[#e8eaf6] pt-32 pb-16">
      {/* Sección principal con explicación */}
      <SectionIntro
        title="Actividades"
        paragraphs={[
          "En el CCCBcn ofrecemos un amplio abanico de actividades pensadas para todas las edades y perfiles. Desde talleres educativos y clases de árabe, hasta charlas, jornadas culturales, actividades deportivas y encuentros familiares. Nuestro objetivo es fomentar el aprendizaje, la convivencia y el desarrollo personal y comunitario en un ambiente abierto, inclusivo y enriquecedor.",
          "Todas nuestras actividades están diseñadas para promover los valores del respeto, la solidaridad y el conocimiento, y para fortalecer los lazos entre los miembros de la comunidad y la sociedad en general."
        ]}
        images={[
          {
            src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            alt: "Taller educativo"
          },
          {
            src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            alt: "Actividad cultural"
          }
        ]}
      />

      {/* Filtros y grid de actividades */}
      <section className="w-full max-w-7xl mx-auto px-2 sm:px-4">
        {/* Filtros */}
        <div className="mb-12">
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

        {/* Grid de actividades */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActivities.map((activity, index) => (
            <ActivityCard
              key={index}
              activity={activity}
              onClick={() => navigate(`/actividades/${index}`)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ActivitiesPage;