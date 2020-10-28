//DEFINERA ALLA SCENER I SPELET
let currentScene = 0;

const scenes = [
    {   //SCENE 0
        description: "Du sitter på flyget och flygvärdinnan frågar om vilket vin du vill ha?",
        choices: ["rött", "vitt"],
        nextScene: [1,1]
    },
    {   //SCENE 1
        description: "Det blir en enorm turbulens. Bältet måste på. Ringer du din familj i panik eller håller dig lung?",
        choices: ["ringer", "lugn"],
        nextScene: [3,2]
    },
    {   //SCENE 2 LUGN
        description: "Du tar på dig syrgasmasken. Personalen delar ut fallskärmar. Hoppar du först eller sist?",
        choices: ["sist", "först"],
        nextScene: [5,4]
    },
    {   //SCENE 3 RINGER GAME OVER
        description: "Du missar att sätta på dig masken när du pratar i telefon och tuppar av. GAME OVER. Vill du spela igen?",
        choices: ["Ja", "Nej"],
        nextScene: [0,0]
    },
    {   //SCENE 4 FÖRST GAME OVER
        description: "Du hoppar först, landar i havet och drunknar. GAME OVER. Vill du spela igen?",
        choices: ["ja wiihoo", "nej aldrig"],
        nextScene: [0,0]
    },
    {   //SCENE 5 SIST MÅL
        description: "Du hoppar sist, landar på en Hawaii och lever lyclig i alla dina dar. VIll du spela igen?",
        choices: ["Jaddåååå", "Nooooooo"],
        nextScene: [0,0]
    },
]
//Får man ha gameover ställen att man inte kommer någonstans??





//FUNKTIONERNA SOM GÖR ATT KNAPPARNA ÄNDRAS
function pressOptionOne() {
    alert ('hej')
}

function pressOptionTwo(){
    alert ('då')
}




// SKA BYTA TEXTEN PÅ P OCH KNAPPARNA. och starta vid laddning av sidan
window.onload = presentScene;

function presentScene() {
    const textWhoChange = document.getElementById("textWhoChange") //se till att början blir ljusblå och läs felmeddelandet
    const btn1 = document.getElementById("btn1")
    const btn2 = document.getElementById("btn2") 
    console.log (btn1, btn2)
    textWhoChange.innerHTML = scenes[currentScene].description; //decription kommer från scenerna
    btn1.innerHTML = scenes[currentScene].choices[1];
    btn2.innerHTML = scenes[currentScene].choices[0]; //dessa kommer ändras till 12345, hur gör man då???
}

// SKA HANTERA VILKET ANVÄNDAREN TRYCKER PÅ
function handleUserChoise(answer) {
    console.log(answer);

    if (answer === scenes[currentScene].choices[0]) {
        currentScene = scenes[currentScene].nextScene[0]; //kanske inte behöver ;
    }

    if (answer === scenes[currentScene].choices[1]) {
        currentScene = scenes[currentScene].nextScene[1];
    }

    if (answer === scenes[currentScene].choices[2]) {
        currentScene = scenes[currentScene].nextScene[2];
    }

    presentScene() //betyder detta är den scenen slutar här??
}