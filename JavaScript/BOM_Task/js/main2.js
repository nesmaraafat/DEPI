//BOM --> Browser Object Model
// window

// var w = window.innerWidth;
// var h = window.innerHeight;

// document.querySelector("#demo").innerHTML = "Your width is " + w + " and your height is " + h;
// document.querySelector("#demo").style.backgroundColor = "red";
// document.querySelector("#demo").style.width = w-200 + "px";

//============================================

// window.addEventListener("scroll",function(){

//     var scrollValue = window.scrollY;
//     var navbar = document.querySelector(".navbar");

//     if(scrollValue>200){
//         navbar.setAttribute("class","navbar md:navbar-expand bg-primary");
//     }
//     else
//     {
//         navbar.setAttribute("class","navbar md:navbar-expand bg-danger");
//     }
// });

//============================================

//location

// document.querySelector(".nesma").addEventListener("click",function(){
//     window.location.href = "https://www.google.com";
// });

// document.querySelector("#demo").innerHTML = window.location.href;
// document.querySelector("#demo").innerHTML = window.location.protocol;
// document.querySelector("#demo").innerHTML = window.location.hostname;
// document.querySelector("#demo").innerHTML = window.location.port;
// document.querySelector("#demo").innerHTML = window.location.pathname;

//============================================

//navigator

// document.querySelector("#demo").innerHTML = navigator.appVersion;
// document.querySelector("#demo").innerHTML = navigator.platform;
// document.querySelector("#demo").innerHTML = navigator.appName;
// document.querySelector("#demo").innerHTML = navigator.cookieEnabled;
// document.querySelector("#demo").innerHTML = navigator.javaEnabled();

//============================================

//setIntrval & setTimeOut

var mouse = setInterval(myTimer,1000);

function myTimer (){
    var d = new Date();

    document.querySelector("#demo").innerHTML = d;
}
