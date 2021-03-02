// function login() {
  
//     let z =localStorage.getItem("users");
//     let p =JSON.parse(z);
//     let email=document.getElementById("w3lName").value
//     let password=document.getElementById("w3lSender").value
//     let  login  =p.find(x => x.email==email && x.mdp==password);
//     console.log(login);
    
  
//     localStorage.setItem("UserConnecté",JSON.stringify(login))
    

    
// }
function affichage(){
    let affiche =`<div class="contacts-9 pt-lg-5 pt-md-4">
    <div class="container">
      <div class="top-map">
        <div class="row map-content-9">
          <div  class="col-lg-8" style="margin: auto;">
            <div  class="contact-form " >
              <div>
                <div >
                  <div class="input-field" >
                    <input type="mail" name="w3lName" id="w3lName" placeholder="mail" required="">
                  </div>
                </div>
                <div >
                  <div class="input-field mt-4">
                    <input  type="password" name="w3lSender" id="w3lSender" placeholder="Password" required="">
                  </div>
                </div>
                <button  onclick="login()" class=" btn btn-primary btn-style mt-3"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">login</button>
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Reservation</h5>
                        <div class="spinner-border text-warning" role="status">
                        <span class="visually-hidden"></span>
                        </div>
                        </div>
                        <div class="modal-body">
                        <h2>Veuillez attendre  l'acceptation de l'admin</h2>
                        </div>
                        <div class="modal-footer">
                        <button type="button" onclick="redirect()" class="btn btn-primary">D'accord</button>
                        </div>
                    </div>
                  </div>
                </div>
                <p style ="padding-top: 30px" class="text-center dont-do text-secondary">Don't have an account?
                  <a href="register.html" class="text-theme-2 font-weight-bold">Register Now</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
    document.getElementById("contact").innerHTML= affiche
}

  function login() {
    let q =localStorage.getItem("reservmatch")||[];
    let matchreserved=JSON.parse(q)
    let z =localStorage.getItem("users");
    let p =JSON.parse(z);
    let email=document.getElementById("w3lName").value
    let password=document.getElementById("w3lSender").value
    let  loginn  =p.find(x => x.email==email && x.mdp==password);
    localStorage.setItem("UserConnecté",JSON.stringify(loginn));
    let notreserved = matchreserved.find(x => x.etat == false);
    let reserved = matchreserved.find(x=> x.etat == true && x.iduser == loginn.id);
    console.log(reserved);
    console.log(notreserved);

      let moudall=``;
      matchreserved.forEach(x => {
          console.log(x.etat);
        if (loginn.role == "admin"){
            if (notreserved != null) {
                moudall=`<div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Reservation</h5>
                <div class="spinner-border text-warning" role="status">
                  <span class="visually-hidden"></span>
                      </div>
                        </div>
                        <div class="modal-body">
                        <h2>Vous avez une reservation a acceptée</h2>
                        </div>
                        <div class="modal-footer">
                        <button type="button" onclick="redirect()" class="btn btn-primary">D'accord</button>
                        </div>
                    </div>
                  </div>`
            }else{
                window.location.replace("admin.html")
            }
        }else if ((x.iduser == loginn.id)&&(loginn.role == "user")){
            if (reserved != null){
                moudall=`<div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Reservation</h5>
                <div class="spinner-border text-warning" role="status">
                  <span class="visually-hidden"></span>
                      </div>
                        </div>
                        <div class="modal-body">
                        <h2>Votre réservation a été confirmé</h2>
                        </div>
                        <div class="modal-footer">
                        <button type="button" onclick="redirect()" class="btn btn-primary">D'accord</button>
                        </div>
                    </div>
                  </div>`
            }else{
                window.location.replace("user.html")
            }
        }
      });
    document.getElementById("staticBackdrop").innerHTML = moudall
}


function logOut() {
    
    localStorage.removeItem("UserConnecté");
  
}
function redirect() {
    // let z =localStorage.getItem("users");
    // let p =JSON.parse(z);
    // let email=document.getElementById("w3lName").value
    // let password=document.getElementById("w3lSender").value
    // let  loginn  =p.find(x => x.email==email && x.mdp==password);
    let p=localStorage.getItem("UserConnecté");
    let loginn = JSON.parse(p);
    if (loginn.role == "admin"){
        window.location.replace("admin.html")
        
    }
   else {
    window.location.replace("user.html")
        
   } 
}