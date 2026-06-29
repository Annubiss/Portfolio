  const addBtn = document.querySelector("#add-task-button")
const taskList = document.querySelector("#task-list")
const addTaskInput = document.querySelector("#input-task")

const STORAGE_KEY = "todo_tasks"
let tasks = []


function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}

function loadTasks() {
    const savedTasks = localStorage.getItem(STORAGE_KEY)

    if(savedTasks) {
        tasks = JSON.parse(savedTasks)
    }
}

function renderTasks() {
    taskList.innerHTML = ""

    tasks.forEach((task) => {
        const li = document.createElement("li")

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = task.completed
        checkbox.dataset.id = task.id

        const span = document.createElement("span")
        span.textContent = task.text
        span.classList.add("task-text")

        if(task.completed) {
             span.classList.add("completed")
        }

        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "x"
        deleteBtn.classList.add("delete-btn")
        deleteBtn.dataset.id = task.id

        li.appendChild(checkbox)
        li.appendChild(span)
        li.appendChild(deleteBtn)

        taskList.append(li)

    })
}

addBtn.addEventListener("click", () => {
    const text = addTaskInput.value.trim()

    if(!text) return

    const newTask = {
        id: Date.now(),
        text: text,
        completed: false
    }

    tasks.push(newTask)
    saveTasks()
    renderTasks()

    addTaskInput.value = ""
})

taskList.addEventListener("change", (event) => {
    if(event.target.type !== "checkbox") return

    const taskId = Number(event.target.dataset.id)

    const task = tasks.find((task) => task.id == taskId)

    if(!task) return

    task.completed = event.target.checked

    saveTasks()
    renderTasks()
})

taskList.addEventListener("click", (event) => {
    if(!event.target.classList.contains("delete-btn")) return

    const taskId = Number(event.target.dataset.id)

    tasks = tasks.filter((task) => task.id !== taskId)

    saveTasks()
    renderTasks()
})



loadTasks()
renderTasks()