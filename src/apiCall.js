import testData from "./assets/weatherRefData.json"

let weatherRequestUrl = (query) => `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`
	+ query
	+ `?unitGroup=us&key=GKRUZWJ6T7MMYA9ZMP78HA9DL&contentType=json`

export async function getReport (query, testRun = false) {
	let response
	let json
	try {
		if (!testRun) {
			response = await fetch(weatherRequestUrl(query))
		}
		json = testRun? testData : response.json()
		return {
			currentConditions: {
				icon: json.currentConditions.icon,
				temp: json.currentConditions.temp,
				tempmax: json.days[0].tempmax,
				tempmin: json.days[0].tempmin,
				conditions: json.currentConditions.conditions,
				humidity: json.currentConditions.humidity,
			},
			days: [
				{
					temp: json.days[1].temp,
					icon: json.days[1].icon
				},
				{
					temp: json.days[2].temp,
					icon: json.days[2].icon
				}
			]	
		}
	} catch (e) {
		console.log("response:")
		console.log(response)
		console.log("json:")
		console.log(json)
		console.log(json.days[0].temp)
		console.log(json.days[1].temp)
		console.log("error: ")
		throw new Error(e)
	}

}



