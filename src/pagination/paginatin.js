import React, { useState, useEffect } from 'react';

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [pageNumbers, setPageNumbers] = useState([]);

  // Calculate the total number of pages based on itemsPerPage and totalItems
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Create an array of page numbers to display in the pagination
  useEffect(() => {
    const pageNumberArr = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumberArr.push(i);
    }
    setPageNumbers(pageNumberArr);
  }, [totalPages]);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the index of the first and last items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Render only the items for the current page
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((page) => (
          <li
            key={page}
            className={`page-item ${currentPage === page ? 'active' : ''}`}
          >
            <button onClick={() => handlePageChange(page)} className="page-link">
              {page}
            </button>
          </li>
        ))}
      </ul>
      {currentItems.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}
