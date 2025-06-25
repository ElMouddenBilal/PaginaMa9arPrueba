// components/NewsletterCard.jsx
import React from "react";

const NewsletterCard = ({
  icon,
  title,
  description,
  inputPlaceholder = "Tu correo electrónico",
  buttonText = "Suscribirse",
  gradient = false,
  bgColor = "#fff",
  textColor = "#002060"
}) => (
  <div
    className={
      gradient
        ? "bg-gradient-to-r from-[#002060] to-[#C19E4B] rounded-2xl shadow-xl p-8 text-white text-center"
        : "bg-white rounded-2xl shadow-soft p-6 md:p-8 border border-neutral-100 text-center"
    }
    style={{
      background: gradient ? undefined : bgColor,
      color: gradient ? undefined : textColor
    }}
  >
    <div className="flex justify-center mb-6">{icon}</div>
    <h3 className={`text-3xl font-bold mb-4 ${gradient ? "" : ""}`}>{title}</h3>
    <p
      className={`text-xl mb-8 max-w-2xl mx-auto ${
        gradient ? "text-primary-100" : "text-neutral-600"
      }`}
    >
      {description}
    </p>
    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <input
        type="email"
        placeholder={inputPlaceholder}
        className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2"
        style={{
          border: gradient ? "1px solid #C19E4B" : "1px solid #e5e7eb"
        }}
      />
      <button
        className="px-6 py-3 font-semibold rounded-lg transition-colors duration-300"
        style={{
          backgroundColor: "#002060",
          color: "white"
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#001040")}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#002060")}
      >
        {buttonText}
      </button>
    </div>
  </div>
);

export default NewsletterCard;