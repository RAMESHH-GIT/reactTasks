import React, { useState } from 'react';
import ChildComponent from './childComp';

function ParentComponent() {
  const [message, setMessage] = useState('');

  function handleChildClick(message) {
    setMessage(message);
  }

  return (
    <div>
      <ChildComponent onClickC={handleChildClick} />
      <p>Message from child component: {message}</p>
    </div>
  );
}

export default ParentComponent;

