import React, { useEffect, useState } from "react";
import axios from 'axios'
// import KeplerGl from 'kepler.gl'
import { connect, useSelector, useDispatch } from 'react-redux'
import {
  injectComponents,
} from 'kepler.gl/components';
import { getLtngData } from './actions/index.js'
// import { getLatestData, getRedshiftDataMonthly, getRedshiftDataFireSeason } from './actions' 
// import {addDataToMap, inputMapStyle, wrapTo, removeLayer, removeFilter, removeDataset } from 'kepler.gl/actions';
import {addDataToMap,  wrapTo } from 'kepler.gl/actions';
import { processGeojson } from 'kepler.gl/processors';
// import gaccBoundaries from './layers/gaccBoundariesExport'

import { fullGaccBoundaryConfig, fullConfigObj} from './configs/pointLayerConfigs'


// console.log('remove layer action', removeLayer)
// console.log('add data action', addDataToMap)

// const myCustomLegendFactory = () => CustomLegend;

const makeFireSeasonLayerConfig = (rawConfig, model) => {
	const origConfig = rawConfig.config
	const newConfig = { ...origConfig, label: `ERC Percentile Rank: Fuel Model ${model}`}
	return { ...rawConfig, config:newConfig}

}

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
	]);
const KeplerMap = ({ width, height }) => {

	// console.log('width of kepler', width)
	const dataState = useSelector ( state => state)

	const dispatch = useDispatch()

	useEffect(() =>{
		(async() => {
			await dispatch(getLtngData(24))
		})()
	},[])

	useEffect(() => {
		(async() => {if(dataState.lightningData.hr24){
								const addObj = {
									datasets: {
										info: {
											label: '24 Hour Lightning Data',
											id: '24HrLtng'
										},
										data: dataState.lightningData.hr24
									},
									options: {
										centerMap: false,
										keepExistingConfig: true
									},
									config: fullConfigObj
									// config: {
								 //    "visState": {
								 //      "filters": [],
								 //      "layers": [ltng24HrConfig]
								 //    }
								 //  }
								}
								// console.log('dispatch json i s here', processGeojson(dispatchJson))
								await dispatch(wrapTo(
									'kepler-map',
									addDataToMap(addObj)
								))
								console.log('data added to map')
							}})()
	},[dataState.lightningData])

	useEffect(() => {
		// const wrapToMap1 = wrapTo('kepler-map')
		// dispatch(wrapToMap1(addDataToMap(dispatchJson)))
		// datasets: processGeojson(dispatchJson)
		(async() => {
			const gaccBoundariesRemote = await axios.get(
				'https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/National_GACC_Current/FeatureServer/0/query?where=1%3D1&outFields=*&&geometryType=esriGeometryPolyline&outSR=4326&f=geojson')
				// 'https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/National_PSA_Current/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json&&geometryType=esriGeometryPolyline')
			   // https://services3.arcgis.com/T4QMspbfLg3qTGWY/ArcGIS/rest/services/National_GACC_Current/FeatureServer/0?f=pjson
			console.log('gaccBoundariesRemote', gaccBoundariesRemote)

			// if(gaccBoundaries){
			if(gaccBoundariesRemote && gaccBoundariesRemote.data && gaccBoundariesRemote.status == 200){
				console.log('gacc stuff here ogoing  to pricess')
				const addObj = {
					datasets: {
						info: {
							label: 'Sample Scenegraph Ducks',
							id: 'gacc_boundaries'
						},
						data: processGeojson(gaccBoundariesRemote.data)
					},
					options: {
						centerMap: false,
						keepExistingConfig: true
					},
					config: fullGaccBoundaryConfig
				}
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

	// useEffect(() => {
	// 	console.log('dataState', dataState)
	// },[dataState])

	// useEffect(() => {
	// 	(async() => {
	// 		console.log('dispatchJson processed', processGeojson(dispatchJson))
	// 		if(dispatchJson){
	// 			const addObj = {
	// 				datasets: {
	// 					info: {
	// 						label: 'Sample Scenegraph Ducks',
	// 						id: 'dispatch_boundaries'
	// 					},
	// 					data: processGeojson(dispatchJson)
	// 				},
	// 				options: {
	// 					centerMap: false,
	// 					keepExistingConfig: true
	// 				},
	// 				config: dispatchBoundaryConfig
	// 			}
	// 			console.log('dispatch json i s here', processGeojson(dispatchJson))
	// 			await dispatch(wrapTo(
	// 				'kepler-map',
	// 				addDataToMap(addObj)
	// 			))
	// 			console.log('data added to map')
	// 		}
	// 		else{
	// 			console.log('no jsondata')
	// 		}
	// 	})()
	// },[])



  
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

export default KeplerMap
