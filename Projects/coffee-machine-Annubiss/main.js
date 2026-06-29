const { mainModule } = require('process')
const input = require('sync-input')

let numberOfRequestedCups
let takeAction
let chooseCoffee
let waterReserves
let milkReserves
let beansReserves
let moneySum = 0;
let initialMoney = 0;
let smallCups = 0
let mediumCups = 0
let bigCups = 0
let maxCups = 0
let cupSize

let moneyEarned

const recipeEspresso = {
    water: 250,
    beans: 16,
    cost: 4
}

const recipeLatte = {
    water: 350,
    milk: 75,
    cost: 7
}

const recipeCappuccino = {
    water: 200,
    milk: 100,
    beans: 12,
    cost: 6
}

function getSizeProp(cupSize) {
    if(cupSize == "small"){
        return { multiplier: 1, available: smallCups}
    }
    if(cupSize == "medium")
        return {multiplier: 1.2, available: mediumCups}
    if(cupSize == "big"){
        return {multiplier: 1.4, available: bigCups}
    }
}

function calcCoffeeCost(recipe) {

    const {multiplier} = getSizeProp(cupSize)
    return recipe.cost * multiplier
}

function fill() {
    
         waterReserves = Number(input("Write how many ml of water the coffee machine has: "))
         milkReserves = Number(input("Write how many ml of milk the coffee machine has: "))
         beansReserves = Number(input("Write how many g of coffee beans the coffee machine has: "))
         initialMoney = Number(input("Write how much money the coffee machine has: "))
         smallCups = Number(input("Write how many small cups the machine has: "))
         mediumCups = Number(input("Write how many medium cups the machine has: "))
         bigCups = Number(input("Write how many big cups the machine has: "))
        coffeeMachineState()
}

function enoughCupsAvailable(cupNumber) {
    if(cupNumber > 0) {
        console.log(`There are enough cups, ${cupNumber} available`)
    }else{
        console.log(`There are not enough cups, ${smallCups} small cups, ${mediumCups} medium cups and ${bigCups} big cups available`)
    }
}

function askForCups() {
    if(chooseCoffee == "back") {
            main()
        }
     cupSize = input("What size of coffee would you like, small, medium or big: ")

     const sizeData = getSizeProp(cupSize)

     if(!sizeData) {
        console.log("Invalid size")
        return
     }

     enoughCupsAvailable(sizeData.available)
     numberOfRequestedCups = Number(input(`Enter number of ${cupSize} cups: `))  
}

function requiredIngredients (maxCups){
    console.log(numberOfRequestedCups, maxCups)
    if(numberOfRequestedCups == maxCups){
        console.log(`Yes, i can make that amount of coffee`)}
    if(maxCups - numberOfRequestedCups >= 1){
            console.log(`Yes, i can make that amount of coffee (and even ${maxCups - numberOfRequestedCups} more than that)`)
        }
        else if(numberOfRequestedCups > maxCups){
    console.log(`No, I can make only ${maxCups} cups of coffee`)
   }
}
function calcMaxCups(recipe) {
        const cupsFromWater = 
            recipe.water !== undefined ? Math.floor(waterReserves / recipe.water) : Infinity
        const cupsFromMilk = 
            recipe.milk !== undefined ? Math.floor(milkReserves / recipe.milk) : Infinity
        const cupsFromBeans = 
            recipe.beans !== undefined ? Math.floor(beansReserves / recipe.beans) : Infinity
        const maxCups = Math.min(cupsFromWater, cupsFromMilk, cupsFromBeans)
        waterReserves -= recipe.water * numberOfRequestedCups
        milkReserves -= recipe.milk * numberOfRequestedCups
        beansReserves -= recipe.beans * numberOfRequestedCups
        return maxCups

}

function buyCoffee() {
    
        chooseCoffee = input("What coffee would you like to buy? 1 - espresso, 2 - latte, 3 - cappuccino:")
        if(chooseCoffee == "back") {
            main()
        }
        if(chooseCoffee == "1"){
    maxCups = calcMaxCups(recipeEspresso)
    moneySum += moneyPerOrder(recipeEspresso)
    
            }
        if(chooseCoffee == "2"){
            maxCups = calcMaxCups(recipeLatte)
            moneySum += moneyPerOrder(recipeLatte)
        }
        if(chooseCoffee == "3"){
            maxCups = calcMaxCups(recipeCappuccino)
            moneySum += moneyPerOrder(recipeCappuccino)
        }
    }



function moneyPerOrder(recipe) {
    const coffeeCost = calcCoffeeCost(recipe)
    moneyEarned = numberOfRequestedCups * coffeeCost
    console.log(`I gave you ${moneyEarned.toFixed(2)}`)
    return moneyEarned
    
}

function retrieveTotalMoney() {
        if(numberOfRequestedCups == 0){console.log("No coffee offered")}
        console.log(`I gave you ${moneySum}`)
        moneySum = 0
    }

function oneCoffeeIngredients(obj) {
    
    console.log(`For ${numberOfRequestedCups} cups of coffee you will need :
        ${obj.water * numberOfRequestedCups} ml of water
        ${obj.milk * numberOfRequestedCups} ml of milk
        ${obj.beans * numberOfRequestedCups} g of coffee beans`)
}

function coffeeMachineState() {
    console.log(`The coffee machine has:
${waterReserves} ml of water
${milkReserves} ml of milk
${beansReserves} g of coffee beans
${smallCups} small cups
${mediumCups} medium cups
${bigCups} big cups
${initialMoney + moneySum} of money`)

}

// function returnMainCycle() {

// }

function main() {

    // askForAction()
    while(true){
        const takeAction = input("Write action: ")
        console.log(typeof(takeAction))
        if(takeAction == "exit") {
            break
        }
    
    switch(takeAction) {
        case "buy":
            askForCups()
            buyCoffee()
            requiredIngredients(maxCups)
            break;
            // askForAction()
        case "fill":
            fill()
            break;
        case "take":
            retrieveTotalMoney()
            break;
        case "remaining": 
            coffeeMachineState()
            break;
    }
}
}
main()
