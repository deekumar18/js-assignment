import {createStore} from 'redux';

const states = [];

// Reducer
function TodoApp(state={items:{}}, action) {
  switch(action.type) {
    case 'ADD_ITEM':
      const s = {items: Object.assign({},...state.items, action.item)};
      states.push(s);
      return {items: Object.assign({},...state.items, action.item)};
    default:
      return state;
  }
}

// Instantiating the store
const store = createStore(TodoApp, {
  items:[
    "Learn Redux",
    "Refactor assignment with Redux"
  ]
});

// Listen for changes
store.subscribe(() => {
  console.log(store.getState().items);
});

// Trigger Events
store.dispatch({type: 'ADD_ITEM', item: "Submit Assignment"});