const rock = document.querySelector("#rock"); //metavlites gia tis eikones
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
//metavlhth gia thn epilogh tou upologisth
const choice = [rock, paper, scissors];

const message = document.querySelector("#message");
const playScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");

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
  yourChoice.innerHTML = `Your choice :  \n  ${_playerChoice.id}`;
  themChoice.innerHTML = `PC choice : \n${_computerPlay.id}`;

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

  if (playerScore == 5) {
    message.innerHTML = "You Won!";
    playerScore = 0;
    pcScore = 0;
  } else if (pcScore == 5) {
    message.innerHTML = "You lose";
    playerScore = 0;
    pcScore = 0;
  }
}
