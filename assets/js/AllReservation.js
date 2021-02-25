function logOut() {
    
    localStorage.removeItem("UserConnecté");
}
var match=JSON.parse(localStorage.getItem("matches"))
var p =localStorage.getItem("reservmatch")||[];
var z=JSON.parse(p)
function Reservedmatch(){
    let matche =``;

    z.forEach((j,index) => {
        console.log(j.idmatch);
     var h=match.filter(y => y.id==j.idmatch)
        h.forEach((x,index) => {
            matche +=`
            <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
                <div class="grids5-info">
                    <span class="posted-date">
                        <a href="#blog-single">
                        <span class="small">${x.date[0]+x.date[1]+x.date[2]+x.date[3]}</span>
                        <span class="big">${x.date[8]+x.date[9]}</span>
                        <span class="small">${x.date[5]+x.date[6]}</span>
                        </a>
                    </span>
                    <div class="rentext-listing-category"><span style="background-color: red;">Done</span></div>

                    <a href="reservation.html" class="d-block zoom"><img src="assets/images/1200px-Dean_Smith_Center1.jpg" alt=""
                    class="img-fluid news-image" /></a>
                    <div class="blog-info">
                    <h3> <a href="#category" class="fas fa-basketball-ball"> NBA World Cup</a></h3>
                    <h4><a href="#blog-single">  ${x.team1} VS ${x.team2}</a></h4>
                    <h5 class="" id="arena"> Salle:  ${x.salle}</h5>
                    <p>Reamining Seats : ${x.nbplace}</p>
                    <p> Price: ${j.reservprix} </p>
                    <p> Reserve number: ${j.reservnbre} </p>
                    <div class="top-quote mt-lg-0">
                
               
                
                   
                  <button type="button"   onclick="" style="margin-top:30px"  data-bs-toggle="modal" data-bs-target="#exampleModal" href="#"class="btn btn-style btn-success"  >Accept Match </button>
                
                
                </div>
                </div>
             </div> `
        })

     
               


    });
    document.getElementById("cardmatch").innerHTML= matche
}

function ConfirmMatch() {

  

    
}