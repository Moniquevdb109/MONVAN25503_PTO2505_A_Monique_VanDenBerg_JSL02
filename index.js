let task1Title = prompt("Enter task 1 title:")
let task1Description = prompt("Enter task 1 description:")
let task1Status = prompt("Enter task 1 status").toLowerCase()

while (task1Status !== "todo" && task1Status !== "doing" && task1Status !== "done"){
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task1Status = prompt("Enter task 1 status").toLowerCase();
}

let task2Title = prompt("Enter task 2 title:")
let task2Description = prompt("Enter task 2 description:")
let task2Status = prompt("Enter task 2 status").toLowerCase()

while (task2Status !== "todo" && task2Status !== "doing" && task2Status !== "done"){
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task2Status = prompt("Enter task 2 status").toLowerCase();
}

if (task1Status === "done") {
    console.log("Title: " + task1Title  + ", Status: " + task1Status)
}

if (task2Status === "done") {
    console.log("Title: " + task2Title  + ", Status: " + task2Status)
}