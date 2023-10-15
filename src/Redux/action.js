// actions.js
// export const fetchUsers = (users) => ({
//     type: 'FETCH_USERS',
//     payload: users,
//   });
  // actions.js
// export const fetchUsers = () => {
//     return async (dispatch) => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         dispatch({
//           type: 'FETCH_USERS_SUCCESS',
//           payload: data,
//         });
//       } catch (error) {
//         dispatch({
//           type: 'FETCH_USERS_ERROR',
//           payload: error.message,
//         });
//       }
//     };
//   };
  
// actions.js
// actions.js
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR,
  } from './actionTypes';

  import axios from 'axios'
  
  export const fetchUsersRequest = () => {
    return {
      type: FETCH_USERS_REQUEST,
    };
  };
  
  export const fetchUsersSuccess = (users) => {
    return {
      type: FETCH_USERS_SUCCESS,
      payload: users,
    };
  };
  
  export const fetchUsersError = (error) => {
    return {
      type: FETCH_USERS_ERROR,
      payload: error,
    };
  };
  
export const fetchUsers = () => {
    return (dispatch) => {
      dispatch(fetchUsersRequest());
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          const users = response.data;
          dispatch(fetchUsersSuccess(users));
        })
        .catch((error) => {
          const errorMsg = error.message;
          //dispatch(fetchUsersError(errorMsg));
        });
    };
  };
  