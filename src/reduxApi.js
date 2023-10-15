// // Users.js
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers } from './actions';

// const Users = () => {
//   const dispatch = useDispatch();
//   const users = useSelector(state => state.userReducer.users);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       const data = await response.json();
//       dispatch(fetchUsers(data));
//     };
//     fetchUserData();
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Users:</h1>
//       {users.map(user => (
//         <div key={user.id}>{user.name}</div>
//       ))}
//     </div>
//   );
// };

// export default Users;
// Users.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './Redux/action';

const Users = () => {
    // const [loading , setLoading] = useState(true)
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const error = useSelector((state) => state.userReducer.error);
  //const loading = useSelector((state)=> state.loading.users)
  const loading = useSelector(state => state.userReducer.loading);
  console.log("laoding state", loading)
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>


      {error && <p>{error}</p>}
     {loading ?(
        <p>loading.......please wait</p>
     ):(
       
        <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
     )
        }
    </div>
  );
};

export default Users;
