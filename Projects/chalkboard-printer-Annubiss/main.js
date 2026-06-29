const input = require('sync-input')
let charName = input("Enter name: ")
let charSurname = input("Enter surname: ")
let message = input("Enter message: ")
let repeatNumber = Number(input("Enter number of repeats: "))

for(i = 0; i < repeatNumber; i++) {
    console.log(`This is ${charName} ${charSurname} and ${message}`)
}