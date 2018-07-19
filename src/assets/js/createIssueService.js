
const uri= 'https://api.github.com/repos/deekumar18/Hello-World123/issues';
let token = 'token c8c16da2dfaac4dd4931bae68c684e43b7b98ef1';
let h = new Headers();
h.append('Content-Type','application/json');
h.append('Authorization','token c8c16da2dfaac4dd4931bae68c684e43b7b98ef1');
let req = new Request(uri, {
    method: 'POST',
    headers: h,
    mode: 'cors',
    body: JSON.stringify({
        "title": "Found a bug",
        "body": "I'm having a problem with this.",
        "assignees": [
          "deekumar18"
        ],
        "labels": [
          "bug"
        ]
      })

});

function createIssue() {
    console.log('desc');
    
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

module.exports = createIssue;


