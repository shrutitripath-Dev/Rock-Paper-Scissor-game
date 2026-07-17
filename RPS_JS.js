
let scro=JSON.parse(localStorage.getItem('scro')) || { win : 0, loss : 0, tie: 0};

function scroeOP(){
    document.querySelector('.sc').innerHTML = `
            Score Win: ${scro.win} , Loss: ${scro.loss} and Tie : ${scro.tie}`;
    }


scroeOP();
let interID;
let isauto = false; 
function auto(){
    if(!isauto){
        interID = setInterval(function(){
            const UserMove = ComputerMove();
            GamePlay(UserMove);
        },1000);
        isauto = true;
    }else{
        clearInterval(interID);
        isauto = false; 

    }
}

 function ComputerMove(){
    let RandomNum = Math.random();
    let comV='';

    if(RandomNum >=0 && RandomNum <=1/3){
        comV='Rock';
    }else if(RandomNum >= 1/3 && RandomNum <= 2/3){
        comV='Paper';
    }else if(RandomNum >= 2/3 && RandomNum <= 1){
        comV='Scissor';
    }
        return comV;
}

document.querySelector('.js-rock').addEventListener('click', () => {
    GamePlay('Rock');
})

document.querySelector('.ja-pa').addEventListener('click',()=>{
    GamePlay('Paper');
})

document.querySelector('.js-s').addEventListener('click',()=>{
    GamePlay('Scissor');
})
function GamePlay(UserMove){
    let com=ComputerMove();
    let result ='';

    if(UserMove =='Rock'){
        if(com =='Rock' ){
            result ='Tie'
        }else if(com == 'Paper'){
            result ='Loss';
        }else if(com == 'Scissor'){
            result ='Win !';
        }
    }else if(UserMove == 'Paper'){
        if(com =='Rock'){
            result = 'Win!';
        }else if(com == 'Paper'){
            result = 'Tie';
        }else if(com == 'Scissor'){
            result = 'Loss';
        }
    }else if(UserMove == 'Scissor'){
        if(com =='Rock'){
            result = 'Loss';
        }else if(com == 'Paper'){
            result = 'Win!';
        }else if(com == 'Scissor'){
            result = 'Tie';
        }
    }
    if(result === 'Win!'){
        scro.win += 1;
    }else if(result === 'Loss'){
        scro.loss += 1;
    }else if(result === 'Tie'){
        scro.tie += 1;
    }

    localStorage.setItem('scro',JSON.stringify(scro));
    scroeOP();

    document.querySelector('.res').innerHTML = `${result}`;
    
    document.querySelector('.com').innerHTML = 
        `User : <img src="${UserMove}.jpg" class='im'> , ComputerMove : <img src="${com}.jpg" class='im'>`;
}

function ran(){
    scro.win = 0;
    scro.loss = 0;
    scro.tie = 0;
    localStorage.removeItem(scro);
    scroeOP();

    
}
