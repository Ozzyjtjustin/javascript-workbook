'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};
let moveCounter = 0

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

const isItLegal = () => {
  if((startStack === "a" || startStack === "b" || startStack === "c") &&
     (endStack === "a" || endStack === "b" || endStack === "c")){
    console.log("yes it is legal input")
    return true
  }
}

const movePiece = () => {
  let blockToBeMoved = stacks[startStack].pop()
  let lastBlockLastStack = stacks[endStack].valueOf()[stacks[endStack].valueOf().length-1]
  if((stacks[endStack].length === 0) || (blockToBeMoved < lastBlockLastStack)){
      stacks[endStack].push(blockToBeMoved)
      moveCounter ++
      return true
  }
}

const checkMoveCounter = (moveCounter) => {
    if(moveCounter <= 16){
      return true
    }else{
      return false
    }
}

const checkForWin = () => {
  valueOfCStack = stacks[endStack].valueOf()
  winningArray = [4, 3, 2, 1]
  if(valueOfCStack == winningArray){
    if(checkMoveCounter){
      return true
    }else{
      console.log("Almost but you use too many moves, give it another trie!")
      return false
    }
}

const towersOfHanoi = (startStack, endStack) => {
  if(isItLegal){
    if(movePiece){
      if(checkForWin){
        console.log("Congratulations you win!")
        printStacks
      }
      else console.log("next move")
    }
    else console.log("invalid move")
  }
  else console.log("invalid input")
}

towersOfHanoi("a","b")
towersOfHanoi("a","c")
towersOfHanoi("b","c")
towersOfHanoi("a","b")
towersOfHanoi("c","a")
towersOfHanoi("c","b")
towersOfHanoi("a","b")
towersOfHanoi("a","c")
towersOfHanoi("b","c")
towersOfHanoi("b","a")
towersOfHanoi("c","a")
towersOfHanoi("b","c")
towersOfHanoi("a","b")
towersOfHanoi("a","c")
towersOfHanoi("b","c")

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

getPrompt();
