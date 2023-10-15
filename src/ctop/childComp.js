import React from 'react';

function ChildComponent(props) {
  function handleClick() {
    props.onClickC('Hello from child component!');
  }

  return (
    <button onClick={handleClick}>
      Send Message to Parent Component
    </button>
  );
}

export default ChildComponent;
