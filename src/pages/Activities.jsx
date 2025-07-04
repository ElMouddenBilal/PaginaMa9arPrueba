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