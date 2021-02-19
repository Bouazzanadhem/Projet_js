function deconect(){
    localStorage.removeItem("UserConnecté");
}
var p =localStorage.getItem("matches")||[];
var z=JSON.parse(p)
var user = localStorage.getItem("UserConnecté");
var usser = JSON.parse(user)
var d = new Date();
var n = d.getDate();
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
                        <a href="reservation.html">
                        <span class="small">${x.date[0]+x.date[1]+x.date[2]+x.date[3]}</span>
                        <span class="big">${x.date[8]+x.date[9]}</span>
                        <span class="small">${x.date[5]+x.date[6]}</span>
                        </a>
                    </span>
                    <a href="reservation.html" class="d-block zoom"><img src="assets/images/p1.jpg" alt=""
                    class="img-fluid news-image" /></a>
                    <div class="blog-info">
                    <a href="#category" class="category">${x.salle}</a>
                    <h4><a href="#blog-single">${x.team1} VS ${x.team2}</a></h4>
                    <p>Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!</p>
                    </div>
                </div>
            </div>`
        }
        
        
    });
    document.getElementById("cardmatch").innerHTML= match
}