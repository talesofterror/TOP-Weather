import { getReport } from "./apiCall.js"
import { elements } from "./elements.js"
import { hydrate } from "./hydrator.js"
import "./style.css"

let isATest = ()=> true

hydrate(elements, await getReport("ffffff", isATest()))

elements.form.addEventListener("submit", async (e)=> {
	e.preventDefault()
	hydrate(elements, await getReport(document.getElementById("input-location").value, isATest()))
})
document.addEventListener("keyup", (e) => {
	switch (e.key) {
		case "/": 
			elements.inputLocation.focus()
			break;
		case "Escape": 
			document.activeElement.blur()
			break
		default:
			return
	}
})

