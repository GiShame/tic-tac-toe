const player = document.getElementById('playerText')
const board = document.getElementById('gameboard')
let boxes = Array.from(document.getElementsByClassName('box'))

const player1 = "X"
const player2 = "0"
let currentPlayer = player1

boxes[0].addEventListener('click', e => console.log(e))

Array.prototype.forEach2 = function() {
  for(let i = 0; i < this.length; i++) {
    
  }
}

const a = [1, 2]
console.log(a.forEach2())