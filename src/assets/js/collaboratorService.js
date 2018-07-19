const uri = 'https://api.github.com/repos/deekumar18/';
let token = 'token c8c16da2dfaac4dd4931bae68c684e43b7b98ef1';
let h = new Headers();
h.append('Content-Type', 'application/json');
h.append('Authorization', 'token c8c16da2dfaac4dd4931bae68c684e43b7b98ef1');
let req = new Request(uri, {
    method: 'GET',
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
        alert(">>>>>Collaborator");
        let req = new Request(uri+repoName+"/collaborators/"+otherUser+"?permission=admin", {
            method: 'PUT',
            headers: h,
            mode: 'cors',
        });
        
    fetch(req)
    .then((response)=>{
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



}