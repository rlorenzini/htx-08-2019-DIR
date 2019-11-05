import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

//BaseLayout is passing the history to Header and the children to Content

class BaseLayout extends Component {
  render(){
    return (
      <div>
        <Header history={this.props.history}/>
        <Content content={this.props.children}/>
        <Footer />
      </div>
  )};
}

export default BaseLayout;
