
let weatherRequestUrl = (query) => `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`
	+ query
	+ `?unitGroup=us&key=GKRUZWJ6T7MMYA9ZMP78HA9DL&contentType=json`

export async function getReport (query) {
	let response = await fetch(weatherRequestUrl(query))
	return await response.json()
}



