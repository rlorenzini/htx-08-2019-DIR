//create an initialState to initialize your redux state

const initialState = {
  count: 0
}

//does not need to be assigned a variable name and can be export default only

//setting state to initialState and calling actions
export default (state = initialState, action) => {
  //using a switch: case: instead of if statement, both work
  switch (action.type) {
    //the action means something is trying to contact redux
    //if the action type is INC_NUM, do the following
    case 'INC_NUM':
      return {
        ...state,
        count: state.count + 1
      }
    default: return state
  }
  //must return state at the end to initialize your reducer
  //otherwise, the initialState will not load on your page
}
