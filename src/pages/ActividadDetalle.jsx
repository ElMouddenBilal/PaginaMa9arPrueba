import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, Users, BookOpen, Heart, MessageSquare, PartyPopper, ArrowLeft, Image as ImageIcon } from "lucide-react";

// Ejemplo de actividades pasadas
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

const icons = {
  "Educación": <BookOpen className="h-7 w-7" />,
  "Celebraciones": <PartyPopper className="h-7 w-7" />,
  "Servicio Social": <Heart className="h-7 w-7" />,
  "Juventud": <Users className="h-7 w-7" />
};

const ActividadDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const activity = activities[parseInt(id, 10)];

  // Scroll arriba al montar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!activity) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Actividad no encontrada</h2>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-[#002060] text-white rounded-lg hover:bg-[#001040] transition-colors"
          >
            Volver
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-[#e8eaf6] flex items-start justify-center pt-32 pb-16 px-2">
      <article className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl overflow-hidden relative animate-fade-in border border-neutral-100">
        {/* Botón volver */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 flex items-center gap-2 text-[#002060] hover:text-[#C19E4B] font-semibold transition-colors z-10 bg-white/80 px-3 py-1 rounded-full shadow"
        >
          <ArrowLeft className="h-5 w-5" />
          Volver
        </button>

        {/* Imagen principal */}
        <div className="relative">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-[32rem] object-cover object-center"
            style={{ borderTopLeftRadius: '1.5rem', borderTopRightRadius: '1.5rem' }}
          />
          {/* Icono flotante */}
          <div className="absolute -bottom-8 left-20 bg-white shadow-lg rounded-full p-4 border-4 border-[#f8fafc] flex items-center justify-center">
            <span className="text-[#002060]">{icons[activity.category] || <Calendar className="h-7 w-7" />}</span>
          </div>
        </div>

        {/* Contenido */}
        <div className="pt-20 pb-16 px-8 sm:px-16 md:px-32 flex flex-col items-start text-left">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-2" style={{ background: 'linear-gradient(90deg, #002060 60%, #C19E4B 100%)', color: 'white' }}>
            {activity.category}
          </span>
          <h1 className="text-5xl font-extrabold mb-2 text-[#002060]">{activity.title}</h1>
          <h2 className="text-2xl text-neutral-600 mb-6">{activity.description}</h2>
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="flex items-center gap-2 text-[#002060] bg-[#f3f4f6] px-4 py-2 rounded-full text-base font-medium shadow">
              <Calendar className="h-5 w-5" /> {activity.date}
            </span>
            <span className="flex items-center gap-2 text-[#002060] bg-[#f3f4f6] px-4 py-2 rounded-full text-base font-medium shadow">
              <Users className="h-5 w-5" /> {activity.place}
            </span>
          </div>
          <div
            className="prose max-w-none text-neutral-800 text-lg leading-relaxed w-full"
            dangerouslySetInnerHTML={{ __html: activity.details }}
          />
        </div>
      </article>
    </section>
  );
};

export default ActividadDetalle;