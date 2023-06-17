const btn_add_taks = document.getElementById("button-add-task")
const div_tasks = document.getElementById("tasks")
const input_new_task = document.getElementById("text-task")
let items_array = new Array()

const addItem = () => {
    let new_value = (input_new_task.value).trim()
    let items_tasks = document.getElementsByClassName("item-task") 
    let string_task = ''

    if (new_value == "") {
        alert("Enter a value to add a task")
        return
    }

    if (items_array.length == 0) {
        div_tasks.innerHTML = string_task
    }
    string_task = '<div class="item-task">'
        string_task += '<div class="text-task" onclick = "modifyStateItem(' + items_tasks.length + ')">' + new_value + '</div>'
            string_task += '<div class="button-remove">'
                string_task += '<button id="button-remove' + items_tasks.length + '" onclick = "removeItem(' + items_tasks.length + ')" class = "btn-rmv"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg></button>'
            string_task += '</div>'
    string_task += '</div>'
    div_tasks.innerHTML += string_task
    input_new_task.value = ''
    items_array.push({
        content: new_value,
        finalizado: 'N'
    })
}

const removeItem = (index) => {
    let items_tasks = document.getElementsByClassName("item-task") 
    items_tasks[index].remove()
    items_array.splice(index, 1)
    refactorItems()
}

const refactorItems = () => {
    let items_tasks = document.getElementsByClassName("text-task") 
    let buttons = document.querySelectorAll(".button-remove > button")
    let items_length = items_tasks.length
    showMessageToAddTask(items_length)
    for(let i = 0; i < items_length; i++) {
        buttons[i].setAttribute("id","button-remove" + i)
        buttons[i].setAttribute("onclick", "removeItem(" + i + ")")
        items_tasks[i].setAttribute("onclick", "modifyStateItem(" + i + ")")
    }
}

const showMessageToAddTask = (items_length) => {
    if (items_length == 0) {
        div_tasks.innerHTML += '<h3 class="no-task-message"><b>Add a task...</b></h3>'
        return
    }
}

const modifyStateItem = (index) => {
    let items_tasks = document.getElementsByClassName("text-task")
    if(items_array[index].finalizado == 'N') {
        items_array[index].finalizado = 'S'
        items_tasks[index].classList.add("item-task-checked");
        return
    }
    items_array[index].finalizado = 'N'
    items_tasks[index].classList.remove("item-task-checked");
}

showMessageToAddTask(0)