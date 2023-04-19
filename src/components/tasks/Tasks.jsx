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
  const endTask = (data)=>{
    if(!endedTasks.includes(data)){
      console.log(data)
      setEndedTasks(endedTasks.concat(data));
      document.getElementById(data).style.opacity = "0.2";
      /*setCounter(counter.concat(number));*/
    }/*else{
      setCounter(counter.filter(counterNumber => counterNumber != number))
    }*/
  }   
  const recoverTask = (data)=>{
    document.getElementById(data).style.opacity = "1";
    const newObjeto = [...endedTasks];
    //ejemplo filter: const resultado = animales.filter(animal => animal != 'oso');
    const result = newObjeto.filter(endedTask => endedTask != data);
    setEndedTasks(result);
  }
  return (
    <div> 
      <h3>Tareas activas:</h3>
      <div className="tasks">
        {tasks.map((task, index) => (
          <div id ={task} key={task} className="taskContainer" onClick={() => {
            endTask(task);
          }}>
              Tarea {index+1}:
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