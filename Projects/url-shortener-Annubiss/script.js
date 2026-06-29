const urlRegex = /^https?:\/\/[^\s/$.?#].[^\s]*$/i
const input = document.querySelector("#input-url")
const createBtn = document.querySelector("#button-create")
const deleteBtn = document.querySelector("#delete-button")

const title = document.querySelector("h1")


const linkBtns = document.querySelectorAll("a")
    

function urlTest() {
    if(!urlRegex.test(input.value)){
        shortenURL(5)
    } else {
        return
    }
}

function shortenURL(length = 5) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let code = ""

    for(let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * chars.length)
        code += chars[index]
    }
    return code
}

function clickCounter() {
    const clicks  = document.createElement("div")
    let numberOfClicks = 0

    function render() {
        clicks.textContent = `Clicks: ${numberOfClicks}`
    }
    function incrementClicks() {
        numberOfClicks += 1
        render()
    }
    render()

    return {clicks, incrementClicks}
    
}


function buildUrlListItem(originalURL) {
    
}


createBtn.addEventListener("click", () => {
    urlTest()

    const originalURL = input.value.trim()
    const shortText = `localhost/${shortenURL(5)}`

    const li = document.createElement("li")

    const linkEl = document.createElement("a")
    linkEl.href = originalURL
    linkEl.target = "_blank"
    linkEl.rel = "noopener noreferrer"
    linkEl.textContent = shortText

    const span = document.createElement("span")
    span.textContent = ` -${originalURL}`

    
    const {clicks, incrementClicks} = clickCounter()
    linkEl.addEventListener("click", () => {
        incrementClicks()
    })

    const editBtn = document.createElement("button")
    editBtn.textContent = "Edit"
    li.appendChild(linkEl)
    li.appendChild(span)
    li.appendChild(clicks)
    li.appendChild(editBtn)
    triggerTitleGlitch()

    editBtn.addEventListener("click", () =>{
        editBtn.textContent = "Save"

        const linkInput = document.createElement("input")
        const current = linkEl.textContent

        linkInput.value = current.startsWith("localhost/") ? current.slice("localhost/".length) : current

        linkEl.replaceWith(linkInput)
        linkInput.focus()
        linkInput.select()

        linkInput.addEventListener("keydown", (e) => {
            if(e.key !== "Enter") return

            const newCode = linkInput.value.trim()
            if(newCode == "") return

            linkEl.textContent = `localHost/${newCode}`
            linkInput.replaceWith(linkEl)

            editBtn.textContent = "Edit"
            
        })
        
    })


    document.querySelector("#list-url").appendChild(li)
})



deleteBtn.addEventListener("click", () => {
    console.log("deleteBtn:", deleteBtn);
console.log("input:", input);
    const li = document.querySelectorAll("li")
    if(input.value.trim() == "") {
        li.forEach(li => li.classList.add("hidden"))
    }

    for(const item of li) {
        const a = document.querySelector('a')
        if(!a) continue

        const shortText = a.textContent.trim()
        const originalURL = a.href.trim()

        if(input.value.trim() == shortText || input.value.trim() == originalURL) {
            item.classList.add("hidden")
            
        }
    }
})

function triggerTitleGlitch() {
    title.classList.remove("glitch")

    void title.offsetWidth

    title.classList.add("glitch")

    setTimeout(() => {
        title.classList.remove("glitch")
    }, 450)
}

function runButton(button) {
    button.classList.remove("run-right")

    void button.offsetWidth

    button.classList.add("run-right")
}

createBtn.addEventListener("click", () => {
    runButton(createBtn)
})

deleteBtn.addEventListener("click", () => {
    runButton(deleteBtn)
})