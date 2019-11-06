import React, { Component } from 'react';

//Content is displaying the Component passed from the Router via index.js
//I passed this.props.children via BaseLayout to Component as content, so now
//we can call this.props.content to display our active component

//WHY DO I SPLIT UP MY COMPONENTS THIS MUCH?
//this gives me more control over debugging, testing, styling, and changing content 

class Content extends Component {
  render(){
    return (
      <div>
        {this.props.content}
      </div>
  )};
}

export default Content;
