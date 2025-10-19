import { getReport } from "./apiCall.js"
import { elements } from "./elements.js"
import { hydrate, toggleErrorDisplay } from "./hydrator.js"
import "./style.css"

let isATest = ()=> false

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
elements.errorOk.addEventListener( "click", ()=> {
	toggleErrorDisplay(elements)
})

