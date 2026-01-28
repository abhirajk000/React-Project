import React from "react";

function ColorCard({ color, isActive, onSelectColor }) {
  return (
    <button
      onClick={() => onSelectColor(color)}
      aria-label={color}
      className={`
        w-10 h-10 rounded-full
        transition-all duration-300
        hover:scale-125 cursor-pointer hover:text-red-500
        ${isActive ? "ring-4 ring-white scale-125" : "opacity-80" }
      `}
      style={{
        background: color,
        boxShadow: isActive
          ? `0 0 25px ${color}`
          : "0 0 8px rgba(0,0,0,0.3)",
      }}
    />
  );
}

export default ColorCard;
