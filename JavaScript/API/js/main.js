
function getApi() {

    var xhttp = new XMLHttpRequest;

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var result = this.responseText; // string
            var nesma = JSON.parse(result); // string ==> JSON

            var basket = "";
            for (var i = 0 ; i < nesma.length ; i++) {

                var cartoona = ` <div class="md:col-4 text-center ">
                                    <img src="${nesma[i].url}" class="w-100">
                                    <h4>${nesma[i].title}</h4>
                                    <h6>${nesma[i].id}</h6>
                                </div>
                                `;
                basket = basket + cartoona;
            }

            document.querySelector(".test").innerHTML = basket;

        }
    }

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
    xhttp.send();

}


getApi();

