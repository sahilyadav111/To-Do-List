import React, { useState, useEffect } from 'react';

function TodoForm({ addTodo, editIndex, todos, updateTodo }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (editIndex !== null) {
      setValue(todos[editIndex].text);
    } else {
      setValue('');
    }
  }, [editIndex, todos]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    if (editIndex !== null) {
      updateTodo(editIndex, value);
    } else {
      addTodo(value);
    }
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Add or edit a task"
      />
    </form>
  );
}

export default TodoForm;
