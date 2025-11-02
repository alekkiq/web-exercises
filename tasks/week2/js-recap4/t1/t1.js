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
const addModal = document.getElementById('add-modal');
const addBtn = document.getElementById('add-btn');
const form = addModal.querySelector('form');

const createTodoElement = (todo, targetUl) => {
  const li = document.createElement('li');
  li.classList.add('todo');

  li.appendChild(createInput(todo));
  li.appendChild(createLabel(todo));
  li.appendChild(createRemoveBtn(todo));

  targetUl.appendChild(li);
}

const createInput = (todo) => {
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = `todo-${todo.id}`;

  if (todo.completed)
    input.checked = true;

  input.addEventListener('change', (event) => {
    todo.completed = event.target.checked;
    console.log(todoList)
  });

  return input;
}

const createLabel = (todo) => {
  const label = document.createElement('label');
  label.textContent = todo.task;
  label.htmlFor = `todo-${todo.id}`;

  return label;
}

const createRemoveBtn = (todo) => {
  const btn = document.createElement('button');
  btn.textContent = 'X';

  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const elementToRemove = e.target.parentNode;
    targetList.removeChild(elementToRemove);
    // elementToRemove.remove(); // perhaps a better option

    todoList.splice(todoList.indexOf(todo), 1);
    console.log(todoList);
  });

  return btn;
}

const addTodo = (data, todoList, target) => {
  const todoId = todoList.length + 1;
  const todo = {
    id: todoId,
    task: data.task || "",
    completed: false
  };

  todoList.push(todo)
  createTodoElement(todo, target);

  console.log(todoList);
}

document.addEventListener('DOMContentLoaded', () => {
  todoList.forEach((item) => {
    createTodoElement(item, targetList);
  });

  addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addModal.showModal();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskInput = form.querySelector('input[name="task"]');

    addTodo({task: taskInput.value}, todoList, targetList);

    taskInput.value = '';
    addModal.close();
  });
});
