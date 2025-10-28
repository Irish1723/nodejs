import { useState, useEffect} from 'react'
import { TodoProvider } from './context'
import './App.css'
import { use } from 'react';

function App() {
  const [Todos, setTodos] = useState([]);
  const addTodos = (todo) => {
    setTodos((prev)=>[{id: Date.now(),...todo},...prev])
  }
  const toggleTodo = (id,todo) => {
    setTodos((prev)=>prev.map((t)=>(t.id===id ? {...t,...todo} : t)))
  }
  const deleteTodo = (id) => {
    setTodos((prev)=>prev.filter((t)=>t.id!==id))
  }
  const toggleComplete = (id) => {
    setTodos((prev)=>prev.map((t)=>(t.id===id ? {...t,completed: !t.completed} : t)))
  }
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(Todos))
    if(Todos && Todos.length>0){
      setTodos(Todos)
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(Todos))
  })


  return (
    <TodoProvider value={{Todos,addTodos,toggleTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
      
    </TodoProvider>
  )
}

export default App
