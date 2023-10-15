// import React, { useState, useEffect } from "react";

// const AppTask = () => {
//   const [selectedOption, setSelectedOption] = useState("");
//   const [data, setData] = useState(null);
//   const [optionsCache, setOptionsCache] = useState({});

//   const fetchData = async (option) => {
//     try {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/users/${option}`);
//       const result = await response.json();
//       setData(result);
//       setOptionsCache((prevCache) => ({
//         ...prevCache,
//         [option]: result,
//       }));
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleOptionChange = (event) => {
//     const selectedValue = event.target.value;
//     setSelectedOption(selectedValue);
//   };

//   useEffect(() => {
//     if (selectedOption) {
//       if (optionsCache[selectedOption]) {
//         // If the selected option is already in the cache, use the cached data
//         setData(optionsCache[selectedOption]);
//       } else {
//         if (!data) {
//             // Fetch data from the API only if it's not already fetched
//             fetchData(selectedOption);
//           }
//         // Fetch data from the API and store it in the cache
//        // fetchData(selectedOption);
//       }
//     }
//   }, [selectedOption, optionsCache]);

//   return (
//     <div>
//       <select value={selectedOption} onChange={handleOptionChange}>
//         <option value="">Select a user</option>
//         <option value="1">User 1</option>
//         <option value="2">User 2</option>
//         <option value="3">User 3</option>
//         {/* ...and so on */}
//       </select>
//       {data && (
//         <div>
//           <h2>{data.name}</h2>
//           <p>Email: {data.email}</p>
//           <p>Phone: {data.phone}</p>
//           {/* Render other user details as needed */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AppTask;
import React, { useState, useEffect } from "react";

const AppTask = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [data, setData] = useState(null);
  const [fetchedOptions, setFetchedOptions] = useState([]);

  const fetchData = async (option) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${option}`);
      const result = await response.json();
      setData(result);
      setFetchedOptions((prevOptions) => [...prevOptions, option]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (selectedOption && !fetchedOptions.includes(selectedOption)) {
      fetchData(selectedOption);
    }
  }, [selectedOption, fetchedOptions]);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select a user</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
        {/* ...and so on */}
      </select>
      {data && (
        <div>
          <h2>{data.name}</h2>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phone}</p>
          {/* Render other user details as needed */}
        </div>
      )}
    </div>
  );
};

export default AppTask;
