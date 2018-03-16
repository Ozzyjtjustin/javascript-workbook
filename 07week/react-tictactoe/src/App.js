import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
    console.log(this.state.clickCount)
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
    const rowStyle = {
      color: 'black',
      height: '110',
      fontSize: '100px',
      margin: '15px auto',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    }

    const boxStyle = {
      height: '110px',
      width: '110px',
      backgroundColor: 'lightblue',
      margin: 'auto 20px',
      border: '5px solid Black',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    }

    const buttonStyle ={
      height: '50px',
      width: '100px',
      backgroundColor: 'grey',
      border: '2.5px solid Black',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    }

    const headerStyle = {
      fontSize: '75px',
      backgroundColor: "grey",
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    }
    const footerStyle = {
      height:'100px',
      fontSize: '50px',
      backgroundColor: "grey",
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    }

    const backgroundStyle = {
      background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT22IQLFS9ukPnOOa-ty0R4kbZTTC_D_R3KKEmwAkdNC3XVMtqt(" + Background + ")'
    }

    return (
      <div style={{backgroundColor:'darkgrey'}}>
        <header style={headerStyle}>   Tic Tac Toe    </header>
          <body style={{backgroundColor: "lightgrey"}}>
          <div className="row" style={rowStyle}>
            <div style={boxStyle} onClick={() => {this.clickTurnHandler(0, 0)}} data-cell="0">
              {this.state.board[0][0]}
            </div>
            <div style={boxStyle} onClick={() => {this.clickTurnHandler(0,1)}} data-cell="1">
              {this.state.board[0][1]}
            </div>
            <div style={boxStyle} onClick={() => {this.clickTurnHandler(0,2)}} data-cell="2">
              {this.state.board[0][2]}
            </div>
          </div>
          <div className="row" style={rowStyle}>
            <div style={boxStyle} onClick={() => {this.clickTurnHandler(1,0)}} data-cell="3">
              {this.state.board[1][0]}
            </div>
            <div style={boxStyle} onClick={() => {this.clickTurnHandler(1,1)}} data-cell="4">
              {this.state.board[1][1]}
            </div>
            <div style={boxStyle} onClick={() => {this.clickTurnHandler(1,2)}} data-cell="5">
              {this.state.board[1][2]}
            </div>
          </div>
          <div className="row" style={rowStyle}>
            <div style={boxStyle} onClick={() => {this.clickTurnHandler(2,0)}} data-cell="6">
              {this.state.board[2][0]}
            </div>
            <div style={boxStyle} onClick={() => {this.clickTurnHandler(2,1)}} data-cell="7">
              {this.state.board[2][1]}
            </div>
            <div style={boxStyle} onClick={() => {this.clickTurnHandler(2,2)}} data-cell="8">
              {this.state.board[2][2]}
            </div>
          </div>
          <div className="row" style={rowStyle}>
            <button style={buttonStyle} onClick={()=>{this.clickResetBoardHandler()}}>
            Reset Board
            </button>
            <button style={buttonStyle} onClick={()=>{this.clickResetWinCountHandler()}}>
            Reset Win Count
            </button>
          </div>
        </body>
        <footer style={footerStyle}>
          <div>
            Score: Xs {this.state.xWins} , Os {this.state.oWins}
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
