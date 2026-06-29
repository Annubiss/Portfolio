document.addEventListener("DOMContentLoaded", function() {
    const colorDiv = document.querySelectorAll(".color-block")
    const rgbText = document.querySelector("p")
    const resetBtn = document.querySelector("button")
    const status = document.querySelector("#status")


    colorDiv.forEach(div => {
        div.style.backgroundColor = randomColor()

        div.addEventListener("click", () => {
            if(colorChecker(div, rgbText)){
                status.textContent = "Correct!"
                revealAnswer(colorDiv, rgbText)
                return
            } else {
                div.style.display = "none"
                status.textContent = "Try again!"
                console.log("wrong")
            }
        })
    })

    applyDivColorsToH1(colorDiv)

    const rgbPicked = colorDiv[Math.floor(Math.random() * colorDiv.length)].style.backgroundColor
    rgbText.textContent = rgbPicked.replace(/^rgb/i, "RGB")


    resetBtn.addEventListener("click", () => {
        this.location.reload()
    })
    
    

})

function randomColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return `RGB(${r}, ${g}, ${b})`
}

function colorChecker(elem, rgbText) {
    const elemRgb = getComputedStyle(elem).backgroundColor.replace(/\s+/g, "")
    const target = rgbText.textContent.toLowerCase().replace(/\s+/g, "")
    return elemRgb == target
}

function revealAnswer(colorDiv, rgbText) {
    const target = rgbText.textContent.toLowerCase()
    colorDiv.forEach(div => {
        div.style.backgroundColor = target
    })
}

function applyDivColorsToH1(colorDiv) {
    const h1 = document.querySelector("h1")

    const base = []
    for(let i =0; i < colorDiv.length; i++) {
        base.push(getComputedStyle(colorDiv[i]).backgroundColor)
    }
    const repeats = 11
    const colors = []
    for (let r = 0; r < repeats; r++) {
        for (let i = 0; i < base.length; i++) {
            colors.push(base[i])
        }
    }
        const n = colors.length
        const stops = []
        for (let i = 0; i < n; i++){
            const start = (i / n) * 100
            const end = ((i + 1)/ n) * 100
            stops.push(`${colors[i]} ${start}%, ${colors[i]} ${end}%`)
        
    }
    h1.style.backgroundImage = `linear-gradient(90deg, ${stops.join(", ")})`
}



