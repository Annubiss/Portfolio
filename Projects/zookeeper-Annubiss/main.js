let loopStarted = false
document.addEventListener('DOMContentLoaded', function(){
if (loopStarted) return
loopStarted = true

const animalOpinion = document.createElement("p")
const coolCamel = document.createElement('pre')
const selectedAnimal = document.createElement('pre')
animalOpinion.textContent = "I love animals!\nLet's check on the animals...\nThe deer looks fine.\nThe bat looks happy.\nThe lion looks healthy."
coolCamel.textContent = String.raw`Switching on the camera in the camel habitat...
 ___.-''''-.
/___  @    |
',,,,.     |         _.'''''''._
     '     |        /           \
     |     \    _.-'             \
     |      '.-'                  '-.
     |                               ',
     |                                '',
      ',,-,                           ':;
           ',,| ;,,                 ,' ;;
              ! ; !'',,,',',,,,'!  ;   ;:
             : ;  ! !       ! ! ;  ;   :;
             ; ;   ! !      ! !  ; ;   ;,
            ; ;    ! !     ! !   ; ;
            ; ;    ! !    ! !     ; ;
           ;,,      !,!   !,!     ;,;
           /_I      L_I   L_I     /_I
Look at that! Our little camel is sunbathing!`

const zoo ={
    "camel" : String.raw `Switching on the camera in the camel habitat...
 ___.-''''-.
/___  @    |
',,,,.     |         _.'''''''._
     '     |        /           \
     |     \    _.-'             \
     |      '.-'                  '-.
     |                               ',
     |                                '',
      ',,-,                           ':;
           ',,| ;,,                 ,' ;;
              ! ; !'',,,',',,,,'!  ;   ;:
             : ;  ! !       ! ! ;  ;   :;
             ; ;   ! !      ! !  ; ;   ;,
            ; ;    ! !     ! !   ; ;
            ; ;    ! !    ! !     ; ;
           ;,,      !,!   !,!     ;,;
           /_I      L_I   L_I     /_I
Look at that! Our little camel is sunbathing!`,

"rabbit" : String.raw `Switching on the camera in the rabbit habitat...
         ,
        /|      __
       / |   ,-~ /
      Y :|  //  /
      | jj /( .^
      >-"~"-v"
     /       Y
    jo  o    |
   ( ~T~     j
    >._-' _./
   /   "~"  |
  Y     _,  |
 /| ;-"~ _  l
/ l/ ,-"~    \
\//\/      .- \
 Y        /    Y
 l       I     !
 ]\      _\    /"\
(" ~----( ~   Y.  )
It looks like we will soon have more rabbits!
---
You've reached the end of the program. To check another habitat, please restart the watcher.`, 

"bat" : String.raw`Please enter the number of the habitat you would like to view: > 4

Switching on the camera in the bat habitat...
_________________               _________________
 ~-.              \  |\___/|  /              .-~
     ~-.           \ / o o \ /           .-~
        >           \\  W  //           <
       /             /~---~\             \
      /_            |       |            _\
         ~-.        |       |        .-~
            ;        \     /        i
           /___      /\   /\      ___\
                ~-. /  \_/  \ .-~
                   V         V
This bat looks like it's doing fine.
---
You've reached the end of the program. To check another habitat, please restart the watcher.`
}

const animalList = ["camel", "rabbit", "bat"]
let i = animalList.length

function goodbyeMsg(){
    const endMsg = document.createElement("p")
    endMsg.textContent = "See you later!"
    document.body.append(endMsg)
 }

// selectedHabitat = prompt("Please enter the number of the habitat you would like to view:")
function showAnimals(){
while (i > 0) {
    const selectedHabitat = prompt("Please enter the number of the habitat you would like to view:")
    const pre = document.createElement('pre')
    if(selectedHabitat == "exit"){
        goodbyeMsg()
        return 0
    }
    else
    {
    
    pre.textContent = zoo[animalList[selectedHabitat]]
    document.body.append(pre)
    i--
    }
    
}
goodbyeMsg()
}

showAnimals()
})






