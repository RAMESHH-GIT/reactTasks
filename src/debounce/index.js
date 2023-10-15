import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';

function MyComponent1() {
//   const [inputValue, setInputValue] = useState('');

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       // update state with latest input value
//       console.log("callinginput",inputValue)
//       setInputValue(inputValue);
//     }, 500); // wait for 500 milliseconds after user stops typing

//     return () => {
//       // clear timeout when component unmounts or when input value changes
//       clearTimeout(timeoutId);
//     };
//   }, [inputValue]); // re-run effect whenever input value changes

//   const handleInputChange = (event) => {
   
//     setInputValue(event.target.value);
//   };

//   return (
//     <input
//       type="text"
//       onChange={handleInputChange}
//       value={inputValue}
//     />
//   );
// }
// import React, { useState } from 'react';
// import { debounce } from 'lodash';





  const [inputValue, setInputValue] = useState('');

  const handleInputChange = debounce((event) => {
    const value = event.target.value; // Capture the value before using it
    setInputValue(value);
  }, 500);

  const handleChange = (event) => {
    event.persist(); // Call event.persist() to remove the event from the pool
    handleInputChange(event);
  };

  return (
    <div>
      <h1>Debounced Input</h1>
      <input type="text" onChange={handleChange} value={inputValue} />
      <p>Debounced Value: {inputValue}</p>
    </div>
  );
}










export default MyComponent1;
// const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     setInputValue(value);
//   };

//   const debouncedHandleInputChange = debounce((value) => {
//     setInputValue(value)
//     console.log(value);
//   }, 3000);

//   const handleDebouncedInputChange = (event) => {
//     const value = event.target.value;
//     setInputValue(value);
//     debouncedHandleInputChange(value);
//   };

//   return (
//     <div>
//       <h1>Debounced Form</h1>
//       <input type="text" onChange={handleDebouncedInputChange} value={inputValue} />
//       <p>Debounced Value: {inputValue}</p>
//     </div>
//   );
// }