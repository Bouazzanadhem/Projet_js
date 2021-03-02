function addmatch(){
    var p =localStorage.getItem("matches")||[];
    var z=JSON.parse(p);
    var d = new Date();
    var j = d.getDate();
    var m =d.getMonth();
    let match=``
    z.forEach(x => {
        if (Number(m+1) == Number(x.date[5]+x.date[6])) {
            if (j < Number(x.date[8]+x.date[9])) {
                match+=`<div class="col-lg-4 col-md-6">
                <a href="login.html">
                    <div class="box16">
                        <div class="rentext-listing-category"><span>${x.date[8]+x.date[9]}/${x.date[5]+x.date[6]}</span></div>
                        <img class="img-fluid" src="${x.img}" alt="">
                        <div class="box-content">
                            <h3 class="title">$${x.prix}</h3>
                            <span class="post">${x.team1} VS ${x.team2}</span>
                        </div>
                    </div>
                </a>
            </div>`
            }
        }else if (Number(m+1) < Number(x.date[5]+x.date[6])){
            match+=`<div class="col-lg-4 col-md-6">
            <a href="login.html">
                <div class="box16">
                    <div class="rentext-listing-category"><span>${x.date[8]+x.date[9]}/${x.date[5]+x.date[6]}</span></div>
                    <img class="img-fluid" src="${x.img}" alt="">
                    <div class="box-content">
                        <h3 class="title">$${x.prix}</h3>
                        <span class="post">${x.team1} VS ${x.team2}</span>
                    </div>
                </div>
            </a>
        </div>`
        }
    });
    document.getElementById("locations").innerHTML = match
}