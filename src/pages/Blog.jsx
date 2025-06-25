import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlogFeaturedCard from '../components/BlogFeaturedCard';
import BlogCard from '../components/BlogCard';
import NewsletterCard from '../components/NewsletterCard';
import { MessageCircle } from 'lucide-react';

const Blog = () => {
  const navigate = useNavigate();

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

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#002060' }}>
            Blog y Reflexiones
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-8"
            style={{
              background: 'linear-gradient(to right, #002060, #C19E4B)'
            }}
          ></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Artículos, reflexiones espirituales y noticias de nuestra comunidad
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post) => (
          <BlogFeaturedCard
            key={post.id}
            post={post}
            formatDate={formatDate}
            getCategoryColor={getCategoryColor}
            onClick={() => {
              console.log("Navegando a /blog/" + post.id); // <-- Añade este log para depurar
              navigate(`/blog/${post.id}`);
            }}
          />
        ))}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

        {/* Newsletter Subscription */}
        <NewsletterCard
          icon={<MessageCircle className="h-16 w-16 mx-auto" />}
          title="Mantente Conectado"
          description="Suscríbete a nuestro boletín y recibe los últimos artículos y noticias de la comunidad directamente en tu correo."
          gradient={true}
        />
      </div>
    </section>
  );
};

export default Blog;