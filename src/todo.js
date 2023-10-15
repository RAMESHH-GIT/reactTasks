import { useState } from 'react';
import React from 'react';

function App1() {
  const [items, setItems] = useState([
    { id: 1, name: 'Task 1', status: 'todo' },
    { id: 2, name: 'Task 2', status: 'todo' },
    { id: 3, name: 'Task 3', status: 'todo' },
  ]);

  const moveItem = (itemId, newStatus) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, status: newStatus };
      } else {
        return item;
      }
    });
    setItems(newItems);
  };

  const todoItems = items.filter((item) => item.status === 'todo');
  const inProgressItems = items.filter((item) => item.status === 'inProgress');
  const completedItems = items.filter((item) => item.status === 'completed');

  return (
    <div>
      <h1>Task Manager</h1>
      <List
        title="To Do"
        items={todoItems}
        onMoveItem={(itemId) => moveItem(itemId, 'inProgress')}
      />
      <List
        title="In Progress"
        items={inProgressItems}
        onMoveItem={(itemId) => moveItem(itemId, 'completed')}
      />
      <List title="Completed" items={completedItems} />
    </div>
  );
}


export default App1;
function List({ title, items, onMoveItem }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            {onMoveItem && <button onClick={() => onMoveItem(item.id)}>Move</button>}
          </li>
        ))}
      </ul>
    </div>
  );
}
