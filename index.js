function emailcheck(){
    const emailtag = document.getElementById("email").children[1];
    const email = document.getElementById("email").children[1].value;
    const small = document.getElementById("email").children[3];
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailPattern.test(email);
    if (!isValid){
        emailtag.className = " invalid";
        small.innerHTML = "enter a valid email";
    }
    else{
        emailtag.className =" valid";
        small.innerHTML = " ";
    }
 
}

function passcheck(){
    const passtag = document.getElementById("passbox").children[1];
    const pass = document.getElementById("passbox").children[1].value;
    const small = document.getElementById("passbox").children[3].children[2];
    
    var lowerCaseLetters = /[a-z]/g;
    if(pass.match(lowerCaseLetters)) {
        passtag.classList.remove("invalid");
        passtag.classList.add("valid");
        small.innerHTML = " ";
    } else {
        passtag.classList.remove("valid");
        passtag.classList.add("invalid");
        small.innerHTML = "enter a valid password with min 8 characters,small letter, number";
    }

    var numbers = /[0-9]/g;
    if(passtag.value.match(numbers)) {
        passtag.classList.remove("invalid");
        passtag.classList.add("valid");
        small.innerHTML = " ";
    } else {
        passtag.classList.remove("valid");
        passtag.classList.add("invalid");
        small.innerHTML = "enter a valid password with min 8 characters,small letter, number";
    }

    if(pass.length >= 8) {
        passtag.classList.remove("invalid");
        passtag.classList.add("valid");
        small.innerHTML = " ";
    } else {
        passtag.classList.remove("valid");
        passtag.classList.add("invalid");
        small.innerHTML = "enter a valid password with min 8 characters,small letter, number"
    }

}

function confirmpass(){
    const pass = document.getElementById("passbox").children[1].value;
    const newpassbox = document.getElementById("confirm").children[1];
    const newpass = document.getElementById("confirm").children[1].value;
    const small = document.getElementById("confirm").children[3];
    if (pass == newpass){
        newpassbox.classList.remove("invalid");
        newpassbox.classList.add("valid");
        small.innerHTML = " ";
    } else {
        newpassbox.classList.remove("valid");
        newpassbox.classList.add("invalid");
        small.innerHTML = "enter same password";


    }
}

function toggle(){
    var password = document.getElementById("passbox").children[1];
    if (password.type === "password"){
        password.type = "text";
    }
    else{
        password.type = "password";
    }


}


