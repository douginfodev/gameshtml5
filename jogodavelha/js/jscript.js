/* 
Arquivo JavaScript - Jogo da Velha
 */

//Matriz que representa o tabuleiro - 9 representa casa vazia
var matriz = [
    [9,9,9],
    [9,9,9],
    [9,9,9]   
];

var playeratual = 1; //Jogador Atual
//var tabuleiro = document.getElementsByTagName('div');//Selecionando casa
var tabuleiro1 = document.getElementById('dv1');//Selecionando casa 
var tabuleiro = [0,0,0,0,0,0,0,0,0,0];
tabuleiro[1] = document.getElementById('dv1'); 
tabuleiro[2] = document.getElementById('dv2'); 
tabuleiro[3] = document.getElementById('dv3'); 
tabuleiro[4] = document.getElementById('dv4'); 
tabuleiro[5] = document.getElementById('dv5'); 
tabuleiro[6] = document.getElementById('dv6'); 
tabuleiro[7] = document.getElementById('dv7'); 
tabuleiro[8] = document.getElementById('dv8'); 
tabuleiro[9] = document.getElementById('dv9'); 

//Função responsável pela verificação de casa vazia ou preenchida
function checarPos(posicao){
   var auxpos = posicao; 

    switch(auxpos){
       case 0:
         if (matriz[0][0] === 9){
             //tabuleiro[1].style.backgroundColor = "lime";
                alert(auxpos);
             realizarJogada(auxpos);
           }else{
            alert('Casa já preenchida');    
           }      
         break;
       case 1:
          if (matriz[0][1] === 9){
             realizarJogada(auxpos);
           }else{
            alert('Casa já preenchida');    
           }      
         break;
     case 2:
          if (matriz[0][2] === 9){
             realizarJogada(auxpos);
          }else{
            alert('Casa já preenchida');    
           }      
         break;
         
         case 3:
         if (matriz[1][0] === 9){
             realizarJogada(auxpos);
           }else{
            alert('Casa já preenchida');    
           }      
         break;
       case 4:
          if (matriz[1][1] === 9){
             realizarJogada(auxpos);
           }else{
            alert('Casa já preenchida');    
           }      
         break;
     case 5:
          if (matriz[1][2] === 9){
             realizarJogada(auxpos);
           }else{
            alert('Casa já preenchida');    
           }      
         break;
       
       case 6:
         if (matriz[2][0] === 9){
             realizarJogada(auxpos);
           }else{
            alert('Casa já preenchida');    
           }      
         break;
       case 7:
          if (matriz[2][1] === 9){
             realizarJogada(auxpos);
           }else{
            alert('Casa já preenchida');    
           }      
         break;
     case 8:
          if (matriz[2][2] === 9){
             realizarJogada(auxpos);
           }else{
            alert('Casa já preenchida');    
           }      
         break;
       
   
       
   }; 
    
    
}

