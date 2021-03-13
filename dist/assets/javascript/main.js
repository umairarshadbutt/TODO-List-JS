const myTask = [];
let last = 0;

function Task(title, priority, cetagory, description, status) {
  this.id = last;
  this.title = title;
  this.priority = priority;
  this.cetagory = cetagory;
  this.description = description;
  this.status = status;
}

function deleteTask(event) {
  const id = event.target.getAttribute('delete-id');
  const data = `div[data-id="${id}"]`;
  myTask.splice(myTask.pop(), id);
  const task = document.querySelector(data);
  task.remove();
}

function taskStatus(event) {
  const id = event.target.getAttribute('status-id');
  const button = `button[status-id="${id}"]`;
  const statusButton = document.querySelector(button);

  if (myTask[id].status === true) {
    myTask[id].status = false;
    statusButton.innerText = 'Done';
  } else {
    myTask[id].status = true;
    statusButton.innerText = 'Undo';
  }
}


function createCard(task) {
  const content = document.querySelector('.content');
  const card = document.createElement('div');
  card.setAttribute('class', 'card');
  const cardBody = document.createElement('div');
  cardBody.setAttribute('class', 'card-body');
  const cardTitle = document.createElement('h5');
  cardTitle.setAttribute('class', 'card-title');
  cardTitle.innerText = task.title;
  const p = document.createElement('p');
  p.setAttribute('class', 'card-text');
  p.innerText = task.priority;
  const description = document.createElement('p');
  description.setAttribute('class', 'card-text');
  description.innerText = task.description;

  const statusButton = document.createElement('button');
  statusButton.setAttribute('class', 'btn btn-primary');
  statusButton.setAttribute('status-id', task.id);
  statusButton.addEventListener('click', taskStatus, false);
  if (task.status === true) {
    statusButton.innerText = 'Undo';
  } else {
    statusButton.innerText = 'Done';
  }


  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'btn btn-danger');
  deleteButton.setAttribute('delete-id', task.id);
  deleteButton.addEventListener('click', deleteTask, false);
  deleteButton.innerText = 'Delete';

  card.setAttribute('data-id', task.id);
  cardBody.appendChild(cardTitle);
  card.appendChild(cardBody);
  card.appendChild(p);
  card.appendChild(description);
  card.appendChild(statusButton);
  content.appendChild(card);

  card.appendChild(deleteButton);
}

function listTask() {
  const content = document.querySelector('.content');

  content.innerHTML = '';
  var localStorageTask = JSON.parse(localStorage.getItem("task"));
  for (let i = 0; i < localStorageTask.length; i += 1) {
    createCard(localStorageTask[i]);
  }
}

function addTaskTomyTask(task) {
  myTask.push(task);
  localStorage.setItem("task", JSON.stringify(myTask));
  
  listTask();
  last += 1;
}
// const myArrayFromLocalStorage = localStorage.getItem('task');
//   console.log(myArrayFromLocalStorage);
function clearInputs() {
  const formInputs = document.querySelectorAll('input');
  formInputs.forEach(
    (item) => { item.value = ''; },
  );
  const checkbox = document.querySelector('#status');
  checkbox.checked = false;
}

function saveNewTask(event) {
  event.preventDefault();
  const title = document.getElementById('taskTitle').value;
  const priority = document.getElementById('taskPriority').value;
  const cetagory = document.getElementById('taskCatagory').value;
  const description = document.getElementById('taskDescription').value;
  const status = document.getElementById('status').checked;

  const task = new Task(title, priority, cetagory, description, status);
  addTaskTomyTask(task);

  const modalBackdrop = document.querySelector('.modal-backdrop.show ');
  modalBackdrop.style.display = 'none';
  const modal = document.querySelector('.modal');
  modal.style.display = 'none';

  clearInputs();
}

const saveTask = document.querySelector('.saveTask');
saveTask.addEventListener('click', saveNewTask);
