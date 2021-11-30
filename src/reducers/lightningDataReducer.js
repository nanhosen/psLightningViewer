function lightningDataReducer(state = { }, action) {
  // console.log('action from reducer redshift data', action)
  switch (action.type) {
    case "LTNG_DATA":
    // console.log('hi')
      return {
        ...state,
        ...action.data
      };

    default:
      return state;
  }
}

export default lightningDataReducer;
// 