/* essa é minha lógica para o jogo do genius, usando o básico do js.*/

//ordem é o array que salvará a sequencia de cores
let ordem = [];

//sortearNumero() é a função que sorteará um numero de 0 a 3 e adicionara no final da ordem() sempre que for chamada
function sortearNumero(){
    let numeroSorteado= Math.floor(Math.random() * 4);
    ordem.push(numeroSorteado); 
}

//a função jogar() iniciará o jogo zerando a ordem e sorteando um número
function jogar(){
    ordem = [];
    sortearNumero();
    let score=0;
    
    // esse while irá funcionar até o jogador errar.
    while(score===0){            
        // esse for é usado para mostrar para o jogador a ordem que ele deve memorizar
        for(let i=0;i<ordem.length;i++){
        alert(ordem[i]);
    }
        // nesse for é pedido para o jogado entrar com a ordem que ele memorizou, e é comparada com a ordem que foi sorteada, ao errar a ordem o código é parado.
        for(let a=0;a<ordem.length;a++){
            let numeroApertado= prompt("qual a ordem?")
            if(numeroApertado==ordem[a]){
           
             }else { alert("Você errou");
            score = 1;
            break;
            }
        }
        sortearNumero();
    }

}

jogar();