import React from "react";
import Task from "./Task"



function TaskList({ Tasks, deleteItem }) {
  return (
    <div className="tasks">

        {Tasks.map((item) => {
          return <Task
            key={item.text} 
            text={item.text} 
            category={item.category} 
            deleteItem={deleteItem}
            />
        })}

    </div>
  );
}

export default TaskList;
