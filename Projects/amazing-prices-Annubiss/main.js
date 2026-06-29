document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll("td").forEach(td =>{
        if(td.textContent.trim() == "X") td.style.textAlign = "center"
    })
})