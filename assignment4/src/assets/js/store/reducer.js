import {createStore} from 'redux';

// Reducers
function addRepoReducer(state=[], action) {
 
  switch(action.type) {
    case 'ADD_REPO':
    return [...state,action.payload];
  case 'REFRESH':
    return action.payload;
    default:
      return state;
  }
}


// Instantiating the store
export const store = createStore(addRepoReducer,[]);


