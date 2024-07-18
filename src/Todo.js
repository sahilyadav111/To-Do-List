import React from 'react';

function Todo({ todo, index, completeTodo, removeTodo, editTodo, toggleImportant }) {
  return (
    <div
      style={{
        textDecoration: todo.isCompleted ? 'line-through' : '',
        backgroundColor: todo.isImportant ? '#ffeb3b' : '#fff'
      }}
      className="todo"
    >
      <span>{todo.text}</span>
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => editTodo(index)}>Edit</button>
        <button onClick={() => toggleImportant(index)}>Important</button>
        <button onClick={() => removeTodo(index)}>Remove</button>
      </div>
    </div>
  );
}

export default Todo;
