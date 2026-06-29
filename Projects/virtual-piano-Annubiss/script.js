document.addEventListener("DOMContentLoaded", function() {
    const keyToSound = {
        a: {src: "Sounds/A.mp3", volume: 0.4, rate: 1},
        s: {src: "Sounds/S.mp3", volume: 0.4, rate: 1},
        d: {src: "Sounds/D.mp3", volume: 0.4, rate: 1},
        f: {src: "Sounds/F.mp3", volume: 0.4, rate: 1},
        g: {src: "Sounds/G.mp3", volume: 0.4, rate: 1},
        h: {src: "Sounds/H.mp3", volume: 0.4, rate: 1},
        j: {src: "Sounds/J.mp3", volume: 0.4, rate: 1},
        w: {src: "Sounds/black-keys/W.mp3", volume: 0.4, rate: 1},
        e: {src: "Sounds/black-keys/E.mp3", volume: 0.4, rate: 1},
        t: {src: "Sounds/black-keys/T.mp3", volume: 0.4, rate: 1},
        y: {src: "Sounds/black-keys/Y.mp3", volume: 0.4, rate: 1},
        u: {src: "Sounds/black-keys/U.mp3", volume: 0.4, rate: 1}
    }

    document.addEventListener("keydown", (e) => {
        if(e.key == "a") {
          return  playSound(keyToSound.a)
        }
        if(e.key == "s") {
            return  playSound(keyToSound.s)
        }
        if(e.key == "d") {
            return  playSound(keyToSound.d)
        }
        if(e.key == "f") {
           return  playSound(keyToSound.f)
        }
        if(e.key == "g") {
            return  playSound(keyToSound.g)
        }
        if(e.key == "h") {
            return  playSound(keyToSound.h)
        }
        if(e.key == "j") {
            return  playSound(keyToSound.j)
        }
         if(e.key == "w") {
          return  playSound(keyToSound.w)
        }
         if(e.key == "e") {
          return  playSound(keyToSound.e)
        }
         if(e.key == "t") {
          return  playSound(keyToSound.t)
        }
         if(e.key == "y") {
          return  playSound(keyToSound.y)
        }
         if(e.key == "u") {
          return  playSound(keyToSound.u)
        }

        else {
            console.log("Vezi ca ai gresit tasta")
        }


    })

    function playSound({src, volume = 1, rate = 1}) {
        const a = new Audio(src)
        a.volume = volume
        a.playbackRate = rate
        a.currentTime = 0;
        a.play().catch(() => {})       
    }
})