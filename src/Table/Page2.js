import React from 'react';
import Table from './TableC';

const headers2 = ['Product', 'Price'];
const data2 = [['Laptop', '$1000'], ['Phone', '$500']];

function Page2() {
  return (
    <div>
      <h2>Page 2</h2>
      <Table headers={headers2} data={data2} />
    </div>
  );
}

export default Page2;
