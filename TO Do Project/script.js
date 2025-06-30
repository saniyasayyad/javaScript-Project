document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach(task => renderTask(task));

  addTaskButton.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (text === "") return;

    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };

    tasks.push(newTask);
    saveTasks();
    renderTask(newTask);
    taskInput.value = "";
  });

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.completed) li.classList.add("completed");

    li.innerHTML = `
      <span>${task.text}</span>
      <button>Delete</button>
    `;

    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTasks();
    });

    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();
      tasks = tasks.filter(t => t.id !== task.id);
      li.remove();
      saveTasks();
    });

    taskList.appendChild(li);
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
