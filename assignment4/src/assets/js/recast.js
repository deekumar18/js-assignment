
import { RepoService } from './service/repoService'
import { CollaboratorService } from './service/collaboratorService'
import { getModelView } from './view/issueModelView'
//const reponames = require('./getRepoService');
var _repoService = new RepoService();
var _collaboratorService = new CollaboratorService();
var _getModelView = new getModelView();

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
var queryCommand;

export function getBotValue() {
    queryCommand = document.getElementById('repoInput').value;
    //alert(queryCommand);
    //console.log('desc');  
    let promise = new Promise((resolve, reject) => {
        fetch(uri + queryCommand, {
            method: "post",
            headers: {
                'Authorization': 'Token 67051a0a2cc27d6f684995b8c6590db1',
                'Content-Type': 'application/json'
            }
        }).then(
            res => res.json()
        ).then(json => {
            console.log(json);
            resolve(json);
        }, error => {
            reject(new ResponseError('Service Error' + error.message));
        })
    });
    return promise;
}

//exports default getBotValue;
