document.addEventListener("DOMContentLoaded", () =>{

const dogBtn = document.querySelector("#button-random-dog")
const content = document.querySelector("#content")
const breedInput = document.querySelector("#input-breed")
const breedBtn = document.querySelector("#breed-btn")
const subBreedsBtn = document.querySelector("#breed-list-btn")
const showAllBreedsBtn = document.querySelector("#button-show-all")
const selectedBreed = null

async function showRandomDog() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await response.json()

        content.innerHTML = ""

        const dogImg = document.createElement("img")
        dogImg.src = data.message
        dogImg.alt = "Random dog"
        dogImg.id = "medium-img"
        
        content.appendChild(dogImg)
    } 
    catch (error){
        console.log(error)
        content.textContent = "Failed to load the DAWG"
    }
}

dogBtn.addEventListener("click", showRandomDog)

function checkEmptyInput() {
    const selectedBreed = breedInput.value.trim().toLowerCase()

    if(selectedBreed == "") {
        content.textContent = "Please, type a breed first"
        return null
    }
    return selectedBreed
}

async function showRandomBreed() {
    const selectedBreed = checkEmptyInput()
    if(selectedBreed == null) return

    const url = `https://dog.ceo/api/breed/${selectedBreed}/images/random`

    try {
        const res = await fetch(url)

        const data = await res.json()

        if(data.status !== "success") {
            content.textContent = "Unknown breed, try husky, pug, bulldog, etc"
            return
        }
        content.innerHTML = ""

        const img = document.createElement('img')
        img.src = data.message
        img.alt = `${selectedBreed} dog`
        content.appendChild(img)
    } catch(err) {
    
        console.log(err)
        content.textContent = "Failed to load dog image"

}   
}
breedBtn.addEventListener("click", showRandomBreed)

async function showSubBreeds() {
    const selectedBreed = checkEmptyInput()
    if(selectedBreed == null) return

    const url = `https://dog.ceo/api/breed/${selectedBreed}/list`

    try {
    const res = await fetch(url)
    const data = await res.json()

    if(data.status !== 'success') {
        content.textContent = 'Unknown breed, try an existing one'
        return
    }
    content.innerHTML = ''
    const ol = document.createElement("ol")

    for(let i = 0; i < data.message.length; i++) {
        const li = document.createElement("li")
        li.textContent = data.message[i]
        ol.appendChild(li)
    }
    content.appendChild(ol)
    
    if(ol.textContent == "") {
        content.textContent = "There are no sub-breeds"
        return
    }

    }
 catch(err) {

    console.log(err)
    content.textContent = "Failed to show list"
}
}
subBreedsBtn.addEventListener("click", showSubBreeds)


async function showAllBreeds() {
    

    const url = "https://dog.ceo/api/breeds/list/all"

    try {
        const res = await fetch(url)
        const data = await res.json()

        // if(data.status == "success") {
        //     content.textContent = 'Unknown breed, try an existing one'
        //     return
        // }

        content.innerHTML = ''
        const ol = document.createElement("ol")
        const ul = document.createElement("ul")

        for(const breed in data.message){
            const breedLi = document.createElement("li")
            breedLi.textContent = breed

            const subBreeds = data.message[breed]
            
            if(subBreeds.length > 0) {
                const ul = document.createElement('ul')
            

        for(let j = 0; j < subBreeds.length; j++) {
                const subLi = document.createElement('li')
                subLi.textContent = subBreeds[j]
                ul.appendChild(subLi)
        }
        breedLi.appendChild(ul)
        }
        ol.appendChild(breedLi)
    }
    content.appendChild(ol)

    }catch(err) {
        console.log(err)
        content.textContent = "Failed to show list"
} 

}
showAllBreedsBtn.addEventListener("click", showAllBreeds)
})
