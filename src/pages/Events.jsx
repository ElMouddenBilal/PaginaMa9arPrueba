import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import EventFeaturedCard from '../components/EventFeaturedCard';
import EventCard from '../components/EventCard';
import NewsletterCard from '../components/NewsletterCard';

const Events = () => {
  const navigate = useNavigate();
  
  const GOLD = '#C19E4B';
  const GOLD_HOVER = '#A0822A';
  const BLUE = '#002060';
  const BLUE_HOVER = '#001040';

  const upcomingEvents = [
    {
      id: 1,
      title: "Conferencia: Los Pilares del Islam",
      date: "2024-01-15",
      time: "19:00",
      location: "Salón Principal",
      description: "Una conferencia educativa sobre los cinco pilares fundamentales del Islam.",
      totalSpots: 90,
      category: "Educación",
      featured: true
    },
    {
      id: 2,
      title: "Clase de Árabe para Principiantes",
      date: "2024-01-19",
      time: "18:30",
      location: "Aula 2",
      description: "Curso introductorio al idioma árabe para nuevos estudiantes.",
      totalSpots: 25,
      category: "Educación",
      featured: false
    },
    {
      id: 3,
      title: "Reunión de Hermanas",
      date: "2024-01-22",
      time: "17:00",
      location: "Sala de Reuniones",
      description: "Encuentro mensual de las hermanas de la comunidad para compartir y conectar.",
      totalSpots: 40,
      category: "Comunidad",
      featured: false
    },
    {
      id: 4,
      title: "Actividades Juveniles",
      date: "2024-01-27",
      time: "16:00",
      location: "Patio Exterior",
      description: "Deportes y actividades de ocio para jóvenes de la comunidad.",
      totalSpots: 30,
      category: "Juventud",
      featured: false
    },
    {
      id: 5,
      title: "Cena Benéfica Anual",
      date: "2024-01-29",
      time: "20:00",
      location: "Salón de Eventos",
      description: "Cena especial para recaudar fondos para proyectos comunitarios.",
      totalSpots: 120,
      category: "Celebración",
      featured: true
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="events" className="py-24 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#002060' }}>
            Próximos Eventos
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-8"
            style={{
              background: 'linear-gradient(to right, #002060, #C19E4B)'
            }}
          ></div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Únete a nuestros próximos eventos y actividades comunitarias
          </p>
        </div>

        {/* Featured Events */}
        {upcomingEvents.filter(event => event.featured).map((event) => (
          <EventFeaturedCard
            key={event.id}
            event={event}
            formatDate={formatDate}
            GOLD={GOLD}
            GOLD_HOVER={GOLD_HOVER}
            onClick={() => navigate(`/eventos/${event.id}`)}
          />
        ))}

        {/* Events Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {upcomingEvents.filter(event => !event.featured).map((event) => (
            <EventCard
              key={event.id}
              event={event}
              formatDate={formatDate}
              BLUE={BLUE}
              BLUE_HOVER={BLUE_HOVER}
              onClick={() => navigate(`/eventos/${event.id}`)}
            />
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="text-center mt-20">
          <NewsletterCard
            icon={<Calendar className="h-12 w-12 md:h-16 md:w-16 mx-auto" style={{ color: '#002060' }} />}
            title="Mantente Actualizado"
            description="Suscríbete a nuestro boletín para recibir notificaciones sobre todos nuestros eventos y actividades."
            gradient={false}
            bgColor="#fff"
            textColor="#002060"
          />
        </div>
      </div>
    </section>
  );
};

export default Events;