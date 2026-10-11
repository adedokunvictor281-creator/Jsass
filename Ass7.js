let getTask = document.getElementById("task");
let getDiv = document.querySelector(".list");

let createOl = document.createElement("ol");
getDiv.appendChild(createOl);

function addTask() {
    let taskText = getTask.value.trim();

    if (taskText === "") {
        return;
    }

    let createLi = document.createElement("li");
    createLi.textContent = taskText;
    createOl.appendChild(createLi);

}