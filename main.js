
//----------------------------------------------------------//
//   A game of rock paper scissors by:Chris Moore 2022      //
//----------------------------------------------------------//



// -------------- declare variables -------------------- //


let gamePick = ['rock', 'paper', 'scissors'];
let user = document.getElementById("yourTurn");
let computer = document.getElementById("computers_pick");
let whoWins = document.getElementById("tell_winner");
let resetButton = document.getElementById("clearAll").addEventListener("click", clearBoard );
let submitButton = document.getElementById("btn1").addEventListener('click',playerSelection)
let myUserScore = document.getElementById('score1');
let myComputerScore = document.getElementById('score2');
let num1 = document.getElementById('score1').value = 0;
let num2 = document.getElementById('score2').value = 0;

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

    } else if (user.value === 'rock' && computer.value === 'paper') {       
        whoWins.value = 'Paper covers rock, computer wins.';
        myComputerScore.value = parseInt(num2) + parseInt(1);

    } else if (user.value === 'rock' && computer.value === 'scissors') {       
        whoWins.value = 'Rock breaks scissors, you win!';
        myUserScore.value = parseInt(num1) + parseInt(1);

    } else if (user.value === 'paper' && computer.value === 'rock') {         
        whoWins.value = 'Paper covers rock, you win!';
        myUserScore.value = parseInt(num1) + parseInt(1);

    } else if (user.value === 'paper' && computer.value === 'paper') {        
        whoWins.value = 'It is a tie!';

    } else if (user.value === 'paper' && computer.value === 'scissors') {         
        whoWins.value = 'Scissors cuts paper, computer wins.';
        myComputerScore.value = parseInt(num2) + parseInt(1);

    } else if (user.value === 'scissors' && computer.value === 'rock') {        
        whoWins.value = 'Rock breaks scissors, computer wins.';
        myComputerScore.value = parseInt(num2) + parseInt(1);

    } else if (user.value === 'scissors' && computer.value === 'paper') {         
        whoWins.value = 'Scissors cuts paper, you win!';
        myUserScore.value = parseInt(num1) + parseInt(1);

    } else if (user.value === 'scissors' && computer.value === 'scissors') {       
        whoWins.value = 'It is a tie!';
    } 
    
}

// -------------- Clear all input boxes ------------- //

function clearBoard() {
    user.value = " ";
    computer.value = " ";
    whoWins.value = " ";
    myUserScore.value = ' ';
    myComputerScore.value = ' ';
    
}

// -------------- Clear all input boxes on page load ------------- //

function init() {
    user.value = " ";
    computer.value = " ";
    whoWins.value = " ";
    myUserScore.value = ' ';
    myComputerScore.value = ' ';
}

window.onload = init;
