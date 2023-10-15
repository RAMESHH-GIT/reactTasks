import React,{useState} from "react";
import withCounter from './index'


function Counter({ count, incrementCount }) {
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>Increment</button>
      </div>
    );
  }
  
  // Enhance the Counter component with the withCounter HOC
  export default withCounter(Counter);