let inputData = document.getElementById('taskData')
let btnAdd = document.getElementById('btnAdd')
let noTask = document.getElementById('noTask')
let tasks = document.getElementById('tasks')

let showNoTask = () => {
    if(tasks.childElementCount == 0) {
        noTask.classList.remove('none')
    }
}
 
let addTask = () => {
    let task = inputData.value
   if(inputData.value.length <3) {
       alert('you must enter valid Data')
   }else{
    noTask.classList.add('none');
    tasks.innerHTML +=`
    <div class="alert alert-success task">
    ${task}
    <button class=" delete btn btn-danger float-right">
    Delete
    </button>
    </dive>`

    inputData.value = ""
   }
} 

let check = (e) => {
    if(e.target.classList.contains('task')) {
        e.target.classList.toggle ('check')
    }
}
tasks.addEventListener('click' , check)

btnAdd.addEventListener('click' , addTask)

document.addEventListener('click' , function (e) {
    if(e.target.classList.contains('delete')){
    e.target.parentElement.remove()
    showNoTask()
}
})