document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.value;

    const li = document.createElement("li");
    li.textContent = taskText;

    taskList.appendChild(li);

    taskInput.value = ""; // clear input field
  });
});
// File: src/index.js
// --- a/file:///home/mike/phase-1-tasklister-mini-project/src/index.js
// +++ b/file:///home/mike/phase-1-tasklister-mini-project/src/index.js
// @@ -1,4 +1,4 @@
