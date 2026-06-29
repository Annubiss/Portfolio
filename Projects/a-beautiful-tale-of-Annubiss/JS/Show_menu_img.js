

console.log("External JS is loading...");

document.addEventListener("DOMContentLoaded", () => {
const btn = document.querySelectorAll(".menu-buttons")
const layout = document.querySelector(".menu-layout")
const toggleBtn = document.querySelector(".menu-toggle")
const previewImg = document.getElementById("img-menu-preview")
const path = window.location.pathname
const currentFile = path.substring(path.lastIndexOf('/') + 1) || "index.html"
const heroCells = document.querySelectorAll("[data-col]")
const heroImg = document.getElementById('hero-img')
const heroText = document.getElementById('hero-text')

const heroData = {
    spartacus: {
      img: 'Images/Weid money pigeon.jpg',   // change to your real path
      alt: 'Spartacus, the Unbroken Rebel',
      text: 'Spartacus, the Unbroken Rebel, fights with gladius and scutum and inspires slaves to rise against Rome.'
    },
    aelia: {
      img: 'Images/Pigeon_placeholder.jpg',       // change to your real path
      alt: 'Aelia, the Sandstorm',
      text: 'Aelia, the Sandstorm, dances around her foes with net and trident, striking from the dust with deadly precision.'
    },
    gaius: {
      img: 'Images/pigeon_placeholder2.jpg',       // change to your real path
      alt: 'Gaius Ferro, the Iron Beast',
      text: 'Gaius Ferro, the Iron Beast, advances like a living fortress, turning the arena floor into a battlefield of broken steel.'
    }
  }

  let typingTimer = null;
  function typeText(text) {
    if(typingTimer) {
        clearInterval(typingTimer)
        typingTimer
    }
  

heroText.textContent = ""
let i = 0

typingTimer = setInterval(() => {
    if (i < text.length) {
        heroText.textContent += text[i]
        i++
    } else {
        clearInterval(typingTimer)
        typingTimer = null;
    }
}, 35)
}

if(layout && toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        layout.classList.toggle("menu-open")
    })
}

heroCells.forEach(cell => {
    cell.style.cursor = "pointer"
    cell.addEventListener("click", () => {
        const col = cell.dataset.col

        document.querySelectorAll('.hero-active')
                .forEach(c => c.classList.remove('hero-active'))

        document
        .querySelectorAll(`td[data-col="${col}"], th[data-col="${col}"]`)
        .forEach(c => c.classList.add("hero-active"), console.log(`td[data-col="${col}"]`))

        const heroInfo = heroData[col]

        if(heroInfo) {
            heroImg.src = heroInfo.img
            heroImg.alt = heroInfo.alt
            typeText(heroInfo.text)
        }
        
    })
})
})

