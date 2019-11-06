import React, { Component } from 'react';
import Clock from '../clockComponents/Clock';
import Timer from '../clockComponents/Timer';

class TimeTracking extends Component {

  render(){
    return(
      <div>
      This is my clock
      <Clock />
      This is my timer
      <Timer />
      </div>
    )
  }
}

export default TimeTracking;
