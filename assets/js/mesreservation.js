function deconect(){
    localStorage.removeItem("UserConnecté");
}
var p =localStorage.getItem("matches");
var matchs=JSON.parse(p)
var user = localStorage.getItem("UserConnecté");
var usser = JSON.parse(user)
var q =localStorage.getItem("reservmatch");
var matchreserved = JSON.parse(q)
console.log(matchs);
console.log(usser);
console.log(matchreserved);
var d = new Date();
var j = d.getDate();
var m = d.getMonth();
function addmatch(){
    if (usser == null) {
        window.location.replace("login.html")
    }else{
        document.getElementById("name").innerHTML = usser.fname
    document.getElementById("team").innerHTML = usser.team
    console.log(usser.team);
    let match =``;
    matchreserved.forEach(x => {
        if (x.iduser == usser.id) {
            matchs.forEach(y => {
                if (Number(m+1) > Number(y.date[5]+y.date[6])){
                    if (x.idmatch == y.id) {
                        match +=`
                    <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
                        <div class="grids5-info">
                            <span class="posted-date" style="background-color: red;">
                                <a >
                                <span class="small">${y.date[0]+y.date[1]+y.date[2]+y.date[3]}</span>
                                <span class="big">${y.date[8]+y.date[9]}</span>
                                <span class="small">${y.date[5]+y.date[6]}</span>
                                </a>
                            </span>
                            <div class="rentext-listing-category"><span style="background-color: red;">Done</span></div>
                            <a  class="d-block zoom"><img src="assets/images/p1.jpg" alt=""
                            class="img-fluid news-image" /></a>
                            <div class="blog-info">
                            <a href="#category" class="category">${y.salle}</a>
                            <h4><a href="#blog-single">${y.team1} VS ${y.team2}</a></h4>
                            <p>Nbre de place reservé : ${x.reservnbre} </p>
                            <p>Prix Total : ${x.reservprix}$ </p>
                            </div>
                        </div>
                    </div>`   
                    }
                }else if (Number(m+1) == Number(y.date[5]+y.date[6])) {
                    if ((x.idmatch == y.id) && (j >= Number(y.date[8]+y.date[9]))){
                        match +=`
                    <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
                        <div class="grids5-info">
                            <span class="posted-date" style="background-color: red;">
                                <a >
                                <span class="small">${y.date[0]+y.date[1]+y.date[2]+y.date[3]}</span>
                                <span class="big">${y.date[8]+y.date[9]}</span>
                                <span class="small">${y.date[5]+y.date[6]}</span>
                                </a>
                            </span>
                            <div class="rentext-listing-category"><span style="background-color: red;">Done</span></div>
                            <a  class="d-block zoom"><img src="assets/images/p1.jpg" alt=""
                            class="img-fluid news-image" /></a>
                            <div class="blog-info">
                            <a href="#category" class="category">${y.salle}</a>
                            <h4><a href="#blog-single">${y.team1} VS ${y.team2}</a></h4>
                            <p>Nbre de place reservé : ${x.reservnbre} </p>
                            <p>Prix Total : ${x.reservprix}$ </p>
                            </div>
                        </div>
                    </div>`
                }else if ((x.idmatch == y.id) && (j < Number(y.date[8]+y.date[9]))) {
                    match +=`
                    <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
                        <div class="grids5-info">
                            <span class="posted-date" style="background-color: green;">
                                <a>
                                <span class="small">${y.date[0]+y.date[1]+y.date[2]+y.date[3]}</span>
                                <span class="big">${y.date[8]+y.date[9]}</span>
                                <span class="small">${y.date[5]+y.date[6]}</span>
                                </a>
                            </span>
                            <div class="rentext-listing-category"><span style="background-color: red;">Done</span></div>
                            <a class="d-block zoom"><img src="assets/images/p1.jpg" alt=""
                            class="img-fluid news-image" /></a>
                            <div class="blog-info">
                            <a href="#category" class="category">${y.salle}</a>
                            <h4><a href="#blog-single">${y.team1} VS ${y.team2}</a></h4>
                            <p>Nbre de place reservé : ${x.reservnbre} </p>
                            <p>Prix Total : ${x.reservprix}$ </p>
                            <p><a class="btn btn-style btn-info" style="margin:auto 50px" onclick="imprimer('sectionAimprimer',${x.idreserv})"><i class="fas fa-print"></i> Imprimer</a></p>
                            </div>
                        </div>
                    </div>`
                }
                
                }else if (Number(m+1) < Number(y.date[5]+y.date[6])) {
                    if (x.idmatch == y.id) {
                        match +=`
                    <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
                        <div class="grids5-info">
                            <span class="posted-date" style="background-color: green;">
                                <a>
                                <span class="small">${y.date[0]+y.date[1]+y.date[2]+y.date[3]}</span>
                                <span class="big">${y.date[8]+y.date[9]}</span>
                                <span class="small">${y.date[5]+y.date[6]}</span>
                                </a>
                            </span>
                            <div class="rentext-listing-category"><span style="background-color: red;" >Done</span></div>
                            <a class="d-block zoom"><img src="assets/images/p1.jpg" alt=""
                            class="img-fluid news-image" /></a>
                            <div class="blog-info">
                            <a href="#category" class="category">${y.salle}</a>
                            <h4><a href="#blog-single">${y.team1} VS ${y.team2}</a></h4>
                            <p>Nbre de place reservé : ${y.nbplace} </p>
                            <p>Prix Total : ${y.prix}$ </p>
                            <p><a  class="btn btn-style btn-primary"  style="margin:auto 50px" onclick="imprimer('sectionAimprimer')">Reserver</a></p>
                            </div>
                        </div>
                    </div>`   
                    }
                }    
            });   
        }
    });
    document.getElementById("cardmatch").innerHTML= match
    }
    
}
function recherche(){
    let search = document.getElementById("exampleFormControlInput1").value;
    // console.log(search);
    let fill = z.filter(x =>  (((x.team1).startsWith(search))||((x.team2).startsWith(search))));
    // console.log( fill);

    let match=``;
    if(fill.length==0){
         match+=`<img src="assets/images/tenor.gif" alt="Try Again" style="width: 750px; height: 350px;margin:auto;">`
    }
    else{
    fill.forEach(x => {
        if (((x.team1 == usser.team)||(x.team2 == usser.team)) && (n >= Number(x.date[8]+x.date[9]))){
            match +=`
        <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
            <div class="grids5-info">
                <span class="posted-date" style="background-color: red;">
                    <a >
                    <span class="small">${x.date[0]+x.date[1]+x.date[2]+x.date[3]}</span>
                    <span class="big">${x.date[8]+x.date[9]}</span>
                    <span class="small">${x.date[5]+x.date[6]}</span>
                    </a>
                </span>
                <a  class="d-block zoom"><img src="assets/images/p1.jpg" alt=""
                class="img-fluid news-image" /></a>
                <div class="blog-info">
                <a href="#category" class="category">${x.salle}</a>
                <h4><a href="#blog-single">${x.team1} VS ${x.team2}</a></h4>
                <p>Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!</p>
                </div>
            </div>
        </div>`
    }else if (((x.team1 == usser.team)||(x.team2 == usser.team)) && (n < Number(x.date[8]+x.date[9]))) {
        match +=`
        <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
            <div class="grids5-info">
                <span class="posted-date" style="background-color: green;">
                    <a>
                    <span class="small">${x.date[0]+x.date[1]+x.date[2]+x.date[3]}</span>
                    <span class="big">${x.date[8]+x.date[9]}</span>
                    <span class="small">${x.date[5]+x.date[6]}</span>
                    </a>
                </span>
                <a class="d-block zoom"><img src="assets/images/p1.jpg" alt=""
                class="img-fluid news-image" /></a>
                <div class="blog-info">
                <a href="#category" class="category">${x.salle}</a>
                <h4><a href="#blog-single">${x.team1} VS ${x.team2}</a></h4>
                <p>Nbre de place : ${x.nbplace} </p>
                <p>Prix : ${x.prix}$ </p>
                <p><a  class="btn btn-style btn-primary"  style="margin:auto 50px" onclick="navigate(${x.id})">Reserver</a></p>
                </div>
            </div>
        </div>`
    }
});
    }
    document.getElementById("cardmatch").innerHTML= match 

}

function imprimer(divName,a){
    console.log(divName);
    console.log(a);
    let printContents = ``;
    matchreserved.forEach(x => {
        if (x.idreserv == a) {
            matchs.forEach(y => {
                if (x.idmatch == y.id) {
                 printContents +=`
                 <div class="w3l-right-info" style="margin-top: 50px;">
                 <h3 class="title-big" id="match" style="color:red;">${y.team1} VS ${y.team2}</h3>
                 <h5 class="" id="arena">${y.salle}</h5>
                 <p class="" id="date">${y.date}</p>
                 <strong>Nom du client : </strong><span>${usser.fname} ${usser.lname}</span>
                 <h3 class="" id="nbrplace">Nombre de place Réservé : ${x.reservnbre}</h3>
                 <h3 class="" id="prixx">Prix Total : ${x.reservprix}</h3>
                 <p class=""></p>
                </div>`   
                }
            });
        }
    });
    document.getElementById(divName).innerHTML = printContents
    var originalContents = document.innerHTML;      
    document.body.innerHTML = printContents;     
    window.print();     
    document.innerHTML = originalContents;

}