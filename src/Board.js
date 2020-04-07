import React, { Component } from 'react'
import './Board.css'
import Light from './Light'

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boardTable: this.createBoard(),
      hasWon: false,
    }
    this.flipCell = this.flipCell.bind(this)
  }
  static defaultProps = {
    rows: 5,
    columns: 5,
    chance: 0.5,
  }

  createBoard() {
    let c = []
    for (let row = 0; row < this.props.rows; row++) {
      let r = []
      for (let col = 0; col < this.props.columns; col++) {
        r.push(Math.random() < this.props.chance)
      }
      c.push(r)
    }
    return c
  }

  flipCell(co) {
    let [x, y] = co
    let left = [x - 1, y]
    let top = [x, y - 1]
    let right = [x + 1, y]
    let buttom = [x, y + 1]
    let colorFlipArray = [co, left, top, right, buttom]

    for (let value of colorFlipArray) {
      let [a, b] = value
      if (a >= 0 && a < this.props.rows && b >= 0 && b < this.props.columns) {
        this.state.boardTable[a][b] = !this.state.boardTable[a][b]
        this.setState({
          board: this.state.boardTable[a][b],
        })
      }
    }

    this.setState({
      hasWon: this.state.boardTable.every((row) =>
        row.every((light) => light === false)
      ),
    })
  }
  render() {
    let renderBoard = []
    for (let i = 0; i < this.props.rows; i++) {
      let row = []
      for (let j = 0; j < this.props.columns; j++) {
        let value = [i, j]
        row.push(
          <Light
            light={this.state.boardTable[i][j]}
            key={`${i}${j}`}
            flipCell={this.flipCell.bind(this, value)}
          />
        )
      }
      renderBoard.push(<tr key={i}>{row}</tr>)
    }
    return (
      <div className="Board">
        <h1 style={{textAlign:"center"}}>{this.state.hasWon ? 'You Won' : 'Lights Out'}</h1>
        <table className="Board-table">
          <tbody>{renderBoard}</tbody>
        </table>
      </div>
    )
  }
}

export default Board
