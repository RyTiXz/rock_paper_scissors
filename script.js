// Pseudo Code
// DONE Step 1: Setup the Project structure
// Step 2: Write the logic to get the computer choice
// function getcomputerChoice should random choose between rock paper or scissors
// to get this, function should roll a number between 1 to 3, each one stands for one of those mentiond above
// safe result in a variable 
// console.log result and test the code
// Step 3: Write the logic to get the human choice
// Step 4: Declare the players score variables
// Step 5: Write the logic to play a single round
// Step 6: Write the logic to play the entire game

function getComputerChoice () {
    let ComputerChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (ComputerChoice === 1) {
        ComputerChoice = "Rock";
    } else if (ComputerChoice === 2) {
        ComputerChoice = "Paper";
    } else {
        ComputerChoice = "Scissors";
    }
    return ComputerChoice
    }