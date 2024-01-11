// Variables
let number = 0;
let clicked = false;
let timer = 2000;
let highSound = 0.5;

//DOM
let keyboard = [];
keyboard[0] = document.getElementById('keyc');
keyboard[1] = document.getElementById('keyd');
keyboard[2] = document.getElementById('keye');
keyboard[3] = document.getElementById('keyf');
keyboard[4] = document.getElementById('keyg');
keyboard[5] = document.getElementById('keya');
keyboard[6] = document.getElementById('keyb');


// Start
window.onload = init();

function init() {

};


function clickKey(notamusical) {
    let notaAtual = notamusical;

    switch (notaAtual) {
        case "C":
            playSound('c');
            break;

        case "MC":
            playSound('mc');
            break;
        case "D":
            playSound('d');
            break;
        case "MD":
            playSound('md');
            break;
        case "E":
            playSound('e');
            break;
        case "F":
            playSound('f');
            break;
        case "MF":
            playSound('mf');
            break;
        case "G":
            playSound('g');
            break;
        case "MG":
            playSound('mg');
            break;
        case "A":
            playSound('a');
            break;
        case "MA":
            playSound('ma');
            break;
        case "B":
            playSound('b');
            break;
    }
};

function changeImage(indice) {
    keyboard[indice].style.backgroundImage = "url(" + imgRalph + ")";

    setTimeout(function () {
        keyboard[number].style.backgroundImage = "url(" + imgRalphInativo + ")"
    }, 700);
};

function countTimer() {
    time -= 1;

    if (live >= 0)
        time.innerHTML = time;
    else
        lives();
};

function playSound(audioName) {
    let audio = new Audio(`./assets/tunes/${audioName}.wav`);
    audio.volume = highSound;
    audio.play();
}