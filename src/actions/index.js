import axios from 'axios'
import { processCsvData, getFieldsFromData } from 'kepler.gl/processors';

export function getLtngData(hour, link){
	return async function(dispatch){
		try{
			const data = await axios.get('https://gbcc-lightning-data.s3.us-east-2.amazonaws.com/fullDatacsv24.csv')
			// console.log('data', data)
			const formattedData = data && data.data ? processCsvData(data.data) : null
			// console.log('i am going to get redshift data someday')
			// const data = await requestRedshift('onemonth_erc_percentiles')
	
			dispatch({
        type: `LTNG_DATA${hour}`,
        data: formattedData
      })
		}
		catch(e){
			console.log('selected data error', e)
		}

	}
}

export function getLtngDataSelectedHr(hour){
	return async function(dispatch){
		try{
			if(hour){
				
				const data = await axios.get(`https://gbcc-lightning-data.s3.us-east-2.amazonaws.com/fullDatacsv${hour}conus.csv`)
				// console.log('data', data)
				const formattedData = data && data.data ? processCsvData(data.data) : null
				// console.log('i am going to get redshift data someday')
				// const data = await requestRedshift('onemonth_erc_percentiles')
		
				dispatch({
	        type: `LTNG_DATA`,
	        data: formattedData
	      })
			}
		}
		catch(e){
			console.log('selected data error', e)
		}

	}
}

export function setSelectedHours(hour){
	return async function(dispatch){
		try{
			// const data = await axios.get(`https://gbcc-lightning-data.s3.us-east-2.amazonaws.com/fullDatacsv${hour}conus.csv`)
			// console.log('data', data)
			// const formattedData = data && data.data ? processCsvData(data.data) : null
			// console.log('i am going to get redshift data someday')
			// const data = await requestRedshift('onemonth_erc_percentiles')
			console.log('in this actions')
	
			dispatch({
        type: `SET_DISPLAY_HR`,
        data: hour
      })
		}
		catch(e){
			console.log('selected data error', e)
		}

	}
}

