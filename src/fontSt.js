import React, { useState } from 'react';

function FontStylee() {
  const [inputValue, setInputValue] = useState('');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [list, setList] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Toggle bold or italic based on current state
    setList([...list, inputValue]);
    setInputValue('');
    if (isBold) {
      setIsItalic(true);
      setIsBold(false);
    } else if (isItalic) {
      setIsItalic(false);
    } else {
      setIsBold(true);
    }
  };

  const textStyle = {
    fontWeight: isBold ? 'bold' : 'normal',
    fontStyle: isItalic ? 'italic' : 'normal',
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter text:
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <ul>
        {list.map((item, index) => (
          <li
            key={index}
            style={textStyle}
           
          >
            {item}
          </li>
        ))}
      </ul>
      {/* {inputValue && (
        <p style={textStyle}> {inputValue}</p>
      )} */}
    </div>
  );
}

export default FontStylee;
