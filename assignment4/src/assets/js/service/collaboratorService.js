
const uri = 'https://api.github.com/repos/deekumar18/';
let token = 'token afa9f874c515e260bdf3f82cb18524b472c5aeb2';
let h = new Headers();
h.append('Content-Type', 'application/json');
h.append('Authorization', 'token afa9f874c515e260bdf3f82cb18524b472c5aeb2');
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
}