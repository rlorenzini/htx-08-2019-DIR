import React, { Component } from 'react';

class Clock extends Component {
  constructor(){
    super()
    this.state = {
      time: {date: new Date()}
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState((state) => {
        return {time: {date: new Date()}}
      })
    }, 1000)
  }
  render(){
    return(
      <div>
      {this.state.time.date.toLocaleTimeString()}
      </div>
    )
  }
}

export default Clock;
