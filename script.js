/** Set the startscene to 0 and let it change */
let currentScene = 0;

/** All the scenes */
const scenes = [ 
    {   //SCENE 0
        description: "You're in your flight and the air-hostess is asking what kind of wine you want?",
        choices: ["RED", "WHITE"],
        nextScene: [1,1]
    },
    {   //SCENE 1
        description: "A huge turbulence occurs. The belt must be put on. Are you calling your family in a panic for a last good bye or are you staying calm and hoping for the best?",
        choices: ["CALLING FAMILY", "STAYING CALM"],
        nextScene: [3,2]
    },
    {   //SCENE 2 KEEP CALM
        description: "You put on the oxygen mask. The staff hands out parachutes. Are you the first or last one who jumps?",
        choices: ["LAST", "FIRST"],
        nextScene: [7,4]
    },
    {   //SCENE 3 RINGER GAME OVER
        description: "You fail to put on the mask when talking on the phone and faint. GAME OVER. Do you want to play again?",
        choices: ["YES", "NO"],
        nextScene: [0,8]
    },
    {   //SCENE 4 FIRST
        description: "Do you know how to swim?",
        choices: ["YES", "NO"],
        nextScene: [5,6]
    },
    {   //SCENE 5 KNOW HOW TO SWIM
        description: "GAME OVER You swim for as long as you can but it's not enough. Sadly you drown. Do you want to play again?",
        choices: ["YES", "NO"],
        nextScene: [0,8]
    },
    {   //SCENE 6 DONT KNOW HOW TO SWIM
        description: "GAME OVER. You don't know how to swim and drown. Do you want to play again?",
        choices: ["YES", "NO"],
        nextScene: [0,8]
    },
    {   //SCENE 7 LAST MÅL
        description: "HURRAY You're the last one to jump and you land on Hawaii and live happily ever after. Do you want to play again?",
        choices: ["YAAS", "NAH"],
        nextScene: [0,8]
    },
    {   //SCENE 8 GOODBYE
        description: "Thanks for playing. GOODBYE.",
        choices: [],
        nextScene: []
    }
]


/** Present paragraf and button options onload of page. */
window.onload = presentScene;

/** The active secene on webpage. */
function presentScene() {
    const textWhoChange = document.getElementById("textWhoChange")
    const btn1 = document.getElementById("btn1") 
    const btn2 = document.getElementById("btn2") 
    console.log (btn1, btn2)
    textWhoChange.innerHTML = scenes[currentScene].description;
    
    if (scenes[currentScene].choices.length === 0) {
        btn1.style.display = "none";
        btn2.style.display = "none";
    }
    else {
        btn1.innerHTML = scenes[currentScene].choices[0];
        btn2.innerHTML = scenes[currentScene].choices[1]; //dessa kommer ändras till 12345, hur gör man då???
        btn1.onclick = function () {
            handleUserChoice(scenes[currentScene].nextScene[0])
        }
        btn2.onclick = function () {
            handleUserChoice(scenes[currentScene].nextScene[1])
        }
    }
}

/** Handles which button the user press and presents the next scene. */
function handleUserChoice(nextScene) {
    console.log(nextScene);

    currentScene = nextScene; 
    presentScene(); 
}

/** Reloads page when pressing on h1 and displays buttons again*/
function reloadPage(){
    currentScene = 0;
    presentScene();    
    btn1.style.display = "block";
    btn2.style.display = "block";
}