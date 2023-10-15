import React from 'react';
//import {headers1,data1} from './TableData1'
import Table from './Table'; // Make sure to import the correct component path

const headers1 = ['Name', 'Age', 'City'];
const data1 = [['Alice', 25, 'New York'], ['Bob', 30, 'Los Angeles']];

function Page1() {
  return (
    <div>
      <h2>Page 1</h2>
      <Table h={headers1} d={data1} /> {/* Use 'headers' prop here */}
    </div>
  );
}

export default Page1;
// TableData.js

// import React from 'react';

// const headers1 = ['Name', 'Age', 'City'];
// const data1 = [['Alice', 25, 'New York'], ['Bob', 30, 'Los Angeles']];

// function TableData() {
//   return { headers1, data1 };
// }

// export default TableData;
