// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [filterText, setFilterText] = useState("");

//   const getUsers = async () => {
//     const response = await axios.get("https://reqres.in/api/users");
//     setUsers(response.data.data);
//   };

//   const deleteUser = async (userId) => {
//     await axios.delete(`https://reqres.in/api/users/${userId}`);
//     const updatedUsers = users.filter((user) => user.id !== userId);
//     setUsers(updatedUsers);
//     setFilteredUsers(updatedUsers);
//   };

//   const handleFilterChange = (event) => {
//     const text = event.target.value.toLowerCase();
//     const filtered = users.filter((user) =>
//       user.first_name.toLowerCase().includes(text)
//     );
//     setFilterText(text);
//     setFilteredUsers(filtered);
//   };

//   useEffect(() => {
//     getUsers();
//   }, [users]);

//   useEffect(() => {
//     setFilteredUsers(users);
//   }, [users]);

//   return (
//     <>
//       <div>
//         <button onClick={getUsers}>Get Users</button>
//         <input
//           type="text"
//           value={filterText}
//           onChange={handleFilterChange}
//           placeholder="Filter by name..."
//         />
//       </div>
//       <ul>
//         {filteredUsers.map((user) => (
//         <li key={user.id}>
//             {user.first_name} {user.last_name}
//             <button onClick={() => deleteUser(user.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default UserList;
import React, { useState } from "react";
import axios from "axios";
import UserTable from "./Api2Table";

const UserList = () => {
  const [userData, setUserData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const getUserData = async () => {
    const response = await axios.get("https://reqres.in/api/users");
    setUserData(response.data.data);
    setIsFetching(true)
  };

  return (
    <div>
      <button onClick={getUserData} disabled={isFetching}> {isFetching ? "Data Fetched" : "Get User Data"}</button>
      
      
      {userData && <UserTable propref={userData} />}
      
      {userData && (
        <ul>
          {userData.map((user) => (
            <li key={user.id}>
              {user.first_name} {user.last_name}
            </li>
          ))}
        </ul>
        
      )}
    </div>
  );
};

export default UserList;
