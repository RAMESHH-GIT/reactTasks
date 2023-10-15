import React, { useState } from 'react';

const dummyData = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Jack' },
  { id: 4, name: 'Jill' },
  { id: 5, name: 'James' },
  { id: 6, name: 'Jasmine' },
  { id: 7, name: 'Jacob' },
  { id: 8, name: 'Jocelyn' },
  { id: 9, name: 'Jeremy' },
  { id: 10, name: 'Joanna' },
];

const ITEMS_PER_PAGE = 3;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const itemsToShow = dummyData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const totalPages = Math.ceil(dummyData.length / ITEMS_PER_PAGE);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul>
        {itemsToShow.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div>
        {pageNumbers.map((page) => (
          <button key={page} onClick={() => handlePageClick(page)}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
