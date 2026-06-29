
const accessBtn = document.querySelector('#access-btn') 
const accessContainer = document.querySelector("#access-container")
const sizeOptions = document.querySelector("#size-bar")
const colorOptions = document.querySelector("#color-bar")
const img = document.querySelectorAll("img")
const createBtn = document.querySelector("#create-btn")

const accessPanel = document.querySelector("#access-panel")
const currentSize = document.querySelector('input[name="size"]:checked')?.value

let createdAccess = false
accessPanel.hidden = true


function createSpan(hmtlElement, promptQuestion) {
    const chooseSize = document.createElement("span")
    chooseSize.textContent = `${promptQuestion} `
    hmtlElement.appendChild(chooseSize)
}

function createRadio(size, hmtlElement, radioType) {

    const label = document.createElement("label")
    label.append(`${size} `)
    const radio = document.createElement('input')
    radio.type = "radio"
    radio.name = `${radioType}` 
    radio.value = `${size}`
    radio.id = `${size.toLowerCase()}-text`
    label.appendChild(radio)
    hmtlElement.appendChild(label)
}

function hideImgBtn() {
    const hideBtn = document.createElement("button")
    hideBtn.textContent = "Hide Images"
    createBtn.appendChild(hideBtn)
    hideBtn.classList.toggle("neon-btn")
    hideBtn.addEventListener("click", () => {
        img.forEach(imgEl=>{
        if(imgEl.dataset.altShown == "1") return

        const altText = imgEl.alt || "(no alt text)"

        const altSpan = document.createElement("span")
        altSpan.textContent = altText
        altSpan.className = "img-alt"
        altSpan.dataset.forImg = "1"

        imgEl.insertAdjacentElement("afterend", altSpan)
        imgEl.style.display = "none"
        imgEl.dataset.altShown = "1"
        })
    })
}

function accessPanelControl() {
        accessPanel.hidden = !accessPanel.hidden
}


accessBtn.addEventListener("click", () => {
    console.log(img)
   accessPanelControl()
   if(createdAccess == true) return
   hideImgBtn()

   createSpan(sizeOptions, "Choose text size   ")
   createRadio("Small", sizeOptions, "size")
   createRadio("Medium", sizeOptions, "size")
   createRadio("Large", sizeOptions, "size")
   createRadio("Larger", sizeOptions, "size")
   
   createSpan(colorOptions, "Choose text color   ")
   createRadio("White", colorOptions, "color")
   createRadio("Yellow", colorOptions, "color")
   createRadio("Blue", colorOptions, "color")

   createdAccess = true

})

accessPanel.addEventListener("change", (e) => {
    const input = e.target
    if(input.tagName !== "INPUT") return
    if(input.type !== "radio") return


    if(input.name == "size") applyTextSize(input.value)
    if(input.name == "color") applyColors(input.value)
    

    
})

function applyTextSize(size) {
    const target = document.querySelectorAll("*")

    const map = {
        Small: "16px",
        Medium: "24px",
        Large: "29px",
        Larger: "32px",
    }

    const fontSize = map[size] ?? "16px"

    target.forEach(el => {
        el.style.fontSize = fontSize 
    })
}

function applyColors(color) {

    const themes = {
        Blue: {bg: "#002452", text:"#fff"},
        Yellow: {bg: "f5d328", text: "#000"},
        White: {bg: "#fff", text: "#000"}
    }
    if(!themes[color]) return
    
    document.body.style.backgroundColor = themes[color].bg
    document.body.style.color = themes[color].text
}


