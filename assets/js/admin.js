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
                
               
                
                   
                  <button type="button"   onclick=" update(${x.id})" style="margin-top:30px"  data-bs-toggle="modal" data-bs-target="#exampleModal" href="#"class="btn btn-style btn-success"  >Update  </button>
                
                <a  style="margin-top:30px"  href="#"class="btn btn-style btn-danger" onclick=" Delete(${x.match})" >Delete</a>
                </div>
                </div>
</div>
</div>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div style="width: 900px;"class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update macth</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <section class="w3l-contact-7 " id="contact">
      <div class="contacts-9  pt-md-4">
        <div class="container">
          <div class="top-map">
            <div style="width: 900px" class="row map-content-9">
              <div class="col-lg-8" style="margin: auto;">
                <div style="width: 600px"class="contact-form">
                  <form action="https://sendmail.w3layouts.com/submitForm" method="post" class="">
                    <div style="padding-bottom: 40px;"    class="form-grid">
                        <div class="input-field mt-4">
                          <!-- <input type="email" name="w3lName" id="email" placeholder="E-mail" required=""> -->
                          <select id="inputState1" class="form-control form-control-lg" >
                            <option selected>Select Team 1</option>
                            <option value="Lakers">Los Angeles Lakers</option>
                            <option value="Celtic">Boston Celtics</option>
                            <option value="Warriors">Golden State Warriors</option>
                            <option value="Raptors">Toronto Raptors</option>
                            <option value="Cleveland">Cleveland Cavaliers</option>
                            <option value="Bucks">Milwaukee Bucks</option>
                            <option value="Heat">Miami Heat</option>
                            <option value="Spurs">San Antonio Spurs</option>
                            <option value="Clippers">Los Angeles Clippers</option>
                            <option value="Dallas">Dallas Mavericks</option>
                            <option value="Chicago">Chicago Bulls</option>
                            <option value="Philadelphie">Philadelphie 76ers</option>
                            <option value="Nuggets">Denver Nuggets</option>
                            <option value="Brooklyn">Brooklyn Nets</option>
                          </select>
                        </div>
                        <div class="input-field mt-4">
                          <select id="inputState2" class="form-control form-control-lg" >
                            <option selected>Select Team 2</option>
                            <option value="Lakers">Los Angeles Lakers</option>
                            <option value="Celtic">Boston Celtics</option>
                            <option value="Warriors">Golden State Warriors</option>
                            <option value="Raptors">Toronto Raptors</option>
                            <option value="Cleveland">Cleveland Cavaliers</option>
                            <option value="Bucks">Milwaukee Bucks</option>
                            <option value="Heat">Miami Heat</option>
                            <option value="Spurs">San Antonio Spurs</option>
                            <option value="Clippers">Los Angeles Clippers</option>
                            <option value="Dallas">Dallas Mavericks</option>
                            <option value="Chicago">Chicago Bulls</option>
                            <option value="Philadelphie">Philadelphie 76ers</option>
                            <option value="Nuggets">Denver Nuggets</option>
                            <option value="Brooklyn">Brooklyn Nets</option>
                          </select>
                  
                        </div>
                      </div>
                   
                    <div style="padding-bottom: 40px;" class="form-grid">
                        <div class="input-field mt-4">
                            <select id="inputState3" class="form-control form-control-lg" >
                              <option selected>Select salle</option>
                              <option value="KFC Yum! Center">KFC Yum! Center</option>
                              <option value="Dean Smith Center">Dean Smith Center</option>
                              <option value="Centre Canadian Tire">Centre Canadian Tire</option>
                              <option value="Spectrum Center">Spectrum Center</option>
                            </select>
                    
                          </div>
                          <div class="mb-3">
                            <label for="formFile" class="form-label"></label>
                            <input class="form-control form-control-lg" type="file" id="formFile">
                          </div>
                          
                    
                    </div>
                   
                    <div class="form-grid">
                        <div class="input-group mb-3">
                            <input id="seats" type="number" class="form-control form-control-lg" placeholder="Select seats" aria-label="Recipient's username" aria-describedby="button-addon2">
                            
                          </div>
                     
                      <div class="input-group mb-3">
                        <span class="input-group-text">$</span>
                        
                        <input id="price" type="text" class="form-control form-control-lg" placeholder="Select price"aria-label="Dollar amount (with dot and two decimal places)">
                        <span class="input-group-text">0.00</span>
                      </div>
                      <div class="input-group mb-3">
                        <input  id="date"  type="date" class="form-control form-control-lg" placeholder="Select date" aria-label="Recipient's username" aria-describedby="button-addon2">
                        
                      
                      
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
        <button type="button"  onclick="save(${x.id})" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> `
               


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
let ID;

function update(b) {
  
    let z =localStorage.getItem("matches");
    let p =JSON.parse(z);
    ID=b;
    // p.splice(b-1,1);
   console.log(b);
   let update =p.find(x => x.id==b);
   console.log(update);
 
  document.getElementById("inputState1").value =update.team1;
  document.getElementById("inputState2").value =update.team2;
  document.getElementById("inputState3").value=update.salle;
  document.getElementById("formFile").value=update.image;
  document.getElementById("seats").value=update.nbplace;
  document.getElementById("price").value=update.prix;
 document.getElementById("date").value=update.date;

}
function save() { 
    
    
    let z =localStorage.getItem("matches");
     let p =JSON.parse(z);
    // ID=c;
    // console.log(ID);
   
    let  save  =p.find(x => x.id==ID);
    console.log(save);
   save.team1= document.getElementById("inputState1").value ;
 save.team2 = document.getElementById("inputState2").value ;
  save.salle=document.getElementById("inputState3").value;
  save.image=document.getElementById("formFile").value;
  save.nbplace=document.getElementById("seats").value;
  save.prix= document.getElementById("price").value;
 save.date=document.getElementById("date").value;
 localStorage.setItem("matches",JSON.stringify(p))
  window.location.reload()
}
