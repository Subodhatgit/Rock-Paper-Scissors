let userWins=0;
let computerWins=0;
let input=confirm("Wanna play a game of Rock Paper Scissors?")
if(input===true){
    
for(i=1;i<=5;i++){
    alert(`Welcome to Round ${i}`);
const randomNumber=() =>Math.floor(Math.random()*3)+1;
const randomNumber1=randomNumber();

const getComputerChoice=()=>{
    switch(randomNumber1){
        case 1:
            return "Rock";
        
        case 2:
            return "Paper";
            
            case 3:
                return "Scissors";
    }
}

const computerChoice1=getComputerChoice();
let userChoice1 =prompt("Rock Paper Scissors");
let computerChoice=computerChoice1.toLowerCase();
let userChoice=userChoice1.toLowerCase();
playRound(userChoice,computerChoice);


function playRound(userChoice,computerChoice){
   if(userChoice===computerChoice){
    alert( `The computer chose ${computerChoice}.It's a tie`);
   }
   else if(userChoice==="rock"&&computerChoice==="paper"){
    computerWins++;
    alert( `The computer chose ${computerChoice}.You lose!`);
   }
   else if(userChoice==="paper"&&computerChoice==="rock"){
    userWins++;
    alert( `The computer chose ${computerChoice}.You win!`);
   }
   else if(userChoice==="scissors"&&computerChoice==="rock"){
    computerWins++;
    alert( `The computer chose ${computerChoice}.You lose!`);
   }
   else if(userChoice==="rock"&&computerChoice==="scissors"){
    userWins++;
    alert( `The computer chose ${computerChoice}.You win!`);
   }
   else if(userChoice==="paper"&&computerChoice==="scissors"){
    computerWins++;
    alert( `The computer chose ${computerChoice}.You lose!`);
   }
   else if(userChoice==="scissors"&&computerChoice==="paper"){
    userWins++;
    alert( `The computer chose ${computerChoice}.You win!`);
}}

}
}
if(userWins>computerWins){
    alert("Alright,I give up! You win!");

}else{
    alert("Yay! I am better.You lose!")
}