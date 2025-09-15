export function hydrate (elements, report) {

	// present
	elements.present.icon.textContent = report.currentConditions.icon
	elements.present.temp.textContent = report.currentConditions.temp
	elements.present.tempmax.textContent = report.currentConditions.tempmax
	elements.present.tempmin.textContent = report.currentConditions.tempmin
	elements.present.conditions.textContent = report.currentConditions.conditions
	elements.present.humidity.textContent = report.currentConditions.humidity

	// future
	elements.future[0].icon.textContent = report.days[0].icon
	elements.future[0].temp.textContent = report.days[0].temp
	elements.future[1].icon.textContent = report.days[1].icon
	elements.future[1].temp.textContent = report.days[1].temp
}
