import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//Content is displaying the Component passed from the Router via index.js 

class Content extends Component {
  render(){
    return (
      <div>
        {this.props.content}
      </div>
  )};
}

export default withRouter(Content);
