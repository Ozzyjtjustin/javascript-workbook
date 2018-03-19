import React, { Component } from 'react';
import '../App.css';
import {styles} from '../styles.js'
import {TicTacToeContainer} from './ContainerComponent'

export class TicTacToePresenter extends Component {
  render(){
    return (
      <div style={{backgroundColor:'lightgrey'}}>
        <header style={styles.headerStyle}>Tic Tac Toe</header>
        <body style={{backgroundColor:'darkgrey'}}>
          <div className="row" style={styles.rowStyle}>
            <div style={styles.boxStyle} onClick={() => {TicTacToeContainer.clickTurnHandler(0, 0)}} data-cell="0">
              {this.props.board[0][0]}
            </div>
            <div style={styles.boxStyle} onClick={() => {TicTacToeContainer.clickTurnHandler(0,1)}} data-cell="1">
              {this.props.board[0][1]}
            </div>
            <div style={styles.boxStyle} onClick={() => {TicTacToeContainer.clickTurnHandler(0,2)}} data-cell="2">
              {this.props.board[0][2]}
            </div>
          </div>
          <div className="row" style={styles.rowStyle}>
            <div style={styles.boxStyle} onClick={() => {TicTacToeContainer.clickTurnHandler(1,0)}} data-cell="3">
              {this.props.board[1][0]}
            </div>
            <div style={styles.boxStyle} onClick={() => {TicTacToeContainer.clickTurnHandler(1,1)}} data-cell="4">
              {this.props.board[1][1]}
            </div>
            <div style={styles.boxStyle} onClick={() => {TicTacToeContainer.clickTurnHandler(1,2)}} data-cell="5">
              {this.props.board[1][2]}
            </div>
          </div>
          <div className="row" style={styles.rowStyle}>
            <div style={styles.boxStyle} onClick={() => {TicTacToeContainer.clickTurnHandler(2,0)}} data-cell="6">
              {this.props.board[2][0]}
            </div>
            <div style={styles.boxStyle} onClick={() => {TicTacToeContainer.clickTurnHandler(2,1)}} data-cell="7">
              {this.props.board[2][1]}
            </div>
            <div style={styles.boxStyle} onClick={() => {TicTacToeContainer.clickTurnHandler(2,2)}} data-cell="8">
              {this.props.board[2][2]}
            </div>
          </div>
          <div className="row" style={styles.rowStyle}>
            <button style={styles.buttonStyle} onClick={()=>{TicTacToeContainer.clickResetBoardHandler()}}>
            Reset Board
            </button>
            <button style={styles.buttonStyle} onClick={()=>{TicTacToeContainer.clickResetWinCountHandler()}}>
            Reset Win Count
            </button>
          </div>
        </body>
        <footer style={styles.footerStyle}>
          <div>
            Score x: {this.props.xWins} / o: {this.props.oWins}
          </div>
        </footer>
      </div>
    );
  }
}

export default TicTacToePresenter;
