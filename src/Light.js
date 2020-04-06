import React, { Component } from 'react'
import './Light.css'

class Light extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {}
  render() {
    console.log(this.props.light)
    return (
      <td
        className={`Light ${this.props.light}`}
        onClick={this.handleClick}
      ></td>
    )
  }
}

export default Light
