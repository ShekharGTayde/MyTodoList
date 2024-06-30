import React from 'react';
import TodoItem from './TodoItem';

export default function Todos({ todos, onDelete }) {
  return (
    <div className="container">
     
      {todos.map((todo) => (
        <TodoItem key={todo.sno} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
}

