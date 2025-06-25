// components/EventFeaturedCard.jsx
import React from "react";
import { Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react";

const EventFeaturedCard = ({ event, formatDate, GOLD, GOLD_HOVER, onClick }) => (
  <div 
    className="rounded-2xl shadow-xl p-6 md:p-8 mb-12 text-white"
    style={{
      background: 'linear-gradient(to right, #002060, #001040)'
    }}
  >
    <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
      <div>
        <span 
          className="inline-block px-3 py-1 text-white text-sm font-semibold rounded-full mb-4"
          style={{ backgroundColor: GOLD }}
        >
          Evento Destacado
        </span>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{event.title}</h3>
        <p className="text-lg md:text-xl mb-6 text-blue-100">{event.description}</p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 md:gap-4 mb-6">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-2 flex-shrink-0" />
            <span className="text-sm md:text-base">{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-2 flex-shrink-0" />
            <span className="text-sm md:text-base">{event.time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
            <span className="text-sm md:text-base">{event.location}</span>
          </div>
        </div>
        <button 
          className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg rounded-lg"
          style={{ backgroundColor: GOLD }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = GOLD_HOVER}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = GOLD}
          onClick={onClick}
        >
          ¡Apúntate ahora!
          <ExternalLink className="ml-2 h-4 w-4" />
        </button>
      </div>
      <div className="text-center order-first md:order-last">
        <div className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-white/20 rounded-full mb-4">
          <Calendar className="h-12 w-12 md:h-16 md:w-16" />
        </div>
        <div className="flex items-center justify-center">
          <Users className="h-5 w-5 mr-2" />
          <span className="text-base md:text-lg">{event.totalSpots} plazas disponibles</span>
        </div>
      </div>
    </div>
  </div>
);

export default EventFeaturedCard;