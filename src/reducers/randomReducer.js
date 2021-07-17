function randomReducer(state = { duh: "" }, action) {
  console.log('action from reducer latest data', action)
  switch (action.type) {
    case "@@kepler.gl/MOUSE_MOVE":
      console.log('MOUSE MOUSE MOUSE')
      return {
        ...state,
        duh: 'i moved'
      };
    case "@@kepler.gl/SELECTION_CHANGE":
      console.log('SELECTION_CHANGE')
      return {
        ...state,
        change: 'i changed'
      };  
    default:
      return state;
  }
}

export default randomReducer;
