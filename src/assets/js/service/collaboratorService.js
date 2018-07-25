
const uri = 'https://api.github.com/repos/deekumar18/';
let token = 'token 98229cf2a67a304315ef0bd6bf153c6824d9ac99';
let h = new Headers();
h.append('Content-Type', 'application/json');
h.append('Authorization', 'token 98229cf2a67a304315ef0bd6bf153c6824d9ac99');
let req = new Request(uri, {
    method: 'PUT',
    headers: h,
    mode: 'cors'
});

//https://api.github.com/repos/anokha777/first-git-api-repo/collaborators/swat1508?permission=admin

export class CollaboratorService {
    
    constructor() {
        this.fetchOptions = {
            headers: h,
            mode: "cors",
            cache: "default"
        };
    }



    addCollaborator(repoName, otherUser) {
        console.log('desc');  
        let reqStr = "https://api.github.com/repos/deekumar18/"+repoName+"/collaborators/"+otherUser;
        debugger;
        console("url>>>>>>>>>>>>>>>>>>"+reqStr);
        let req = new Request(reqStr, {
            method: 'PUT',
            headers: h,
            mode: 'cors',
        });
        
    fetch(req)
    .then((response)=>{
        if(response.ok){
            alert('collaporation made successfully!');
            return response.json();
        } else{
            throw new Error('BAD HTTP STUFF');
        }
    })
    .then((jsonData)=>{
        console.log(jsonData);
    })
    .catch((err)=> {
        console.log("Error:",err.message);
    })
    }

    /*addCollaborator(repoName, otherUser) {
        debugger;
        alert(">>>>>Collaborator");
        let reqStr = "https://api.github.com/repos/deekumar18/"+repoName+"/collaborators/"+otherUser;
        console("request string>>>>>>>>>>>"+reqStr);
        let req = new Request(reqStr, {
            //https://api.github.com/repos/deekumar18/helloword/collaborators/apodi
            method: 'PUT',
            headers: h,
            mode: 'cors',
        });
        
    fetch(req)
    .then((response)=>{
        debugger;
        alert('with in response');
        if(response.ok){
            alert("collaboration successfully");
            return response.json();
        } else{
            throw new Error('BAD HTTP STUFF');
        }
    })
    .then((jsonData)=>{
        console.log(jsonData);
    })
    .catch((err)=> {
        console.log("Error:",err.message);
    })
    }


    addCollaborator(repoName, otherUser) {

    }

*/

}