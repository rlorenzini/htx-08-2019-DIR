import React, { Component } from 'react';

class CommentList extends Component {
  constructor(props){
    super(props)
    this.state = {
      commentList: [],
      loading: true
    }
  };

  componentDidMount() {
    //once the component is loaded into the virtual DOM
    let array = [];
    console.log("1")
    //run an if statement to check if page is still loading (state.loading)
    if (this.state.loading === true) {
      //set a variable to the object we set in localStorage {user, comment}
      let commentDisplay = JSON.parse((localStorage.getItem('NewComment')))
      console.log("2")
      //push our new object into an empty array
      array.push(commentDisplay)
      //and set that array to our state so we can pass it into our render
      this.setState({
        loading: false,
        commentList: array
      })
    }
  }

  render(){
    //create a loading message which will be replaced
    let commentDisplay = "loading"
    //create an empty array for all of our comments
    let commentArray = []
    //once the page has mounted / "loaded"
    if (!this.state.loading) {
      console.log("3")
      //put our state, which is an array, as a variable []
      commentArray = this.state.commentList
      //map through that array
      commentDisplay = commentArray.map((comment) => {
        //create list elements for each object in the array
        return <li key={comment.user}>{comment.user} : {comment.comment}</li>
      })
    }
    return(
      <div>
        <button onClick={this.getComments}>Get Comments</button>
        <ul>{commentDisplay}</ul>
      </div>
    )
  }
}

export default CommentList;
