import { ArrowRight, Calendar, Users, Heart } from "lucide-react";

export default function Home() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-500"
    >

      {/* Elementos decorativos flotantes */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 right-16 w-16 h-16 border border-white/20 rounded-full opacity-20"></div>
      <div className="absolute top-1/3 right-10 w-12 h-12 rounded-full opacity-40" style={{ borderColor: '#C19E4B', borderWidth: '1px', borderStyle: 'solid' }}></div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20 md:pt-0">
        {/* Título en árabe */}
        <div className="mb-6 md:mb-8">
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-light mb-4 md:mb-6 tracking-wide"
            style={{ fontFamily: 'Amiri, serif' }}
          >
            بسم الله
          </h1>
          <div
            className="w-32 h-px mx-auto"
            style={{
              background: 'linear-gradient(to right, transparent, #C19E4B, transparent)'
            }}
          ></div>
        </div>

        {/* Título principal */}
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight">
          Casa de les Ciències
          <span className="block mt-2" style={{ color: '#C19E4B' }}>i el Coneixement</span>
        </h2>

        {/* Subtítulo */}
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 md:mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
          Un espacio de encuentro, aprendizaje y crecimiento espiritual para toda la comunidad musulmana
        </p>

        {/* Estadísticas */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 lg:gap-12 mb-12 md:mb-16">
          <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3">
            <Users className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: '#C19E4B' }} />
            <span className="text-lg sm:text-xl font-semibold">500+ Miembros</span>
          </div>
          <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3">
            <Heart className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: '#C19E4B' }} />
            <span className="text-lg sm:text-xl font-semibold">Una Familia</span>
          </div>
          <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3">
            <Calendar className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: '#C19E4B' }} />
            <span className="text-lg sm:text-xl font-semibold">15 Años</span>
          </div>
        </div>

        {/* Botones de llamada a la acción */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <a
            href="#about"
            className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-strong overflow-hidden"
            style={{ backgroundColor: '#C19E4B', color: 'white' }} // Texto blanco
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#a6853f';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#C19E4B';
            }}
            >
            <span className="relative z-10 flex items-center justify-center">
                Conoce Más
                <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            </a>
          <a 
            href="#events"
            className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-semibold text-lg rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 overflow-hidden"
            style={{ borderColor: 'white' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = '#002060';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'white';
            }}
          >
            <span className="relative z-10 text-center">Próximos Eventos</span>
          </a>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}