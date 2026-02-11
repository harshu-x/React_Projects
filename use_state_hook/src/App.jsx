import React from 'react'
import { useState } from 'react';
const App = () => {
  
  const [tasks, setTask] = useState(
    [
      {id:1 , title:"Learn React" , completed:false},
      {id:2 , title :'Practice Hooks', completed:false}
    ]
  );
  const [input, setInput] = useState(" ");

  const addTask =()=>{
    const newTask ={
      id:tasks.length >0 ? tasks[tasks.length-1].id+1 :1,
      title:input,
      completed:false
    }

    setTask(prev  =>[...prev , newTask]);
   
    setInput("");
  };

 const toggleTask =()=>{
    setTasks( prev => 
      prev.map(
        tasks => tasks.id===id ? {...task , completed:!tasks.complteed} :tasks;
      )

    )
 }
  return (
    <div style={{padding:"20px"}}>
      <h1> useState Array and Object Practice</h1>
      
      <input 
      type='text'
      value={input}
      placeholder='Enter task...'
      onChange={(e)=>setInput(e.target.value)}
       />

       <button onClick={addTask}>Add Task</button>

       <hr />

  

      {tasks.map(task=>(
        <div key={task.id} style={{marginTop:"10px"}}>
        
        <span
        style={{
              textDecoration: task.completed ? "line-through" : "none",
              marginRight: "10px"
            }}
>
          {task.title}
        </span>

        <button
        onClick={()=>
          toggleTask(task.id)
        }>Toggle</button>
        </div>
      ))}
    </div>
  )
}

export default App
