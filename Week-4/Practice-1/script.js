function saveName(){

    let name = document.getElementById("name").value;

    localStorage.setItem("username", name);

    alert("Name Saved!");

}

let savedName = localStorage.getItem("username");

if(savedName){

    document.getElementById("message").innerHTML =
        "Welcome back, " + savedName + "!";

}