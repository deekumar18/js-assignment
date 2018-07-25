import {createStore} from 'redux';

// Reducers
function addRepoReducer(state=[], action) {
 
  switch(action.type) {
    case 'ADD_REPO':
   return [...state,action.payload];
    default:
      return state;
  }
}


// Instantiating the store
export const store = createStore(addRepoReducer,{repo: []});


// Listen for changes
store.subscribe( () =>{
  //alert("Subscription  received");
  var currentState = store.getState();
  
  console.log(JSON.stringify(currentState));
  console.log("Subscription  data: " + currentState.repo);
 
  localStorage["redux-store"] = JSON.stringify(currentState);
 
 
 });



/*function render(){
 
 const widget = document.getElementById('collapseExample').value;

 widget.innerHTML = `<div class="card card-body" id="mainDiv">
 <div class="form-group">
         <label for="formGroupExampleInput"><h6>Repository/Issue Name</h6></label>
         <input type="text" class="form-control" id="repoName">
     </div>
     <div class="form-group">
         <label for="formGroupExampleInput2">Description</label>
         <input type="text" class="form-control" id="repoDesc" placeholder="Enter Description here">
     </div>

 </div>
 <button class="btn btn-primary" type="submit" id="createRepoBtn">Confirm</button>
 <button class="btn btn-primary" type="submit" id="cancleRepoBtn">Terminate</button>`;

}*/
