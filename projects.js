const projects = {

  virtualPiano: {
    liveUrl: "Projects/virtual-piano-Annubiss",
    id: "virtual-piano-Annubiss",
    title: "Virtual Piano",
    description: "Pian virtual controlat de la tastatura — fiecare tasta declanseaza un sunet real pentru clapele albe si negre, cu volum si playback rate configurabil.",
    skills: ["HTML", "CSS", "JavaScript", "Web Audio API"],
    screenshots: ["Images/virtual-piano.png"],
    snippet: `function playSound({ src, volume = 1, rate = 1 }) {
  const a = new Audio(src)
  a.volume = volume
  a.playbackRate = rate
  a.currentTime = 0
  a.play().catch(() => {})
}

document.addEventListener("keydown", (e) => {
  if (keyToSound[e.key]) {
    playSound(keyToSound[e.key])
  }
})`
  },

  fantasticBeings: {
     liveUrl: "Projects/fantastic-beings-and-how-to-match-them-Annubiss",
    id: "fantastic-beings-and-how-to-match-them-Annubiss",
    title: "Fantastic Beings and How to Match Them",
    description: "Joc match-3 cu tema Harry Potter — potrivesti creaturi magice pe o grila 5x5. Include algoritm de detectie a perechilor pe linii si coloane, sistem de scor, conditii de castig/pierdere si efecte sonore.",
    skills: ["HTML", "CSS", "JavaScript"],
    screenshots: ["Images/Match 3"],
    snippet: `aaa function match3Plus() {
  const size = getGridSize()
  const toClear = new Set()

  for (let x = 0; x < size; x++) {
    let runBeing = null, runStartY = 0, runLen = 0
    for (let y = 0; y <= size; y++) {
      const td = (y < size) ? cellAt(x, y) : null
      const being = td ? (td.dataset.being || "") : null
      if (being && being === runBeing) {
        runLen++
      } else {
        if (runBeing && runLen >= 3) {
          for (let k = 0; k < runLen; k++)
            toClear.add(cellAt(x, runStartY + k))
        }
        runBeing = being || null
        runStartY = y
        runLen = being ? 1 : 0
      }
    }
  }
  return { toClear }
}`
  },

  aTaleOfCleanCode: {
    liveUrl: "Projects/A-tale-of-CleanCode",
    id: "A-tale-of-CleanCode",
    title: "A Tale of Clean Code",
    description: "Site multi-pagina despre filozofi si ideologii, construit cu HTML si CSS pur. Include pagini separate pentru Home, Filozofi si Ideologii, cu un stylesheet comun.",
    skills: ["HTML", "CSS"],
    screenshots: ["Images/A-tale-of-Cleancode.png"],
    snippet: `<!-- Philosophers.html -->
<nav>
  <a href="Home.html">Home</a>
  <a href="Philosophers.html">Philosophers</a>
  <a href="Ideologies.html">Ideologies</a>
</nav>

<section class="philosophers-grid">
  <article class="philosopher-card">
    <h2>Socrates</h2>
    <p>The unexamined life is not worth living.</p>
  </article>
</section>`
  },

  aBeautifulTale: {
    liveUrl: "Projects/a-beautiful-tale-of-Annubiss",
    id: "a-beautiful-tale-of-Annubiss",
    title: "A Beautiful Tale",
    description: "Site multi-pagina cu tema de gladiatori romani, cu night mode, typing effect animat si preview dinamic de imagini la click pe celule dintr-un tabel hero.",
    skills: ["HTML", "CSS", "JavaScript"],
    screenshots: ["Images/A-beautiful-tale.png"],
    snippet: `function typeText(text) {
  if (typingTimer) clearInterval(typingTimer)
  heroText.textContent = ""
  let i = 0
  typingTimer = setInterval(() => {
    if (i < text.length) {
      heroText.textContent += text[i]
      i++
    } else {
      clearInterval(typingTimer)
      typingTimer = null
    }
  }, 35)
}`
  },

  zookeeper: {
    liveUrl: "Projects/zookeeper-Annubiss",
    id: "zookeeper-Annubiss",
    title: "Zookeeper",
    description: "Aplicatie web interactiva care afiseaza animale ASCII art dintr-o gradina zoologica virtuala. Utilizatorul navigheaza prin habitate folosind prompt-uri in browser.",
    skills: ["HTML", "JavaScript"],
    screenshots: ["Images/animalhabitat1.png", "Images/animal-habitat.png"],
    snippet: `const zoo = {
  camel: "...",
  rabbit: "...",
  bat: "..."
}

function showAnimals() {
  while (i > 0) {
    const selectedHabitat = prompt("Enter habitat number:")
    if (selectedHabitat === "exit") { goodbyeMsg(); return }
    const pre = document.createElement("pre")
    pre.textContent = zoo[animalList[selectedHabitat]]
    document.body.append(pre)
    i--
  }
  goodbyeMsg()
}`
  },

  simpleChatBot: {
    liveUrl: "Projects/simple-chat-bot-Annubiss",
    id: "simple-chat-bot-Annubiss",
    title: "Simple Chat Bot",
    description: "Chatbot multi-pas in browser care ghiceste varsta utilizatorului folosind teorema chineza a resturilor, numara pana la un numar dat si pune un quiz de programare.",
    skills: ["HTML", "JavaScript"],
    screenshots: ["Images/simple-chatbot.png"],
    snippet: `function guessAge(remainder3, remainder5, remainder7) {
  const age = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105
  const yourAge = document.createElement("p")
  yourAge.textContent = age
  document.body.append(yourAge)
}

function verifyNumber() {
  return !Number.isNaN(Number(yourInput.value))
}`
  },

  myFirstShop: {
    liveUrl: "Projects/my-first-shop-Annubiss",
    id: "my-first-shop-Annubiss",
    title: "My First Shop",
    description: "Aplicatie Node.js CLI care afiseaza preturile si castigurile unui magazin, calculeaza profitul net dupa deducerea cheltuielilor cu personalul si a altor costuri.",
    skills: ["Node.js", "JavaScript"],
    screenshots: ["Images/Fist-landing-page.png"],
    snippet: `function printDict(obj, mode = "both", header = "") {
  if (header) console.log(header)
  for (const key in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue
    let line
    if (mode === "keys")        line = key
    else if (mode === "values") line = obj[key]
    else                        line = \`\${key}: \${obj[key]}\`
    console.log(line)
  }
}`
  },

  chalkboardPrinter: {
    liveUrl: "Projects/chalkboard-printer-Annubiss",
    id: "chalkboard-printer-Annubiss",
    title: "Chalkboard Printer",
    description: "Aplicatie Node.js CLI care primeste un nume, prenume, mesaj si numar de repetari, afisand mesajul personalizat de N ori in terminal.",
    skills: ["Node.js", "JavaScript"],
    screenshots: ["Images/Chalkboard-printer.png"],
    snippet: `const input = require('sync-input')

const charName     = input("Enter name: ")
const charSurname  = input("Enter surname: ")
const message      = input("Enter message: ")
const repeatNumber = Number(input("Enter number of repeats: "))

for (let i = 0; i < repeatNumber; i++) {
  console.log(\`This is \${charName} \${charSurname} and \${message}\`)
}`
  },

  coffeeMachine: {
    liveUrl: "Projects/coffee-machine-Annubiss",
    id: "coffee-machine-Annubiss",
    title: "Coffee Machine",
    description: "Simulare completa a unei masini de cafea in Node.js — gestioneaza resurse (apa, lapte, boabe), vinde 3 tipuri de cafea (espresso, latte, cappuccino) si calculeaza profitul acumulat.",
    skills: ["Node.js", "JavaScript"],
    screenshots: ["Images/Coffee-machine.png"],
    snippet: `function calcMaxCups(recipe) {
  const cupsFromWater = recipe.water !== undefined
    ? Math.floor(waterReserves / recipe.water) : Infinity
  const cupsFromMilk  = recipe.milk  !== undefined
    ? Math.floor(milkReserves  / recipe.milk)  : Infinity
  const cupsFromBeans = recipe.beans !== undefined
    ? Math.floor(beansReserves / recipe.beans) : Infinity

  const maxCups = Math.min(cupsFromWater, cupsFromMilk, cupsFromBeans)
  waterReserves  -= recipe.water  * numberOfRequestedCups
  milkReserves   -= recipe.milk   * numberOfRequestedCups
  beansReserves  -= recipe.beans  * numberOfRequestedCups
  return maxCups
}`
  },

  carnivalGiftShop: {
    liveUrl: "Projects/carnival-gift-shop-Annubiss",
    id: "carnival-gift-shop-Annubiss",
    title: "Carnival Gift Shop",
    description: "Magazin de premii de carnaval in Node.js cu sistem de tichete, inventar de cadouri, validare numerica a input-ului si preventie impotriva cumpararii duplicate.",
    skills: ["Node.js", "JavaScript"],
    screenshots: ["Images/Carnival.png"],
    snippet: `function findInObj(obj, prop, searchValue, returnWhat = "key") {
  for (const key in obj) {
    const item = obj[key]
    if (prop === "name") {
      if (key === searchValue)
        return returnWhat === "key" ? key : item
    } else {
      if (item[prop] === searchValue)
        return returnWhat === "key" ? key : item
    }
  }
  return null
}`
  },

  caseConverter: {
    liveUrl: "Projects/case-converter-Annubiss",
    id: "case-converter-Annubiss",
    title: "Case Converter",
    description: "Tool web pentru conversie text cu patru moduri: UPPERCASE, lowercase, Proper Case si Sentence case. Include functie de download al textului ca fisier .txt.",
    skills: ["HTML", "CSS", "JavaScript"],
    screenshots: ["Images/Case converter.png"],
    snippet: `function properCase(text) {
  return text.toLowerCase().replace(/\\b\\w/g, char => char.toUpperCase())
}

function sentenceCase(text) {
  return text.toLowerCase().replace(/\\b\\w/, char => char.toUpperCase())
}

function download(filename, text) {
  const el = document.createElement("a")
  el.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text))
  el.setAttribute("download", filename)
  el.click()
}`
  },

  spinTheBottle: {
    liveUrl: "Projects/spin-the-bottle-Annubiss",
    id: "spin-the-bottle-Annubiss",
    title: "Spin the Bottle",
    description: "Joc de spin the bottle in browser — adaugi jucatori printr-un formular, apesi Spin si dupa un delay de 2 secunde se afiseaza un castigator ales aleatoriu.",
    skills: ["HTML", "CSS", "JavaScript"],
    screenshots: ["Images/spin-the-bottle.png"],
    snippet: `spinBtn.addEventListener("click", function () {
  if (players.length === 0) {
    status.textContent = "Add players to spin the bottle."
    return
  }
  const chosen = players[Math.floor(Math.random() * players.length)]
  status.textContent = "Spinning..."
  setTimeout(() => {
    status.textContent = chosen
  }, 2000)
})`
  },

  simpleStopwatch: {
    liveUrl: "Projects/simple-stopwatch-Annubiss",
    id: "simple-stopwatch-Annubiss",
    title: "Simple Stopwatch",
    description: "Cronometru cu start, stop, reset si lap. Afiseaza timpul in format MM:SS:cs cu culori dinamice: verde sub 10s, portocaliu pana la 30s, rosu dupa.",
    skills: ["HTML", "CSS", "JavaScript"],
    screenshots: ["Images/simple-stopwatch.png"],
    snippet: `function startTimer() {
  if (intervalId !== null) return
  startTime = Date.now() - elapsed
  intervalId = setInterval(() => {
    elapsed = Date.now() - startTime
    timer.textContent = formatTime(elapsed)
    colorTime(timer)
  }, 10)
}

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000)
  const minutes      = Math.floor(totalSeconds / 60)
  const seconds      = totalSeconds % 60
  const centiSeconds = Math.floor((ms % 1000) / 10)
  return [minutes, seconds, centiSeconds]
    .map(n => String(n).padStart(2, "0"))
    .join(":")
}`
  },

  colorGuessGame: {
    liveUrl: "Projects/color-guess-game-Annubiss",
    id: "color-guess-game-Annubiss",
    title: "Color Guess Game",
    description: "Joc de ghicit culori RGB — dai click pe culoarea care corespunde codului RGB afisat. Culorile gresite dispar progresiv, iar titlul paginii are un gradient din toate culorile active.",
    skills: ["HTML", "CSS", "JavaScript"],
    screenshots: [],
    snippet: `function randomColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return \`RGB(\${r}, \${g}, \${b})\`
}

function colorChecker(elem, rgbText) {
  const elemRgb = getComputedStyle(elem).backgroundColor.replace(/\\s+/g, "")
  const target  = rgbText.textContent.toLowerCase().replace(/\\s+/g, "")
  return elemRgb === target
}`
  },

  amazingPrices: {
    liveUrl: "Projects/amazing-prices-Annubiss",
    id: "amazing-prices-Annubiss",
    title: "Amazing Prices",
    description: "Calculator de venituri Node.js — afiseaza preturile si castigurile pe produs, citeste cheltuielile introduse de utilizator si calculeaza profitul net total.",
    skills: ["Node.js", "JavaScript"],
    screenshots: [],
    snippet: `function calculateEarningsTotal() {
  for (const key in earnings) {
    const cleaned = earnings[key].replace(/[^0-9.-]/g, "")
    sum += Number(cleaned)
  }
  sum = sum - staffExpenses - otherExpenses
  console.log(\`Income: \${sum}\`)
}`
  },

  firstLanding: {
    liveUrl: "Projects/first-landing-Annubiss",
    id: "first-landing-Annubiss",
    title: "First Landing Page",
    description: "Landing page multi-pagina (Home, Product, Contact) pentru un magazin fictiv, construit cu HTML si CSS. Prima pagina web completa cu navigatie functionala intre sectiuni.",
    skills: ["HTML", "CSS"],
    screenshots: [],
    snippet: `<header>
  <nav class="nav-btn">
    <a id="link_logo" href="index.html">
      <img class="small_img" src="Images/logo-ciuperceni.png">
    </a>
    <a href="index.html">Home</a>
    <a href="product.html">Product</a>
    <a href="contact.html">Contact</a>
  </nav>
</header>`
  },

  javascriptPractice: {
    liveUrl: "Projects/javascript-practice-Annubiss",
    id: "javascript-practice-Annubiss",
    title: "JavaScript Practice",
    description: "Set de exercitii JavaScript rezolvate cu teste Jest — acopera array manipulation, string processing, algoritmi matematici (numere prime, DNA, matrice) si structuri de date complexe.",
    skills: ["JavaScript", "Jest", "ESLint", "Babel", "Prettier"],
    screenshots: [],
    snippet: `export const sumDigits = (n) => {
  if (n === undefined) throw new Error("n is required")
}

export const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required")
  if (end   === undefined) throw new Error("end is required")
}

export const findWinner = (board) => {
  if (board === undefined) throw new Error("board is required")
}`
  },

dogGlossary: {
  liveUrl: "Projects/dog-glossary-Annubiss",
    id: "dog-glossary-Annubiss",
    title: "Dog Glossary",
    description: "Aplicatie web care consuma Dog CEO API — afiseaza caini aleatorii, cauti dupa rasa, vezi sub-rase si listezi toate rasele disponibile cu sub-rase imbricate.",
    skills: ["HTML", "CSS", "JavaScript", "Fetch API", "REST API"],
    screenshots: [],
    snippet: `async function showRandomBreed() {
  const selectedBreed = checkEmptyInput()
  if (selectedBreed === null) return

  const res  = await fetch(\`https://dog.ceo/api/breed/\${selectedBreed}/images/random\`)
  const data = await res.json()

  if (data.status !== "success") {
    content.textContent = "Unknown breed, try husky, pug, bulldog..."
    return
  }
  const img = document.createElement("img")
  img.src = data.message
  content.innerHTML = ""
  content.appendChild(img)
}`
  },

  randomUserGenerator: {
    liveUrl: "Projects/random-user-generator-Annubiss",
    id: "random-user-generator-Annubiss",
    title: "Random User Generator",
    description: "Generator de utilizatori aleatorii folosind randomuser.me API. Poti selecta ce campuri sa fie afisate (nume, email, poza, locatie etc.), salva utilizatori in localStorage si re-reda lista la refresh.",
    skills: ["HTML", "CSS", "JavaScript", "Fetch API", "REST API", "localStorage"],
    screenshots: [],
    snippet: `const FIELD_CONFIG = [
  { key: "name",     label: "Name:",     get: u => \`\${u.name.first} \${u.name.last}\` },
  { key: "email",    label: "Email:",    get: u => u.email },
  { key: "location", label: "Location:", get: u => \`\${u.location.city}, \${u.location.country}\` },
  { key: "phone",    label: "Phone:",    get: u => u.phone },
]

function createUserCard(user, selected) {
  const card = document.createElement("div")
  card.className = "user-card"
  for (const field of FIELD_CONFIG) {
    if (!selected[field.key]) continue
    const p = document.createElement("p")
    p.innerHTML = \`<strong>\${field.label}</strong> \${field.get(user)}\`
    card.appendChild(p)
  }
  return card
}`
  },

  websiteForTheVisuallyImpaired: {
    liveUrl: "Projects/website-for-the-visually-impaired-Annubiss",
    id: "website-for-the-visually-impaired-Annubiss",
    title: "Website for the Visually Impaired",
    description: "Tool de accesibilitate web — panou de control care permite schimbarea dinamica a dimensiunii textului (Small/Medium/Large/Larger) si a temei de culori (White/Yellow/Blue) pe orice pagina.",
    skills: ["HTML", "CSS", "JavaScript"],
    screenshots: [],
    snippet: `function applyTextSize(size) {
  const map = { Small: "16px", Medium: "24px", Large: "29px", Larger: "32px" }
  const fontSize = map[size] ?? "16px"
  document.querySelectorAll("*").forEach(el => { el.style.fontSize = fontSize })
}

function applyColors(color) {
  const themes = {
    Blue:   { bg: "#002452", text: "#fff" },
    Yellow: { bg: "#f5d328", text: "#000" },
    White:  { bg: "#fff",    text: "#000" },
  }
  if (!themes[color]) return
  document.body.style.backgroundColor = themes[color].bg
  document.body.style.color            = themes[color].text
}`
  },

  urlShortener: {
    liveUrl: "Projects/url-shortener-Annubiss",
    id: "url-shortener-Annubiss",
    title: "URL Shortener",
    description: "URL shortener in browser — genereaza coduri scurte aleatorii, afiseaza URL-ul original, numara click-urile pe fiecare link si permite editarea codului scurt. Include efect glitch CSS pe titlu la fiecare creare.",
    skills: ["HTML", "CSS", "JavaScript"],
    screenshots: [],
    snippet: `function shortenURL(length = 5) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let code = ""
  for (let i = 0; i < length; i++) {
    code += chars[Math.floor(Math.random() * chars.length)]
  }
  return code
}

function clickCounter() {
  const clicks = document.createElement("div")
  let numberOfClicks = 0
  const render = () => { clicks.textContent = \`Clicks: \${numberOfClicks}\` }
  render()
  return { clicks, incrementClicks: () => { numberOfClicks++; render() } }
}`
  },

  toDoList: {
    liveUrl: "Projects/to-do-list-Annubiss",
    id: "to-do-list-Annubiss",
    title: "To-Do List",
    description: "Aplicatie de task management cu persistenta in localStorage — adaugi task-uri, le bifezi ca finalizate, le stergi, iar lista se salveaza si se reincarca automat la refresh.",
    skills: ["HTML", "CSS", "JavaScript", "localStorage"],
    screenshots: [],
    snippet: `function renderTasks() {
  taskList.innerHTML = ""
  tasks.forEach(task => {
    const li       = document.createElement("li")
    const checkbox = document.createElement("input")
    checkbox.type    = "checkbox"
    checkbox.checked = task.completed
    checkbox.dataset.id = task.id

    const span = document.createElement("span")
    span.textContent = task.text
    if (task.completed) span.classList.add("completed")

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "x"
    deleteBtn.dataset.id = task.id

    li.append(checkbox, span, deleteBtn)
    taskList.append(li)
  })
}`
  },

  openSpace: {
    liveUrl: "Projects/open-space-Annubiss",
    id: "open-space-Annubiss",
    title: "Open Space",
    description: "Proiect CSS/UI experimental — un panou de control spatial cu checkboxuri, slidere si un buton de lansare, animat cu CSS. Accent pe design si atmosfera vizuala.",
    skills: ["HTML", "CSS", "JavaScript"],
    screenshots: [],
    snippet: `<!-- Panoul de control -->
<div class="control-panel">
  <input id="launch-pass-input" type="password">
  <button id="ok-btn">Ok</button>
  <div class="check-buttons">
    <input type="checkbox">
    <input type="checkbox">
    <input type="checkbox">
  </div>
  <div class="levers">
    <input type="range">
    <input type="range">
  </div>
  <button id="launch-btn">Launch</button>
</div>`
  }

}


