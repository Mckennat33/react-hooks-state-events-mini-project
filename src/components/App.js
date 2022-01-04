import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react"
import Task from "./Task"
import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });


function App() {
  const [ taskList, setTaskList ] = useState(TASKS)
  const [ newTask, setNewTask ] = useState('')
  const [ newText, setNewText ] = useState('')
  const [categoryList, setCategoryList] = useState("All")

  
  
  function addTask(event) {
    event.preventDefault()
    const newItem = {
      text: newText, 
      category: categoryList, 
    }

    const updatedTask = [...taskList, newItem]
    setNewTask(updatedTask)
  }

  function deleteItem(taskList) {
    const updateTask = taskList.filter((task) => {
      return task.text !== task
    })
    const newList = [...taskList, updateTask]
    // setTaskList(newList)
  }



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm addTask={addTask} />
      <TaskList Tasks={taskList} deleteItem={deleteItem(taskList)} />
    </div>
  );
}

export default App;



// function deleteItem(text) {
    
    
//   const updatedTasks = taskList.filter((text) => {
//     if (text.text !== text) {
//       return true
//     }
//     setTaskList(updatedTasks)
//     if (categoryList == "All") {
//       setCategoryList(updatedTasks)
//     } else {
//       let filteredByTask = updatedTasks.filter(task => {
//         if (task.category == categoryList) {
//           return true 
//         }
//         setCategoryList(filteredByTask)
//       })
//     }
//   })
  
// }