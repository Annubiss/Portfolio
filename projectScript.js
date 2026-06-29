const projectsList = document.querySelectorAll("#home-projects-list li:nth-child(n+4)")
const params = new URLSearchParams(window.location.search)
const id = params.get("id")
const project = projects[id]
const skillsContainer = document.getElementById("project-skills")
const screenshotsContainer = document.getElementById("project-screenshots")

document.getElementById("project-title").textContent = project.title
document.getElementById("project-description").textContent = project.description
document.getElementById("project-snippet").textContent = project.snippet
document.getElementById("project-iframe").src = project.liveUrl


project.skills.forEach(skill => {
    const span = document.createElement("span")
    span.textContent = skill;
    skillsContainer.appendChild(span)
})

project.screenshots.forEach(screenshot => {
    const img = document.createElement("img")
    img.src = screenshot
    screenshotsContainer.appendChild(img)
})