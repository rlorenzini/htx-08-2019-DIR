import React, { Component } from 'react';

class AddComments extends Component {
  constructor(){
    super()
    this.state = {
      comment: '',
      user: ''
    }
  };

  handleChange = (e) => {
    //the event is triggered
    //we check for the name and value of the target element which triggered the event
    //set state as [name] : value, where name = comment
    this.setState({
      [e.target.name] : e.target.value
    })
  };

  handleAddComment = (e) => {
    //create variables for our states, which are updated as the user inputs text
    const comments = this.state.comment
    const users = this.state.user
    //using stringify, we set our Object key as NewComment and Object value as an object
    //this object holds the data we want to pass (user and comment)
    localStorage.setItem('NewComment', JSON.stringify({user: users, comment: comments}))
    //need preventDefault if using a form; not needed for a button w/o a form 
    e.preventDefault();
  };


  render(){
    return(
      <div>
        <input onChange={this.handleChange} type='text' name='user' placeholder='user' />
        <input onChange={this.handleChange} type='text' name='comment' placeholder='add comment' />
        <button onClick={this.handleAddComment}>Add Comment</button>
      </div>
    )
  }
}

export default AddComments;
