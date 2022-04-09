//----------------------------------------------------------//
//   A game of rock paper scissors by:Chris Moore 2022      //
//----------------------------------------------------------//



// -------------- initialize variables -------------------- //

let gameQuestion;
let randomItem;
let gameVar;


// -------------------- get user input -------------------- //

function playerSelection() {
    gameQuestion = prompt("Enter (rock) or (paper) or (scissors).").toLowerCase();
    console.log(`You have chosen ${gameQuestion}.`);
    return gameQuestion;   

}


// --------------- get computer random input ------------- //

function computerSelection() {    
    gameVar = ['rock', 'paper', 'scissors'];
    randomItem = gameVar[Math.floor(Math.random() * gameVar.length)];
    console.log(`Computer has chosen ${randomItem}.`);
    return randomItem;
        
}


// -------------- Find the winner of the game ------------- //

function playRound(gameQuestion, randomItem) {   
    if (gameQuestion === 'rock' && randomItem === 'rock') {
        console.log('It is a tie!');
    } else if (gameQuestion === 'rock' && randomItem === 'paper') {
        console.log('Paper covers rock, computer wins.');
    } else if (gameQuestion === 'rock' && randomItem === 'scissors') {
        console.log('Rock breaks scissors, you win!');
    } else if (gameQuestion === 'paper' && randomItem === 'rock') {
        console.log('Paper covers rock, you win!');
    } else if (gameQuestion === 'paper' && randomItem === 'paper') {
        console.log('It is a tie.');
    } else if (gameQuestion === 'paper' && randomItem === 'scissors') {
        console.log('Scissors cuts paper, computer wins.');
    } else if (gameQuestion === 'scissors' && randomItem === 'rock') {
        console.log('Rock breaks scissors, computer wins.');
    } else if (gameQuestion === 'scissors' && randomItem === 'paper') {
        console.log('Scissors cuts paper, you win!');
    } else if (gameQuestion === 'scissors' && randomItem === 'scissors') {
        console.log('It is a tie.');
    }     
}

// ------------------- Reset program ---------------------- //

function clear() {
    prompt("Click OK to play again.")
    location.reload();    
}

// ---------------------- Run program --------------------- //
// prompt('You need developer tools console open to play this game, if not open hit F12 in firefox to open console.')
// console.log("Let's play a game of rock paper scissors!")
// console.log("Enter rock paper or scissors into prompt.")
// playerSelection();
// computerSelection();
// playRound(gameQuestion,randomItem);
// clear()

