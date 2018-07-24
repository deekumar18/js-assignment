import './assets/scss/app.scss';
import 'popper.js';
import "bootstrap";
import './assets/media/logo.png';
import { RepoService } from './assets/js/repoService'
import { IssueService } from './assets/js/issueService'


const recastVal = require('./assets/js/recast');

var _repoService = new RepoService();
var _issueSevice = new IssueService();

//const createRepo = require('./assets/js/createRepo');
var tempData;
var create_repo;

//temp();

$("#isuLstContainer").hide();

$("#exeQueryBtn").click(function (e) {
    tempData = recastVal();

}
)

$(document).ready(function () {

    $("#createRepoBtn").click(function (e) {
        //alert("create Repo");
        var repo_name = document.getElementById("repoName").value;
        var repo_desc = document.getElementById("repoDesc").value;

        _repoService.createRepo(repo_name, repo_desc);
        //console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>"+repoNames);

    })


    $("#confirmRepoBtn").click(function (e) {
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
                $("#isuLstContainer").show();
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

/*
$(document).ready(function () {
  
    $("#confirmRepoBtn").click(function (e) {
        alert("create Repo");        
        var repo_name = document.getElementById("repoName").value;
        var repo_desc = document.getElementById("repoDesc").value;
        var issueData = [];
        _issueSevice.getIssueNames().then(data => {
            issueData = data;
            console.log("issue names >>>>>>>>>>>>>>>>>>>>>" + issueData);
        });
    })

});
*/


