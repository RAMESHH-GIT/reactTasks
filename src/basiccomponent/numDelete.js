import React, { useState } from 'react';


function NumberArray() {
  const [numbers, setNumbers] = useState([]);
  const [inputNumber, setInputNumber] = useState('');
  const [deleteNumber, setDeleteNumber] = useState('');

  const addNumber = () => {
    const number = Number(inputNumber);
    // if (!isNaN(number)) {
      setNumbers([...numbers, number]);
      setInputNumber('');
    // }
  };

  const deleteNumberFromArray = () => {
    const numberToDelete = Number(deleteNumber);
   // if (!isNaN(numberToDelete)) {
      const filteredNumbers = numbers.filter((num) => num !== numberToDelete);
      // if (filteredNumbers.length === numbers.length) {
      //   console.log(numberToDelete + " does not exist in the array.");
      // } else {
        setNumbers(filteredNumbers);
        setDeleteNumber('');
        console.log(numberToDelete + " deleted from the array.");
      //}
   // }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
        />
        <button onClick={addNumber}>Add Number</button>
      </div>
      <div>
        <input
          type="text"
          value={deleteNumber}
          onChange={(e) => setDeleteNumber(e.target.value)}
        />
        <button onClick={deleteNumberFromArray}>Delete Number</button>
      </div>
      <div>
        {/* <p>{numbers}</p> */}
        <p>Numbers: {numbers.join(", ")}</p>
        {/* {numbers.length === 0 ? (
          <p>No numbers entered.</p>
        ) : (
          <p>Numbers: {numbers.join(", ")}</p>
        )} */}
      </div>
    </div>
  );
}

export default NumberArray;

