import { getReport } from "./apiCall.js"
import { elements } from "./elements.js"
import { hydrate } from "./hydrator.js"
import "./style.css"

let testToggle = ()=> false

hydrate(elements, await getReport("19119", testToggle()))

elements.form.addEventListener("submit", async (e)=> {
	e.preventDefault()
	hydrate(elements, await getReport(document.getElementById("input-location").value, testToggle()))
})

