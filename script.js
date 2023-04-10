let addBtn = document.querySelector('#addBtn')
let taskInput = document.querySelector('#taskInput')
let list = document.querySelector('#list')

let tasks = []

if (localStorage.getItem('taskLS')) {
    list.innerHTML = localStorage.getItem('taskLS')
}

function addTask(newItem) {
    newItem.classList.add('item')
    newItem.textContent = taskInput.value;
    const itemBtns = document.createElement('div');
    newItem.append(itemBtns);
    itemBtns.className = 'item__btns';

    const doneBtn = document.createElement('i')
    doneBtn.className = 'fa-regular fa-square-check'
    itemBtns.append(doneBtn)
    doneBtn.setAttribute('data-action', 'complete')

    const deleteBtn = document.createElement('i')
    deleteBtn.className = 'fa-solid fa-trash-can'
    itemBtns.append(deleteBtn)
    deleteBtn.setAttribute('data-action', 'delete')

    let newTask = {
         id: Date.now(),
         text: taskInput.value,
         done: false, 

    }

    tasks.push(newTask);
    newItem.setAttribute('id', newTask.id)
}


list.addEventListener('click', function(event){
    let target = event.target;
    if (target.dataset.action == 'complete') {
        completeBtn(target);
    }
    if (target.dataset.action == 'delete') {
        removeTask(target);
    }
})

addBtn.addEventListener('click', function(event){
    const newItem = document.createElement('li')
    addTask(newItem)
    list.append(newItem)
    taskInput.value = ''
    localStorage.setItem('tasksLS', list.innerHTML)
});

function completeBtn(target) {
    target.closest('li').classList.toggle('done');
    localStorage.setItem('tasksLS', list.innerHTML)
}

function removeTask(target) {
    target.closest('li').remove();
    taskInput.value = ''
    localStorage.setItem('tasksLS', list.innerHTML)
    let index = tasks.findIndex(function(task){
        return task.id = target.closest('li').id
    })
    tasks.splice(index, 1)
    console.log(tasks)
}