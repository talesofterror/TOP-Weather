import {format} from "date-fns"

export function hydrate (elements, report, promiseCatch = undefined) {
	console.log(report.hasOwnProperty("currentConditions"))
	if (report.hasOwnProperty("currentConditions")) {

		// present
		let presentDate = report.currentConditions.datetime ? new Date(report.currentConditions.datetime * 1000) : new Date()
		elements.present.date.textContent = format(presentDate, "MMMM do, yyyy")
		elements.present.location.textContent = report.currentConditions.location
		elements.present.icon.append(getIcon(elements.present.icon, report.currentConditions.icon))
		elements.present.temp.textContent = report.currentConditions.temp
		elements.present.tempmax.textContent = report.currentConditions.tempmax
		elements.present.tempmin.textContent = report.currentConditions.tempmin
		elements.present.conditions.textContent = report.currentConditions.conditions
		elements.present.humidity.textContent = report.currentConditions.humidity

		// future
		let futureDate1 = report.days[0].datetime ? new Date(report.days[0].datetime) : new Date()
		elements.future[0].header.textContent = format(futureDate1, "MMMM do, yyyy")
		elements.future[0].icon.append(getIcon(elements.future[0].icon, report.days[0].icon))
		elements.future[0].temp.textContent = report.days[0].temp
		let futureDate2 = report.days[0].datetime ? new Date(report.days[1].datetime) : new Date()
		elements.future[1].header.textContent = format(futureDate2, "MMMM do, yyyy")
		elements.future[1].icon.append(getIcon(elements.future[1].icon, report.days[1].icon))
		elements.future[1].temp.textContent = report.days[1].temp
	} else {
		return
	}

	function getIcon (target, iconString) {
		target.children[0].remove()
		let presentIcon = document.createElement("img")
		import(`./assets/vcrossingIcons/${iconString}.svg`)
			.then( (s) => presentIcon.src = s.default )
		return presentIcon
	}

}

export function toggleErrorDisplay (elements) {
	elements.errorMessage.classList.toggle("display-none")
	elements.container.classList.toggle("blur")
	elements.inputLocation.focus()
}
