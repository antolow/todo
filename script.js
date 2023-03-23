let addBtn = document.querySelector('#addBtn')
let taskInput = document.querySelector('#taskInput')
let list = document.querySelector('#list')

addBtn.addEventListener('click', () => {
    let elemList = document.createElement('li')
elemList.classList.add('item')
elemList.textContent = taskInput.value
 list.append(elemList)


let item = document.createElement('div')
item.className = 'item_btns'
elemList.append(item)

let checkBox = document.createElement('i')
checkBox.className ="fa-solid fa-check"
item.append(checkBox)

checkBox.addEventListener('click',  function(){
    elemList.classList.toggle('done')
})

let delBtn = document.createElement('i')
delBtn.className = ' fa-solid fa-trash'
item.append(delBtn)

delBtn.addEventListener('click', function(){
    list.removeChild(elemList)
})
 taskInput.value = ''
})