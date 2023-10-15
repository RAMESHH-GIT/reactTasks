import React, { useState } from "react";

// Higher-Order Component (HOC) function
const withCounter = (WrappedComponent) => {
   function newComp(props) {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + 1);
    };

    return (
      <WrappedComponent count={count} incrementCount={incrementCount} {...props} />
    );
  };
  return newComp;
};



export default withCounter;
