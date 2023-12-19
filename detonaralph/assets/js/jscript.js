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

let scoreUI = document.getElementById('menu-score');
let number = 0;
let clicked = false;
let score = 0;


window.onload = init();

function init() {
    setInterval(function () {
        randomRalph(0, 8);
    }
        , 3000);
};

function randomRalph(min, max) {
    number = Math.floor(Math.random() * (max - min + 1)) + min;
    clicked = false;
}

function clickDetona(posicaoatual) {
    let posicaoAtual = posicaoatual;

    if (posicaoAtual === number) {
        clicked = true;
        placar(clicked);
    }
};

// CONTADOR DO SCORE
function placar(check) {
    if (check) {
        score += 1;
        scoreUI.innerHTML = score;
    }
};

function realizarJogada(posicao) {
    tabuleirodv[posicao].innerHTML = playerTurno(playerAtual);
    tabuleirodv[posicao].style.color = colorPlayer;

    //Troca o turno / player
    if (playerAtual === 1)
        playerAtual = 0
    else
        playerAtual = 1;
};