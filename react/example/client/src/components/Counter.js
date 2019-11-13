import React, { Component } from 'react';

//=============COMPONENT IMPORTS=======================

export default class Counter extends Component {
  constructor() {
    super()

    this.state={
      count: 0
    }
  }

  //arrow functions automatically bind the function to this
  handleOnClickIncrement = (e) => {
    // console.log(e.target)

    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    // console.log(this)

    return (
      <div>

        <button name="potatoes" onClick={this.handleOnClickIncrement}> BUTTON! </button>
        {this.state.count}

      </div>

    )
  }
}
