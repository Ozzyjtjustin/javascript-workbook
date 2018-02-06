// 'use strict';
//
// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn;
let turnCounter = 1

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

const horizontalWin = (player) => {
  if((board[0][0] === player) && (board[0][1] === player) && (board[0][2] === player) ||
     (board[1][0] === player) && (board[1][1] === player) && (board[1][2] === player) ||
     (board[2][0] === player) && (board[2][1] === player) && (board[2][2] === player)){
     return true
  }
}

const verticalWin = (player) => {
  if((board[0][0] === player) && (board[1][0] === player) && (board[2][0] === player) ||
     (board[0][1] === player) && (board[1][1] === player) && (board[2][1] === player) ||
     (board[0][2] === player) && (board[1][2] === player) && (board[2][2] === player)){
     return  true
  }
}

const diagonalWin = (player) => {
  if((board[0][0] === player) && (board[1][1] === player) && (board[2][2] === player) ||
     (board[0][2] === player) && (board[1][1] === player) && (board[2][0] === player)){
     return true
  }
}
const checkForWin = () => {
  if(diagonalWin("x") || verticalWin("x") || horizontalWin("x")){
    return console.log("Xs win!" + board)
  }else if (diagonalWin("o") || verticalWin("o") || horizontalWin("o")){
    return console.log("Os win!" + board)
  }else {console.log("tie")}
}

function alternatePlayers(){
  if(tunCounter % 2 === 0){
    playerTurn = "O"
  }else {
    playerTurn = "X"
  }
}

const ticTacToe = (row, column) => {
  board[row][column] = playerTurn
  turnCounter ++
    checkForWin();
    console.log(printBoard)

}
ticTacToe(0,0)
ticTacToe(1,1)
ticTacToe(2,2)



// function getPrompt() {
//   printBoard();
//   console.log("It's Player " + playerTurn + "'s turn.");
//   rl.question('row: ', (row) => {
//     rl.question('column: ', (column) => {
//       ticTacToe(row, column);
//       getPrompt();
//     });
//   });
//
// }
//
//
//
// // Tests
//
// if (typeof describe === 'function') {
//
//   describe('#ticTacToe()', () => {
//     it('should place mark on the board', () => {
//       ticTacToe(1, 1);
//       assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
//     });
//     it('should alternate between players', () => {
//       ticTacToe(0, 0);
//       assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
//     });
//     it('should check for vertical wins', () => {
//       board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
//       assert.equal(verticalWin(), true);
//     });
//     it('should check for horizontal wins', () => {
//       board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
//       assert.equal(horizontalWin(), true);
//     });
//     it('should check for diagonal wins', () => {
//       board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
//       assert.equal(diagonalWin(), true);
//     });
//     it('should detect a win', () => {
//       assert.equal(checkForWin(), true);
//     });
//   });
// } else {
//
//   getPrompt();
//
// }
