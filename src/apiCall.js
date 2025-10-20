import testData from "./assets/weatherRefData.json"
import { elements } from "./elements"
import { hydrate, toggleErrorDisplay } from "./hydrator"

let weatherRequestUrl = (query) => `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`
	+ query
	+ `?unitGroup=us&key=GKRUZWJ6T7MMYA9ZMP78HA9DL&contentType=json&iconsSet=icons2`

let forceError = false

export async function getReport (query, testRun = false, mode = {mode: 'cors'}) {
	let response
	let json
	try {
		if (forceError) {
			throw "nope"
		}
		if (!testRun) {
			response = await fetch(weatherRequestUrl(query), mode)
			console.log("live request (o_o;)")
		}
		json = testRun? testData : await response.json()
		console.log(json)
		return {
			currentConditions: {
				datetime: json.days[0].datetimeEpoch,
				location: json.resolvedAddress,
				icon: json.currentConditions.icon,
				temp: json.currentConditions.temp,
				tempmax: json.days[0].tempmax,
				tempmin: json.days[0].tempmin,
				conditions: json.currentConditions.conditions,
				humidity: json.currentConditions.humidity,
			},
			days: [
				{
					datetime: json.days[2].datetime,
					temp: json.days[2].temp,
					icon: json.days[2].icon
				},
				{
					datetime: json.days[3].datetime,
					temp: json.days[3].temp,
					icon: json.days[3].icon
				}
			]	
		}
	} catch (e) {
		console.log("response:")
		console.log(response)
		console.log("json:")
		console.log(json)
		console.log("error: ")
		toggleErrorDisplay(elements)
		return {}
		// throw new Error(e)
	}

}



