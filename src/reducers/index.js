import {handleActions} from 'redux-actions';
import {ActionTypes} from 'kepler.gl/actions';
// export const appReducer = (state = {
//   test1: false,
//   test2: true
// }, action) => {
//   return state;
// }

// export const appReducer = (state = {}, action) => {
//   return {
//     ...state,
//     displayHr: action.payload.displayHr
//   };
// }

function appReducer(state = { }, action) {
  console.log('action from reducer redshift data', action)
  switch (action.type) {
    case "SET_DISPLAY_HR":
    // console.log('hi')
      return {
        ...state,
        displayHr: action.data
      };

    default:
      return state;
  }
}

export default appReducer;
// 
// console.log('action types', JSON.stringify(ActionTypes))


// export const appReducer = handleActions({
//   // listen on kepler.gl map update action to store a copy of viewport in app state
//   [ActionTypes.SET_FILTER_ANIMATION_TIME]: function (state, action) {
//     // console.log('SET_FILTER_ANIMATION_TIME action action', state, action)
//     // // console.log('click action payload',  action.payload.info)
//     // var station = null
//     // if (action.payload.info && action.payload.info.object && action.payload.info.object.data) {
//     //   // console.log('there is a station here', Object.keys(action.payload.info))
//     //   // console.log('there is a station here',action.payload.info.object.data[0])
//     //   const stn = parseFloat(action.payload.info.object.data[0])
//     //   if (stn && isNaN(stn) == false) {
//     //     localStorage.setItem('stn', stn)
//     //     station = stn
//     //     // window.open('/Chart')
//     //   }

//     // }
//     // return {
//     //   ...state,
//     //   data: action.payload.info,
//     //   station,
//     //   clicked: true
//     // }
//   },

//   [ActionTypes.LAYER_CLICK]: function (state, action){
//     console.log('click action action',  action, state)
//     // console.log('click action payload',  action.payload.info)
//     var station = null
//     var layerClickNum = state.layerClickNum ? state.layerClickNum + 1: 1
//     if(action.payload.info && action.payload.info.object && action.payload.info.object.data ){
//     	// console.log('there is a station here', Object.keys(action.payload.info))
//     	// console.log('there is a station here',action.payload.info.object.data[0])
//       const stn = parseFloat(action.payload.info.object.data[0])
//       if(stn && isNaN(stn) == false){
//         localStorage.setItem('stn', stn)
//         station = stn
//         // window.open('/Chart')
//       }

//     }
//     return {
//       ...state,
//       data: action.payload.info,
//       station,
//       clicked:true,
//       layerClickNum
//     }
//   },
//   [ActionTypes.SELECTION_CHANGE]: function (state, action){
//     console.log('SELECTION_CHANGE action action',  action)
//     // console.log('click action payload',  action.payload.info)
//     // var station = null
//     // if(action.payload.info && action.payload.info.object && action.payload.info.object.data ){
//     // 	// console.log('there is a station here', Object.keys(action.payload.info))
//     // 	// console.log('there is a station here',action.payload.info.object.data[0])
//     //   const stn = parseFloat(action.payload.info.object.data[0])
//     //   if(stn && isNaN(stn) == false){
//     //     localStorage.setItem('stn', stn)
//     //     station = stn
//     //     window.open('/Chart')
//     //   }

//     // }
//     return {
//       ...state,
//       // data: action.payload.info,
//       // station
//     }
//   },
//   [ActionTypes.TOGGLE_MODAL]: function (state, action){
//     console.log('TOGGLE_MODAL action action',  action)
//     // console.log('click action payload',  action.payload.info)
//     // var station = null
//     // if(action.payload.info && action.payload.info.object && action.payload.info.object.data ){
//     // 	// console.log('there is a station here', Object.keys(action.payload.info))
//     // 	// console.log('there is a station here',action.payload.info.object.data[0])
//     //   const stn = parseFloat(action.payload.info.object.data[0])
//     //   if(stn && isNaN(stn) == false){
//     //     localStorage.setItem('stn', stn)
//     //     station = stn
//     //     window.open('/Chart')
//     //   }

//     // }
//     return {
//       ...state,
//       // data: action.payload.info,
//       // station
//     }
//   },
//   'DATES_IN_DATA': function (state, action) {
//     return {
//       ...state,
//       monthsInData: action.data
//     }
//   },
//   'CLOSE_POPOVER_CLICK': function (state, action) {
//     // console.log('closing popover click action thing thing', action)
//     return {
//       ...state,
//       closePopover: action.data
//     }
//   },
//   'DATA_LOAD_STATUS':function(state,action){
//     return{
//       ...state,
//       dataStatus:action.data
//     }
//   }
// }, {});
