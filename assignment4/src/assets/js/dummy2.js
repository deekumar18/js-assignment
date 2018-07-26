import 'jquery';
import 'popper.js';
import 'bootstrap';
import {createStore} from 'redux';


const ADD_TODO = 'ADD_TODO';
const states = [];


// Reducer
function TodoApp(state={items:[]}, action) {
 switch(action.type) {
   case 'ADD_ITEM':
     const s = {items: [...state.items, action.item]}
     states.push(s);
     return s;
   default:
     return state;
 }
}

// Instantiating the store
const store = createStore(TodoApp, {
 items:[  ]
});

// Trigger Events

document.getElementById('submit').addEventListener('click',function(){
 const data = document.getElementById('input').value;
 console.log(data);
 store.dispatch({type: 'ADD_ITEM', item: data.value});
})

// Listen for changes
store.subscribe(render);

function render(){
 
 const data = document.getElementById('input').value;

 // let item = document.createElement('li');  
 // item.innerHTML = '<li>'+data+'</li>';
 // document.getElementById('itemsList').appendChild(item);

 let item = document.createElement('input');
 item.id = 'items';
 item.type = 'checkbox';
 item.innerHTML = data;
 document.getElementById('listForm').appendChild(item);


 document.getElementById('input').value = null;

}