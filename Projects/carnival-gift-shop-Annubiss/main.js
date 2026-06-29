const input = require('sync-input')
console.log("WELCOME TO THE CARNIVAL GIFT SHOP!\nHello friend! Thank you for visiting the carnival!")

let startingTickets = 0
let tickets = startingTickets
let action
let giftName
let boughtArray = []

const gifts = {
    "Teddy Bear": { price: 10, ID: 1},
    "Big Red Ball": {price: 5, ID: 2},
    "Huge Bear": {price: 50, ID: 3}, 
    "Candy": {price: 8, ID: 4},
    "Stuffed Tiger":{price: 15, ID: 5},
    "Stuffed Dragon": {price: 30, ID: 6},
    "Skateboard": {price: 100, ID: 7},
    "Toy Car": {price: 25, ID: 8},
    "Basketball": {price: 20, ID: 9},
    "Scary Mask": {price: 75, ID: 10}
}

function checkActivity() {
    if( action == "1" ||
        action == "2" ||
        action == "3" ||
        action == "4"
    ){
        return action
    }
}

function displayGifts() {
    console.log(`Here is a list of gifts: `)
    if(boughtArray.length == Object.keys(gifts).length - 1){
        console.log("Wow! There are no gifts to buy.")
        return
    }
    for(let gift in gifts){
        console.log(`${gifts[gift].ID} - ${gift}, Cost: ${gifts[gift].price} tickets`)
    }
}

function checkNumericOutput(input, min, max) {
    if(!/^\d+$/.test(input)) {
        console.log(`Please enter digits only (${min}-${max}.)`)
        return
    }

    const num = Number(input)
    if(num < min || num > max) {
        console.log(`Please enter a valid number between ${min} and ${max}.`)
        return
    }
}

function askActivities() {
     action = input(`What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts: `)
 checkNumericOutput(action, 1, 4)
}

function findInObj(obj, prop, searchValue, returnWhat = "key") {
    for(let key in obj) {
        const item = obj[key]


        if(prop == 'name') {
            if(key == searchValue){
                return returnWhat == 'key' ? key : item
            }
        }else{
            if(item[prop] == searchValue) {
                return returnWhat == 'key' ? key : item
            }
        }
    }
    return null
}

function buyGift() {
    const chooseGift = Number(input("What gift would you like: "))
    checkNumericOutput(chooseGift, 1, 10)
    giftName = findInObj(gifts, "ID", chooseGift, "key")
    

    if(!giftName) {
        console.log("Invalid gift ID")
        return
    }

    const price = gifts[giftName].price

    if(tickets < price) {
        console.log("You don't have enough tickets!")
        return
    }

    if(boughtGift()) {
        return
    }

    tickets -= price
    console.log(`Here is your ${giftName}, enjoy it!`)
    console.log(`Tickets left: ${tickets}`)
}

function addTickets() {
    const howManyTicketsAdd = input("How many tickets would you like to add: ")
     checkNumericOutput(howManyTicketsAdd, 0, 1000)
    tickets += Number(howManyTicketsAdd)
    console.log(`You have added ${howManyTicketsAdd}`)
}

function showTotalTickets() {
    console.log(`You have ${tickets} total tickets!`)
}

function boughtGift() {
    console.log(boughtArray.length,  Object.keys(gifts).length -1)
    if(boughtArray.length == Object.keys(gifts).length - 1){
        console.log("Wow! There are no gifts to buy.")
        return
    }
    for(let i = 0; i < boughtArray.length; i++){
        if(boughtArray[i] == giftName){
            console.log(`${giftName} already purchased`)
            return true
        }
    }

    boughtArray.push(giftName)
    return false
}

function main() {
    while(true){
    askActivities()

    if(action == "exit") {
        console.log("See ya!")
        break;
    }

    switch(action) {
        case "1":
            buyGift()
            break;
        case "2":
            addTickets()
            break;
        case "3":
            showTotalTickets()
            break;
        case "4":
            displayGifts()
            break;
    }
}
}
main()