var p =localStorage.getItem("matches")||[];
var z=JSON.parse(p)
function addmatch(){
    let match =``;
    z.forEach((x,index) => {
        console.log(index);
        match +=`
            <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
                <div class="grids5-info">
                    <span class="posted-date">
                        <a href="#blog-single">
                        <span class="small">${x.date[0]+x.date[1]+x.date[2]+x.date[3]}</span>
                        <span class="big">${x.date[8]+x.date[9]}</span>
                        <span class="small">${x.date[5]+x.date[6]}</span>
                        </a>
                    </span>
                    <a href="reservation.html" class="d-block zoom"><img src="assets/images/1200px-Dean_Smith_Center1.jpg " alt=""
                    class="img-fluid news-image" /></a>
                    <div class="blog-info">
                    <h3> <a href="#category" class="fas fa-basketball-ball">  NBA World Cup</a></h3>
                    <h4><a href="#blog-single">${x.team1} VS ${x.team2}</a></h4>
                    <p> Salle : ${x.salle}</p>
                    <p>Reamining Seats : ${x.nbplace}</p>
                    <p> Price: ${x.prix} $</p>
                    
                    <div class="top-quote mt-lg-0">
                <a  style="margin-top:30px"  onclick= "update(${x.match})" class="btn btn-style btn-success">Update</a>
                <a  style="margin-top:30px"  href="#"class="btn btn-style btn-danger" onclick=" Delete(${x.match})" >Delete</a>
            </div>
                    </div>
                </div>
            </div>`
        
    });
    document.getElementById("cardmatch").innerHTML= match
}
function Delete(a) {
   
    let z =localStorage.getItem("matches");
    let p =JSON.parse(z);
    p.pop(a);
    localStorage.setItem("matches",JSON.stringify(p))
    window.location.reload()

}


function update(b) {
    let match;
    let z =localStorage.getItem("matches");
    let p =JSON.parse(z);
    match=b;
   console.log(b);
   let update =p.find(x => x.match==b);
   console.log(update);
 
  document.getElementById("inputState1").value =update.team1;
  document.getElementById("inputState2").value =update.team2;
  document.getElementById("inputState3").value=update.salle;
  document.getElementById("formFile").value=update.image;
  document.getElementById("seats").value=update.nbplace;
  document.getElementById("price").value=update.prix;
 document.getElementById("date").value=update.date;
 window.open("http://127.0.0.1:5500/Projet_js/match.html")
}