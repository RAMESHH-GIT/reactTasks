// import React, { useState, useEffect } from "react";

// function App2() {
//   const [options, setOptions] = useState([]);

//   useEffect(() => {
//     const api1 = "https://jsonplaceholder.typicode.com/users";
//     const api2 = "https://jsonplaceholder.typicode.com/posts";

//     const fetchOptions = async () => {
//       try {
//         const [response1, response2] = await Promise.all([
//           fetch(api1),
//           fetch(api2),
//         ]);

//         const [data1, data2] = await Promise.all([
//           response1.json(),
//           response2.json(),
//         ]);

//         const mergedData = [...data1, ...data2];
//         setOptions(mergedData);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchOptions();
//   }, []);

//   return (
//     <div>
//       <h1>Merged options from APIs:</h1>
//       <select>
//         {options.map((option) => (
//           <option key={option.id} value={option.id}>
//             {option.name || option.title}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// export default App2;
import React, { useState, useEffect } from "react";

function App2() {
  const [options, setOptions] = useState([
    { value: "api1", label: "API 1" },
    { value: "api2", label: "API 2" },
    { value: "api3", label: "API 3" },
  ]);
  const [selectedOption, setSelectedOption] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    if (selectedOption === "api1") {
      fetchData("https://jsonplaceholder.typicode.com/posts");
    } else if (selectedOption === "api2") {
      fetchData("https://jsonplaceholder.typicode.com/comments");
    } else if (selectedOption === "api3") {
      fetchData("https://jsonplaceholder.typicode.com/albums");
    }
  }, [selectedOption]);

  return (
    <div>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {data.length > 0 && (
        <table>
          <thead>
            <tr>
              {selectedOption === "api1" && (
                <>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Body</th>
                </>
              )}
              {selectedOption === "api2" && (
                <>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Body</th>
                </>
              )}
              {selectedOption === "api3" && (
                <>
                  <th>Id</th>
                  <th>Title</th>
                  <th>User Id</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                {selectedOption === "api1" && (
                  <>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                  </>
                )}
                {selectedOption === "api2" && (
                  <>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.body}</td>
                  </>
                )}
                {selectedOption === "api3" && (
                  <>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.userId}</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        
      )}
   </div>
  )}
   export default App2;