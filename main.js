//----------------------------------------------------------//
//   A game of rock paper scissors by:Chris Moore 2022      //
//----------------------------------------------------------//



// -------------- initialize variables -------------------- //
// computerSelection()

let gamePick = ['rock', 'paper', 'scissors'];
let user = document.getElementById("yourTurn");
let computer = document.getElementById("computers_pick");
let whoWins = document.getElementById("tell_winner");
let resetButton = document.getElementById("clearAll").addEventListener("click", clearBoard );
let submitButton = document.getElementById("btn1").addEventListener('click',playerSelection)
// let listenToBox = document.getElementById('computers_pick').addEventListener('change', playRound(user, computer))
// -------------------- get user input -------------------- //


function playerSelection() {
    // console.log(`You have chosen ${user.value.toLowerCase()}`);
    computer.value = gamePick[Math.floor(Math.random() * gamePick.length)];
    computerSelection();
    // user.value.toLowerCase()
    // playRound(user, computer); 
    // setTimeout(function(){playRound(user, computer)},300);
    return user.value, computer.value;  
}

// --------------- get computer random input ------------- //


function computerSelection() {    
    // computer.value = gamePick[Math.floor(Math.random() * gamePick.length)];
    // console.log(`Computer has chosen ${computer.value}`);
    // computer.value = computer.value;
    // setTimer(function(){playRound(user, computer)},1000);
    // setTimer(function(){return computer.value},1000);
    playRound(user, computer);
    // return computer.value; 
}


// -------------- Find the winner of the game ------------- //

function playRound(user, computer) {
    console.log('Hello');
    
    
              
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
    console.log(user.value,computer.value);
}

// -------------- Clear all input boxes ------------- //

function clearBoard() {
    user.value = " ";
    computer.value = " ";
    whoWins.value = " ";
    
}


