// import React, { useState, useEffect } from 'react';

// function InputField() {
//   const [inputValue, setInputValue] = useState('');
//   const [charCount, setCharCount] = useState(0);

//   useEffect(() => {
//     setCharCount(inputValue.length);
//   }, [inputValue]);

//   function handleInputChange(event) {
//     setInputValue(event.target.value);
//   }

//   return (
//     <div>
//       <input type="text" value={inputValue} onChange={handleInputChange} />
//       <p>Character Count: {charCount}</p>
//     </div>
//   );
// }
// export default InputField;
import React, { useState, useEffect } from 'react';

function VitalSigns() {
  const [heartRate, setHeartRate] = useState(0);
  const [bloodPressure, setBloodPressure] = useState(0);
  const [respiratoryRate, setRespiratoryRate] = useState(0);

  useEffect(() => {
    // Here you would typically set up a WebSocket connection to receive real-time updates of vital signs data
    // In this example, we'll just use a setInterval to simulate updates every 5 seconds
    const interval = setInterval(() => {
      setHeartRate(Math.floor(Math.random() * 20) + 60);
      setBloodPressure(Math.floor(Math.random() * 20) + 80);
      setRespiratoryRate(Math.floor(Math.random() * 5) + 12);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Vital Signs</h2>
      <p>Heart Rate: {heartRate}</p>
      <p>Blood Pressure: {bloodPressure}</p>
      <p>Respiratory Rate: {respiratoryRate}</p>
    </div>
  );
}

export default VitalSigns;
