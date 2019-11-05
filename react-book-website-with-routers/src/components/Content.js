import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Content extends Component {
  render(){
    return (
      <div>
        {this.props.content}
      </div>
  )};
}

export default withRouter(Content);
