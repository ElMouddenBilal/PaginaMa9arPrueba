import React from 'react';
import BlogFeaturedCard from '../components/BlogFeaturedCard';
import BlogCard from '../components/BlogCard';
import NewsletterCard from '../components/NewsletterCard';
import SectionIntro from '../components/SectionIntro';
import { useNavigate } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

// Array completo de blogPosts
const blogPosts = [
  {
    id: 1,
    title: "La Importancia de la Oración en el Islam",
    excerpt: "Reflexión sobre el significado espiritual y los beneficios de las cinco oraciones diarias en la vida del musulmán.",
    author: "Imam Muhammad",
    date: "2024-01-10",
    category: "Espiritualidad",
    image: "https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "5 min",
    featured: true
  },
  {
    id: 2,
    title: "Ramadán: Mes de Purificación",
    excerpt: "Preparándonos para el mes sagrado: consejos prácticos para aprovechar al máximo este tiempo de bendición.",
    author: "Ahmad Rahman",
    date: "2024-01-08",
    category: "Educación",
    image: "https://images.pexels.com/photos/6529613/pexels-photo-6529613.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "7 min",
    featured: false
  },
  {
    id: 3,
    title: "Construyendo Puentes: Islam y Sociedad",
    excerpt: "Cómo los musulmanes pueden contribuir positivamente a la construcción de una sociedad más justa y compasiva.",
    author: "Fatima Khalil",
    date: "2024-01-05",
    category: "Sociedad",
    image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "6 min",
    featured: false
  },
  {
    id: 4,
    title: "Los Jóvenes y la Fe",
    excerpt: "Desafíos y oportunidades para mantener una identidad islámica sólida en el mundo moderno.",
    author: "Ahmad Rahman",
    date: "2024-01-03",
    category: "Juventud",
    image: "https://images.pexels.com/photos/8815020/pexels-photo-8815020.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "8 min",
    featured: false
  }
];

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const getCategoryColor = (category) => {
  const colors = {
    'Espiritualidad': 'bg-purple-100 text-purple-800',
    'Educación': 'bg-blue-100 text-blue-800',
    'Sociedad': 'bg-green-100 text-green-800',
    'Juventud': 'bg-yellow-100 text-yellow-800'
  };
  return colors[category] || 'bg-gray-100 text-gray-800';
};

const BlogPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-[#e8eaf6] pt-32 pb-16">
      {/* Explicación y fotos */}
      <SectionIntro
        title="Blog y Reflexiones"
        paragraphs={[
          "Bienvenido a nuestro espacio de reflexión y conocimiento. Aquí encontrarás artículos inspiradores, reflexiones espirituales y noticias de nuestra comunidad. Nuestro objetivo es compartir sabiduría, fortalecer la fe y crear puentes de entendimiento.",
          "Cada artículo está escrito con amor y dedicación por miembros de nuestra comunidad, imanes y colaboradores que desean compartir sus conocimientos y experiencias contigo. ¡Explora, aprende y comparte!"
        ]}
        images={[
          {
            src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            alt: "Lectura y reflexión"
          },
          {
            src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            alt: "Comunidad y conocimiento"
          }
        ]}
      />

      {/* Contenido del blog */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Artículo destacado */}
        <section className="mb-12">
          {blogPosts.filter(post => post.featured).map((post) => (
            <BlogFeaturedCard
              key={post.id}
              post={post}
              formatDate={formatDate}
              getCategoryColor={getCategoryColor}
              onClick={() => navigate(`/blog/${post.id}`)}
            />
          ))}
        </section>

        {/* Grid de artículos */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#002060] mb-4">Más artículos</h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ background: 'linear-gradient(to right, #002060, #C19E4B)' }}></div>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Descubre más reflexiones y conocimientos de nuestra comunidad
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                formatDate={formatDate}
                getCategoryColor={getCategoryColor}
                onClick={() => navigate(`/blog/${post.id}`)}
              />
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <NewsletterCard
          icon={<MessageCircle className="h-16 w-16 mx-auto" />}
          title="Mantente Conectado"
          description="Suscríbete a nuestro boletín y recibe los últimos artículos y noticias de la comunidad directamente en tu correo."
          gradient={true}
        />
      </div>
    </div>
  );
};

export default BlogPage;