import React from "react";
import { Users, Heart, BookOpen, Globe, Award, Handshake, MessageCircle } from "lucide-react";
import SectionIntro from "../components/SectionIntro";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-[#e8eaf6] pt-32 pb-16">
      {/* Quiénes Somos */}
      <SectionIntro
        title="Quiénes Somos"
        lineWidth="w-40"
        paragraphs={[
          "El Centro Cultural y Comunitario de Barcelona (CCCBcn) es mucho más que un espacio físico: es un punto de encuentro, diálogo y crecimiento para todas las personas interesadas en la tradición islámica y su relación con el mundo contemporáneo.",
          "Nuestra comunidad está formada por personas de diferentes orígenes, edades y trayectorias, unidas por el deseo de aprender, compartir y construir juntos un futuro basado en el respeto, la convivencia y el conocimiento.",
          "En el CCCBcn creemos que la fe, la ciencia y la cultura no solo pueden convivir, sino que se enriquecen mutuamente. Por eso, promovemos actividades educativas, culturales y sociales que fomentan el pensamiento crítico, el diálogo interreligioso y la participación activa en la sociedad.",
          "Nuestro centro está abierto a todos: musulmanes y no musulmanes, familias, jóvenes, mayores, personas que buscan respuestas o simplemente un espacio donde sentirse acogidos. Aquí, cada persona es valorada y escuchada, y cada iniciativa que contribuya al bien común es bienvenida.",
          "Trabajamos para que el CCCBcn sea un referente de excelencia, inclusión y servicio, donde la tradición islámica se vive con autenticidad y se proyecta hacia el futuro con esperanza y compromiso social."
        ]}
        images={[
          {
            src: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            alt: "Centro Islámico 1"
          },
          {
            src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            alt: "Centro Islámico 2"
          }
        ]}
        badges={[
          {
            icon: <Users className="h-5 w-5 text-[#002060]" />,
            text: "Comunidad",
            bgColor: "bg-[#002060]/10",
            textColor: "text-[#002060]"
          },
          {
            icon: <Heart className="h-5 w-5 text-[#C19E4B]" />,
            text: "Solidaridad",
            bgColor: "bg-[#C19E4B]/10",
            textColor: "text-[#C19E4B]"
          },
          {
            icon: <BookOpen className="h-5 w-5 text-[#002060]" />,
            text: "Educación",
            bgColor: "bg-[#002060]/10",
            textColor: "text-[#002060]"
          },
          {
            icon: <MessageCircle className="h-5 w-5 text-[#C19E4B]" />,
            text: "Diálogo",
            bgColor: "bg-[#C19E4B]/10",
            textColor: "text-[#C19E4B]"
          }
        ]}
      />

      {/* Misión y Visión */}
      <section className="w-full max-w-7xl mx-auto px-2 sm:px-4 mb-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Misión */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-neutral-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-[#002060] rounded-2xl flex items-center justify-center mr-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#002060]">Nuestra Misión</h2>
            </div>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Fomentar el conocimiento, la práctica y la difusión de los principios islámicos, así como fortalecer los lazos de hermandad y apoyo mutuo entre los miembros de la comunidad.
            </p>
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Comunidad orando"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Visión */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-neutral-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-[#C19E4B] rounded-2xl flex items-center justify-center mr-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#002060]">Nuestra Visión</h2>
            </div>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Ser un referente de convivencia, educación y servicio comunitario, promoviendo el diálogo intercultural y contribuyendo al bienestar de toda la sociedad.
            </p>
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Diversidad y unión"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="w-full max-w-7xl mx-auto px-2 sm:px-4 mb-16">
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-neutral-100">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#002060] mb-4">Nuestros Valores</h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ background: 'linear-gradient(to right, #002060, #C19E4B)' }}></div>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Los principios que guían nuestro trabajo y nuestra comunidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#002060] to-[#001040] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#002060] mb-2">Educación</h3>
              <p className="text-neutral-600">Formación continua y conocimiento compartido</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#C19E4B] to-[#A0822A] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#002060] mb-2">Solidaridad</h3>
              <p className="text-neutral-600">Apoyo mutuo y ayuda social</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#002060] to-[#001040] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Handshake className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#002060] mb-2">Respeto</h3>
              <p className="text-neutral-600">Convivencia y diálogo intercultural</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#C19E4B] to-[#A0822A] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#002060] mb-2">Comunidad</h3>
              <p className="text-neutral-600">Hermandad y desarrollo personal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Esencia */}
      <section className="w-full max-w-7xl mx-auto px-2 sm:px-4">
        <div className="bg-gradient-to-r from-[#002060] to-[#001040] rounded-3xl shadow-2xl p-8 lg:p-12 text-white">
          {/* Texto e imagen a la misma altura */}
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-6">Nuestra Esencia</h2>
              <div className="w-24 h-1 mb-8 bg-[#C19E4B]"></div>
              <p className="text-lg leading-relaxed text-blue-100">
                El CCCBcn nace con la vocación de ser un espacio de encuentro entre la fe, la ciencia y la cultura. Un lugar donde la tradición islámica se conecta con los retos contemporáneos, y donde el conocimiento se comparte como una herramienta de transformación social y personal.
                <br /><br />
                Nuestra filosofía se basa en tres ejes fundamentales: Servimos a la comunidad inspirados por nuestra fe islámica y guiados por los principios del Corán y la Sunna, promoviendo el conocimiento, la convivencia y la dignidad humana.
              </p>
            </div>
            <div className="flex-1">
              <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1564769625905-50e93615e769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Nuestra esencia"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
          {/* Línea dorada y mensaje del Corán más abajo */}
          <div className="mt-14">
            <div className="w-24 h-1 mb-6 bg-[#C19E4B]"></div>
            <p className="text-lg leading-relaxed text-blue-100 mb-4">
              Tomamos como referencia el mensaje universal del Corán:
            </p>
            <blockquote className="border-l-4 border-[#C19E4B] pl-4 italic my-4 text-lg text-white">
              «¡Oh humanidad! Os hemos creado de un varón y una mujer, y os hemos hecho pueblos y tribus para que os conozcáis unos a otros. En verdad, el más noble de vosotros ante Dios es el más consciente de Él.»<br />
              <span className="text-[#C19E4B] font-semibold">(Corán 49:13)</span>
            </blockquote>
            <p className="text-lg leading-relaxed text-blue-100">
              Este versículo guía nuestra labor hacia la promoción del respeto mutuo, el diálogo intercultural y la fraternidad entre los pueblos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;