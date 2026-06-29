const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
const count = document.querySelector("#task-count");
const emptyState = document.querySelector("#empty-state");
const clearCompleted = document.querySelector("#clear-completed");

const storageKey = "todo-app-tasks";

let todos = JSON.parse(localStorage.getItem(storageKey)) || [];

function saveTodos() {
  localStorage.setItem(storageKey, JSON.stringify(todos));
}

function updateCount() {
  const activeCount = todos.filter((todo) => !todo.completed).length;
  const taskLabel = activeCount === 1 ? "task" : "tasks";
  count.textContent = `${activeCount} ${taskLabel} left`;
  emptyState.hidden = todos.length > 0;
  clearCompleted.disabled = !todos.some((todo) => todo.completed);
}

function renderTodos() {
  list.innerHTML = "";

  todos.forEach((todo) => {
    const item = document.createElement("li");
    item.className = todo.completed ? "completed" : "";

    const checkbox = document.createElement("input");
    checkbox.className = "todo-check";
    checkbox.type = "checkbox";
        checkbox.checked = todo.completed;
        checkbox.setAttribute("aria-label", `Mark ${todo.text} as complete`);
        checkbox.addEventListener("change", () => {
          todo.completed = checkbox.checked;
          saveTodos();
          renderTodos();
        });

    const text = document.createElement("span");
    text.className = "todo-text";
    text.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.type = "button";
    deleteButton.textContent = "X";
        deleteButton.setAttribute("aria-label", `Delete ${todo.text}`);
        deleteButton.addEventListener("click", () => {
          todos = todos.filter((itemToKeep) => itemToKeep.id !== todo.id);
          saveTodos();
          renderTodos();
        });

    item.append(checkbox, text, deleteButton);
    list.append(item);
  });

  updateCount();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = input.value.trim();

  if (!text) {
    return;
  }

  todos.push({
    id: Date.now(),
    text,
    completed: false
  });

  saveTodos();
  input.value = "";
  input.focus();
  renderTodos();
});

clearCompleted.addEventListener("click", () => {
  todos = todos.filter((todo) => !todo.completed);
  saveTodos();
  renderTodos();
});

renderTodos();
