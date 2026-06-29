const showAllBtn = document.querySelector("#show-full-list-btn")
const projectsList = document.querySelectorAll("#home-projects-list li:nth-child(n+4)")


showAllBtn.addEventListener("click", () => {
    if(showAllBtn.textContent == "Show more"){
    showAllBtn.textContent = "Show less"
    } else{
        showAllBtn.textContent = "Show more"
    }
    for(let i = 0; i < projectsList.length; i++) {
        projectsList[i].classList.toggle("hidden")
    }
})