import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
function Myapp(){
  return( <div>
    <h1>Custom app</h1>
  </div>
  )
}
const anotheruser = "Nikhil"

// const anotherElement = (
//   <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
//     Visit Google
//   </a>
// )
const reactElement = React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'Visit  the Google',
  anotheruser

)

//kui bhi value pss  kr sakte hai
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <reactElementp />
  </StrictMode>
)

