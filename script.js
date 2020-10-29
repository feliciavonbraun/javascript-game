//DEFINERA ALLA SCENER I SPELET
let currentScene = 0;

const scenes = [ //ska det va hårdklammer här eller måsvinge????
    {   //SCENE 0
        description: "You're in your flight and the air-hostess is asking what kind of wine you want?",
        choices: ["Red", "White"],
        nextScene: [1,1]
    },
    {   //SCENE 1
        description: "Det blir en enorm turbulens. Bältet måste på. Ringer du din familj i panik eller håller dig lung?",
        choices: ["ringer", "lugn"],
        nextScene: [3,2]
    },
    {   //SCENE 2 LUGN
        description: "You put on the oxygen mask. The staff hands out parachutes. Are you the first or last one who jumpes?",
        choices: ["Last", "First"],
        nextScene: [5,4]
    },
    {   //SCENE 3 RINGER GAME OVER
        description: "You fail to put on the mask when talking on the phone and faint. GAME OVER. Do you want to play again?",
        choices: ["Ja", "Nej"],
        nextScene: [0,0]
    },
    {   //SCENE 4 FÖRST GAME OVER
        description: "You jump first, land in the sea and drown. GAME OVER. Do you want to play again?",
        choices: ["ja wiihoo", "nej aldrig"],
        nextScene: [0,0]
    },
    {   //SCENE 5 SIST MÅL
        description: "Your the last one to jump and you land on Hawaii and live happily ever after. Do you want to play again?",
        choices: ["Jaddåååå", "Nooooooo"],
        nextScene: [0,0]
    },
]





// SKA BYTA TEXTEN PÅ P OCH KNAPPARNA. och starta vid laddning av sidan
window.onload = presentScene;

function presentScene() {
    const textWhoChange = document.getElementById("textWhoChange") //se till att början blir ljusblå och läs felmeddelandet
    const btn1 = document.getElementById("btn1") // ska det va ' eller " ???
    const btn2 = document.getElementById("btn2") 
    console.log (btn1, btn2)
    textWhoChange.innerHTML = scenes[currentScene].description; //decription kommer från scenerna
    btn1.innerHTML = scenes[currentScene].choices[0];
    btn2.innerHTML = scenes[currentScene].choices[1]; //dessa kommer ändras till 12345, hur gör man då???
    btn1.onclick = function () {
        handleUserChoice(scenes[currentScene].nextScene[0])
    }
    btn2.onclick = function () {
        handleUserChoice(scenes[currentScene].nextScene[1])
    }
}

// SKA HANTERA VILKET ANVÄNDAREN TRYCKER PÅ
// SKA JAG SÄTTA IN ONCLIK NAMNEN HÄR? 
function handleUserChoice(nextScene) {
    console.log(nextScene);

    //skapa en scen som kör om det inte finns några val, game over HÄR

    //Davids genomgång: kanske kan ta bort all ovan kod
        currentScene = nextScene; 
        presentScene(); 

}