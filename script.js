let tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    tasks.push(taskText);
    renderTaskList();
    taskInput.value = "";
  }
}

function removeTask(index) {
  tasks.splice(index, 1);
  renderTaskList();
}

function renderTaskList() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `
      <span class="task-text">${tasks[i]}</span>
      <button class="remove-btn" onclick="removeTask(${i})">Remove</button>
    `;
    taskList.appendChild(task);
  }
}