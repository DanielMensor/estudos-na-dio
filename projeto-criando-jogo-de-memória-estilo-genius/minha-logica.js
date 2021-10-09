/* essa é minha lógica para o jogo do genius, usando o básico do js.*/

let ordem = [];
function sorteiaNumero(){
    let numeroSortiado= Math.floor(Math.random() * 4);
    ordem.push(numeroSortiado);
    console.log(ordem);   
}

function jogar(){
    ordem = [];
    sorteiaNumero();
    let score=0;
    
    while(score===0){            
        for(let i=0;i<ordem.length;i++){
        alert(ordem[i]);
    }

        for(let a=0;a<ordem.length;a++){
            let numeroApertado= prompt("qual a ordem?")
            if(numeroApertado==ordem[a]){
           
            
            }else { console.log("Você errou");
            score = 1;
            break;
            }
        }
        sorteiaNumero();
    }

}

jogar();