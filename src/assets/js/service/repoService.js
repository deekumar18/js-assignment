const uri = 'https://api.github.com/user/repos';
let token = 'token 98229cf2a67a304315ef0bd6bf153c6824d9ac99';
let h = new Headers();
h.append('Content-Type', 'application/json');
h.append('Authorization', 'token 98229cf2a67a304315ef0bd6bf153c6824d9ac99');

let req = new Request(uri, {
    method: 'GET',
    headers: h,
    mode: 'cors'
});


//Create Repo  

export class RepoService {

    constructor() {
        this.fetchOptions = {
            headers: h,
            mode: "cors",
            cache: "default"
        };
    }

    getRepoNames() {       
        this.fetchOptions.method = "GET";
        delete this.fetchOptions.body;
        var dataPromise = fetch(uri, this.fetchOptions);
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

    createRepo(repo_name, repo_desc) {

        let req = new Request(uri, {
            method: 'POST',
            headers: h,
            mode: 'cors',
            body: JSON.stringify({
                "name": repo_name,
                "description": repo_desc,
                "homepage": "https://github.com",
                "private": false,
                "has_issues": true,
                "has_projects": true,
                "has_wiki": true
            })

        });

        fetch(req)
            .then((response) => {
                if (response.ok) {
                    alert("repo created succssfully");
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
    }  
}



