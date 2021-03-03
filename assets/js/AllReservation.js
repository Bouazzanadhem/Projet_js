function logOut() {
    
    localStorage.removeItem("UserConnecté");
}
var match=JSON.parse(localStorage.getItem("matches"))
var p =localStorage.getItem("reservmatch")||[];
var z=JSON.parse(p)
function Reservedmatch(){
  let matche =``;
  // var j;
  z.forEach((j,index) => {
    if (j.etat==false) {
      console.log(j.idmatch,j.idreserv);
      var h=match.filter(y => y.id==j.idmatch)
      console.log(h + "filter filter");
      if(h!=[]){    
        console.log("yes");
        h.forEach((x,index) => {
          console.log(j.idreserv);
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
                 <div class="rentext-listing-category"><span style="background-color: red;">standby</span></div>
   
                 <a class="d-block zoom"><img src="assets/images/1200px-Dean_Smith_Center1.jpg" alt=""
                 class="img-fluid news-image" /></a>
                 <div class="blog-info">
                 <h3> <a href="#category" class="fas fa-basketball-ball"> NBA World Cup</a></h3>
                 <h4><a href="#blog-single">  ${x.team1} VS ${x.team2}</a></h4>
                 <h5 class="" id="arena"> Salle:  ${x.salle}</h5>
                 <p>Reamining Seats : ${x.nbplace}</p>
                 <p> Price: ${j.reservprix} $ </p>
                 <p> Reserve number: ${j.reservnbre} </p>
                 <p> Reserve id: ${j.idreserv} </p>
   
                 <div class="top-quote mt-lg-0">
             
            
              <button type="button"  style="margin-top:30px"  data-bs-toggle="modal" data-bs-target="#exampleModal" href="#"class="btn btn-style btn-primary" onclick="ConfirmMatch(${j.idreserv})">Accept Match </button>
             
               </div>
               </div>
            </div>
          </div> 
     
     <!-- Modal -->
     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog">
         <div class="modal-content">
           <div class="modal-header">
             <h5 class="modal-title" id="exampleModalLabel"><a href="#category" ></a>Acceptation of match</h5>
             <div class="spinner-border text-warning" role="status">
             <span class="sr-only"></span>
           </div>           </div>
           <div class="modal-body">
           <h5> <a href="#category" > Match accepted by Admin </a></h5>
           </div>
           <div class="modal-footer">
             <button type="button" onclick="redirect()" class="btn btn-primary">Save changes</button>
           </div>
         </div>
       </div>
        </div>`
      })}else{
        console.log("no no no ");
      }
    }
  });
  document.getElementById("cardmatch").innerHTML= matche
}

function ConfirmMatch(a) {
  console.log("id id id :::::::: " +  a);

    
    let  reserv= z.find(x => x.idreserv==a)
    // console.log(reservmatch);
    let matchreserve=match.find(x => x.id==reserv.idmatch)
    // console.log(matchreserve);
    let nbsallematch=matchreserve.nbplace;
    // console.log(nbsallematch);
    let nbplacesReserve =reserv.reservnbre;
    // console.log(nbplacesReserve);
    let newNbPlaces= Number(nbsallematch)-Number(nbplacesReserve)
    // console.log(newNbPlaces);
    //  console.log(reserv.reservnbre);
   matchreserve.nbplace=newNbPlaces.toString();
    reserv.etat=true;
    console.log(matchreserve);
    console.log(match);
    console.log(reserv);
    console.log(z);
    // z.splice(a-1,1);
    // match.splice(matchreserve.id-1,1)
    
    
// console.log(matchreserve.id-1);
// console.log(a-1);
localStorage.setItem("reservmatch",JSON.stringify(z))
localStorage.setItem("matches",JSON.stringify(match))

// window.location.reload()
// document.getElementById("cardmatch").innerHTML= matche
  

    
}

function DeletereservedMatch() {
  let matche =``;

    z.forEach((j,index) => {
        // console.log(j.idmatch);
     var h=match.filter(y => y.id==j.idmatch)
        h.forEach((x,index) => {
            matche -=`
            <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
                <div class="grids5-info">
                    <span class="posted-date">
                        <a href="#blog-single">
                        <span class="small">${x.date[0]+x.date[1]+x.date[2]+x.date[3]}</span>
                        <span class="big">${x.date[8]+x.date[9]}</span>
                        <span class="small">${x.date[5]+x.date[6]}</span>
                        </a>
                    </span>
                    <div class="rentext-listing-category"><span style="background-color: red;">standby</span></div>

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
                
               
                 <button type="button"   onclick="ConfirmMatch(${j.idreserv})" style="margin-top:30px"  data-bs-toggle="modal" data-bs-target="#exampleModal" href="#"class="btn btn-style btn-primary"  >Accept Match </button>
                
                  </div>
                  </div>
                </div>
        </div> 
        


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
<h5 class="modal-title" id="staticBackdropLabel">Reservation</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <h5> <a href="#category" > Match accepted by Admin </a></h5>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
        <button type="button"  onclick=" DeletereservedMatch(${j.idreserv})"class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> `
        })

     
               


    });
    document.getElementById("cardmatch").innerHTML= matche
}

function redirect() {
  window.location.reload();
}
