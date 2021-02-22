function deconect(){
    localStorage.removeItem("UserConnecté");
}
var p =localStorage.getItem("matches")||[];
var z=JSON.parse(p)
var user = localStorage.getItem("UserConnecté");
var usser = JSON.parse(user)
var d = new Date();
var n = d.getDate();
// var id=1;
function addmatch(){
    console.log(n);
    console.log(usser.team);
    let match =``;
    z.forEach(x => {
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
    document.getElementById("cardmatch").innerHTML= match
}
var a;
function navigate(a){
    //  id1 = a;
    setTimeout(() => console.log("id"+id1),3000)
    
    // alert(ID);
    // let reserv=z.find(x=>x.id == a);
    // document.getElementById("match").value= reserv.team1 + "VS" + reserv.team2;
    // document.getElementById("arena").value=reserv.salle;
    // document.getElementById("date").value=reserv.date;
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

function reservation(){
//     console.log(id);
//  alert(id);      


setTimeout(() => console.log(id),3000)
}

function recherche(){
    let search = document.getElementById("exampleFormControlInput1").value;
    console.log(search);
    let fill = z.filter(x => ((x.team1).startsWith(search)) || ((x.team2).startsWith(search)));
    console.log( fill);

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