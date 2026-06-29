document.addEventListener("DOMContentLoaded", function() {
    const map = document.querySelector('#map')
    const creaturesArr = ["kelpie.png", "puffskein.png", "salamander.png", "swooping.png", "zouwu.png"]
    const movesNumber = document.querySelector('#moves-number')
    const scoreNumber = document.querySelector("#score-number")
    const lizardsToWin = document.querySelector(".lizards-to-win")
    const toWin = document.querySelector("#beings-to-win")
    const footer = document.querySelector("#footer-writing")
    
    let firstCell = null
    let initialMoves = 15

    let matchedCounts = {}

    const clickSfx = new Audio("Sounds/click.wav")
    const matchSfx = new Audio("Sounds/match.wav")
    
    movesNumber.textContent = initialMoves
    scoreNumber.textContent = 0
    lizardsToWin.textContent = 3

function buildEmptyMap(size) {
    map.innerHTML = ""

    for (let x = 0; x < size; x++) {
        const tr = document.createElement("tr")

        for(let y = 0; y < size; y++){
            const td = document.createElement("td")
            td.className = "cell"

            td.dataset.being = ""
            td.dataset.x = x
            td.dataset.y = y

            tr.appendChild(td)
        } 
        map.appendChild(tr)
    }
}

const winTargets = {
    salamander: document.querySelector(".lizards-to-win"),
    kelpie: document.querySelector(".horses-to-win")
}

const monsterCells = document.querySelectorAll("td")

function getGridSize() {
    return map.querySelectorAll("tr").length
}

function cellAt(x, y) {
    return map.querySelector(`td.cell[data-x="${x}"][data-y="${y}"]`)
}

function shuffle(arr) {
    let j
    for(let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i))
        if(j !== i)
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}


function fillEmptyCells(creatures) {
    const tiles = map.querySelectorAll("td.cell")
    const emptyTiles = []
    const creaturesPool = []

    tiles.forEach((td) => {
        if(!td.dataset.being) emptyTiles.push(td)
    })
    

for (let i = 0; i < emptyTiles.length; i++) {
    creaturesPool.push(creatures[i % creatures.length])
}
shuffle(creaturesPool)

emptyTiles.forEach((td, idx) => {
    const file = creaturesPool[idx]
    const beingName = file.replace(/\.[^.]+$/, "")
    td.dataset.being = beingName

    let img = td.querySelector('img')
    if(!img) {
        img = document.createElement("img")
        td.appendChild(img)
    }

    const x = td.dataset.x
    const y = td.dataset.y

    img.dataset.coords = `x${x}_${y}`
    img.src = `Images/${file}`
    img.alt = beingName
})
}


buildEmptyMap(5)
fillEmptyCells(creaturesArr)

window.redrawMap = function redrawMap(creatures) {
    if(!Array.isArray(creatures)) return false

    if(creatures.length < 9) return false

    const size = Math.sqrt(creatures.length)

    if(!Number.isInteger(size) || size < 3) return false
    buildEmptyMap(size)
    fillEmptyCells(creatures)
    return true
}

const cells = document.querySelectorAll(".cell")


cells.forEach(cell => {
    if(movesNumber.textContent == "0") {
        return
    }
cell.addEventListener("click", () => {
    if(!firstCell) {
        firstCell = cell
        cell.classList.add("selected")
        playSfx(clickSfx)
        return
    }
    if(cell == firstCell) {
        firstCell.classList.remove("selected")
        firstCell = null
        return
    }

    if(isNeighbor(firstCell, cell)){
        playSfx(clickSfx)
        swapCells(firstCell, cell)
        const {toClear} = match3Plus()
        if(toClear.size > 0) { 
            matchesToWin(matchedCounts)
            clearMatchedCells(toClear)
            setTimeout(() => {
            fillEmptyCells(creaturesArr)
            },400)
            scoreNumber.textContent = Number(scoreNumber.textContent) + 10

            const spans = [...toWin.querySelectorAll("span")]
            const allZero = spans.every(span => Number(span.textContent.trim()) == 0)
            if(allZero) {
                console.log("coc")
                footer.textContent = "You won! Reload the page to start the game again."
                endGame()
            }
        }
    }

    firstCell.classList.remove("selected")
    firstCell = null

})



function isNeighbor(a, b) {
    const ax = Number(a.dataset.x)
    const ay = Number(a.dataset.y)
    const bx = Number(b.dataset.x)
    const by = Number(b.dataset.y)

    const dx = Math.abs(ax -bx)
    const dy = Math.abs(ay - by)

    return (dx + dy) == 1
}

function swapCells(a, b) {
    const tmpBeing = a.dataset.being
    a.dataset.being = b.dataset.being
    b.dataset.being = tmpBeing

    const imgA = a.querySelector("img")
    const imgB = b.querySelector("img")

    const tmpSrc = imgA.src
    imgA.src = imgB.src
    imgB.src = tmpSrc

    const tmpAlt = imgA.alt
    imgA.alt = imgB.alt
    imgB.alt = tmpAlt

    if(movesNumber.textContent !== "0"){
        movesNumber.textContent -= 1
    } else {
        return
    }

    

    if(movesNumber.textContent == "0") {
        footer.textContent = "You lost! Reload the page to start the game again."
        endGame()
    }

}

function match3Plus() {
    const size = getGridSize()
    const toClear = new Set()

    for(let x = 0; x < size; x++) {
        let runBeing = null
        let runStartY = 0
        let runLen = 0

    for(let y = 0; y <= size; y++) {
        const td = (y < size) ? cellAt(x, y) : null
        const being = td ? (td.dataset.being || "") : null

    const sameAsRun = being == runBeing
    const notEmpty = Boolean(being)
    if(notEmpty && sameAsRun) {
        runLen++
    } else {
        if(runBeing && runLen >= 3) {
            matchedCounts[runBeing] = (matchedCounts[runBeing] || 0) + runLen

            for(let k = 0; k < runLen; k++) {
                toClear.add(cellAt(x, runStartY + k))
            }
        }
        runBeing = being || null; 
        runStartY = y;
        runLen = being ? 1 : 0
    }
   }
  }

  for(let y = 0; y < size; y++) {
    let runBeing = null
    let runStartX = 0
    let runLen = 0

    for(let x = 0; x <= size; x++) {
        const td = (x < size) ? cellAt(x, y) : null
        const being = td ? (td.dataset.being || "") : null

        const sameAsRun = being == runBeing
        const notEmpty = Boolean(being)
        if(notEmpty && sameAsRun) {
            runLen++ 
        } else {
            if(runBeing && runLen >= 3) {
                for(let k = 0; k < runLen; k++) {
                    toClear.add(cellAt(runStartX + k, y))
                }
            }
            runBeing = being || null
            runStartX = x
            runLen = being ? 1 : 0
        }
    }
  }


  return {toClear, matchedCounts}
}

function clearMatchedCells(cellsSet) {
    cellsSet.forEach(td => td.classList.add("matched"))

    setTimeout(() =>{
    cellsSet.forEach(td => {
        td.dataset.being = ""
        td.classList.remove("matched")
        const img = td.querySelector("img")
        if(img) img.remove()
        playSfx(matchSfx)
    })
    }, 400)
}



    })

function matchesToWin(matchedCounts) {
    for(const [being, count] of Object.entries(matchedCounts)){
        const el = winTargets[being]
        if(!el) continue

        const current = Number(el.textContent) || 0
        const next = Math.max(0, current - count)
        el.textContent = next
    }
}

function endGame() {
    gameOver = true
    map.style.pointerEvents = "none"
}

function playSfx(sound) {
    sound.currentTime = 0
    sound.play().catch(() => {})
}
})