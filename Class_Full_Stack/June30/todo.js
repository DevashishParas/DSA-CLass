
var taskInput = document.getElementById("taskInput");
var addBtn = document.getElementById("addBtn");
var taskList = document.getElementById("taskList");
addBtn.onclick = function () {

    var task = taskInput.value;

    if (task == "") {
        alert("Please enter a task.");
        return;
    }

    var li = document.createElement("li");

    li.innerHTML =
        "<span>" + task + "</span>" +
        "<div class='buttons'>" +
        "<button class='edit' onclick='editTask(this)'>Edit</button>" +
        "<button class='delete' onclick='deleteTask(this)'>Delete</button>" +
        "</div>";

    taskList.appendChild(li);
    taskInput.value = "";
};

function deleteTask(button) {

    var li = button.parentNode.parentNode;

    taskList.removeChild(li);
}

function editTask(button) {

    var li = button.parentNode.parentNode;

    var taskText = li.getElementsByTagName("span")[0];

    var newTask = prompt("Edit your task:", taskText.innerHTML);

    if (newTask != "" && newTask != null) {
        taskText.innerHTML = newTask;
    }
}