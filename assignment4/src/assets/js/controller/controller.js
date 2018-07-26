
import { RepoService } from '../service/repoService';
import { IssueService } from '../service/issueService';
import { store } from '../store/reducer';
import {getBotValue} from '../recast';
import {queryCommand} from '../recast';

//const recastVal = require('../recast');

var _repoService = new RepoService();
var _issueSevice = new IssueService();

//const createRepo = require('./assets/js/createRepo');
var tempData;
var create_repo;
let tempRepoBtn;

//temp();


// Listen for changes
store.subscribe( () =>{  
    var currentState = store.getState();  
    //var currentState = window.localStorage.getItem("redux-store")
    localStorage["redux-store"] = JSON.stringify(currentState);
    //debugger;
    render(currentState);   
   });
  
   const getWidget = (name,desc,command) =>{ return `<div class="card card-body repoWidget" id="mainDiv">
   <div class="form-group ">
           <label for="formGroupExampleInput"><h6>Repository/Issue Name</h6></label>
           <h3>"${command}"</h3>
          
           <input type="text" class="form-control" id="repoName" value="${name}">
       </div>
       <div class="form-group">
           <label for="formGroupExampleInput2">Description</label>
           <input type="text" class="form-control" id="repoDesc" placeholder="Enter Description here" value="${desc}">
       </div>
       <div class="row">
       <button class="btn btn-primary createRepoBtn" type="submit" id="createRepoBtn_${name}" onclick="createRepoToGit()">Confirm</button>
       <button class="btn btn-primary cancleRepoBtn" type="submit">Terminate</button>
       </div>
   </div>   
  </div>`};
  

  let payload = JSON.parse(window.localStorage.getItem("redux-store")) || [];
  store.dispatch({ type: 'REFRESH', payload});

  function render(currentState){
    console.log("currentstate >>>>>>>",currentState);
    let widget = "";
       
    currentState.forEach(function(element) {
        widget+= getWidget(element.name,element.title,element.command);
    });
    document.getElementById('collapseExample').innerHTML = widget;
  }

  window.createRepoToGit=()=>{
        alert("create Repo");
        var repo_name = document.getElementById("repoName").value;
        var repo_desc = document.getElementById("repoDesc").value;

        _repoService.createRepo(repo_name, repo_desc);
        //console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>"+repoNames);
  }


$("#isuLstContainer").hide();

$("#exeQueryBtn").click(function (e) {
    alert("call redux");
  

    tempRepoBtn = document.getElementById('repoInput').value;
    console.log("text val>>>>>>>>>>>>>>"+tempRepoBtn);

    getBotValue().then((result)=>{
        console.log("result>>>>>>>>>>",result.results.entities.repository[0].value);
        tempData = result.results.entities.repository[0].value;
        store.dispatch({type: "ADD_REPO", payload: {name: tempData, title : "",command: tempRepoBtn} })
    }),error=> {
        console.log("error");
    };   
    $("#collapseExample").show(); 
   // $("#isuLstContainer").hide();
}
)

$(document).ready(function () {

    console.log(">>>inside redy ");
    $("#createRepoBtn").click(function (e) {
        //alert("create Repo");
        var repo_name = document.getElementById("repoName").value;
        var repo_desc = document.getElementById("repoDesc").value;

        _repoService.createRepo(repo_name, repo_desc);
        //console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>"+repoNames);

    })


    $("#confirmRepoBtn").click(function (e) {
        alert("repo create btn");
        var issueData = [];
        _issueSevice.getIssueNames($("#selectitemContainer").val()).then(data => {
            issueData = data;
            console.log("issue names >>>>>>>>>>>>>>>>>>>>>" + issueData);

           // var repoContainer = document.getElementById("issueListContainer");
            const repoContainer = document.getElementById("isuLstContainer");
            //isuLstContainer
            var x;
            issueData.forEach(element => {
                
                var btnNo = element.number;
          
                    const li = document.createElement('li');
                    li.setAttribute('id', 'closeBtn'+btnNo);
                    const isuName = document.createElement('span');
                    const closeBtn = document.createElement('span');

                    isuName.textContent = "Issue Number-"+element.number+"---"+"Issue Title-"+element.title;
                    closeBtn.textContent = "Close Issue";

                    isuName.classList.add('list-group-item');
                    isuName.classList.add('list-group-item-info');
                    closeBtn.classList.add('btn-primary');
                                       
                    li.appendChild(isuName);
                    li.appendChild(closeBtn);
                  
                    repoContainer.appendChild(li);

                $("#repoNameModel").modal("hide");
               // $("#isuLstContainer").show();
            });
        });
    })



    $("#postIssueBtn").click(function (e) {
        //alert("create Issue");
        var repoName = $("#selectitemContainer").val();
        var issue_title = $("#issueTitle").val();
        var issue_desc = $("#issueDesc").val();
        _issueSevice.createIssue(repoName, issue_title, issue_desc);
    })

//$(document).on("click", "#btnCreateRepo", function() {
    
    $(document).on("click",".cancleRepoBtn",function (e) {
        alert("cancle cliked");
        $(this).parents('.repoWidget').hide();
    })
/*
    $("#closeIssueBtn").(function (e) {
        alert("close Issue");

        var repoName = $("#selectitemContainer").val();
        var issue_title = $("#issueTitle").val();
        var issue_desc = $("#issueDesc").val();
        _issueSevice.closeIssue(respoName,title,issueNo);
    })
*/


});
