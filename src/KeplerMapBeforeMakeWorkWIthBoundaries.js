import React, { useEffect, useState } from "react";
// import KeplerGl from 'kepler.gl'
import { connect, useSelector, useDispatch } from 'react-redux'
import { getLatestData, getRedshiftDataMonthly, getRedshiftDataFireSeason } from './actions' 
import {addDataToMap, inputMapStyle, wrapTo, removeLayer, removeFilter, removeDataset } from 'kepler.gl/actions';
import { processGeojson } from 'kepler.gl/processors';
import dispatchJson from './layers/dispatchJsonExport'

import {
  MapLegendPanelFactory,
  LoadDataModalFactory,
	MapPopoverFactory,
	TimeRangeSliderFactory,
  injectComponents,
	TimeWidgetFactory,
	SidePanelFactory,
	BottomWidgetFactory
} from 'kepler.gl/components';
// import {addDataToMap, inputMapStyle, wrapTo } from 'localKepler/actions';
import { config, singleFireSeason, filterSettings, dispatchConfig, dispatchBoundaryConfig } from './configs/pointLayerConfigs'
// import CustomLegend from './components/CustomLegend'
import CustomLegendFactory from './factories/CustomLegendFactory'
import CustomLoadDataModalFactory from './factories/CustomModalFactory'
import CustomPopoverFactory from './factories/CustomPopoverFactory1'
import CustomTimeSliderFactory from './factories/CustomTimeSliderFactory'
import ExtraCustomTimeWidgetFactory from './factories/ExtraCustomTimeWidgetFactory'
import CustomSidePanelFactory from './factories/CustomSidePanelFactory'


// console.log('remove layer action', removeLayer)
// console.log('add data action', addDataToMap)

// const myCustomLegendFactory = () => CustomLegend;

const mapStylesz = [
    {
      id: 'custom1',
      label: 'custom1',
      // url: 'mapbox://styles/mapbox/navigation-guidance-day-v4',
      url: 'mapbox://styles/nanhosen/ckcxziwe017vi1imsnzt1aucp',
      // url: 'https://api.mapbox.com/styles/v1/nanhosen/ckcxziwe017vi1imsnzt1aucp.html?fresh=true&title=copy&access_token=pk.eyJ1IjoibmFuaG9zZW4iLCJhIjoiY2ppZGExdDZsMDloNzN3cGVoMjZ0NHR5YyJ9.RYsPZGmajXULk-WtqvBNpQ'
      // layerGroups: [] // DEFAULT_LAYER_GROUPS
    }
  ]; 
const KeplerGl = injectComponents([
	  [MapLegendPanelFactory, CustomLegendFactory],
	  [LoadDataModalFactory, CustomLoadDataModalFactory],
	  [MapPopoverFactory, CustomPopoverFactory],
	  // [TimeRangeSliderFactory, CustomTimeSliderFactory],
		[TimeWidgetFactory, ExtraCustomTimeWidgetFactory],
		[SidePanelFactory, CustomSidePanelFactory]

	]);
