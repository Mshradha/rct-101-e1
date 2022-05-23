import React, { useState } from "react";
import styles from "./addTask.module.css";
import { v4 as uuidv4 } from "uuid";
import Tasks from "../Task/Task"

const AddTask = () => {
  const [value , setValue] = useState("");
  const [task, setTask] = useState([]);

  const haAdd = ()=>{
    setTask([...task,{
      id:uuidv4(),
      todo:value,
      completed : false ,
    }])
    setValue("")
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div>
      <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" value={value} onChange={(e)=> setValue(e.target.value)} />
      <button data-cy="add-task-button">Add</button>
    </div>
    <div>
      {task.map((ele)=>{
        return <Tasks key = {ele.id} todo = {ele.todo} setTask={setTask} task={task}/>
      })}
    </div>
    </div>
    
  );
};

export default AddTask;
