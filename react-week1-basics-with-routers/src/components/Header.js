import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

//Header uses the NavLink to pass the information to the index.js and track pages.
//Just like with the backend, you are telling the NavLink (anchor) where to go
//(think route, path, or action). The index.js is similar to what the backend used
//to do; it reads the path and responds with a component. The backend would
//get an action and respond by rendering a new page.

class Header extends Component {
  render(){
    return (
      <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/bookStore'>BookStore</NavLink>
      <NavLink to='/timeTracking'>TimeTracking</NavLink>
      </div>
  )};
}

export default Header;
