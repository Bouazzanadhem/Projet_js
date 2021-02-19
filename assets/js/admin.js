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
                        <span class="big">${x.date[5]+x.date[6]}</span>
                        <span class="small">${x.date[8]+x.date[9]}</span>
                        </a>
                    </span>
                    <a href="reservation.html" class="d-block zoom"><img src="assets/images/p1.jpg" alt=""
                    class="img-fluid news-image" /></a>
                    <div class="blog-info">
                    <a href="#category" class="category"> NBA World Cup</a>
                    <h4><a href="#blog-single">${x.team1} VS ${x.team2}</a></h4>
                    <p> Salle : ${x.salle}</p>
                    <p>Reamining Seats : ${x.nbplace}</p>
                    <p> Price: ${x.prix} $</p>
                    <div class="top-quote mt-lg-0">
                <a  class="btn btn-style btn-primary">Add</a>
                <a  href="#"class="btn btn-style btn-primary">Delete</a>
            </div>
                    </div>
                </div>
            </div>`
        
    });
    document.getElementById("cardmatch").innerHTML= match
}