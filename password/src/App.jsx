import { useState,useCallback , useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [numberallowed,setnumberallowed] = useState(false)
  const [charallowed,setcharallowed] = useState(false)
  const [Password,setPassword] = useState('')
  //ref hook
  const passwordref=useRef(null)

  const generatepassword = useCallback(()=>{
    let pass=""
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"
    if(numberallowed) str+="0123456789"
    if(charallowed) str+="!@#$%^&*()_+"
    for(let i=0;i<length;i++){
      let index = Math.floor(Math.random()*str.length)
      pass+=str.charAt(index)
    }
    setPassword(pass)
  } , [length,numberallowed,charallowed,setPassword])
  useEffect(()=>{generatepassword},[length,numberallowed,charallowed,generatepassword])
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center gap-4 rounded-lg bg-gray-100">Password Maker</div>
          <input type="text"
          value={Password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly />
          <button onClick={generatepassword}>Generate Password</button>
       <div className='flex gap-3 items-center'>
            <label htmlFor='length'>Length</label> 
            <input 
            type="number" 
            id='length'
            min={4}
            max={20}
            value={length}
            onChange={(e)=>setLength(Number(e.target.value))}  />
       </div>
        <div className='flex gap-3 items-center'>
          <input type="checkbox" name="" id="numberInput" />
        Number</div>
    </>
  )
}

export default App
