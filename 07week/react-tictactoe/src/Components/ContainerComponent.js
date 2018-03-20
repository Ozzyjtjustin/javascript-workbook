import React, { Component } from 'react';
import '../App.css';
import {TicTacToePresenter} from './PresentationalComponent'

export class TicTacToeContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      player:"X",
      clickCount: 0,
      xWins: null,
      oWins: null,
      board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ]
    }
  };

   clickTurnHandler=(row, column)=>{
    const newPlayer = this.state.player;
    const newClickCount = this.state.clickCount;
    const newBoard = this.state.board;
    const clickedRow = this.state.board[row];
    clickedRow.splice(column,1, this.state.player);
    newBoard.splice(row,1,clickedRow);
    this.setState({clickCount: newClickCount + 1, board:newBoard, player: newPlayer === 'X' ? 'O' : 'X'});
    this.checkForWin()
  };

  clickResetBoardHandler=()=>{
    const resetPlayer = "X"
    const resetClickCount = 0
    const resetBoard = [[null, null, null],[null, null, null],[null, null, null]]
    this.setState({player: resetPlayer, clickCount: resetClickCount, board: resetBoard})
  };

  clickResetWinCountHandler=()=>{
    const resetWinCountX = 0
    const resetWinCountO = 0
    this.setState({xWins: resetWinCountX, oWins: resetWinCountO})
  };
          // checkForHorizontalWin=()=>{
          //   this.state.board.forEach((arr, index)=>{
          //     arr.every((box)=>{
          //       if(box === this.state.player){
          //         console.log('horizontal')
          //         return true
          //       }
          //     })
          //   })
          // };
  checkForHorizontalWin=()=>{
    if((this.state.board[0][0] === this.state.player && this.state.board[0][1] === this.state.player && this.state.board[0][2] === this.state.player) ||
     (this.state.board[1][0] === this.state.player && this.state.board[1][2] === this.state.player && this.state.board[1][2] === this.state.player) ||
     (this.state.board[2][0] === this.state.player && this.state.board[2][1] === this.state.player && this.state.board[2][2] === this.state.player)){
      return  true
    }
  };

  checkForVerticalWin=()=>{
    if((this.state.board[0][0] === this.state.player && this.state.board[1][0] === this.state.player && this.state.board[2][0] === this.state.player) ||
     (this.state.board[0][1] === this.state.player && this.state.board[1][1] === this.state.player && this.state.board[2][1] === this.state.player) ||
     (this.state.board[0][2] === this.state.player && this.state.board[1][2] === this.state.player && this.state.board[2][2] === this.state.player)){
      return  true
    }
  };

  checkForDiagonalWin=()=>{
    if((this.state.board[0][0] === this.state.player && this.state.board[1][1] === this.state.player && this.state.board[2][2] === this.state.player) ||
      (this.state.board[2][0] === this.state.player && this.state.board[1][1] === this.state.player && this.state.board[0][2] === this.state.player)){
      return  true
    }
  };

  checkForWin=()=>{
    if(this.state.clickCount >= 4){
      if(this.checkForHorizontalWin() || this.checkForVerticalWin() ||  this.checkForDiagonalWin()){
        alert(this.state.player + " wins!")
        if(this.state.player === "X"){
          const newXWinCount = this.state.xWins
          this.setState({xWins: newXWinCount + 1})
        }else{
          const newOWinCount = this.state.oWins
          this.setState({oWins: newOWinCount + 1})
        }
      }
    }
  };



  render(){
    return <TicTacToePresenter
      board={this.state.board}
      xWinCount={this.state.xWins}
      oWinCount={this.state.oWins}
      turnClick={()=>this.clickTurnHandler()}
      resetBoardClick={()=>this.clickResetBoardHandler()}
      resetWinsClick={()=>this.clickResetWinCountHandler()}
    />
  }
}

export default TicTacToeContainer;
