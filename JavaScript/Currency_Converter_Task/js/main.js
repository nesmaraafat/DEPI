document.getElementById("myForm").onsubmit = function () {
    
    var dollar = document.getElementById("dollar").value;
    var result = document.getElementById("result");

    if (dollar == "") {
        result.innerHTML = "Enter Data";
    }else if (isNaN(dollar)) {
        result.innerHTML = "Enter Number Not Text";
    }else if (dollar < 0) {
        result.innerHTML = "Enter a Positive Number";
    }else if (dollar == 0) {
        result.innerHTML = "Enter a Number Rather Than Zero";
    }else {
        result.innerHTML = dollar * 50 + " Egyptian Pound";
    }

    return false;

}