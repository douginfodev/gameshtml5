// Variables
let number = 0;
let clicked = false;
let score = 0;
let live = 3;
let timer = 2000;
let imgRalph = 'assets/img/ralphativo.png';
let imgRalphInativo = 'assets/img/ralphinativo.png';

//DOM
let tabuleirodv = [];
tabuleirodv[0] = document.getElementById('dv0');
tabuleirodv[1] = document.getElementById('dv1');
tabuleirodv[2] = document.getElementById('dv2');
tabuleirodv[3] = document.getElementById('dv3');
tabuleirodv[4] = document.getElementById('dv4');
tabuleirodv[5] = document.getElementById('dv5');
tabuleirodv[6] = document.getElementById('dv6');
tabuleirodv[7] = document.getElementById('dv7');
tabuleirodv[8] = document.getElementById('dv8');

// UI 
let timeUI = document.getElementById('menu-time');
let scoreUI = document.getElementById('menu-score');
let liveUI = document.getElementById('menu-live');

// Start
window.onload = init();

function init() {
    tabuleirodv[0].style.backgroundImage = "url(" + imgRalphInativo + ")";
    timeUI.innerHTML = '30';

    setInterval(function () {
        randomRalph(0, 8);
    }
        , timer);
};

function randomRalph(min, max) {
    number = Math.floor(Math.random() * (max - min + 1)) + min;
    clicked = false;
    changeImage(number);
}

function clickDetona(posicaoatual) {
    let posicaoAtual = posicaoatual;

    if (posicaoAtual === number) {
        clicked = true;
        placar(clicked);
        tabuleirodv[number].style.backgroundImage = "url(" + imgRalphInativo + ")";
    }
};

function changeImage(indice) {
    tabuleirodv[indice].style.backgroundImage = "url(" + imgRalph + ")";

    setTimeout(function () {
        tabuleirodv[number].style.backgroundImage = "url(" + imgRalphInativo + ")"
    }, 700);
};

// CONTADOR DO SCORE
function placar(check) {
    if (check) {
        score += 1;
        scoreUI.innerHTML = score;
    }
};

// CONTADOR DO LIVES
function lives() {
    live -= 1;

    if (live >= 0)
        liveUI.innerHTML = live
    else
        gameover();
};

function countTimer() {
    time -= 1;

    if (live >= 0)
        time.innerHTML = time;
    else
        lives();
};

function gameover() {
    console.log('Fim do jogo');
}

function playSound(audioName) {
    let audio = new Audio(`./assets/audios/${audioName}.m4a`);
    audio.volume = 0.2;
    audio.play();
}

function realizarJogada(posicao) {
    tabuleirodv[posicao].innerHTML = playerTurno(playerAtual);
    tabuleirodv[posicao].style.color = colorPlayer;

    //Troca o turno / player
    if (playerAtual === 1)
        playerAtual = 0
    else
        playerAtual = 1;
};