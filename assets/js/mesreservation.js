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
    console.log(matchreserved.etat);
    matchreserved.forEach(x => {
        if (x.etat == false ) {
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
                                <div class="rentext-listing-category"><span style="background-color: red;">wait</span></div>
                                <a  class="d-block zoom"><img src="${y.img[0]}" alt=""
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
                                <div class="rentext-listing-category"><span style="background-color: red;">wait</span></div>
                                <a  class="d-block zoom"><img src="${y.img[0]}" alt=""
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
                                <div class="rentext-listing-category"><span style="background-color: red;">wait</span></div>
                                <a class="d-block zoom"><img src="${y.img[0]}" alt=""
                                class="img-fluid news-image" /></a>
                                <div class="blog-info">
                                <a href="#category" class="category">${y.salle}</a>
                                <h4><a href="#blog-single">${y.team1} VS ${y.team2}</a></h4>
                                <p>Nbre de place reservé : ${x.reservnbre} </p>
                                <p>Prix Total : ${x.reservprix}$ </p>
                                <p><button class="btn btn-style btn-info" style="margin:auto 50px" onclick="imprimer('sectionAimprimer',${x.idreserv})" disabled><i class="fas fa-print"></i> Imprimer</button></p>
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
                                <div class="rentext-listing-category"><span style="background-color: red;" >wait</span></div>
                                <a class="d-block zoom"><img src="${y.img[0]}" alt=""
                                class="img-fluid news-image" /></a>
                                <div class="blog-info">
                                <a href="#category" class="category">${y.salle}</a>
                                <h4><a href="#blog-single">${y.team1} VS ${y.team2}</a></h4>
                                <p>Nbre de place reservé : ${y.nbplace} </p>
                                <p>Prix Total : ${y.prix}$ </p>
                                <p><button  class="btn btn-style btn-primary"  style="margin:auto 50px" onclick="imprimer('sectionAimprimer')" disabled>Reserver</button></p>
                                </div>
                            </div>
                        </div>`   
                        }
                    }    
                });   
            }
        }else{
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
                                <div class="rentext-listing-category"><span style="background-color: green;">Done</span></div>
                                <a  class="d-block zoom"><img src="${y.img[0]}" alt=""
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
                                <div class="rentext-listing-category"><span style="background-color: green;">Done</span></div>
                                <a  class="d-block zoom"><img src="${y.img[0]}" alt=""
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
                                <div class="rentext-listing-category"><span style="background-color: green;">Done</span></div>
                                <a class="d-block zoom"><img src="${y.img[0]}" alt=""
                                class="img-fluid news-image" /></a>
                                <div class="blog-info">
                                <a href="#category" class="category">${y.salle}</a>
                                <h4><a href="#blog-single">${y.team1} VS ${y.team2}</a></h4>
                                <p>Nbre de place reservé : ${x.reservnbre} </p>
                                <p>Prix Total : ${x.reservprix}$ </p>
                                <p><button class="btn btn-style btn-info" style="margin:auto 50px" onclick="imprimer('sectionAimprimer',${x.idreserv})"><i class="fas fa-print"></i> Imprimer</button></p>
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
                                <div class="rentext-listing-category"><span style="background-color: green;" >Done</span></div>
                                <a class="d-block zoom"><img src="${y.img[0]}" alt=""
                                class="img-fluid news-image" /></a>
                                <div class="blog-info">
                                <a href="#category" class="category">${y.salle}</a>
                                <h4><a href="#blog-single">${y.team1} VS ${y.team2}</a></h4>
                                <p>Nbre de place reservé : ${y.nbplace} </p>
                                <p>Prix Total : ${y.prix}$ </p>
                                <p><button  class="btn btn-style btn-primary"  style="margin:auto 50px" onclick="imprimer('sectionAimprimer')">Reserver</button></p>
                                </div>
                            </div>
                        </div>`   
                        }
                    }    
                });   
            }
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
                            <a  class="d-block zoom"><img src="${y.img[0]}" alt=""
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
                            <a  class="d-block zoom"><img src="${y.img[0]}" alt=""
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
                            <a class="d-block zoom"><img src="${y.img[0]}" alt=""
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
                            <a class="d-block zoom"><img src="${y.img[0]}" alt=""
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
    }
    document.getElementById("cardmatch").innerHTML= match 

}

function imprimer(divName,a){
    console.log(divName);
    console.log(a);
    // var d = new Date();
    // var n = d.getTime();
    var Z = Math.random().toString(16).substring(3, 20)
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
                 <p class="">${Z}</p>
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
    window.location.reload();



}