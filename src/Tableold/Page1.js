import React from 'react';
import Table from './Table';

function Page1() {
   const headings = {
    userId: 'User ID',
    id: 'ID',
    title: 'Title',
    completed: 'Status',
  };

  return (
    <div>
      <h1>Page 1</h1>
      <Table headings={headings} />
    </div>
  );
}

export default Page1;
