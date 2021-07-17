function lightningDataReducer(state = { }, action) {
  // console.log('action from reducer redshift data', action)
  switch (action.type) {
    case "LTNG_DATA24":
    // console.log('hi')
      return {
        ...state,
        hr24: action.data
      };

    default:
      return state;
  }
}

export default lightningDataReducer;
// 