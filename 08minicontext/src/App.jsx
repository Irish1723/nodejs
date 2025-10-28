
import './App.css'
import Usercontext from './Context/Usercontext'
import UserconUsercontextProvidetext from './Context/UsercontextProvide'
import Login from './Login/Login'
import Profile from './Login/Profile'

function App() {
  

  return (
    <UsercontextProvide>
      <h1>React with Chai and share your friend</h1>
      <Login/>
      <Profile/>

  
    </UsercontextProvide>
  )
}

export default App
