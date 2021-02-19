var p =localStorage.getItem("matches")||[];
var z=JSON.parse(p)

function AddMatch(){
   
    
    let a = document.getElementById("inputState1").value;
    let b = document.getElementById("inputState2").value;
    let c= document.getElementById("inputState3").value;
    let d = document.getElementById("formFile").value;
    let e = document.getElementById("seats").value;
    let f = document.getElementById("price").value;
    let g = document.getElementById("date").value;
    let id=Math.floor(Math.random()* 100);
    let matches={id:id, team1:a,team2:b,salle:c , image:d,nbplace:e,prix:f,date:g}
    z.push(matches);
    localStorage.setItem("matches",JSON.stringify(z));
    console.log(g);

}