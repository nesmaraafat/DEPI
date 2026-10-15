function validateData() {
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("confirm").value;
    var result = document.getElementById("result");

    result.setAttribute("class" , "alert theme-danger d-block text-center");
    result.setAttribute("data-bs-theme" , "light");

    if(user == "" && email == "" && pass == "" && confirm == "") {
        result.innerHTML = "Enter Data";
        return false;
    }else if (user.length<5 || user.length>15) {
        result.innerHTML = "Enter 5-15 character";
        return false;
    }else if (email.indexOf("@") == -1 || email.indexOf(".com" , 7) == -1) {
        result.innerHTML = "Enter valid email";
        return false;
    }else if (pass.length<8) {
        result.innerHTML = "Weak Password";
        return false;
    }else if (pass != confirm) {
        result.innerHTML = "Match your password";
        return false;
    }else {
        window.location.href = "success.html";
        return false;
    }
}