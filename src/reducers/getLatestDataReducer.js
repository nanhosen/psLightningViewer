function latestDataReducer(state = { data: "" }, action) {
  // console.log('action from reducer latest data', action)
  switch (action.type) {
    case "GET_LATEST_DATA":
    // console.log('hi')
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
}

export default latestDataReducer;
