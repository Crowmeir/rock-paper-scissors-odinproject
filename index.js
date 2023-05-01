function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];

    let rand = Math.random();
    // For randomization to
   
    rand *= choices.length;

    rand = Math.floor(rand);
   console.log("The computer chose: " + choices[rand]);
   return choices[rand];
}

function game() {
   let playerScore = 0;
   let computerScore = 0;
   for(let i=0;i<5;i++){
       let playerSelection = prompt("Enter your choice (rock/paper/scissors)").toLowerCase();
       let computerSelection = getComputerChoice();
       if(playerSelection == "rock" && computerSelection == "rock"){
           console.log("The game was a draw!");
       }
       else if (playerSelection == "rock" && computerSelection == "paper"){
           computerScore+=1;
           console.log("Computer won the round!");
       }
       else if (playerSelection == "rock" && computerSelection == "scissors"){
           playerScore+=1;
           console.log("Player has won the round!");
       }
       else if (playerSelection == "paper" && computerSelection == "scissors"){
           computerScore+=1;
           console.log("Computer has won the round!");
       }
       else if (playerSelection == "paper" && computerSelection == "paper"){
           console.log("The game was a draw!");
       }
       else if (playerSelection == "paper" && computerSelection == "rock"){
           playerScore+=1;
           console.log("Player won the round!");
       }
       else if (playerSelection == "scissors" && computerSelection == "scissors"){
           console.log("The game was a draw!");
       }
       else if (playerSelection == "scissors" && computerSelection == "rock"){
           computerScore+=1;
           console.log("Computer has won the round!");
       }
       else if (playerSelection == "scissors" && computerSelection == "paper"){
           playerScore+=1;
           console.log("Player has won the round!");
       }
       console.log("Player Score: " +playerScore);
       console.log ("Computer Score: " +computerScore);
   }
   console.log("Final Scores:");
   console.log("Player Score: " + playerScore);
   console.log("Computer Score: " + computerScore);
}

game();