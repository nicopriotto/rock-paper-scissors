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
        text.innerHTML = "You Tied!";
        return "Tie";
    }
    switch (playerSelection) {
        case "Rock": {
            if (computerSelection === "Paper") {
                text.innerHTML = "You Lose! Paper beats Rock.";
                return "Lose";
            } else if (computerSelection === "Scissors") {
                text.innerHTML = "You Win! Rock beats Scissors.";
                return "Win"
            }
            break;
        }
        case "Paper": {
            if (computerSelection === "Rock") {
                text.innerHTML = "You Win! Paper beats Rock.";
                return "Win";
            } else if (computerSelection === "Scissors") {
                text.innerHTML = "You Lose! Scissors beats Paper.";
                return "Lose"
            }
            break;
        }
        case "Scissors": {
            if (computerSelection === "Rock") {
                text.innerHTML = "You Lose! Rock beats Scissors.";
                return "Lose";
            } else if (computerSelection === "Paper") {
                text.innerHTML = "You Win! Scissors beats Paper.";
                return "Win"
            }
            break
        }
        default: {
            return console.warn("playerSelection error")
        }
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
    tallyModify(playRound("Rock", getComputerChoice()));
    end()
});

const paper = document.querySelector(".paper");
paper.addEventListener('click', function(e) {
    paper.classList.toggle("pressed");
    setTimeout(() => {
        paper.classList.toggle("pressed")
    }, "400");
    tallyModify(playRound("Paper", getComputerChoice()));
    end();
});

const scissors = document.querySelector(".scissors");
scissors.addEventListener('click', function(e) {
    scissors.classList.toggle("pressed");
    setTimeout(() => {
        scissors.classList.toggle("pressed")
    }, "400");
    tallyModify(playRound("Scissors", getComputerChoice()));
    end()
});


 // Modify the tally counters when win or lose
const tallyPlayer = document.querySelector(".tallyPlayer");
const tallyComputer = document.querySelector(".tallyComputer");

player = 0; // player starts with 0 points
computer = 0; // idem

function tallyModify(play) {
if (play === "Win") {
    player++;
    console.log(player);
    tallyPlayer.textContent = player;
    return
} else if (play == "Lose")
    computer++;
    console.log(computer);
    tallyComputer.textContent = computer;
}

// Final text

const text = document.querySelector("#textResult");
function end() {
    if (player === 5) {
        setTimeout( () => {
            text.innerHTML = "Final Game Result: Player Wins :)";
        }, 2000); 
        newGame();
    } else if (computer === 5) {
        setTimeout( () => {
            text.innerHTML =  "Final Game Result: Computer Wins :(";
        }, 2000); 
        newGame();
    } 
}

// Config for new game
function newGame() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;

    const restart = document.createElement("button");
    restart.classList.add("restart");
    restart.textContent = "RESTART";
    restart.addEventListener('click', () => {
        restart.classList.add("bigger")
        setTimeout( () => {
            window.location.reload();
        }, 300);
        
    });
    const end = document.querySelector(".end");
    end.appendChild(restart);
}