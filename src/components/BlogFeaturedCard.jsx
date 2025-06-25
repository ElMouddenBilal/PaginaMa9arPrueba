// BlogFeaturedCard.jsx
import React from "react";
import { Calendar, User, ArrowRight, BookOpen, Heart } from "lucide-react";

const BlogFeaturedCard = ({ post, formatDate, getCategoryColor, onClick }) => (
  <article className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
    <div className="grid lg:grid-cols-2 gap-0">
      {/* Image Section */}
      <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-6 left-6">
          <span className="inline-flex items-center px-4 py-2" style={{
            backgroundColor: '#C19E4B',
            color: 'white',
            borderRadius: '9999px',
            fontWeight: 600,
            boxShadow: '0 4px 14px 0 rgba(0,0,0,0.10)'
          }}>
            <Heart className="h-4 w-4 mr-2" />
            Artículo Destacado
          </span>
        </div>
      </div>
      {/* Content Section */}
      <div className="p-8 lg:p-12 flex flex-col justify-center">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getCategoryColor(post.category)}`}>
            {post.category}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <BookOpen className="h-4 w-4 mr-2" />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <User className="h-4 w-4 mr-2" />
            <span>{post.author}</span>
          </div>
        </div>
        <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight" style={{ color: '#002060' }}>
          {post.title}
        </h3>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          {post.excerpt}
        </p>
        <button
          className="inline-flex items-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg self-start"
          style={{
            backgroundColor: '#002060',
            color: 'white'
          }}
          onClick={onClick}
        >
          Leer artículo completo
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  </article>
);

export default BlogFeaturedCard;