function deconect(){
    localStorage.removeItem("UserConnecté");
}
var user = localStorage.getItem("UserConnecté");
var usser = JSON.parse(user)
var d = new Date();
var n = d.getDate();

function addmatch(){
    document.getElementById("name").innerHTML = usser.fname
    document.getElementById("team").innerHTML = usser.team
}
let x = document.getElementById("prix").value;

function calcul(){
    let nbre = document.getElementById("ticket").value;
    let y=x;
    // console.log(x);
    // console.log(nbre);
    let reserv=Number(y)*Number(nbre);
    // console.log(reserv);
    document.getElementById("prix").value = reserv;
}

function reservation(){
    let p =localStorage.getItem("reservmatch")||[];
    let z=JSON.parse(p)
    let reserv= document.getElementById("prix").value;
    let nbre = document.getElementById("ticket").value;
    console.log(usser.id);
    console.log(reserv);
    console.log(nbre);
    let reservmatch={idmatch:"46",iduser:usser.id,reservnbre:nbre,reservprix:reserv}
    z.push(reservmatch);
    localStorage.setItem("reservmatch",JSON.stringify(z));
}