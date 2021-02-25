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
    let c= document.getElementById("inputState3").value;
    // let listimage= document.getElementById("formFile").value;

    let e = document.getElementById("seats").value;
    let f = document.getElementById("price").value;
    let g = document.getElementById("date").value;
    let id=Math.floor(Math.random()* 100);
    let matches={id:id, team1:a,team2:b,salle:c , img:"",nbplace:e,prix:f,date:g}
    console.log(matches.img);
    z.push(matches);
    localStorage.setItem("matches",JSON.stringify(z));
    listimage=[];
    console.log(g);
    window.open("http://127.0.0.1:5500/admin.html")
}
function logOut() {
    
    localStorage.removeItem("UserConnecté");
  
}

