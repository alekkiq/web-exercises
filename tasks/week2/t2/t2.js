// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const targetList = document.getElementById('todos');

const createList = (list, targetUl) => {
  list.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('todo');

    li.appendChild(createInput(item));
    li.appendChild(createLabel(item));

    targetUl.appendChild(li);
  });
}

const createInput = (todo) => {
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = `todo-${todo.id}`;

  if (todo.completed)
    input.checked = true;
    // input.setAttribute("checked", true);

  return input;
}

const createLabel = (todo) => {
  const label = document.createElement('label');
  label.textContent = todo.task;
  label.htmlFor = `todo-${todo.id}`;

  return label;
}

document.addEventListener('DOMContentLoaded', () => {
  createList(todoList, targetList);
});
