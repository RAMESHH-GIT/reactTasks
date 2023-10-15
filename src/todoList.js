import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (inputValue !== '') {
    setTodos([...todos, inputValue]);
    setInputValue('');
    }
  }
  // Function to handle updating a todo
  const handleUpdateTodo = (index, updatedTodo) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = updatedTodo;
    setTodos(updatedTodos);
  };
  function handleTodoDelete(index) {
    // const newTodos = [...todos];
    // newTodos.splice(index, 1);
    // setTodos(newTodos);
     const newTodos = todos.filter((tododelete, i) => i !== index);
    setTodos(newTodos);
  }
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Add Todo</button>
      </form>
      {/* <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="text"
              value={todo}
              onChange={(e) => handleUpdateTodo(index, e.target.value)}
            />
            <button onClick={() => handleTodoDelete(index)}>Delete</button>
          </li>
        ))}
      </ul> */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}
         
          <button onClick={() => handleTodoDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
