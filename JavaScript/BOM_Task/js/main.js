var alertTimer;

document.querySelector("#myForm").addEventListener("submit",function(event){

    var tasks = document.querySelector("#tasks");
    var taskList = document.querySelector("#taskList");
    
    if(tasks.value.trim() == "")
    {
        alert("Enter your task");
        event.preventDefault();
    }
    else
    {
        var myLi = document.createElement("li");  //<li></li>
            myLi.className = "d-flex justify-content-between align-items-center mb-2";
            myLi.innerHTML = `
               <span>${tasks.value}</span>
               <button class="btn btn-danger btn-sm delete-btn">Delete</button>
            `;
            var deleteBtn = myLi.querySelector(".delete-btn");
            deleteBtn.addEventListener("click", function() {
               myLi.remove();

               var deleteAlert = document.querySelector("#deleteAlert");
               deleteAlert.classList.remove("d-none");

               clearTimeout(alertTimer);

               alertTimer = setTimeout(function() {
                   deleteAlert.classList.add("d-none");
               }, 1000);

            });

        taskList.append(myLi);
        tasks.value = "";
        event.preventDefault();
    }

});