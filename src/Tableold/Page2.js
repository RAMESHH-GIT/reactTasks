import React from 'react';
import Table from './TableC';

function Page2() {
  const headings = ['User', 'Task ID', 'Description', 'Status'];

  return (
    <div>
      <h1>Page 2</h1>
      <Table headings={headings} />
    </div>
  );
}

export default Page2;
