import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

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
