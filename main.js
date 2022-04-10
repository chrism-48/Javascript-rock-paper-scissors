//----------------------------------------------------------//
//   A game of rock paper scissors by:Chris Moore 2022      //
//----------------------------------------------------------//



// -------------- initialize variables -------------------- //

// let gameQuestion;
// let randomItem;
let gameVar;
let user = document.getElementById("your_turn");
let computer = document.getElementById("computers_pick");
let whoWins = document.getElementById("tell_winner");

let resetButton = document.getElementById("clearAll").addEventListener("click", clearBoard );


// -------------------- get user input -------------------- //

function playerSelection() {
    // gameQuestion = prompt("Enter (rock) or (paper) or (scissors).").toLowerCase();
    // user = user.value.toLowerCase();
    user.value.toLowerCase();
    console.log(`You have chosen ${user.value}.`);
    computerSelection();
    return user.value;   

}


// --------------- get computer random input ------------- //

function computerSelection() {    
    let gameVar = ['rock', 'paper', 'scissors'];
    computer.value = gameVar[Math.floor(Math.random() * gameVar.length)];
    console.log(`Computer has chosen ${computer.value}.`);
    // computer.value = computer.value;
    computer.value = computer.value;
    // playRound(user, computer);
    return computer.value;
    
        
}


// -------------- Find the winner of the game ------------- //

function playRound() {
     
     
    if (user.value === 'rock' && computer.value === 'rock') {
        console.log(`1st instance ${whoWins.value}`)
        whoWins.value = ('It is a tie!');
    } else if (user.value === 'rock' && computer.value === 'paper') {
        console.log(`2nd instance ${whoWins.value}`)
        whoWins.value = ('Paper covers rock, computer wins.');
    } else if (user.value === 'rock' && computer.value === 'scissors') { 
        console.log(`3rd instance ${whoWins.value}`)
        whoWins.value = ('Rock breaks scissors, you win!');
    } else if (user.value === 'paper' && computer.value === 'rock') { 
        console.log(`4th instance ${whoWins.value}`)
        whoWins.value = ('Paper covers rock, you win!');
    } else if (user.value === 'paper' && computer.value === 'paper') {
        console.log(`5th instance ${whoWins.value}`)
        whoWins.value = ('It is a tie!');
    } else if (user.value === 'paper' && computer.value === 'scissors') { 
        console.log(`6th instance ${whoWins.value}`)
        whoWins.value = ('Scissors cuts paper, computer wins.');
    } else if (user.value === 'scissors' && computer.value === 'rock') { 
        console.log(`7th instance ${whoWins.value}`)
        whoWins.value = ('Rock breaks scissors, computer wins.');
    } else if (user.value === 'scissors' && computer.value === 'paper') { 
        console.log(`8th instance ${whoWins.value}`)
        whoWins.value = ('Scissors cuts paper, you win!');
    } else if (user.value === 'scissors' && computer.value === 'scissors') {
        console.log(`9th instance ${whoWins.value}`)
        whoWins.value = ('It is a tie!');
    } 
    
}

function clearBoard() {
    user.value = " ";
    computer.value = " ";
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

