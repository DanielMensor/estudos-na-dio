alert("Bem vindo ao Genius!\nRegras do Jogo: Memorize a sequência, e aperte na ordem memorizada.")

let sequencia=[];
let score=0;
let sequenciaApertada=[];

//red - 0
//green - 1 
//yellow - 2
//blue - 3

const red = document.querySelector('.red')
const green= document.querySelector('.green')
const yellow = document.querySelector('.yellow')
const blue = document.querySelector('.blue')


let jogar = ()=>{
    alert("Iniciando novo jogo!")
    score=0;

    proximoNivel();
}

const sorteia = () =>{
    sequencia.push(Math.floor(Math.random() * 4 ))
    console.log(sequencia)
    sequenciaApertada=[];

    mostraSequencia();
}

const mostraSequencia = () => {
    let tempo=1500;
    for(let i =0; i< sequencia.length; i ++){
        
        if(sequencia[i]==0){
            setTimeout(()=>{red.classList.add('mostra')},tempo);
            setTimeout(()=>{red.classList.remove('mostra')},tempo+1300);
        }else if(sequencia[i]==1){
            setTimeout(()=>{green.classList.add('mostra')},tempo);
            setTimeout(()=>{green.classList.remove('mostra')},tempo+1300);
        }else if(sequencia[i]==2){
            setTimeout(()=>{yellow.classList.add('mostra')},tempo);
            setTimeout(()=>{yellow.classList.remove('mostra')},tempo+1300);
        }else if(sequencia[i]==3){
            setTimeout(()=>{blue.classList.add('mostra')},tempo);
            setTimeout(()=>{blue.classList.remove('mostra')},tempo+1300);
        }
        tempo +=1500;
    }
}



let clica = (cor)=>{
    sequenciaApertada.push(cor);
    if(cor==0){
        red.classList.add('mostra')
        setTimeout(()=>{
            red.classList.remove('mostra');
            comparaSequencia();
        },250)
    }else if(cor==1){
        green.classList.add('mostra')
        setTimeout(()=>{
            green.classList.remove('mostra');
            comparaSequencia();
        },250)
    }else if(cor==2){
        yellow.classList.add('mostra')
        setTimeout(()=>{
            yellow.classList.remove('mostra');
            comparaSequencia();
        },250)
    }else if(cor==3){
        blue.classList.add('mostra')
        setTimeout(()=>{
            blue.classList.remove('mostra');
            comparaSequencia();
        },250)
    }
}
/* red.addEventListener('click',()=>{return 0})
green.addEventListener('click',()=>{ return 1})
yellow.addEventListener('click',()=>{ return 2})
blue.addEventListener('click',()=>{ return 3}) */

red.onclick = () => clica(0);
green.onclick = () => clica(1);
yellow.onclick = () => clica(2);
blue.onclick = () => clica(3);

let comparaSequencia = ()=>{
    for(let i in sequenciaApertada){
        if(sequenciaApertada[i]!=sequencia[i]){
            fimDeJogo();
            break;
        }
    }
    if(sequenciaApertada.length==sequencia.length){
        alert('Próximo nível');
        proximoNivel();
    }    
}

const proximoNivel = () => {
    score++
    sorteia();
}

const fimDeJogo= () => {
    alert(`Sua pontuação foi de: ${score} pontos! \n Você perdeu o jogo!\n Clique em OK para iniciar um novo jogo`)
    sequencia=[];
    sequenciaApertada=[];

    jogar();
}

jogar();