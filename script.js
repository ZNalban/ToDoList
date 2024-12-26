const inputBox = document.getElementById('task');
const listContainer = document.getElementById('list-container');

function addTask() {
  if (inputBox.value) {
    let task = document.createElement('li');
    task.innerHTML = inputBox.value;
    listContainer.appendChild(task);
    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    task.appendChild(span);
  }
  inputBox.value = '';
}

listContainer.addEventListener('click', (e) => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);