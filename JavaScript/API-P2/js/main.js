
// function getApi() {

//     var xhttp = new XMLHttpRequest;

//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             var result = this.responseText; // string
//             var hagar = JSON.parse(result); // string ==> JSON
//             var nesma = hagar.data.recipes;
//             var basket = "";
//             for (var i = 0 ; i < nesma.length ; i++) {

//                 var cartoona = ` <div class="md:col-4 text-center mb-12">
//                                     <img src="${nesma[i].image_url}" class="w-100" style="height:350px">
//                                     <h4>${nesma[i].title}</h4>
//                                     <h6>${nesma[i].publisher}</h6>
//                                 </div>
//                                 `;
//                 basket = basket + cartoona;
//             }

//             document.querySelector(".test").innerHTML = basket;

//         }
//     }

//     xhttp.open("GET", "https://forkify-api.jonas.io/api/v2/recipes?search=pizza", true);
//     xhttp.send();

// }


// getApi();


//====================================


// function getApi() {

//     var xhttp = new XMLHttpRequest;

//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             var result = this.responseText; // string
//             var hagar = JSON.parse(result); // string ==> JSON
//             var nesma = hagar.products;
//             var basket = "";
//             for (var i = 0 ; i < nesma.length ; i++) {

//                 var cartoona = ` <div class="md:col-4 text-center mb-12">
//                                     <img src="${nesma[i].images[0]}" class="w-100" style="height:350px">
//                                     <h4>Name: ${nesma[i].title}</h4>
//                                     <h6>Brand: ${nesma[i].brand}</h6>
//                                     <h6>Category: ${nesma[i].category}</h6>
//                                     <h6>Rating: ${nesma[i].rating} of 5</h6>
//                                     <h6>Price: ${nesma[i].price}$</h6>
//                                     <h6>ID: ${nesma[i].id}</h6>
//                                 </div>
//                                 `;
//                 basket = basket + cartoona;
//             }

//             document.querySelector(".test").innerHTML = basket;

//         }
//     }

//     xhttp.open("GET", "https://dummyjson.com/products", true);
//     xhttp.send();

// }


// getApi();


//==================================================


//fetch

// fetch("https://dummyjson.com/products")
// .then(function (result){
//     return result.json();
// })
// .then(function(hagar){
//     var nesma = hagar.products;
//             var basket = "";
//             for (var i = 0 ; i < nesma.length ; i++) {

//                 var cartoona = ` <div class="md:col-4 text-center mb-12">
//                                     <img src="${nesma[i].images[0]}" class="w-100" style="height:350px">
//                                     <h4>Name: ${nesma[i].title}</h4>
//                                     <h6>Brand: ${nesma[i].brand}</h6>
//                                     <h6>Category: ${nesma[i].category}</h6>
//                                     <h6>Rating: ${nesma[i].rating} of 5</h6>
//                                     <h6>Price: ${nesma[i].price}$</h6>
//                                     <h6>ID: ${nesma[i].id}</h6>
//                                 </div>
//                                 `;
//                 basket = basket + cartoona;
//             }

//             document.querySelector(".test").innerHTML = basket;

// });


//======================================================

async function getApi() {
    var result = await fetch("https://dummyjson.com/products");
    var hagar = await result.json();

    var nesma = hagar.products;
            var basket = "";
            for (var i = 0 ; i < nesma.length ; i++) {

                var cartoona = ` <div class="md:col-4 text-center mb-12">
                                    <img src="${nesma[i].images[0]}" class="w-100" style="height:350px">
                                    <h4>Name: ${nesma[i].title}</h4>
                                    <h6>Brand: ${nesma[i].brand}</h6>
                                    <h6>Category: ${nesma[i].category}</h6>
                                    <h6>Rating: ${nesma[i].rating} of 5</h6>
                                    <h6>Price: ${nesma[i].price}$</h6>
                                    <h6>ID: ${nesma[i].id}</h6>
                                </div>
                                `;
                basket = basket + cartoona;
            }

            document.querySelector(".test").innerHTML = basket;

}

getApi();