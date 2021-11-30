import keplerGlReducer  from 'kepler.gl/reducers'
// var DEFAULT_TIME_FORMAT = 'YYYY-MM-DDTHH:mm:ss.sssZ';
import {DEFAULT_TIME_FORMAT} from 'kepler.gl/constants';
// import {DEFAULT_TIME_FORMAT} from 'kepler.gl/localization';

console.log('default tiem format', DEFAULT_TIME_FORMAT)

const customizedKeplerGlReducer = keplerGlReducer
  .initialState({
  	mapStyle: {
      styleType: 'custom1',
  	},
    uiState: {
      // hide side panel to disallow user customize the map
      // readOnly: false,
      // currentModal: null,
      // customize which map control button to show
      defaultTimeFormat: 'YYYY-MM-DDTHH:mm:ss.sssZ',
      mapControls: {
        visibleLayers: {
          show: true
        },
        mapLegend: {
          show: true,
          active: true
        },
        toggle3d: {
          show: false
        },
        splitMap: {
          show: false
        }
      }
    },
    visState: {
      loaders: [], // Add additional loaders.gl loaders here
      loadOptions: {}
      // interactionConfig: {tooltip:{enabled:true}} // Add additional loaders.gl loader options here
    },
    mapState:{
      zoom:3,
      latitude:49.03984,
      longitude:-120.93763
    }
  })

    .plugin({ //so i think this is actally an action which is interestingw
    // THIS_IS_IN_ALL_CAPS: (state, action) => (
   //    { ...state }
   //  )
    THIS_IS_IN_ALL_CAPS: function(state, action){
      console.log('in this is in all caps', state, action)
      return {...state}
    },
      // UPDATE_MAP_TIME: (state, action) => { //now thinking that need to put his in plugin in store in custom kepler reucer like example in sotre.jst of custom reducer example
      //   //also thinking that i need to do the createAction thing that's in the app.js of the custom reducer file
      //   const newFilterSettings = state.visState.filters
        
      //   const filterSettings = {
      //     value: [1619229581000, 1619308800000],
      //     dataId: ['historical_fire_season'],
      //     name: ['date'],
      //     type: 'timeRange',
      //     step: 1100,
      //     enlarged: false
      //   }
      //   const origState = state
      //   console.log('doing this filter setting action thing', state, action)
      //   if(action.payload){
      //     var endDayMs = action.payload
      //     var beginDayMs = endDayMs - 86400000
      //     newFilterSettings[0].value = [beginDayMs, endDayMs]
      //     console.log('newTImes',[beginDayMs, endDayMs])
      //     console.log('newFilterSettings', newFilterSettings)
      //     const newState = {...origState}
      //     newState.visState.filters = newFilterSettings
      //     console.log('origState', origState)
      //     console.log('newState', newState)
      //   }
      //   return(
      //     {
      //       ...state,
      //       visState:{
      //         ...state.visState,
      //         filters: newFilterSettings
      //       }
      //     }
      //   ) 
      // }
    
  })


export default customizedKeplerGlReducer

// origintal
// 0: 1609913600000
// 1: 1610000000000

// new:
// 1609913600000
// 1: 1610000000000
