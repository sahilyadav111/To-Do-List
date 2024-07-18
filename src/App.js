import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn about React', isCompleted: false, isImportant: false },
    { text: 'Meet friend for lunch', isCompleted: false, isImportant: false },
    { text: 'Build really cool to-do app', isCompleted: false, isImportant: false },
  ]);
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = text => {
    const newTodos = [...todos, { text, isCompleted: false, isImportant: false }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = index => {
    setEditIndex(index);
  };

  const updateTodo = (index, text) => {
    const newTodos = [...todos];
    newTodos[index].text = text;
    setTodos(newTodos);
    setEditIndex(null);
  };

  const toggleImportant = index => {
    const newTodos = [...todos];
    newTodos[index].isImportant = !newTodos[index].isImportant;
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            editTodo={editTodo}
            toggleImportant={toggleImportant}
          />
        ))}
        <TodoForm addTodo={addTodo} editIndex={editIndex} todos={todos} updateTodo={updateTodo} />
      </div>
    </div>
  );
}

export default App;
