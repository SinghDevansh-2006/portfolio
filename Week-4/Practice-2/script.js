function validateEmail(){

    let email = document.getElementById("email").value;

    let atIndex = email.indexOf("@");
    let dotIndex = email.lastIndexOf(".");

    if(
        atIndex > 0 &&
        dotIndex > atIndex + 1 &&
        dotIndex < email.length - 1
    ){

        document.getElementById("result").innerHTML =
        "✅ Valid Email";

    }

    else{

        document.getElementById("result").innerHTML =
        "❌ Invalid Email";

    }

}