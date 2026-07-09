function changeColor(){

    let button = document.getElementById("btn");

    if(button.style.backgroundColor === "green"){

        button.style.backgroundColor = "#007bff";
        button.innerHTML = "Click Me";

    }
    else{

        button.style.backgroundColor = "green";
        button.innerHTML = "Color Changed!";

    }

}