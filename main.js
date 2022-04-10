//----------------------------------------------------------//
//   A game of rock paper scissors by:Chris Moore 2022      //
//----------------------------------------------------------//



// -------------- initialize variables -------------------- //


let gameVar = ['rock', 'paper', 'scissors'];
let user = document.getElementById("your_turn");
let computer = document.getElementById("computers_pick");
let whoWins = document.getElementById("tell_winner");
let resetButton = document.getElementById("clearAll").addEventListener("click", clearBoard );


// -------------------- get user input -------------------- //


function playerSelection() {
    computerSelection();
    // console.log(`You have chosen ${user.value.toLowerCase()}.`);
    user.value.toLowerCase()
    // playRound(user, computer); 
    // setTimeout(function(){playRound(user, computer)},300);
    return user.value;  
    

}

// --------------- get computer random input ------------- //


function computerSelection() {    
    // gameVar = ['rock', 'paper', 'scissors'];
    computer.value = gameVar[Math.floor(Math.random() * gameVar.length)];
    // console.log(`Computer has chosen ${computer.value}.`);
    // computer.value = computer.value;
    // setTimer(function(){playRound(user, computer)},100);
    playRound(user, computer);
    return computer.value;

    
}


// -------------- Find the winner of the game ------------- //

function playRound(user, computer) {
    
    
              
    if (user.value === 'rock' && computer.value === 'rock') {               
        whoWins.value = 'It is a tie!';   
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
    
}

// -------------- Clear all input boxes ------------- //

function clearBoard() {
    user.value = " ";
    computer.value = " ";
    whoWins.value = " ";
    
}


