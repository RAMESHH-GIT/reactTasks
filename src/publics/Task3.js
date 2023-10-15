import React, { useState, useEffect } from 'react';

const AppTask3 = () => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [details, setDetails] = useState(null);

  useEffect(() => {
    // Fetch data for the dropdown
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setOptions(data);
      })
      .catch((error) => {
        console.error('Error fetching options:', error);
      });
  }, []);

  const handleOptionChange = (event) => {
    const optionId = parseInt(event.target.value);
    setSelectedOption(optionId);

    // Check if details for the selected option are already cached
    const cachedDetails = localStorage.getItem(`details_${optionId}`);
    if (cachedDetails) {
      setDetails(JSON.parse(cachedDetails));
    } else {
      // Fetch details for the selected option
      fetch(`https://jsonplaceholder.typicode.com/posts/${optionId}`)
        .then((response) => response.json())
        .then((data) => {
          setDetails(data);
          // Cache the fetched details
          localStorage.setItem(`details_${optionId}`, JSON.stringify(data));
        })
        .catch((error) => {
          console.error('Error fetching details:', error);
        });
    }
  };

  return (
    <div>
      <h1>API Consumer</h1>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.title}
          </option>
        ))}
      </select>
      {details && (
        <div>
          <h2>Details</h2>
          <p>{details.title}</p>
          <p>{details.body}</p>
        </div>
      )}
    </div>
  );
};

export default AppTask3;
