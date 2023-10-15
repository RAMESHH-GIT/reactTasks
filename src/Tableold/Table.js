import React, { useState, useEffect } from 'react';
import TableHeading from './TableHeading';

function Table(props ) {
  console.log("headings",props)
  console.log("table headings", props.headings)
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log('Error fetching data:', error);
      setIsLoading(false);
    }
  }
  if (!props.headings) {
    return null; // Return null or show an error message if headings are not provided
  }
  const headings = Object.keys(props.headings);
  if (isLoading) {
    return <p>Loading...</p>; // Render a loading state
  }
  return (
    
    <table>
      <h1>table</h1>
       <TableHeading headings={headings} />
       <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {headings.map((heading) => (
              <td key={heading}>{row[heading]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
