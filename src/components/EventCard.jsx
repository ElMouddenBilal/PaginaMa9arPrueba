// components/EventCard.jsx
import React from "react";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const EventCard = ({ event, formatDate, BLUE, BLUE_HOVER }) => (
  <div
    className="bg-white rounded-2xl shadow-soft overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-medium border border-neutral-100"
  >
    {/* Card Header */}
    <div className="relative">
      <div 
        className="h-40 sm:h-48 flex items-center justify-center"
        style={{
          background: 'linear-gradient(to bottom right, #b3d9ff, #e6f3ff)'
        }}
      >
        <Calendar className="h-16 w-16" style={{ color: '#002060' }} />
      </div>
      <div className="absolute top-4 left-4">
        <span 
          className="px-3 py-1 text-xs font-semibold rounded-full"
          style={{ 
            backgroundColor: '#002060',
            color: 'white'
          }}
        >
          {event.category}
        </span>
      </div>
      <div className="absolute top-4 right-4">
        <div className="flex items-center text-white text-xs bg-black/50 px-2 py-1 rounded-full">
          <Users className="h-3 w-3 mr-1" />
          <span>{event.totalSpots}</span>
        </div>
      </div>
    </div>
    
    {/* Card Content */}
    <div className="p-5 md:p-6">
      <h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: '#002060' }}>
        {event.title}
      </h3>
      <p className="text-neutral-600 mb-4 leading-relaxed text-sm md:text-base">
        {event.description}
      </p>
      
      {/* Event Details */}
      <div className="space-y-2 mb-6">
        <div className="flex items-center text-neutral-500 text-xs md:text-sm">
          <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
          <span className="truncate">{formatDate(event.date)}</span>
        </div>
        <div className="flex items-center text-neutral-500 text-xs md:text-sm">
          <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center text-neutral-500 text-xs md:text-sm">
          <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
          <span className="truncate">{event.location}</span>
        </div>
      </div>
      
      {/* CTA Button */}
      <button 
        className="w-full py-3 px-4 text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-md text-sm md:text-base rounded-lg"
        style={{ backgroundColor: BLUE }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = BLUE_HOVER}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = BLUE}
      >
        ¡Apúntate ahora!
      </button>
    </div>
  </div>
);

export default EventCard;