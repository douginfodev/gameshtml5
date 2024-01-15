// Variables
let number = 0;
let clicked = false;
let score = 0;
let live = 3;
let timer = 3000;
let cardAtualP1;
let cardAtualP2;



let cardgreendown = 'assets/img/cardgreendown.png';
let cardbluedown = 'assets/img/cardbluedown.png';

let cardsName = ['', 'Dragon', 'Exodia', 'Magician'];
let cardsAtributes = ['', 'Pedra', 'Tesoura', 'Papel'];
let cardsImage = ['', 'dragon.png', 'exodia.png', 'magician.png']

//Player 1
const cardBoardP1 = document.getElementById('cardp1');
const cardBoardP1Title = document.getElementById('namecardp1');
const cardBoardP1Atribute = document.getElementById('atributosp1');
const boardCardP1 = document.getElementById('board-card1');
const mensagep1 = document.getElementById('card1win');
 

//Player 2
const cardBoardP2 = document.getElementById('cardp2');
const cardBoardP2Title = document.getElementById('namecardp2');
const cardBoardP2Atribute = document.getElementById('atributosp2');
const boardCardP2 = document.getElementById('board-card2');
const mensagep2 = document.getElementById('card2win');

// UI 
let timeUI = document.getElementById('menu-time');
let winP1  = document.getElementById('menu-score');
let loseP1 = document.getElementById('menu-live');
let winP2  = document.getElementById('menu-score');
let loseP2 = document.getElementById('menu-live');

// Start
window.onload = init();

function init() {
    cardAtualP1 = 1;
    cardAtualP2 = 2;
    mensagep1.innerHTML = 'WIN';
    mensagep2.innerHTML = 'LOSE';
};

function randomRalph(min, max) {
    number = Math.floor(Math.random() * (max - min + 1)) + min;
    clicked = false;
    changeImage(number);
}

function choiceCard(player) {
    // tabuleirodv[indice].style.backgroundImage = "url(" + imgRalph + ")";
    if (player === 'p1')
        boardCardP1.style.backgroundImage = "url(assets/icons/cardhighgreen.png)"
    else
        boardCardP2.style.backgroundImage = "url(assets/icons/cardhighblue.png)"
};

// CONTADOR DO SCORE
function placar(check,pontos) {
    if (check === 'win')
        score = (pontos + 1)
    else    
       score = (pontos - 1)

    return score;
};

// CONTADOR DO LIVES
function jogar() {
   
};

function countTimer() {
    time -= 1;

    if (live >= 0)
        time.innerHTML = time;
    else
        jogar();
};

function gameover() {
    console.log('Fim do jogo');
}

function playSound(audioName) {
    let audio = new Audio(`./assets/audios/${audioName}.m4a`);
    audio.volume = 0.2;
    audio.play();
}

function selectCard(opcao, player) {

    if (player === 'p1') {
        cardBoardP1.src = "assets/icons/" + cardsImage[opcao];
        cardBoardP1Title.innerHTML = cardsName[opcao];
        cardBoardP1Atribute.innerHTML = cardsAtributes[opcao];
    } else {
        cardBoardP2.src = "assets/icons/" + cardsImage[opcao];
        cardBoardP2Title.innerHTML = cardsName[opcao];
        cardBoardP2Atribute.innerHTML = cardsAtributes[opcao];

    }
};       