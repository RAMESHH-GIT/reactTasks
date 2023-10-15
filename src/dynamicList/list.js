import React, { useState } from 'react';

function ArrayFunction() {
  const [array, setArray] = useState([]);

  const addItem = (item) => {
    setArray([...array, item]);
  };

  return (
    <div>
      <ul>
        {array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => addItem('New Item')}>Add Item</button>
    </div>
  );
}

export default ArrayFunction;
