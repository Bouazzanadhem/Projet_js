function deconect(){
    localStorage.removeItem("UserConnecté");
}
    var user = localStorage.getItem("UserConnecté");
    var usser = JSON.parse(user)
    var d = new Date();
    var n = d.getDate();
    var query = window.location.search.substring(1);
    var vars = query.split("=");
    var ID= vars[1];
    var p =localStorage.getItem("matches");
    var matchs=JSON.parse(p)
function addmatch(){
    document.getElementById("name").innerHTML = usser.fname
    document.getElementById("team").innerHTML = usser.team    
    console.log("id =",typeof ID);
    let reserv=matchs.find(x=>x.id == Number(ID));
    // let reserv=matchs.find(x=>console.log(x.id));
    console.log(reserv);
    document.getElementById("match").value= reserv.team1 + "VS" + reserv.team2;
    document.getElementById("arena").value=reserv.salle;
    document.getElementById("nbrplace").value= reserv.nbplace;
    let reservation=`
    <div class="w3l-right-info">
        <h3 class="title-big" id="match">${reserv.team1} VS ${reserv.team2}</h3>
        <h5 class="" id="arena">${reserv.salle}</h5>
        <p class="" id="date">${reserv.date}</p>
        <p class="" id="nbrplace">Nombre de place : ${reserv.nbplace}</p>
        <div class="input-group mb-3">
            <input type="number" class="form-control" placeholder="nbre Ticket" max="6" min="1" oninput="calcul()" id="ticket">                          
            <input type="number" class="form-control" placeholder="${reserv.prix}" value="${reserv.prix}" id="prix" disabled>
        </div>
        <a href="mesreservation.html" class="btn btn-style btn-primary" style="margin: auto 150px;" onclick="reservation()">Reserver</a>
    </div>`

    window.open('reservation.html', '_blank');
    document.getElementById("reservmatch").innerHTML= reservation
return document.getElementById("prix").value;
}
    var prixsingle = addmatch()
    console.log(prixsingle);
function calcul(){
    let nbre = document.getElementById("ticket").value;
    let y=prixsingle;
    // console.log(x);
    // console.log(nbre);
    let prixtotal=Number(y)*Number(nbre);
    // console.log(reserv);
    document.getElementById("prix").value = prixtotal;
}

function reservation(){
    let p =localStorage.getItem("reservmatch")||[];
    let z=JSON.parse(p)
    let reserv= document.getElementById("prix").value;
    let nbre = document.getElementById("ticket").value;
    console.log(usser.id);
    console.log(reserv);
    console.log(nbre);
    let reservmatch={idmatch:ID,iduser:usser.id,reservnbre:nbre,reservprix:reserv,etat:"false"}
    z.push(reservmatch);
    localStorage.setItem("reservmatch",JSON.stringify(z));
}   