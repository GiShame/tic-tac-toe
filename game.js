const player = document.getElementById('playerText')
const board = document.getElementById('gameboard')
const restartBtn = document.getElementById('restartGameBtn')
let boxes = Array.from(document.getElementsByClassName('box'))

const player1 = "X"
const player2 = "0"
let currentPlayer = player1
let scores = Array(9).fill(null)

// For every box(div) wich will be clicked
const startGame = function () {
  boxes.forEach(box => box.addEventListener('click', boxClicked))
}

// Wich div clicked?
function boxClicked (div) {
  const id = div.target.id
  console.log(id)

  if (!scores[id]) {
  scores[id] = currentPlayer
  console.log(scores)
  div.target.innerText = currentPlayer
  currentPlayer = currentPlayer == player1 ? player2 : player1
  }
}

restartBtn.addEventListener('click', restart)

function restart() {
  scores.fill(null)
}

startGame()