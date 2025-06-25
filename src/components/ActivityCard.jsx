// components/ActivityCard.jsx
import React from "react";

const ActivityCard = ({ activity, onClick }) => (
  <div
    className="bg-white rounded-2xl shadow-soft overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-medium border border-neutral-100 cursor-pointer"
    onClick={onClick}
  >
    <div className="relative">
      <img
        src={activity.image}
        alt={activity.title}
        className="w-full h-56 object-cover"
      />
      <div className="absolute top-4 left-4">
        <span 
          className="inline-flex items-center px-3 py-1 text-white text-sm font-semibold rounded-full"
          style={{ backgroundColor: '#002060' }}
        >
          {activity.icon}
          <span className="ml-2">{activity.category}</span>
        </span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-3" style={{ color: '#002060' }}>
        {activity.title}
      </h3>
      <p className="text-neutral-600 leading-relaxed">{activity.description}</p>
    </div>
  </div>
);

export default ActivityCard;