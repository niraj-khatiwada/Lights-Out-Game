import React, { Component } from 'react'
import './Light.css'

class Light extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.props.flipCell()
  }
  render() {
    return (
      <td
        className={`Light ${this.props.light}`}
        onClick={this.handleClick}
      ></td>
    )
  }
}

export default Light

//10,01,12,21 = 11
//12,21,23,32 = 22
