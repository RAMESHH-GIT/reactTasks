import React, { useState, useEffect } from 'react';

function AppPrev() {
  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState(null);

//   useEffect(() => {
//     setPrevCount(count);
//   }, [count]);y

  const handleClick = () => {
    setPrevCount(count);
    setCount(count + 1);
  };

  return (
    <div>
      <p>Current count: {count}</p>
      <p>Previous count: {prevCount}</p>
      {/* p>Previous count: {prevCount!==null ? prevCount:""}</p> */}
      <button onClick={handleClick}>Increment Count</button>
    </div>
  );
}

export default AppPrev;
