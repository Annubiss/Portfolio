document.addEventListener("DOMContentLoaded", function() {
    const spinBtn = document.querySelector("#spin")
    const status = document.querySelector("#status")
    const playerElements = document.querySelectorAll("#players li")
    const form = document.getElementById("player-form")
    const players = []
    const nameInput = document.getElementById("name")
    const playersList = document.getElementById("players")

    // let name

    form.addEventListener("submit", (event) =>{
        event.preventDefault();

        const name = nameInput.value.trim()

        if(players.includes(name)){
            status.textContent = "Player already exists"
            return
        }

        
        if(!name) return

        players.push(name)

        const li = document.createElement("li")
        li.textContent = name
        playersList.appendChild(li)

        nameInput.value = ""
    })
   
    spinBtn.addEventListener("click", function() {
            if(players.length == 0){
                status.textContent = "Add players to spin the bottle."
            }

            

            const chosen = players[Math.floor(Math.random() * players.length)]
            status.textContent = "Spinning..."
            setTimeout(() =>{
                status.textContent = chosen
            }, 2000)
            console.log(chosen)
    })
})