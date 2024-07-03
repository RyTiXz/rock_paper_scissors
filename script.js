// Pseudo Code

// DONE Step 1: Setup the Project structure




// Step 4: Declare the players score variables
let humanScore = 0;
let computerScore = 0;
let player = "";
let computer = "";

// DONE Step 2: Write the logic to get the computer choice
// function getcomputerChoice should random choose between rock paper or scissors
// to get this, function should roll a number between 1 to 3, each one stands for one of those mentiond above
// safe result in a variable 
// console.log result and test the code

function getComputerChoiceNumber() {
    let computerChoiceNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    return computerChoiceNumber;
}

function getComputerChoice() {
    let computerNumber = getComputerChoiceNumber();
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

function getHumanChoiceNumber() {
    let humanChoiceNumber = ""
    do {
        humanChoiceNumber = parseInt(window.prompt("Choose Rock (1) Paper (2) or Scissors (3)", ""));
    } while (isNaN(humanChoiceNumber) || humanChoiceNumber > 3 || humanChoiceNumber < 1);
    return humanChoiceNumber;
}

// DONE Step 3: Write the logic to get the human choice
// create new function getHumanChoice
// gutHumanChoice should return a valid choice (test it!)
function getHumanChoice() {
    let humanNumber = getHumanChoiceNumber();
    let humanChoice;
    if (humanNumber === 1) {
        humanChoice = "Rock";
    } else if (humanNumber === 2) {
        humanChoice = "Paper";
    } else {
        humanChoice = "Scissors";
    }
    return humanChoice;
}

// Step 5: Write the logic to play a single round
// create function to start playing
// ask for player choice, then run computerChoice function
// compare both results, find winner or decide tie 
// add win to global score functions

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 1 && computerChoice === 2) {
        computerScore++;
        console.log("Computer wins!");
    } else if (humanChoice === 2 && computerChoice === 3) {
        computerScore++;
        console.log("Computer wins!");
    } else if (humanChoice === 3 && computerChoice === 1) {
        computerScore++;
        console.log("Computer wins!");
    } else if (humanChoice === 1 && computerChoice === 3) {
        humanScore++;
        console.log("You win!");
    } else if (humanChoice === 2 && computerChoice === 1) {
        humanScore++;
        console.log("You win!");
    } else if (humanChoice === 3 && computerChoice === 2) {
        humanScore++;
        console.log("You win!");
    } else {
        console.log("Tie!");
    }
}

// Step 6: Write the logic to play the entire game
function playGame() {
    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoiceNumber();
        const computerSelection = getComputerChoiceNumber();
        playRound(humanSelection, computerSelection);
        console.log("Round:" + " " + i);
        console.log("Computer chose" + " " + computerChoice)
        console.log("Player has a score of" + " " + humanScore);
        console.log("Computer has a score of" + " " + computerScore);
    } 
}

playGame()