function getRandomNumber(){
    return Math.floor(Math.random() * 3) + 1;
}
let youChoice;
let compChoice;
let you = 0;
let computer = 0;
let youCounter = document.querySelector(".youCount");
let compCounter = document.querySelector(".compCount");
let result = document.querySelector("#result");
function value(){
    if(compChoice===youChoice){
         youCounter.innerText=`${you}`;
         compCounter.innerText=`${computer}`;
         result.innerText="It was a tie!";
         result.setAttribute("class","tie");
    }
    else if(compChoice === 1 && youChoice === 3){
        computer++;
        compCounter.innerText=`${computer}`;
        result.innerText="You lost! Computer pulled out Rock.";
        result.setAttribute("class","lose");
    }
    else if(compChoice === 3 && youChoice === 1){
        you++;
        youCounter.innerText=`${you}`;
        result.innerText="You won! Computer pulled out Scissors.";
        result.setAttribute("class","win");
    }
    else if(compChoice > youChoice){
        computer++;
        compCounter.innerText=`${computer}`;
        if(compChoice==2){
        result.innerText="You lost! Computer pulled out Paper.";
        result.setAttribute("class","lose");
        }
        else{
        result.innerText="You lost! Computer pulled out Scissors.";
        result.setAttribute("class","lose");
        }
    }
    else{
        you++;
        youCounter.innerText=`${you}`;
        if(youChoice==2){
        result.innerText="You won! Computer pulled out Rock.";
        result.setAttribute("class","win");
        }
        else{
        result.innerText="You won! Computer pulled out Paper.";
        result.setAttribute("class","win");
        }
    }
}
document.querySelector(".rock").onclick=()=>{
    youChoice = 1;
    compChoice = getRandomNumber();
    value();
}
document.querySelector(".paper").onclick=()=>{
    youChoice = 2;
    compChoice = getRandomNumber();
    value();
}
document.querySelector(".scissors").onclick=()=>{
    youChoice = 3;
    compChoice = getRandomNumber();
    value();
}
