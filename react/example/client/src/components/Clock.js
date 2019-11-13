import React, { Component } from 'react';

//=============COMPONENT IMPORTS=======================

export default class Clock extends Component {
  constructor() {
    super()
    this.state={
      time: {date: new Date()}
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((state) => {
        return {time:
          {date:
            new Date()
          }
        }
      })
    }, 1000)
  }

  render() {

    const {date} = this.state.time

    return (
      <div>

        {date.toLocaleTimeString()}

      </div>

    )
  }
}
