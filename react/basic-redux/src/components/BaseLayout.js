import React, { Component } from 'react';
import { connect } from 'react-redux';

class BaseLayout extends Component {

  //no constructor(){super() this.state={}} is needed to use redux

  render() {
    //deconstructing/assigning variables to make using props easier
    const number = this.props.number
    const incrementNumber = this.props.incrementNumber
    //in this case, there is no reason to set a local state 

    return (
      <div>
        <button onClick={() => incrementNumber()}>Increment Number</button>
        <p>{number}</p>
      </div>
    )
  }
}

//assigning the redux reducer state of count to the local component prop number
const mapStateToProps = (state) => {
  return {
    number: state.count
  }
}

//assigning the redux reducer action of INC_NUM to the local component prop incrementNumber
//incrementNumber acts as a function in this case
const mapDispatchToProps = (dispatch) => {
  return {
    incrementNumber: (number) => dispatch({
      type: 'INC_NUM', number
    })
  }
}

//connect()(Component) tells redux to allow this component to communicate with it
//connect(state, dispatch)(Component)
//state MUST exist inside connect(), even if you only pass connect(null, dispatch)(Component)
//when using redux, do your export default at the end with the connect()(Component)
export default connect(mapStateToProps, mapDispatchToProps)(BaseLayout);
