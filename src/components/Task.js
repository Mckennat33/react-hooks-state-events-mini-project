import React from "react";
import TaskList from "./TaskList"
import { useState } from "react"

function Task({text, category, deleteItem}) {

// const [ Tasks, setTasks ] = useState([Tasks])



  return (
    <div className="task">
      <div className="label">{category} </div>
      <div className="text">{text}</div>
      <button className="delete" onClick={deleteItem} >X</button>
    </div>
  );
}

export default Task;
