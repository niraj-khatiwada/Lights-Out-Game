import React, { Component } from 'react'
import './Board.css'
import Light from './Light'

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      light: true,
      boardTable: this.createBoard(),
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
    let self = `${co[0]}${co[1]}`
    let left = `${co[0]}${Math.abs(co[1] - 1)}`
    let top = `${Math.abs(co[0]) - 1}${co[1]}`
    let right = `${co[0]}${co[1] + 1}`
    let buttom = `${co[0] + 1}${co[1]}`
    const colorFlipArray = [self, left, top, right, buttom]
    console.log(left, right, top, buttom)
    console.log(co)
    for (let value of colorFlipArray) {
      if (
        parseInt(value[0]) >= 0 &&
        parseInt(value[0]) < this.props.rows &&
        parseInt(value[1]) >= 0 &&
        parseInt(value[1]) < this.props.columns
      ) {
        this.state.boardTable[parseInt(value[0])][parseInt(value[1])] = !this
          .state.boardTable[parseInt(value[0])][parseInt(value[1])]
        this.setState({
          board: this.state.boardTable[parseInt(value[0])][parseInt(value[1])],
        })
      }
    }
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
        <table className="Board-table">
          <tbody>{renderBoard}</tbody>
        </table>
      </div>
    )
  }
}

export default Board
