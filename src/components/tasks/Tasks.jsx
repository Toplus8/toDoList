import React from 'react'
import NewTask from '../newTask/NewTask'
import './tasks.css'
import { useState } from 'react'
import {v4} from 'uuid'; /*No usado */

const Tasks = ({tasks, setTasks}) => {
  // State para acabar las tareas.
  const [endedTasks, setEndedTasks] = useState([]);
  
  const [updatedTasks, setUpdatedTasks] = useState([])

  //función de finalización de tareas
  const endTask = (data)=>{
    if(!endedTasks.includes(data)){
      setEndedTasks(endedTasks.concat(data));
      document.getElementById(data).style.display = "none";

      //Esto nos mostrará las tareas que hemos marcado como acabadas al final de la lista.
      setUpdatedTasks(updatedTasks.concat(data));
    }
  }  

  //Función de recuperación de tareas 
  const recoverTask = (data)=>{
    document.getElementById(data).style.opacity = "1";
    const newObjeto = [...endedTasks];
    const newObjeto2 = [...updatedTasks];
    //ejemplo filter: const resultado = animales.filter(animal => animal != 'oso');
    const result = newObjeto.filter(endedTask => endedTask != data);
    document.getElementById(data).style.display = "block";
    setEndedTasks(result);
    const result2 = newObjeto2.filter(updatedTask => updatedTask != data);
    setUpdatedTasks(result2);
   
  }
  return (
    <div> 
      <h3>Tareas activas:</h3>
      <div className="tasks">
        {tasks.map((task, index) => (
          <div id ={task} key={task} className="taskContainer" onClick={() => {
            endTask(task);
          }}>
              Tarea:
              &nbsp;{task} 
          </div>
           
        ))}
        {updatedTasks.map((updatedTask, index) => (
          <div id ={updatedTask} key={updatedTask} className="taskContainer2">
              Tarea:
              &nbsp;{updatedTask} 
          </div>
           
        ))}
      </div> 
      <h3>Tareas acabadas:</h3> 
      <div className='tasks'>
        {endedTasks.map((endTask, index)=> (
          <div id={endTask} className="taskContainer" key={endTask} onClick={() => {
            recoverTask(endTask);
          }}>
            Tarea finalizada: {endTask}
          </div>
          ))} 
      </div> 
    </div>
  )
}

export default Tasks