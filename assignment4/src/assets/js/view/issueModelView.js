export class getModelView {

    constructor(){
        
    }
    getModelView(repoNames,x,repoContainer){
        repoNames.forEach(element => {

            x = document.createElement("option");
            x.setAttribute("id", element.name);
            x.setAttribute("value", element.name);
            var t = document.createTextNode(element.name);
            x.appendChild(t);


            repoContainer.appendChild(x);
            $('#repoNameModel').modal();
        });
    }
}