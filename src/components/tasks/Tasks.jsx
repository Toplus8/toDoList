import React from 'react'
import NewTask from '../newTask/NewTask'

const Tasks = ({tasks, setTasks}) => {
     
  return (
    <div> 
         <h3>Listado de tareas:</h3>
                
        {tasks.map((task, index) => (
            <div>
              Tarea {index+1}: {task}  
            </div>
        ))}
    </div>
  )
}

export default Tasks