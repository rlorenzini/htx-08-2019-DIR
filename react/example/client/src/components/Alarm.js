import React, { Component } from 'react';

export default class AlarmClock extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: '',
      alarmTime: ''
    };
    this.setAlarmTime = this.setAlarmTime.bind(this);
  }

  componentDidMount(){
    this.clock = setInterval(
      () => this.setCurrentTime(),
      1000
    )
    this.interval = setInterval(
      () => this.checkAlarmClock(),
      1000
    )
  }

  componentWillUnmount(){
    clearInterval(this.clock);
    clearInterval(this.interval);
  }

  setCurrentTime = () => {
    this.setState({
      currentTime: new Date().toLocaleTimeString('en-US', { hour12: false })
    });
  }

  setAlarmTime = (e) => {
    e.preventDefault();
    const inputAlarmTimeModified = e.target.value + ':00'
    this.setState({
      alarmTime: inputAlarmTimeModified
    })
  }

  checkAlarmClock = () => {
    if(this.state.alarmTime === 'undefined' || !this.state.alarmTime) {
      this.alarmMessage = "Please set your alarm.";
    } else {
      this.alarmMessage = "Your alarm is set for " + this.state.alarmTime + ".";
      if(this.state.currentTime === this.state.alarmTime) {
        alert("its time!");
      } else {
        console.log("not yet");
      }
    }
  }

  render() {
    return (
      <div>
        <h1>React Alarm Clock</h1>
        <h2>It is {this.state.currentTime}.
        </h2>
        <h2>{this.alarmMessage}
        </h2>
        <form>
          <input type="time" onChange={this.setAlarmTime}></input>
        </form>
      </div>
    );
  }
}
