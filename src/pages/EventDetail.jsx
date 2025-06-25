import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, Clock, MapPin, Users, ArrowLeft } from "lucide-react";

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
    featured: true,
    details: `
      <h2 class="text-2xl font-bold mt-8 mb-4 text-[#002060]">Sobre esta conferencia</h2>
      <p>Esta conferencia educativa está diseñada para profundizar en el conocimiento de los cinco pilares fundamentales del Islam: Shahada (testimonio de fe), Salah (oración), Zakat (caridad obligatoria), Sawm (ayuno) y Hajj (peregrinación).</p>
      <h3 class="text-xl font-semibold mt-8 mb-2 text-[#C19E4B]">¿Qué aprenderás?</h3>
      <ul class="list-disc pl-6 my-4">
        <li>El significado profundo de cada pilar del Islam</li>
        <li>Cómo implementar estos principios en la vida diaria</li>
        <li>La importancia espiritual y comunitaria de cada práctica</li>
        <li>Respuestas a preguntas frecuentes sobre la práctica islámica</li>
      </ul>
      <blockquote class="border-l-4 border-[#C19E4B] pl-4 italic my-4 text-neutral-700">"Los cinco pilares del Islam son los fundamentos sobre los cuales se construye la vida del musulmán."</blockquote>
      <h3 class="text-xl font-semibold mt-8 mb-2 text-[#C19E4B]">¿Para quién es esta conferencia?</h3>
      <p>Esta conferencia está abierta a toda la comunidad, tanto para musulmanes que deseen profundizar en su conocimiento como para personas interesadas en aprender sobre el Islam.</p>
    `
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
    featured: false,
    details: `
      <h2 class="text-2xl font-bold mt-8 mb-4 text-[#002060]">Aprende árabe desde cero</h2>
      <p>Este curso está diseñado para personas que nunca han estudiado árabe y desean comenzar su aprendizaje de manera estructurada y progresiva.</p>
      <ul class="list-disc pl-6 my-4">
        <li>Alfabeto árabe y pronunciación básica</li>
        <li>Vocabulario esencial para la vida diaria</li>
        <li>Frases básicas de cortesía y presentación</li>
        <li>Introducción a la gramática árabe</li>
      </ul>
      <p>Las clases se imparten en un ambiente relajado y participativo, con materiales didácticos incluidos.</p>
    `
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
    featured: false,
    details: `
      <h2 class="text-2xl font-bold mt-8 mb-4 text-[#002060]">Fortaleciendo lazos entre hermanas</h2>
      <p>Nuestro encuentro mensual es un espacio seguro y acogedor donde las hermanas de la comunidad pueden compartir experiencias, apoyarse mutuamente y fortalecer los lazos de hermandad.</p>
      <ul class="list-disc pl-6 my-4">
        <li>Círculo de conversación y reflexión</li>
        <li>Actividades de desarrollo personal</li>
        <li>Intercambio de experiencias y consejos</li>
        <li>Planificación de actividades comunitarias</li>
      </ul>
      <p>Todas las hermanas son bienvenidas, independientemente de su edad o tiempo en la comunidad.</p>
    `
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
    featured: false,
    details: `
      <h2 class="text-2xl font-bold mt-8 mb-4 text-[#002060]">Diversión y compañerismo juvenil</h2>
      <p>Una tarde llena de actividades deportivas y recreativas diseñadas especialmente para los jóvenes de nuestra comunidad, fomentando el compañerismo y la vida saludable.</p>
      <ul class="list-disc pl-6 my-4">
        <li>Fútbol y baloncesto</li>
        <li>Juegos de mesa y actividades grupales</li>
        <li>Competencias amistosas</li>
        <li>Merienda comunitaria</li>
      </ul>
      <p>Actividad dirigida a jóvenes entre 12 y 25 años. Se recomienda traer ropa deportiva y una botella de agua.</p>
    `
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
    featured: true,
    details: `
      <h2 class="text-2xl font-bold mt-8 mb-4 text-[#002060]">Una noche de solidaridad y comunidad</h2>
      <p>Nuestra cena benéfica anual es el evento más importante del año, donde toda la comunidad se reúne para disfrutar de una velada especial mientras contribuimos a proyectos que benefician a nuestra comunidad y a quienes más lo necesitan.</p>
      <ul class="list-disc pl-6 my-4">
        <li>Cena tradicional con platos de diferentes culturas</li>
        <li>Presentaciones culturales y artísticas</li>
        <li>Subasta benéfica de artículos donados</li>
        <li>Reconocimiento a voluntarios destacados</li>
        <li>Presentación de proyectos comunitarios</li>
      </ul>
      <blockquote class="border-l-4 border-[#C19E4B] pl-4 italic my-4 text-neutral-700">"La caridad no disminuye la riqueza, sino que la multiplica en bendiciones."</blockquote>
      <h3 class="text-xl font-semibold mt-8 mb-2 text-[#C19E4B]">Proyectos beneficiados</h3>
      <p>Los fondos recaudados se destinarán a:</p>
      <ul class="list-disc pl-6 my-4">
        <li>Programa de ayuda alimentaria para familias necesitadas</li>
        <li>Becas educativas para estudiantes</li>
        <li>Mejoras en las instalaciones del centro</li>
        <li>Proyectos de ayuda humanitaria internacional</li>
      </ul>
      <p>El precio de la entrada incluye la cena completa y contribuye directamente a estos proyectos solidarios.</p>
    `
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

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = upcomingEvents.find(e => e.id === parseInt(id, 10));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Evento no encontrado</h2>
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
      <article className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden relative animate-fade-in border border-neutral-100">
        {/* Botón volver */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 flex items-center gap-2 text-[#002060] hover:text-[#C19E4B] font-semibold transition-colors z-10 bg-white/80 px-3 py-1 rounded-full shadow"
        >
          <ArrowLeft className="h-5 w-5" />
          Volver
        </button>

        {/* Cabecera */}
        <div className="relative">
          <div 
            className="h-64 flex items-center justify-center"
            style={{
              background: 'linear-gradient(to bottom right, #b3d9ff, #e6f3ff)'
            }}
          >
            <Calendar className="h-24 w-24" style={{ color: '#002060' }} />
          </div>
          <div className="absolute top-4 left-4">
            <span 
              className="px-3 py-1 text-sm font-semibold rounded-full"
              style={{ backgroundColor: '#002060', color: 'white' }}
            >
              {event.category}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <div className="flex items-center text-white text-sm bg-black/50 px-3 py-2 rounded-full">
              <Users className="h-4 w-4 mr-2" />
              <span>{event.totalSpots} plazas</span>
            </div>
          </div>
          {event.featured && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <span 
                className="px-4 py-2 text-white text-sm font-semibold rounded-full"
                style={{ backgroundColor: '#C19E4B' }}
              >
                Evento Destacado
              </span>
            </div>
          )}
        </div>

        {/* Contenido */}
        <div className="pt-12 pb-16 px-8 sm:px-12 md:px-16 flex flex-col items-start text-left">
          <h1 className="text-4xl font-extrabold mb-4 text-[#002060]">{event.title}</h1>
          <p className="text-xl text-neutral-600 mb-8">{event.description}</p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="flex items-center gap-2 text-[#002060] bg-[#f3f4f6] px-4 py-2 rounded-full text-base font-medium shadow">
              <Calendar className="h-5 w-5" /> {formatDate(event.date)}
            </span>
            <span className="flex items-center gap-2 text-[#002060] bg-[#f3f4f6] px-4 py-2 rounded-full text-base font-medium shadow">
              <Clock className="h-5 w-5" /> {event.time}
            </span>
            <span className="flex items-center gap-2 text-[#002060] bg-[#f3f4f6] px-4 py-2 rounded-full text-base font-medium shadow">
              <MapPin className="h-5 w-5" /> {event.location}
            </span>
            <span className="flex items-center gap-2 text-[#002060] bg-[#f3f4f6] px-4 py-2 rounded-full text-base font-medium shadow">
              <Users className="h-5 w-5" /> {event.totalSpots} plazas disponibles
            </span>
          </div>

          {/* Contenido detallado */}
          <div
            className="prose max-w-none text-neutral-800 text-lg leading-relaxed w-full mb-8"
            dangerouslySetInnerHTML={{ __html: event.details }}
          />

          {/* Botón de inscripción */}
          <div className="w-full text-center">
            <button 
              className="px-8 py-4 text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg rounded-lg text-lg"
              style={{ backgroundColor: '#002060' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#001040'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#002060'}
            >
              ¡Inscríbete ahora!
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default EventDetail;