import {format} from "date-fns"

export function hydrate (elements, report) {

	// present
	// let presentIcon = document.createElement("img")
	// import(`./assets/vcrossingIcons/${report.currentConditions.icon}.svg`)
	// 	.then( (s) => presentIcon.src = s.default )
	// elements.present.icon.append(presentIcon)
	let presentDate = Date(report.currentConditions.datetime)
	elements.present.header.textContent = format(presentDate, "MMMM do, yyyy")
	elements.present.icon.append(getIcon(report.currentConditions.icon))
	elements.present.temp.textContent = report.currentConditions.temp
	elements.present.tempmax.textContent = report.currentConditions.tempmax
	elements.present.tempmin.textContent = report.currentConditions.tempmin
	elements.present.conditions.textContent = report.currentConditions.conditions
	elements.present.humidity.textContent = report.currentConditions.humidity

	// future
	// elements.future[0].icon.textContent = report.days[0].icon
	let futureDate1 = Date(report.days[0].datetime)
	elements.future[0].header.textContent = format(futureDate1, "MMMM do, yyyy")
	elements.future[0].icon.append(getIcon(report.days[0].icon))
	elements.future[0].temp.textContent = report.days[0].temp
	// elements.future[1].icon.textContent = report.days[1].icon
	let futureDate2 = Date(report.days[1].datetime)
	elements.future[1].header.textContent = format(futureDate2, "MMMM do, yyyy")
	elements.future[1].icon.append(getIcon(report.days[1].icon))
	elements.future[1].temp.textContent = report.days[1].temp

	function getIcon (iconString) {
		let presentIcon = document.createElement("img")
		import(`./assets/vcrossingIcons/${iconString}.svg`)
			.then( (s) => presentIcon.src = s.default )
		return presentIcon
	}

}
