import React, { Component } from 'react';

class LikeCounter extends Component {
  constructor(){
    super()
    this.state = {
      counter: 0
    }
  };

  handleLikeCounter = (e) => {
    //every click iterates 1 to the counter
    //set state with each click
    this.setState({
      counter: this.state.counter+1
    })
    let numberOfLikes = this.state.counter
    //pass number of likes into storage
    localStorage.setItem('NumberOfLikes', numberOfLikes)
    //need preventDefault if using a form; not needed for a button w/o a form 
    e.preventDefault();
  };


  render(){
    return(
      <div>
      <button onClick={this.handleLikeCounter}>Like</button>
      </div>
    )
  }
}

export default LikeCounter;
