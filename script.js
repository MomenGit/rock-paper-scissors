function getComputerChoice() {
  //let choices = ["Rock", "Paper", "Scissors"];
  //Return: [0]Rock, [1]Paper or [2]Scissors
  return Math.floor(Math.random() * 3);
}

function getPlayerChoice() {
  let choice = "";
  choice = prompt("Pick: Rock, Paper, Scissors.");
  console.log(choice.toLowerCase());
  return choice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  let result = 0;
  let choices = ["Rock", "Paper", "Scissors"];
  let compChoice = choices[computerSelection];
  let playerChoice;

  switch (playerSelection) {
    case "rock":
      playerChoice = choices[0];
      if (compChoice === choices[2]) result = 1;
      break;
    case "paper":
      playerChoice = choices[1];
      if (compChoice === choices[0]) result = 1;
      break;
    case "scissors":
      playerChoice = choices[2];
      if (compChoice === choices[1]) result = 1;
      break;
    default:
      result = 0;
      break;
  }

  if (playerChoice === compChoice)
    console.log(`Draw! It's ${playerChoice} ${compChoice}`);
  else if (result) console.log(`You Win! ${playerChoice} beats ${compChoice}`);
  else console.log(`You Lose! ${compChoice} beats ${playerChoice}`);
  // your code here!
}

function game() {
  for (let index = 0; index < 5; index++) {
    console.log(`Round ${index + 1}`);
    result = playRound(getPlayerChoice(), getComputerChoice());
  }
}

game();
