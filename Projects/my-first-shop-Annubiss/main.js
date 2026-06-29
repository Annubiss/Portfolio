

// document.addEventListener("DOMContentLoaded", function(){
const input = require('sync-input')

let output =""
let prices = {
    Bubblegum: "$2",
    Toffee: "$0.2",
    "Ice cream": "$5",
    "Milk chocolate": "$4",
    Doughnut: "$2.5",
    Pancake: "$3.2"
}
let earnings = {
    Bubblegum: "$202",
    Toffee: "$118",
    "Ice cream": "$2250",
    "Milk chocolate": "$1680",
    Doughnut: "$1075",
    Pancake: "$80"
}
 let sum = 0

// function displayOnWeb(e){
//     const display = document.createElement("pre")
//     display.textContent = e
//     document.body.append(display)
// }

function calculateEarningsTotal() {
   
    for(key in earnings) {
        const raw = earnings[key]
        const cleaned = raw.replace(/[^0-9.-]/g, "")
        sum += Number(cleaned)

        
    }
    sum = sum - staffExpenses - otherExpenses
    // displayOnWeb(`Income: ${sum}`)
    console.log(`Income: ${sum}`)
}


function printDict(obj, mode = "both", header = "") {
    if(header !== ""){
        console.log(header)
        // displayOnWeb(header)
    }
    for (const key in obj) {
        if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;
        
        let line 

        if(mode == "keys") {
            line = key
        } else if(mode === "values") {
            line = obj[key]
        } else {
            line = `${key}: ${obj[key]}`
        }
        console.log(line)
        // displayOnWeb(line)
    }
}


printDict(prices, "keys")
printDict(earnings, "both", "Earned amount: ")
const staffExpenses = Number(input("Staff expenses: "))
const otherExpenses = Number(input("Other expenses: "))
calculateEarningsTotal()
// })


    
