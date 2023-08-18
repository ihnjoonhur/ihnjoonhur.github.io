document.addEventListener('DOMContentLoaded', (event) => {
  const lists = document.getElementById("lists");
  const newListButton = document.getElementById("new-list-button");
  const newListInput = document.getElementById("new-list-input");

  // Event delegation
  lists.addEventListener('click', event => {
    if (event.target.matches('.new-task-button')) {
      addTask(event);
    } else if (event.target.matches('.delete-list-button')) {
      deleteList(event);
    } else if (event.target.matches('.delete-task-button')) {
      deleteTask(event);
    }
  });

  newListButton.addEventListener('click', addList);

  function addList() {
    const listName = newListInput.value.trim();
    if (listName) {
      const list = document.createElement("div");
      list.classList.add("list", "card");
      list.style.width = "20rem";
      list.innerHTML = `
        <div class="card-body">
          <h2 class="card-title">${listName}</h2>
          <ul class="list-group list-group-flush"></ul>
          <input type="text" placeholder="New task" class="form-control my-3 new-task-input">
          <button class="new-task-button btn btn-success">Add Task</button>
          <button class="delete-list-button btn btn-danger">Delete List</button>
        </div>
      `;
      lists.appendChild(list);
      newListInput.value = "";
    }
  }

  function addTask(event) {
    const list = event.target.closest('.list');
    const taskInput = list.querySelector('.new-task-input');
    const taskName = taskInput.value.trim();
    if (taskName) {
      const taskList = list.querySelector('.list-group');
      const task = document.createElement("li");
      task.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
      task.innerHTML = `
        ${taskName}
        <button class="delete-task-button btn btn-sm btn-danger">Delete</button>
      `;
      taskList.appendChild(task);
      taskInput.value = "";
    }
  }

  function deleteTask(event) {
    const task = event.target.closest(".list-group-item");
    if (task) {
      task.remove();
    }
  }

  function deleteList(event) {
    const list = event.target.closest(".list");
    if (list) {
      list.remove();
    }
  }
});
