import React, { Component } from 'react';
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.clickTurnHandler = this.clickTurnHandler.bind(this);
    this.state = {
      player:"X",
      board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ]
    }
  };


  checkForWin=(){

  }


  clickTurnHandler(row, column){
    console.log('in handler')
    console.log(this.state.player)
    const newPlayer = this.state.player === 'X' ? 'O' : 'X';
    const newBoard = this.state.board;
    const newRow = newBoard[row];
    newRow.splice(column,1, this.state.player);
    newBoard.splice(row,1,newRow);
    this.setState({player: newPlayer, board: newBoard})
  }


  render() {
    const rowStyle = {
      color: 'black',
      height: '120px',
      fontSize: '100px',
      margin: '5px auto',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    }

    const boxStyle = {
      height: '110px',
      width: '110px',
      backgroundColor: 'lightblue',
      margin: 'auto 20px',
      border: '5px solid darkgreen',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    }

    console.log(this.state.board)
    return (
      <div>
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
      </div>
    );
  }
}

export default App;