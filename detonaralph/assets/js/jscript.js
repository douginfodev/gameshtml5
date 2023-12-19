//DOM
let tabuleirodv1 = document.getElementById('dv0');//Selecionando dv 
let tabuleirodv = [0, 0, 0, 0, 0, 0, 0, 0, 0];
tabuleirodv[0] = document.getElementById('dv0');
tabuleirodv[1] = document.getElementById('dv1');
tabuleirodv[2] = document.getElementById('dv2');
tabuleirodv[3] = document.getElementById('dv3');
tabuleirodv[4] = document.getElementById('dv4');
tabuleirodv[5] = document.getElementById('dv5');
tabuleirodv[6] = document.getElementById('dv6');
tabuleirodv[7] = document.getElementById('dv7');
tabuleirodv[8] = document.getElementById('dv8');

let ab = document.getElementById('ralph');


let dvVazia = [
    [9, 9, 9],
    [9, 9, 9],
    [9, 9, 9]
];

window.onload = init();

function init(){
setInterval(function() {
        randomRalph(0,8);
       }
    , 1000);
  };

function randomRalph(min,max) {
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    ab.src = '../img/ralphativo.png';
  console.log(number);
}

function verificadvVazia(posicaoatual, gridelinha, gridecoluna) {
    let posicaoAtual = posicaoatual;

    if (dvVazia[gridelinha][gridecoluna] === 9) {
        realizarJogada(posicaoAtual);
        dvVazia[gridelinha][gridecoluna] = 0;
        alert(gridelinha + '' + gridecoluna);
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

function checarVitoria() {
    let vit = false;


    if (dvVazia[0][0] && dvVazia[0][1] && dvVazia[0][2] === 1) {
        tabuleirodv[1].style.backgroundColor = 'lime';
        tabuleirodv[2].style.backgroundColor = 'lime';
        tabuleirodv[3].style.backgroundColor = 'lime';
        vit = true;
        window.setTimeout(reiniciar(), 5000);
    } else {
        if (dvVazia[1][0] && dvVazia[1][1] && dvVazia[1][2] === 1) {
            alert('JOGADOR x VENCEU');
            vit = true;
        }


    }


};


function reiniciar() {
    alert('JOGADOR X VENCEU');
    window.location.reload();
}

function subtrairNumeros(n1, n2) {
    let res = (n1 - n2);
    document.writeln('resultado =' + res);
}

function subtrairNumeros1() {
    let res = (n1 - n2);
    document.writeln('resultado =' + res);
}