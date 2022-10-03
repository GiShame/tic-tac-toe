const playerTextWinner = document.getElementById("playerText");
const board = document.getElementById("gameboard");
const restartBtn = document.getElementById("restartGameBtn");
let boxes = Array.from(document.getElementsByClassName("box"));

const player1 = "X";
const player2 = "0";
let currentPlayer = player1;
let scores = Array(9).fill(null);
let playing = true;

// For every box(div) wich will be clicked
const startGame = function () {
  boxes.forEach((box) => box.addEventListener("click", boxClicked));
};

function hasPlayerWon(currentPlayer) {
  const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];
  let win = false;
  winCondition.forEach((value, index) => {
    const [a, b, c] = value;
    if (
      scores[a] === currentPlayer &&
      scores[b] === currentPlayer &&
      scores[c] === currentPlayer
    ) {
      win = true;
    }
  });
  return win;
}
// Wich div clicked?
function boxClicked(div) {
  const id = div.target.id;
  if (scores[id] || !playing) return;
  scores[id] = currentPlayer;
  console.log(scores);
  div.target.innerText = currentPlayer;
  const a = hasPlayerWon(currentPlayer);
  if (a) {
    playing = false;
    playerTextWinner.textContent = `Player ${currentPlayer} wins`;
  }
  currentPlayer = currentPlayer == player1 ? player2 : player1;
}

restartBtn.addEventListener("click", restart);
function restart() {
  scores.fill(null);
  boxes.forEach((box) => (box.innerText = ""));
  currentPlayer = player1;
  playerTextWinner.textContent = `TIC TAC TOE`;
}

startGame();
