// import React, { useState, useEffect } from 'react';

// function TextInput() {
//   const [inputText, setInputText] = useState('');
//   const [textList, setTextList] = useState([]);
//   const [selectedText, setSelectedText] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTextList([...textList, inputText]);
//     setInputText('');
//   }

//   const handleTextClick = (text) => {
//     setSelectedText(text);
//   }

//   useEffect(() => {
//     let selectedElement = document.getElementById(selectedText);
//     if (selectedElement) {
//       selectedElement.style.fontWeight = 'bold';
//     }
//     else if (selectedElement){
//         selectedElement.style.fontWeight = '';
//     }
//   }, [selectedText]);

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={inputText} onChange={e => setInputText(e.target.value)} />
//         <button type="submit">Submit</button>
//       </form>
//       <ul>
//         {textList.map(text => (
//           <li key={text} id={text} onClick={() => handleTextClick(text)}>{text}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default TextInput;
import React, { useState, useEffect } from 'react';

function TextInput() {
  const [textList, setTextList] = useState([]);
  const [selectedText, setSelectedText] = useState('');
  const [textStyle, setTextStyle] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target.textInput.value;
    setTextList([...textList, inputValue]);
    event.target.textInput.value = '';
  }

  const handleSelectText = (text) => {
    setSelectedText(text);
  }

  useEffect(() => {
    if (selectedText === '') {
      setTextStyle({});
    } else {
      setTextStyle({ fontWeight: 'bold', fontStyle: 'italic' });
    }
  }, [selectedText])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="textInput" />
        <button type="submit">Add Text</button>
      </form>
      <ul>
        {textList.map((text, index) => (
          <li key={index} onClick={() => handleSelectText(text)} style={text === selectedText ? textStyle : {}}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TextInput;
