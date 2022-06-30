const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const choice = [rock, paper, scissors];

const message = document.querySelector("#message");
const playScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const imgChoice = document.createElement("img");

let playerChoice;
let playerScore = 0;
let pcScore = 0;
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

function play(_playerChoice, _computerPlay = computerSelection()) {
  yourChoice.innerHTML = `You chose \n ${_playerChoice.id} `;
  themChoice.innerHTML = `Computer chose \n${_computerPlay.id}`;

  if (_computerPlay.id == _playerChoice.id) message.innerHTML = "Its a tie!";
  switch (_playerChoice.id) {
    case "rock": {
      if (_computerPlay.id == "scissors") {
        message.innerHTML = "You Win! Rock beats scissors!";
        playerScore++;
      } else if (_computerPlay.id == "paper") {
        message.innerHTML = "You Lose! Paper beats Rock";
        pcScore++;
      }
      break;
    }
    case "paper": {
      if (_computerPlay.id == "rock") {
        message.innerHTML = "You Win! Paper Beats Rock";
        playerScore++;
      } else if (_computerPlay.id == "scissors") {
        message.innerHTML = "You Lose! Scissors beats Paper";
        pcScore++;
      }
      break;
    }
    case "scissors": {
      if (_computerPlay.id == "rock") {
        message.innerHTML = "You Lose! Rock Beats Scissors";
        pcScore++;
      } else if (_computerPlay.id == "paper") {
        message.innerHTML = "You Win! Scissors beats Paper";
        playerScore++;
      }
      break;
    }
  }
  playScore.innerHTML = `Your score : ${playerScore}`;
  computerScore.innerHTML = `Computer score : ${pcScore}`;

  const modal = document.querySelector("#modal");
  const finalMessage = document.querySelector("#finalMessage");
  const replayButton = document.querySelector("#rePlay");

  if (playerScore == 5) {
    modal.showModal();
    finalMessage.innerHTML = "You Won!";
    playerScore = 0;
    pcScore = 0;
  } else if (pcScore == 5) {
    modal.showModal();
    finalMessage.innerHTML = "You lose";
    playerScore = 0;
    pcScore = 0;
  }
}
