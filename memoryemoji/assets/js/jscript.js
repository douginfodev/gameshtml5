// Variables
let number = 0;
let indice = 0;
let score = 0;

const emojis = [
    "🐱",
    "🐱",
    "🦝",
    "🦝",
    "🦊",
    "🦊",
    "🐶",
    "🐶",
    "🐵",
    "🐵",
    "🦁",
    "🦁",
    "🐯",
    "🐯",
    "🐮",
    "🐮",
];

//DOM
let cards = [];
let cardSort = [];
let selectCard = [];
let divName;

// Start
window.onload = init();

function init() {
    randomMemory();

    for (number = 0; number <= 15; number++) {
        divName = 'dv' + number.toString();
        cards[number] = document.getElementById(divName);
    }
};

function randomMemory() {
    cardSort = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
}

function clickCard(posicaoatual) {
    selectCard[indice] = posicaoatual;
    indice += 1;
    cards[posicaoatual].innerHTML = cardSort[posicaoatual];

    if ((cardSort[selectCard[0]] === cardSort[selectCard[1]]) && (indice == 2)) {
        indice = 0;
        changeImage(posicaoatual, true);
    } else {

        if (indice == 2)
            changeImage(posicaoatual, true)
        else
            changeImage(posicaoatual, false);
    }
};

function changeImage(ind, check) {
    cards[ind].style.backgroundImage = "url(assets/img/cardfront.png)";

    if ((check) && (indice == 2)) {
        setTimeout(function () {
            cards[selectCard[0]].style.backgroundImage = "url(assets/img/CARDBACK.png)"
            cards[selectCard[1]].style.backgroundImage = "url(assets/img/CARDBACK.png)"
            cards[selectCard[0]].innerHTML = '';
            cards[selectCard[1]].innerHTML = '';
            cards[selectCard[0]].style.border = 'none';
            cards[selectCard[1]].style.border = 'none';

        }, 700);
        indice = 0;
    }
};

// CONTADOR DO SCORE
function reset() {
    location.reload();
};