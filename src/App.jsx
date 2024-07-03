import React, { useEffect, useState } from 'react';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import  '../src/style.css'; 

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[]
  }else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  // Define your initial todos as an array of objects
  const initialTodos = [];

  // Use useState to manage todos state
  const [todos, setTodos] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  // Function to handle delete operation
  const handleDelete = (sno) => {
    // Filter out the todo item with the given sno
    const updatedTodos = todos.filter(todo => todo.sno !== sno);
    // Update the todos state with the filtered list
    setTodos(updatedTodos);
  };
  localStorage.getItem("todos");

  // Function to handle adding a new todo
  const addTodo = (title) => {
    console.log("Adding new todo:", title);
    // Generate a new sno for the new todo
    const sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
    // Create a new todo object
    const newTodo = {
      sno: sno,
      title: title,
     
    };
    // Update the todos state by adding the new todo to the existing list
    setTodos([...todos, newTodo]);
    localStorage.setItem("todos",JSON.stringify(todos));
  };

  return (
    <>
      
      
      <Header title="My Todos List" searchBar={false} />
      {/* Pass addTodo function to AddTodo component */}
      <AddTodo addTodo={addTodo} />
      {/* Pass todos and handleDelete function to Todos component */}
      <Todos todos={todos} onDelete={handleDelete} />
      <Footer />
     
     
    </>
  );
}

export default App;
