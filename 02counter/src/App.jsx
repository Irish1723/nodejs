import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//state ko change krne k liye*/
  let [counter,setcounter]=useState(15)
  //let Counter=0;

  const Addvalue=()=>{ 
    counter = counter + 1
    setcounter(counter )}
  return (
    <>
      <h1>Counter App</h1>
      <h2> Counter value : {Counter}</h2>

      <button
      onClick={Addvalue}
      >Add value</button>
      <br />
      <button>remove value</button>
    </>
  )
}

export default App
