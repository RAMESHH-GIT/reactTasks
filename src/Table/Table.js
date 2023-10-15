// import React, { useState, useEffect } from 'react';

// function TableUserList() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch data from the JSONPlaceholder API
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`Network response was not ok: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setUsers(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []); // Empty dependency array ensures this effect runs only once

//   return (
//     <div>
//       <h2>User List</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TableUserList;
import React from 'react';
//import TableData from './Page1'

function Table({h,d}) {
  console.log("headres",h)
  //const {headers1,data1} = TableData()
 
  return (
    <table>
      <thead>
        <tr>
          {h.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {d.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
