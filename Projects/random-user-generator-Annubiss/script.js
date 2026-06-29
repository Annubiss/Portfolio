const selected = {
    name: false,
    email: false,
    picture: false,
    password: false, 
    location: false,
    gender:false, 
    phone: false, 
    birthday: false
}

const users = []
const usersRoot = document.querySelector("#users")
const dataSelectsBtns = document.querySelector("#btns-select-data")

const savedUsersContainer = document.querySelector("#saved-users")

const STORAGE_KEY = "random_users_v1"
const storage = localStorage
const savedUsers = []


const FIELD_CONFIG = [
    { key: "name", label: "Name:",             get: u => `${u.name.first} ${u.name.last}`},
    { key: "email", label: "Email:",           get: u => u.email },
    { key: "password", label: "Password:",     get: u => u.login.password},
    { key: "location", label: "Location:",     get: u => `${u.location.city}, ${u.location.country}`},
    { key: "gender", label: "Gender:",         get: u => u.gender},
    { key: "phone", label: "Phone:",           get: u => u.phone},
    { key: "birthday", label: "Birthday:",     get: u => u.dob.date},
]

async function getRandomUser() {
    const res = await fetch("https://randomuser.me/api/")
    if(!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    
    return data.results[0]
}


function createUserCard(user, selected) {
    const card = document.createElement("div")
    card.className = "user-card"

    const addRow = (label, value) => {
        const p = document.createElement("p")
        p.innerHTML = `<strong>${label}</strong> ${value}`
        card.appendChild(p)
    }

    if (selected.picture) {
        const img = document.createElement("img")
        img.src = user.picture.large
        img.alt = `${user.name.first} ${user.name.last}`
        card.appendChild(img)
    }

    for(const field of FIELD_CONFIG) {
        if(!selected[field.key]) continue
        addRow(field.label, field.get(user))
    }

    return card
}

function renderAllUsers() {
    usersRoot.innerHTML = ""
    users.forEach(user => {
        usersRoot.appendChild(createUserCard(user, selected))
    })
}

document.querySelector("#get-user-button").addEventListener("click", async () => {
    const user = await getRandomUser()
    users.push(user)
    usersRoot.appendChild(createUserCard(user, selected))
    loadUsersFromStorage();   
    renderSavedUsers();
})



dataSelectsBtns.addEventListener("click", (e) =>{
    const btn = e.target.closest("button")
    if(!btn) return

    field = btn.dataset.field
    if (!field) return

    selected[field] = !selected[field]

    btn.classList.toggle("active", selected[field])
    
    console.log(selected[field])

    if(btn.textContent === "Select all fields"){
        btn.classList.toggle("active")
    }
    
 
})

document.querySelector("#select-all").addEventListener("click", () =>{
    for(const key of Object.keys(selected)){
        selected[key] = true
    }
    highlightAllSelectedData()
    
    
    });


function highlightAllSelectedData() {
    dataSelectsBtns
    .querySelectorAll('button:not(#select-all):not(#get-user-button):not(#save-users-button)')
    .forEach(btn => btn.classList.add("active"))
} 

function saveUsersToStorage() {
    console.log("SAVE", users.length)
    storage.setItem(STORAGE_KEY, JSON.stringify(users))
    console.log("fsdf")
    
}


function loadUsersFromStorage() {
    const raw = storage.getItem(STORAGE_KEY)
    if(!raw) return


    const parsed = JSON.parse(raw)
    if(!Array.isArray(parsed)) return

    
    users.length = 0
    users.push(...parsed)
    console.log("cuc")
}

document.querySelector("#save-users-button").addEventListener("click", () => {
  saveUsersToStorage();
  console.log("storage now:", storage.getItem(STORAGE_KEY));
});


function renderSavedUsers() {
    savedUsersContainer.innerHTML = ""
    users.forEach(user => {
        savedUsersContainer.appendChild(createUserCard(user, selected))
    })
}

document.addEventListener("DOMContentLoaded", () => {
  
  loadUsersFromStorage();   
  renderSavedUsers();
});
















