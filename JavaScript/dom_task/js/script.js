// var x = document.getElementsByClassName("demo");
// for (let i = 0; i < x.length; i++) {
//     x[i].style.color = "red";
    
// }

// var x = document.getElementsByTagName("p");
// for (let i = 0; i < x.length; i++) {
//     x[i].style.color = "red";
    
// }

// var x = document.querySelector(".demo:nth-of-type(2)");
// x.style.color = "red";
// console.log(x);

// var x = document.querySelectorAll("nav a");
// console.log(x);

//======================================

//parentNode & parentElement

// var x = document.querySelector("#demo");
// x.parentElement.parentNode.parentElement.style.backgroundColor = "red";

//children

// var x = document.querySelector("#demo").children;
// x[0].style.backgroundColor = "red";
// x[1].style.backgroundColor = "red";
// console.log(x.childNodes);

//=========================================

//setAttribute & getAttribute

// var x = document.querySelector("#user").getAttribute("placeholder");
// console.log(x);
// document.querySelector("#email").setAttribute("placeholder",x);

//=========================

//addEventListener

// document.querySelector("#demo"),onclick = function(){
//     console.log(123);
//     console.log(456);
// }

// document.querySelector("#demo").addEventListener("click",getData);

// function getData(){
//     console.log(123);
//     console.log(456);
// }

// document.querySelector("#demo").addEventListener("submit",getData);

// function getData(e){
//     console.log(123);
//     e.preventDefault();
//     // return false;
// }

//========================================

// <h4 id="ali" class="nesma">Hello World!!</h4>

// var newElement = document.createElement("h4"); //<h4></h4>
// newElement.id = "ali";
// newElement.className = "nesma";
// newElement.innerHTML = "Hello World!!";

// var x = document.querySelector(".test");

// x.insertBefore(newElement,x.children[2]);

// x.appendChild(newElement);

// document.body.append(newElement);

// newElement.setAttribute("id","ali");
// newElement.setAttribute("class","nesma");

//=============================================

// document.querySelector("#red").onclick = function(){
//     document.querySelector("#demo").style.color = "red";
// }
// document.querySelector("#blue").onclick = function(){
//     document.querySelector("#demo").style.color = "blue";
// }
// document.querySelector("#green").onclick = function(){
//     document.querySelector("#demo").style.color = "green";
// }


document.querySelectorAll("button").forEach( function(item){
    item.onclick = function(){
        document.querySelector("#demo").style.color = item.dataset.color;
        document.querySelector("#demo").style.textAlign = item.dataset.location;
    }
})
