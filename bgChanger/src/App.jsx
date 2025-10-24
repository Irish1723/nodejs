import React, { useState } from "react";  // ✅ Correct import
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color,setcolor]=useState("olive")

  return (
   
        <div className="w-full h-screen duration-1000"
        style={{backgroundColor:"white"}}>
        </div>    
    
  );
}

export default App
