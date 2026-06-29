document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("button")
    const timer = document.querySelector("#timer")
    const lapsList = document.querySelector("#laps")

    let intervalId = null;
    let startTime = 0
    let elapsed = 0

    buttons.forEach(button => {
    button.addEventListener("click", handleClick)
    })


    function colorTime(target) {
        if (elapsed < 10_000) {
                target.style.color = "green"
            } else if(elapsed <30_000) {
                target.style.color = "orange"
            } else{
                target.style.color = "red"
            }
    }

    function startTimer() {
        if(intervalId !== null) return

        startTime = Date.now() - elapsed

        intervalId = setInterval(() =>{
            elapsed = Date.now() - startTime
            timer.textContent = formatTime(elapsed)
            colorTime(timer)
            
        }, 10)
    }

    function stopTimer() {
        if (intervalId == null) return
        clearInterval(intervalId)
        intervalId = null
    }

    function resetTimer() {
       
        clearInterval(intervalId)
        intervalId = null
        elapsed = 0
        timer.textContent = "00:00:00"
    }

    function lapTimer() {
        const li = document.createElement("li")
        li.textContent = formatTime(elapsed)
        colorTime(li)
        lapsList.appendChild(li)
    }

    function formatTime(ms) {
        const totalSeconds = Math.floor(ms/1000)
        const seconds = totalSeconds % 60
        const centiSeconds = Math.floor((ms % 1000) / 10)
        const minutes = Math.floor(totalSeconds / 60)

        const mm = String(minutes).padStart(2, "0")
        const ss = String(seconds).padStart(2, "0")
        const cs = String(centiSeconds).padStart(2, "0")

        return `${mm}:${ss}:${cs}`
        
    }

    function handleClick(e) {

        const id = e.target.id

        switch(id) {
            case "start":
                console.log("start")
                startTimer()
                break
            case "stop":
                stopTimer()
                break
            case "reset":
                resetTimer()
                break
            case "lap":
                lapTimer()
                break
        }
    }
})