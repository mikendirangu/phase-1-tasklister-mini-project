document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");
  const completedList = document.getElementById("completed-tasks");
  const prioritySelect = document.getElementById("priority");
  const userInput = document.getElementById("assigned-user");
  const dueDateInput = document.getElementById("due-date");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value;
    const assignedUser = userInput.value.trim();
    const dueDate = dueDateInput.value;

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create elements
    const li = document.createElement("li");
    const taskContent = document.createElement("span");

    // Set task text and metadata
    let fullText = taskText;
    if (assignedUser) fullText += ` | Assigned to: ${assignedUser}`;
    if (dueDate) fullText += ` | Due: ${dueDate}`;
    taskContent.textContent = fullText;

    // Color based on priority
    if (priority === "high") {
      taskContent.style.color = "red";
    } else if (priority === "medium") {
      taskContent.style.color = "orange";
    } else {
      taskContent.style.color = "green";
    }

    li.appendChild(taskContent);

    // Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✅Complete";
    completeBtn.style.marginLeft = "10px";
    completeBtn.addEventListener("click", () => {
      completedList.appendChild(li);
      completeBtn.remove();
      editBtn.remove();
    });

    // Edit button (now works properly)
    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️Edit";
    editBtn.style.marginLeft = "5px";
    editBtn.addEventListener("click", () => {
      const newText = prompt("Edit task:", taskContent.textContent);
      if (newText && newText.trim() !== "") {
        taskContent.textContent = newText.trim();
        // Re-apply priority color
        if (priority === "high") {
          taskContent.style.color = "red";
        } else if (priority === "medium") {
          taskContent.style.color = "orange";
        } else {
          taskContent.style.color = "green";
        }
      }
    });

    //  Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌Delete";
    deleteBtn.style.marginLeft = "5px";
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    // Append all buttons
    li.appendChild(completeBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    // Append to task list
    taskList.appendChild(li);

    // Sort tasks
    sortTasksByPriority();

    // Reset form
    form.reset();
  });

  function sortTasksByPriority() {
    const colorRank = { red: 1, orange: 2, green: 3 };
    const tasksArray = Array.from(taskList.children);

    tasksArray.sort((a, b) => {
      const aColor = a.querySelector("span").style.color;
      const bColor = b.querySelector("span").style.color;
      return (colorRank[aColor] || 4) - (colorRank[bColor] || 4);
    });

    tasksArray.forEach(task => taskList.appendChild(task));
  }
});


// --- a/file:///home/mike/phase-1-tasklister-mini-project/src/index.js
// +++ b/file:///home/mike/phase-1-tasklister-mini-project/src/index.js

 
// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
//   // Grab references to DOM elements
//   const form = document.getElementById("create-task-form");
//   const taskInput = document.getElementById("new-task-description");
//   const taskList = document.getElementById("tasks");

//   // Handle form submission
//   form.addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent page reload

//     const taskText = taskInput.value.trim(); // Remove whitespace

//     if (taskText === "") {
//       alert("Please enter a task.");
//       return;
//     }

//     // Create list item
//     const li = document.createElement("li");
//     li.textContent = taskText;

//     // Optionally, add a delete button for better UX
//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.style.marginLeft = "10px";
//     deleteBtn.addEventListener("click", () => {
//       li.remove();
//     });

//     li.appendChild(deleteBtn);

//     // Add list item to task list
//     taskList.appendChild(li);

//     // Clear input
//     taskInput.value = "";
//   });
// });
