import React, { Component } from 'react';
import Clock from '../clockComponents/Clock';
import Timer from '../clockComponents/Timer';

class TimeTracking extends Component {

  render(){
    return(
      <div>
      <Clock />
      <div />
      <Timer />
      </div>
    )
  }
}

export default TimeTracking;
