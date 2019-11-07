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
  //state seconds and minutes are used for display purposes and not logic
  secondsRemaining;
  //total global remaining seconds
  intervalHandle;
  //global interval countdown

  handleChange = (e) => {
    this.setState({
      minutes: e.target.value
    })
  };

  handleTimerLogic = (e) => {
    var min = Math.floor(this.secondsRemaining / 60);
    //min is the global remaining seconds / 60 (360 secnods / 60 = 6 minutes)
    var sec = this.secondsRemaining - (min * 60);
    //sec is the global remaining seconds - min * 60
    //360 seconds - (6 minutes * 60) = 0
    //361 seconds - (6 minutes * 60) = 1
    //this is to make the display showing 00 when the value is 60 seconds
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
      //once time === 0, clear the global interval
      clearInterval(this.intervalHandle)
      this.setState({
        message: "Timer is done!"
      })
    }
    this.secondsRemaining--
    //global remaining seconds decrement
  };

  handleStartCountdown = (e) => {
    this.setState({
      message: "COUNTDOWN!"
    })
    //on click, set global interval countdown
    this.intervalHandle = setInterval(this.handleTimerLogic, 1000);
    let time = this.state.minutes;
    //this.state.minutes = input value of user
    this.secondsRemaining = time * 60;
    //global remaining seconds is set to the minutes * 60
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
          <button onClick={this.handleStartCountdown} type="submit" name="timerSubmit">Start Timer</button>
        </form>
      </div>
    )
  }
}

export default Timer;
