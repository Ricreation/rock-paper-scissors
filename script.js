console.log("Hello mothafuckas lets play rock paper scissors");

function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice(){
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    result = playerChoice.toLocaleLowerCase();
    return result;
}

function playRound(playerInput, computerInput){
    let result = "win/lose?";

    if(playerInput == computerInput){
        result = "its a tie";
    } else if ((playerInput == "rock" && computerInput == "scissors") ||
    (playerInput == "paper" && computerInput == "rock") || 
    (playerInput == "scissors" && computerInput == "paper")){
        playerScore++;
        result = "you win";
    } else if ((playerInput == "scissors" && computerInput == "rock") ||
    (playerInput == "rock" && computerInput == "paper") || 
    (playerInput == "paper" && computerInput == "scissors")){
        computerScore++;
        result = "you lose";
    } else {
        result = "wrong input";
    }

    return result;
    

}

let playerScore = 0;
let computerScore = 0;

function playGame(){
    for (let i=0; i < 5; i++){
        let playerInput = getPlayerChoice();
        console.log("Your choice", playerInput);
        let computerInput = getComputerChoice();
        console.log("Computer's choice", computerInput);
        let result = playRound(playerInput, computerInput);
        console.log("Round :"+(i+1)+" Result", result)


    }
    console.log("Score: player=" +playerScore+ " computer="+computerScore);

}

playGame();


