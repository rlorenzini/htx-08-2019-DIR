import React, { Component } from 'react';

class Lowercase extends Component {
  constructor() {
    super()
  }


  ToLowercase = (props) => {
    const newName = this.props.name.toLowerCase()
    return <h1>{newName}</h1>
  }

  render(){
  return (
    <>{this.ToLowercase()} </>
  )};
}

export default Lowercase;
