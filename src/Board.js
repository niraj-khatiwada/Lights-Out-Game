import React, { Component } from 'react'
import './Board.css'
import Light from './Light'

import { v4 as uuid } from 'uuid'

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      light: true,
      boardTable: this.createBoard(),
    }
  }
  static defaultProps = {
    rows: 5,
    columns: 5,
    chance: 0.25,
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
    console.log(c)
    return c
  }
  render() {
    let renderBoard = []
    for (let i = 0; i < this.props.rows; i++) {
      let row = []
      for (let j = 0; j < this.props.columns; j++) {
        row.push(<Light light={this.state.boardTable[0][0]} key={uuid()} />)
      }
      renderBoard.push(<tr>{row}</tr>)
    }
    console.log(this.state.boardTable[0][0])
    return (
      <div className="Board">
        <table className="Board-table">
          <tbody>{renderBoard}</tbody>
        </table>
      </div>
    )
  }
}

export default Board
