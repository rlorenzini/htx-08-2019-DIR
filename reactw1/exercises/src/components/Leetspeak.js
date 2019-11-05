import React, { Component } from 'react';

class Leetspeak extends Component {
  constructor() {
    super()
  }


  ToLeetspeak = (props) => {
    const newName = this.props.name.toLowerCase()
    const nameArray = newName.split("")
    const leetspeakName = nameArray.map((letter) => {
      if(letter === "a") {
        return '4'
      }
      else if(letter === "b") {
        return '8'
      }
      else if(letter === "e") {
        return '3'
      }
      else if(letter === "f") {
        return 'ph'
      }
      else if(letter === "g") {
        return '6'
      }
      else if(letter === "i") {
        return '1'
      }
      else if(letter === "o") {
        return '0'
      }
      else if(letter === "s") {
        return '5'
      }
      else if(letter === "t") {
        return '7'
      }
      else{
        return letter
      }
    })
    const finalName = leetspeakName.join("").toUpperCase()
    return <h1>{finalName}</h1>
  }

  render(){
  return (
    <>{this.ToLeetspeak()}
    </>
  )};
}

export default Leetspeak;
