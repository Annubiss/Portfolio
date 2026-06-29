
let text

function download(filename, text) {
     let element = document.createElement('a')
     element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
     element.setAttribute('download', filename)
     element.style.display = "none"
     document.body.appendChild(element)
     element.click()
     document.body.removeChild(element)
}

document.addEventListener("DOMContentLoaded", function() {
    textArea = document.querySelector("textarea")
    const buttons = document.querySelectorAll("button")
    buttons.forEach(button => {
        button.addEventListener("click", handleButtonClick)
    })
})

function convertToUpper() {
    text = textArea.value
    textArea.value = text.toUpperCase()
}

function convertToLower() {
    text = textArea.value
    textArea.value = text.toLowerCase()
}

function properCase(text) {
    return text.toLowerCase().replace(/\b\w/g, char => char.toUpperCase())
}

function sentenceCase(text) {
    return text.toLowerCase().replace(/\b\w/, char => char.toUpperCase())
}


function handleButtonClick(event) {
    const id = event.target.id

    switch (id) {
        case "upper-case":
            convertToUpper()
            break;
        case "lower-case":
            convertToLower()
            break
        case "proper-case":
            textArea.value = properCase(textArea.value)
            break
        case "sentence-case":
            textArea.value = sentenceCase(textArea.value)
            break
        case "save-text-file":
            download(text.txt, textArea.value)
            break
    }
}