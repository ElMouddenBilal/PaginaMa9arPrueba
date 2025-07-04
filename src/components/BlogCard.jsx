import React from "react";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";

const BlogCard = ({ post, formatDate, getCategoryColor, onClick }) => (
  <article
    className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
    onClick={onClick}
    style={{ cursor: "pointer" }}
  >
    <div className="relative">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-4 left-4">
        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getCategoryColor(post.category)}`}>
          {post.category}
        </span>
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center text-gray-500 text-sm">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{formatDate(post.date)}</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <BookOpen className="h-4 w-4 mr-1" />
          <span>{post.readTime}</span>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 line-clamp-2" style={{ color: '#002060' }}>{post.title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
      <div className="flex justify-start">
        <button
          className="flex items-center py-2 font-semibold transition-colors duration-300"
          style={{
            color: '#002060'
          }}
          onClick={e => {
            e.stopPropagation();
            onClick();
          }}
        >
          Leer artículo
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  </article>
);

export default BlogCard;