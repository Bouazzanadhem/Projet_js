// function login() {
  
//     let z =localStorage.getItem("users");
//     let p =JSON.parse(z);
//     let email=document.getElementById("w3lName").value
//     let password=document.getElementById("w3lSender").value
//     let  login  =p.find(x => x.email==email && x.mdp==password);
//     console.log(login);
    
  
//     localStorage.setItem("UserConnecté",JSON.stringify(login))
    

    
// }

function logOut() {
    
    localStorage.removeItem("UserConnecté");
  
}
function redirect() {
    let p=localStorage.getItem("UserConnecté");
    let loginn = JSON.parse(p);
    if (loginn.role == "admin"){
        window.location.replace("admin.html")
        
    }
   else {
    window.location.replace("user.html")
        
   } 
}