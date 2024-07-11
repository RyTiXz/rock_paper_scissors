// Pseudo Code

// DONE Step 1: Setup the Project structure

// Step 4: Declare the players score variables
let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = "";
let roundCount = 1;

// DONE Step 2: Write the logic to get the computer choice
// function getcomputerChoice should random choose between rock paper or scissors
// to get this, function should roll a number between 1 to 3, each one stands for one of those mentiond above
// safe result in a variable 
// console.log result and test the code

function getComputerChoice() {
    let computerChoiceNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (computerChoiceNumber === 1) {
        computerChoice = "Rock";
    } else if (computerChoiceNumber === 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

/*
function getComputerChoice() {
    let computerNumber = getComputerChoiceNumber();
    if (computerNumber === 1) {
        computerChoice = "Rock";
    } else if (computerNumber === 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}
    */

// DONE Step 3: Write the logic to get the human choice
// create new function getHumanChoice
// gutHumanChoice should return a valid choice (test it!)

/*
function getHumanChoiceNumber() {
    let humanChoiceNumber = ""
    do {
        humanChoiceNumber = parseInt(window.prompt("Choose Rock (1) Paper (2) or Scissors (3)", ""));
    } while (isNaN(humanChoiceNumber) || humanChoiceNumber > 3 || humanChoiceNumber < 1);
    return humanChoiceNumber;
}

function getHumanChoice() {
    let humanNumber = getHumanChoiceNumber();
    if (humanNumber === 1) {
        humanChoice = "Rock";
    } else if (humanNumber === 2) {
        humanChoice = "Paper";
    } else if (humanNumber === 3) {
        humanChoice = "Scissors";
    }
    return humanChoice;
}

*/
// Step 5: Write the logic to play a single round
// create function to start playing
// ask for player choice, then run computerChoice function
// compare both results, find winner or decide tie 
// add win to global score functions

const body = document.querySelector("body");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerCounter = document.querySelector("#playerCounter");
const computerCounter = document.querySelector("#computerCounter");
const roundCountNumber = document.querySelector("#roundCountNumber");
const gameResultComputerChoice = document.createElement("div");
const gameResultHumanChoice = document.createElement("div");
const gameResultText = document.createElement("div");
const chosenResult = document.querySelector("#chosenResult");
const button = document.createElement("button");
const replayButton = document.querySelector(".replayButton");
const lowerArea = document.querySelector(".lowerArea");

function choices () {
    gameResultHumanChoice.textContent = "Player chose " + humanChoice;
    gameResultComputerChoice.textContent = "Computer chose " + computerChoice;
    chosenResult.appendChild(gameResultComputerChoice);
    chosenResult.appendChild(gameResultHumanChoice);
}

function playRound(human, computer) {
    if (computerScore < 5 && humanScore < 5) {
        if (human === "Rock" && computer === "Paper") {
            computerScore++;
            roundCount++;
            chosenResult.textContent = "Computer wins round " + (roundCount - 1);
            computerCounter.textContent = computerScore;
        } else if (human === "Paper" && computer === "Scissors") {
            computerScore++;
            roundCount++;
            chosenResult.textContent = "Computer wins round " + (roundCount - 1);
            computerCounter.textContent = computerScore;
        } else if (human === "Scissors" && computer === "Rock") {
            computerScore++;
            roundCount++;
            chosenResult.textContent = "Computer wins round " + (roundCount - 1);
            computerCounter.textContent = computerScore;
        } else if (human === "Rock" && computer === "Scissors") {
            humanScore++;
            roundCount++;
            chosenResult.textContent = "Player wins round " + (roundCount - 1);
            playerCounter.textContent = humanScore;
        } else if (human === "Paper" && computer === "Rock") {
            humanScore++;
            roundCount++;
            chosenResult.textContent = "Player wins round " + (roundCount - 1);
            playerCounter.textContent = humanScore;
        } else if (human === "Scissors" && computer === "Paper") {
            humanScore++;
            roundCount++;
            chosenResult.textContent = "Player wins round " + (roundCount - 1);
            playerCounter.textContent = humanScore;
        } else {
            roundCount++;
            chosenResult.textContent = "Tie for round " + (roundCount - 1);
        }
    }
    if (computerScore === 5 || humanScore === 5) {
        if (humanScore > computerScore) {
            gameResultText.textContent = "Game is over! Player wins!"
            chosenResult.appendChild(gameResultText);
        } else if (humanScore < computerScore) {
            gameResultText.textContent = "Game is over! Computer wins!"
            chosenResult.appendChild(gameResultText);
        } else {
            gameResultText.textContent = "Game is over! It's a tie!"
            chosenResult.appendChild(gameResultText);
        }   
    }
    if (computerScore === 5 || humanScore === 5) {
        button.textContent = "replay";
        button.classList = "btn"
        replayButton.appendChild(button);
    }
}

rock.addEventListener("click", () => {
    if (computerScore < 5 && humanScore < 5) {
        humanChoice = "Rock";
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        choices();
    }
});

paper.addEventListener("click", () => {
    if (computerScore < 5 && humanScore < 5) {
        humanChoice = "Paper";
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        choices();
    }

});

scissors.addEventListener("click", () => {
    if (computerScore < 5 && humanScore < 5) {
        humanChoice = "Scissors";
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        choices();
    }
});

button.addEventListener("mouseover", () => {
    button.style.boxShadow = "10px 5px 5px";
});

button.addEventListener("mouseout", () => {
    button.style.boxShadow = "";
})

button.addEventListener("click", () => {
    location.reload();
});
