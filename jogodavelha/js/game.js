//DOM
let tabuleiroCasa1 = document.getElementById('casa0');//Selecionando casa 
let tabuleiroCasa = [0, 0, 0, 0, 0, 0, 0, 0, 0];
tabuleiroCasa[0] = document.getElementById('casa0');
tabuleiroCasa[1] = document.getElementById('casa1');
tabuleiroCasa[2] = document.getElementById('casa2');
tabuleiroCasa[3] = document.getElementById('casa3');
tabuleiroCasa[4] = document.getElementById('casa4');
tabuleiroCasa[5] = document.getElementById('casa5');
tabuleiroCasa[6] = document.getElementById('casa6');
tabuleiroCasa[7] = document.getElementById('casa7');
tabuleiroCasa[8] = document.getElementById('casa8');


let casaVazia = [
    [9, 9, 9],
    [9, 9, 9],
    [9, 9, 9]
];

//Player
let playerAtual = 1; //Jogador Atual
let colorPlayer = 'blue';

function playerTurno(jogador) {
    let playerSimbolo = 'O';
    colorPlayer = 'red';

    if (jogador === 1) {
        playerSimbolo = 'X';
        colorPlayer = 'blue';
    }

    return playerSimbolo;
}

function verificaCasaVazia(posicaoatual,gridelinha,gridecoluna) {
    let posicaoAtual = posicaoatual;
  
            if (casaVazia[gridelinha][gridecoluna] === 9) {                
                realizarJogada(posicaoAtual);
                casaVazia[gridelinha][gridecoluna] = 0;
                alert(gridelinha+''+gridecoluna);
            }
    };

function realizarJogada(posicao) {
    tabuleiroCasa[posicao].innerHTML = playerTurno(playerAtual);
    tabuleiroCasa[posicao].style.color = colorPlayer;

    //Troca o turno / player
    if (playerAtual === 1)
        playerAtual = 0
    else
        playerAtual = 1;
};

function checarVitoria() {
    let vit = false;


    if (casaVazia[0][0] && casaVazia[0][1] && casaVazia[0][2] === 1) {
        tabuleiroCasa[1].style.backgroundColor = 'lime';
        tabuleiroCasa[2].style.backgroundColor = 'lime';
        tabuleiroCasa[3].style.backgroundColor = 'lime';
        vit = true;
        window.setTimeout(reiniciar(), 5000);
    } else {
        if (casaVazia[1][0] && casaVazia[1][1] && casaVazia[1][2] === 1) {
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