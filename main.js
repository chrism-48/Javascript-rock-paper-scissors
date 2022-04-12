
//----------------------------------------------------------//
//   A game of rock paper scissors by:Chris Moore 2022      //
//----------------------------------------------------------//



// -------------- initialize variables -------------------- //


let gamePick = ['rock', 'paper', 'scissors'];
let user = document.getElementById("yourTurn");
let computer = document.getElementById("computers_pick");
let whoWins = document.getElementById("tell_winner");
let resetButton = document.getElementById("clearAll").addEventListener("click", clearBoard );
let submitButton = document.getElementById("btn1").addEventListener('click',playerSelection)


// ------------- get user and computer input -------------- //


function playerSelection() {
    computer.value = gamePick[Math.floor(Math.random() * gamePick.length)];
    computerSelection();
    return user.value, computer.value;  
}

// --------------- send to playRound function ------------- //


function computerSelection() {       
    playRound(user, computer);
    
}


// -------------- Find the winner of the game ------------- //

function playRound(user, computer) {          
    if (user.value === 'rock' && computer.value === 'rock') {               
        whoWins.value = 'It is a tie!';
        console.log('it is a tie'); 
    } else if (user.value === 'rock' && computer.value === 'paper') {       
        whoWins.value = 'Paper covers rock, computer wins.';

    } else if (user.value === 'rock' && computer.value === 'scissors') {       
        whoWins.value = 'Rock breaks scissors, you win!';

    } else if (user.value === 'paper' && computer.value === 'rock') {         
        whoWins.value = 'Paper covers rock, you win!';

    } else if (user.value === 'paper' && computer.value === 'paper') {        
        whoWins.value = 'It is a tie!';

    } else if (user.value === 'paper' && computer.value === 'scissors') {         
        whoWins.value = 'Scissors cuts paper, computer wins.';

    } else if (user.value === 'scissors' && computer.value === 'rock') {        
        whoWins.value = 'Rock breaks scissors, computer wins.';

    } else if (user.value === 'scissors' && computer.value === 'paper') {         
        whoWins.value = 'Scissors cuts paper, you win!';

    } else if (user.value === 'scissors' && computer.value === 'scissors') {       
        whoWins.value = 'It is a tie!';
    } 
    console.log(user.value,computer.value);
}

// -------------- Clear all input boxes ------------- //

function clearBoard() {
    user.value = " ";
    computer.value = " ";
    whoWins.value = " ";
    
}

// -------------- Clear all input boxes on page load ------------- //

function init() {
    user.value = " ";
    computer.value = " ";
    whoWins.value = " ";
}

window.onload = init;
