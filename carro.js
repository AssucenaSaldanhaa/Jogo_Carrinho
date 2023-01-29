//código do carro

let yCarro= [40,96,150, 208,260,310];
let velocidadeCarro=[2, 2.5, 3, 4, 2.2, 3.2];
let xCarro= [600, 600, 600, 600, 600, 600];
let comprimentoCarro = 30
let alturaCarro = 30
    
function mostraCarro(){
  for ( let i = 0; i <imagemCarro.length; i= i+1){
      image(imagemCarro[i], xCarro[i], yCarro[i], 50, 40);
  }

}

function movimentaCarro(){
  for (let i = 0; i <imagemCarro.length; i= i+1){
    xCarro[i] -= velocidadeCarro[i];
  
  }
  
}

function voltaPosiçãoInicialCarro (){
  for (let i = 0; i < imagemCarro.length; i= i+1){
    if (passouTodaATela(xCarro[i])){
    xCarro[i] = 600;
  }
  }  
  }
  function passouTodaATela(xCarro){
    return xCarro < - 50;
    
  }
 