
export const elements = {
	container: document.getElementById("container"),
	form: document.getElementById("query"),
	inputLocation: document.getElementById("input-location"),
	errorMessage: document.getElementById("error-message"),
	errorMessageText: document.getElementById("error-message-text"),
	errorOk: document.getElementById("error-ok"),

	present: {
		date: document.getElementById("present-date"),
		location: document.getElementById("present-location"),
		icon: document.getElementById("present-icon"),
		conditions: document.getElementById("present-conditions"),
		temp: document.getElementById("present-temp"),
		tempmin: document.getElementById("present-tempmin"),
		tempmax: document.getElementById("present-tempmax"),
		humidity: document.getElementById("present-humidity")
	},
	future: [
		{
			header: document.getElementById("future-1-header"),
			icon: document.getElementById("future-1-icon"),
			temp: document.getElementById("future-1-temp")
		},
		{
			header: document.getElementById("future-2-header"),
			icon: document.getElementById("future-2-icon"),
			temp: document.getElementById("future-2-temp")
		}
	]
}
