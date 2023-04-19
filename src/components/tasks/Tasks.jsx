import React from 'react'
import NewTask from '../newTask/NewTask'
import './tasks.css'
import { useState } from 'react'
import {v4} from 'uuid'; /*No usado */

const Tasks = ({tasks, setTasks}) => {
  // State para acabar las tareas.
  const [endedTasks, setEndedTasks] = useState([]);
  const [counter, setCounter] = useState([]);
  //función de finalización de tareas
  const endTask = (number)=>{
    if(!counter.includes(number)){
      setEndedTasks(endedTasks.concat(tasks[number])); 
      document.getElementById(number).style.opacity = "0.2";
      setCounter(counter.concat(number));
    }/*else{
      setCounter(counter.filter(counterNumber => counterNumber != number))
    }*/
  }   
  const recoverTask = (number)=>{
    document.getElementById(counter[number]).style.opacity = "1";
    const newObjeto = [...endedTasks];
    //ejemplo filter: const resultado = animales.filter(animal => animal != 'oso');
    const result = newObjeto.filter(endedTask => endedTask != endedTasks[counter[number]]);
    setEndedTasks(result);
    
  }
  return (
    <div> 
      <h3>Tareas activas:</h3>
      <div className="tasks">
        {tasks.map((task, index) => (
          <div id ={index} className="taskContainer" onClick={() => {
            endTask(index);
          }}>
              Tarea {index+1}:
              &nbsp;{task} 
          </div>
           
        ))}
      </div> 
      <h3>Tareas acabadas:</h3> 
      <div className='tasks'>
        {endedTasks.map((endTask, index)=> (
          <div className="taskContainer" onClick={() => {
            recoverTask(index);
          }}>
            Tarea finalizada: {endTask}
          </div>
          ))} 
      </div> 
    </div>
  )
}

export default Tasks