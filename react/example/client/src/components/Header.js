import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
//if you use states or props, must use class component
//stateless or "dumb" components are functions

export default class Header extends Component {
  render() {
    //can do functional logic here as JSX
    //XML goes into return
    //no functional logic inside of return
    return (
      <div>
        <NavLink to='/'>Counter</NavLink>
        <NavLink to='/clock'>Clock</NavLink>
        <NavLink to ='/alarm'>Alarm</NavLink>
      </div>
    )
  }
}
