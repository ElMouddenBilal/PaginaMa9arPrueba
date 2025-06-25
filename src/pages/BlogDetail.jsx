import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, User, Clock, ArrowLeft, Image as ImageIcon } from "lucide-react";

// Los posts del blog con contenido completo
const blogPosts = [
  {
    id: 1, // <-- AÑADIR ESTE CAMPO
    title: "La Importancia de la Oración en el Islam",
    excerpt: "Reflexión sobre el significado espiritual y los beneficios de las cinco oraciones diarias en la vida del musulmán.",
    author: "Imam Muhammad",
    date: "2024-01-10",
    category: "Espiritualidad",
    image: "https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "5 min",
    details: `
      <h2 class="text-2xl font-bold mt-8 mb-4 text-[#002060]">La conexión directa con Allah</h2>
      <p>La oración (Salah) es uno de los cinco pilares fundamentales del Islam y representa la conexión directa entre el creyente y Allah. Es mucho más que un simple ritual; es un momento de reflexión, purificación espiritual y renovación de la fe.</p>
      <ul class="list-disc pl-6 my-4">
        <li>Fajr: El despertar espiritual con gratitud</li>
        <li>Dhuhr: El centro y equilibrio del día</li>
        <li>Asr: La reflexión sobre el tiempo</li>
        <li>Maghrib: La contemplación al atardecer</li>
        <li>Isha: La preparación para el descanso en paz</li>
      </ul>
      <h3 class="text-xl font-semibold mt-8 mb-2 text-[#C19E4B]">Los Beneficios Espirituales</h3>
      <p>Cada una de las cinco oraciones diarias tiene un propósito específico en la vida del musulmán. La regularidad de las oraciones desarrolla disciplina, paciencia y constancia, enseñándonos a pausar nuestras actividades mundanas para recordar nuestro propósito superior.</p>
      <blockquote class="border-l-4 border-[#C19E4B] pl-4 italic my-4 text-neutral-700">"La oración es el pilar de la religión y la luz del corazón." — Hadith del Profeta Muhammad (PBUH)</blockquote>
      <h3 class="text-xl font-semibold mt-8 mb-2 text-[#C19E4B]">La Disciplina Espiritual</h3>
      <p>En un mundo lleno de distracciones, la oración nos ofrece momentos de silencio y contemplación que nutren nuestra alma y fortalecen nuestra relación con lo divino. Es una práctica que trasciende el tiempo y el espacio, conectándonos con millones de musulmanes alrededor del mundo.</p>
      <div class="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div class="rounded-xl overflow-hidden shadow">
          <img src="https://images.pexels.com/photos/159311/muslim-prayer-islam-worship-159311.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Oración en mezquita" class="w-full h-40 object-cover" />
        </div>
        <div class="rounded-xl overflow-hidden shadow">
          <img src="https://images.pexels.com/photos/3401406/pexels-photo-3401406.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Momento de reflexión" class="w-full h-40 object-cover" />
        </div>
        <div class="rounded-xl overflow-hidden shadow flex items-center justify-center bg-gray-100">
          <ImageIcon class="h-12 w-12 text-[#C19E4B]" />
        </div>
      </div>
      <h3 class="text-xl font-semibold mt-8 mb-2 text-[#C19E4B]">Reflexión Final</h3>
      <p>La oración no es solo un acto de adoración, sino una forma de vida que nos guía hacia la paz interior, la disciplina personal y la conexión constante con nuestro Creador. Es el refugio del alma en medio de las tormentas de la vida cotidiana.</p>
    `
  },
  {
    id: 2, // <-- AÑADIR ESTE CAMPO
    title: "Ramadán: Mes de Purificación",
    excerpt: "Preparándonos para el mes sagrado: consejos prácticos para aprovechar al máximo este tiempo de bendición.",
    author: "Ahmad Rahman",
    date: "2024-01-08",
    category: "Educación",
    image: "https://images.pexels.com/photos/6529613/pexels-photo-6529613.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "7 min",
    details: `
      <h2 class="text-2xl font-bold mt-8 mb-4 text-[#002060]">El mes más sagrado del año</h2>
      <p>El mes de Ramadán es una época sagrada de reflexión, ayuno y renovación espiritual. Es un tiempo para purificar el alma, desarrollar la empatía hacia los menos afortunados y fortalecer los lazos comunitarios.</p>
      <h3 class="text-xl font-semibold mt-8 mb-2 text-[#C19E4B]">Preparación Espiritual</h3>
      <p>La preparación para Ramadán comienza semanas antes. Es importante preparar tanto el cuerpo como el espíritu para este período de ayuno y reflexión.</p>
      <ul class="list-disc pl-6 my-4">
        <li>Ajustar gradualmente los horarios de comida</li>
        <li>Aumentar las prácticas espirituales diarias</li>
        <li>Planificar actos de caridad y servicio</li>
        <li>Preparar el corazón para la reflexión profunda</li>
      </ul>
      <blockquote class="border-l-4 border-[#C19E4B] pl-4 italic my-4 text-neutral-700">"Ramadán es el mes en que fue revelado el Corán como guía para la humanidad." — Corán 2:185</blockquote>
      <h3 class="text-xl font-semibold mt-8 mb-2 text-[#C19E4B]">Los Beneficios del Ayuno</h3>
      <p>El ayuno durante Ramadán no es solo abstenerse de comida y bebida, sino también purificar los pensamientos, las palabras y las acciones. Es una oportunidad para desarrollar autocontrol, paciencia y compasión.</p>
      <p>Durante este mes, la comunidad se une en oración, reflexión y actos de caridad, creando un ambiente de solidaridad y crecimiento espiritual compartido.</p>
    `
  },
  {
    id: 3, // <-- AÑADIR ESTE CAMPO
    title: "Construyendo Puentes: Islam y Sociedad",
    excerpt: "Cómo los musulmanes pueden contribuir positivamente a la construcción de una sociedad más justa y compasiva.",
    author: "Fatima Khalil",
    date: "2024-01-05",
    category: "Sociedad",
    image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "6 min",
    details: `
      <h2 class="text-2xl font-bold mt-8 mb-4 text-[#002060]">El Islam como fuerza de bien social</h2>
      <p>En un mundo cada vez más interconectado, los musulmanes tienen la oportunidad y la responsabilidad de contribuir positivamente a la construcción de sociedades más justas, compasivas y equitativas.</p>
      <h3 class="text-xl font-semibold mt-8 mb-2 text-[#C19E4B]">Principios Fundamentales</h3>
      <p>Los principios islámicos de justicia, compasión y servicio a la humanidad nos guían en nuestro compromiso con el bienestar social.</p>
      <ul class="list-disc pl-6 my-4">
        <li>La caridad (Zakat) como pilar social</li>
        <li>La justicia social como mandato divino</li>
        <li>El cuidado de los más vulnerables</li>
        <li>La responsabilidad comunitaria</li>
      </ul>
      <blockquote class="border-l-4 border-[#C19E4B] pl-4 italic my-4 text-neutral-700">"Quien no se preocupa por los asuntos de los musulmanes, no es uno de nosotros." — Hadith del Profeta Muhammad (PBUH)</blockquote>
      <h3 class="text-xl font-semibold mt-8 mb-2 text-[#C19E4B]">Diálogo y Entendimiento</h3>
      <p>El diálogo respetuoso con personas de diferentes tradiciones religiosas y culturales es fundamental para construir puentes de entendimiento. El Islam nos enseña a respetar la diversidad y buscar puntos comunes.</p>
      <p>A través del ejemplo personal, el servicio comunitario y la participación cívica, podemos demostrar los valores positivos del Islam y contribuir al bien común de toda la sociedad.</p>
    `
  },
  {
    id: 4, // <-- AÑADIR ESTE CAMPO
    title: "Los Jóvenes y la Fe",
    excerpt: "Desafíos y oportunidades para mantener una identidad islámica sólida en el mundo moderno.",
    author: "Ahmad Rahman",
    date: "2024-01-03",
    category: "Juventud",
    image: "https://images.pexels.com/photos/8815020/pexels-photo-8815020.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "8 min",
    details: `
      <h2 class="text-2xl font-bold mt-8 mb-4 text-[#002060]">Navegando entre tradición y modernidad</h2>
      <p>Los jóvenes musulmanes de hoy enfrentan desafíos únicos al navegar entre mantener su identidad islámica y participar plenamente en la sociedad moderna. Esta tensión puede ser una fuente de crecimiento y fortaleza.</p>
      <h3 class="text-xl font-semibold mt-8 mb-2 text-[#C19E4B]">Desafíos Contemporáneos</h3>
      <p>Las presiones sociales, las expectativas culturales y la búsqueda de identidad pueden crear conflictos internos. Es importante reconocer estos desafíos y abordarlos con comprensión y apoyo comunitario.</p>
      <ul class="list-disc pl-6 my-4">
        <li>Presión social y expectativas culturales</li>
        <li>Búsqueda de identidad en un mundo globalizado</li>
        <li>Equilibrio entre tradición e innovación</li>
        <li>Desarrollo de una fe personal auténtica</li>
      </ul>
      <blockquote class="border-l-4 border-[#C19E4B] pl-4 italic my-4 text-neutral-700">"La juventud es un tiempo de exploración y descubrimiento espiritual."</blockquote>
      <h3 class="text-xl font-semibold mt-8 mb-2 text-[#C19E4B]">Oportunidades de Crecimiento</h3>
      <p>La juventud es un tiempo de exploración y descubrimiento. Los jóvenes musulmanes pueden usar este período para profundizar su comprensión del Islam, desarrollar su carácter y encontrar formas creativas de expresar su fe.</p>
      <p>El apoyo de la familia, la comunidad y los mentores espirituales es crucial para ayudar a los jóvenes a desarrollar una identidad islámica sólida y confiada que les permita contribuir positivamente a la sociedad.</p>
    `
  }
];

