function deconect(){
    localStorage.removeItem("UserConnecté");
}
var p =localStorage.getItem("matches")||[];
var z=JSON.parse(p)
var user = localStorage.getItem("UserConnecté");
var usser = JSON.parse(user)
var d = new Date();
var j = d.getDate();
var m = d.getMonth();
function addmatch(){
    if (usser == null) {
        window.location.replace("login.html")
    }else{
        document.getElementById("name").innerHTML = usser.fname
        document.getElementById("team").innerHTML = usser.team
    let match =``;
    z.forEach(x => {
        if (Number(m+1) > Number(x.date[5]+x.date[6])) {
            if ((x.team1 != usser.team)&&(x.team2 != usser.team)){
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
                    <a  class="d-block zoom"><img src="${x.img[0]}" alt=""
                    class="img-fluid news-image" /></a>
                    <div class="blog-info">
                    <a class="category">${x.salle}</a>
                    <h4><a href="#blog-single">${x.team1} VS ${x.team2}</a></h4>
                    <p>Nbre de place : ${x.nbplace} </p>
                    <p>Prix : ${x.prix}$ </p>
                    </div>
                </div>
            </div>`
        }   
        }else if (Number(m+1) == Number(x.date[5]+x.date[6])) {
            if (((x.team1 != usser.team)&&(x.team2 != usser.team)) && (j >= Number(x.date[8]+x.date[9]))){
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
                    <a  class="d-block zoom"><img src="${x.img[0]}" alt=""
                    class="img-fluid news-image" /></a>
                    <div class="blog-info">
                    <p><a href="" class="category default">${x.salle}</a></p>
                    <h4><a href="" >${x.team1} VS ${x.team2}</a></h4>
                    <p>Nbre de place : ${x.nbplace} </p>
                    <p>Prix : ${x.prix}$ </p>
                    </div>
                </div>
            </div>`
        }else if (((x.team1 != usser.team)&&(x.team2 != usser.team)) && (j < Number(x.date[8]+x.date[9]))) {
            match +=`
            <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
                <div class="grids5-info">
                <form action="/reservation.html" method="get">
                    <span class="posted-date" style="background-color: green;">
                        <a>
                        <span class="small">${x.date[0]+x.date[1]+x.date[2]+x.date[3]}</span>
                        <span class="big">${x.date[8]+x.date[9]}</span>
                        <span class="small">${x.date[5]+x.date[6]}</span>
                        </a>
                    </span>
                    <a class="d-block zoom"><img src="${x.img[0]}" alt=""
                    class="img-fluid news-image" /></a>
                    <div class="blog-info">
                    <a href="#category" class="category">${x.salle}</a>
                    <h4><a href="#blog-single">${x.team1} VS ${x.team2}</a></h4>
                    <p>Nbre de place : ${x.nbplace} </p>
                    <p>Prix : ${x.prix}$ </p>
                    <input id="idmatch" type="hidden" name="idmatch" value=${x.id}>
                    <p><input class="btn btn-style btn-primary"  style="margin:auto 50px" type="submit" value="Reserver"></p>
                    </div>
                </form>
                </div>
            </div>`
        }
        }else if (Number(m+1) < Number(x.date[5]+x.date[6])) {
            if ((x.team1 != usser.team)&&(x.team2 != usser.team)) {
                match +=`
                <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
                    <div class="grids5-info">
                    <form action="/reservation.html" method="get">
                        <span class="posted-date" style="background-color: green;">
                            <a>
                            <span class="small">${x.date[0]+x.date[1]+x.date[2]+x.date[3]}</span>
                            <span class="big">${x.date[8]+x.date[9]}</span>
                            <span class="small">${x.date[5]+x.date[6]}</span>
                            </a>
                        </span>
                        <a class="d-block zoom"><img src="${x.img[0]}" alt=""
                        class="img-fluid news-image" /></a>
                        <div class="blog-info">
                        <a href="#category" class="category">${x.salle}</a>
                        <h4><a href="#blog-single">${x.team1} VS ${x.team2}</a></h4>
                        <p>Nbre de place : ${x.nbplace} </p>
                        <p>Prix : ${x.prix}$ </p>
                        <input id="idmatch" type="hidden" name="idmatch" value=${x.id}>
                        <p><input class="btn btn-style btn-primary"  style="margin:auto 50px" type="submit" value="Reserver"></p>
                        </div>
                    </form>
                    </div>
                </div>`
            }
        }
    });
    document.getElementById("cardmatch").innerHTML= match
    }
}
var a;
function navigate(a){
    
    //  id1 = a;
    // setTimeout(() => console.log("id"+id1),3000)
    
    // alert(ID);
    
     window.open(`reservation.html`)
    // console.log(reserv);
//     let reservation=`<div class="col-lg-7 pl-lg-0">
//     <div class="w3l-right-info">
//         <h3 class="title-big" id="match">${reserv.team1} VS ${reserv.team2}</h3>
//         <h5 class="mt-4" id="arena">${reserv.salle}</h5>
//         <p class="mt-4" id="date">${reserv.date}</p>
//         <a href="#small-dialog1" class="popup-with-zoom-anim play-view d-block mt-md-5 mt-4">
//             <span class="video-play-icon">
//                 <span class="fa fa-play"></span>
//             </span>
//         </a>
//         <!-- dialog itself, mfp-hide class is required to make dialog hidden -->
//         <div id="small-dialog1" class="zoom-anim-dialog mfp-hide">
//             <iframe src="https://www.youtube.com/embed/jqP3m3ElcxA" frameborder="0" allowfullscreen=""></iframe>
//         </div>
//     </div>
// </div>`

//     window.open('reservation.html', '_blank');
//     document.getElementById("reservmatch").innerHTML= reservation
return a;
}
var id = navigate(a);
function recherche(){
    let search = document.getElementById("exampleFormControlInput1").value;
    // console.log(search);
    let fill = z.filter(x => ((x.team1).startsWith(search)) || ((x.team2).startsWith(search)));
    // console.log( fill);

    let match=``;
    if(fill.length==0){
         match+=`<img src="assets/images/tenor.gif" alt="Try Again" style="width: 750px; height: 350px;margin:auto;">`
    }
    else{
    fill.forEach(x => {
        if (Number(m+1) > Number(x.date[5]+x.date[6])) {
            if ((x.team1 != usser.team)&&(x.team2 != usser.team)){
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
                    <a  class="d-block zoom"><img src="${x.img[0]}" alt=""
                    class="img-fluid news-image" /></a>
                    <div class="blog-info">
                    <a href="#category" class="category">${x.salle}</a>
                    <h4><a href="#blog-single">${x.team1} VS ${x.team2}</a></h4>
                    <p>Nbre de place : ${x.nbplace} </p>
                    <p>Prix : ${x.prix}$ </p>
                    </div>
                </div>
            </div>`
        }   
        }else if (Number(m+1) == Number(x.date[5]+x.date[6])) {
            if (((x.team1 != usser.team)&&(x.team2 != usser.team)) && (j >= Number(x.date[8]+x.date[9]))){
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
                    <a  class="d-block zoom"><img src="${x.img[0]}" alt=""
                    class="img-fluid news-image" /></a>
                    <div class="blog-info">
                    <a href="#category" class="category">${x.salle}</a>
                    <h4><a href="#blog-single">${x.team1} VS ${x.team2}</a></h4>
                    <p>Nbre de place : ${x.nbplace} </p>
                    <p>Prix : ${x.prix}$ </p>
                    </div>
                </div>
            </div>`
        }else if (((x.team1 != usser.team)&&(x.team2 != usser.team)) && (j < Number(x.date[8]+x.date[9]))) {
            match +=`
            <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
                <div class="grids5-info">
                <form action="/reservation.html" method="get">
                    <span class="posted-date" style="background-color: green;">
                        <a>
                        <span class="small">${x.date[0]+x.date[1]+x.date[2]+x.date[3]}</span>
                        <span class="big">${x.date[8]+x.date[9]}</span>
                        <span class="small">${x.date[5]+x.date[6]}</span>
                        </a>
                    </span>
                    <a class="d-block zoom"><img src="${x.img[0]}" alt=""
                    class="img-fluid news-image" /></a>
                    <div class="blog-info">
                    <a href="#category" class="category">${x.salle}</a>
                    <h4><a href="#blog-single">${x.team1} VS ${x.team2}</a></h4>
                    <p>Nbre de place : ${x.nbplace} </p>
                    <p>Prix : ${x.prix}$ </p>
                    <input id="idmatch" type="hidden" name="idmatch" value=${x.id}>
                    <p><input class="btn btn-style btn-primary"  style="margin:auto 50px" type="submit" value="Reserver"></p>
                    </div>
                </form>
                </div>
            </div>`
        }
        }else if (Number(m+1) < Number(x.date[5]+x.date[6])) {
            if ((x.team1 != usser.team)&&(x.team2 != usser.team)) {
                match +=`
                <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
                    <div class="grids5-info">
                    <form action="/reservation.html" method="get">
                        <span class="posted-date" style="background-color: green;">
                            <a>
                            <span class="small">${x.date[0]+x.date[1]+x.date[2]+x.date[3]}</span>
                            <span class="big">${x.date[8]+x.date[9]}</span>
                            <span class="small">${x.date[5]+x.date[6]}</span>
                            </a>
                        </span>
                        <a class="d-block zoom"><img src="${x.img[0]}" alt=""
                        class="img-fluid news-image" /></a>
                        <div class="blog-info">
                        <a href="#category" class="category">${x.salle}</a>
                        <h4><a href="#blog-single">${x.team1} VS ${x.team2}</a></h4>
                        <p>Nbre de place : ${x.nbplace} </p>
                        <p>Prix : ${x.prix}$ </p>
                        <input id="idmatch" type="hidden" name="idmatch" value=${x.id}>
                        <p><input class="btn btn-style btn-primary"  style="margin:auto 50px" type="submit" value="Reserver"></p>
                        </div>
                    </form>
                    </div>
                </div>`
            }
        }
    });
    }
    document.getElementById("cardmatch").innerHTML= match 

}