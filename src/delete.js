const myTask = [];
const localStorageTask1 = JSON.parse(localStorage.getItem('task'));
const delete1 = (id) => {
  const data = `div[data-id="${id}"]`;
  if (id === 0) return 1;

  myTask.splice(myTask.pop(), id);
  localStorageTask1.splice(localStorageTask1.pop(), id);
  localStorage.setItem('task', JSON.stringify(localStorageTask1));
  const task = document.querySelector(data);
  task.remove();
};
module.exports = delete1;