var p =localStorage.getItem("users");
var z=JSON.parse(p)
function register(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let mail = document.getElementById("email").value;
    let team = document.getElementById("inputState").value;
    // console.log("team",team);
    let mdp = document.getElementById("mdp").value;
    let cmdp = document.getElementById("cmdp").value;
    let id=Math.floor(Math.random()* 100);
    // let users={id:id,fname:"admin",lname:"admin",email:"admin@gmail.com",mdp:"admin",cmdp:"admin",role:"admin"}
    let users={id:id,fname:fname,lname:lname,email:mail,team:team,mdp:mdp,cmdp:cmdp,role:"user"}
    z.push(users);
    localStorage.setItem("users",JSON.stringify(z));
    // window.open('list_tasks.html', '_blank');
    // window.replace("login.html")
    // alert("aaaaaaaaa");
}