const categoryIcons = {
  "Espiritualidad": "🕌",
  "Educación": "📚",
  "Sociedad": "🤝",
  "Juventud": "👥"
};

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === parseInt(id, 10)); // <-- CAMBIO AQUÍ

  // Scroll arriba al montar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Artículo no encontrado</h2>
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
            src={post.image}
            alt={post.title}
            className="w-full h-[32rem] object-cover object-center"
            style={{ borderTopLeftRadius: '1.5rem', borderTopRightRadius: '1.5rem' }}
          />
          {/* Icono flotante */}
          <div className="absolute -bottom-8 left-20 bg-white shadow-lg rounded-full p-4 border-4 border-[#f8fafc] flex items-center justify-center">
            <span className="text-3xl">{categoryIcons[post.category] || "📝"}</span>
          </div>
        </div>

        {/* Contenido */}
        <div className="pt-20 pb-16 px-8 sm:px-16 md:px-32 flex flex-col items-start text-left">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-2" style={{ background: 'linear-gradient(90deg, #002060 60%, #C19E4B 100%)', color: 'white' }}>
            {post.category}
          </span>
          <h1 className="text-5xl font-extrabold mb-2 text-[#002060]">{post.title}</h1>
          <h2 className="text-2xl text-neutral-600 mb-6">{post.excerpt}</h2>
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="flex items-center gap-2 text-[#002060] bg-[#f3f4f6] px-4 py-2 rounded-full text-base font-medium shadow">
              <User className="h-5 w-5" /> {post.author}
            </span>
            <span className="flex items-center gap-2 text-[#002060] bg-[#f3f4f6] px-4 py-2 rounded-full text-base font-medium shadow">
              <Calendar className="h-5 w-5" /> {post.date}
            </span>
            <span className="flex items-center gap-2 text-[#002060] bg-[#f3f4f6] px-4 py-2 rounded-full text-base font-medium shadow">
              <Clock className="h-5 w-5" /> {post.readTime}
            </span>
          </div>
          <div
            className="prose max-w-none text-neutral-800 text-lg leading-relaxed w-full"
            dangerouslySetInnerHTML={{ __html: post.details }}
          />
        </div>
      </article>
    </section>
  );
};

export default BlogDetail;