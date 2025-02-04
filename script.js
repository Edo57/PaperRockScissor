function computerPlay() {
    let game = ["paper", "rock", "scissors"];
    let gameToUse = game[Math.floor(Math.random() * game.length)];
    return gameToUse;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            userScore += 1;
            return "You win! Rock beats Scissors";
        } else {
            computerScore += 1;
            return "You lose! Rock loses to Paper";
        }
    } else if (playerSelection === 'scissors' && computerSelection === 'paper' ||
               playerSelection === 'paper' && computerSelection === 'rock') {
        userScore += 1;
        return "You win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection;
    } else {
        computerScore += 1;
        return "You lose! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " loses to " + computerSelection;
    }
}

let computerScore = 0;
let userScore = 0;

function updateResult(message) {
    document.getElementById('result').innerHTML = `
        <p>${message}</p>
        <p>Your score: ${userScore}</p>
        <p>Computer's score: ${computerScore}</p>
    `;
}

document.getElementById('rock').addEventListener('click', function() {
    game('rock');
});
document.getElementById('paper').addEventListener('click', function() {
    game('paper');
});
document.getElementById('scissors').addEventListener('click', function() {
    game('scissors');
});

function game(playerSelection) {
    const computerSelection = computerPlay();
    const resultMessage = playRound(playerSelection, computerSelection);
    updateResult(resultMessage);
}
