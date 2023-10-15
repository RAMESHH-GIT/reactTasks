// import { createStore } from 'redux';
// import  { userReducer } from './Redux/reducer';

// const store = createStore(userReducer);

// export default store;
// store.js
// store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './Redux/reducer';

const rootReducer = combineReducers({
  userReducer: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
