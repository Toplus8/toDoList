import React from 'react'
import NewTask from '../newTask/NewTask'
import './tasks.css'

const Tasks = ({tasks, setTasks}) => {
  const endedTasks = [];
  const endTask = (number)=>{
    endedTasks.push(tasks[number]);
    console.log(typeof(endedTasks));
    console.log(endedTasks);
    console.log(endedTasks[0]);
  }   
  return (
    <div> 
      <h3>Tareas activas:</h3>
      <div class="tasks">
        {tasks.map((task, index) => (
          <div class="taskContainer" onClick={() => {
            endTask({index});
          }}>
              Tarea {index+1}:
              &nbsp;{task} 
          </div>
           
        ))}
      </div> 
      <h3>Tareas acabadas:</h3> 
         { endedTasks.map((endTask, index)=> (
            <div class="taskContainer">
              {endTask}
            </div>
          ))}
    </div>
  )
}

export default Tasks