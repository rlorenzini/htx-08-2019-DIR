import React, { Component } from 'react';

class Timer extends Component {
  constructor(){
    super()
    this.state = {
      seconds: '00',
      minutes: '00',
      message: 'Ready, Set, Count!'
    }
  };

  secondsRemaining;
  intervalHandle;

  handleChange = (e) => {
    this.setState({
      minutes: e.target.value
    })
  };

  handleTimerInput = (e) => {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - (min * 60);
    this.setState({
      minutes: min,
      seconds: sec
    })

    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds
      })
    }
    if (min < 10) {
      this.setState({
        value: "0" + min
      })
    }
    if (min === 0 & sec === 0) {
      clearInterval(this.intervalHandle)
      this.setState({
        message: "Timer is done!"
      })
    }
    this.secondsRemaining--
  };

  handleTimerCountdown = (e) => {
    this.setState({
      message: "COUNTDOWN!"
    })
    this.intervalHandle = setInterval(this.handleTimerInput, 1000);
    let time = this.state.minutes;
    this.secondsRemaining = time * 60;
    e.preventDefault();
  };

  render(){
    return(
      <div>
      {this.state.message}
      <div />
      {this.state.minutes}:{this.state.seconds}
        <form>
          <label htmlFor="seconds">Enter Time</label>
          <input required onChange={this.handleChange} type="number" name="minutes" placeholder="Minutes"></input>
          <div />
          <button onClick={this.handleTimerCountdown} type="submit" name="timerSubmit">Start Timer</button>
        </form>
      </div>
    )
  }
}

export default Timer;
