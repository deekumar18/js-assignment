
import { RepoService } from './repoService'
import { CollaboratorService } from './collaboratorService'
//const reponames = require('./getRepoService');
var _repoService = new RepoService();
var _collaboratorService = new CollaboratorService();

const uri = 'https://api.recast.ai/v2/request?text=';
let token = 'Token 67051a0a2cc27d6f684995b8c6590db1';
let repoName = '';
let otherUser = '';
let h = new Headers();
h.append('Content-Type', 'application/json');
h.append('Authorization', token);
let req = new Request(uri, {
    method: 'POST',
    headers: h,
});


function getBotValue() {
    var queryCommand = document.getElementById('repoInput').value;
    alert(queryCommand);
    //console.log('desc'); 


    if (queryCommand.search('issue') > -1) {
        
        var repoNames = [];
        _repoService.getRepoNames()
            .then(data => {               
                repoNames = data;
                console.log("reponames >>>>>>>>>>>>>>>>>>>>>" + repoNames);
                var repoContainer = document.getElementById("selectitemContainer");
                var x;               
                repoNames.forEach(element => {

                    x = document.createElement("option");
                    x.setAttribute("id", element.name);
                    x.setAttribute("value", element.name);
                    var t = document.createTextNode(element.name);
                    x.appendChild(t);


                    repoContainer.appendChild(x);
                    $('#repoNameModel').modal();
                });
            })
    }

    if(queryCommand.search('collaborator') > -1){      
       
           fetch(uri+queryCommand, {
           method: "post",
           headers: {
             'Authorization': 'Token 67051a0a2cc27d6f684995b8c6590db1',
             'Content-Type': 'application/json'
           }}).then((response) => {
               debugger;
               response.json().then(response => {              
               repoName = response.results.entities.repository[0].value; 
               otherUser = response.results.entities.user[0].value;       
               console.log(repoName);
               console.log(otherUser);             
            }).catch(function() {
               console.log("There is some error in resolving name of repository from sentence...");
            });
         }).catch(function() {
           console.log("There is some error in recast.ai api call...");
        });
        _collaboratorService.addCollaborator(repoName, otherUser); 
    }

    fetch(uri + queryCommand, {
        method: "post",
        headers: {
            'Authorization': 'Token 67051a0a2cc27d6f684995b8c6590db1',
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        response.json().then(response => {
            console.log(response);
            repoName = response.results.entities.repository[0].value;
            console.log(repoName);
            //document.getElementById("repository-name").value = repoName;
            document.getElementById("repoName").value = repoName;
        }).catch(function () {
            console.log("There is some error in resolving name of repository from sentence...");
        });
    }).catch(function () {
        console.log("There is some error in recast.ai api call...");
    });
}

module.exports = getBotValue;

