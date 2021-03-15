const myTask = [];
const localStorageTask1 = JSON.parse(localStorage.getItem('task'));
const delete1 = (id) => {
  const data = `div[data-id="${id}"]`;
  myTask.splice(myTask.pop(), id);
  localStorageTask1.splice(localStorageTask1.pop(), id);
  localStorage.setItem('task', JSON.stringify(localStorageTask1));
  const task = document.querySelector(data);
  task.remove();
};
export default delete1;