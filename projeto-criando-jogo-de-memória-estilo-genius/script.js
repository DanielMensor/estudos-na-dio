let order=[];
let clickedOrder=[];
let score = 0;

//0 - vermelho
//1 - verde
//2 - amarelo
//3 - aazul

const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')
const blue = document.querySelector('.blue')

let shuffleOrder = () =>{
    let colorOrder = Math.floor(Math.random() * 4) ;
    order[order.length]= colorOrder;
    clickedOrder=[];

}