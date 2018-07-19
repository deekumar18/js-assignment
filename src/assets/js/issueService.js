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

export class IssueService {
    
    constructor() {
        this.fetchOptions = {
            headers: h,
            mode: "cors",
            cache: "default"
        };
    }

    getIssueNames(respoName) {
        this.fetchOptions.method = "GET";
        delete this.fetchOptions.body;
        console.log("*********************"+uri+respoName+"/issues");
        var dataPromise = fetch(uri+respoName+"/issues", this.fetchOptions);
        return new Promise((resolve, reject) => {
            dataPromise
                .then(res => {
                    res.json().then(data => {
                        resolve(data);
                    });
                })
                .catch(err => {
                    reject(err);
                });
        });
    }


    createIssue(respoName,title,desc) {
        console.log('desc');  
        let req = new Request(uri+respoName+"/issues", {
            method: 'POST',
            headers: h,
            mode: 'cors',
            body: JSON.stringify({
                "title": title,
                "body": desc,
                "assignees": [
                  "deekumar18"
                ],
                "labels": [
                  "bug"
                ]
              })
        
        });
        
    fetch(req)
    .then((response)=>{
        if(response.ok){
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

/*
    getIssueNames() {
        fetch(req)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('BAD HTTP STUFF');
                }
            })
            .then((jsonData) => {
                console.log(jsonData);
            })
            .catch((err) => {
                console.log("Error:", err.message);
            })
    }*/
}

