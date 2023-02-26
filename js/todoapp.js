const listContainer = document.getElementById("list-container");
const lists = document.getElementById("lists");
const newListButton = document.getElementById("new-list-button");
const newListInput = document.getElementById("new-list-input");

let listId = 0;

// Add a new to-do list
function addList() {
  const listName = newListInput.value.trim();
  if (listName) {
    const listId = `list-${Date.now()}`;
    const list = document.createElement("div");
    list.classList.add("list");
    list.innerHTML = `
      <div class="list-header">
        <h2 class="list-title">${listName}</h2>
        <button class="delete-list-button">&times;</button>
      </div>
      <ul class="task-list" data-list-id="${listId}">
        <!-- Task items will be added here -->
      </ul>
      <div class="add-task-form">
        <input type="text" class="new-task-input" placeholder="Enter a new task">
        <button class="add-task-button">Add Task</button>
      </div>
    `;
    lists.appendChild(list);
    newListInput.value = "";
  }
}

// Add a new task to the specified list
function addTask(event) {
  const taskInput = event.target.previousElementSibling;
  const taskName = taskInput.value.trim();
  if (taskName) {
    const taskList = event.target.closest(".task-list");
    const taskId = `task-${Date.now()}`;
    const task = document.createElement("li");
    task.classList.add("task");
    task.setAttribute("data-task-id", taskId);
    task.innerHTML = `
      <span class="task-name">${taskName}</span>
      <div class="task-actions">
        <button class="edit-task-button">Edit</button>
        <button class="delete-task-button">Delete</button>
      </div>
    `;
    taskList.appendChild(task);
    taskInput.value = "";
  }
}

// Delete a task
function deleteTask(event) {
  const task = event.target.closest(".task");
  if (task) {
    task.remove();
  }
}

// Edit a task name
function editTask(event) {
  const task = event.target.closest(".task");
 
}
