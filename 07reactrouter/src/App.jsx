import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componets/header/header.jsx'
import Footer from './componets/footer/footer.jsx'
import Home from './componets/Home/home.jsx'
import About from './componets/About/about.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header/>
      <home/>
      <footer/>
      
    
    </>
  )
}

export default App
