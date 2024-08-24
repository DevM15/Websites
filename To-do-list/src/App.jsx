import React, {useState} from "react"

function App() {
  
  const [tasks, setTask] = useState(["apple","mango","cucumber"])

  function handleAddTask(){

    const newTask = document.getElementById("taskInput").value;
    if(newTask.trim() !== ""){
      document.getElementById("taskInput").value = ""

      setTask(t => [...t,newTask])
    }
  }

  function handleRemoveTask(index){

    setTask(tasks.filter((_,i) => i !== index))
  }

  function moveTaskUp(index){
    
    if(index > 0){
      const updatedTask = [...tasks];
      [updatedTask[index],updatedTask[index - 1]] = [updatedTask[index -1],updatedTask[index]];

      setTask(updatedTask);
    }
  }

  function moveTaskDown(index){
    if(index < tasks.length -1){
      const updatedTask = [...tasks];
      [updatedTask[index + 1],updatedTask[index]] = [updatedTask[index],updatedTask[index + 1]];

      setTask(updatedTask);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input type="text" placeholder="Enter a task..." id="taskInput"/>
			  <button onClick={handleAddTask} className="add-button">Add</button>
      </div>
      
      <ol>
        {tasks.map((task,index) => 
        <li key={index} >
          <span className="text">{task}</span>
          <button className="delete-button" onClick={() => handleRemoveTask(index)}>Delete</button>
          <button className="move-button" onClick={() => moveTaskUp(index)}>Up</button>
          <button className="move-button" onClick={() => moveTaskDown(index)}>Down</button>
          </li>
        )}
      </ol>
    </div>
  )
}

export default App
