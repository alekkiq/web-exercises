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
const targetList = document.querySelector('ul');

const createList = (list, targetUl) => {
  list.forEach((item) => {
    targetUl.insertAdjacentHTML('beforeend',
`<li>` +
        `<input type="checkbox" id="todo-${item.id}" ${item.completed ? "checked" : ""}>` +
        `<label for="todo-${item.id}">${item.task}</label>` +
      `</li>`
    );
  });
}

document.addEventListener('DOMContentLoaded', () => {
  createList(todoList, targetList);
});
