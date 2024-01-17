
var input;
function check() {
    input = prompt("Rock, Paper, Scissors?").toLowerCase();
    if (input === "rock" || input === "paper" || input === "scissors") {
        console.log("valid input thank you");
    }
    else {
        alert("Your input was invalid")
        input = prompt("Rock, Paper, Scissors?").toLowerCase();
        check();
    }
}
check();
var answer;


function getComputerChoice() {
    var choice = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    alert(choice);
    if (choice == 1) {
        answer = "rock";
    }
    else if (choice == 2) {
        answer = "paper"
    }
    else {
        answer = "scissors"
    }
    return answer;
}
var result;
function round() {
    var computer = getComputerChoice();
    alert(computer)
    if (computer === "rock" && input === "scissors") {
        result = "lose";
        console.log("You lose! Rock beats scissors")
    }
    else if (computer === "rock" && input === "paper") {
        result = "win";
        console.log("You lose! Rock beats paper")
    }
    else if (computer === "rock" && input === "rock") {
        result = "tie";
    }
    else if (computer === "paper" && input === "scissors") {
        result = "win";
        console.log("You win! Scissors beats paper")
    }
    else if (computer === "paper" && input === "paper") {
        result = "tie";
    }
    else if (computer === "paper" && input === "rock") {
        result = "lose";
        console.log("You lose! Paper beats rock")
    }
    else if (computer === "scissors" && input === "rock") {
        result = "win";
        console.log("You win! Rock beats scissors")
    }
    else if (computer === "scissors" && input === "paper") {
        result = "lose";
        console.log("You lose! Scissors beats paper")
    }
    else if (computer === "scissors" && input === "scissors") {
        result = "tie";
    }
    else {
        console.log("Something went wrong");
    }
    if (result === "tie") {
        console.log("Tie replay, enter new entry.")
        check();
        round();
    }
    else {
        return result;
    }
}

function game() {
    var computer = 0;
    var user = 0;
    var win = "You win!";
    var lose = "You lose";
    for (let i = 0; i <= 5; i++) {
        check();
        var finalresult = round();
        if (finalresult === "win") {
            user++;
        }
        else {
            computer++;
        }
    }
    if (user > computer) {
        return win;
    }
    else {
        return lose;
    }
}

console.log(game());