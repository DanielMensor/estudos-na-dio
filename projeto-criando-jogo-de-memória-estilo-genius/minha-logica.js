/* essa é minha lógica para o jogo do genius, usando o básico do js.*/

// 0 - vermelho
// 1 - verde
// 2 - amarelo
// 3 - azul

//ordem é o array que salvará a sequencia de cores
let ordem = [];

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

//sortearCor() é a função que sorteará um numero de 0 a 3 e adicionara no final da ordem() sempre que for chamada
function sortearCor(){
    let corSorteada= Math.floor(Math.random() * 4);
    ordem.push(corSorteada); 
}

//a função jogar() iniciará o jogo zerando a ordem e sorteando um número
function jogar(){
    ordem = [];
    sortearCor();
    let liberador=true;
    
    // esse while irá funcionar até o jogador errar.
    while(liberador==true){            
        // esse for é usado para mostrar para o jogador a ordem que ele deve memorizar
        for(let i=0;i<ordem.length;i++){
        
    }
        // nesse for é pedido para o jogado entrar com a ordem que ele memorizou, e é comparada com a ordem que foi sorteada, ao errar a ordem o código é parado.
        for(let a=0;a<ordem.length;a++){
            let corApertado;
            if(corApertado!=ordem[a]){
               
                liberador = false;
                break;
             }
            
        }
        if(liberador==true){
        sortearNumero();
        }
    }

}

function acenderCores(){
    let tempo=1500;
    for(let a=0;a<ordem.length;a++){
        if(ordem[a]==0){
            setTimeout(()=>{red.classList.add('selected')}, tempo);
            setTimeout(()=>{red.classList.remove('selected')},tempo+1300);
        }else if(ordem[a]==1){
            setTimeout(()=>{green.classList.add('selected')}, tempo);
            setTimeout(()=>{green.classList.remove('selected')} , tempo+1300);
        }else if(ordem[a]==2){
            setTimeout(()=>{yellow.classList.add('selected')}, tempo);
            setTimeout(()=>{yellow.classList.remove('selected')}, tempo+1300);
        }else if(ordem[a]==3){
            setTimeout(()=>{blue.classList.add('selected')}, tempo);
            setTimeout(()=>{blue.classList.remove('selected')}, tempo+1300);
        }
        tempo +=1500;
    }


}


