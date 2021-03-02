function logOut() {
    
    localStorage.removeItem("UserConnecté");
  
}

var p =localStorage.getItem("matches")||[];
var z=JSON.parse(p)
var img = "";
var listimage = [];
function openFile(event) {

    var input = event.target;

    var reader = new FileReader();

    reader.onload = function () {

        img = reader.result;
        console.log(img);
        listimage.push(img);



    };
    reader.readAsDataURL(input.files[0]);
}
function AddMatch(){
   
    
    let a = document.getElementById("inputState1").value;
    let b = document.getElementById("inputState2").value;
console.log(b ,"select team2");
    let c= document.getElementById("inputState3").value;


    let e = document.getElementById("seats").value;
    let f = document.getElementById("price").value;
    let g = document.getElementById("date").value;
    let id=Math.floor(Math.random()* 100);
    let matches={id:id,team1:a,team2:b,salle:c,img:listimage,nbplace:e,prix:f,date:g}
    console.log(matches.img);
    z.push(matches);
    localStorage.setItem("matches",JSON.stringify(z));
    listimage=[];
    console.log(g);
    window.location.replace("admin.html")
}

function SelectMatch() {

 var team =["Lakers","Celtic","Warriors","Raptors","Cleveland","Bucks","Heat","Spurs","Clippers","Dallas","Chicago","Philadelphie","Nuggets","Brooklyn"];

let a = document.getElementById("inputState1").value;
// alert (a);

team.forEach((x,index) => {
    if(a==x){
        console.log(index);
        team.splice(index ,1);
    }
})


    var elm = document.getElementById('inputState2'), // get the select
        df = document.createDocumentFragment(); // create a document fragment to hold the options while we create them
    for (let i = 0; i < team.length; i++) { // loop, i like 42.
        var option = document.createElement('option'); // create the option element
        option.value = team[i]; // set the value property
        option.appendChild(document.createTextNode(team[i])); // set the textContent in a safe way.
        df.appendChild(option); // append the option to the document fragment
    }
    elm.appendChild(df); // append the document fragment to the DOM. this is the better way rather than setting innerHTML a bunch of times (or even once with a long string)


console.log(team);
team=[];
}

