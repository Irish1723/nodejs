import React, { useState } from "react";  // ✅ Correct import
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const colors = ["red", "yellow", "green", "black"];

  return (
    <div className="w-full h-screen fullpage" style={{ backgroundColor: color }}>
      <div className="text-3xl font-bold text-blue-600 bg-gray-100 p-4">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colors.map((c) => (
            <button
              key={c}
              className="outline-none px-4 py-2 rounded"
              style={{ backgroundColor: c, color: c === "black" ? "white" : "black" }}
              onClick={() => setColor(c)}
            >
              {c[0].toUpperCase() + c.slice(1)}
            </button>
          ))}
        </div>

        <div className="mt-4">Background Changer</div>
      </div>
    </div>
  );
}

export default App
