
const uri = 'https://api.github.com/user/repos';
let token = 'token c8c16da2dfaac4dd4931bae68c684e43b7b98ef1';
let h = new Headers();
h.append('Content-Type', 'application/json');
h.append('Authorization', 'token c8c16da2dfaac4dd4931bae68c684e43b7b98ef1');



let req = new Request(uri, {
    method: 'POST',
    headers: h,
    mode: 'cors',
    body: JSON.stringify({
        "name": "helloword",
        "description": "kldflksdflkdj",
        "homepage": "https://github.com",
        "private": false,
        "has_issues": true,
        "has_projects": true,
        "has_wiki": true
    })

});




function createRepository(repo_name, repo_desc) {
    alert("createRepository");
    console.log('desc');

    debugger;
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
            if (response.ok) {
                alert("repo created succssfully");
            }

        })
        .catch((err) => {
            alert("repo already available");
            console.log("Error:", err.message);
        })
}

module.exports = createRepository;


