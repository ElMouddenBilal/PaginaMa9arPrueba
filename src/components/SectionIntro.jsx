import React from "react";

const SectionIntro = ({
  title,
  paragraphs = [],
  images = [],
  className = "",
  titleSize = "text-4xl lg:text-5xl", // Permite personalizar el tamaño del título
  lineWidth = "w-20", // Permite personalizar el ancho de la línea
  badges = [] // Para las "islitas" de AboutPage
}) => (
  <section className={`w-full max-w-7xl mx-auto px-2 sm:px-4 mb-16 ${className}`}>
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-100 p-6 sm:p-8 lg:p-10 flex flex-col">
      <h1 className={`${titleSize} font-extrabold mb-4 text-[#002060]`}>
        {title}
      </h1>
      <div className={`${lineWidth} h-1 mb-6`} style={{ background: 'linear-gradient(to right, #002060, #C19E4B)' }}></div>
      
      {paragraphs.map((paragraph, i) => (
        <p key={i} className="text-lg text-neutral-700 mb-6 leading-relaxed text-left">
          {paragraph}
        </p>
      ))}
      
      {images.length > 0 && (
        <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full justify-center">
          {images.map((img, i) => (
            <div key={i} className="relative w-full sm:w-1/2 h-48 rounded-2xl overflow-hidden shadow-lg">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002060]/20 to-transparent"></div>
            </div>
          ))}
        </div>
      )}
      
      {badges.length > 0 && (
        <div className="flex flex-wrap gap-4 justify-start">
          {badges.map((badge, i) => (
            <div key={i} className={`flex items-center gap-2 px-4 py-2 rounded-full ${badge.bgColor}`}>
              {badge.icon}
              <span className={`font-medium ${badge.textColor}`}>{badge.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  </section>
);

export default SectionIntro;