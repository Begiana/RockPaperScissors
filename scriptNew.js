const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const choice = [rock, paper, scissors];

const message = document.querySelector("#message");
const playScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");

let playerChoice,
  playerScore = 0,
  pcScore = 0;

message.innerHTML = "make your choice";

//tyxaia epilogh ypologisth  gia thn thesh tou pinaka choice
function computerSelection() {
  let ComputerChoice = Math.round(Math.random() * 2);
  return choice[ComputerChoice]; //epistrefei thesh pinaka
}
choice.forEach(playerSelection);
function playerSelection(x) {
  x.addEventListener("click", () => {
    playerChoice = x;
    play(playerChoice);
  });
}
