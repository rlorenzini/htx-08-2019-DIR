import React, { Component } from 'react';

//=============COMPONENT IMPORTS=======================
import Header from './Header';

//this.props.children is where the components are displayed

export default class BaseLayout extends Component {
  render() {
    // console.log(this)
    return (
      <div>
        <Header />
        <p>this.props.child is being loaded below this</p>
        {this.props.children}

      </div>

    )
  }
}
