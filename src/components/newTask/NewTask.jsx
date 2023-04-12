import React from 'react'
import { useForm } from "react-hook-form";


const NewTask = ({tasks, setTasks}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => setTasks(tasks.concat(data.dataTasks));
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("dataTasks", { required: true, maxLength: 25 })} />
                &nbsp;
                <input type="submit" />
                < br/>
                {errors.dataTasks?.type === "required" && <span style ={{color:"red"}}>  El campo no puede estar vacío</span>}
                {errors.dataTasks?.type === "maxLength" && <span style ={{color:"red"}}> Máximo de texto excedido</span>}
            </form>
        </div>
  )
}

export default NewTask

