
let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");


addBtn.addEventListener("click", function () {

    let taskText = taskInput.value;

   
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

  
    let li = document.createElement("li");

   
    let span = document.createElement("span");
    span.textContent = taskText;


    span.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

  
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

   
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

   
    li.appendChild(span);
    li.appendChild(deleteBtn);

  
    taskList.appendChild(li);

  
    taskInput.value = "";
});
