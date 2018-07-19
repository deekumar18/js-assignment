import './assets/scss/app.scss';
import 'popper.js';
import "bootstrap";
import './assets/media/logo.png';
import { RepoService } from './assets/js/repoService'
import { IssueService } from './assets/js/issueService'


const temp = require('./assets/js/createIssueService');
const recastVal = require('./assets/js/recast');

var _repoService = new RepoService();
var _issueSevice = new IssueService();

//const createRepo = require('./assets/js/createRepo');
var tempData;
var create_repo;

//temp();

$("#exeQueryBtn").click(function (e) {
    tempData = recastVal();

}
)

$(document).ready(function () {

    $("#createRepoBtn").click(function (e) {
        alert("create Repo");
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

            var repoContainer = document.getElementById("issueListContainer");
            var x;
            issueData.forEach(element => {
                console.log("issue names >>>>>>>>>>>>>>>>>>>>>" + element.number + "---" + element.title);
                x = document.createElement("p");
                var textNode = document.createTextNode("Issue Number-" + element.number + "---" + "Issue Title-" + element.title);

                //x.setAttribute("value", "Issue Number-"+element.number+"---"+"Issue Title-"+element.title);
                x.appendChild(textNode);
                //x.appendChild(`<button type="submit" class="btn btn-primary">CLOSE ISSUE</button>`);
                var temp = "Issue Number-" + element.number + "---" + "Issue Title-" + element.title;
                x.innerHTML = temp + `<a id="closeIssueBtn" href="#" style="
                  float: right;
                    "> Close Issue</a>`;
                // var t = document.createTextNode("value", "Issue Number-"+element.id+"---"+"Issue Title-"+element.title);
                // x.appendChild(t);
                repoContainer.appendChild(x);

                $("#repoNameModel").modal("hide");
            });
        });
    })



    $("#postIssueBtn").click(function (e) {
        alert("create Issue");

        var repoName = $("#selectitemContainer").val();
        var issue_title = $("#issueTitle").val();
        var issue_desc = $("#issueDesc").val();
        _issueSevice.createIssue(repoName, issue_title, issue_desc);
    })





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


