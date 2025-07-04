import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react";
import SectionIntro from "../components/SectionIntro";

// Colores corporativos
const GOLD = "#C19E4B";
const GOLD_HOVER = "#A0822A";

// Formateador de fecha
const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("es-ES", { day: "2-digit", month: "long", year: "numeric" });
};

// Solo eventos destacados
const featuredEvents = [
  {
    id: 1,
    title: "Conferencia: Los Pilares del Islam",
    description: "Una conferencia educativa sobre los cinco pilares fundamentales del Islam.",
    date: "2024-01-15",
    time: "19:00",
    location: "Salón Principal",
    category: "Educación",
    totalSpots: 90,
  },
  {
    id: 5,
    title: "Cena Benéfica Anual",
    description: "Cena especial para recaudar fondos para proyectos comunitarios.",
    date: "2024-01-29",
    time: "20:00",
    location: "Salón de Eventos",
    category: "Celebración",
    totalSpots: 120,
  }
];

// Componente EventFeaturedCard con el estilo original bonito
const EventFeaturedCard = ({ event, formatDate, GOLD, GOLD_HOVER, onClick }) => (
  <div 
    className="rounded-2xl shadow-xl p-6 md:p-8 mb-12 text-white"
    style={{
      background: 'linear-gradient(to right, #002060, #001040)'
    }}
  >
    <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
      <div>
        <span 
          className="inline-block px-3 py-1 text-white text-sm font-semibold rounded-full mb-4"
          style={{ backgroundColor: GOLD }}
        >
          Evento Destacado
        </span>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{event.title}</h3>
        <p className="text-lg md:text-xl mb-6 text-blue-100">{event.description}</p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 md:gap-4 mb-6">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-2 flex-shrink-0" />
            <span className="text-sm md:text-base">{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-2 flex-shrink-0" />
            <span className="text-sm md:text-base">{event.time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
            <span className="text-sm md:text-base">{event.location}</span>
          </div>
        </div>
        <button 
          className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg rounded-lg"
          style={{ backgroundColor: GOLD }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = GOLD_HOVER}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = GOLD}
          onClick={onClick}
        >
          ¡Apúntate ahora!
          <ExternalLink className="ml-2 h-4 w-4" />
        </button>
      </div>
      <div className="text-center order-first md:order-last">
        <div className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-white/20 rounded-full mb-4">
          <Calendar className="h-12 w-12 md:h-16 md:w-16" />
        </div>
        <div className="flex items-center justify-center">
          <Users className="h-5 w-5 mr-2" />
          <span className="text-base md:text-lg">{event.totalSpots} plazas disponibles</span>
        </div>
      </div>
    </div>
  </div>
);

const EventsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-[#e8eaf6] pt-32 pb-16">
      {/* Explicación y fotos */}
      <SectionIntro
        title="Eventos Destacados"
        paragraphs={[
          "En el CCCBcn organizamos eventos especiales para toda la comunidad: conferencias, jornadas culturales, talleres, celebraciones y mucho más. Nuestro objetivo es crear espacios de encuentro, aprendizaje y convivencia, abiertos a todas las edades y perfiles.",
          "Participar en nuestros eventos destacados es una oportunidad única para conocer gente, compartir experiencias y fortalecer los lazos entre los miembros de la comunidad y la sociedad en general."
        ]}
        images={[
          {
            src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            alt: "Evento cultural"
          },
          {
            src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            alt: "Evento social"
          }
        ]}
      />

      {/* Eventos destacados con el estilo original bonito */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#002060] mb-4">Próximos Eventos</h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ background: 'linear-gradient(to right, #002060, #C19E4B)' }}></div>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            ¡No te pierdas nuestros eventos más importantes!
          </p>
        </div>
        
        {/* Cambié el grid por space-y-0 para que se vean uno debajo del otro */}
        <div className="space-y-0">
          {featuredEvents.map((event) => (
            <EventFeaturedCard
              key={event.id}
              event={event}
              formatDate={formatDate}
              GOLD={GOLD}
              GOLD_HOVER={GOLD_HOVER}
              onClick={() => navigate(`/eventos/${event.id}`)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;