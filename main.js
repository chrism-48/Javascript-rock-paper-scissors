//----------------------------------------------------------//
//   A game of rock paper scissors by:Chris Moore 2022      //
//----------------------------------------------------------//



// -------------- initialize variables -------------------- //

// let gameQuestion;
// let randomItem;
// let gameVar;
let userTurn = document.getElementById("your_turn");
let computerTurn = document.getElementById("computers_pick");
let whoWins = document.getElementById("tell_winner");

let resetButton = document.getElementById("clearAll").addEventListener("click", clearBoard );


// -------------------- get user input -------------------- //

function playerSelection() {
    // gameQuestion = prompt("Enter (rock) or (paper) or (scissors).").toLowerCase();
    console.log(`You have chosen ${userTurn.value}.`);
    computerSelection();
    return userTurn;   

}


// --------------- get computer random input ------------- //

function computerSelection() {    
    gameVar = ['rock', 'paper', 'scissors'];
    computerTurn.value = gameVar[Math.floor(Math.random() * gameVar.length)];
    console.log(`Computer has chosen ${computerTurn.value}.`);
    computerTurn.value = computerTurn.value;
    playRound(userTurn, computerTurn);
    return computerTurn;
    
        
}


// -------------- Find the winner of the game ------------- //

function playRound(userTurn, computerTurn) {   
    if (userTurn.value === 'rock' && computerTurn.value === 'rock') {
        whoWins.value = ('It is a tie!');
    } else if (userTurn.value === 'rock' && computerTurn.value === 'paper') {
        whoWins.value = ('Paper covers rock, computer wins.');
    } else if (userTurn.value === 'rock' && computerTurn.value === 'scissors') {        
        whoWins.value = ('Rock breaks scissors, you win!');
    } else if (userTurn.value === 'paper' && computerTurn.value === 'rock') {        
        whoWins.value = ('Paper covers rock, you win!');
    } else if (userTurn.value === 'paper' && computerTurn.value === 'paper') {
        whoWins.value = ('It is a tie!');
    } else if (userTurn.value === 'paper' && computerTurn.value === 'scissors') {        
        whoWins.value = ('Scissors cuts paper, computer wins.');
    } else if (userTurn.value === 'scissors' && computerTurn.value === 'rock') {        
        whoWins.value = ('Rock breaks scissors, computer wins.');
    } else if (userTurn.value === 'scissors' && computerTurn.value === 'paper') {       
        whoWins.value = ('Scissors cuts paper, you win!');
    } else if (userTurn.value === 'scissors' && computerTurn.value === 'scissors') {
        whoWins.value = ('It is a tie!');
    }     
}

function clearBoard() {
    userTurn.value = " ";
    computerTurn.value = " ";
    whoWins.value = " ";
    

}

// ------------------- Reset program ---------------------- //

// function clear() {
//     prompt("Click OK to play again.")
//     location.reload();    
// }

// ---------------------- Run program --------------------- //
// prompt('You need developer tools console open to play this game, if not open hit F12 in firefox to open console.')
// console.log("Let's play a game of rock paper scissors!")
// console.log("Enter rock paper or scissors into prompt.")
// playerSelection();
// computerSelection();
// playRound(gameQuestion,randomItem);
// clear()

