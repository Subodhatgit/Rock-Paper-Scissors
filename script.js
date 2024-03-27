window.onload = function() {
document.body.style.width="auto"
document.body.style.height="auto";
//Initializing header//
const header1 = document.createElement('header');



//Initializing head topic with js//
const welcomeText=document.createElement('h1');

//Styling the welcome head topic//
welcomeText.textContent='Welcome To Rock-Paper-Scissors';
welcomeText.style.fontFamily="Bungee Spice","sans-serif";
welcomeText.style.fontWeight = 400;
welcomeText.style.fontStyle="normal";
welcomeText.style.textAlign="center"
welcomeText.style.fontSize = '10vmin'

//Appending welcome text to top of body in html//
const parentElement = document.body;

parentElement.insertBefore(header1,parentElement.firstChild);
header1.appendChild(welcomeText);



//initializing wins//
let userWins=0;
let computerWins=0;

    


let userChoice ='';




//Changing and styling body of html//
document.body.style.backgroundColor='#3c3d40';


//Adding buttons for choosing rock,paper,scissors for user//
const rockButton=document.createElement('button');
rockButton.classList.add('buttonForRock');
rockButton.textContent="Rock"
document.body.appendChild(rockButton);

const paperButton=document.createElement('button');
paperButton.classList.add('buttonForPaper');
paperButton.textContent="Paper"
document.body.appendChild(paperButton);

const scissorsButton=document.createElement('button');
scissorsButton.classList.add('buttonForScissors');
scissorsButton.textContent="Scissors"
document.body.appendChild(scissorsButton);

//Adding loop to style each button//
const allButtons = document.querySelectorAll('button');

for (let i=0;i<allButtons.length;i++){

allButtons[i].style.backgroundColor = '#4CAF50';  // Green background
allButtons[i].style.border = 'none';  // No border
allButtons[i].style.color = 'white';  // White text
allButtons[i].style.padding = '15px 32px';  // Padding
allButtons[i].style.textAlign = 'center';  // Centered text
allButtons[i].style.textDecoration = 'none';  // No underline
allButtons[i].style.display = 'inline-block';
allButtons[i].style.fontSize = '16px';
allButtons[i].style.margin = '4px 2px';
allButtons[i].style.cursor = 'pointer';  // Cursor changes to a hand when you hover over the allButtons[i]
allButtons[i].style.borderRadius = '12px';  // Rounded corners

allButtons[i].addEventListener('mouseover',function(){
    allButtons[i].style.backgroundColor = 'blue'; // Change the background color to blue
});
}

//Adding a new div for the buttons//
const divForButtons= document.createElement('div');
divForButtons.classList.add('divWithButtons');

divForButtons.appendChild(rockButton);
divForButtons.appendChild(paperButton);
divForButtons.appendChild(scissorsButton);

document.body.appendChild(divForButtons);

//Styling divForButtons//
divForButtons.style.display="flex";
divForButtons.style.flexDirection="column";
divForButtons.style.alignContent="space-between"
divForButtons.style.justifyContent="space-between";
divForButtons.style.inlineSize="10%";
divForButtons.style.width="auto";
divForButtons.style.height="100%"





//Initializing variables for different user inputs//
const userChoseRock= document.querySelector(".buttonForRock");
const userChosePaper = document.querySelector(".buttonForPaper");
const userChoseScissors= document.querySelector(".buttonForScissors");


//Creating divs to display console.log//
const createNewDiv = document.createElement("div");
const createNewDiv1 = document.createElement("div");

//adding events to each button//
userChoseRock.addEventListener("click",function(){
    userChoice="rock";
    
})

userChosePaper.addEventListener("click",function(){
    userChoice="paper";
    createNewDiv.textContent='Pressed paper button';
})

userChoseScissors.addEventListener("click",function(){
    userChoice="scissors";
    createNewDiv.textContent='Pressed scissors button';
})

//Appending div that counts wins in html//
document.body.appendChild(createNewDiv);
document.body.appendChild(createNewDiv1);

//Creating a section tag//
const section = document.createElement('section');
document.body.appendChild(section);
section.appendChild(createNewDiv);
section.appendChild(createNewDiv1);

//Styling section elements//
section.style.display="flex";
section.style.justifyContent="space-between";
section.style.padding='0 10% '
section.style.marginTop="10%"

const sectionElements = document.querySelectorAll('section');
sectionElements.forEach((element)=>{
    element.style.color="blue";
    element.style.fontFamily = "'Courier New', Courier, monospace";  // Set the font
element.style.color = '#FF6347';  // Set the text color to tomato
element.style.fontSize = '2em';  // Set the font size
element.style.fontWeight = 'bold';  // Make the text bold
element.style.textShadow = '2px 2px 4px #000000';  // Add a text shadow
}); 

//Styling the div that show wina//


//
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
 
 
 
 


allButtons.forEach((button)=>{ 
button.addEventListener('click',()=>{
   
    //logic for computer to choose//
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
let computerChoice=computerChoice1.toLowerCase();

//function for the start of game//
 playRound(userChoice,computerChoice);

//Stats after a round//
createNewDiv.textContent='User Wins: '+userWins;
createNewDiv1.textContent='Computer Wins: '+computerWins;


});
});
}