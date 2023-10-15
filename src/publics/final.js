// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // function AppF() {
// //   const [users, setUsers] = useState([]);
// //   const [selectedUser, setSelectedUser] = useState('');
// //   const [selectedUserDetails, setSelectedUserDetails] = useState(null);


// //   useEffect(() => {
// //     axios.get('https://jsonplaceholder.typicode.com/users')
// //       .then(response => {
// //         setUsers(response.data);
// //       })
// //       .catch(error => {
// //         console.error('Error fetching users:', error);
// //       });
// //   }, []);

// // //   const handleUserChange = (event) => {
// // //     setSelectedUser(event.target.value);
// // //   };
// //   const handleUserChange = (event) => {
// //     const userId = event.target.value;
  
// //     if (userId) {
// //       axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
// //         .then(response => {
// //           setSelectedUserDetails(response.data);
// //         })
// //         .catch(error => {
// //           console.error('Error fetching user details:', error);
// //         });
// //     } else {
// //       setSelectedUserDetails(null);
// //     }
  
// //     setSelectedUser(userId);
// //   };
  
// //   return (
// //     <div className="App">
// //       <h1>Dropdown App</h1>
// //       {/* <select value={selectedUser} onChange={handleUserChange}>
// //         <option value="">Select a user</option>
// //         {users.map(user => (
// //           <option key={user.id} value={user.id}>{user.name}</option>
// //         ))}
// //       </select> */}
// //       <div className="App">
// //   <h1>Dropdown App</h1>
// //   <select value={selectedUser} onChange={handleUserChange}>
// //     <option value="">Select a user</option>
// //     {users.map(user => (
// //       <option key={user.id} value={user.id}>{user.name}</option>
// //     ))}
// //   </select>

// //   {selectedUserDetails && (
// //     <div>
// //       <h2>User Details</h2>
// //       <p>Name: {selectedUserDetails.name}</p>
// //       <p>Email: {selectedUserDetails.email}</p>
// //       <p>Phone: {selectedUserDetails.phone}</p>
// //       {/* Display other details as needed */}
// //     </div>
// //   )}
// // </div>

// //     </div>
// //   );
// // }

// // export default AppF;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function AppF() {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState('');
//   const [selectedUserDetails, setSelectedUserDetails] = useState(null);
//   const [userDetailsCache, setUserDetailsCache] = useState({});

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/users')
//       .then(response => {
//         setUsers(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching users:', error);
//       });
//   }, []);

//   const handleUserChange = (event) => {
//     const userId = event.target.value;

//     if (userId) {
//       if (userDetailsCache[userId]) {
//         setSelectedUserDetails(userDetailsCache[userId]);
//       } else {
//         axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
//           .then(response => {
//             const userDetails = response.data;
//             setSelectedUserDetails(userDetails);
//             setUserDetailsCache(prevCache => ({
//               ...prevCache,
//               [userId]: userDetails
//             }));
//             console.log(userDetails)
//           })
//           .catch(error => {
//             console.error('Error fetching user details:', error);
//           });
//       }
//     } else {
//       setSelectedUserDetails(null);
//     }

//     setSelectedUser(userId);
//   };

//   return (
//     <div className="App">
//       <h1>Dropdown App</h1>
//       <select value={selectedUser} onChange={handleUserChange}>
//         <option value="">Select a user</option>
//         {users.map(user => (
//           <option key={user.id} value={user.id}>{user.name}</option>
//         ))}
//       </select>

//       {selectedUserDetails && (
//         <div>
//           <h2>User Details</h2>
//           <p>Name: {selectedUserDetails.name}</p>
//           <p>Email: {selectedUserDetails.email}</p>
//           <p>Phone: {selectedUserDetails.phone}</p>
//           {/* Display other details as needed */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default AppF;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AppF() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      // try {
      //   const response = await axios.get('https://swapi.dev/api/people/');
      //   setCharacters(response.data.results);
      try {
        const response = await fetch('https://swapi.dev/api/people/');
        const data = await response.json();
        setCharacters(data.results);
        
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Films</th>
            <th>Vehicles</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character, index) => (
            <tr key={index}>
              <td>{character.name}</td>
              <td>
                {character.films.map((film, index) => (
                  <p key={index}>{film}</p>
                ))}
              </td>
              {/* <td>
                {character.starships.map((star, index) => (
                  <p key={index}>{star}</p>
                ))}
              </td> */}
              <td>
                {character.vehicles.length > 0 ? (
                  character.vehicles.map((vehicle, index) => (
                    <p key={index}>{vehicle}</p>
                  ))
                ) : (
                  <p>N/A</p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppF;
// const response = await fetch('https://swapi.dev/api/people/');
// const data = await response.json();

// const charactersWithDetails = await Promise.all(
//   data.results.map(async (character) => {
//     const films = await Promise.all(
//       character.films.map(async (filmUrl) => {
//         const filmResponse = await fetch(filmUrl);
//         const filmData = await filmResponse.json();
//         return filmData.title;

//       })
//     );

//     return {
//       name: character.name,
//       films: films,
//     };
//   })
// );

// console.log(charactersWithDetails);

// //const fetchCharacterData = async () => {
//   try {
//     const response = await fetch('https://swapi.dev/api/people/');
//     const charactersWithDetails = await Promise.all(
//       response.data.results.map(async (character) => {
//         const films = await Promise.all(
//           character.films.map(async (filmUrl) => {
//             const filmResponse = await axios.get(filmUrl);
//             return filmResponse.data.title;
//           })
//         );

//         const vehicles = await Promise.all(
//           character.vehicles.map(async (vehicleUrl) => {
//             const vehicleResponse = await axios.get(vehicleUrl);
//             return vehicleResponse.data.name;
//           })
//         );

//         return {
//           ...character,
//           films,
//           vehicles,
//         };
//       })
//     );
//     setCharacters(charactersWithDetails);
//   } catch (error) {
//     console.error('Error fetching character data:', error);
//   }
// };

// fetchCharacterData();
// }, []);