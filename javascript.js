// Function that returns a number between 1 and 3
function getComputerChoice() {
    let choice = Math.floor((Math.random()*3)+1); 
    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper"; 
    } else if (choice === 3) {
        return "Scissors"
    } else {
        return console.error("Random Number does not work")
    }
}

// Function that turns a string's first letter to upper case and the rest to lower case
function firstUpperCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Function of a single Play Round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    }
    switch (playerSelection) {
        case "Rock": {
            if (computerSelection === "Paper") {
                return "Lose";
            } else if (computerSelection === "Scissors") {
                return "Win"
            }
            break;
        }
        case "Paper": {
            if (computerSelection === "Rock") {
                return "Win";
            } else if (computerSelection === "Scissors") {
                return "Lose"
            }
            break;
        }
        case "Scissors": {
            if (computerSelection === "Rock") {
                return "Lose";
            } else if (computerSelection === "Paper") {
                return "Win"
            }
            break
        }
        default: {
            return console.warn("playerSelection error")
        }
    }
}

// Function of a full game
function game() {
    var player = 0;
    var computer = 0;

    for (let i = 0; i < 5; i++) {
        var getPlayerChoice = prompt("Insert Choice");
        var getPlayerChoice = firstUpperCase(getPlayerChoice);
        var computerSelection = getComputerChoice();

        if (playRound(getPlayerChoice, computerSelection) === "Win") {
            player++;
            console.log("You Win! " + `${getPlayerChoice}` + " beats " + `${computerSelection}`)
        } else if (playRound(getPlayerChoice, computerSelection) === "Lose") {
            computer++;
            console.log("You Lose! " + `${computerSelection}` + " beats " + `${getPlayerChoice}`)
        } else if (playRound(getPlayerChoice, computerSelection) === "Tie") {
            console.log("It's a Tie")
        } else {
            console.log("The value inserted is not an option")
        }
    }

    if (player > computer) {
        console.log("Final Game Result: Player Wins :)");
        return "Final Game Result: Player Wins :)";

    } else if (player < computer) {
        console.log("Final Game Result: Computer Wins :(");
        return "Final Game Result: Computer Wins :(";

    } else {
        console.log("Final Game Result: Tie!");
        return "Final Game Result: Tie!";
    }
}

// Here I selected the buttons, and made it so that if pressed it executes
// a play round with the playerSelection chosen.
const rock = document.querySelector(".rock");
rock.addEventListener('click', function(e) {
    rock.classList.toggle("pressed");
    setTimeout(() => {
        rock.classList.toggle("pressed")
    }, "400");
    console.log(playRound("Rock", getComputerChoice()));
});

const paper = document.querySelector(".paper");
paper.addEventListener('click', function(e) {
    paper.classList.toggle("pressed");
    setTimeout(() => {
        paper.classList.toggle("pressed")
    }, "400");
    console.log(playRound("Paper", getComputerChoice()));
});

const scissors = document.querySelector(".scissors");
scissors.addEventListener('click', function(e) {
    scissors.classList.toggle("pressed");
    setTimeout(() => {
        scissors.classList.toggle("pressed")
    }, "400");
    console.log(playRound("Scissors", getComputerChoice()));
});

