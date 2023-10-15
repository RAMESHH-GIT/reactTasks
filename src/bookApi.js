import React, { useState, useEffect } from 'react';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState('');

  useEffect(() => {
    // Fetch book data from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error(error));
  }, []);

  const handleBookClick = (bookId) => {
    console.log(bookId)
    setSelectedBookId(bookId);
  };

  return (
    <ul>
      {books.map(book => (
        <li
          key={book.id}
        //   onClick={() => handleBookClick(book.id)}
        //   className={selectedBookId === book.id ? 'selected' : ''}
        onClick={() => handleBookClick(book.id)}
        style={{
          backgroundColor: selectedBookId === book.id ? 'yellow' : 'grey',
          fontWeight: selectedBookId === book.id ? 'bold' : 'normal'
        }}
        >
            <p> {book.title.length > 18 ?
                                    `${book.title.substring(0, 140)}...` : book.title
                                  }


            </p>
        
        </li>
      ))}
    </ul>
  );
};

export default BookList;
