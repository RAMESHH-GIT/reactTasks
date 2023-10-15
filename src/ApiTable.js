import React, { useState, useEffect } from "react";

function Table() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await response.json();
    setData(jsonData);
  };
//   .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.log(error));

  const handleSort = (type) => {
    setSortType(type);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const sortedData = data.sort((a, b) => {
   // sortType === "asc" ? a.name.localeCompare(b.name) :b.name.localeCompare(a.name)
    if (sortType === "asc") {
      return a.name.localeCompare(b.name);
    } else if (sortType === "desc") {
      return b.name.localeCompare(a.name);
    } else {
      return 0;
    }
  });

  const filteredData = sortedData.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th onClick={() => handleSort("asc")}>Name &#9650;</th>
            <th onClick={() => handleSort("desc")}>Name &#9660;</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
