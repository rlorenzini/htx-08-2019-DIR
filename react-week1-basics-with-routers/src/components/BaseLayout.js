import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

//BaseLayout is passing the history to Header and the children to Content

//WHY CLASS COMPONENT VS FUNCTION?
//WE ARE USING STATE, SO WE MUST USE A COMPONENT!!!!!!!!
//History, children, this, props... it cannot be used/accessed/passed
//in a stateless component (aka function)
//As stated in index.js, CHILDREN is a prop which is the current COMPONENT being
//used by the Route.

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
