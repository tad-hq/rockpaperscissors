var message;
document.addEventListener ("click", function(e) {
    var targets = ["rock","paper","scissors"];
    var result = document.querySelector(".result");
    var pc = document.querySelector("#computerscore");
    var player = document.querySelector("#playerscore");
    if (targets.includes(e.target.alt)) {
        game(e.target.alt);
        pc.textContent = computer;
        player.textContent = user;
        result.textContent = message;
        var final = document.querySelector(".finalresult");
        if (computer == 5) {
            final.textContent = "You lose";
            document.querySelector(".overlay").style.display = "block";
        }
        else if (user == 5) {
            final.textContent = "You win!";
            document.querySelector(".overlay").style.display = "block";
        }
        else {
    
        }
    }
    else if (e.target.className == "reset") {
        computer = 0;
        user = 0;
        pc.textContent = computer;
        player.textContent = user;
    }
    else if (e.target.className == "oreset") {
        computer = 0;
        user = 0;
        pc.textContent = computer;
        player.textContent = user;
        document.querySelector(".overlay").style.display = "none";
    }
})
var answer;


function getComputerChoice() {
    var choice = Math.floor(Math.random() * (3 - 1 + 1) + 1)
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
function round(input) {
    var computer = getComputerChoice();
    if (computer === "rock" && input === "scissors") {
        result = "lose";
        message = "You lose! Rock beats scissors";
    }
    else if (computer === "rock" && input === "paper") {
        result = "win";
        message = "You lose! Rock beats paper";
    }
    else if (computer === "rock" && input === "rock") {
        result = "tie";
    }
    else if (computer === "paper" && input === "scissors") {
        result = "win";
        message = "You win! Scissors beats paper";
    }
    else if (computer === "paper" && input === "paper") {
        result = "tie";
    }
    else if (computer === "paper" && input === "rock") {
        result = "lose";
        message = "You lose! Paper beats rock";
    }
    else if (computer === "scissors" && input === "rock") {
        result = "win";
        message = "You win! Rock beats scissors";
    }
    else if (computer === "scissors" && input === "paper") {
        result = "lose";
        message = "You lose! Scissors beats paper";
    }
    else if (computer === "scissors" && input === "scissors") {
        result = "tie";
    }
    else {
        message = "Something went wrong";
    }
    if (result === "tie") {
        message = "Tie replay, enter new entry.";
    }
    else {
        return result;
    }
}
var computer = 0;
var user = 0;
function game(selection) {
    var win = "You win!";
    var lose = "You lose";
    var finalresult = round(selection);
    if (finalresult === "win") {
        user++;
    }
    else {
        computer++;
    }
    if (user > computer) {
        return win;
    }
    else {
        return lose;
    }
}