//Função responsável pela jogada do jogador
function realizarJogada(posicao){
    var auxplayer;
    
    if(playeratual === 1){
         auxplayer = 'X';
          //tabuleiro[1].style.backgroundColor = "lime";
     }else{
       auxplayer = '0';
   }
    
     alert(posicao);
     
    switch(posicao){
       case 0:
           
            alert("posicao");
           if (matriz[0][0] === 9){
              matriz[0][0] = playeratual;
              tabuleiro[1].innerHTML = auxplayer; 
               
              if(auxplayer === 'X'){
                tabuleiro[1].style.color = 'blue';
              }else{
                tabuleiro[1].style.color = 'red';
              };
           }else{
             alert('Casa já preenchida');    
           }
         break;
       case 1:
          if (matriz[0][1] === 9){
              matriz[0][1] = playeratual;;
              tabuleiro[2].innerHTML = auxplayer;
              
              if(auxplayer === 'X'){
                tabuleiro[2].style.color = 'blue';
              }else{
                tabuleiro[2].style.color = 'red';
              };
     
           }else{
             alert('Casa já preenchida1');    
           }      
         break; 
         case 2:
          if (matriz[0][2] === 9){
              tabuleiro[3].innerHTML = auxplayer;
              matriz[0][2]= playeratual;; 
              
              if(auxplayer === 'X'){
                tabuleiro[3].style.color = 'blue';
              }else{
                tabuleiro[3].style.color = 'red';
              };
           }else{
             alert('Casa já preenchida');    
           }      
         break;    
       
         case 3:
          if (matriz[1][0] === 9){
              matriz[1][0] = playeratual;;
              tabuleiro[4].innerHTML = auxplayer;
              
              if(auxplayer === 'X'){
                tabuleiro[4].style.color = 'blue';
              }else{
                tabuleiro[4].style.color = 'red';
              };
     
           }else{
             alert('Casa já preenchida');    
           }      
         break; 
         case 4:
          if (matriz[1][1] === 9){
              tabuleiro[5].innerHTML = auxplayer;
              matriz[1][1]= playeratual;; 
              
              if(auxplayer === 'X'){
                tabuleiro[5].style.color = 'blue';
              }else{
                tabuleiro[5].style.color = 'red';
              };
           }else{
             alert('Casa já preenchida');    
           }      
         break;
         case 5:
          if (matriz[1][2] === 9){
              tabuleiro[6].innerHTML = auxplayer;
              matriz[1][2]= playeratual;
              
              if(auxplayer === 'X'){
                tabuleiro[6].style.color = 'blue';
              }else{
                tabuleiro[6].style.color = 'red';
              };
           }else{
             alert('Casa já preenchida');    
           }      
         break;    
       
         case 6:
          if (matriz[2][0] === 9){
              matriz[2][0] = playeratual;
              tabuleiro[7].innerHTML = auxplayer;
              
              if(auxplayer === 'X'){
                tabuleiro[7].style.color = 'blue';
              }else{
                tabuleiro[7].style.color = 'red';
              };
     
           }else{
             alert('Casa já preenchida');    
           }      
         break; 
         case 7:
          if (matriz[2][1] === 9){
              tabuleiro[8].innerHTML = auxplayer;
              matriz[2][1]= playeratual; 
              
              if(auxplayer === 'X'){
                tabuleiro[8].style.color = 'blue';
              }else{
                tabuleiro[8].style.color = 'red';
              };
           }else{
             alert('Casa já preenchida');    
           }      
         break;
         case 8:
          if (matriz[2][2] === 9){
              tabuleiro[9].innerHTML = auxplayer;
              matriz[2][2]= playeratual; 
              
              if(auxplayer === 'X'){
                tabuleiro[9].style.color = 'blue';
              }else{
                tabuleiro[9].style.color = 'red';
              };
           }else{
             alert('Casa já preenchida');    
           }      
         break;
         
     
   
   break;
   };     
    
    //trocar o player
    if(playeratual === 1){
      playeratual = 0;  
    }else{
      playeratual = 1;  
    }
    
   // checarVitoria();
    
    console.log(matriz);
};

function checarVitoria(){
  var vit = false;
  

  if(matriz[0][0] && matriz[0][1] && matriz[0][2] === 1){
      tabuleiro[1].style.backgroundColor = 'lime';
      tabuleiro[2].style.backgroundColor = 'lime';
      tabuleiro[3].style.backgroundColor = 'lime';
      vit = true;
      window.setTimeout(reiniciar(),5000);
  }else{
      if(matriz[1][0] && matriz[1][1] && matriz[1][2] === 1){
      alert('JOGADOR x VENCEU');
      vit = true;
  }
      
      
  }
    
    
};


function reiniciar(){
   alert('JOGADOR X VENCEU');
   window.location.reload();
}

function subtrairNumeros(n1,n2){
    var res = (n1-n2);
    document.writeln('resultado ='+res);
}

function subtrairNumeros1(){
    var res = (n1-n2);
    document.writeln('resultado ='+res);
}

