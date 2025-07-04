import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, Users, BookOpen, Heart, MessageSquare, PartyPopper, ArrowLeft } from "lucide-react";

// Ejemplo de actividades pasadas
const activities = [
  {
    title: "Clases de Corán",
    description: "Sesiones semanales de recitación y memorización del Sagrado Corán para todas las edades.",
    image: "https://images.pexels.com/photos/8923862/pexels-photo-8923862.jpeg?auto=compress&cs=tinysrgb&w=600",
    gallery: [
      "https://images.pexels.com/photos/8923862/pexels-photo-8923862.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/159311/book-open-pages-literature-159311.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/256369/pexels-photo-256369.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: "Educación",
    icon: <BookOpen className="h-6 w-6" />,
    date: "2024-05-10",
    place: "Sala principal",
    details: `
      <h2 class="text-2xl font-bold mt-8 mb-4 text-[#002060]">Un trimestre de aprendizaje y hermandad</h2>
      <p>Durante el último trimestre, nuestras <strong>clases de Corán</strong> han reunido a niños, jóvenes y adultos en un ambiente de respeto y dedicación. Cada semana, los participantes han trabajado en la recitación, memorización y comprensión de las suras, guiados por profesores experimentados.</p>
      <ul class="list-disc pl-6 my-4">
        <li>Grupos por niveles y edades</li>
        <li>Material didáctico adaptado</li>
        <li>Sesiones de repaso y concursos de memorización</li>
        <li>Charlas sobre la importancia del Corán en la vida diaria</li>
      </ul>
      <blockquote class="border-l-4 border-[#C19E4B] pl-4 italic my-4 text-neutral-700">"El mejor de vosotros es quien aprende el Corán y lo enseña." (Profeta Muhammad ﷺ)</blockquote>
      <h3 class="text-xl font-semibold mt-8 mb-2 text-[#C19E4B]">Testimonios</h3>
      <p>“Gracias a estas clases, mi hijo ha mejorado mucho su pronunciación y ha hecho nuevos amigos.” – <em>Fatima, madre de alumno</em></p>
    `
  },
  {
    title: "Iftar Comunitario",
    description: "Reuniones especiales durante Ramadán para compartir la ruptura del ayuno en comunidad.",
    image: "https://images.pexels.com/photos/6529613/pexels-photo-6529613.jpeg?auto=compress&cs=tinysrgb&w=600",
    gallery: [
      "https://images.pexels.com/photos/6529613/pexels-photo-6529613.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: "Celebraciones",
    icon: <PartyPopper className="h-6 w-6" />,
    date: "2024-04-15",
    place: "Comedor principal",
    details: `
      <h2 class="text-2xl font-bold mt-8 mb-4 text-[#002060]">Compartiendo la bendición del iftar</h2>
      <p>Durante el mes sagrado de Ramadán, el centro se llena de vida cada tarde. Decenas de familias y jóvenes se reúnen para romper el ayuno juntos, compartiendo platos tradicionales y momentos de reflexión espiritual.</p>
      <ul class="list-disc pl-6 my-4">
        <li>Menú variado y saludable cada día</li>
        <li>Charlas breves antes del iftar</li>
        <li>Espacio para niños y actividades familiares</li>
        <li>Colaboración de voluntarios en la organización</li>
      </ul>
      <blockquote class="border-l-4 border-[#C19E4B] pl-4 italic my-4 text-neutral-700">"El iftar comunitario es una oportunidad para fortalecer la hermandad y la solidaridad."</blockquote>
      <h3 class="text-xl font-semibold mt-8 mb-2 text-[#C19E4B]">¿Quién puede participar?</h3>
      <p>Todos los miembros de la comunidad y sus amigos son bienvenidos, independientemente de su edad o procedencia.</p>
    `
  },
  {
    title: "Programa de Ayuda Social",
    description: "Distribución de alimentos y apoyo a familias necesitadas de la comunidad local.",
    image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600",
    gallery: [
      "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: "Servicio Social",
    icon: <Heart className="h-6 w-6" />,
    date: "2024-03-20",
    place: "Centro comunitario",
    details: `
      <h2 class="text-2xl font-bold mt-8 mb-4 text-[#002060]">Extendiendo una mano solidaria</h2>
      <p>El <strong>programa de ayuda social</strong> es uno de los pilares de nuestro centro. Gracias a la generosidad de los donantes y el trabajo de los voluntarios, cada mes se distribuyen alimentos y productos básicos a decenas de familias.</p>
      <ul class="list-disc pl-6 my-4">
        <li>Entrega de lotes alimentarios y productos de higiene</li>
        <li>Asesoramiento y acompañamiento social</li>
        <li>Campañas especiales en Ramadán y Eid</li>
        <li>Colaboración con otras entidades solidarias</li>
      </ul>
      <blockquote class="border-l-4 border-[#C19E4B] pl-4 italic my-4 text-neutral-700">"Ninguno de vosotros cree hasta que desea para su hermano lo que desea para sí mismo."</blockquote>
      <h3 class="text-xl font-semibold mt-8 mb-2 text-[#C19E4B]">¿Cómo colaborar?</h3>
      <p>Puedes aportar alimentos, tiempo como voluntario o donaciones económicas. ¡Toda ayuda suma!</p>
    `
  },
  {
    title: "Conferencias Islámicas",
    description: "Charlas educativas sobre diversos temas islámicos con expertos invitados.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
    gallery: [
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: "Educación",
    icon: <MessageSquare className="h-6 w-6" />,
    date: "2024-02-28",
    place: "Auditorio principal",
    details: `
      <h2 class="text-2xl font-bold mt-8 mb-4 text-[#002060]">Enriqueciendo el conocimiento islámico</h2>
      <p>Cada mes organizamos <strong>conferencias y charlas</strong> sobre temas de actualidad, historia, espiritualidad y convivencia. Contamos con la participación de imames, profesores y expertos reconocidos.</p>
      <ul class="list-disc pl-6 my-4">
        <li>Temas variados y adaptados a todas las edades</li>
        <li>Espacio para preguntas y debate</li>
        <li>Material complementario y recursos digitales</li>
        <li>Traducción simultánea cuando es necesario</li>
      </ul>
      <blockquote class="border-l-4 border-[#C19E4B] pl-4 italic my-4 text-neutral-700">"La búsqueda del conocimiento es una obligación para todo musulmán."</blockquote>
      <h3 class="text-xl font-semibold mt-8 mb-2 text-[#C19E4B]">¿Te gustaría proponer un tema?</h3>
      <p>¡Envíanos tus sugerencias y participa activamente en la vida intelectual del centro!</p>
    `
  },
  {
    title: "Actividades Juveniles",
    description: "Programas especiales para jóvenes musulmanes con deportes y actividades recreativas.",
    image: "https://images.pexels.com/photos/8815020/pexels-photo-8815020.jpeg?auto=compress&cs=tinysrgb&w=600",
    gallery: [
      "https://images.pexels.com/photos/8815020/pexels-photo-8815020.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/8815020/pexels-photo-8815020.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/8815020/pexels-photo-8815020.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/8815020/pexels-photo-8815020.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/8815020/pexels-photo-8815020.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/8815020/pexels-photo-8815020.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: "Juventud",
    icon: <Users className="h-6 w-6" />,
    date: "2024-01-25",
    place: "Instalaciones deportivas",
    details: `
      <h2 class="text-2xl font-bold mt-8 mb-4 text-[#002060]">Fortaleciendo la identidad juvenil</h2>
      <p>El grupo de jóvenes organiza <strong>torneos deportivos, excursiones, talleres creativos y debates</strong> sobre temas de interés. Es un espacio seguro para crecer, divertirse y hacer amistades duraderas.</p>
      <ul class="list-disc pl-6 my-4">
        <li>Fútbol, baloncesto y deportes de equipo</li>
        <li>Talleres de liderazgo y habilidades sociales</li>
        <li>Salidas culturales y de ocio</li>
        <li>Mentoría y acompañamiento</li>
      </ul>
      <blockquote class="border-l-4 border-[#C19E4B] pl-4 italic my-4 text-neutral-700">"La juventud es la fuerza de la comunidad."</blockquote>
      <h3 class="text-xl font-semibold mt-8 mb-2 text-[#C19E4B]">¿Quieres unirte?</h3>
      <p>¡Contacta con nuestro coordinador juvenil y participa en la próxima actividad!</p>
    `
  },
  {
    title: "Celebración de Eid",
    description: "Festividades anuales de Eid al-Fitr y Eid al-Adha con toda la comunidad.",
    image: "https://images.pexels.com/photos/8828596/pexels-photo-8828596.jpeg?auto=compress&cs=tinysrgb&w=600",
    gallery: [
      "https://images.pexels.com/photos/8828596/pexels-photo-8828596.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/8828596/pexels-photo-8828596.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/8828596/pexels-photo-8828596.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/8828596/pexels-photo-8828596.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/8828596/pexels-photo-8828596.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/8828596/pexels-photo-8828596.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    category: "Celebraciones",
    icon: <PartyPopper className="h-6 w-6" />,
    date: "2024-06-15",
    place: "Patio principal y salones",
    details: `
      <h2 class="text-2xl font-bold mt-8 mb-4 text-[#002060]">Celebrando las festividades más importantes</h2>
      <p>Las <strong>celebraciones de Eid</strong> son el momento más esperado del año. Organizamos oraciones multitudinarias, comidas festivas, juegos para niños y actividades culturales para toda la familia.</p>
      <ul class="list-disc pl-6 my-4">
        <li>Oración de Eid al aire libre</li>
        <li>Buffet especial y dulces tradicionales</li>
        <li>Espectáculos y concursos para niños</li>
        <li>Entrega de regalos y sorteos</li>
      </ul>
      <blockquote class="border-l-4 border-[#C19E4B] pl-4 italic my-4 text-neutral-700">"Eid es un día de alegría, gratitud y unión."</blockquote>
      <h3 class="text-xl font-semibold mt-8 mb-2 text-[#C19E4B]">¡Ven con tu familia!</h3>
      <p>La entrada es libre y abierta a toda la comunidad. ¡No te lo pierdas!</p>
    `
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

          {/* Galería de imágenes */}
          {activity.gallery && activity.gallery.length > 0 && (
            <div className="w-full mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {activity.gallery.slice(0, 6).map((img, idx) => (
                  <div key={idx} className="overflow-hidden rounded-xl shadow-md">
                    <img
                      src={img}
                      alt={`Galería ${activity.title} ${idx + 1}`}
                      className="w-full h-48 object-cover object-center transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

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