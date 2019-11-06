import React, { Component } from 'react';

class BookStore extends Component {
  constructor(){
    super()
    this.state = {
      id: ''
    }
  }
  
  //handleTextBoxChange sets the input value as a state
  //name === id since <input name="id".....
  //value === the value of the input box during the submit event
  handleTextBoxChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  //setting our browser history with history.push
  //history is similar to the current URL and can be called and changed

  //setting an exact route for our app to load (must match with index.js format)
  //we do e.preventDefault() to prevent our form from refreshing our app
  handleBookSubmit = (e) => {
    this.props.history.push(`/bookStore/${this.state.id}`)
    e.preventDefault();

  }
  render(){
    return(
      <div>
      <form onSubmit={this.handleBookSubmit}>
        This is the book store page.<br></br>
          <input onChange={this.handleTextBoxChange} type="text" name="id" placeholder="Enter book info here"></input>
          <input type="submit" value="Submit" />
      </form>
      </div>
    )
  }
}

export default BookStore;
