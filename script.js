// Pseudo Code

// DONE Step 1: Setup the Project structure

// DONE Step 2: Write the logic to get the computer choice
// function getcomputerChoice should random choose between rock paper or scissors
// to get this, function should roll a number between 1 to 3, each one stands for one of those mentiond above
// safe result in a variable 
// console.log result and test the code

// Step 3: Write the logic to get the human choice
// create new function getHumanChoice
// gutHumanChoice should return

// Step 4: Declare the players score variables

// Step 5: Write the logic to play a single round

// Step 6: Write the logic to play the entire game

function getComputerChoiceNumber () {
    let computerChoiceNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    return computerChoiceNumber;
    }

function getComputerChoice () {
    let computerNumber = getComputerChoiceNumber ();
    let computerChoice;
    if (computerNumber === 1) {
        computerChoice = "Rock";
    } else if (computerNumber === 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
    }