const imgs = [
  "./assets/rock.jpg",
  "./assets/paper.jpg",
  "./assets/scissors.jpg",
];
let choices = ["r", "p", "s"];
let playerWins = 0;
let computerWins = 0;
const playBtns = document.querySelectorAll("#btns-container .img-btn");
let playerChoiceView = document.querySelector("#player .img-asset");
let computerChoiceView = document.querySelector("#computer .img-asset");

playBtns.forEach((e) => {
  e.addEventListener("click", (ev) => {
    playRound(e.id);
    e.classList.add("playing");
    setTimeout(() => {
      e.classList.remove("playing");
    }, 50);
  });
});

function playRound(playerSelection) {
  let result = 0;
  let compChoiceIndex = getComputerChoice();
  let compChoice = choices[compChoiceIndex];

  console.log(compChoice);
  console.log(playerSelection);
  switch (playerSelection) {
    case "r":
      if (compChoice === choices[2]) result = 1;
      break;
    case "p":
      if (compChoice === choices[0]) result = 1;
      break;
    case "s":
      if (compChoice === choices[1]) result = 1;
      break;
    default:
      result = 0;
      break;
  }
  computerChoiceView.src = imgs[compChoiceIndex];
  playerChoiceView.src = imgs[choices.indexOf(playerSelection)];

  if (playerSelection == compChoice) {
    console.log(`Draw! It's ${playerSelection} ${compChoice}`);
  } else if (result) {
    playerWins++;
    document.getElementById("wins").innerHTML = playerWins;
    console.log(`You Win! ${playerSelection} beats ${compChoice}`);
  } else {
    computerWins++;
    document.getElementById("loses").innerHTML = computerWins;
    console.log(`You Lose! ${compChoice} beats ${playerSelection}`);
  }
  // your code here!
}

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}
