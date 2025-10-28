
import './App.css'
import ThemeBtn from './components/ThemeBtn';
import Cards from './components/Cards';
import { ThemeProvider } from './contexts/theme';
import { useState, useEffect } from 'react'

function App() {
  const [themecode,setThemecode]=useState("light");
  const lightTheme=()=>{
    setThemecode("light");
  }
  const darkTheme=()=>{
    setThemecode("dark");
  }
 //actual change in theme*/
 useEffect(()=>{
  document.querySelector("html").classList.remove("light","dark");
  document.querySelector("html").classList.add(themecode)
 },[themecode]);

  return (
    <>
<ThemeProvider value={{themecode,darkTheme,lightTheme}}>
  <div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
      <ThemeBtn />
    </div>
    <Cards />
  </div>
</ThemeProvider>
    </>
  )
}

export default App
