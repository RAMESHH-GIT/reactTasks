import React, { useState, useEffect } from 'react';

function MyComponent3() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  
  useEffect(() => {
    fetchData();
  }, [retryCount]); // Retry whenever retryCount changes

  async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      if (!response.ok) {
        throw new Error('Request failed');
      }
      const data = await response.json();
      setData(data);
      setError(null); // Clear any previous errors
    } catch (error) {
      setError(error.message);
      if (retryCount < 2) {
        // Retry up to 3 times
        setRetryCount(retryCount + 1);
      }
    }
  }

  if (error) {
    return (
      <div>
        <p>An error occurred: {error}</p>
        <p>Retrying {3 - retryCount} more {retryCount === 1 ? 'time' : 'times'}...</p>
      </div>
    );
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  // Render the data
  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default MyComponent3;
