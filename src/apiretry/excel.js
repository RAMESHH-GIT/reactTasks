// ApiRetry.js
import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

const ApiRetry1 = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [retryCount]);

  const handleRetry = () => {
    setRetryCount(retryCount + 1);
  };

  const truncateText = (text, maxLength) => {
    return text && text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };
  

  const handleExport = () => {
    const modifiedData = data.map(item => ({
      ...item,
      title: truncateText(item.title, 50),
      body: truncateText(item.body, 50)
    }));
  
    const worksheet = XLSX.utils.json_to_sheet(modifiedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DataSheet');
    XLSX.writeFile(workbook, 'api_data.xlsx');
  };
//   const handleExport = () => {
//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'DataSheet');
//     XLSX.writeFile(workbook, 'api_data.xlsx');
//   };

  return (
    <div>
      <h1>API Data</h1>
      {error ? (
        <div>
          <p>An error occurred: {error.message}</p>
          <button onClick={handleRetry}>Retry</button>
        </div>
      ) : (
        <div>
          <ul>
            {data.map(item => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
          <button onClick={handleExport}>Export to Excel</button>
        </div>
      )}
    </div>
  );
};

export default ApiRetry1;
