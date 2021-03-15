
const delete1 = () => {
  const id = event.target.getAttribute('delete-id');
  const data = `div[data-id="${id}"]`;
  myTask.splice(myTask.pop(), id);
  var localStorageTask1 = JSON.parse(localStorage.getItem("task"));
  localStorageTask1.splice(localStorageTask1.pop(), id);
  localStorage.setItem("task", JSON.stringify(localStorageTask1));
  const task = document.querySelector(data);
  task.remove();
};
export default delete1;