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
      document.getElementById(data).style.opacity = "0.2";
      const datos=[...tasks]
      const result= datos.filter(task => task != data);
      //setUpdatedTasks(result);
      //console.log(" Lo que tiene update ",datos)
      
      //setUpdatedTasks(...updatedTasks,data)
      //setTasks(updatedTasks);
      //console.log(tasks+" sin el "+ data)
      //setTasks(tasks.concat(data));
      //console.log(tasks+" concatenado")
    }
  }   
  const recoverTask = (data)=>{
    document.getElementById(data).style.opacity = "1";
    const newObjeto = [...endedTasks];
    //ejemplo filter: const resultado = animales.filter(animal => animal != 'oso');
    const result = newObjeto.filter(endedTask => endedTask != data);
    setEndedTasks(result);
    console.log(result);
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