import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
// import { connectRouter } from 'connected-react-router'
import { connectRouter } from 'connected-react-router'
import customizedKeplerGlReducer from './reducers/customKeplerReducer'
import { enhanceReduxMiddleware } from 'kepler.gl/middleware'
import thunk from 'redux-thunk'
// import latestDataReducer from './reducers/getLatestDataReducer'
// import redshiftDataReducer from './reducers/getRedshiftDataReducer'
import lightningDataReducer from './reducers/lightningDataReducer'
// import randomReducer from './reducers/randomReducer'

import  appReducer  from './reducers/'

const initialState = {}
console.log('appReducer', appReducer)

export const history = createBrowserHistory()

// const reducers = combineReducers({
const reducers = (history) => combineReducers({

	router: connectRouter(history),
	keplerGl: customizedKeplerGlReducer,
	app: appReducer,
	// latestData: latestDataReducer,
	// redshiftData: redshiftDataReducer,
	lightningData: lightningDataReducer
	// randome: randomReducer
})

let middlewares = [ thunk ]

const middlewareEnhancer = enhanceReduxMiddleware(middlewares)
const enhancers = [applyMiddleware(...middlewareEnhancer)]

export default createStore(
	// reducers,
	reducers(history),
	initialState,
	compose(...enhancers)
)

// const customizedKeplerGlReducer = keplerGlReducer
//   .initialState({
//   	mapStyle: {
//   		styleType: 'nanbette',
//   	},
//     uiState: {
//       // hide side panel to disallow user customize the map
//       readOnly: false,
//       currentModal: null,
//       // customize which map control button to show
//       mapControls: {
//         visibleLayers: {
//           show: true
//         },
//         mapLegend: {
//           show: true,
//           active: true
//         },
//         toggle3d: {
//           show: false
//         },
//         splitMap: {
//           show: false
//         }
//       }
//     },
//     visState: {
//       loaders: [], // Add additional loaders.gl loaders here
//       loadOptions: {}
//       // interactionConfig: {tooltip:{enabled:true}} // Add additional loaders.gl loader options here
//     }
//   })