export const KeplerMap = ({ width, height }) => {
	// console.log('width of kepler', width)
	const dataState = useSelector ( state => state)
	const redshiftData = useSelector ( state => state.redshiftData)
	// const [665', Set665'] = useState()
	useEffect(() => {
		// console.log('dataState', dataState)
		if(dataState.keplerGl && dataState.keplerGl['kepler-map'] && dataState.keplerGl['kepler-map'].visState.layers){
			// console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!', dataState.keplerGl['kepler-map'].visState, dataState.keplerGl['kepler-map'].visState.layers)
			// dataState.keplerGl['kepler-map'].visState.layers.map(curr => console.log('curr ha', curr.config.isVisible,curr.config.dataId, curr))
		}
		// console.log('a state changed here is the new state', dataState)
		// console.log('kepler gl state', dataState)
	}, [dataState])
	const dispatch = useDispatch()

	useEffect(() => {
		// const wrapToMap1 = wrapTo('kepler-map')
		// dispatch(wrapToMap1(addDataToMap(dispatchJson)))
		// datasets: processGeojson(dispatchJson)
		(async() => {
			console.log('dispatchJson processed', processGeojson(dispatchJson))
			if(dispatchJson){
				const addObj = {
					datasets: {
						info: {
							label: 'Sample Scenegraph Ducks',
							id: 'dispatch_boundaries'
						},
						data: processGeojson(dispatchJson)
					},
					options: {
						centerMap: false,
						keepExistingConfig: true
					},
					config: dispatchBoundaryConfig
				}
				console.log('dispatch json i s here', processGeojson(dispatchJson))
				await dispatch(wrapTo(
					'kepler-map',
					addDataToMap(addObj)
				))
				console.log('data added to map')
			}
			else{
				console.log('no jsondata')
			}
		})()
	},[])




  useEffect(() => {
    // console.log(' state changed', dataState)
		if (dataState.keplerGl['kepler-map'] && dataState.keplerGl['kepler-map']['visState']) {
			// console.log('finding the laryzz', dataState.keplerGl['kepler-map']['visState'], dataState.keplerGl['kepler-map']['visState']['layers'], dataState.keplerGl['kepler-map']['visState']['layers'].length)
			const layers = dataState.keplerGl['kepler-map']['visState']['layers']
			if (layers.length > 0){
				const layerAr = layers.map(curr=>curr.id)
				// Set665'(layerAr)
			}

		}
	}, [dataState.keplerGl['kepler-map']])
  // useEffect(() => {
  //   // console.log('using the effectt')
  //   dispatch(getLatestData())
  // },[])
  // useEffect(() => {
  //   // console.log('getting historical data effect')
  //   dispatch(getRedshiftDataMonthly())
  // },[])
  // useEffect(() => {
  //   console.log('getting historical data effect')
  //   dispatch(getRedshiftDataFireSeason())
  // },[])
	// export const filterSettings = {
	// 	value: [1619229581000, 1619308800000],
	// 	animationWindow: 'free',
	// 	interval: 8640000,
	// 	dataId: ['historical_fire_season'],
	// 	name: ['date'],
	// 	type: 'timeRange',
	// 	// step: 5,
	// 	enlarged: true,
	// 	plotType: 'lineChart'
	// }
	const dataInOrder = async(data, dates, idx, removeId) => {
		// const wrapToMap = wrapTo('keplerGl')
		const wrapToMap = wrapTo('kepler-map')
		var secondMs = new Date(dates.date2).getTime()
		// console.log('adfasdfasdfas!!!!!!!!!!!!!!!!!!!!!!&*&*&*', secondMs, dates, dates[1], secondMs - 86400000, secondMs)
		filterSettings.value = [secondMs - (2 * 86400000), secondMs - 86400000]
		const addObj = {
			datasets: {
				info: {
					label: 'historical fire_season data',
					id: 'historical_fire_season'
				},
				data: data
			},
			options: {
				centerMap: false,
				keepExistingConfig: true
			},
			config: {
				// mapState: {
				// 	zoom:4,
				// 	latitude: 41.80632413817374,
				// 	longitude: -109.04078750000
				// },
				// mapStyle: 'nanbette',
				visState: {
					// filters: [],
					// layerBlending: "normal",
					layers: [singleFireSeason],
					filters: [filterSettings]
				}
			}
		}
		// console.log(addObj)
		var isNum = !(idx + 1) ? false : true
		// console.log('isNum', isNum)
		if(isNum === true){
			// console.log('removing layer first', removeId)
			await dispatch(wrapToMap(removeFilter(idx)))
			await dispatch(wrapToMap(removeLayer(idx)))
			await dispatch(wrapToMap(removeDataset(removeId)))
			console.log('layer removed now adding data')
			// addObj.config.visState.filters[0]
			await dispatch (addDataToMap(addObj))
			console.log('data added')

		}
		else{
			// console.log('i dont think thereare any layerds im ging to just add data')
			await dispatch(addDataToMap(addObj))
		}
		return 'hi'

	}
  useEffect(()=>{
		// console.log('redshiftData state changed fire season')
		
		// console.log('redshiftData state changed fire season', dataState.keplerGl['kepler-map'].visState.layers)
		if (redshiftData && redshiftData.fire_season && redshiftData.fire_season.data){
			if (dataState.keplerGl && dataState.keplerGl['kepler-map'] && dataState.keplerGl['kepler-map'].visState.layers, dataState.keplerGl['kepler-map'].visState.layers.length > 0 ) {
				if (dataState.keplerGl['kepler-map'].visState.layers.length > 0 ){
					console.log("need to remove this layer,", dataState.keplerGl['kepler-map'].visState.layers[0].id)
					const removeId = dataState.keplerGl['kepler-map'].visState.layers[0].id
					dataInOrder(redshiftData.fire_season.data, redshiftData.fire_season.dates, 0, removeId)
				}
				// console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!', dataState.keplerGl['kepler-map'].visState, dataState.keplerGl['kepler-map'].visState.layers)
				// dataState.keplerGl['kepler-map'].visState.layers.map(curr => console.log('curr ha', curr.config.isVisible,curr.config.dataId, curr))
				console.log('these are the layers on the map before adding layers', dataState.keplerGl['kepler-map'].visState.layers)
			}
			else{

				dataInOrder(redshiftData.fire_season.data, redshiftData.fire_season.dates)
			}
			// if(665'){

			// 	dispatch(removeLayer(layerIdArray[0]))
			// }
			// dispatch(addDataToMap({
			// 	datasets: {
			//   	info: {
			//     	label: 'historical fire_season data',
			//     	id: 'historical_fire_season'
			//    	},
			//   	data: redshiftData.fire_season
			// 	},
			// 	options:{
			// 		centerMap: false,
			// 		keepExistingConfig:true
			// 	},
			// 	config: {
			// 		// mapState: {
			// 		// 	zoom:4,
			// 		// 	latitude: 41.80632413817374,
			// 		// 	longitude: -109.04078750000
			// 		// },
      //     // mapStyle: 'nanbette',
      //     visState: {
      //       // filters: [],
      //       // layerBlending: "normal",
      //       layers: [singleFireSeason],
      //       filters: [filterSettings]
      //     }
      // 	}
			// }))
		}
	}, [redshiftData.fire_season])
	return (
		<KeplerGl
			id='kepler-map'
			width={width}
			height={height}
			mapboxApiAccessToken={`pk.eyJ1IjoicnRpcHBldHRzIiwiYSI6ImNra3liYXd2bzAyNnYybnBhYmxyeGI0cDMifQ.pWTRm3Z4hur3TLuv9Da25g`}
			mapStyles = {mapStylesz}
		/>
	)
}


