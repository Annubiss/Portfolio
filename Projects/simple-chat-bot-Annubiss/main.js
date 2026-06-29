document.addEventListener('DOMContentLoaded', function() {
    const greetingName = "Hello! My name is Odobasian"
    const greetingTime = "I was born in 2025"
    const preName = document.createElement("pre")
    const preYear = document.createElement("pre")
    var yourInput = document.createElement("input")
    yourInput.setAttribute("type", "text")
    preName.textContent = greetingName
    preYear.textContent = greetingTime
    document.body.append(preName, preYear, yourInput)
    count = 0
   const ageArray =[]
   const answer = document.createElement("pre")
    

    function clearInput(){
        
        yourInput.value =""
    }

    function helloUser() {
        const userName = `What a great name you have ${yourInput.value}`
        const displayName = document.createElement("pre")
        displayName.textContent = userName
        document.body.append(displayName)
    }

    function verifyNumber(){
        
        return !Number.isNaN(Number(yourInput.value))
    }

    function guessAge(remainder3, remainder5, remainder7) {
        age = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105
        const yourAge = document.createElement("p")
        yourAge.textContent = age
        document.body.append(yourAge)
    }

    function canCount() {
        const countArray =[]
        if(verifyNumber){
            i = Number(yourInput.value) 
            while(i > 0){
                countArray.push(i)
                i--
            }
        countArray.reverse()
        for(j = 0; j < countArray.length; j++) {
            const showCount = document.createElement("pre")
            if(j == countArray.length - 1){
                showCount.textContent = countArray[j] + "!\nHave a nice day"
            }else{
                showCount.textContent = countArray[j] + "!"
            }
            
            document.body.append(showCount)
        }
        }
        console.log(countArray)
    }

    function askQuestion() {
        let quizQuestions = {
        question1: "In which programming language, to bake an apple pie, you first have to invent the universe?",
        answer1: "Python",
        answer2: "Javascript",
        answer3: "Assembly"
    }
        const question = document.createElement("pre")
        
        question.textContent = `${quizQuestions.question1}\n
                               1.${quizQuestions.answer1}\n
                               2.${quizQuestions.answer2}\n
                               3.${quizQuestions.answer3}`
        document.body.append(question)
    }
    function verifyAnswer() {
        
        if(yourInput.value == "3"){
            answer.textContent = "Congratulations, have a nice day!"
        }else if(yourInput.value == 1 || yourInput.value == 2){
            answer.textContent = "Please try again."
        }
        document.body.append(answer)
    }

    yourInput.addEventListener("keydown", (e) =>{
        if(e.code == "Enter" && count == 0){
            helloUser()
            clearInput()
            const preReminder = document.createElement("pre")
            preReminder.textContent = "Let me guess your age.\nEnter remainders of dividing your age by 3, 5 and 7."
            document.body.append(preReminder)
            count ++
            
        }else if(e.code == "Enter" && count < 4) {
            
            
            if(verifyNumber()){ 
                ageArray.push(Number(yourInput.value))
                count++
            }
                console.log(ageArray)
            clearInput()
            
        }

        if(ageArray.length == 3 && count == 4){
            guessAge(ageArray[0], ageArray[1], ageArray[2])
            const counter = document.createElement("p")
            counter.textContent = "Now I will prove to you that I can count to any number you want."
            document.body.append(counter)
            count ++
        }else if(e.code == "Enter" && count > 4 && count < 6) {
            canCount()
            count ++
        }
        if(e.code == "Enter" && count >= 6 && count < 7) {
            clearInput()
            askQuestion()
            count++
        }
        if(e.code == "Enter" && count >= 7 && count < 8) {
            verifyAnswer()
        }
    })
})