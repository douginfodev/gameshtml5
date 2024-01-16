// Variables
let time = 5;
let temporizador = 1000;
let contagem;
let countclick = 0;
let cardAtualP1;
let cardAtualP2;

let cardgreendown = 'assets/img/cardgreendown.png';
let cardbluedown = 'assets/img/cardbluedown.png';

let cardsName = ['', 'Dragon', 'Exodia', 'Magician'];
let cardsAtributes = ['', 'PEDRA', 'TESOURA', 'PAPEL'];
let cardsImage = ['', 'dragon.png', 'exodia.png', 'magician.png']

const timeNumber = document.getElementById('time');

//Player 1
const cardBoardP1 = document.getElementById('cardp1');
const cardBoardP1Title = document.getElementById('namecardp1');
const cardBoardP1Atribute = document.getElementById('atributosp1');
const boardCardP1 = document.getElementById('board-card1');
const mensagep1 = document.getElementById('card1win');
let placar1win = document.getElementById('p1winpontos');
let placar1lose = document.getElementById('p1losepontos');

//Player 2
const cardBoardP2 = document.getElementById('cardp2');
const cardBoardP2Title = document.getElementById('namecardp2');
const cardBoardP2Atribute = document.getElementById('atributosp2');
const boardCardP2 = document.getElementById('board-card2');
const mensagep2 = document.getElementById('card2win');
let placar2win = document.getElementById('p2winpontos');
let placar2lose = document.getElementById('p2losepontos');

// Start
window.onload = init();

function init() {
    cardAtualP1 = 1;
    cardAtualP2 = 2;
};

function choiceCard(player) {
    countclick += 1;

    if (player === 'p1')
        boardCardP1.style.backgroundImage = "url(assets/icons/cardhighgreen.png)"
    else
        boardCardP2.style.backgroundImage = "url(assets/icons/cardhighblue.png)"

    if (countclick === 2) {
        countclick = 0;
        contagem = setInterval(function () {
            countTimer();
        }
            , temporizador);
    }
};

// CONTADOR DO SCORE
function placar(check, pontos) {
    if (check === 'win')
        score = (pontos + 1)
    else
        score = (pontos - 1)

    return score;
};

//JOGAR
function jogar() {
    boardCardP1.style.backgroundImage = cardType(cardAtualP1);
    boardCardP2.style.backgroundImage = cardType(cardAtualP2);

    checarVitoria(cardAtualP1, cardAtualP2);
};

function checarVitoria(p1, p2) {
    if ((p1 === 1) && (p2 === 2) || (p1 === 2) && (p2 === 3) || (p1 === 3) && (p2 === 1)) {
        mensagep1.innerHTML = 'WIN';
        mensagep2.innerHTML = 'LOSE';
        placar1win.innerHTML = placar('win', parseInt(placar1win.innerHTML));
        placar2lose.innerHTML = placar('lose', parseInt(placar1lose.innerHTML));
    } else if ((p1 === 1) && (p2 === 3) || (p1 === 1) && (p2 === 3) || (p1 === 3) && (p2 === 2)) {
        mensagep1.innerHTML = 'LOSE';
        mensagep2.innerHTML = 'WIN';
        placar1lose.innerHTML = placar('lose', parseInt(placar2win.innerHTML));
        placar2win.innerHTML = placar('win', parseInt(placar2win.innerHTML));
    }

    timeNumber.innerHTML = '';
}

function cardType(number) {

    let cardselect = '';

    switch (number) {
        case 1:
            cardselect = 'url(assets/icons/dragon.png)';
            break;

        case 2:
            cardselect = 'url(assets/icons/exodia.png)';
            break;

        case 3:
            cardselect = 'url(assets/icons/magician.png)';
            break;
    }

    return cardselect;
}

function countTimer() {
    time -= 1;
    timeNumber.innerHTML = time;

    if (time === 0) {
        clearInterval(contagem);
        jogar();
    }
};

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
        cardAtualP1 = opcao;
    } else {
        cardBoardP2.src = "assets/icons/" + cardsImage[opcao];
        cardBoardP2Title.innerHTML = cardsName[opcao];
        cardBoardP2Atribute.innerHTML = cardsAtributes[opcao];
        cardAtualP2 = opcao;
    }
};