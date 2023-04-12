import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewTask from './components/newTask/NewTask'
import Tasks from './components/tasks/Tasks'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'

function App() {
  const [tasks, setTasks] = useState([])

  return (
   <div className ="container">
     < Nav />
     <br/>
    < NewTask tasks={ tasks } setTasks={ setTasks } />
    
    < Tasks tasks={ tasks } setTasks={ setTasks }/>
    < Footer />
   </div>
  )
}

export default App
