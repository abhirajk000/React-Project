import React, { useState } from "react";
import ColorCard from "./Colorcard";

const colors = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
];

function App() {
  const [fullcolor, setColor] = useState(colors[0]);

  return (

      <div className="w-screen h-screen rounded-2xl transition-all border-2xl"
         style={{ background: fullcolor }} >
       
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex gap-6 px-8 py-6 rounded-full backdrop-blur-xl bg-black/40 shadow-2xl border border-white/20">
          {colors.map((color) => (
            <ColorCard
              key={color}
              color={color}
              isActive={fullcolor === color}
              onSelectColor={setColor}
            />
          ))}
     
        </div>
      </div>
    </div>
  );
}

export default App;
